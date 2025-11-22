"use client"

import { notFound } from "next/navigation"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { InvitationHero } from "@/components/invitation-hero"
import { ThesisDetailsSection } from "@/components/thesis-details-section"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"
import { LanguageSwitcher } from "@/components/language-switcher"
import type { Invitation, ThesisSettings } from "@/lib/types"

interface InvitePageProps {
  params: Promise<{ code: string }>
}

export default async function InvitePage({ params }: InvitePageProps) {
  const { code } = await params

  return <InvitePageClient code={code} />
}

function InvitePageClient({ code }: { code: string }) {
  const [invitation, setInvitation] = useState<Invitation | null>(null)
  const [thesisSettings, setThesisSettings] = useState<ThesisSettings | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const supabase = createClient()

      const { data: invitationData } = await supabase.from("invitations").select("*").eq("unique_code", code).single()

      if (!invitationData) {
        notFound()
      }

      const { data: settingsData } = await supabase.from("thesis_settings").select("*").single()

      setInvitation(invitationData)
      setThesisSettings(settingsData)
      setLoading(false)
    }

    fetchData()
  }, [code])

  if (loading) {
    return <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50" />
  }

  if (!invitation) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
      <InvitationHero guestName={invitation.guest_name} />
      <ThesisDetailsSection thesisSettings={thesisSettings} />
      <LocationSection />
      <Footer />
    </div>
  )
}
