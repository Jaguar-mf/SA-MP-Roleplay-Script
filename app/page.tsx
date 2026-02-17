"use client"

import { Heart } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Footer } from "@/components/footer"
import { useEffect, useState } from "react"

export default function HomePage() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

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
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
