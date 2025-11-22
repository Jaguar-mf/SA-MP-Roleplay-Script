"use client"

import { MapPin, Building2, Info } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n/language-context"

export function LocationSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 px-4 bg-slate-50/50">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8 bg-white shadow-lg">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Building2 className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-sm font-medium text-slate-600 uppercase tracking-wide mb-2">
                {t.invitation.locationLabel}
              </h2>
              <p className="text-2xl font-bold text-slate-900 mb-4 leading-relaxed text-balance">
                {t.invitation.venue}
              </p>
              <div className="flex items-start gap-2 text-slate-700">
                <MapPin className="h-5 w-5 mt-1 text-blue-600 flex-shrink-0" />
                <p className="text-lg">{t.invitation.address}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Info className="h-4 w-4 text-blue-600" />
                <p className="text-sm font-semibold text-slate-900">{t.invitation.dresscode}</p>
              </div>
              <p className="text-sm text-slate-700">{t.invitation.dresscodeValue}</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Info className="h-4 w-4 text-blue-600" />
                <p className="text-sm font-semibold text-slate-900">{t.invitation.duration}</p>
              </div>
              <p className="text-sm text-slate-700">{t.invitation.durationValue}</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Info className="h-4 w-4 text-blue-600" />
                <p className="text-sm font-semibold text-slate-900">{t.invitation.rsvpLabel}</p>
              </div>
              <p className="text-sm text-slate-700">{t.invitation.rsvpValue}</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
