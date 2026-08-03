import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageBanner({ title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="animate-drift absolute -right-16 -top-16 size-64 rounded-full bg-cta/20 blur-3xl" />
      <div
        className="animate-drift absolute -bottom-24 -left-12 size-72 rounded-full bg-accent-light/10 blur-3xl"
        style={{ animationDelay: '-8s' }}
      />
      <div className="animate-spin-slow absolute right-[18%] top-10 size-40 rounded-full border border-white/10" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p
          className="hero-anim flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-cta"
          style={{ animationDelay: '0.05s' }}
        >
          <span className="h-px w-10 bg-cta" />
          ElecSun Solar Energy
        </p>
        <h1
          className="hero-anim mt-3 text-4xl font-extrabold text-white sm:text-5xl"
          style={{ animationDelay: '0.15s' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="hero-anim mt-4 max-w-2xl text-lg text-white/70"
            style={{ animationDelay: '0.3s' }}
          >
            {subtitle}
          </p>
        )}
        <nav
          className="hero-anim mt-6 flex items-center gap-2 text-sm text-white/60"
          style={{ animationDelay: '0.45s' }}
        >
          <Link to="/" className="transition hover:text-cta">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-white">{title}</span>
        </nav>
      </div>
    </section>
  )
}
