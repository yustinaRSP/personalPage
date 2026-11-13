"use client";

import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function Footer() {
  const { t } = useApp();

  return (
    <footer className="mt-16 bg-[#2C4C47] text-[#F4EFE6] py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-white/15">
        <div>
          <p className="font-serif text-xl font-bold">Yustina R.S.P 🌿</p>
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/75 mt-1">
            {t.home.tagline}
          </p>
          <div className="flex flex-wrap gap-2 mt-4 text-xs font-semibold">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition">
              GitHub
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition">
              Instagram
            </a>
            <a href="mailto:yustina@example.com" className="px-3 py-1 rounded-full bg-[#B96B4B] hover:bg-[#a35a3c] transition">
              Email
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-white/70 mb-3">
            {t.footer.explore}
          </p>
          <ul className="space-y-1.5 text-xs">
            <li><Link href="/" className="hover:underline">{t.nav.home}</Link></li>
            <li><Link href="/about" className="hover:underline">{t.nav.about}</Link></li>
            <li><Link href="/hobbies" className="hover:underline">{t.nav.hobbies}</Link></li>
            <li><Link href="/gallery" className="hover:underline">{t.nav.gallery}</Link></li>
            <li><Link href="/contact" className="hover:underline">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-white/70 mb-3">
            {t.footer.info}
          </p>
          <ul className="space-y-1.5 text-xs text-white/85">
            <li>Next.js &amp; TypeScript</li>
            <li>Responsive Design</li>
            <li>Dark / Light Theme</li>
            <li>Bilingual (ID / EN)</li>
          </ul>
        </div>

        <div>
          <p className="font-serif text-base font-semibold">{t.footer.loopTitle}</p>
          <p className="text-xs text-white/80 mt-1 mb-3">{t.footer.loopDesc}</p>
          <div className="flex items-center bg-white/10 rounded-xl px-3 py-2 border border-white/20">
            <input
              type="email"
              placeholder={t.footer.emailPlaceholder}
              className="bg-transparent text-xs text-white placeholder:text-white/60 focus:outline-none w-full"
            />
            <span className="text-xs">✉️</span>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-white/75 pt-6">
        {t.footer.copyright}
      </p>
    </footer>
  );
}