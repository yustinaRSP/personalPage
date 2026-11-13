"use client";

import { useApp } from "@/context/AppContext";

export default function AboutPage() {
  const { t } = useApp();

  const skills = [
    "Next.js & React",
    "TypeScript",
    "Tailwind CSS",
    "UI/UX Prototyping",
    "Photography",
    "Responsive Design",
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-12">
        <p className="text-xs font-bold tracking-[0.25em] text-[#B96B4B]">
          {t.about.subtitle}
        </p>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold mt-2">
          {t.about.title}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center storybook-card rounded-3xl p-6 sm:p-10">
        <div className="md:col-span-5">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border-4 border-[var(--bg-section)] shadow-md">
            <img
              src="/images/1.jpg"
              alt="Yustina Rizky Sukma Pratiwi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-7 space-y-5">
          <h2 className="font-serif text-2xl font-bold">
            Yustina Rizky Sukma Pratiwi 🌿
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            {t.about.p1}
          </p>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            {t.about.p2}
          </p>

          <div className="p-4 rounded-2xl bg-[var(--bg-section)] border border-[var(--border-soft)]">
            <p className="text-xs font-bold uppercase tracking-wider text-[#B96B4B]">
              {t.about.eduTitle}
            </p>
            <p className="font-serif font-bold text-base mt-1">{t.about.eduRole}</p>
            <p className="text-xs text-[var(--text-muted)] mt-1">{t.about.eduDesc}</p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">
              {t.about.skillsTitle}
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#2C4C47] text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}