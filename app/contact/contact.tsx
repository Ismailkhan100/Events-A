
"use client";

import { useState, type FormEvent } from "react";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  CalendarHeart,
  MessageCircle,
  Camera,
  Send,
  Heart,
  Flower2,
  CheckCircle2,
} from "lucide-react";

const reveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const inputClass =
  "w-full border border-[#e1d4c5] bg-[#faf7f1] px-5 py-4 text-sm text-[#35251f] outline-none transition-all placeholder:text-[#a99a8c] focus:border-[#a47b55] focus:ring-1 focus:ring-[#a47b55]/20";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    date: "",
    guests: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const whatsappNumber = "91XXXXXXXXXX";

    const message = `
Hello Amritsar Decorate!

I would like to enquire about your event decoration services.

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Event Type: ${form.event}
Event Date: ${form.date || "Not decided"}
Expected Guests: ${form.guests || "Not decided"}

Message:
${form.message}
    `;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setSubmitted(true);
  };

  const updateField = (
    field: keyof typeof form,
    value: string
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main className="overflow-hidden bg-[#faf7f1] text-[#35251f]">

      {/* HERO */}
      <section className="relative flex min-h-580px items-center overflow-hidden bg-[#30211d] px-6 py-28">

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=85"
            alt="Elegant celebration"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient *:-to-r from-[#251813] via-[#30211d]/85 to-[#30211d]/50" />
          <div className="absolute inset-0 bg-gradient *:-to-t from-[#30211d]/60 to-transparent" />
        </div>

        <div className="absolute -right-20 top-10 h-96 w-96 rounded-full bg-[#dfc19d]/10 blur-[130px]" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="relative mx-auto w-full max-w-7xl text-center"
        >
          <motion.div
            variants={reveal}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#dfc19d]/40 bg-white/5 px-5 py-3"
          >
            <MessageCircle size={15} className="text-[#dfc19d]" />
            <span className="text-xs tracking-[0.3em] text-[#dfc19d]">
              GET IN TOUCH
            </span>
          </motion.div>

          <motion.h1
            variants={reveal}
            className="font-serif text-5xl leading-tight text-[#fffaf3] md:text-7xl lg:text-8xl"
          >
            Let&apos;s Create
            <br />
            <span className="italic text-[#dfc19d]">
              Something Beautiful.
            </span>
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#f3e8dc]/75 md:text-lg"
          >
            Every unforgettable celebration starts with an idea.
            Tell us about your special occasion and let&apos;s make
            something truly memorable together.
          </motion.p>

          <motion.a
            variants={reveal}
            href="#enquiry"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#dfc19d] px-9 py-4 text-sm font-semibold text-[#30211d] transition-all hover:gap-5 hover:bg-[#f0d9bd]"
          >
            Start An Enquiry
            <ArrowRight size={17} />
          </motion.a>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-[#a47b55]">
            WE WOULD LOVE TO HEAR FROM YOU
          </span>

          <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
            Let&apos;s Talk About
            <br />
            <span className="italic text-[#a47b55]">
              Your Special Day.
            </span>
          </h2>

          <p className="mt-6 leading-8 text-[#78675e]">
            Whether you&apos;re planning a wedding, engagement,
            birthday or any special celebration, we&apos;re here
            to help you explore your ideas and decoration
            possibilities.
          </p>
        </motion.div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">

          {[
            {
              icon: Phone,
              title: "Call Us",
              text: "Let's discuss your celebration",
              value: "Add Your Phone Number",
              href: null,
            },
            {
              icon: Mail,
              title: "Email Us",
              text: "Send us your enquiry",
              value: "Add Your Email Address",
              href: null,
            },
            {
              icon: MapPin,
              title: "Our Location",
              text: "Find us and plan a visit",
              value: "Add Your Business Location",
              href: null,
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="border border-[#e3d6c7] bg-white p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#eee4d8] text-[#a47b55]">
                <item.icon size={27} strokeWidth={1.4} />
              </div>

              <h3 className="mt-6 font-serif text-2xl">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-[#907f72]">
                {item.text}
              </p>

              <p className="mt-5 text-sm font-semibold text-[#8e6746]">
                {item.value}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section id="enquiry" className="bg-[#f0e9df] px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.85fr_1.15fr]">

          {/* LEFT CONTENT */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <span className="text-xs font-semibold tracking-[0.3em] text-[#a47b55]">
              PLAN YOUR CELEBRATION
            </span>

            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
              Tell Us About
              <br />
              <span className="italic text-[#a47b55]">
                Your Event.
              </span>
            </h2>

            <p className="mt-7 leading-8 text-[#78675e]">
              Share a few details about your upcoming event.
              Whether you already have a complete vision or
              are just exploring ideas, we&apos;d love to hear
              what you have in mind.
            </p>

            <div className="mt-12 space-y-7">

              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#dfd0bf] text-[#916b48]">
                  <CalendarHeart size={22} />
                </div>
                <div>
                  <h3 className="font-serif text-xl">
                    Share Your Date
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#78675e]">
                    Let us know when your special occasion
                    is taking place.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#dfd0bf] text-[#916b48]">
                  <Heart size={22} />
                </div>
                <div>
                  <h3 className="font-serif text-xl">
                    Share Your Ideas
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#78675e]">
                    Tell us about the theme, style and
                    decoration you have imagined.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#dfd0bf] text-[#916b48]">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <h3 className="font-serif text-xl">
                    Let&apos;s Connect
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#78675e]">
                    Submit your enquiry through WhatsApp
                    and start the conversation.
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-12 border-l-2 border-[#b99570] pl-6">
              <p className="font-serif text-2xl italic text-[#8e6746]">
                &quot;Every beautiful celebration begins
                with a conversation.&quot;
              </p>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border border-[#e0d1c0] bg-[#faf7f1] p-7 shadow-sm md:p-12"
          >
            <div className="mb-10">
              <span className="text-xs tracking-[0.25em] text-[#a47b55]">
                EVENT ENQUIRY FORM
              </span>

              <h3 className="mt-4 font-serif text-3xl md:text-4xl">
                Let&apos;s Get Started.
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#907f72]">
                Fill in the details below and connect with us
                directly through WhatsApp.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 flex items-start gap-3 border border-[#b4c8a8] bg-[#edf3e9] p-4 text-sm text-[#48633c]">
                <CheckCircle2 size={20} className="shrink-0" />
                Your WhatsApp enquiry has been opened. Please
                send the pre-filled message to complete your enquiry.
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold tracking-wider">
                    YOUR NAME *
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="Enter your name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold tracking-wider">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold tracking-wider">
                  PHONE NUMBER *
                </label>
                <input
                  type="tel"
                  required
                  pattern="[0-9+\s()-]{10,18}"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="Enter your phone number"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold tracking-wider">
                  EVENT TYPE *
                </label>
                <select
                  required
                  value={form.event}
                  onChange={(e) => updateField("event", e.target.value)}
                  className={inputClass}
                >
                  <option value="">Select your event</option>
                  <option>Wedding</option>
                  <option>Engagement</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Floral Decoration</option>
                  <option>Other Celebration</option>
                </select>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold tracking-wider">
                    EVENT DATE
                  </label>
                  <input
                    type="date"
                    onFocus={(event) => {
                      event.currentTarget.min = new Date()
                        .toISOString()
                        .split("T")[0];
                    }}
                    value={form.date}
                    onChange={(e) => updateField("date", e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold tracking-wider">
                    EXPECTED GUESTS
                  </label>
                  <select
                    value={form.guests}
                    onChange={(e) => updateField("guests", e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select guest count</option>
                    <option>Below 50</option>
                    <option>50 - 100</option>
                    <option>100 - 250</option>
                    <option>250 - 500</option>
                    <option>500 - 1000</option>
                    <option>1000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold tracking-wider">
                  TELL US ABOUT YOUR EVENT
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  placeholder="Share your ideas, preferred theme, venue or anything else..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 bg-[#30211d] px-8 py-5 text-sm font-semibold tracking-wide text-[#fffaf3] transition-all hover:bg-[#51382e]"
              >
                Send Enquiry On WhatsApp
                <Send
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <p className="text-center text-xs leading-6 text-[#907f72]">
                Your enquiry will open in WhatsApp with your
                submitted details. You will need to send the message.
              </p>

            </form>
          </motion.div>

        </div>
      </section>

      {/* INSTAGRAM / SOCIAL SECTION */}
      <section className="px-6 py-24 md:py-28">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#eee4d8] text-[#a47b55]">
            <Camera size={28} />
          </div>

          <span className="mt-8 block text-xs font-semibold tracking-[0.3em] text-[#a47b55]">
            STAY INSPIRED
          </span>

          <h2 className="mt-5 font-serif text-4xl md:text-5xl">
            Follow Our
            <span className="italic text-[#a47b55]">
              {" "}Journey.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-[#78675e]">
            Discover beautiful decoration inspiration,
            celebration ideas and creative event styling.
            Follow us to stay connected.
          </p>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-3 rounded-full border border-[#b99570] px-8 py-4 text-sm font-semibold text-[#8e6746] transition-all hover:bg-[#30211d] hover:text-white"
          >
            Follow On Instagram
            <ArrowRight size={17} />
          </a>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#30211d] px-6 py-24 text-center md:py-32">

        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#dfc19d]/10 blur-[120px]" />

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mx-auto max-w-3xl"
        >
          <Flower2 className="mx-auto mb-7 text-[#dfc19d]" size={38} />

          <h2 className="font-serif text-4xl leading-tight text-[#fffaf3] md:text-6xl">
            Your Celebration,
            <br />
            <span className="italic text-[#dfc19d]">
              Our Creative Touch.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-8 text-[#e9ded2]/70">
            Let&apos;s turn your ideas into a beautiful celebration
            filled with meaningful details and unforgettable moments.
          </p>

          <a
            href="#enquiry"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#dfc19d] px-9 py-4 text-sm font-semibold text-[#30211d] transition-all hover:gap-5 hover:bg-[#f0d9bd]"
          >
            Start Your Enquiry
            <ArrowRight size={17} />
          </a>

          <p className="mt-12 font-serif text-xl italic text-[#dfc19d]">
            Amritsar Decorate
          </p>

          <p className="mt-3 text-[10px] tracking-[0.3em] text-white/50">
            ELEGANCE IN EVERY DETAIL
          </p>
        </motion.div>
      </section>

    </main>
  );
}
