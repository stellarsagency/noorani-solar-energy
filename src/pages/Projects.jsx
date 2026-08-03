import { MapPin, Home, Building2, Factory, ArrowUpRight, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import SectionHeading from '../components/SectionHeading'
import CtaBanner from '../components/CtaBanner'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'

const IMG = {
  house:
    'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&h=600&q=80',
  field:
    'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&h=600&q=80',
  roof:
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&h=600&q=80',
  closeup:
    'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&h=600&q=80',
  hero:
    'https://i.ibb.co/Q15ZDN5/fgfg.jpg',
}

const categories = [
  { icon: Home, label: 'Residential' },
  { icon: Building2, label: 'Commercial' },
  { icon: Factory, label: 'Industrial' },
]

const projects = [
  {
    title: 'Green Valley Residence',
    location: 'Kharian, Pakistan',
    type: 'Residential',
    capacity: '12 kW',
    image: IMG.house,
  },
  {
    title: 'Alpha Textile Mills',
    location: 'Gujrat, Pakistan',
    type: 'Industrial',
    capacity: '500 kW',
    image: IMG.roof,
  },
  {
    title: 'City Mall Rooftop',
    location: 'Gujranwala, Pakistan',
    type: 'Commercial',
    capacity: '150 kW',
    image: IMG.field,
  },
  {
    title: 'Sunset Villas Housing Scheme',
    location: 'Kharian, Pakistan',
    type: 'Residential',
    capacity: '80 kW',
    image: IMG.hero,
  },
  {
    title: 'Grand Plaza Office Tower',
    location: 'Lahore, Pakistan',
    type: 'Commercial',
    capacity: '45 kW',
    image: IMG.closeup,
  },
  {
    title: 'Agri Farm Solarization',
    location: 'Sialkot, Pakistan',
    type: 'Industrial',
    capacity: '60 kW',
    image: IMG.field,
  },
]

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '4.2 MW', label: 'Total Installed' },
  { value: '3,200+', label: 'Tons CO2 Saved / Year' },
  { value: '100%', label: 'Client Satisfaction' },
]

export default function Projects() {
  return (
    <>
      <PageBanner
        title="Projects"
        subtitle="Real installations, real results - from homes to large industries."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading
            title="Featured Projects"
            subtitle="A selection of installations we are proud of"
          />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {categories.map(({ icon: Icon, label }, i) => (
              <span
                key={label}
                className="animate-pop-in inline-flex items-center gap-2 rounded-full bg-accent-light px-5 py-2 text-sm font-semibold text-navy transition hover:-translate-y-0.5 hover:bg-cta hover:text-white"
                style={{ animationDelay: `${0.15 + i * 0.15}s` }}
              >
                <Icon size={15} className="text-cta" />
                {label}
              </span>
            ))}
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map(({ title, location, type, capacity, image }, i) => (
              <Reveal key={title} variant="up" delay={(i % 3) * 130}>
                <div className="group h-full overflow-hidden rounded-2xl bg-white shadow-md shadow-gray-200 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-115"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-cta px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                      {type}
                    </span>
                    <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-navy/90 px-3 py-1 text-xs font-bold text-white">
                      <Zap size={12} className="text-cta" />
                      {capacity}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-navy">{title}</h3>
                    <p className="mt-2 flex items-center gap-1.5 text-sm text-body">
                      <MapPin size={14} className="shrink-0 text-cta" />
                      {location}
                    </p>
                    <Link
                      to="/contact"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cta transition hover:gap-2.5"
                    >
                      Start a Similar Project
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy">
        <div className="animate-drift absolute -right-10 -top-10 size-56 rounded-full bg-cta/20 blur-3xl" />
        <div className="animate-drift absolute -bottom-16 -left-8 size-64 rounded-full bg-accent-light/10 blur-3xl" style={{ animationDelay: '-9s' }} />
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map(({ value, label }, i) => (
            <Reveal key={label} variant="up" delay={i * 130}>
              <div className="text-center">
                <CountUp
                  value={value}
                  className="text-3xl font-extrabold text-cta sm:text-4xl"
                />
                <p className="mt-1 text-sm text-white/70">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
