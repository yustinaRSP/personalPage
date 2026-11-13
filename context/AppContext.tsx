"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Lang = "en" | "id";
type Theme = "light" | "dark";

const translations = {
  en: {
    nav: {
      home: "HOME",
      about: "ABOUT",
      hobbies: "HOBBIES",
      gallery: "GALLERY",
      contact: "CONTACT",
    },
    home: {
      tagline: "EXPLORER & DEVELOPER",
      heroTitle: "Code takes root and wonder grows.",
      heroDesc:
        "I'm Yustina, a developer and visual storyteller creating warm, thoughtful digital experiences full of heart and clean code.",
      heroCta: "EXPLORE MY WORK",
      introHeading: "Hello, I'm Yustina",
      introText:
        "I believe in slow mornings, curious minds, and the magic hidden in small details. Based in Surabaya, my work blends structured web engineering with creative photography and storytelling.",
      introCta: "MORE ABOUT ME",
      waysTitle: "Ways We Can Create Together",
      waysCta: "VIEW ALL HOBBIES",
      ways: [
        { title: "Web Development", desc: "Responsive Next.js & TypeScript web apps built with care." },
        { title: "UI & Storytelling", desc: "Warm, human-centered interfaces with whimsical charm." },
        { title: "Visual Photography", desc: "Capturing candid moments, light, and everyday nature." },
        { title: "Creative Projects", desc: "Collaborative digital ideas tailored for meaningful impact." },
      ],
      worksTitle: "Selected Works & Moments",
      worksMore: "SEE FULL GALLERY",
      filters: { all: "ALL", coding: "CODING", photo: "PHOTOGRAPHY", creative: "CREATIVE" },
      processTitle: "5 Ways to Be Humble Like the Virgin Mary",
      process: [
        {
          step: "1",
          title: "Say Yes to God",
          desc: "Learning to accept God’s will with an open heart, like Mary through her “Fiat” (Luke 1:38).",
        },
        {
          step: "2",
          title: "Serve Others with Love",
          desc: "Putting service and the needs of others first, as Mary visited Elizabeth (Luke 1:39–40).",
        },
        {
          step: "3",
          title: "Live Simply",
          desc: "Not boasting about what we have, but remaining humble and grateful (Luke 1:46–48).",
        },
        {
          step: "4",
          title: "Trust God in Every Situation",
          desc: "Continuing to trust in God’s providence, even when life’s path is not easy.",
        },
        {
          step: "5",
          title: "Grow in Prayer and Silence",
          desc: "Learning to ponder every life experience in silence and treasure it in our hearts (Luke 2:19).",
        },
      ],
      processQuote:
        "“With the heart of Mary, may we choose humility every day and walk closer to God in love.”",
    },
    about: {
      subtitle: "MY STORY & JOURNEY",
      title: "Curious heart, structured code.",
      p1: "Hello! I'm Yustina Rizky Sukma Pratiwi, an Informatics student, developer, and a religious sister of the Congregation SPM, based in Surabaya, East Java. I love turning abstract ideas into welcoming, easy-to-use digital spaces.",
      p2: "Whether I'm architecting React components, wandering around with a camera, or living out my vocation, I look for harmony between logic, creativity, faith, and aesthetics.",
      eduTitle: "Education & Vocation",
      eduRole: "Informatics Student (UKWMS Surabaya) • Sister of Congregation SPM",
      eduDesc: "Focusing on modern web technologies, UI/UX design systems, and meaningful digital craftsmanship.",
      skillsTitle: "Tools & Craft",
    },
    hobbies: {
      subtitle: "BEYOND THE SCREEN",
      title: "Little things that inspire my days.",
      desc: "When I step away from the keyboard, these everyday rituals keep my creativity grounded.",
      items: [
        {
          title: "Golden Hour Photography",
          tag: "Visual Arts",
          desc: "Chasing warm afternoon shadows, quiet streets, and tiny botanical details around Surabaya.",
        },
        {
          title: "Playing Music",
          tag: "Music & Harmony",
          desc: "Playing gentle melodies, practicing hymns, and finding peace through rhythm and acoustic chords.",
        },
        {
          title: "Reading & Journaling",
          tag: "Slow Living",
          desc: "Collecting quotes, sketching interface ideas on paper, and reflecting over warm tea.",
        },
        {
          title: "Exploring Cafes & Nature",
          tag: "Wandering",
          desc: "Discovering hidden corners, green parks, and peaceful spots to recharge.",
        },
      ],
    },
    gallery: {
      subtitle: "CURATED ARCHIVE",
      title: "Frames, Code & Keepsakes",
      desc: "A collection of captured photographs, coding snapshots, and visual experiments.",
      close: "Close Preview",
    },
    contact: {
      subtitle: "GET IN TOUCH",
      title: "Send a note across the meadow.",
      desc: "Have a project idea, collaboration, or just want to say hello? I'd love to hear from you!",
      nameLabel: "Your Name",
      emailLabel: "Email Address",
      msgLabel: "Your Message",
      sendBtn: "SEND MESSAGE",
      sentAlert: "Thank you! Your message has been received.",
      findMe: "You can also find me here:",
    },
    footer: {
      explore: "EXPLORE",
      info: "HIGHLIGHTS",
      loopTitle: "Stay in the loop",
      loopDesc: "Notes on web development, photography, and cozy digital projects.",
      emailPlaceholder: "Your email address",
      copyright: "© 2026 Yustina Rizky Sukma Pratiwi (UKWMS). Surabaya, East Java.",
    },
  },
  id: {
    nav: {
      home: "BERANDA",
      about: "TENTANG",
      hobbies: "HOBI",
      gallery: "GALERI",
      contact: "KONTAK",
    },
    home: {
      tagline: "EKSPLORER & DEVELOPER",
      heroTitle: "Kode berakar, keajaiban pun tumbuh.",
      heroDesc:
        "Saya Yustina, seorang pengembang web dan pencerita visual yang merancang pengalaman digital hangat, rapi, dan penuh makna.",
      heroCta: "JELAJAHI KARYA",
      introHeading: "Halo, Saya Yustina",
      introText:
        "Saya percaya pada pagi yang tenang, rasa ingin tahu, dan keindahan dalam detail kecil. Berbasis di Surabaya, karya saya memadukan rekayasa web dengan fotografi dan cerita visual.",
      introCta: "KENALI SAYA LEBIH JAUH",
      waysTitle: "Hal yang Bisa Kita Ciptakan Bersama",
      waysCta: "LIHAT SEMUA HOBI",
      ways: [
        { title: "Pengembangan Web", desc: "Aplikasi web Next.js & TypeScript responsif yang dibangun teliti." },
        { title: "UI & Storytelling", desc: "Antarmuka ramah pengguna dengan sentuhan estetika hangat." },
        { title: "Fotografi Visual", desc: "Mengabadikan momen candid, cahaya senja, dan alam sekitar." },
        { title: "Proyek Kreatif", desc: "Kolaborasi ide digital yang dirancang untuk memberi dampak." },
      ],
      worksTitle: "Karya & Momen Pilihan",
      worksMore: "LIHAT GALERI LENGKAP",
      filters: { all: "SEMUA", coding: "KODING", photo: "FOTOGRAFI", creative: "KREATIF" },
      processTitle: "5 Ways to Be Humble Like the Virgin Mary",
      process: [
        {
          step: "1",
          title: "Say Yes to God",
          desc: "Belajar menerima kehendak Tuhan dengan hati yang terbuka, seperti Maria melalui jawaban “Fiat” (Lukas 1:38).",
        },
        {
          step: "2",
          title: "Serve Others with Love",
          desc: "Mendahulukan pelayanan dan kebutuhan sesama, seperti Maria mengunjungi Elisabet (Lukas 1:39–40).",
        },
        {
          step: "3",
          title: "Live Simply",
          desc: "Tidak menyombongkan diri atas apa yang dimiliki, tetapi tetap sederhana dan bersyukur (Lukas 1:46–48).",
        },
        {
          step: "4",
          title: "Trust God in Every Situation",
          desc: "Tetap percaya kepada penyelenggaraan Tuhan, bahkan ketika jalan hidup tidak mudah.",
        },
        {
          step: "5",
          title: "Grow in Prayer and Silence",
          desc: "Belajar merenungkan setiap pengalaman hidup dalam keheningan dan menyimpannya dalam hati (Lukas 2:19).",
        },
      ],
      processQuote:
        "“With the heart of Mary, may we choose humility every day and walk closer to God in love.”",
    },
    about: {
      subtitle: "KISAH & PERJALANAN",
      title: "Hati yang ingin tahu, kode yang terstruktur.",
      p1: "Halo! Saya Yustina Rizky Sukma Pratiwi, mahasiswi Informatika, pengembang web, dan seorang suster biarawati Kongregasi SPM yang berdomisili di Surabaya, Jawa Timur. Saya senang mengubah ide abstrak menjadi ruang digital yang hangat dan mudah digunakan.",
      p2: "Baik saat merancang komponen React, berjalan-jalan membawa kamera, maupun menjalani panggilan hidup saya, saya selalu mencari harmoni antara logika, kreativitas, iman, dan estetika.",
      eduTitle: "Pendidikan & Panggilan",
      eduRole: "Mahasiswi Informatika (UKWMS Surabaya) • Suster Kongregasi SPM",
      eduDesc: "Berfokus pada teknologi web modern, sistem desain UI/UX, dan karya digital yang bermakna.",
      skillsTitle: "Keahlian & Perangkat",
    },
    hobbies: {
      subtitle: "DI BALIK LAYAR",
      title: "Hal-hal kecil yang menginspirasi hari saya.",
      desc: "Saat beristirahat sejenak dari papan ketik, kebiasaan ini menjaga kreativitas saya tetap hidup.",
      items: [
        {
          title: "Fotografi Golden Hour",
          tag: "Seni Visual",
          desc: "Mengejar bayangan sore yang hangat, sudut kota yang tenang, dan detail alam di Surabaya.",
        },
        {
          title: "Bermain Musik",
          tag: "Musik & Harmoni",
          desc: "Memainkan melodi lembut, berlatih lagu pujian, dan menemukan ketenangan melalui irama serta akor musik.",
        },
        {
          title: "Membaca & Menulis Jurnal",
          tag: "Slow Living",
          desc: "Mengumpulkan kutipan, menggambar sketsa ide di kertas, dan merenung ditemani teh hangat.",
        },
        {
          title: "Menjelajah Kafe & Alam",
          tag: "Eksplorasi",
          desc: "Menemukan sudut hijau yang asri dan tempat tenang untuk menyegarkan pikiran.",
        },
      ],
    },
    gallery: {
      subtitle: "ARSIP PILIHAN",
      title: "Bingkai, Kode & Kenangan",
      desc: "Kumpulan hasil fotografi, tangkapan proyek koding, dan eksplorasi visual.",
      close: "Tutup Pratinjau",
    },
    contact: {
      subtitle: "HUBUNGI SAYA",
      title: "Kirimkan pesan hangat untuk berkolaborasi.",
      desc: "Punya ide proyek, ajakan kerja sama, atau sekadar ingin menyapa? Silakan kirim pesan di bawah ini!",
      nameLabel: "Nama Lengkap",
      emailLabel: "Alamat Email",
      msgLabel: "Pesan Anda",
      sendBtn: "KIRIM PESAN",
      sentAlert: "Terima kasih! Pesan kamu sudah tercatat.",
      findMe: "Temukan saya juga di sini:",
    },
    footer: {
      explore: "JELAJAHI",
      info: "SOROTAN",
      loopTitle: "Tetap Terhubung",
      loopDesc: "Catatan seputar pengembangan web, fotografi, dan proyek digital.",
      emailPlaceholder: "Alamat email kamu",
      copyright: "© 2026 Yustina Rizky Sukma Pratiwi (UKWMS). Surabaya, Jawa Timur.",
    },
  },
};

interface AppContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: (typeof translations)["en"];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [lang, setLangState] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>("light");

  const applyTheme = (mode: Theme) => {
    const root = document.documentElement;
    const isDark = mode === "dark";

    root.classList.toggle("dark", isDark);
    root.style.setProperty("--bg-page", isDark ? "#15211E" : "#F7F2E7");
    root.style.setProperty("--bg-section", isDark ? "#1C2B28" : "#EFE7D6");
    root.style.setProperty("--bg-card", isDark ? "#22332F" : "#FCF9F2");
    root.style.setProperty("--text-primary", isDark ? "#F4EFE6" : "#23332F");
    root.style.setProperty("--text-muted", isDark ? "#B2C0BB" : "#5B6B65");
    root.style.setProperty("--border-soft", isDark ? "#314742" : "#DFD5C3");
  };

  useEffect(() => {
    applyTheme("light");
    try {
      const savedTheme = localStorage.getItem("yustina-theme") as Theme | null;
      const savedLang = localStorage.getItem("yustina-lang") as Lang | null;
      if (savedTheme === "dark" || savedTheme === "light") {
        setTheme(savedTheme);
        applyTheme(savedTheme);
      }
      if (savedLang === "en" || savedLang === "id") {
        setLangState(savedLang);
        document.documentElement.lang = savedLang;
      }
    } catch {}
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    applyTheme(next);
    try {
      localStorage.setItem("yustina-theme", next);
    } catch {}
  };

  const setLang = (l: Lang) => {
    setLangState(l);
    document.documentElement.lang = l;
    try {
      localStorage.setItem("yustina-lang", l);
    } catch {}
  };

  return (
    <AppContext.Provider value={{ lang, setLang, theme, toggleTheme, t: translations[lang] }}>
      <div
        style={{
          backgroundColor: theme === "dark" ? "#15211E" : "#F7F2E7",
          color: theme === "dark" ? "#F4EFE6" : "#23332F",
        }}
        className="min-h-screen flex flex-col transition-colors duration-300"
      >
        {mounted ? children : null}
      </div>
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}