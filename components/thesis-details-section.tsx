"use client"

import { Calendar, Clock, User, BookOpen } from "lucide-react"
import { Card } from "@/components/ui/card"
import type { ThesisSettings } from "@/lib/types"
import { useLanguage } from "@/lib/i18n/language-context"

interface ThesisDetailsSectionProps {
  thesisSettings: ThesisSettings | null
}

export function ThesisDetailsSection({ thesisSettings }: ThesisDetailsSectionProps) {
  const { t, language } = useLanguage()
  const defenseDate = thesisSettings?.defense_date ? new Date(thesisSettings.defense_date) : null

  const formatDate = (date: Date) => {
    const locale = language === "ar" ? "ar-MA" : language === "fr" ? "fr-FR" : "en-US"
    return date.toLocaleDateString(locale, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          {/* Candidate Info */}
          <Card className="p-8 bg-white shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-lg">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-sm font-medium text-slate-600 uppercase tracking-wide mb-2">
                  {t.invitation.candidateLabel}
                </h2>
                <p className="text-2xl font-bold text-slate-900">{t.home.candidate}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-sm font-medium text-slate-600 uppercase tracking-wide mb-2">
                  {t.invitation.thesisTitleLabel}
                </h2>
                <p className="text-lg font-semibold text-slate-900 leading-relaxed text-balance">
                  {t.home.thesisTitle}
                </p>
              </div>
            </div>
          </Card>

          {/* Date & Time */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-white shadow-lg">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-slate-600 uppercase tracking-wide mb-1">
                    {t.invitation.dateLabel}
                  </h3>
                  <p className="text-xl font-bold text-slate-900">
                    {defenseDate ? formatDate(defenseDate) : t.invitation.toBeAnnounced}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-blue-50 to-white shadow-lg">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-slate-600 uppercase tracking-wide mb-1">
                    {t.invitation.timeLabel}
                  </h3>
                  <p className="text-xl font-bold text-slate-900">
                    {thesisSettings?.defense_time || t.invitation.toBeAnnounced}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
