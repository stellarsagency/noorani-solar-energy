import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  BadgeCheck,
  Truck,
  Wrench,
} from 'lucide-react'
import PageBanner from '../components/PageBanner'
import SectionHeading from '../components/SectionHeading'
import CtaBanner from '../components/CtaBanner'
import Reveal from '../components/Reveal'
import dualInverter from '../assets/Dual PV5500+ Pro.jpeg'

const IMG = {
  panels:
    'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&h=600&q=80',
  inverter: dualInverter,
  battery:
    'https://images.unsplash.com/photo-1742899273038-67ff67477663?fm=jpg&q=80&w=1200&auto=format&fit=crop',
  mounting:
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&h=600&q=80',
  accessories:
    'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&h=600&q=80',
}

const products = [
  {
    title: 'Solar Panels',
    image: IMG.panels,
    desc: 'High-efficiency monocrystalline and polycrystalline panels for maximum output in any climate.',
    specs: ['550W+ Bifacial Options', '25-Year Performance Warranty'],
  },
  {
    title: 'Solar Inverters',
    image: IMG.inverter,
    desc: 'Smart hybrid and on-grid inverters, including the ElecSun PV5500+ Pro for reliable power conversion.',
    specs: ['PV5500+ Pro Series', 'Wi-Fi Monitoring Ready'],
  },
  {
    title: 'Solar Batteries',
    image: IMG.battery,
    desc: 'Lithium and tubular battery storage from 1.2kWh to 8kWh to power your home day and night.',
    specs: ['1.2kWh - 8kWh Range', 'Deep Cycle Safe'],
  },
  {
    title: 'Mounting Structures',
    image: IMG.mounting,
    desc: 'Durable galvanized steel and aluminium structures engineered for rooftops and ground mounts.',
    specs: ['Galvanized Steel', 'Wind Load Tested'],
  },
  {
    title: 'Accessories',
    image: IMG.accessories,
    desc: 'Complete range of cables, connectors, junction boxes and monitoring kits for a safe system.',
    specs: ['Certified Components', 'Full Installation Kits'],
  },
]

const guarantees = [
  {
    icon: ShieldCheck,
    title: 'Brand Warranty',
    text: 'Genuine products with manufacturer-backed warranties of up to 25 years.',
  },
  {
    icon: BadgeCheck,
    title: 'Tested Quality',
    text: 'Every unit is tested and verified before it reaches your rooftop.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    text: 'Quick nationwide delivery and on-time installation scheduling.',
  },
  {
    icon: Wrench,
    title: 'After-Sales Care',
    text: 'Free inspection visits and responsive support for the lifetime of your system.',
  },
]

export default function Products() {
  return (
    <>
      <PageBanner
        title="Products"
        subtitle="Premium solar equipment for maximum performance and long-term savings."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading
            title="Our Product Range"
            subtitle="Everything your solar system needs, under one roof"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {products.map(({ title, image, desc, specs }, i) => (
              <Reveal key={title} variant="up" delay={(i % 3) * 130}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md shadow-gray-200 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-gray-50 p-4">
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      className="h-full w-full object-contain transition duration-700 group-hover:scale-105"
                    />
                  </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-navy">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    {desc}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-center gap-2 text-xs font-semibold text-navy"
                      >
                        <BadgeCheck size={14} className="shrink-0 text-cta" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center justify-between pt-6">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 rounded-full bg-cta px-5 py-2 text-xs font-semibold text-white transition hover:bg-cta-dark"
                    >
                      Get a Quote
                      <ArrowRight size={13} />
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-cta transition hover:gap-2.5"
                    >
                      Details
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
              </Reveal>
            ))}

            <Reveal variant="up" delay={260}>
              <div className="group flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-navy p-8 text-center text-white transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-navy/30">
                <h3 className="text-2xl font-extrabold">
                  Need a Custom Solution?
                </h3>
                <p className="mt-3 text-sm text-white/70">
                  Tell us your energy needs and our engineers will design the
                  perfect system for you.
                </p>
                <Link
                  to="/contact"
                  className="shine-btn mt-6 inline-flex items-center gap-2 rounded-full bg-cta px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-cta-dark"
                >
                  Talk to an Expert
                  <ArrowRight size={15} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-accent-light/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading
            title="Why Buy From ElecSun"
            subtitle="Quality you can trust, support you can rely on"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {guarantees.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} variant="up" delay={i * 120}>
                <div className="group h-full rounded-2xl bg-white p-7 text-center shadow-md shadow-gray-200 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <span className="relative mx-auto flex size-14 items-center justify-center rounded-full bg-accent-light text-cta transition duration-300 group-hover:scale-110 group-hover:bg-cta group-hover:text-white">
                    <Icon size={26} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
