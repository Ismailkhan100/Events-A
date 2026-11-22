"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/About" },
  { name: "Services", href: "/Services" },
  { name: "Our Events", href: "/our-events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Wedding Decoration",
  "Reception Decoration",
  "Birthday Celebrations",
  "Corporate Events",
  "Engagement Ceremonies",
  "Custom Event Styling",
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-[#30221f] px-4 py-2 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-[#f5dba5] sm:text-xs">
        Creating Beautiful Memories, One Event at a Time
      </div>

      {/* Navbar */}
      <motion.header
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 border-b border-[#ead9cf] bg-[#fffdf9]/95 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-82px max-w-1400px items-center justify-between px-4 sm:px-8 lg:h-96px lg:px-12">

          {/* Logo and Brand */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-3"
            aria-label="Amritsar Decorate Home"
          >
            <div className="relative h-62px w-62px overflow-hidden rounded-full sm:h-72px sm:w-72px">
              <Image
                src="/logo/logo.jpeg"
                alt="Amritsar Decorate Logo"
                fill
                priority
                sizes="72px"
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col">
              <span
                className="text-[20px] font-semibold leading-tight tracking-[-0.06em] text-[#34231f] sm:text-[25px]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Amritsar
              </span>

              <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.3em] text-[#a77c42] sm:text-xs">
                Decorate
              </span>

              <span className="mt-1 hidden text-[9px] tracking-[0.12em] text-[#8d7770] sm:block">
                ELEGANCE IN EVERY DETAIL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative py-3 text-[13px] font-medium text-[#493b35] transition-colors hover:text-[#b17b4a]"
              >
                {link.name}
                <span className="absolute bottom-1 left-0 h-px w-0 bg-[#b17b4a] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="group hidden items-center gap-2 bg-[#382722] px-5 py-3 text-xs font-medium tracking-wide text-white transition-colors duration-300 hover:bg-[#a47748] lg:inline-flex"
          >
            Plan Your Event
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="grid h-11 w-11 place-items-center border border-[#ead9cf] text-[#382722] transition-colors hover:bg-[#f8eee8] lg:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-[#ead9cf] bg-[#fffdf9] lg:hidden"
            >
              <nav className="mx-auto flex max-w-1400px flex-col px-5 py-4 sm:px-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between border-b border-[#f0e5dc] py-4 text-sm font-medium text-[#493b35] transition-colors hover:text-[#b17b4a]"
                    >
                      {link.name}
                      <ArrowUpRight size={16} className="text-[#b17b4a]" />
                    </Link>
                  </motion.div>
                ))}

                <div className="py-4">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b17b4a]">
                    Our Services
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {services.map((service) => (
                      <Link
                        key={service}
                        href="/Services"
                        onClick={() => setMobileOpen(false)}
                        className="border border-[#eee0d6] px-3 py-3 text-xs leading-relaxed text-[#493b35] transition-colors hover:bg-[#f8eee8]"
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 bg-[#382722] px-5 py-4 text-sm font-medium text-white transition-colors hover:bg-[#a47748]"
                >
                  <Phone size={16} />
                  Plan Your Event
                  <ArrowUpRight size={16} />
                </Link>

                <p className="py-5 text-center text-[10px] uppercase tracking-[0.2em] text-[#9c8277]">
                  Amritsar Decorate · Elegance in Every Detail
                </p>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

export default Navbar;