import { Link } from 'react-router-dom'
import {
  Sun,
  ShieldCheck,
  Wallet,
  Wrench,
  BatteryCharging,
  Monitor,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Leaf,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import CtaBanner from '../components/CtaBanner'

const heroBg =
  'https://images.unsplash.com/photo-1686164748327-f659bf9cdba0?auto=format&fit=crop&w=1920&q=80'
const aboutBg =
  'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80'
const partnersBanner =
  'https://i.ibb.co/RGQWC7pZ/Whats-App-Image-2026-08-02-at-12-52-19-PM.jpg'
const inverterImg = 'https://i.ibb.co/M5G0ZNc9/fgfgf.jpg'
const batteryImg =
  'https://i.ibb.co/mrjjp3S7/Whats-App-Image-2026-08-02-at-12-48-52-PM.jpg'

const features = [
  {
    icon: Sun,
    title: 'High Efficiency',
    text: 'Premium Quality',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable &',
    text: 'Long Lasting',
  },
  {
    icon: Wallet,
    title: 'Save More on',
    text: 'Electricity',
  },
  {
    icon: Wrench,
    title: 'Expert Support',
    text: '& Maintenance',
  },
]

const services = [
  {
    icon: Sun,
    title: 'Solar Installation',
    text: 'Professional end-to-end installation of rooftop solar systems for homes, businesses and industries.',
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    text: 'Regular servicing, cleaning and monitoring to keep your solar system performing at its best.',
  },
  {
    icon: BatteryCharging,
    title: 'Energy Storage',
    text: 'Smart battery storage solutions that store solar energy for reliable power day and night.',
  },
  {
    icon: Monitor,
    title: 'System Design',
    text: 'Custom solar designs and load analysis tailored to your energy needs and budget.',
  },
]

const products = [
  {
    title: 'Solar Panels',
    image:
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&h=400&q=80',
  },
  {
    title: 'Solar Inverters',
    image: inverterImg,
  },
  {
    title: 'Solar Batteries',
    image: batteryImg,
  },
  {
    title: 'Mounting Structures',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&h=400&q=80',
  },
]

const badges = [
  { icon: BadgeCheck, label: 'Premium Quality' },
  { icon: ShieldCheck, label: '25+ Years Warranty' },
  { icon: Leaf, label: 'Eco-Friendly Solutions' },
]

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '1000+', label: 'Happy Clients' },
  { value: '25+', label: 'Expert Engineers' },
  { value: '100%', label: 'Satisfaction' },
]

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <Services />
      <Products />
      <About />
      <TrustedPartners />
      <CtaBanner />
    </>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={heroBg}
        alt="House with solar panels on the roof"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/25" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-36 lg:px-8">
        <div className="max-w-2xl">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-cta">
            <span className="h-px w-10 bg-cta" />
            Powering a Brighter Tomorrow
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-navy sm:text-5xl lg:text-6xl">
            Smart Solar
            <span className="block text-cta">Better Tomorrow</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-body">
            ElecSun Solar Energy provides reliable, efficient and sustainable
            solar solutions for homes, businesses and industries.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-cta px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cta/30 transition hover:bg-cta-dark"
            >
              Explore Solutions
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-navy/30 transition hover:bg-navy-light"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureStrip() {
  return (
    <section>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 rounded-3xl bg-navy px-4 py-10 sm:grid-cols-2 sm:gap-8 sm:px-8 sm:py-12 lg:grid-cols-4 lg:px-10">
        {features.map(({ icon: Icon, title, text }) => (
          <div key={title + text} className="flex items-center gap-3 sm:gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent-light text-cta sm:size-14">
              <Icon size={22} className="sm:size-[26px]" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-white sm:text-base">
                {title}
              </h3>
              <p className="text-xs text-white/60 sm:text-sm">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          title="Our Services"
          subtitle="Everything you need for clean, reliable solar energy"
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-md shadow-gray-100 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200"
            >
              <span className="flex size-14 items-center justify-center rounded-xl bg-accent-light text-cta transition group-hover:bg-cta group-hover:text-white">
                <Icon size={26} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{text}</p>
              <Link
                to="/services"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cta transition hover:gap-2.5"
              >
                Learn More
                <ArrowRight size={15} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Products() {
  return (
    <section className="bg-accent-light/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          title="Our Products"
          subtitle="Premium equipment for maximum solar performance"
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(({ title, image }) => (
            <div
              key={title}
              className="group overflow-hidden rounded-2xl bg-white shadow-md shadow-gray-200 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-navy">{title}</h3>
                <Link
                  to="/products"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-cta transition hover:gap-2.5"
                >
                  View Details
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-cta">
            <span className="h-px w-10 bg-cta" />
            Who We Are
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
            About ElecSun
          </h2>
          <p className="mt-5 leading-relaxed text-body">
            ElecSun Solar Energy is a trusted provider of complete solar energy
            solutions in Pakistan. Our mission is to make clean, affordable
            energy accessible to every home, business and industry through
            premium equipment, professional installation and dependable
            after-sales support.
          </p>
          <p className="mt-4 leading-relaxed text-body">
            From system design to installation, maintenance and energy storage,
            we handle everything so you can enjoy lower electricity bills and a
            greener future.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {badges.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full bg-accent-light px-4 py-2 text-sm font-semibold text-navy"
              >
                <Icon size={16} className="text-cta" />
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src={aboutBg}
            alt="Solar panels at sunset"
            loading="lazy"
            className="h-80 w-full rounded-3xl object-cover sm:h-[26rem]"
          />
          <div className="mt-6 rounded-3xl bg-navy p-7 sm:absolute sm:-bottom-8 sm:left-6 sm:right-6 sm:mt-0 sm:shadow-2xl sm:shadow-navy/40 lg:left-10 lg:right-10">
            <div className="grid grid-cols-2 gap-6">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-3xl font-extrabold text-cta">{value}</p>
                  <p className="mt-1 text-sm text-white/70">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustedPartners() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          title="Trusted Partners"
          subtitle="We partner with leading global brands for premium quality"
        />
        <div className="mt-10 overflow-hidden rounded-3xl bg-accent-light/40 p-4 shadow-md shadow-gray-200 sm:p-8">
          <img
            src={partnersBanner}
            alt="SunSaviour and Anicsun trusted partners banner"
            loading="lazy"
            className="h-auto w-full rounded-2xl object-contain"
          />
        </div>
      </div>
    </section>
  )
}
