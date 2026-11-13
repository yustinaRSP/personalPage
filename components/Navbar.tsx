"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useApp } from "@/context/AppContext";

export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang, theme, toggleTheme, t } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/hobbies", label: t.nav.hobbies },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      style={{
        backgroundColor: theme === "dark" ? "#15211E" : "#F7F2E7",
        borderColor: theme === "dark" ? "#314742" : "#DFD5C3",
      }}
      className="sticky top-0 z-40 border-b transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link href="/" className="flex flex-col">
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight flex items-center gap-1.5">
            Yustina R.S.P <span className="text-base">🌿</span>
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase opacity-70">
            {t.home.tagline}
          </span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-semibold tracking-widest transition-colors py-1 border-b-2 ${
                  active
                    ? "border-[#B96B4B] opacity-100"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Tombol Bilingual (ID | EN) & Dark/Light Mode */}
        <div className="flex items-center gap-2.5">
          <div
            style={{
              backgroundColor: theme === "dark" ? "#22332F" : "#FCF9F2",
              borderColor: theme === "dark" ? "#314742" : "#DFD5C3",
            }}
            className="flex items-center rounded-full border p-0.5 text-xs font-bold"
          >
            <button
              type="button"
              onClick={() => setLang("id")}
              className={`px-2.5 py-1 rounded-full transition cursor-pointer ${
                lang === "id" ? "bg-[#B96B4B] text-white" : "opacity-70 hover:opacity-100"
              }`}
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-full transition cursor-pointer ${
                lang === "en" ? "bg-[#B96B4B] text-white" : "opacity-70 hover:opacity-100"
              }`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            style={{
              backgroundColor: theme === "dark" ? "#22332F" : "#FCF9F2",
              borderColor: theme === "dark" ? "#314742" : "#DFD5C3",
            }}
            className="w-9 h-9 rounded-full flex items-center justify-center border text-sm hover:border-[#B96B4B] transition cursor-pointer"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
            style={{
              backgroundColor: theme === "dark" ? "#22332F" : "#FCF9F2",
              borderColor: theme === "dark" ? "#314742" : "#DFD5C3",
            }}
            className="lg:hidden p-2 rounded-xl border text-sm cursor-pointer"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Dropdown Mobile */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: theme === "dark" ? "#22332F" : "#FCF9F2",
            borderColor: theme === "dark" ? "#314742" : "#DFD5C3",
          }}
          className="lg:hidden border-t px-6 py-4 space-y-3"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-2 text-xs font-bold tracking-widest ${
                  active ? "text-[#B96B4B]" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}