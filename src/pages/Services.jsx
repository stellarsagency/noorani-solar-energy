import { Link } from 'react-router-dom'
import {
  Sun,
  Wrench,
  BatteryCharging,
  Monitor,
  ClipboardList,
  PencilRuler,
  Headset,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import PageBanner from '../components/PageBanner'
import SectionHeading from '../components/SectionHeading'
import CtaBanner from '../components/CtaBanner'

const services = [
  {
    icon: Sun,
    title: 'Solar Installation',
    text: 'Professional end-to-end installation of rooftop and ground-mounted solar systems for homes, businesses and industries.',
    points: ['Site survey & feasibility', 'Licensed engineering team', 'Same-week installation'],
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    text: 'Regular servicing, cleaning and monitoring that keeps your solar system performing at peak efficiency year after year.',
    points: ['Panel cleaning & inspection', 'Inverter health checks', '24/7 fault response'],
  },
  {
    icon: BatteryCharging,
    title: 'Energy Storage',
    text: 'Smart battery storage solutions that store solar energy during the day and keep your home powered through the night.',
    points: ['1.2kWh - 8kWh batteries', 'Backup during outages', 'Smart energy management'],
  },
  {
    icon: Monitor,
    title: 'System Design',
    text: 'Custom solar designs and load analysis tailored precisely to your energy needs, roof space and budget.',
    points: ['Free load assessment', '3D design & layout', 'ROI & payback analysis'],
  },
]

const steps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Free Consultation',
    text: 'Share your electricity bills and we assess your energy needs for free.',
  },
  {
    icon: PencilRuler,
    step: '02',
    title: 'Custom Design',
    text: 'Our engineers design a system sized perfectly for your home or business.',
  },
  {
    icon: Sun,
    step: '03',
    title: 'Professional Install',
    text: 'Our certified team installs your system quickly, safely and cleanly.',
  },
  {
    icon: Headset,
    step: '04',
    title: 'Lifetime Support',
    text: 'Monitoring, maintenance and fast after-sales support - always available.',
  },
]

export default function Services() {
  return (
    <>
      <PageBanner
        title="Services"
        subtitle="Complete solar services from first consultation to lifetime support."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading
            title="What We Offer"
            subtitle="Everything you need for clean, reliable solar energy"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {services.map(({ icon: Icon, title, text, points }) => (
              <div
                key={title}
                className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-md shadow-gray-100 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200"
              >
                <div className="flex items-center gap-4">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-accent-light text-cta transition group-hover:bg-cta group-hover:text-white">
                    <Icon size={26} />
                  </span>
                  <h3 className="text-xl font-bold text-navy">{title}</h3>
                </div>
                <p className="mt-5 leading-relaxed text-body">{text}</p>
                <ul className="mt-5 space-y-2.5">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 text-sm text-ink"
                    >
                      <CheckCircle2 size={16} className="shrink-0 text-cta" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cta transition hover:gap-2.5"
                >
                  Get Started
                  <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              How It Works
            </h2>
            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-8 rounded-full bg-cta" />
              <span className="h-1 w-16 rounded-full bg-cta/50" />
              <span className="h-1 w-8 rounded-full bg-cta" />
            </div>
            <p className="mt-4 text-base text-white/70 sm:text-lg">
              Four simple steps to your own solar power plant
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, step, title, text }, i) => (
              <div key={step} className="relative">
                {i < steps.length - 1 && (
                  <span className="absolute left-16 top-8 hidden h-0.5 w-[calc(100%-4rem)] bg-white/20 lg:block" />
                )}
                <span className="relative z-10 flex size-16 items-center justify-center rounded-2xl bg-cta text-white shadow-lg shadow-cta/30">
                  <Icon size={28} />
                </span>
                <p className="mt-5 text-sm font-bold uppercase tracking-widest text-cta">
                  Step {step}
                </p>
                <h3 className="mt-1 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
