import Image from "next/image"
import { IoIosStar } from "react-icons/io";
const features = [
  "Holistic Development",
  "Experienced Educators",
  "Safe & Inclusive Environment",
  "Engaging Curriculum",
]

export function EarlyEducationSection() {
  return (
    <section aria-labelledby="why-early-education" className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-10 ">
      {/* Hero image */}
      <div className="w-full flex items-center justify-center">
        <img
          src="/early-education.jpg"
          alt="Children playing with colorful balls on a green lawn"
          className="h-auto w-full md:max-w-[500px] rounded-3xl shadow-lg"
        />
      </div>

      {/* Heading */}
      <h2
        id="why-early-education"
        className="h-display text-pretty text-center mt-10 sm:mt-12 text-4xl sm:text-5xl md:text-6xl font-bold text-[#9769A5]"
      >
        Why Early Education Matters ?
      </h2>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-3xl text-center text-base sm:text-lg leading-relaxed text-[#9769A5]">
        The first five years of a child&apos;s life are when 90% of brain development occurs. Active learning and creative
        experiences don&apos;t just teach skills but they build the neural pathways that determine how children think,
        learn, and approach challenges for life. At Cuddles, we harness this incredible potential through purposeful
        play, hands-on exploration, and creative expression.
      </p>

      {/* Features */}
      <ul className="mx-auto mt-8 grid grid-cols-1 gap-3 text-center sm:grid-cols-2 lg:grid-cols-4">
        {features.map((label) => (
          <li key={label} className="flex items-center justify-center gap-2">
            <IoIosStar aria-hidden="true" className="size-4 text-[#4AA6B1] shrink-0" />
            <span className="text-sm sm:text-base text-[#9769A5]">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
