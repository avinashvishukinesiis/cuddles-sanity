"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const testimonials = [
    {
        id: 1,
        name: "Sandeep Joshi",
        desiganation: " Doctor",
        quote: "Cuddles ensures every child feels valued",
        img: "/test1.png",
    },
    {
        id: 2,
        name: "Anita Sharma",
        desiganation: "Parent",
        quote: "The teachers are caring and the environment feels safe.",
        img: "/test2.png",
    },
    {
        id: 3,
        name: "Rahul Mehta",
        desiganation: "Engineer",
        quote: "A perfect balance of fun and learning for my kid.",
        img: "/photo/3.jpg",
    },
]

export default function Testimonial() {
    const [currentIndex, setIndex] = useState(0)

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const getCardStyle = (index: number) => {
        const position = (index - currentIndex + testimonials.length) % testimonials.length

        if (position === 0) {
            // Active card
            return {
                zIndex: 50,
                scale: 1,
                y: 0,
                opacity: 1,
                rotateX: 0,
            }
        } else if (position === 1) {
            // Next card
            return {
                zIndex: 40,
                scale: 0.95,
                y: 20,
                opacity: 0.8,
                rotateX: -5,
            }
        } else if (position === 2) {
            // Second next card
            return {
                zIndex: 30,
                scale: 0.9,
                y: 40,
                opacity: 0.6,
                rotateX: -10,
            }
        } else if (position === testimonials.length - 1) {
            // Previous card
            return {
                zIndex: 40,
                scale: 0.95,
                y: -20,
                opacity: 0.8,
                rotateX: 5,
            }
        } else {
            // Hidden cards
            return {
                zIndex: 20,
                scale: 0.85,
                y: position > testimonials.length / 2 ? -60 : 60,
                opacity: 0.3,
                rotateX: position > testimonials.length / 2 ? 15 : -15,
            }
        }
    }

    // Auto play every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 4000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="flex flex-col items-center justify-center w-screen">
            <h2 className="text-3xl md:text-5xl font-extrabold text-purple mb-4 relative">
                <img src="./heartDoodle.svg" alt="clould vector art" className="absolute bottom-5 left-[-35]" />
                Testimonials
            </h2>
            <p className="text-purple text-3xl mb-8">Why Parents Choose Cuddles</p>

            <div className="relative w-screen md:w-full max-w-3xl h-[280px] flex items-center justify-center">
                {/* Prev Button */}
                <button
                    onClick={prevSlide}
                    className="absolute left-2 md:left-[-4rem] cursor-pointer z-10"
                >
                    <FaAngleLeft className="text-purple h-36" />
                </button>

                {/* Card */}
                <AnimatePresence mode="sync">
                    {testimonials.map((t, i) => {
                        const style = getCardStyle(i)
                        return (
                            i === currentIndex ? (
                                <motion.div
                                    key={t.id}
                                    initial={{ y: 100, opacity: 0, scale: 0.95 }}
                                    animate={{
                                        scale: style.scale,
                                        y: style.y,
                                        opacity: style.opacity,
                                        rotateX: style.rotateX,
                                        zIndex: style.zIndex,
                                    }}
                                    exit={{ y: -100, opacity: 0, scale: 0.95 }}
                                    transition={{
                                        duration: 0.6,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 15,
                                    }}
                                    style={{
                                        transformStyle: "preserve-3d",
                                        transformOrigin: "center center",
                                    }}
                                    className="absolute w-[80dvw] md:w-full h-full bg-white shadow-xl rounded-2xl flex flex-col md:flex-row items-center overflow-hidden px-6"
                                >
                                    {/* Passport image */}
                                    <div className="flex-shrink-0">
                                        <img
                                            src={t.img}
                                            alt={t.name}
                                            className="w-24 h-28 md:w-36 md:h-40 object-cover rounded-lg shadow"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="ml-6 w-full">
                                        <h3 className="text-xl md:text-3xl font-extrabold text-purple mb-2 text-center">
                                            {t.name} , <br /> {t.desiganation}
                                        </h3>
                                        <p className="text-purple italic text-center">“{t.quote}”</p>
                                    </div>
                                </motion.div>
                            ) : null
                        )
                    }
                    )}
                </AnimatePresence>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    className="absolute right-2 md:right-[-4rem] cursor-pointer z-10"
                >
                    <FaAngleRight className="text-purple h-36" />
                </button>
            </div>
        </section>
    )
}
