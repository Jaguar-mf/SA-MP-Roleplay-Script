"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import Image from "next/image"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-8 px-4 border-t bg-white">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-slate-600">{t.home.footerTitle}</p>
        <p className="text-slate-500 text-sm mt-2">
          © {new Date().getFullYear()} {t.home.footerCopyright}
        </p>

        <div className="mt-6 pt-6 border-t border-slate-200">
          <div className="flex items-center justify-center gap-2 text-slate-600">
            <span className="text-sm">Made by Youssef Ouhassoun</span>
            <Image
              src="/images/panther-logo.png"
              alt="Youssef Ouhassoun Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
