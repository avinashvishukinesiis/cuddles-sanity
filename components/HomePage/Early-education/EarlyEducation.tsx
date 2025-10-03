"use client";

import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { useEffect, useState } from "react";
import { autoFetchHomePage } from "@/lib/auto-data-fetcher";
import { urlFor } from "@/lib/sanity";
import { HomePage } from "@/lib/types";

const defaultFeatures = [
  "Holistic Development",
  "Experienced Educators",
  "Safe & Inclusive Environment",
  "Engaging Curriculum",
]

export function EarlyEducationSection() {
  const [sectionData, setSectionData] = useState<HomePage['earlyEducationSection'] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const homePageData = await autoFetchHomePage();
        setSectionData(homePageData?.earlyEducationSection || null);
      } catch (error) {
        console.error('Error fetching early education data:', error);
      }
    };

    fetchData();
  }, []);
  const content = {
    title: sectionData?.title || "Why Early Education Matters ?",
    description: sectionData?.description || "The first five years of a child's life are when 90% of brain development occurs. Active learning and creative experiences don't just teach skills but they build the neural pathways that determine how children think, learn, and approach challenges for life. At Cuddles, we harness this incredible potential through purposeful play, hands-on exploration, and creative expression.",
    features: sectionData?.features
      ? sectionData.features.map((feature: { title: string } | string) => typeof feature === 'string' ? feature : feature.title)
      : defaultFeatures,
    image: sectionData?.image
  };

  return (
    <section aria-labelledby="why-early-education" className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-10 ">
      {/* Hero image */}
      <div className="w-full flex items-center justify-center">
        <Image
          src={content.image ? urlFor(content.image).url() : "/early-education.jpg"}
          alt="Children playing with colorful balls on a green lawn"
          className="h-auto w-full md:max-w-[500px] rounded-3xl shadow-lg"
          width={500}
          height={400}
        />
      </div>

      {/* Heading */}
      <h2
        id="why-early-education"
        className="h-display text-pretty text-center mt-10 sm:mt-12 text-4xl sm:text-5xl md:text-6xl font-bold text-[#9769A5]"
      >
        {content.title}
      </h2>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-3xl text-center text-base sm:text-lg leading-relaxed text-[#9769A5]">
        {content.description}
      </p>

      {/* Features */}
      <ul className="mx-auto mt-8 grid grid-cols-1 gap-3 text-center sm:grid-cols-2 lg:grid-cols-4">
        {content.features.map((label: string, index: number) => (
          <li key={`feature-${index}-${label}`} className="flex items-center justify-center gap-2">
            <IoIosStar aria-hidden="true" className="size-4 text-[#4AA6B1] shrink-0" />
            <span className="text-sm sm:text-base text-[#9769A5]">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
