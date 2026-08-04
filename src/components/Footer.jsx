import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from './SocialIcons'
import Reveal from './Reveal'
import logo from '../assets/logo.png'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact Us', to: '/contact' },
]

const productLinks = [
  'Solar Panels',
  'Solar Inverters',
  'Solar Batteries',
  'Mounting Structures',
  'Accessories',
]

const socials = [
  { icon: FacebookIcon, label: 'Facebook' },
  { icon: InstagramIcon, label: 'Instagram' },
  { icon: LinkedinIcon, label: 'LinkedIn' },
  { icon: YoutubeIcon, label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <Reveal variant="up">
          <Link to="/" className="inline-flex">
            <img
              src={logo}
              alt="ElecSun Solar Energy logo"
              className="h-20 w-auto max-w-[15rem] object-contain"
            />
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Powering a brighter tomorrow with clean and renewable energy
            solutions.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:-translate-y-1 hover:border-cta hover:bg-cta hover:text-white"
              >
                <Icon width={16} height={16} />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal variant="up" delay={120}>
          <h3 className="text-base font-bold uppercase tracking-wider">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="transition hover:text-cta"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal variant="up" delay={240}>
          <h3 className="text-base font-bold uppercase tracking-wider">
            Our Products
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {productLinks.map((label) => (
              <li key={label}>
                <Link
                  to="/products"
                  className="transition hover:text-cta"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal variant="up" delay={360}>
          <h3 className="text-base font-bold uppercase tracking-wider">
            Contact Us
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-3">
              <Phone size={16} className="shrink-0 text-cta" />
              <a href="tel:03125868100" className="transition hover:text-cta">
                0312-5868100
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-cta" />
              <a
                href="mailto:info@elecsun.com"
                className="transition hover:text-cta"
              >
                info@elecsun.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="shrink-0 text-cta" />
              <span>Kharian, Pakistan</span>
            </li>
          </ul>
          <form
            className="mt-6 flex overflow-hidden rounded-full bg-white/10 ring-1 ring-white/20 focus-within:ring-cta"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="w-full min-w-0 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none"
            />
            <button
              type="submit"
              className="flex shrink-0 items-center gap-1.5 bg-cta px-5 text-sm font-semibold text-white transition hover:bg-cta-dark"
            >
              Subscribe
              <Send size={14} />
            </button>
          </form>
        </Reveal>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <p>Copyright &copy; 2025 ElecSun Solar Energy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="transition hover:text-cta">
              Privacy Policy
            </a>
            <span className="text-white/25">|</span>
            <a href="#" className="transition hover:text-cta">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
