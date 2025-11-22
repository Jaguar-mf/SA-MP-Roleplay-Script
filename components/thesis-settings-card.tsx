"use client"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Clock } from "lucide-react"
import { useRouter } from "next/navigation"
import type { ThesisSettings } from "@/lib/types"
import { useLanguage } from "@/lib/i18n/language-context"

interface ThesisSettingsCardProps {
  initialSettings: ThesisSettings | null
}

export function ThesisSettingsCard({ initialSettings }: ThesisSettingsCardProps) {
  const { t, language } = useLanguage()
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [defenseDate, setDefenseDate] = useState(
    initialSettings?.defense_date ? new Date(initialSettings.defense_date).toISOString().split("T")[0] : "",
  )
  const [defenseTime, setDefenseTime] = useState(initialSettings?.defense_time || "")

  const handleSave = async () => {
    setIsLoading(true)
    const supabase = createClient()

    try {
      const dateTime = new Date(`${defenseDate}T${defenseTime}`).toISOString()

      if (initialSettings) {
        await supabase
          .from("thesis_settings")
          .update({
            defense_date: dateTime,
            defense_time: defenseTime,
            updated_at: new Date().toISOString(),
          })
          .eq("id", initialSettings.id)
      } else {
        await supabase.from("thesis_settings").insert({
          defense_date: dateTime,
          defense_time: defenseTime,
        })
      }

      setIsEditing(false)
      router.refresh()
    } catch (error) {
      console.error("[v0] Error saving thesis settings:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    const locale = language === "ar" ? "ar-MA" : language === "fr" ? "fr-FR" : "en-US"
    return date.toLocaleDateString(locale, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-blue-600" />
          {t.admin.thesisSettings}
        </CardTitle>
        <CardDescription>Configure the date and time for your thesis defense</CardDescription>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="date">{t.admin.defenseDate}</Label>
              <Input id="date" type="date" value={defenseDate} onChange={(e) => setDefenseDate(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="time">{t.admin.defenseTime}</Label>
              <Input id="time" type="time" value={defenseTime} onChange={(e) => setDefenseTime(e.target.value)} />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleSave} disabled={isLoading}>
                {isLoading ? t.admin.savingSettings : t.admin.saveSettings}
              </Button>
              <Button variant="outline" onClick={() => setIsEditing(false)} disabled={isLoading}>
                {t.admin.cancel}
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
              <Calendar className="h-5 w-5 text-slate-600" />
              <div>
                <p className="text-sm text-slate-600">{t.invitation.dateLabel}</p>
                <p className="font-medium">{defenseDate ? formatDate(defenseDate) : t.invitation.toBeAnnounced}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
              <Clock className="h-5 w-5 text-slate-600" />
              <div>
                <p className="text-sm text-slate-600">{t.invitation.timeLabel}</p>
                <p className="font-medium">{defenseTime || t.invitation.toBeAnnounced}</p>
              </div>
            </div>
            <Button onClick={() => setIsEditing(true)}>Edit Settings</Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
