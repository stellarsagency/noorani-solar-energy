import { Construction } from 'lucide-react'

export default function PlaceholderPage({ title }) {
  return (
    <section className="bg-accent-light/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-32 text-center sm:px-6 lg:px-8">
        <span className="flex size-16 items-center justify-center rounded-2xl bg-cta text-white">
          <Construction size={32} />
        </span>
        <h1 className="mt-6 text-4xl font-extrabold text-navy sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-body">
          This page is under construction. Please check back soon.
        </p>
      </div>
    </section>
  )
}
