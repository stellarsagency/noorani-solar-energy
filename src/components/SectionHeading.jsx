export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 flex items-center justify-center gap-2">
        <span className="h-1 w-8 rounded-full bg-cta" />
        <span className="h-1 w-16 rounded-full bg-cta/50" />
        <span className="h-1 w-8 rounded-full bg-cta" />
      </div>
      {subtitle && (
        <p className="mt-4 text-base text-body sm:text-lg">{subtitle}</p>
      )}
    </div>
  )
}
