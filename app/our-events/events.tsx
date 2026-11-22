
"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Heart,
  Flower2,
  Gem,
  PartyPopper,
  CalendarHeart,
  Eye,
  X,
} from "lucide-react";

const reveal: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const categories = [
  "All Events",
  "Weddings",
  "Engagement",
  "Birthdays",
  "Anniversary",
  "Floral Decor",
];

const events = [
  {
    id: 1,
    title: "Elegant Wedding Celebration",
    category: "Weddings",
    description:
      "Beautifully styled wedding settings with graceful floral arrangements, elegant stages and thoughtful decorative details.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=85",
    number: "01",
  },
  {
    id: 2,
    title: "Dreamy Engagement Setup",
    category: "Engagement",
    description:
      "Celebrate the beginning of a beautiful journey with charming backdrops and sophisticated decorative styling.",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=85",
    number: "02",
  },
  {
    id: 3,
    title: "Birthday Moments",
    category: "Birthdays",
    description:
      "Creative birthday themes and colourful decorative elements that make every celebration feel special.",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=85",
    number: "03",
  },
  {
    id: 4,
    title: "Romantic Anniversary",
    category: "Anniversary",
    description:
      "Thoughtfully designed romantic settings to celebrate togetherness and unforgettable memories.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=85",
    number: "04",
  },
  {
    id: 5,
    title: "Floral Dreamscape",
    category: "Floral Decor",
    description:
      "Beautiful floral compositions that bring natural elegance, freshness and colour to special occasions.",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=85",
    number: "05",
  },
  {
    id: 6,
    title: "Grand Wedding Reception",
    category: "Weddings",
    description:
      "A stunning celebration atmosphere featuring carefully coordinated colours and decorative arrangements.",
    image:
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1000&q=85",
    number: "06",
  },
  {
    id: 7,
    title: "Beautiful Celebration",
    category: "Engagement",
    description:
      "Elegant event styling with beautiful details designed to complement your special moments.",
    image:
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1000&q=85",
    number: "07",
  },
  {
    id: 8,
    title: "Floral Elegance",
    category: "Floral Decor",
    description:
      "A beautiful blend of floral details and elegant decorative elements for memorable occasions.",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1000&q=85",
    number: "08",
  },
];

const highlights = [
  {
    icon: Heart,
    title: "Wedding Celebrations",
    text: "Elegant decoration concepts for your most meaningful day.",
  },
  {
    icon: Gem,
    title: "Engagement Events",
    text: "Beautiful settings for the beginning of a new journey.",
  },
  {
    icon: PartyPopper,
    title: "Birthday Celebrations",
    text: "Creative themes for moments worth celebrating.",
  },
  {
    icon: Flower2,
    title: "Floral Experiences",
    text: "Graceful floral details that transform every setting.",
  },
];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState("All Events");
  const [selectedEvent, setSelectedEvent] = useState<
    (typeof events)[number] | null
  >(null);

  const filteredEvents =
    activeCategory === "All Events"
      ? events
      : events.filter((event) => event.category === activeCategory);

  return (
    <main className="overflow-hidden bg-[#faf7f1] text-[#35251f]">

      {/* HERO SECTION */}
      <section className="relative flex min-h-720px items-center overflow-hidden bg-[#30211d] px-6 py-28">

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=90"
            alt="Elegant wedding event decoration"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg *:gradient-to-r from-[#241713] via-[#30211d]/85 to-[#30211d]/35" />
          <div className="absolute inset-0 bg *:gradient-to-t from-[#30211d]/70 via-transparent to-[#30211d]/20" />
        </div>

        <div className="absolute -right-20 top-10 h-96 w-96 rounded-full bg-[#dfc19d]/10 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "65px 65px",
          }}
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.16 } },
          }}
          className="relative mx-auto w-full max-w-7xl"
        >
          <motion.div
            variants={reveal}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#dfc19d]/40 bg-white/5 px-5 py-3 backdrop-blur-md"
          >
            <Sparkles size={15} className="text-[#dfc19d]" />
            <span className="text-xs tracking-[0.28em] text-[#dfc19d]">
              OUR EVENT COLLECTION
            </span>
          </motion.div>

          <motion.h1
            variants={reveal}
            className="max-w-4xl font-serif text-5xl leading-[1.12] text-[#fffaf3] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Every Event Has
            <br />
            A Story Worth
            <br />
            <span className="italic text-[#dfc19d]">
              Celebrating.
            </span>
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mt-8 max-w-xl text-base leading-8 text-[#f3e8dc]/80 md:text-lg"
          >
            From beautiful weddings to joyful celebrations,
            discover the art of creating unforgettable moments
            through thoughtful decoration and elegant styling.
          </motion.p>

          <motion.div variants={reveal} className="mt-10">
            <a
              href="#event-gallery"
              className="inline-flex items-center gap-3 rounded-full bg-[#dfc19d] px-8 py-4 text-sm font-semibold text-[#30211d] transition-all hover:gap-5 hover:bg-[#f0d9bd]"
            >
              Explore Our Events
              <ArrowRight size={17} />
            </a>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-10 right-8 hidden text-right md:block">
          <p className="font-serif text-2xl italic text-[#dfc19d]">
            Amritsar Decorate
          </p>
          <p className="mt-2 text-[10px] tracking-[0.3em] text-white/60">
            ELEGANCE IN EVERY DETAIL
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-24 md:py-32">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-[#a47b55]">
            THE ART OF CELEBRATION
          </span>

          <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
            Moments Become Memories,
            <br />
            <span className="italic text-[#a47b55]">
              Memories Become Forever.
            </span>
          </h2>

          <p className="mt-7 text-base leading-8 text-[#78675e]">
            Every celebration deserves its own special atmosphere.
            At Amritsar Decorate, we believe that the beauty of
            an event lies in its details. Explore different
            celebration styles and discover inspiration for
            your next special occasion.
          </p>

          <div className="mx-auto mt-9 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#c3a17e]" />
            <Flower2 className="text-[#a47b55]" size={22} />
            <span className="h-px w-12 bg-[#c3a17e]" />
          </div>
        </motion.div>
      </section>

      {/* EVENT HIGHLIGHTS */}
      <section className="bg-[#30211d] px-6 py-24 md:py-28">
        <div className="mx-auto max-w-7xl">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="text-xs font-semibold tracking-[0.3em] text-[#dfc19d]">
              CELEBRATE YOUR WAY
            </span>

            <h2 className="mt-5 font-serif text-4xl text-[#fffaf3] md:text-5xl">
              Occasions We
              <span className="italic text-[#dfc19d]">
                {" "}Celebrate.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#e9ded2]/60">
              Beautiful decoration inspiration for different
              occasions, each with its own character and charm.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -7 }}
                className="group border border-[#dfc19d]/20 bg-white/[0.035] p-8 text-center transition-all duration-500 hover:border-[#dfc19d]/50 hover:bg-white/[0.07]"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#dfc19d]/30 bg-[#dfc19d]/10 text-[#dfc19d] transition-transform duration-500 group-hover:rotate-12">
                  <item.icon size={28} strokeWidth={1.3} />
                </div>

                <h3 className="mt-7 font-serif text-2xl text-[#fffaf3]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#e9ded2]/60">
                  {item.text}
                </p>

                <div className="mx-auto mt-7 h-px w-10 bg-[#dfc19d]/50 transition-all duration-500 group-hover:w-20" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EVENT */}
      <section className="px-6 py-28 md:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-5 -top-5 h-40 w-40 border-l border-t border-[#b99570]/60" />

            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=90"
              alt="Wedding celebration decor"
              className="relative aspect-5/4 w-full object-cover"
            />

            <div className="absolute -bottom-7 -right-3 bg-[#30211d] px-8 py-7 text-center shadow-xl md:-right-8">
              <Flower2 className="mx-auto text-[#dfc19d]" size={28} />
              <p className="mt-3 font-serif text-xl text-[#fffaf3]">
                Special Moments
              </p>
              <p className="mt-1 text-[10px] tracking-[0.25em] text-[#dfc19d]">
                BEAUTIFULLY CREATED
              </p>
            </div>
          </motion.div>

          <div className="lg:pl-8">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="text-xs font-semibold tracking-[0.3em] text-[#a47b55]">
                A CELEBRATION OF LOVE
              </span>

              <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
                Weddings That
                <br />
                Feel Like
                <br />
                <span className="italic text-[#a47b55]">
                  A Fairytale.
                </span>
              </h2>

              <p className="mt-7 leading-8 text-[#78675e]">
                A wedding is more than a celebration. It is
                a collection of beautiful moments that deserve
                an equally beautiful setting.
              </p>

              <p className="mt-5 leading-8 text-[#78675e]">
                Discover elegant floral concepts, graceful
                stage designs and thoughtful decorative details
                that can help bring your wedding vision to life.
              </p>

              <a
                href="/contact"
                className="mt-9 inline-flex items-center gap-3 border-b border-[#a47b55] pb-2 text-sm font-semibold text-[#8e6746] transition-all hover:gap-5"
              >
                Plan Your Celebration
                <ArrowRight size={17} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EVENT GALLERY */}
      <section
        id="event-gallery"
        className="bg-[#f0e9df] px-6 py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <span className="text-xs font-semibold tracking-[0.3em] text-[#a47b55]">
              EXPLORE OUR COLLECTION
            </span>

            <h2 className="mt-5 font-serif text-4xl md:text-6xl">
              The Event
              <span className="italic text-[#a47b55]">
                {" "}Gallery.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-[#78675e]">
              Explore different event styles and find inspiration
              for the celebration you have always imagined.
            </p>
          </motion.div>

          {/* FILTERS */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-3 text-xs font-medium transition-all duration-300 sm:text-sm ${
                  activeCategory === category
                    ? "border-[#30211d] bg-[#30211d] text-[#fffaf3]"
                    : "border-[#cbbba9] bg-transparent text-[#66564d] hover:border-[#a47b55] hover:text-[#8e6746]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* GALLERY GRID */}
          <motion.div
            layout
            className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredEvents.map((event, index) => (
              <motion.article
                key={event.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group overflow-hidden border border-[#dfd0bf] bg-[#faf7f1] shadow-sm transition-shadow duration-500 hover:shadow-xl"
              >
                <div className="relative aspect-4/5 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg *:gradient-to-t from-[#30211d]/75 via-transparent to-transparent opacity-80" />

                  <span className="absolute left-5 top-5 border border-white/50 bg-[#30211d]/50 px-4 py-2 text-[10px] tracking-[0.2em] text-white backdrop-blur-md">
                    {event.category.toUpperCase()}
                  </span>

                  <button
                    onClick={() => setSelectedEvent(event)}
                    aria-label={`View ${event.title}`}
                    className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/15 text-white backdrop-blur-md transition-all hover:bg-[#dfc19d] hover:text-[#30211d]"
                  >
                    <Eye size={20} />
                  </button>

                  <div className="absolute bottom-6 left-6">
                    <span className="text-xs tracking-[0.2em] text-[#dfc19d]">
                      EVENT {event.number}
                    </span>
                    <h3 className="mt-2 font-serif text-2xl text-white">
                      {event.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-7 text-[#78675e]">
                    {event.description}
                  </p>

                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-[#916b48] transition-all hover:gap-5"
                  >
                    Explore Event
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filteredEvents.length === 0 && (
            <p className="py-16 text-center text-[#78675e]">
              No events found.
            </p>
          )}

        </div>
      </section>

      {/* IMAGE DETAIL MODAL */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-[#211611]/90 p-5 backdrop-blur-md"
          onClick={() => setSelectedEvent(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative grid w-full max-w-4xl overflow-hidden bg-[#faf7f1] md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              aria-label="Close event details"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#30211d] text-white transition-colors hover:bg-[#a47b55]"
            >
              <X size={19} />
            </button>

            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="h-full min-h-280px max-h-520px w-full object-cover"
            />

            <div className="flex flex-col justify-center p-8 md:p-12">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#a47b55]">
                {selectedEvent.category.toUpperCase()}
              </span>

              <h3 className="mt-5 font-serif text-3xl leading-tight md:text-4xl">
                {selectedEvent.title}
              </h3>

              <p className="mt-6 text-sm leading-8 text-[#78675e]">
                {selectedEvent.description}
              </p>

              <a
                href="/contact"
                className="mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-[#30211d] px-7 py-4 text-sm font-semibold text-white transition-all hover:gap-5"
              >
                Enquire Now
                <ArrowRight size={17} />
              </a>
            </div>
          </motion.div>
        </div>
      )}

      {/* DECORATIVE QUOTE */}
      <section className="px-6 py-28 md:py-36">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <Sparkles
            className="mx-auto mb-8 text-[#b99570]"
            size={35}
            strokeWidth={1.2}
          />

          <p className="font-serif text-3xl leading-relaxed md:text-5xl">
            &quot;The beauty of a celebration
            <span className="italic text-[#a47b55]">
              {" "}lives in the little details.
            </span>
            &quot;
          </p>

          <div className="mx-auto mt-9 h-px w-16 bg-[#b99570]" />

          <p className="mt-5 text-xs tracking-[0.3em] text-[#907b6d]">
            AMRITSAR DECORATE
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#30211d] px-6 py-28 text-center md:py-36">

        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-[#dfc19d]/10 blur-[120px]" />
        <div className="absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-[#a47b55]/15 blur-[120px]" />

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mx-auto max-w-3xl"
        >
          <CalendarHeart
            className="mx-auto mb-8 text-[#dfc19d]"
            size={40}
            strokeWidth={1.2}
          />

          <span className="text-xs tracking-[0.3em] text-[#dfc19d]">
            YOUR SPECIAL DAY STARTS HERE
          </span>

          <h2 className="mt-6 font-serif text-4xl leading-tight text-[#fffaf3] md:text-6xl">
            Let&apos;s Make Your
            <br />
            Celebration
            <br />
            <span className="italic text-[#dfc19d]">
              Truly Unforgettable.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-8 text-[#e9ded2]/70">
            Have a special occasion coming up? Let&apos;s discuss
            your ideas and create a beautiful setting for
            moments that deserve to be remembered.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#dfc19d] px-9 py-4 text-sm font-semibold text-[#30211d] transition-all hover:gap-5 hover:bg-[#f0d9bd]"
          >
            Let&apos;s Plan Your Event
            <ArrowRight size={17} />
          </a>

          <div className="mt-14 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#dfc19d]/50" />
            <p className="font-serif text-xl italic text-[#dfc19d]">
              Amritsar Decorate
            </p>
            <span className="h-px w-10 bg-[#dfc19d]/50" />
          </div>

          <p className="mt-3 text-[10px] tracking-[0.3em] text-[#e9ded2]/50">
            ELEGANCE IN EVERY DETAIL
          </p>
        </motion.div>
      </section>

    </main>
  );
}
