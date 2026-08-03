import {
  BadgeCheck,
  ShieldCheck,
  Leaf,
  Target,
  Eye,
  Wrench,
  HeartHandshake,
  Sun,
} from 'lucide-react'
import PageBanner from '../components/PageBanner'
import SectionHeading from '../components/SectionHeading'
import CtaBanner from '../components/CtaBanner'

const IMG = {
  aboutMain:
    'https://i.ibb.co/Q15ZDN5/fgfg.jpg',
  partners:
    'https://i.ibb.co/RGQWC7pZ/Whats-App-Image-2026-08-02-at-12-52-19-PM.jpg',
  team:
    'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1000&q=80',
}

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

const values = [
  {
    icon: ShieldCheck,
    title: 'Reliability',
    text: 'We install systems built to last, backed by long warranties and rigorous quality checks.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    text: 'Every project we deliver reduces carbon footprints and supports a cleaner Pakistan.',
  },
  {
    icon: HeartHandshake,
    title: 'Integrity',
    text: 'Honest advice, transparent pricing and solutions tailored to your real energy needs.',
  },
  {
    icon: Wrench,
    title: 'Expertise',
    text: 'A team of certified engineers with hands-on experience across every project size.',
  },
]

export default function About() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Powering a brighter tomorrow with clean and renewable energy solutions."
      />

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
              ElecSun Solar Energy is a trusted provider of complete solar
              energy solutions in Pakistan. Our mission is to make clean,
              affordable energy accessible to every home, business and industry
              through premium equipment, professional installation and
              dependable after-sales support.
            </p>
            <p className="mt-4 leading-relaxed text-body">
              From system design to installation, maintenance and energy
              storage, we handle everything so you can enjoy lower electricity
              bills and a greener future.
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
              src={IMG.aboutMain}
              alt="Solar panels installation"
              loading="lazy"
              className="h-80 w-full rounded-3xl object-cover sm:h-[26rem]"
            />
            <div className="absolute -bottom-6 left-6 flex items-center gap-4 rounded-2xl bg-cta px-6 py-4 shadow-xl shadow-cta/40">
              <Sun size={30} className="text-white" />
              <div>
                <p className="text-2xl font-extrabold text-white">10+</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-extrabold text-cta sm:text-4xl">
                {value}
              </p>
              <p className="mt-1 text-sm text-white/70">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading
            title="Our Mission & Vision"
            subtitle="What drives us every single day"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-accent-light/40 p-8">
              <span className="flex size-14 items-center justify-center rounded-xl bg-cta text-white">
                <Target size={26} />
              </span>
              <h3 className="mt-5 text-xl font-bold text-navy">Our Mission</h3>
              <p className="mt-3 leading-relaxed text-body">
                To make solar energy simple, affordable and reliable for every
                Pakistani home and business by delivering premium products,
                expert installation and honest after-sales care.
              </p>
            </div>
            <div className="rounded-3xl bg-accent-light/40 p-8">
              <span className="flex size-14 items-center justify-center rounded-xl bg-navy text-white">
                <Eye size={26} />
              </span>
              <h3 className="mt-5 text-xl font-bold text-navy">Our Vision</h3>
              <p className="mt-3 leading-relaxed text-body">
                A Pakistan where clean, sustainable energy powers every home
                and industry — reducing costs, creating jobs and protecting the
                planet for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent-light/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles behind every installation"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-2xl bg-white p-7 shadow-md shadow-gray-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="flex size-14 items-center justify-center rounded-xl bg-accent-light text-cta transition group-hover:bg-cta group-hover:text-white">
                  <Icon size={26} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading
            title="Trusted Partners"
            subtitle="We partner with leading global brands for premium quality"
          />
          <div className="mt-10 overflow-hidden rounded-3xl bg-accent-light/40 p-4 shadow-md shadow-gray-200 sm:p-8">
            <img
              src={IMG.partners}
              alt="SunSaviour and Anicsun trusted partners banner"
              loading="lazy"
              className="h-auto w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
