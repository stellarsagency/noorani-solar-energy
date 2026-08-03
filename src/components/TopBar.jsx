import { Mail, Phone } from 'lucide-react'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from './SocialIcons'

const socials = [
  { icon: FacebookIcon, label: 'Facebook' },
  { icon: InstagramIcon, label: 'Instagram' },
  { icon: LinkedinIcon, label: 'LinkedIn' },
  { icon: YoutubeIcon, label: 'YouTube' },
]

export default function TopBar() {
  return (
    <div className="bg-navy text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-2 text-xs sm:gap-4 sm:px-6 sm:py-2.5 sm:text-sm lg:px-8">
        <div className="flex items-center gap-3 text-white/85 sm:gap-5">
          <a
            href="mailto:info@elecsun.com"
            title="info@elecsun.com"
            className="flex items-center gap-1.5 transition hover:text-cta sm:gap-2"
          >
            <Mail size={14} className="shrink-0 sm:size-4" />
            <span className="hidden sm:inline">info@elecsun.com</span>
          </a>
          <a
            href="tel:03125868100"
            className="flex items-center gap-1.5 transition hover:text-cta sm:gap-2"
          >
            <Phone size={14} className="shrink-0 sm:size-4" />
            <span>0312-5868100</span>
          </a>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden text-white/70 md:inline">Follow Us:</span>
          <div className="flex items-center gap-1.5 sm:gap-2">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex size-6 items-center justify-center rounded-full bg-white/10 transition hover:bg-cta sm:size-7"
              >
                <Icon width={12} height={12} className="sm:w-[14px] sm:h-[14px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
