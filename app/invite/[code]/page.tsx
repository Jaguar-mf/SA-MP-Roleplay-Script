"use client"

import { Heart } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Footer } from "@/components/footer"

interface InvitePageProps {
  params: Promise<{ code: string }>
}

export default async function InvitePage({ params }: InvitePageProps) {
  return <InvitePageClient />
}

function InvitePageClient() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 flex flex-col">
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      {/* Main Content */}
      <section className="flex-1 relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent" />

        <div className="container mx-auto max-w-4xl relative h-full flex items-center">
          <div className="text-center space-y-12 w-full">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full" />
                <div className="relative bg-white p-8 rounded-full shadow-2xl">
                  <Heart className="h-20 w-20 text-blue-600 fill-blue-600" />
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 text-balance">
                {t.home.title}
              </h1>

              <p className="text-2xl font-semibold text-blue-600 text-balance">
                {t.home.candidate}
              </p>
            </div>

            {/* Main Message */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100">
                <p className="text-xl text-slate-700 leading-relaxed text-balance">
                  {t.home.thesisTitle}
                </p>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-lg text-slate-600 italic">
              "{t.home.quote}" {t.home.quoteAuthor}
            </p>

            {/* Special Thank You to Parents */}
            <div className="max-w-3xl mx-auto pt-8">
              <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-8 rounded-3xl border-2 border-blue-200">
                <p className="text-lg text-slate-700 leading-relaxed text-balance">
                  {t.home.parentsTitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
