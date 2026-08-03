import { Link } from 'react-router-dom'
import { CalendarDays, ArrowRight, ArrowUpRight } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import SectionHeading from '../components/SectionHeading'
import CtaBanner from '../components/CtaBanner'
import Reveal from '../components/Reveal'

const IMG = {
  featured:
    'https://i.ibb.co/Q15ZDN5/fgfg.jpg',
  house:
    'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&h=600&q=80',
  field:
    'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&h=600&q=80',
  roof:
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&h=600&q=80',
  closeup:
    'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&h=600&q=80',
  battery:
    'https://i.ibb.co/mrjjp3S7/Whats-App-Image-2026-08-02-at-12-48-52-PM.jpg',
  inverter:
    'https://i.ibb.co/M5G0ZNc9/fgfgf.jpg',
}

const featured = {
  title: '5 Signs Your Home Is Ready for Solar Energy',
  excerpt:
    'Wondering whether solar is right for you? From your monthly bill to your roof direction, here are the five signs that your home is ready to go solar today.',
  category: 'Solar Basics',
  date: 'July 28, 2026',
  image: IMG.featured,
}

const posts = [
  {
    title: 'How Net Metering Works in Pakistan',
    excerpt: 'Turn your excess solar energy into bill credits with net metering. Here is everything you need to know.',
    category: 'Savings',
    date: 'July 20, 2026',
    image: IMG.house,
  },
  {
    title: 'Monocrystalline vs Polycrystalline Panels',
    excerpt: 'Which solar panel technology gives you the best value? We compare efficiency, price and lifespan.',
    category: 'Technology',
    date: 'July 12, 2026',
    image: IMG.closeup,
  },
  {
    title: 'Battery Storage: Why It Matters in 2026',
    excerpt: 'With rising electricity costs, storing your solar energy is smarter than ever. Here is why.',
    category: 'Storage',
    date: 'July 5, 2026',
    image: IMG.battery,
  },
  {
    title: 'Solar Maintenance Checklist for Summer',
    excerpt: 'Keep your system at peak performance with this simple seasonal maintenance checklist.',
    category: 'Maintenance',
    date: 'June 28, 2026',
    image: IMG.field,
  },
  {
    title: 'Choosing the Right Solar Inverter',
    excerpt: 'The inverter is the brain of your solar system. Learn how to pick the right one for your home.',
    category: 'Technology',
    date: 'June 18, 2026',
    image: IMG.inverter,
  },
  {
    title: 'Government Incentives for Solar Energy',
    excerpt: 'Net metering, tax benefits and financing options that make going solar more affordable.',
    category: 'Policy',
    date: 'June 10, 2026',
    image: IMG.roof,
  },
]

export default function Blog() {
  return (
    <>
      <PageBanner
        title="Blog"
        subtitle="Guides, tips and news to help you make the most of solar energy."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Reveal variant="zoom">
            <Link
              to="/blog"
              className="group grid overflow-hidden rounded-3xl bg-white shadow-md shadow-gray-200 transition duration-300 hover:-translate-y-2 hover:shadow-xl lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="rounded-full bg-cta px-3 py-1 font-bold uppercase tracking-wide text-white">
                    Featured
                  </span>
                  <span className="rounded-full bg-accent-light px-3 py-1 font-semibold text-navy">
                    {featured.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-body">
                    <CalendarDays size={13} />
                    {featured.date}
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-extrabold text-navy sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 leading-relaxed text-body">
                  {featured.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cta transition group-hover:gap-2.5">
                  Read Full Article
                  <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-accent-light/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading
            title="Latest Articles"
            subtitle="Fresh insights from our solar experts"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map(({ title, excerpt, category, date, image }, i) => (
              <Reveal key={title} variant="up" delay={(i % 3) * 130}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md shadow-gray-200 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-115"
                    />
                  </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between text-xs">
                    <span className="rounded-full bg-accent-light px-3 py-1 font-semibold text-navy">
                      {category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-body">
                      <CalendarDays size={13} />
                      {date}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold leading-snug text-navy">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    {excerpt}
                  </p>
                  <Link
                    to="/blog"
                    className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-cta transition hover:gap-2.5"
                  >
                    Read More
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
