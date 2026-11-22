
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Flower2,
  Heart,
  Palette,
  Gem,
  Check,
  Star,
  PartyPopper,
  HandHeart,
} from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const services = [
  {
    icon: Flower2,
    title: "Floral Decorations",
    description:
      "Beautiful floral arrangements and thoughtfully designed details that bring elegance and freshness to every celebration.",
  },
  {
    icon: Gem,
    title: "Wedding Decorations",
    description:
      "Elegant wedding settings designed to create a beautiful atmosphere for your most memorable moments.",
  },
  {
    icon: PartyPopper,
    title: "Birthday Celebrations",
    description:
      "Creative and personalized birthday decorations that make every celebration feel special.",
  },
  {
    icon: Sparkles,
    title: "Event Styling",
    description:
      "Carefully coordinated themes, backdrops and decorative elements to bring your event vision to life.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Passion",
    text: "We put genuine care and creativity into every decorative detail.",
  },
  {
    icon: Palette,
    title: "Creativity",
    text: "Every celebration deserves a distinctive look and thoughtful design.",
  },
  {
    icon: Gem,
    title: "Elegance",
    text: "We believe that beautiful details make extraordinary experiences.",
  },
  {
    icon: HandHeart,
    title: "Dedication",
    text: "Your vision inspires us to make every celebration meaningful.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#faf7f1] text-[#33231f]">

      {/* HERO */}
      <section className="relative flex min-h-680px items-center overflow-hidden bg-[#30211d] px-6 py-28 md:min-h-760px">

        <div className="absolute inset-0 opacity-25">
          <div className="absolute -right-20 top-10 h-96 w-96 rounded-full bg-[#d7b58a] blur-[130px]" />
          <div className="absolute -bottom-20 left-0 h-96 w-96 rounded-full bg-[#8c674b] blur-[120px]" />
        </div>

        <div className="absolute inset-0 opacity-[0.06]"
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
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2"
        >
          <div className="text-center lg:text-left">
            <motion.div variants={reveal}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#d9bd9a]/30 px-5 py-2.5 text-xs tracking-[0.25em] text-[#e4c9a8]"
            >
              <Flower2 size={15} />
              OUR STORY
            </motion.div>

            <motion.h1 variants={reveal}
              className="font-serif text-5xl leading-[1.15] text-[#fffaf3] sm:text-6xl lg:text-7xl"
            >
              Every Detail
              <br />
              <span className="italic text-[#dfc19d]">
                Tells a Story.
              </span>
            </motion.h1>

            <motion.p variants={reveal}
              className="mx-auto mt-8 max-w-xl text-base leading-8 text-[#e9ded2]/75 lg:mx-0 lg:text-lg"
            >
              At Amritsar Decorate, we believe every celebration
              deserves a beautiful setting. We bring creativity,
              elegance and thoughtful details together to make
              your special moments unforgettable.
            </motion.p>

            <motion.a
              variants={reveal}
              href="#our-story"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#dfc19d] px-8 py-4 text-sm font-semibold text-[#30211d] transition-all hover:bg-[#f0d9bd] hover:gap-5"
            >
              Discover Our Story
              <ArrowRight size={17} />
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-5 rounded-t-full border border-[#dfc19d]/30" />

            <div
              className="relative aspect-4/5 overflow-hidden rounded-t-full border-[6px] border-[#dfc19d]/20 bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=85')",
              }}
            >
              <div className="absolute inset-0 bg-gradient *:to-t from-[#30211d]/60 via-transparent to-transparent" />
              <div className="absolute bottom-9 left-0 right-0 text-center">
                <p className="font-serif text-3xl italic text-white">
                  Amritsar Decorate
                </p>
                <p className="mt-2 text-[10px] tracking-[0.35em] text-white/80">
                  ELEGANCE IN EVERY DETAIL
                </p>
              </div>
            </div>

            <div className="absolute -bottom-7 -left-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#dfc19d] bg-[#faf7f1] text-[#a47b55] shadow-xl">
              <Flower2 size={35} strokeWidth={1.2} />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* STORY */}
      <section id="our-story" className="px-6 py-28 md:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div
                className="mt-12 aspect-3/4 rounded-t-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=700&q=85')",
                }}
              />
              <div
                className="aspect-3/4 rounded-t-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=700&q=85')",
                }}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl border border-[#b99570]/20" />
          </motion.div>

          <div>
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="text-xs font-semibold tracking-[0.3em] text-[#a47b55]">
                GET TO KNOW US
              </span>

              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
                Creating Beauty
                <br />
                <span className="italic text-[#a47b55]">
                  Beyond Expectations.
                </span>
              </h2>

              <p className="mt-7 leading-8 text-[#78675e]">
                Amritsar Decorate is built around a simple belief:
                every special occasion deserves to look as beautiful
                as the memories it creates.
              </p>

              <p className="mt-5 leading-8 text-[#78675e]">
                From choosing the right colours and floral arrangements
                to creating beautiful backdrops and event settings,
                we focus on bringing every decorative element together
                with care and creativity.
              </p>

              <p className="mt-5 leading-8 text-[#78675e]">
                Our approach is personal, our designs are thoughtful,
                and our goal is to make every celebration feel
                truly special.
              </p>

              <div className="mt-9 flex items-center gap-4 border-t border-[#e5d9ca] pt-7">
                <Flower2 className="text-[#a47b55]" size={32} />
                <div>
                  <p className="font-serif text-xl">
                    Amritsar Decorate
                  </p>
                  <p className="mt-1 text-xs tracking-[0.2em] text-[#a47b55]">
                    ELEGANCE IN EVERY DETAIL
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#f0e9df] px-6 py-28 md:py-32">
        <div className="mx-auto max-w-7xl">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <span className="text-xs font-semibold tracking-[0.3em] text-[#a47b55]">
              WHAT WE DO
            </span>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl">
              Beautifully Designed
              <br />
              <span className="italic text-[#a47b55]">
                For Every Occasion.
              </span>
            </h2>
            <p className="mt-6 leading-7 text-[#78675e]">
              Thoughtfully styled celebrations, where every
              element comes together to create something special.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group border border-[#ddcbb8] bg-[#faf7f1] p-8 transition-all duration-500 hover:border-[#b99570]"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-[#d8c1a8] text-[#a47b55] transition-all group-hover:bg-[#30211d] group-hover:text-[#e7cba9]">
                  <service.icon size={25} strokeWidth={1.4} />
                </div>

                <h3 className="font-serif text-xl">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#78675e]">
                  {service.description}
                </p>

                <div className="mt-7 h-px w-10 bg-[#b99570] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative overflow-hidden bg-[#30211d] px-6 py-28 md:py-36">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#c5a27e]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <Flower2 className="mx-auto mb-6 text-[#dfc19d]" size={34} />

            <span className="text-xs tracking-[0.3em] text-[#dfc19d]">
              OUR PHILOSOPHY
            </span>

            <h2 className="mt-5 font-serif text-4xl text-[#fffaf3] md:text-5xl">
              The Details Make
              <br />
              <span className="italic text-[#dfc19d]">
                The Difference.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-[#e9ded2]/65">
              Beautiful decoration is not just about how something
              looks. It is about the feeling, atmosphere and memories
              it creates.
            </p>
          </motion.div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-t border-[#dfc19d]/25 pt-8 text-center"
              >
                <value.icon
                  size={32}
                  strokeWidth={1.3}
                  className="mx-auto text-[#dfc19d]"
                />
                <h3 className="mt-6 font-serif text-2xl text-[#fffaf3]">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#e9ded2]/60">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 py-28 md:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold tracking-[0.3em] text-[#a47b55]">
              THE AMRITSAR DECORATE EXPERIENCE
            </span>

            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
              Because Your
              <br />
              Celebration Deserves
              <span className="italic text-[#a47b55]">
                Something Special.
              </span>
            </h2>

            <p className="mt-7 leading-8 text-[#78675e]">
              We understand that every celebration carries its
              own emotions and expectations. That is why we
              approach every design with creativity, attention
              and a personal touch.
            </p>

            <div className="mt-9 space-y-5">
              {[
                "Thoughtful and creative decoration concepts",
                "Attention to every decorative detail",
                "Beautifully coordinated themes and colours",
                "A personal approach to every celebration",
                "A focus on creating memorable experiences",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eadbca] text-[#916b48]">
                    <Check size={15} />
                  </span>
                  <p className="text-sm text-[#66564d]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="aspect-5/4 rounded-tl-[150px] rounded-br-[150px] bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1200&q=85')",
              }}
            />
            <div className="absolute -bottom-7 -left-5 flex items-center gap-4 border border-[#e5d6c4] bg-[#faf7f1] p-6 shadow-xl md:-left-10">
              <Star size={30} className="text-[#a47b55]" />
              <div>
                <p className="font-serif text-lg">Made With Care</p>
                <p className="mt-1 text-xs text-[#78675e]">
                  Every detail matters.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#eee4d8] px-6 py-28 text-center md:py-36">

        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#d3b99b]/30 blur-[100px]" />
        <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-[#c8a98a]/25 blur-[100px]" />

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mx-auto max-w-3xl"
        >
          <Flower2 className="mx-auto mb-7 text-[#a47b55]" size={38} />

          <span className="text-xs font-semibold tracking-[0.3em] text-[#a47b55]">
            LET&apos;S MAKE IT BEAUTIFUL
          </span>

          <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
            Your Moments.
            <br />
            <span className="italic text-[#a47b55]">
              Our Creative Touch.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-8 text-[#78675e]">
            Have a special occasion coming up? Let&apos;s bring
            your ideas to life with beautiful details and
            thoughtfully designed decorations.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#30211d] px-9 py-4 text-sm font-semibold text-[#fffaf3] transition-all hover:gap-5 hover:bg-[#51382e]"
          >
            Let&apos;s Talk About Your Event
            <ArrowRight size={17} />
          </a>

          <div className="mt-12 flex items-center justify-center gap-3 text-xs tracking-[0.25em] text-[#a47b55]">
            <span className="h-px w-10 bg-[#b99570]" />
            AMRITSAR DECORATE
            <span className="h-px w-10 bg-[#b99570]" />
          </div>

          <p className="mt-3 text-[10px] tracking-[0.3em] text-[#907b6d]">
            ELEGANCE IN EVERY DETAIL
          </p>
        </motion.div>
      </section>

    </main>
  );
}
