import Image from "next/image"

interface ContentCardProps {
  title: string
  description: string
  image: string
  imageAlt: string
  titleColor?: "purple" | "blue" | "pink" | "teal" | "green" | "orange"
  className?: string
}

const titleColorClasses = {
  purple: "text-purple",
  blue: "text-blue",
  pink: "text-pink-600",
  teal: "text-teal-600",
  green: "text-green-600",
  orange: "text-orange-600",
}

export function ContentCard({
  title,
  description,
  image,
  imageAlt,
  titleColor = "purple",
  className = "",
}: ContentCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-${titleColor} hover:shadow-md transition-shadow duration-200 h-full ${className}`}
    >
      <div className="aspect-[4/2] relative overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
      </div>
      <div className={`p-6 border-t border-${titleColor}`}>
        <h3 className={`text-lg font-semibold mb-3 ${titleColorClasses[titleColor]}`}>{title}</h3>
        <p className={`${titleColorClasses[titleColor]} text-sm leading-relaxed`}>{description}</p>
      </div>
    </div>
  )
}