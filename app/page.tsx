"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, Calendar, MapPin, BookOpen, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent" />

        <div className="container mx-auto max-w-5xl relative">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full" />
                <div className="relative bg-white p-8 rounded-full shadow-2xl">
                  <GraduationCap className="h-20 w-20 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 text-balance">{t.home.title}</h1>

              <p className="text-2xl md:text-3xl font-semibold text-blue-600 text-balance">{t.home.candidate}</p>

              <div className="max-w-3xl mx-auto pt-4">
                <div className="flex items-start gap-3 justify-center">
                  <BookOpen className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-xl text-slate-700 text-balance leading-relaxed">{t.home.thesisTitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 p-4 rounded-lg">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{t.home.whenTitle}</h2>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed">{t.home.whenDescription}</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 p-4 rounded-lg">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{t.home.whereTitle}</h2>
              </div>
              <p className="text-slate-700 font-medium text-lg mb-2">{t.home.location}</p>
              <p className="text-slate-600">{t.home.city}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">{t.home.aboutTitle}</h2>
          <p className="text-lg text-slate-700 leading-relaxed text-balance">{t.home.aboutDescription}</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-12 rounded-3xl shadow-2xl text-center text-white">
            <h2 className="text-3xl font-bold mb-4">{t.home.ctaTitle}</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">{t.home.ctaDescription}</p>
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link href="/admin/login">
                {t.home.adminAccess}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
