
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  Flower2,
  Heart,
  Camera,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const services = [
  { label: "Wedding Decoration", href: "/Services" },
  { label: "Reception Decoration", href: "/Services" },
  { label: "Engagement Ceremonies", href: "/Services" },
  { label: "Birthday Celebrations", href: "/Services" },
  { label: "Corporate Events", href: "/Services" },
  { label: "Custom Event Styling", href: "/Services" },
];

const exploreLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "/Services" },
  { label: "Our Portfolio", href: "#portfolio" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
];

const currentYear = new Date().getFullYear();

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 450);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 15, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.85 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.94 }}
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center border border-[#d7bd98] bg-[#382720] text-white shadow-xl transition-colors hover:bg-[#a47b51] sm:bottom-8 sm:right-8"
        >
          <ArrowUp size={19} strokeWidth={1.7} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-2 py-1.5 text-[13px] text-[#e8dcd2]/75 transition-colors duration-300 hover:text-[#f0d1a3]"
      >
        <ChevronRight
          size={13}
          className="shrink-0 text-[#b99a72] opacity-60 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
        />
        {children}
      </Link>
    </li>
  );
}

export function Footer() {
  return (
    <>
      <ScrollToTop />

      <footer className="relative mt-auto overflow-hidden bg-[#30221e] text-[#fffaf4]">
        {/* Elegant decorative background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-32 h-80 w-80 rounded-full bg-[#9b6e58]/15 blur-[100px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#c7a16c]/10 blur-[120px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#f6e5cf 0.7px, transparent 0.7px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Top gold accent */}
        <div className="h-px bg-linear-to-r from-transparent via-[#d7b783] to-transparent" />

        <div className="relative mx-auto max-w-360 px-5 sm:px-8 lg:px-12">
          {/* Premium call-to-action */}
          <div className="grid gap-8 border-b border-white/10 py-12 sm:py-16 md:grid-cols-[1fr_auto] md:items-center lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65 }}
            >
              <div className="mb-4 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.28em] text-[#d7b783] sm:text-xs">
                <Sparkles size={14} strokeWidth={1.4} />
                Your vision, beautifully styled
              </div>

              <h2
                className="max-w-2xl text-3xl font-normal leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                Let&apos;s create something
                <span className="block mt-1 italic text-[#dfb99b]">
                  worth remembering.
                </span>
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-[#e8dcd2]/65 sm:text-base">
                Tell us about your special occasion. Let&apos;s explore
                ideas and create a setting that feels uniquely yours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="flex flex-col gap-3 sm:flex-row md:flex-col"
            >
              <Link
                href="#contact"
                className="group inline-flex min-h-13 items-center justify-center gap-3 bg-[#e2c49a] px-6 text-sm font-medium text-[#382720] transition-colors duration-300 hover:bg-[#f1ddbd]"
              >
                <CalendarDays size={17} strokeWidth={1.6} />
                Plan Your Event
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="#portfolio"
                className="inline-flex min-h-12.5 items-center justify-center gap-2 border border-white/20 px-6 text-sm text-white/85 transition-colors hover:border-[#d7b783] hover:text-[#e2c49a]"
              >
                Explore Our Work
                <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>

          {/* Footer columns */}
          <div className="grid gap-12 py-12 sm:py-14 md:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_1fr_1fr] lg:gap-10 lg:py-16">
            {/* Brand */}
            <div>
              <Link
                href="#home"
                aria-label="Amritsar Decorate home"
                className="group inline-flex items-center gap-3"
              >
                <div className="relative h-19 w-19 shrink-0 overflow-hidden rounded-full border border-[#d7bd98]/70 bg-[#fffaf4] p-0.5">
                  <Image
                    src="/logo.jpeg"
                    alt="Amritsar Decorate floral logo"
                    fill
                    sizes="76px"
                    className="rounded-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div>
                  <span
                    className="block text-[23px] leading-none tracking-[-0.055em] text-[#fff5e9] sm:text-[27px]"
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                    }}
                  >
                    Amritsar
                  </span>
                  <span className="mt-2 block text-[10px] uppercase tracking-[0.3em] text-[#d7b783]">
                    Decorate
                  </span>
                  <span className="mt-2 block text-[9px] tracking-[0.12em] text-white/45">
                    ELEGANCE IN EVERY DETAIL
                  </span>
                </div>
              </Link>

              <p className="mt-6 max-w-sm text-[13px] leading-7 text-[#e8dcd2]/65">
                Thoughtfully styled celebrations, beautiful decorative
                details and memorable settings for life&apos;s special
                occasions.
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs text-[#d7b783]">
                <Flower2 size={16} strokeWidth={1.4} />
                <span>Every detail, with care.</span>
              </div>

              {/* Social links: connect your real profiles here */}
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  aria-label="Ask about Instagram"
                  className="group flex h-10 items-center gap-2 border border-white/15 px-3 text-xs text-white/75 transition-all hover:border-[#d7b783] hover:text-[#e2c49a]"
                >
                  <Camera size={16} />
                  Instagram
                  <ArrowUpRight
                    size={13}
                    className="opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href="#contact"
                  aria-label="Contact Amritsar Decorate"
                  className="grid h-10 w-10 place-items-center border border-white/15 text-white/75 transition-colors hover:border-[#d7b783] hover:text-[#e2c49a]"
                >
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.23em] text-[#e2c49a]">
                Our Services
              </h3>

              <ul className="space-y-1">
                {services.map((service) => (
                  <FooterLink key={service.label} href={service.href}>
                    {service.label}
                  </FooterLink>
                ))}
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h3 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.23em] text-[#e2c49a]">
                Explore
              </h3>

              <ul className="space-y-1">
                {exploreLinks.map((item) => (
                  <FooterLink key={item.label} href={item.href}>
                    {item.label}
                  </FooterLink>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.23em] text-[#e2c49a]">
                Get In Touch
              </h3>

              <p className="mb-6 text-[13px] leading-7 text-[#e8dcd2]/65">
                Have an event in mind? We&apos;d love to hear what
                you&apos;re planning.
              </p>

              <a
                href="#contact"
                className="group flex items-start gap-3 border-b border-white/10 py-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#d7b783]/30 text-[#d7b783] transition-colors group-hover:bg-[#d7b783] group-hover:text-[#30221e]">
                  <Mail size={16} />
                </span>

                <span className="min-w-0">
                  <span className="block text-[10px] uppercase tracking-[0.15em] text-white/45">
                    Enquiries
                  </span>
                  <span className="mt-1 block text-sm text-white/85 transition-colors group-hover:text-[#e2c49a]">
                    Send an enquiry
                  </span>
                </span>
              </a>

              <a
                href="#contact"
                className="group flex items-start gap-3 border-b border-white/10 py-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#d7b783]/30 text-[#d7b783] transition-colors group-hover:bg-[#d7b783] group-hover:text-[#30221e]">
                  <MapPin size={16} />
                </span>

                <span className="min-w-0">
                  <span className="block text-[10px] uppercase tracking-[0.15em] text-white/45">
                    Event location
                  </span>
                  <span className="mt-1 block text-sm text-white/85 transition-colors group-hover:text-[#e2c49a]">
                    Discuss your venue
                  </span>
                </span>
              </a>

              <Link
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-[#d7b783] transition-colors hover:text-white"
              >
                Contact our team
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Brand statement */}
          <div className="border-y border-white/10 py-6">
            <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
              <p
                className="text-xl italic text-[#e2c49a] sm:text-2xl"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                Moments that stay with you.
              </p>

              <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-white/45">
                <Heart size={13} className="text-[#d7b783]" />
                Made for your special moments
              </p>
            </div>
          </div>

          {/* Legal footer */}
          <div className="flex flex-col items-center justify-between gap-4 py-6 text-center sm:flex-row sm:text-left">
            <p className="text-[11px] leading-5 text-white/45">
              © {currentYear} Amritsar Decorate. All rights reserved.
            </p>

            <Link
              href="#home"
              className="inline-flex items-center gap-2 text-[11px] text-white/55 transition-colors hover:text-[#e2c49a]"
            >
              Back to the beginning
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
