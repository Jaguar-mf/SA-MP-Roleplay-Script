"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { AdminHeader } from "@/components/admin-header"
import { ThesisSettingsCard } from "@/components/thesis-settings-card"
import { InvitationsManager } from "@/components/invitations-manager"
import { useLanguage } from "@/lib/i18n/language-context"
import type { ThesisSettings, Invitation } from "@/lib/types"

export default function AdminDashboard() {
  const { t } = useLanguage()
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [thesisSettings, setThesisSettings] = useState<ThesisSettings | null>(null)
  const [invitations, setInvitations] = useState<Invitation[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function checkAuth() {
      const supabase = createClient()

      console.log("[v0] Dashboard: Checking authentication")
      const {
        data: { user: authUser },
        error: authError,
      } = await supabase.auth.getUser()

      if (authError || !authUser) {
        console.log("[v0] Dashboard: Not authenticated, redirecting to login")
        router.push("/admin/login")
        return
      }

      console.log("[v0] Dashboard: User authenticated:", authUser.email)

      const { data: adminUser, error: adminError } = await supabase
        .from("admin_users")
        .select("*")
        .eq("id", authUser.id)
        .single()

      if (adminError || !adminUser) {
        console.log("[v0] Dashboard: User not in admin_users table:", adminError?.message)
        const { error: insertError } = await supabase
          .from("admin_users")
          .insert({ id: authUser.id, email: authUser.email })

        if (insertError) {
          console.log("[v0] Dashboard: Error adding user to admin_users:", insertError.message)
        } else {
          console.log("[v0] Dashboard: User added to admin_users table")
        }
      }

      console.log("[v0] Dashboard: Loading data")

      const { data: settingsData, error: settingsError } = await supabase.from("thesis_settings").select("*").single()

      if (settingsError) {
        console.log("[v0] Dashboard: Error loading thesis settings:", settingsError.message)
      }

      const { data: invitationsData, error: invitationsError } = await supabase
        .from("invitations")
        .select("*")
        .order("created_at", { ascending: false })

      if (invitationsError) {
        console.log("[v0] Dashboard: Error loading invitations:", invitationsError.message)
      }

      setUser(authUser)
      setThesisSettings(settingsData)
      setInvitations(invitationsData || [])
      setLoading(false)
    }

    checkAuth()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-slate-600">{t.admin.loading || "Loading..."}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <AdminHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">{t.admin.dashboard}</h2>
          <p className="text-slate-600">{t.admin.dashboardDescription}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-1">
          <ThesisSettingsCard initialSettings={thesisSettings} />
          <InvitationsManager initialInvitations={invitations} />
        </div>
      </main>
    </div>
  )
}
