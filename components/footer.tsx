"use client"

import { useLanguage } from "@/lib/i18n/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-8 px-4 border-t bg-white">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-slate-600">{t.home.footerTitle}</p>
        <p className="text-slate-500 text-sm mt-2">
          © {new Date().getFullYear()} {t.home.footerCopyright}
        </p>
      </div>
    </footer>
  )
}
