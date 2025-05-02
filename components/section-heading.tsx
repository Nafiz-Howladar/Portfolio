interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 dark:text-gray-300">{subtitle}</p>}
      <div className="w-16 h-1 bg-black dark:bg-white mx-auto mt-4"></div>
    </div>
  )
}
