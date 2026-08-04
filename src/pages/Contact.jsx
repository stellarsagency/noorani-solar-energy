import { useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from 'lucide-react'
import PageBanner from '../components/PageBanner'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

const contactCards = [
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['0312-5868100'],
    href: 'tel:03125868100',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['info@elecsun.com'],
    href: 'mailto:info@elecsun.com',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['Pakistan'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Mon - Sat: 9:00 AM - 6:00 PM'],
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Have a question or ready for a free consultation? We would love to hear from you."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map(({ icon: Icon, title, lines, href }, i) => (
              <Reveal key={title} variant="up" delay={i * 120}>
                <div className="group h-full rounded-2xl bg-white p-7 text-center shadow-md shadow-gray-200 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent-light text-cta transition duration-300 group-hover:scale-110 group-hover:bg-cta group-hover:text-white">
                    <Icon size={26} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy">{title}</h3>
                  {lines.map((line) =>
                    href ? (
                      <a
                        key={line}
                        href={href}
                        className="mt-2 block text-sm text-body transition hover:text-cta"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="mt-2 text-sm text-body">
                        {line}
                      </p>
                    ),
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent-light/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Send Us a Message"
                subtitle="We usually reply within one working day"
              />
              {sent ? (
                <div className="animate-pop-in mt-10 flex flex-col items-center rounded-3xl bg-white p-10 text-center shadow-md shadow-gray-200">
                  <span className="flex size-16 items-center justify-center rounded-full bg-cta text-white">
                    <CheckCircle2 size={32} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-navy">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-sm text-body">
                    Thank you for contacting ElecSun Solar Energy. Our team will
                    get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-light"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <Reveal variant="up" delay={100}>
                <form
                  className="mt-10 space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSent(true)
                  }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-navy"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ink transition placeholder:text-gray-400 focus:border-cta focus:outline-none focus:ring-2 focus:ring-cta/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-navy"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ink transition placeholder:text-gray-400 focus:border-cta focus:outline-none focus:ring-2 focus:ring-cta/20"
                      />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-semibold text-navy"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="03XX-XXXXXXX"
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ink transition placeholder:text-gray-400 focus:border-cta focus:outline-none focus:ring-2 focus:ring-cta/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-sm font-semibold text-navy"
                      >
                        I am Interested In
                      </label>
                      <select
                        id="service"
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ink transition focus:border-cta focus:outline-none focus:ring-2 focus:ring-cta/20"
                      >
                        <option>Solar Installation</option>
                        <option>Energy Storage / Batteries</option>
                        <option>Maintenance & Repair</option>
                        <option>System Design</option>
                        <option>Get a Free Quote</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-navy"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      required
                      placeholder="Tell us about your project..."
                      className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ink transition placeholder:text-gray-400 focus:border-cta focus:outline-none focus:ring-2 focus:ring-cta/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="shine-btn inline-flex items-center gap-2 rounded-full bg-cta px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cta/30 transition hover:bg-cta-dark"
                  >
                    Send Message
                    <Send size={16} />
                  </button>
                </form>
                </Reveal>
              )}
            </div>

            <Reveal variant="right" delay={150}>
              <div className="group h-full overflow-hidden rounded-3xl bg-white p-3 shadow-md shadow-gray-200">
                <iframe
                  title="ElecSun Solar Energy location - Pakistan"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=73.79%2C32.26%2C73.92%2C32.31&layer=mapnik&marker=32.2828%2C73.8550"
                  className="h-80 w-full rounded-2xl border-0 sm:h-full sm:min-h-[28rem]"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
