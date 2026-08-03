import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageBanner({ title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute -right-16 -top-16 size-64 rounded-full bg-cta/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-12 size-72 rounded-full bg-accent-light/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-cta">
          <span className="h-px w-10 bg-cta" />
          ElecSun Solar Energy
        </p>
        <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-white/70">{subtitle}</p>
        )}
        <nav className="mt-6 flex items-center gap-2 text-sm text-white/60">
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
