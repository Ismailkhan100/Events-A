
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  type Variants,
} from "framer-motion";

import {
  Sparkles,
  Heart,
  Flower2,
  Camera,
  Palette,
  Gem,
  ArrowRight,
  X,
  ArrowUpRight,
  Crown,
  Eye,
  ChevronLeft,
  ChevronRight,
  PartyPopper,
} from "lucide-react";

/* -------------------------------------------------- */
/* BRAND CONFIG                                       */
/* -------------------------------------------------- */

const BRAND = {
  name: "Amritsar",
  subName: "DECORATE",
  tagline: "ELEGANCE IN EVERY DETAIL",
};
const currentYear = new Date().getFullYear();

/* -------------------------------------------------- */
/* CATEGORIES                                         */
/* -------------------------------------------------- */

const CATEGORIES = [
  { id: "all", label: "All Designs", icon: Sparkles },
  { id: "wedding", label: "Wedding Decor", icon: Heart },
  { id: "stage", label: "Stage Decoration", icon: Crown },
  { id: "floral", label: "Floral Decor", icon: Flower2 },
  { id: "mandap", label: "Mandap Decor", icon: Gem },
  { id: "engagement", label: "Engagement", icon: Heart },
  { id: "birthday", label: "Birthday Decor", icon: PartyPopper },
];

/* -------------------------------------------------- */
/* GALLERY DATA                                       */
/* Replace image paths with your actual photographs.  */
/* -------------------------------------------------- */

type GalleryItem = {
  id: number;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  size: "tall" | "wide" | "regular";
};

const GALLERY: GalleryItem[] = [
  {
    id: 1,
    category: "wedding",
    title: "Royal Wedding",
    subtitle: "Elegant Wedding Decoration",
    image: "/gallery/wedding-1.jpg",
    size: "tall",
  },
  {
    id: 2,
    category: "stage",
    title: "Grand Stage",
    subtitle: "Luxury Stage Decoration",
    image: "/gallery/stage-1.jpg",
    size: "wide",
  },
  {
    id: 3,
    category: "floral",
    title: "Floral Elegance",
    subtitle: "Beautiful Floral Arrangements",
    image: "/gallery/floral-1.jpg",
    size: "regular",
  },
  {
    id: 4,
    category: "engagement",
    title: "Forever Together",
    subtitle: "Engagement Decoration",
    image: "/gallery/engagement-1.jpg",
    size: "regular",
  },
  {
    id: 5,
    category: "mandap",
    title: "Traditional Mandap",
    subtitle: "Beautiful Wedding Mandap",
    image: "/gallery/mandap-1.jpg",
    size: "tall",
  },
  {
    id: 6,
    category: "birthday",
    title: "Birthday Celebration",
    subtitle: "Creative Birthday Setup",
    image: "/gallery/birthday-1.jpg",
    size: "wide",
  },
  {
    id: 7,
    category: "wedding",
    title: "Dream Wedding",
    subtitle: "Premium Wedding Styling",
    image: "/gallery/wedding-2.jpg",
    size: "regular",
  },
  {
    id: 8,
    category: "floral",
    title: "Petals & Beauty",
    subtitle: "Floral Entrance Design",
    image: "/gallery/floral-2.jpg",
    size: "regular",
  },
  {
    id: 9,
    category: "stage",
    title: "Signature Stage",
    subtitle: "Luxury Event Stage",
    image: "/gallery/stage-2.jpg",
    size: "tall",
  },
  {
    id: 10,
    category: "engagement",
    title: "A Beautiful Beginning",
    subtitle: "Romantic Engagement Setup",
    image: "/gallery/engagement-2.jpg",
    size: "regular",
  },
  {
    id: 11,
    category: "mandap",
    title: "Floral Mandap",
    subtitle: "Elegant Traditional Styling",
    image: "/gallery/mandap-2.jpg",
    size: "wide",
  },
  {
    id: 12,
    category: "birthday",
    title: "Special Moments",
    subtitle: "Birthday Celebration Decor",
    image: "/gallery/birthday-2.jpg",
    size: "regular",
  },
];

/* -------------------------------------------------- */
/* ANIMATIONS                                         */
/* -------------------------------------------------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const gridItemVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    y: 25,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    transition: { duration: 0.25 },
  },
};

/* -------------------------------------------------- */
/* REUSABLE REVEAL                                    */
/* -------------------------------------------------- */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------- */
/* GRID SIZES                                         */
/* -------------------------------------------------- */

function sizeClass(size: GalleryItem["size"]) {
  switch (size) {
    case "tall":
      return "md:row-span-2 min-h-[350px] md:min-h-0";

    case "wide":
      return "md:col-span-2 min-h-[280px]";

    default:
      return "min-h-[280px]";
  }
}

/* -------------------------------------------------- */
/* MAIN GALLERY PAGE                                  */
/* -------------------------------------------------- */

export default function GalleryPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "25%"]
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1, 0]
  );

  const [filter, setFilter] = useState("all");

  const [selected, setSelected] =
    useState<GalleryItem | null>(null);

  const filtered =
    filter === "all"
      ? GALLERY
      : GALLERY.filter(
          (item) => item.category === filter
        );

  const changeImage = (direction: number) => {
    if (!selected || filtered.length < 2) return;

    const currentIndex = filtered.findIndex(
      (item) => item.id === selected.id
    );

    const nextIndex =
      (currentIndex + direction + filtered.length) %
      filtered.length;

    setSelected(filtered[nextIndex]);
  };

  const selectedCategory = CATEGORIES.find(
    (category) => category.id === selected?.category
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fbf8f3] font-sans text-[#39271f]">

      {/* ============================================ */}
      {/* HERO SECTION                                 */}
      {/* ============================================ */}

      <section
        ref={heroRef}
        className="relative flex min-h-[80vh] items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-linear-to-br from-[#f3e8d9] via-[#fbf8f3] to-[#ead8c4]" />

          <div className="absolute -left-32 top-10 h-30rem w-30rem rounded-full bg-[#d9b99b]/25 blur-[120px]" />

          <div className="absolute -right-32 bottom-0 h-30rem w-30rem rounded-full bg-[#d7b47e]/20 blur-[120px]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#916b49 1px, transparent 1px), linear-gradient(90deg, #916b49 1px, transparent 1px)",
              backgroundSize: "65px 65px",
            }}
          />
        </motion.div>

        {/* Decorative flowers */}

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-[8%] top-[15%] text-[#b38a59]/20"
        >
          <Flower2 size={110} strokeWidth={0.7} />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-[12%] left-[7%] text-[#b38a59]/20"
        >
          <Flower2 size={150} strokeWidth={0.6} />
        </motion.div>

        {/* Hero content */}

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 mx-auto max-w-5xl px-6 text-center"
        >
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#b38a59]/30 bg-white/50 px-6 py-3 backdrop-blur-sm">
              <Sparkles
                size={15}
                className="text-[#b38a59]"
              />

              <span className="text-xs uppercase tracking-[0.3em] text-[#966d44]">
                Our Creative Collection
              </span>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="font-serif text-5xl leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
              Beautiful Spaces,
              <br />

              <span className="italic text-[#ad8050]">
                Unforgettable Moments
              </span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#806c60] md:text-lg">
              Discover the artistry of {BRAND.name}{" "}
              {BRAND.subName}. Explore beautiful wedding
              decorations, breathtaking stages and
              thoughtfully designed celebrations.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-10 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-[#b38a59]" />
              <Flower2
                size={24}
                className="text-[#b38a59]"
              />
              <span className="h-px w-12 bg-[#b38a59]" />
            </div>
          </Reveal>
        </motion.div>

        {/* Scroll indicator */}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="flex flex-col items-center gap-2 text-[#a47b50]"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">
              Explore
            </span>
            <div className="h-9 w-5 rounded-full border border-[#b38a59]/50 p-1">
              <div className="mx-auto h-2 w-1 rounded-full bg-[#b38a59]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* INTRO STRIP                                  */}
      {/* ============================================ */}

      <section className="border-y border-[#e8daca] bg-[#f5eee5] px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <div>
            <p className="font-serif text-2xl text-[#493027]">
              Every Detail Tells a Story.
            </p>

            <p className="mt-2 text-sm text-[#927b69]">
              A collection of creativity, beauty and craftsmanship.
            </p>
          </div>

          <div className="flex items-center gap-3 text-[#a47b50]">
            <Camera size={22} />
            <span className="text-xs uppercase tracking-[0.25em]">
              Our Gallery
            </span>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FILTER SECTION                               */}
      {/* ============================================ */}

      <section
        id="gallery"
        className="sticky top-0 z-30 border-b border-[#e9ded1] bg-[#fbf8f3]/95 px-5 py-6 backdrop-blur-xl md:py-8"
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2 md:gap-3">
          {CATEGORIES.map((cat) => {
            const active = filter === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`relative flex items-center gap-2 overflow-hidden rounded-full border px-4 py-3 text-xs tracking-wide transition-all duration-300 md:px-5 ${
                  active
                    ? "border-[#9e754c] bg-[#493027] text-white shadow-md"
                    : "border-[#e3d5c6] bg-white text-[#725c4d] hover:border-[#b38a59] hover:text-[#9e754c]"
                }`}
              >
                <cat.icon size={14} />
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* ============================================ */}
      {/* GALLERY GRID                                 */}
      {/* ============================================ */}

      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">

          <Reveal className="mb-12 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[#a47b50]">
              Discover Our Work
            </span>

            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              A Gallery of Elegance
            </h2>

            <p className="mt-4 text-sm text-[#927b69]">
              Explore our creative decoration collection.
            </p>
          </Reveal>

          <motion.div
            layout
            className="grid auto-rows-280px grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => (
                <motion.button
                  layout
                  key={item.id}
                  variants={gridItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={index}
                  whileHover={{ y: -6 }}
                  onClick={() => setSelected(item)}
                  className={`group relative overflow-hidden rounded-2xl border border-[#e3d5c6] bg-[#eee3d7] text-left shadow-sm transition-shadow hover:shadow-xl ${sizeClass(item.size)}`}
                >
                  {/* Actual project image */}

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Image overlay */}

                  <div className="absolute inset-0 bg-linear-to-t from-[#261710]/85 via-[#261710]/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Top corner */}

                  <div className="absolute left-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/20 text-white backdrop-blur-md">
                    <ArrowUpRight size={18} />
                  </div>

                  {/* Bottom content */}

                  <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                    <div className="mb-2 flex translate-y-3 items-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <Eye
                        size={14}
                        className="text-[#edcf9f]"
                      />

                      <span className="text-xs text-white">
                        View Design
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs tracking-wide text-white/75">
                      {item.subtitle}
                    </p>

                    <div className="mt-4 h-px w-12 bg-[#d6b58b] transition-all duration-500 group-hover:w-24" />
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="py-20 text-center text-[#927b69]">
              No designs available in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* ============================================ */}
      {/* FEATURED SECTION                             */}
      {/* ============================================ */}

      <section className="border-y border-[#e9ded1] bg-[#f2e9de] px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">

          <Reveal>
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-[#e2d1bf] shadow-xl">
              <Image
                src="/gallery/featured.jpg"
                alt="Amritsar Decorate signature decoration"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg gradient-to-t from-[#291a13]/70 to-transparent" />

              <div className="absolute bottom-7 left-7 text-white">
                <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#e8c99d]">
                  Amritsar Decorate
                </p>

                <h3 className="font-serif text-3xl">
                  The Art of Decoration
                </h3>
              </div>

              <div className="absolute right-6 top-6 rounded-full border border-white/40 bg-white/20 p-4 text-white backdrop-blur-md">
                <Crown size={24} />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-xs uppercase tracking-[0.3em] text-[#a47b50]">
                Our Creative Touch
              </span>
            </Reveal>

            <Reveal delay={1}>
              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
                Turning Your Vision Into
                <span className="italic text-[#ad8050]">
                  {" "}Beautiful Reality
                </span>
              </h2>
            </Reveal>

            <Reveal delay={2}>
              <p className="mt-7 leading-8 text-[#806c60]">
                At Amritsar Decorate, we believe every
                celebration deserves a beautiful setting.
                Our creative approach brings together
                thoughtful details, elegant designs and
                beautiful decoration concepts.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-9 grid grid-cols-2 gap-4">

                {[
                  {
                    icon: Flower2,
                    label: "Floral Designs",
                  },
                  {
                    icon: Crown,
                    label: "Elegant Stages",
                  },
                  {
                    icon: Gem,
                    label: "Premium Styling",
                  },
                  {
                    icon: Palette,
                    label: "Creative Concepts",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl border border-[#d9c6b1] bg-white/60 p-4 transition-colors hover:bg-white"
                  >
                    <item.icon
                      size={21}
                      className="shrink-0 text-[#ad8050]"
                    />

                    <span className="text-xs font-medium text-[#604a3b]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA SECTION                                  */}
      {/* ============================================ */}

      <section className="relative overflow-hidden px-6 py-28 text-center md:py-36">

        <div className="absolute inset-0 bg *:gradient-to-br from-[#f2e7d9] via-[#fbf8f3] to-[#ead9c5]" />

        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#d9b99b]/20 blur-[120px]" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#d7b47e]/20 blur-[120px]" />

        <Reveal className="relative mx-auto max-w-3xl">
          <Sparkles
            size={32}
            className="mx-auto mb-7 text-[#ad8050]"
          />

          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#a47b50]">
            Amritsar Decorate
          </p>

          <h2 className="font-serif text-4xl leading-tight md:text-6xl">
            Let&apos;s Make Your
            <br />

            <span className="italic text-[#ad8050]">
              Moments Beautiful
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-[#806c60] md:text-base">
            Every beautiful celebration begins with
            a beautiful idea. Let us create something
            special for your next occasion.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#493027] px-9 py-4 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#9e754c] hover:shadow-xl"
          >
            Let&apos;s Create Together
            <ArrowRight size={17} />
          </a>
        </Reveal>
      </section>

      {/* ============================================ */}
      {/* FOOTER                                       */}
      {/* ============================================ */}

      <footer className="border-t border-[#e9ded1] bg-[#38251e] px-6 py-10 text-[#f8eee3]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">

          <div>
            <h3 className="font-serif text-2xl">
              {BRAND.name}
            </h3>

            <p className="mt-1 text-xs tracking-[0.35em] text-[#d3ac7e]">
              {BRAND.subName}
            </p>
          </div>

          <p className="text-xs tracking-wider text-white/60">
            {BRAND.tagline}
          </p>

          <p className="text-xs text-white/50">
            © {currentYear} Amritsar Decorate.
            All rights reserved.
          </p>
        </div>
      </footer>

      {/* ============================================ */}
      {/* IMAGE PREVIEW MODAL                          */}
      {/* ============================================ */}

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#241710]/95 p-4 backdrop-blur-md md:p-8"
          >
            {/* Close */}

            <button
              onClick={() => setSelected(null)}
              aria-label="Close image preview"
              className="absolute right-6 top-6 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/15"
            >
              <X size={21} />
            </button>

            {/* Previous */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                changeImage(-1);
              }}
              aria-label="Previous image"
              className="absolute left-3 z-20 rounded-full bg-white/15 p-3 text-white transition-colors hover:bg-white/30 md:left-8"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Modal content */}

            <motion.div
              key={selected.id}
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="grid max-h-[85vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-[#fbf8f3] shadow-2xl md:grid-cols-2"
            >
              {/* Image */}

              <div className="relative min-h-300px bg-[#e8d8c6] md:min-h-550px">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Details */}

              <div className="flex flex-col justify-center overflow-y-auto p-7 md:p-12">

                <div className="mb-6 flex items-center gap-2 text-[#ad8050]">
                  <Sparkles size={17} />

                  <span className="text-xs uppercase tracking-[0.25em]">
                    Amritsar Decorate
                  </span>
                </div>

                <span className="mb-4 self-start rounded-full border border-[#d9c6b1] bg-[#f2e9de] px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#9e754c]">
                  {selectedCategory?.label}
                </span>

                <h3 className="font-serif text-3xl text-[#493027] md:text-4xl">
                  {selected.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#806c60]">
                  {selected.subtitle}
                </p>

                <div className="my-8 h-px w-full bg-[#e6d8c9]" />

                <p className="text-sm leading-7 text-[#806c60]">
                  Discover the beauty of this decoration
                  design, thoughtfully styled to bring
                  elegance and charm to your special
                  celebration.
                </p>

                <a
                  href="/contact"
                  className="mt-9 inline-flex items-center gap-3 self-start text-sm font-medium text-[#9e754c] transition-all hover:gap-5"
                >
                  Enquire About This Design
                  <ArrowRight size={17} />
                </a>
              </div>
            </motion.div>

            {/* Next */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                changeImage(1);
              }}
              aria-label="Next image"
              className="absolute right-3 z-20 rounded-full bg-white/15 p-3 text-white transition-colors hover:bg-white/30 md:right-8"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
