"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqData = [
  {
    id: 1,
    question: "What age groups do you accept?",
    answer: "We take kids of 3 months and onwards.",
  },
  {
    id: 2,
    question: "In what ways can learning via play help children perform better in school?",
    answer:
      "Learning through play helps children develop critical thinking skills, creativity, and social abilities. It makes learning enjoyable and memorable, leading to better retention and academic performance.",
  },
  {
    id: 3,
    question: "What security steps do you take, and how do you let parents know?",
    answer:
      "We maintain strict security protocols including background checks for all staff, secure entry systems, regular safety drills, and real-time communication with parents through our app and daily reports.",
  },
  {
    id: 4,
    question: "Are parents updated and involved in school happenings?",
    answer:
      "Yes! We provide daily updates through our parent app, regular newsletters, parent-teacher conferences, and special events. We believe in maintaining open communication with families.",
  },
]

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<number>(1)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? 0 : id)
  }

  return (
    <div className="max-w-4xl mx-auto px-6 mt-20">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Cloud Icon and FAQ's Title */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <motion.h2
            className="text-6xl font-extrabold text-[#4AA6B1] relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <img src="./cloud.svg" alt="clould vector art" className="absolute bottom-5 right-28"/>
            FAQ&apos;s
          </motion.h2>
        </div>

        {/* Subtitle */}
        <motion.h2
          className="text-3xl font-light text-[#4AA6B1] mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          What Parents Ask.
        </motion.h2>

        {/* Mission Statement */}
        <motion.p
          className="text-lg text-[#4AA6B1] leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Cuddles mission is to provide affordable, high-quality early education and childcare services for working
          families to ensure every child.
        </motion.p>
      </motion.div>

      {/* FAQ Items */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        {faqData.map((item, index) => (
          <motion.div
            key={item.id}
            className={`rounded-2xl border-2 border-gray-200 overflow-hidden transition-all duration-300 ${
              openItem === item.id ? " " : "bg-white"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.01 }}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className={`rounded-b-2xl w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none ${
              openItem === item.id ? "bg-[#FBC462]" : "bg-white"
            }`} 
            >
              <span
                className={`text-lg font-medium transition-colors duration-300 ${
                  openItem === item.id ? "text-white" : "text-[#4AA6B1]"
                }`}
              >
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: openItem === item.id ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className={`text-2xl font-light transition-colors duration-300 ${
                  openItem === item.id ? "text-white" : "text-gray-600"
                }`}
              >
                +
              </motion.div>
            </button>

            <AnimatePresence>
              {openItem === item.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 bg-white">
                    <motion.p
                      className="text-[#4AA6B1] text-base leading-relaxed"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      {item.answer}
                    </motion.p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
