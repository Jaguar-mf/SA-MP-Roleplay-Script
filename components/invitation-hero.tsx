"use client"

import { GraduationCap, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

interface InvitationHeroProps {
  guestName: string
}

export function InvitationHero({ guestName }: InvitationHeroProps) {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent" />

      <div className="container mx-auto max-w-4xl relative">
        <div className="text-center space-y-8">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full" />
              <div className="relative bg-white p-6 rounded-full shadow-xl">
                <GraduationCap className="h-16 w-16 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-blue-600">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider">{t.invitation.youreInvited}</span>
              <Sparkles className="h-5 w-5" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 text-balance">
              {t.invitation.dear} <span className="text-blue-600">{guestName}</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-700 text-balance max-w-3xl mx-auto leading-relaxed">
              {t.invitation.invitationText}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
