"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Sparkles,
  Flower2,
  Heart,
  CalendarDays,
  Camera,
  Palette,
  Star,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=85",
    eyebrow: "Amritsar Decorate",
    title: "Where every moment",
    accent: "becomes a memory.",
    subtitle:
      "Weddings, receptions and celebrations styled with thoughtful details, romantic florals and a setting that reflects you.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=2000&q=85",
    eyebrow: "The art of styling",
    title: "Beautiful occasions,",
    accent: "beautifully imagined.",
    subtitle:
      "From intimate gatherings to grand celebrations — every detail is designed around your vision.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85",
    eyebrow: "Crafted with care",
    title: "It's more than",
    accent: "how it looks.",
    subtitle:
      "It's how it feels. Let's create an atmosphere your guests will remember long after the day is over.",
  },
];

const stats = [
  { value: "500+", label: "Celebrations styled" },
  { value: "12+", label: "Years of artistry" },
  { value: "100%", label: "Personalised designs" },
];

const ctas = [
  {
    href: "/services",
    eyebrow: "What we create",
    title: "Services",
    description:
      "Weddings, receptions, engagements, birthdays, anniversaries and corporate events — explore the celebrations we style.",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=1200&q=85",
    icon: Palette,
    cta: "Visit services",
  },
  {
    href: "/events",
    eyebrow: "Recent celebrations",
    title: "Events",
    description:
      "A curated look at the moments we've helped bring to life — themes, settings and details from real occasions.",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=85",
    icon: CalendarDays,
    cta: "Visit events",
  },
  {
    href: "/gallery",
    eyebrow: "The inspiration edit",
    title: "Gallery",
    description:
      "Browse floral arrangements, tablescapes and styled settings — visual inspiration to spark your own ideas.",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85",
    icon: Camera,
    cta: "Visit gallery",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

/* ------------------------------------------------------------------ */
/*  Background floating blooms (decorative)                            */
/* ------------------------------------------------------------------ */

function FloatingAccent({ className }: { className: string }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full blur-[90px] ${className}`}
      aria-hidden
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Section heading                                                    */
/* ------------------------------------------------------------------ */

function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  centered = true,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-2xl`}>
      <div
        className={`mb-5 flex items-center gap-3 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-[#bd9565]" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9d774d] sm:text-xs">
          {eyebrow}
        </span>
        <span className="h-px w-8 bg-[#bd9565]" />
      </div>

      <h2
        className="text-3xl font-normal leading-tight tracking-[-0.04em] text-[#382720] sm:text-4xl lg:text-5xl"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        {title}
        {accent && (
          <>
            {" "}
            <span className="italic text-[#b17c69]">{accent}</span>
          </>
        )}
      </h2>

      {description && (
        <p className="mt-5 text-sm leading-7 text-[#78675e] sm:text-base sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

function Hero() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  // Auto-advance hero slides
  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setActive((p) => (p + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <section
      ref={containerRef}
      className="relative h-svh min-h-160 w-full overflow-hidden bg-[#271914]"
      aria-label="Hero"
    >
      {/* Slides */}
      {heroSlides.map((slide, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={false}
          animate={{
            opacity: i === active ? 1 : 0,
            scale: i === active ? 1.04 : 1.12,
          }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: i === active ? imageY : 0 }}
          aria-hidden={i !== active}
        >
          <Image
            src={slide.image}
            alt="Elegant celebration decoration"
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      ))}

      {/* Overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-linear-to-t from-[#1c0f0a] via-[#1c0f0a]/55 to-[#1c0f0a]/25"
      />

      {/* Floating blooms */}
      <FloatingAccent className="-left-24 top-24 h-72 w-72 bg-[#b17c69]/25" />
      <FloatingAccent className="-right-24 bottom-24 h-80 w-80 bg-[#d7b783]/20" />

      {/* Top bar */}

      {/* Hero text */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex h-full items-center px-5 sm:px-8 lg:px-12"
      >
        <div className="mx-auto w-full max-w-325">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#e2c49a]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#e2c49a] sm:text-xs">
                {heroSlides[active].eyebrow}
              </span>
            </motion.div>

            {/* Title — animated per slide */}
            <h1
              className="text-4xl font-normal leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-7xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {heroSlides.map((slide, i) => (
                <motion.span
                  key={i}
                  className="block"
                  initial={false}
                  animate={{
                    opacity: i === active ? 1 : 0,
                    y: i === active ? 0 : 18,
                  }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  style={{ position: i === active ? "static" : "absolute", pointerEvents: "none" }}
                >
                  {slide.title}
                  <span className="block italic text-[#edc9ac]">
                    {slide.accent}
                  </span>
                </motion.span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.p
              key={`subtitle-${active}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-7 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8"
            >
              {heroSlides[active].subtitle}
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="/Services"
                className="group inline-flex min-h-13.5 items-center gap-3 bg-[#e2c49a] px-7 text-sm font-medium text-[#382720] transition-all duration-300 hover:bg-[#f1ddbd] hover:shadow-[0_18px_40px_-18px_rgba(226,196,154,0.6)]"
              >
                Explore services
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="/gallery"
                className="group inline-flex min-h-13.5 items-center gap-3 border border-white/40 px-7 text-sm font-medium text-white transition-colors duration-300 hover:border-[#e2c49a] hover:bg-white/5"
              >
                Visit gallery
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 sm:bottom-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActive(i)}
            className="group relative h-1 overflow-hidden bg-white/25 transition-all duration-500"
            style={{ width: i === active ? 36 : 14 }}
          >
            <motion.span
              className="absolute inset-0 origin-left bg-[#e2c49a]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: i === active ? 1 : 0 }}
              transition={{ duration: 6, ease: "linear" }}
            />
          </button>
        ))}
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 right-6 z-20 hidden flex-col items-center gap-2 text-white/60 lg:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.22em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.span>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Intro / About                                                      */
/* ------------------------------------------------------------------ */

function About() {
  return (
    <section
      id="about"
      className="relative bg-[#fcf8f3] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto grid max-w-312.5 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative aspect-4/5 max-h-160 overflow-hidden rounded-t-full bg-[#e8d6c7]">
            <Image
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1100&q=85"
              alt="Elegant celebration table with floral decoration"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>

          {/* Floating card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute -bottom-5 -right-1 flex max-w-65 items-center gap-3 border border-[#e5d4c2] bg-[#fffdf9] p-4 shadow-xl sm:-right-5 sm:p-5"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f5e8e1] text-[#ad7d6c]">
              <Heart size={21} strokeWidth={1.4} />
            </span>
            <div>
              <p className="text-sm font-medium">Your occasion, your vision</p>
              <p className="mt-1 text-xs text-[#8a766a]">
                Styling with thoughtful details
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Copy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="pt-4 lg:pt-0"
        >
          <SectionHeading
            eyebrow="A little about us"
            title="Beautiful occasions,"
            accent="beautifully imagined."
            centered={false}
          />

          <p className="mt-7 text-sm leading-8 text-[#77665e] sm:text-base">
            At Amritsar Decorate, every celebration begins with an idea. The
            colours you love, the atmosphere you imagine and the moments you
            want to remember all help shape the experience.
          </p>

          <p className="mt-4 text-sm leading-8 text-[#77665e] sm:text-base">
            Our approach is centred on thoughtful styling, considered details
            and a design direction that suits your occasion — whether you are
            planning a wedding or an intimate gathering.
          </p>

          {/* Stats */}
          <div className="mt-9 grid grid-cols-3 gap-4 border-t border-[#e0cdb9] pt-7">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p
                  className="text-3xl text-[#382720] sm:text-4xl"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-[#917c70]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <a
            href="/Services"
            className="group mt-9 inline-flex items-center gap-3 border-b border-[#b99a72] pb-2 text-sm font-medium text-[#5a4031] transition-colors hover:text-[#b17c69]"
          >
            Discover what we create
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Brand statement                                                    */
/* ------------------------------------------------------------------ */

function BrandStatement() {
  return (
    <section className="relative overflow-hidden bg-[#382720] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
      <FloatingAccent className="-left-20 top-0 h-72 w-72 bg-[#b17c69]/15" />
      <FloatingAccent className="-right-20 bottom-0 h-72 w-72 bg-[#d7b783]/10" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={reveal}
        transition={{ duration: 0.75 }}
        className="relative mx-auto max-w-4xl text-center"
      >
        <Sparkles size={27} strokeWidth={1.3} className="mx-auto mb-6 text-[#dfc094]" />

        <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-[#dfc094] sm:text-xs">
          The art of a meaningful celebration
        </p>

        <h2
          className="text-4xl font-normal leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          It&apos;s more than
          <span className="mt-2 block italic text-[#dfb99b]">
            how a moment looks.
          </span>
          <span className="mt-2 block">It&apos;s how it feels.</span>
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/65 sm:text-base">
          The right setting brings people together, reflects your style and
          gives your celebration its own character. Explore what that could
          look like for you.
        </p>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Explore CTAs (Services · Events · Gallery)                          */
/* ------------------------------------------------------------------ */

function ExploreCtas() {
  return (
    <section
      id="explore"
      className="bg-[#f4ebe3] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-325">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          transition={{ duration: 0.65 }}
        >
          <SectionHeading
            eyebrow="Begin your exploration"
            title="Where would you"
            accent="like to start?"
            description="Three ways to discover how we style celebrations — find inspiration, see our services, or browse recent events."
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3"
        >
          {ctas.map((cta) => {
            const Icon = cta.icon;
            return (
              <motion.a
                key={cta.title}
                href={cta.href}
                variants={reveal}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group relative block overflow-hidden border border-[#e7d9cd] bg-[#fffdf9]"
              >
                {/* Image */}
                <div className="relative aspect-4/3 overflow-hidden bg-[#eadbd0]">
                  <Image
                    src={cta.image}
                    alt={`${cta.title} — Amritsar Decorate`}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover transition-transform duration-800 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#271914]/75 via-[#271914]/15 to-transparent transition-opacity duration-500 group-hover:from-[#271914]/85" />

                  {/* Icon badge */}
                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-[#e2c49a] group-hover:bg-[#e2c49a] group-hover:text-[#382720]">
                    <Icon size={20} strokeWidth={1.4} />
                  </div>

                  {/* Number */}
                  <span className="absolute right-5 top-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f0d1a7]">
                    {cta.eyebrow}
                  </span>

                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <h3
                      className="text-3xl text-white sm:text-4xl"
                      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                    >
                      {cta.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-7">
                  <p className="text-sm leading-7 text-[#78665c]">
                    {cta.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-[#ece0d4] pt-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#936c46] transition-colors group-hover:text-[#382720]">
                      {cta.cta}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d8c2aa] text-[#936c46] transition-all duration-300 group-hover:border-[#382720] group-hover:bg-[#382720] group-hover:text-white">
                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                </div>

                {/* Animated underline */}
                <span className="absolute inset-x-0 bottom-0 h-0.75 origin-left scale-x-0 bg-linear-to-r from-[#bd9565] via-[#b17c69] to-[#e2c49a] transition-transform duration-500 group-hover:scale-x-100" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Small reassurance row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-[#e0cdb9] pt-8 text-center"
        >
          {[
            { icon: Flower2, label: "Thoughtful florals" },
            { icon: Palette, label: "Personalised styling" },
            { icon: Star, label: "Considered details" },
            { icon: Heart, label: "Designed around you" },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#8a7567]"
            >
              <Icon size={15} strokeWidth={1.5} className="text-[#b08a60]" />
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Closing banner                                                     */
/* ------------------------------------------------------------------ */

function ClosingBanner() {
  return (
    <section className="relative overflow-hidden bg-[#fcf8f3] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="relative mx-auto max-w-325 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1800&q=85"
            alt="Romantic floral wedding celebration"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#1c0f0a]/85 via-[#1c0f0a]/65 to-[#1c0f0a]/45" />
        </div>

        <div className="relative flex min-h-90 flex-col items-start justify-center px-6 py-16 text-left sm:min-h-105 sm:px-12 lg:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <Flower2 size={26} strokeWidth={1.3} className="mb-6 text-[#e8c89e]" />

            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.27em] text-[#f0d1a7] sm:text-xs">
              Your next beautiful chapter
            </p>

            <h2
              className="text-4xl leading-tight text-white sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Let&apos;s make your
              <span className="mt-2 block italic text-[#edc9ac]">
                occasion unforgettable.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-8 text-white/80 sm:text-base">
              Wander through our services, recent events and gallery — and
              picture your celebration styled with the same care.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/Services"
                className="group inline-flex min-h-13.5 items-center gap-3 bg-[#e2c49a] px-7 text-sm font-medium text-[#382720] transition-colors hover:bg-[#f1ddbd]"
              >
                Explore services
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="/events"
                className="group inline-flex min-h-13.5 items-center gap-3 border border-white/40 px-7 text-sm font-medium text-white transition-colors hover:border-[#e2c49a] hover:bg-white/5"
              >
                See recent events
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer (slim, no contact info)                                     */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="border-t border-[#e0cdb9] bg-[#fcf8f3] px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-325 flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-2 text-[#382720]">
          <Flower2 size={20} strokeWidth={1.4} className="text-[#b08a60]" />
          <span
            className="text-lg tracking-[0.04em]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Amritsar Decorate
          </span>
        </div>

        <nav className="flex items-center gap-6 text-sm text-[#77665e]">
          <a href="/Services" className="transition-colors hover:text-[#382720]">
            Services
          </a>
          <a href="/events" className="transition-colors hover:text-[#382720]">
            Events
          </a>
          <a href="/gallery" className="transition-colors hover:text-[#382720]">
            Gallery
          </a>
        </nav>

        <p className="text-xs text-[#917c70]">
          Thoughtful styling for meaningful celebrations.
        </p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#fcf8f3] text-[#382720]">
      <Hero />
      <About />
      <BrandStatement />
      <ExploreCtas />
      <ClosingBanner />
      <Footer />
    </main>
  );
}
