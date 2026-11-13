"use client";

import { useState } from "react";
import { useApp } from "@/context/AppContext";

type CategoryKey = "photo" | "coding" | "creative";

interface GalleryItem {
  id: number;
  title: { en: string; id: string };
  category: CategoryKey;
  src: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: { en: "Photography", id: "Fotografi" },
    category: "photo",
    src: "/images/photography.jpg",
  },
  {
    id: 2,
    title: { en: "Code & Workspace", id: "Kode & Ruang Kerja" },
    category: "coding",
    src: "/images/coding.jpg",
  },
  {
    id: 3,
    title: { en: "Storybook Portrait", id: "Potret Storybook" },
    category: "creative",
    src: "/images/1.jpg",
  },
  {
    id: 4,
    title: { en: "Surabaya Streets", id: "Jalanan Surabaya" },
    category: "photo",
    src: "/images/street.jpg",
  },
  {
    id: 5,
    title: { en: "Activity", id: "Aktivitas" },
    category: "coding",
    src: "/images/foto3.jpg",
  },
  {
    id: 6,
    title: { en: "Quiet Moment", id: "Momen Tenang" },
    category: "creative",
    src: "/images/foto2.jpg",
  },
];

export default function GalleryPage() {
  const { lang, t } = useApp();
  const [activeFilter, setActiveFilter] = useState<"all" | CategoryKey>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const items =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((i) => i.category === activeFilter);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <p className="text-xs font-bold tracking-[0.25em] text-[#B96B4B]">
          {t.gallery.subtitle}
        </p>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold mt-2">
          {t.gallery.title}
        </h1>
        <p className="text-sm text-[var(--text-muted)] mt-3">{t.gallery.desc}</p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {(["all", "photo", "coding", "creative"] as const).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveFilter(key)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider transition cursor-pointer ${
                activeFilter === key
                  ? "bg-[#2C4C47] text-white"
                  : "bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border-soft)]"
              }`}
            >
              {t.home.filters[key]}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Galeri */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelectedItem(item)}
            className="storybook-card rounded-2xl overflow-hidden text-left group hover:-translate-y-1 transition-transform cursor-pointer"
          >
            <div className="aspect-[4/3] overflow-hidden bg-[var(--bg-section)]">
              <img
                src={item.src}
                alt={item.title[lang]}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 flex items-center justify-between gap-2">
              <h3 className="font-serif font-bold text-base">
                {item.title[lang]}
              </h3>
              <span className="text-[11px] uppercase tracking-wider text-[#B96B4B] font-bold shrink-0">
                {t.home.filters[item.category]}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Modal Preview Gambar */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="storybook-card rounded-3xl max-w-xl w-full overflow-hidden p-4"
          >
            <img
              src={selectedItem.src}
              alt={selectedItem.title[lang]}
              className="w-full max-h-[65vh] object-contain rounded-2xl bg-[var(--bg-section)]"
            />
            <div className="flex items-center justify-between pt-4 px-2">
              <div>
                <p className="font-serif font-bold text-lg">
                  {selectedItem.title[lang]}
                </p>
                <p className="text-[11px] uppercase tracking-wider text-[#B96B4B] font-bold">
                  {t.home.filters[selectedItem.category]}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="px-4 py-1.5 rounded-full bg-[#B96B4B] text-white text-xs font-bold cursor-pointer"
              >
                {t.gallery.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}