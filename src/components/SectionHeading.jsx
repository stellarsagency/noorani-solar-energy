import Reveal from './Reveal'

export default function SectionHeading({ title, subtitle, light = false }) {
  return (
    <Reveal variant="up">
      <div className="text-center">
        <h2
          className={`text-3xl font-extrabold sm:text-4xl ${
            light ? 'text-white' : 'text-navy'
          }`}
        >
          {title}
        </h2>
        <div className="mx-auto mt-4 flex items-center justify-center gap-2">
          <span className="h-1 w-8 rounded-full bg-cta" />
          <span className="h-1 w-16 rounded-full bg-cta/50" />
          <span className="h-1 w-8 rounded-full bg-cta" />
        </div>
        {subtitle && (
          <p
            className={`mt-4 text-base sm:text-lg ${
              light ? 'text-white/70' : 'text-body'
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  )
}
