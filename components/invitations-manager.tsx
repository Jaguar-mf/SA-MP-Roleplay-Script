"use client"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Copy, Plus, Trash2, Users } from "lucide-react"
import { useRouter } from "next/navigation"
import type { Invitation } from "@/lib/types"
import { useLanguage } from "@/lib/i18n/language-context"
import { useToast } from "@/hooks/use-toast"

interface InvitationsManagerProps {
  initialInvitations: Invitation[]
}

export function InvitationsManager({ initialInvitations }: InvitationsManagerProps) {
  const { t } = useLanguage()
  const { toast } = useToast()
  const router = useRouter()
  const [invitations, setInvitations] = useState(initialInvitations)
  const [isAdding, setIsAdding] = useState(false)
  const [guestName, setGuestName] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const generateUniqueCode = () => {
    return Math.random().toString(36).substring(2, 10) + Date.now().toString(36)
  }

  const handleAddInvitation = async () => {
    if (!guestName.trim()) return

    setIsLoading(true)
    const supabase = createClient()
    const uniqueCode = generateUniqueCode()

    try {
      const { data, error } = await supabase
        .from("invitations")
        .insert({
          guest_name: guestName,
          unique_code: uniqueCode,
        })
        .select()
        .single()

      if (error) throw error

      setInvitations([data, ...invitations])
      setGuestName("")
      setIsAdding(false)
      router.refresh()

      toast({
        title: t.admin.invitationCreated,
        variant: "default",
      })
    } catch (error) {
      console.error("[v0] Error adding invitation:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteInvitation = async (id: string) => {
    setIsLoading(true)
    const supabase = createClient()

    try {
      await supabase.from("invitations").delete().eq("id", id)
      setInvitations(invitations.filter((inv) => inv.id !== id))
      router.refresh()
    } catch (error) {
      console.error("[v0] Error deleting invitation:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const copyInviteLink = (code: string) => {
    const link = `${window.location.origin}/invite/${code}`
    navigator.clipboard.writeText(link)

    toast({
      title: t.admin.linkCopied,
      variant: "default",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5 text-blue-600" />
          {t.admin.invitationsTitle}
        </CardTitle>
        <CardDescription>{t.admin.invitationsDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        {isAdding ? (
          <div className="space-y-4 mb-6 p-4 bg-slate-50 rounded-lg">
            <div className="grid gap-2">
              <Label htmlFor="guestName">{t.admin.guestName}</Label>
              <Input
                id="guestName"
                placeholder={t.admin.enterGuestName}
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleAddInvitation} disabled={isLoading || !guestName.trim()}>
                {isLoading ? t.admin.creating : t.admin.createInvitation}
              </Button>
              <Button variant="outline" onClick={() => setIsAdding(false)} disabled={isLoading}>
                {t.admin.cancel}
              </Button>
            </div>
          </div>
        ) : (
          <Button onClick={() => setIsAdding(true)} className="mb-6">
            <Plus className="h-4 w-4 mr-2" />
            {t.admin.createInvitation}
          </Button>
        )}

        {invitations.length === 0 ? (
          <div className="text-center py-12 text-slate-500">
            No invitations created yet. Click "Add New Invitation" to get started.
          </div>
        ) : (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t.admin.guestName}</TableHead>
                  <TableHead>{t.admin.uniqueLink}</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invitations.map((invitation) => (
                  <TableRow key={invitation.id}>
                    <TableCell className="font-medium">{invitation.guest_name}</TableCell>
                    <TableCell>
                      <code className="text-xs bg-slate-100 px-2 py-1 rounded">/invite/{invitation.unique_code}</code>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyInviteLink(invitation.unique_code)}
                          title={t.admin.copyLink}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDeleteInvitation(invitation.id)}
                          disabled={isLoading}
                          title={t.admin.deleteInvitation}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
