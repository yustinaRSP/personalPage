"use client";

import { useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

interface HobbyDetail {
  id: string;
  num: string;
  icon: string;
  accentBg: string;
  accentText: string;
  image: string;
  tag: { en: string; id: string };
  title: { en: string; id: string };
  desc: { en: string; id: string };
  favoriteLabel: { en: string; id: string };
  favoriteValue: { en: string; id: string };
  mood: { en: string; id: string };
  hasGalleryLink?: boolean;
}

const hobbiesData: HobbyDetail[] = [
  {
    id: "photo",
    num: "01",
    icon: "📸",
    accentBg: "#B96B4B",
    accentText: "#B96B4B",
    image: "/images/photography.jpg",
    tag: { en: "VISUAL ARTS", id: "SENI VISUAL" },
    title: { en: "Golden Hour Photography", id: "Fotografi Golden Hour" },
    desc: {
      en: "Chasing warm afternoon shadows, quiet streets, and tiny botanical details around Surabaya.",
      id: "Mengejar bayangan sore yang hangat, sudut jalanan yang tenang, dan detail alam kecil di sekitar Surabaya.",
    },
    favoriteLabel: { en: "Best Time", id: "Waktu Favorit" },
    favoriteValue: { en: "04:30 PM – Sunset Glow", id: "16.30 WIB – Cahaya Senja" },
    mood: { en: "Warm & Nostalgic", id: "Hangat & Nostalgia" },
    hasGalleryLink: true,
  },
  {
    id: "music",
    num: "02",
    icon: "🎵",
    accentBg: "#2C4C47",
    accentText: "#2C4C47",
    image: "/images/music.jpg",
    tag: { en: "MUSIC & HARMONY", id: "MUSIK & HARMONI" },
    title: { en: "Playing Music", id: "Bermain Musik" },
    desc: {
      en: "Playing gentle melodies, practicing hymns, and finding peace through rhythm and acoustic chords.",
      id: "Memainkan melodi lembut, berlatih lagu pujian, dan menemukan ketenangan melalui irama serta akor musik.",
    },
    favoriteLabel: { en: "Favorite Vibe", id: "Nuansa Favorit" },
    favoriteValue: { en: "Acoustic Melodies & Hymns", id: "Melodi Akustik & Lagu Pujian" },
    mood: { en: "Soulful & Serene", id: "Menenangkan & Penuh Syukur" },
  },
  {
    id: "reading",
    num: "03",
    icon: "📖",
    accentBg: "#8A8B5E",
    accentText: "#8A8B5E",
    image: "/images/foto2.jpg",
    tag: { en: "SLOW LIVING", id: "SLOW LIVING" },
    title: { en: "Reading & Journaling", id: "Membaca & Menulis Jurnal" },
    desc: {
      en: "Collecting quotes, sketching interface ideas on paper, and reflecting over warm tea.",
      id: "Mengumpulkan kutipan bermakna, menggambar sketsa ide di kertas, dan berefleksi ditemani teh hangat.",
    },
    favoriteLabel: { en: "Companion", id: "Teman Setia" },
    favoriteValue: { en: "Dotted Notebook & Chamomile Tea", id: "Buku Catatan & Teh Hangat" },
    mood: { en: "Peaceful & Reflective", id: "Tenang & Reflektif" },
  },
  {
    id: "wandering",
    num: "04",
    icon: "🌿",
    accentBg: "#9E6B43",
    accentText: "#9E6B43",
    image: "/images/street.jpg",
    tag: { en: "WANDERING", id: "EKSPLORASI" },
    title: { en: "Exploring Cafes & Nature", id: "Menjelajah Kafe & Alam" },
    desc: {
      en: "Discovering hidden corners, green parks, and peaceful spots to recharge.",
      id: "Menemukan sudut kota yang asri, taman hijau, dan tempat tenang untuk menyegarkan pikiran.",
    },
    favoriteLabel: { en: "Go-To Spot", id: "Tempat Tujuan" },
    favoriteValue: { en: "Shady Parks & Quiet Book Cafes", id: "Taman Rindang & Kafe Buku" },
    mood: { en: "Curious & Grounded", id: "Ingin Tahu & Membumi" },
    hasGalleryLink: true,
  },
];

export default function HobbiesPage() {
  const { lang, theme, t } = useApp();
  const [expandedId, setExpandedId] = useState<string | null>("photo");

  const uiText = {
    en: {
      tapHint: "Click any card to peek into my notes",
      less: "Hide note",
      more: "Peek note",
      galleryBtn: "View in Gallery",
      ritualSubtitle: "HOW THEY WEAVE TOGETHER",
      ritualTitle: "My Ideal Slow-Day Ritual",
      rituals: [
        {
          time: "MORNING",
          icon: "☕",
          title: "Quiet Reflection & Notes",
          desc: "Starting the day with prayer, warm tea, and jotting down fresh ideas on paper.",
        },
        {
          time: "AFTERNOON",
          icon: "🎵",
          title: "Music & Gentle Harmony",
          desc: "Taking a break to play calming melodies and let music refresh the spirit.",
        },
        {
          time: "LATE AFTERNOON",
          icon: "🌤️",
          title: "Golden Hour Walk",
          desc: "Stepping outside with a camera to capture light, trees, and Surabaya street stories.",
        },
      ],
    },
    id: {
      tapHint: "Klik kartu mana saja untuk mengintip catatan kecilnya",
      less: "Tutup catatan",
      more: "Intip catatan",
      galleryBtn: "Lihat di Galeri",
      ritualSubtitle: "BAGAIMANA SEMUANYA TERHUBUNG",
      ritualTitle: "Ritual Hari Tenang Favorit Saya",
      rituals: [
        {
          time: "PAGI HARI",
          icon: "☕",
          title: "Refleksi & Catatan Pagi",
          desc: "Mengawali hari dengan doa, secangkir teh hangat, dan mencatat ide-ide baru di buku.",
        },
        {
          time: "SIANG HARI",
          icon: "🎵",
          title: "Bermain Musik & Harmoni",
          desc: "Beristirahat sejenak memainkan melodi lembut untuk menyegarkan hati dan pikiran.",
        },
        {
          time: "SORE HARI",
          icon: "🌤️",
          title: "Jalan Sore & Memotret",
          desc: "Keluar sejenak membawa kamera untuk menangkap cahaya senja dan sudut kota Surabaya.",
        },
      ],
    },
  }[lang];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header Bagian */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs font-bold tracking-[0.25em] text-[#B96B4B]">
          {t.hobbies.subtitle}
        </p>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold mt-2">
          {t.hobbies.title}
        </h1>
        <div className="my-3 text-[#8A8B5E] text-sm tracking-widest">
          🌿 • ✦ • 🌿
        </div>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed">
          {t.hobbies.desc}
        </p>
        <p className="font-script text-xl text-[#B96B4B] mt-3">
          ~ {uiText.tapHint} ~
        </p>
      </div>

      {/* Grid Kartu Hobi Interaktif */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {hobbiesData.map((hobby) => {
          const isOpen = expandedId === hobby.id;
          return (
            <div
              key={hobby.id}
              onClick={() => setExpandedId(isOpen ? null : hobby.id)}
              className="storybook-card rounded-3xl p-6 sm:p-7 relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Garis Aksen Atas */}
              <div
                style={{ backgroundColor: hobby.accentBg }}
                className="absolute top-0 left-0 right-0 h-1.5 opacity-85"
              />

              {/* Nomor Dekoratif di Latar Belakang */}
              <span className="font-serif text-6xl font-bold opacity-[0.06] absolute bottom-3 right-5 select-none pointer-events-none">
                {hobby.num}
              </span>

              <div>
                {/* Baris Atas: Ikon + Tag + Foto Mini Polaroid */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3.5">
                    <div
                      style={{ backgroundColor: hobby.accentBg }}
                      className="w-12 h-12 rounded-2xl text-white flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform"
                    >
                      {hobby.icon}
                    </div>
                    <div>
                      <span
                        style={{
                          color: theme === "dark" ? "#E29578" : hobby.accentText,
                        }}
                        className="text-[11px] font-bold uppercase tracking-[0.18em] block"
                      >
                        {hobby.num} • {hobby.tag[lang]}
                      </span>
                      <h2 className="font-serif text-xl sm:text-2xl font-bold mt-0.5">
                        {hobby.title[lang]}
                      </h2>
                    </div>
                  </div>

                  {/* Thumbnail Foto Mini */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[var(--border-soft)] shadow-sm shrink-0 rotate-2 group-hover:rotate-0 transition-transform bg-[var(--bg-section)]">
                    <img
                      src={hobby.image}
                      alt={hobby.title[lang]}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Deskripsi Utama */}
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {hobby.desc[lang]}
                </p>
              </div>

              {/* Detail Tambahan Saat Kartu Diklik */}
              {isOpen && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="mt-5 pt-4 border-t border-dashed border-[var(--border-soft)] space-y-3 animate-fadeIn"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="rounded-xl p-3 bg-[var(--bg-section)]">
                      <p className="uppercase tracking-wider text-[10px] font-bold opacity-70">
                        {hobby.favoriteLabel[lang]}
                      </p>
                      <p className="font-serif font-bold text-sm mt-0.5">
                        {hobby.favoriteValue[lang]}
                      </p>
                    </div>
                    <div className="rounded-xl p-3 bg-[var(--bg-section)]">
                      <p className="uppercase tracking-wider text-[10px] font-bold opacity-70">
                        Mood
                      </p>
                      <p className="font-serif font-bold text-sm mt-0.5">
                        {hobby.mood[lang]}
                      </p>
                    </div>
                  </div>

                  {hobby.hasGalleryLink && (
                    <div className="pt-1">
                      <Link
                        href="/gallery"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B96B4B] hover:underline"
                      >
                        {uiText.galleryBtn} →
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* Tombol Kecil Toggle Catatan */}
              <div className="mt-4 flex items-center justify-between text-[11px] font-bold opacity-75 group-hover:opacity-100">
                <span className="text-[#B96B4B]">
                  {isOpen ? `▲ ${uiText.less}` : `▼ ${uiText.more}`}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bagian Tambahan: Ritual Keseharian (Deep Forest Teal Banner) */}
      <section className="mt-14 bg-[#2C4C47] text-[#F4EFE6] rounded-3xl p-7 sm:p-10 shadow-lg">
        <div className="text-center max-w-xl mx-auto mb-8">
          <p className="text-[11px] font-bold tracking-[0.25em] text-white/75 uppercase">
            {uiText.ritualSubtitle}
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-1.5">
            🌿 {uiText.ritualTitle} 🌿
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {uiText.rituals.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/15 rounded-2xl p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold tracking-[0.2em] px-3 py-1 rounded-full bg-[#B96B4B] text-white">
                    {item.time}
                  </span>
                  <span className="text-xl">{item.icon}</span>
                </div>
                <h3 className="font-serif text-lg font-bold">{item.title}</h3>
                <p className="text-xs text-white/85 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}