import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex shrink-0 items-center"
          onClick={close}
          style={{ animationDelay: '0.05s' }}
        >
          <img
            src={logo}
            alt="ElecSun Solar Energy logo"
            className="hero-anim h-14 w-auto max-w-[12rem] object-contain sm:h-20 sm:max-w-[16rem] lg:h-24"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              style={{ animationDelay: `${0.12 + i * 0.06}s` }}
              className={({ isActive }) =>
                `hero-anim nav-underline text-sm font-medium transition hover:text-cta ${
                  isActive ? 'is-active text-cta' : 'text-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            style={{ animationDelay: '0.6s' }}
            className="hero-anim shine-btn hidden items-center gap-2 rounded-full bg-cta px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-cta/30 transition hover:bg-cta-dark sm:inline-flex"
          >
            Get a Quote
            <ArrowRight size={16} />
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-lg border border-gray-200 text-navy lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-gray-100 bg-white lg:hidden">
          <ul className="mx-auto max-w-7xl space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={close}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                      location.pathname === link.to ||
                      (isActive)
                        ? 'bg-accent-light/60 text-cta'
                        : 'text-ink hover:bg-gray-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contact"
                onClick={close}
                className="flex items-center justify-center gap-2 rounded-full bg-cta px-6 py-2.5 text-sm font-semibold text-white"
              >
                Get a Quote
                <ArrowRight size={16} />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
