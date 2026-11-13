"use client";

import Link from "next/link";
import { useState } from "react";
import { useApp } from "@/context/AppContext";

type CategoryKey = "photo" | "coding" | "creative";

interface WorkItem {
  id: number;
  title: { en: string; id: string };
  category: CategoryKey;
  img: string;
  note: { en: string; id: string };
}

/* Komponen Pembungkus Kartu 3D Tilt + Pantulan Cahaya */
function Tilt3D({
  children,
  className = "",
  maxTilt = 12,
  glare = true,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
  onClick?: () => void;
}) {
  const [tilt, setTilt] = useState({
    rotateX: 0,
    rotateY: 0,
    glareX: 50,
    glareY: 50,
    active: false,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width;
    const yPct = (e.clientY - rect.top) / rect.height;

    const rotateY = (xPct - 0.5) * (maxTilt * 2);
    const rotateX = (0.5 - yPct) * (maxTilt * 2);

    setTilt({
      rotateX,
      rotateY,
      glareX: xPct * 100,
      glareY: yPct * 100,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setTilt({
      rotateX: 0,
      rotateY: 0,
      glareX: 50,
      glareY: 50,
      active: false,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ perspective: "1100px" }}
      className={className}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${tilt.rotateX.toFixed(2)}deg) rotateY(${tilt.rotateY.toFixed(
            2
          )}deg) scale3d(${tilt.active ? 1.02 : 1}, ${tilt.active ? 1.02 : 1}, 1)`,
          transition: tilt.active
            ? "transform 120ms cubic-bezier(0.03, 0.98, 0.52, 0.99)"
            : "transform 450ms cubic-bezier(0.03, 0.98, 0.52, 0.99)",
        }}
        className="relative w-full h-full"
      >
        {children}

        {glare && (
          <div
            style={{
              opacity: tilt.active ? 0.28 : 0,
              background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.75), transparent 65%)`,
              transition: "opacity 250ms ease",
            }}
            className="pointer-events-none absolute inset-0 rounded-[inherit] z-20"
          />
        )}
      </div>
    </div>
  );
}

const selectedWorks: WorkItem[] = [
  {
    id: 1,
    title: { en: "Photography", id: "Fotografi" },
    category: "photo",
    img: "/images/photography.jpg",
    note: {
      en: "Golden hour light and quiet details captured through the lens.",
      id: "Cahaya senja dan detail tenang yang diabadikan melalui lensa.",
    },
  },
  {
    id: 2,
    title: { en: "Code & Workspace", id: "Kode & Ruang Kerja" },
    category: "coding",
    img: "/images/coding.jpg",
    note: {
      en: "Crafting clean TypeScript and Next.js components with warm UI.",
      id: "Merancang komponen TypeScript dan Next.js yang rapi dengan UI hangat.",
    },
  },
  {
    id: 3,
    title: { en: "Storybook Portrait", id: "Potret Storybook" },
    category: "creative",
    img: "/images/1.jpg",
    note: {
      en: "Blending personal reflection, faith, and visual storytelling.",
      id: "Memadukan refleksi diri, iman, dan cerita visual.",
    },
  },
  {
    id: 4,
    title: { en: "Surabaya Streets", id: "Jalanan Surabaya" },
    category: "photo",
    img: "/images/street.jpg",
    note: {
      en: "Afternoon walks discovering calm corners across Surabaya.",
      id: "Jalan sore menyusuri sudut-sudut tenang di kota Surabaya.",
    },
  },
  {
    id: 5,
    title: { en: "Activity", id: "Aktivitas" },
    category: "coding",
    img: "/images/foto3.jpg",
    note: {
      en: "Learning, collaborating, and building meaningful digital projects.",
      id: "Belajar, berkolaborasi, dan membangun proyek digital yang bermakna.",
    },
  },
  {
    id: 6,
    title: { en: "Quiet Moment", id: "Momen Tenang" },
    category: "creative",
    img: "/images/foto2.jpg",
    note: {
      en: "Slowing down to appreciate beauty in simple everyday moments.",
      id: "Melambat sejenak untuk mensyukuri keindahan dalam keseharian.",
    },
  },
];

const heroSlides = [
  { src: "/images/1.jpg", caption: { en: "Surabaya, East Java", id: "Surabaya, Jawa Timur" } },
  { src: "/images/foto2.jpg", caption: { en: "Quiet Reflection", id: "Momen Refleksi" } },
  { src: "/images/foto3.jpg", caption: { en: "Daily Journey", id: "Perjalanan Sehari-hari" } },
];

export default function HomePage() {
  const { lang, t } = useApp();

  const [heroIndex, setHeroIndex] = useState(0);
  const [flipSpin, setFlipSpin] = useState(0);
  const [activeWay, setActiveWay] = useState(0);
  const [filter, setFilter] = useState<"all" | CategoryKey>("all");
  const [previewWork, setPreviewWork] = useState<WorkItem | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  const filtered =
    filter === "all"
      ? selectedWorks
      : selectedWorks.filter((item) => item.category === filter);

  const handleNextHeroPhoto = () => {
    setFlipSpin((prev) => prev + 360);
    setHeroIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const extraText = {
    en: {
      clickPhotoHint: "Click to 3D flip photo",
      badge1: "Next.js & TypeScript",
      badge2: "Congregation SPM",
      wayNotes: [
        "From landing pages to full interactive web apps built with clean architecture.",
        "Designing warm color systems, typography, and intuitive user flows.",
        "Documenting light, nature, and candid stories around Surabaya.",
        "Bringing together logic, aesthetics, and heartfelt purpose in every project.",
      ],
      stepDetails: [
        "“Behold, I am the handmaid of the Lord; let it be to me according to your word.” True humility begins with surrendering our plans to God’s loving will (Luke 1:38).",
        "Humility moves us outward in love—rushing to help, listen, and bring joy to others without seeking recognition (Luke 1:39–40).",
        "In her Magnificat, Mary rejoices in God rather than herself, reminding us to live simply and stay grateful for every grace (Luke 1:46–48).",
        "Even when the path is uncertain, Mary walks forward in quiet confidence, trusting that God’s providence never fails.",
        "By keeping all things and pondering them in her heart, Mary teaches us that deep strength grows in prayer and silence (Luke 2:19).",
      ],
      stepHint: "Click any 3D reflection card to bring it forward",
      openGallery: "Open Full Gallery",
      close: "Close",
    },
    id: {
      clickPhotoHint: "Klik untuk memutar foto 3D",
      badge1: "Next.js & TypeScript",
      badge2: "Kongregasi SPM",
      wayNotes: [
        "Mulai dari halaman profil hingga aplikasi web interaktif dengan arsitektur rapi.",
        "Merancang palet warna hangat, tipografi, dan alur pengguna yang nyaman.",
        "Mendokumentasikan cahaya senja, alam, dan cerita candid di sekitar Surabaya.",
        "Memadukan logika, estetika, dan makna tulus di setiap karya digital.",
      ],
      stepDetails: [
        "“Sesungguhnya aku ini adalah hamba Tuhan; jadilah padaku menurut perkataanmu itu.” Kerendahan hati dimulai dengan menyerahkan rencana kita kepada kehendak Tuhan (Lukas 1:38).",
        "Kerendahan hati menggerakkan kita untuk segera hadir membantu, mendengarkan, dan membawa sukacita bagi sesama tanpa mencari pujian (Lukas 1:39–40).",
        "Dalam kidung Magnificat, Maria memuliakan Tuhan dan bukan dirinya sendiri—mengajak kita hidup bersahaja dan selalu bersyukur (Lukas 1:46–48).",
        "Bahkan ketika jalan di depan tidak mudah dimengerti, Maria melangkah dengan keyakinan penuh bahwa penyelenggaraan Tuhan selalu menyertai.",
        "Dengan menyimpan segala perkara dan merenungkannya di dalam hati, Maria mengajarkan bahwa keteguhan jiwa bertumbuh dalam doa dan keheningan (Lukas 2:19).",
      ],
      stepHint: "Klik kartu refleksi 3D mana saja untuk memajukannya",
      openGallery: "Buka Galeri Lengkap",
      close: "Tutup",
    },
  }[lang];

  return (
    <div className="overflow-x-hidden">
      {/* 1. HERO SECTION 3D STAGE */}
      <section className="relative overflow-hidden py-14 sm:py-20 px-4 sm:px-6 bg-[var(--bg-section)] border-b border-[var(--border-soft)]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Kolom Kiri: Teks */}
          <div className="md:col-span-7 text-center md:text-left animate-fade-scale">
            <p className="font-script text-2xl sm:text-3xl text-[#B96B4B] mb-2">
              ~ {t.home.tagline} ~
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[var(--text-primary)]">
              {t.home.heroTitle}
            </h1>
            <div className="my-4 text-[#8A8B5E] text-sm tracking-widest">
              🌿 • ✦ • 🌿
            </div>
            <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-xl mx-auto md:mx-0 leading-relaxed">
              {t.home.heroDesc}
            </p>
            <div className="mt-7 flex flex-wrap justify-center md:justify-start gap-3">
              <Link
                href="/gallery"
                className="bg-[#2C4C47] hover:bg-[#203834] hover:-translate-y-0.5 text-white text-xs font-bold tracking-widest px-6 py-3.5 rounded-full shadow-md transition-all"
              >
                {t.home.heroCta} 🌿
              </Link>
              <Link
                href="/about"
                className="border border-[var(--border-soft)] bg-[var(--bg-card)] text-[var(--text-primary)] text-xs font-bold tracking-widest px-6 py-3.5 rounded-full hover:border-[#B96B4B] hover:-translate-y-0.5 transition-all"
              >
                {t.home.introCta}
              </Link>
            </div>
          </div>

          {/* Kolom Kanan: Kartu Foto 3D Berlapis */}
          <div className="md:col-span-5 flex flex-col items-center">
            <Tilt3D maxTilt={15} glare={false} className="relative w-64 h-72 sm:w-72 sm:h-80">
              <div className="relative w-full h-full preserve-3d">
                <div
                  style={{ transform: "translateZ(-35px) rotateZ(-7deg)" }}
                  className="absolute inset-0 rounded-t-full rounded-b-3xl bg-[#8A8B5E]/35 border border-[var(--border-soft)] shadow-md pointer-events-none"
                />

                <div
                  style={{ transform: "translateZ(-18px) rotateZ(6deg)" }}
                  className="absolute inset-0 rounded-t-full rounded-b-3xl bg-[#B96B4B]/25 border border-[var(--border-soft)] shadow-md pointer-events-none"
                />

                <div className="animate-float-3d absolute -top-3 -left-3 z-30 storybook-card px-3.5 py-1.5 rounded-full text-[11px] font-bold flex items-center gap-1.5 shadow-lg pointer-events-none">
                  <span>💻</span>
                  <span>{extraText.badge1}</span>
                </div>

                <div className="animate-float-3d-delayed absolute bottom-6 -right-3 z-30 bg-[#2C4C47] text-white px-3.5 py-1.5 rounded-full text-[11px] font-bold shadow-lg flex items-center gap-1.5 pointer-events-none">
                  <span>🕊️</span>
                  <span>{extraText.badge2}</span>
                </div>

                <button
                  type="button"
                  onClick={handleNextHeroPhoto}
                  style={{
                    transform: `translateZ(20px) rotateY(${flipSpin}deg)`,
                    transition: "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                  className="group relative w-full h-full rounded-t-full rounded-b-3xl overflow-hidden border-4 border-[var(--bg-card)] shadow-2xl bg-[#8A8B5E]/20 cursor-pointer focus:outline-none"
                >
                  <img
                    src={heroSlides[heroIndex].src}
                    alt="Yustina"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-3.5 text-white text-center">
                    <p className="font-serif text-xs font-bold">
                      {heroSlides[heroIndex].caption[lang]}
                    </p>
                    <p className="text-[10px] opacity-85">{extraText.clickPhotoHint}</p>
                  </div>
                </button>
              </div>
            </Tilt3D>

            <div className="flex items-center gap-2 mt-5">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Slide ${idx + 1}`}
                  onClick={() => {
                    setFlipSpin((prev) => prev + 360);
                    setHeroIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    heroIndex === idx ? "w-6 bg-[#B96B4B]" : "w-2 bg-[#8A8B5E]/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. HELLO I'M YUSTINA + PANEL 3D WAYS WE CAN CREATE TOGETHER */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <Tilt3D maxTilt={8} className="lg:col-span-5">
          <div className="storybook-card rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between preserve-3d">
            <div className="z-layer-1">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
                {t.home.introHeading} 🌿
              </h2>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                {t.home.introText}
              </p>
            </div>
            <div className="z-layer-2">
              <Link
                href="/about"
                className="inline-block bg-[#B96B4B] hover:bg-[#a35a3c] text-white text-xs font-bold tracking-widest px-5 py-2.5 rounded-full shadow transition"
              >
                {t.home.introCta}
              </Link>
            </div>
          </div>
        </Tilt3D>

        <Tilt3D maxTilt={6} className="lg:col-span-7">
          <div className="bg-[#2C4C47] text-[#F4EFE6] rounded-3xl p-6 sm:p-8 shadow-xl h-full flex flex-col justify-between preserve-3d">
            <div className="z-layer-1">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-center mb-6">
                🌿 {t.home.waysTitle} 🌿
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center preserve-3d">
                {t.home.ways.map((item, idx) => {
                  const icons = ["💻", "🎨", "📸", "✨"];
                  const isSelected = activeWay === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveWay(idx)}
                      onMouseEnter={() => setActiveWay(idx)}
                      style={{
                        transform: isSelected
                          ? "translateZ(26px) scale(1.04)"
                          : "translateZ(6px)",
                      }}
                      className={`p-3 rounded-2xl flex flex-col items-center transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? "bg-white/15 ring-2 ring-[#B96B4B] shadow-lg"
                          : "hover:bg-white/10"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-xl shadow mb-2.5 transition-transform ${
                          isSelected
                            ? "bg-[#B96B4B] text-white scale-110"
                            : "bg-[#F7F2E7] text-[#23332F]"
                        }`}
                      >
                        {icons[idx]}
                      </div>
                      <h4 className="font-serif text-xs sm:text-sm font-bold">
                        {item.title}
                      </h4>
                    </button>
                  );
                })}
              </div>

              <div
                key={activeWay}
                className="mt-5 p-4 rounded-2xl bg-white/10 border border-white/15 text-center animate-fade-scale z-layer-2"
              >
                <p className="font-serif text-sm font-bold text-[#F7F2E7]">
                  {t.home.ways[activeWay].title}
                </p>
                <p className="text-xs text-white/85 mt-1 leading-relaxed">
                  {extraText.wayNotes[activeWay]}
                </p>
              </div>
            </div>

            <div className="text-center mt-5 z-layer-1">
              <Link
                href="/hobbies"
                className="inline-block text-xs font-bold tracking-widest underline underline-offset-4 hover:text-[#F7F2E7]"
              >
                {t.home.waysCta} →
              </Link>
            </div>
          </div>
        </Tilt3D>
      </section>

      {/* 3. SELECTED WORKS & MOMENTS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            🌿 {t.home.worksTitle} 🌿
          </h2>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {(["all", "coding", "photo", "creative"] as const).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all cursor-pointer ${
                  filter === key
                    ? "bg-[#B96B4B] text-white scale-105 shadow-sm"
                    : "bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border-soft)] hover:border-[#B96B4B]"
                }`}
              >
                {t.home.filters[key]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((work) => (
            <Tilt3D
              key={`${filter}-${work.id}`}
              maxTilt={11}
              onClick={() => setPreviewWork(work)}
              className="cursor-pointer animate-fade-scale"
            >
              <div className="storybook-card rounded-2xl overflow-hidden group preserve-3d h-full">
                <div className="aspect-[4/3] overflow-hidden bg-[var(--bg-section)] relative preserve-3d">
                  <img
                    src={work.img}
                    alt={work.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="z-layer-2 absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 text-white text-[10px] font-bold tracking-wider backdrop-blur-sm shadow">
                    {t.home.filters[work.category]}
                  </span>
                </div>
                <div className="p-4 text-center z-layer-1">
                  <h3 className="font-serif font-bold text-base group-hover:text-[#B96B4B] transition-colors">
                    {work.title[lang]}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] mt-1 line-clamp-1">
                    {work.note[lang]}
                  </p>
                </div>
              </div>
            </Tilt3D>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/gallery"
            className="text-xs font-bold tracking-widest text-[#B96B4B] hover:underline"
          >
            🌿 {t.home.worksMore} 🌿
          </Link>
        </div>
      </section>

      {/* 4. 5 WAYS TO BE HUMBLE LIKE THE VIRGIN MARY (3D PERSPECTIVE CARDS) */}
      <section className="bg-[#8A8B5E] text-white py-14 px-4 sm:px-6 mt-10 perspective-1200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/80 mb-1">
              🕊️ SPIRITUAL REFLECTION 🕊️
            </p>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold">
              {t.home.processTitle}
            </h2>
            <p className="font-script text-xl text-white/90 mt-1">
              ~ {extraText.stepHint} ~
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 preserve-3d">
            {t.home.process.map((step, idx) => {
              const isCurrent = activeStep === idx;
              const diff = idx - activeStep;
              const rotateY = Math.max(-14, Math.min(14, diff * -5));
              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  style={{
                    transform: isCurrent
                      ? "translateZ(30px) scale(1.04) rotateY(0deg)"
                      : `translateZ(0px) rotateY(${rotateY}deg)`,
                  }}
                  className={`rounded-2xl p-5 text-center border transition-all duration-500 cursor-pointer flex flex-col justify-start ${
                    isCurrent
                      ? "bg-[#2C4C47] border-white shadow-2xl"
                      : "bg-white/10 border-white/20 hover:bg-white/20"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full font-serif font-bold flex items-center justify-center mx-auto mb-3 transition-transform shrink-0 ${
                      isCurrent
                        ? "bg-[#B96B4B] text-white scale-110 shadow-md"
                        : "bg-[#F7F2E7] text-[#23332F]"
                    }`}
                  >
                    {step.step}
                  </div>
                  <h3 className="font-serif font-bold text-base leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-white/90 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Panel Refleksi Langkah Aktif */}
          <div
            key={activeStep}
            className="max-w-3xl mx-auto mt-7 bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl p-5 text-center animate-fade-scale shadow-lg"
          >
            <span className="text-[11px] font-bold uppercase tracking-widest bg-[#2C4C47] px-3.5 py-1 rounded-full">
              {t.home.process[activeStep].step}. {t.home.process[activeStep].title}
            </span>
            <p className="text-sm text-white mt-3 leading-relaxed">
              {extraText.stepDetails[activeStep]}
            </p>
          </div>

          {/* Kalimat Penutup */}
          <div className="max-w-2xl mx-auto mt-8 pt-6 border-t border-white/25 text-center">
            <p className="font-serif italic text-base sm:text-lg text-[#F7F2E7] leading-relaxed">
              {t.home.processQuote}
            </p>
          </div>
        </div>
      </section>

      {/* MODAL QUICK PREVIEW KARYA */}
      {previewWork && (
        <div
          onClick={() => setPreviewWork(null)}
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="storybook-card rounded-3xl max-w-lg w-full overflow-hidden p-4 animate-fade-scale"
          >
            <img
              src={previewWork.img}
              alt={previewWork.title[lang]}
              className="w-full max-h-[55vh] object-cover rounded-2xl"
            />
            <div className="pt-4 px-2 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-bold text-xl">
                  {previewWork.title[lang]}
                </h3>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#B96B4B]">
                  {t.home.filters[previewWork.category]}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                {previewWork.note[lang]}
              </p>
              <div className="flex items-center justify-end gap-2 pt-2">
                <Link
                  href="/gallery"
                  className="px-4 py-2 rounded-full bg-[#2C4C47] text-white text-xs font-bold"
                >
                  {extraText.openGallery}
                </Link>
                <button
                  type="button"
                  onClick={() => setPreviewWork(null)}
                  className="px-4 py-2 rounded-full bg-[#B96B4B] text-white text-xs font-bold cursor-pointer"
                >
                  {extraText.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}