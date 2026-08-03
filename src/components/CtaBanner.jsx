import { Link } from 'react-router-dom'
import { Headset, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-cta via-orange-500 to-cta-dark animate-gradient-pan">
      <div className="absolute -left-10 -top-10 size-48 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-16 -right-8 size-56 rounded-full bg-black/10 blur-2xl" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-14 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:text-left">
        <Reveal variant="left">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center">
            <span className="relative flex size-16 shrink-0 items-center justify-center rounded-full bg-white/20 text-white pulse-ring">
              <Headset size={32} />
            </span>
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                Ready to switch to solar energy?
              </h2>
              <p className="mt-2 text-white/85">
                Contact us today for a free consultation
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal variant="right" delay={150}>
          <Link
            to="/contact"
            className="shine-btn inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-cta shadow-lg shadow-black/10 transition hover:bg-navy hover:text-white"
          >
            Get a Free Quote
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
