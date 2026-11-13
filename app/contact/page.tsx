"use client";

import { useState } from "react";
import { useApp } from "@/context/AppContext";

export default function ContactPage() {
  const { lang } = useApp();
  const [copied, setCopied] = useState(false);

  const emailAddress = "yustina@example.com";

  const text = {
    en: {
      subtitle: "CONTACT & SOCIALS",
      title: "You can find me here 🌿",
      desc: "Feel free to reach out for collaborations, project discussions, or simply to say hello.",
      role: "Explorer & Developer • UKWMS Surabaya",
      locationTitle: "Location",
      locationVal: "Surabaya, East Java, Indonesia",
      emailTitle: "Email",
      copyBtn: "Copy Email",
      copiedBtn: "Copied!",
      openBtn: "Send Email",
      socialTitle: "Social Media & Code",
      igDesc: "Photography, daily moments, and visual stories.",
      ghDesc: "Web development projects, code experiments, and repositories.",
    },
    id: {
      subtitle: "KONTAK & MEDIA SOSIAL",
      title: "Temukan saya di sini 🌿",
      desc: "Silakan hubungi saya untuk kolaborasi, diskusi proyek, atau sekadar menyapa.",
      role: "Eksplorer & Developer • UKWMS Surabaya",
      locationTitle: "Lokasi",
      locationVal: "Surabaya, Jawa Timur, Indonesia",
      emailTitle: "Email",
      copyBtn: "Salin Email",
      copiedBtn: "Tersalin!",
      openBtn: "Kirim Email",
      socialTitle: "Media Sosial & Kode",
      igDesc: "Fotografi, momen keseharian, dan cerita visual.",
      ghDesc: "Proyek pengembangan web, eksperimen kode, dan repositori.",
    },
  }[lang];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      {/* Header Halaman */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-xs font-bold tracking-[0.25em] text-[#B96B4B]">
          {text.subtitle}
        </p>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold mt-2">
          {text.title}
        </h1>
        <p className="text-sm text-[var(--text-muted)] mt-3 leading-relaxed">
          {text.desc}
        </p>
      </div>

      {/* Kartu Utama Bernuansa Deep Forest Teal (Selaras dengan Footer) */}
      <div className="bg-[#2C4C47] text-[#F4EFE6] rounded-3xl p-6 sm:p-10 shadow-lg mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/15">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">
              Yustina Rizky Sukma Pratiwi 🌿
            </h2>
            <p className="text-xs sm:text-sm text-white/80 mt-1">{text.role}</p>
          </div>

          <div className="flex flex-wrap gap-2.5 text-xs font-bold">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              GitHub ↗
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              Instagram ↗
            </a>
            <a
              href={`mailto:${emailAddress}`}
              className="px-4 py-2 rounded-full bg-[#B96B4B] hover:bg-[#a35a3c] transition"
            >
              Email ✉️
            </a>
          </div>
        </div>

        {/* Info Email & Lokasi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
          <div className="bg-white/10 rounded-2xl p-5 border border-white/15">
            <p className="text-[11px] font-bold uppercase tracking-widest text-white/70">
              {text.emailTitle}
            </p>
            <p className="font-serif text-lg font-bold mt-1 break-all">
              {emailAddress}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <a
                href={`mailto:${emailAddress}`}
                className="px-3.5 py-1.5 rounded-full bg-[#B96B4B] hover:bg-[#a35a3c] text-white text-xs font-bold transition"
              >
                {text.openBtn}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition cursor-pointer"
              >
                {copied ? text.copiedBtn : text.copyBtn}
              </button>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-5 border border-white/15">
            <p className="text-[11px] font-bold uppercase tracking-widest text-white/70">
              {text.locationTitle}
            </p>
            <p className="font-serif text-lg font-bold mt-1">
              {text.locationVal}
            </p>
            <p className="text-xs text-white/80 mt-2">
              Universitas Katolik Widya Mandala Surabaya (UKWMS)
            </p>
          </div>
        </div>
      </div>

      {/* Kartu Tautan Sosial Media */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="storybook-card rounded-3xl p-6 flex items-start gap-4 hover:-translate-y-1 transition-transform"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#B96B4B] text-white flex items-center justify-center text-xl shrink-0">
            📸
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#B96B4B]">
              INSTAGRAM
            </p>
            <h3 className="font-serif text-lg font-bold mt-0.5">@yustina.rsp</h3>
            <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
              {text.igDesc}
            </p>
          </div>
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="storybook-card rounded-3xl p-6 flex items-start gap-4 hover:-translate-y-1 transition-transform"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#8A8B5E] text-white flex items-center justify-center text-xl shrink-0">
            💻
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#8A8B5E]">
              GITHUB
            </p>
            <h3 className="font-serif text-lg font-bold mt-0.5">github.com/yustina</h3>
            <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
              {text.ghDesc}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}