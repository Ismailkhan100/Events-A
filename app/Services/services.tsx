
"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Flower2,
  Heart,
  Sparkles,
  Gem,
  PartyPopper,
  CalendarHeart,
  Check,
  Palette,
  Lightbulb,
} from "lucide-react";

const reveal: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const services = [
  {
    number: "01",
    title: "Wedding Decorations",
    subtitle: "A beautiful beginning to forever",
    description:
      "Create a wedding atmosphere that feels as special as your love story. From elegant stage settings to beautiful floral arrangements, every element can come together to make your big day memorable.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1100&q=85",
    icon: Heart,
    features: [
      "Wedding stage decoration",
      "Floral arrangements",
      "Elegant backdrop styling",
      "Wedding theme decoration",
    ],
  },
  {
    number: "02",
    title: "Engagement Decorations",
    subtitle: "Celebrate the start of a new journey",
    description:
      "Make your engagement celebration truly beautiful with thoughtfully styled decorations, charming backdrops and elegant details that reflect the joy of your special occasion.",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1100&q=85",
    icon: Gem,
    features: [
      "Engagement stage styling",
      "Decorative backdrops",
      "Floral details",
      "Theme-based decoration",
    ],
  },
  {
    number: "03",
    title: "Birthday Decorations",
    subtitle: "Make every birthday unforgettable",
    description:
      "Turn birthday celebrations into beautiful experiences with creative themes, decorative setups and eye-catching details designed to make every moment special.",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1100&q=85",
    icon: PartyPopper,
    features: [
      "Themed birthday setups",
      "Balloon decoration",
      "Photo backdrops",
      "Personalized decorative details",
    ],
  },
  {
    number: "04",
    title: "Floral Decorations",
    subtitle: "Nature's beauty in every detail",
    description:
      "Bring freshness, colour and elegance into your celebrations through beautiful floral arrangements and decorative compositions that create a welcoming atmosphere.",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1100&q=85",
    icon: Flower2,
    features: [
      "Floral arrangements",
      "Decorative flower walls",
      "Stage floral styling",
      "Elegant flower accents",
    ],
  },
  {
    number: "05",
    title: "Anniversary Celebrations",
    subtitle: "Celebrate the moments that matter",
    description:
      "Celebrate togetherness with beautiful anniversary decoration concepts, romantic settings and thoughtful decorative touches for meaningful occasions.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1100&q=85",
    icon: CalendarHeart,
    features: [
      "Romantic decoration themes",
      "Floral styling",
      "Celebration backdrops",
      "Special occasion setups",
    ],
  },
  {
    number: "06",
    title: "Event Styling & Backdrops",
    subtitle: "The perfect setting for every occasion",
    description:
      "Give your celebration a distinctive visual identity with carefully coordinated colours, beautiful backdrops and decorative elements that bring your ideas together.",
    image:
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1100&q=85",
    icon: Sparkles,
    features: [
      "Custom backdrop styling",
      "Decorative installations",
      "Colour coordination",
      "Event theme styling",
    ],
  },
];

const process = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Share Your Vision",
    text: "Tell us about your occasion, ideas and the atmosphere you want to create.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Explore The Design",
    text: "Discuss decoration concepts, colours and creative possibilities.",
  },
  {
    number: "03",
    icon: Flower2,
    title: "Bring It To Life",
    text: "Turn your chosen concept into a beautifully styled celebration.",
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-[#faf7f1] text-[#33231f]">

      {/* HERO */}
      <section className="relative flex min-h-650px items-center overflow-hidden bg-[#30211d] px-6 py-28 md:min-h-720px">

        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-[#c9a77d]/15 blur-[130px]" />
        <div className="absolute -bottom-20 left-0 h-96 w-96 rounded-full bg-[#a47b55]/15 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "65px 65px",
          }}
        />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="text-center lg:text-left"
          >
            <motion.div variants={reveal}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#dfc19d]/30 px-5 py-3 text-xs tracking-[0.25em] text-[#dfc19d]"
            >
              <Sparkles size={15} />
              OUR SERVICES
            </motion.div>

            <motion.h1 variants={reveal}
              className="font-serif text-5xl leading-[1.15] text-[#fffaf3] sm:text-6xl lg:text-7xl"
            >
              Beautiful Events,
              <br />
              <span className="italic text-[#dfc19d]">
                Thoughtfully Designed.
              </span>
            </motion.h1>

            <motion.p variants={reveal}
              className="mx-auto mt-8 max-w-xl text-base leading-8 text-[#e9ded2]/75 lg:mx-0 lg:text-lg"
            >
              Every celebration has a story worth telling.
              Discover beautiful decoration concepts and
              thoughtful details designed to make your
              special occasions unforgettable.
            </motion.p>

            <motion.a variants={reveal}
              href="#services-list"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#dfc19d] px-8 py-4 text-sm font-semibold text-[#30211d] transition-all hover:gap-5 hover:bg-[#f0d9bd]"
            >
              Explore Our Services
              <ArrowRight size={17} />
            </motion.a>
          </motion.div>

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
              <div className="absolute inset-0 bg-gradient *:to-t from-[#30211d]/70 via-transparent to-transparent" />

              <div className="absolute bottom-10 left-0 right-0 text-center">
                <p className="font-serif text-3xl italic text-white">
                  Amritsar Decorate
                </p>
                <p className="mt-2 text-[10px] tracking-[0.3em] text-white/80">
                  ELEGANCE IN EVERY DETAIL
                </p>
              </div>
            </div>

            <div className="absolute -bottom-7 -left-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#dfc19d] bg-[#faf7f1] text-[#a47b55] shadow-xl">
              <Flower2 size={35} strokeWidth={1.2} />
            </div>
          </motion.div>
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
            WHAT WE CREATE
          </span>

          <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
            More Than Decoration,
            <br />
            <span className="italic text-[#a47b55]">
              It&apos;s An Experience.
            </span>
          </h2>

          <p className="mt-7 leading-8 text-[#78675e]">
            At Amritsar Decorate, we believe beautiful celebrations
            begin with thoughtful ideas. From elegant wedding settings
            to joyful birthday celebrations, we focus on bringing
            creativity, colours and decorative details together
            to create a special atmosphere.
          </p>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section id="services-list" className="bg-[#f0e9df] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="text-xs font-semibold tracking-[0.3em] text-[#a47b55]">
              OUR SPECIALITIES
            </span>

            <h2 className="mt-5 font-serif text-4xl md:text-5xl">
              Services Designed
              <br />
              <span className="italic text-[#a47b55]">
                Around Your Celebrations.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-7 text-[#78675e]">
              Explore our decoration services and find the
              perfect inspiration for your next celebration.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">

            {services.map((service, index) => (
              <motion.article
                key={service.number}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: (index % 2) * 0.12 }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden border border-[#dfd0bf] bg-[#faf7f1] transition-all duration-500 hover:border-[#b99570] hover:shadow-xl"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#30211d]/70 via-transparent to-transparent" />

                  <span className="absolute left-6 top-6 rounded-full border border-white/40 bg-[#30211d]/50 px-4 py-2 text-xs tracking-[0.2em] text-white backdrop-blur-md">
                    SERVICE {service.number}
                  </span>

                  <div className="absolute bottom-6 left-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-[#30211d]/60 text-[#f2d9b9] backdrop-blur-md">
                    <service.icon size={23} strokeWidth={1.4} />
                  </div>
                </div>

                <div className="p-7 md:p-9">
                  <p className="text-xs font-semibold tracking-[0.2em] text-[#a47b55]">
                    {service.subtitle}
                  </p>

                  <h3 className="mt-3 font-serif text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[#78675e]">
                    {service.description}
                  </p>

                  <div className="my-7 h-px bg-[#e5d9ca]" />

                  <div className="grid gap-4 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2 text-sm text-[#66564d]"
                      >
                        <Check
                          size={16}
                          className="mt-0.5 shrink-0 text-[#a47b55]"
                        />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <a
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#8e6746] transition-all hover:gap-5"
                  >
                    Enquire About This Service
                    <ArrowRight size={16} />
                  </a>
                </div>
              </motion.article>
            ))}

          </div>
        </div>
      </section>

      {/* CREATIVE APPROACH */}
      <section className="px-6 py-28 md:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="aspect-5/4 rounded-tl-[140px] rounded-br-[140px] bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1100&q=85')",
              }}
            />

            <div className="absolute -bottom-7 -right-3 flex items-center gap-4 border border-[#e5d6c4] bg-[#faf7f1] p-6 shadow-xl md:-right-8">
              <Sparkles size={30} className="text-[#a47b55]" />
              <div>
                <p className="font-serif text-lg">Thoughtful Details</p>
                <p className="mt-1 text-xs text-[#78675e]">
                  Designed with creativity.
                </p>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="text-xs font-semibold tracking-[0.3em] text-[#a47b55]">
                OUR APPROACH
              </span>

              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
                Your Vision,
                <br />
                <span className="italic text-[#a47b55]">
                  Our Creative Touch.
                </span>
              </h2>

              <p className="mt-7 leading-8 text-[#78675e]">
                We understand that every occasion is different.
                That is why our approach begins with understanding
                your ideas, preferences and expectations.
              </p>

              <p className="mt-5 leading-8 text-[#78675e]">
                From selecting colour combinations to coordinating
                decorative elements, we focus on creating a setting
                that feels personal, beautiful and meaningful.
              </p>

              <div className="mt-9 space-y-5">
                {[
                  "Creative decoration concepts",
                  "Thoughtful colour combinations",
                  "Attention to decorative details",
                  "Personalized event styling",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eadbca] text-[#916b48]">
                      <Check size={16} />
                    </span>
                    <span className="text-sm text-[#66564d]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#30211d] px-6 py-28 md:py-32">
        <div className="mx-auto max-w-7xl">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <span className="text-xs font-semibold tracking-[0.3em] text-[#dfc19d]">
              HOW WE WORK
            </span>

            <h2 className="mt-5 font-serif text-4xl text-[#fffaf3] md:text-5xl">
              From Ideas To
              <br />
              <span className="italic text-[#dfc19d]">
                Beautiful Moments.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-[#e9ded2]/65">
              A thoughtful approach to making your celebration
              feel exactly as special as you imagined.
            </p>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-3">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="relative border-t border-[#dfc19d]/30 pt-9 text-center"
              >
                <span className="font-serif text-5xl text-[#dfc19d]/30">
                  {step.number}
                </span>

                <div className="mx-auto mt-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#dfc19d]/30 bg-[#dfc19d]/10 text-[#dfc19d]">
                  <step.icon size={27} strokeWidth={1.3} />
                </div>

                <h3 className="mt-7 font-serif text-2xl text-[#fffaf3]">
                  {step.title}
                </h3>

                <p className="mx-auto mt-4 max-w-xs text-sm leading-7 text-[#e9ded2]/60">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="px-6 py-24 md:py-28">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-[#a47b55]">
            THE ART OF CELEBRATION
          </span>

          <h2 className="mt-5 font-serif text-4xl md:text-5xl">
            Inspiration In
            <span className="italic text-[#a47b55]">
              {" "}Every Detail.
            </span>
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {[
            "photo-1519225421980-715cb0215aed",
            "photo-1464366400600-7168b8af9bc3",
            "photo-1507504031003-b417219a0fde",
            "photo-1478146896981-b80fe463b330",
          ].map((photo, index) => (
            <motion.div
              key={photo}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`overflow-hidden ${
                index % 2 === 1 ? "mt-8" : ""
              }`}
            >
              <img
                src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=650&q=85`}
                alt="Elegant event decoration inspiration"
                loading="lazy"
                className="aspect-3/4 w-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </motion.div>
          ))}
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
            LET&apos;S CREATE SOMETHING BEAUTIFUL
          </span>

          <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
            Have A Celebration
            <br />
            <span className="italic text-[#a47b55]">
              Coming Up?
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-8 text-[#78675e]">
            Let&apos;s talk about your ideas and create a beautiful
            setting for your special occasion. Your next memorable
            celebration starts with a conversation.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#30211d] px-9 py-4 text-sm font-semibold text-[#fffaf3] transition-all hover:gap-5 hover:bg-[#51382e]"
          >
            Discuss Your Event
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
