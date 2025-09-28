'use client'

import React, { useState } from 'react'
import { Curriculum } from '@/lib/types'

interface FAQProps {
    curriculumData?: Curriculum | null
}

const FAQ: React.FC<FAQProps> = ({ curriculumData }) => {
    const [openItems, setOpenItems] = useState<number[]>([])
    const [activeCategory, setActiveCategory] = useState<string>('all')

    const defaultData = {
        faqSection: {
            title: "Frequently Asked Questions",
            subtitle: "Get answers to common questions about our curriculum and programs",
            faqs: [
                {
                    question: 'What teaching methodologies do you use?',
                    answer: 'We use a combination of Montessori approach, STEM integration, creative arts, and play-based learning. Our curriculum is research-based and designed to support holistic child development through hands-on, child-led activities.',
                    category: 'curriculum'
                },
                {
                    question: 'How do you assess my child\'s progress?',
                    answer: 'We use observational assessment, portfolio documentation, developmental milestone tracking, and regular parent conferences. Our approach celebrates growth rather than judging children, focusing on each child\'s unique developmental journey.',
                    category: 'assessment'
                },
                {
                    question: 'What age groups do your programs serve?',
                    answer: 'We serve children from 3 months to 6 years across six programs: Infants (3+ months), Toddler (1-2 years), Play Group (2-3 years), Nursery (3-4 years), Prep-1 (4-5 years), and Prep-2 (5-6 years). Each program is tailored to specific developmental needs.',
                    category: 'programs'
                },
                {
                    question: 'How do you ensure a safe learning environment?',
                    answer: 'Our learning environments are thoughtfully designed with child-sized furniture, natural lighting, and safe materials. We maintain small class sizes, have qualified staff, and create spaces that promote independence while ensuring safety and supervision.',
                    category: 'environment'
                },
                {
                    question: 'How do you involve parents in their child\'s learning?',
                    answer: 'We believe in strong parent partnerships through daily communication, regular conferences, resource sharing, family involvement opportunities, and collaborative goal setting. Parents receive updates on their child\'s progress and activities to support learning at home.',
                    category: 'general'
                },
                {
                    question: 'What makes your curriculum different from traditional preschools?',
                    answer: 'Our curriculum integrates multiple research-based approaches, emphasizes child-led learning, incorporates STEM and arts naturally, and focuses on developing the whole child. We celebrate the learning journey rather than rushing to meet arbitrary milestones.',
                    category: 'curriculum'
                },
                {
                    question: 'Do you offer special programs beyond regular curriculum?',
                    answer: 'Yes, we offer enriching programs like Nature Explorers, Little Scientists, Creative Expression, Cultural Celebrations, Young Entrepreneurs, and daily Mindfulness & Yoga. These programs make learning memorable and fun while developing various skills.',
                    category: 'programs'
                },
                {
                    question: 'How do you prepare children for elementary school?',
                    answer: 'Our Prep programs focus on school readiness through independence skills, social-emotional development, early literacy and numeracy, critical thinking, and confidence building. We ensure smooth transitions while maintaining our play-based, joyful approach to learning.',
                    category: 'programs'
                }
            ]
        }
    }

    const faqData = curriculumData?.faqSection || defaultData.faqSection
    const faqs = faqData.faqs || defaultData.faqSection.faqs

    const toggleItem = (index: number) => {
        setOpenItems(prev =>
            prev.includes(index)
                ? prev.filter(item => item !== index)
                : [...prev, index]
        )
    }

    const categories = [
        { value: 'all', label: 'All Questions' },
        { value: 'general', label: 'General' },
        { value: 'curriculum', label: 'Curriculum' },
        { value: 'programs', label: 'Programs' },
        { value: 'assessment', label: 'Assessment' },
        { value: 'environment', label: 'Environment' }
    ]

    const filteredFaqs = activeCategory === 'all'
        ? faqs
        : faqs.filter((faq: { question: string; answer: string; category: string }) => faq.category === activeCategory)

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#4AA6B1] mb-4">
                        {faqData.title}
                    </h2>
                    <p className="text-xl text-[#4AA6B1]">
                        {faqData.subtitle}
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {categories.map(category => (
                        <button
                            key={category.value}
                            onClick={() => setActiveCategory(category.value)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                activeCategory === category.value
                                    ? 'bg-[#4AA6B1] text-white'
                                    : 'bg-white text-[#4AA6B1] hover:bg-[#4AA6B1] hover:text-white'
                            }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {filteredFaqs.map((faq: { question: string; answer: string; category: string }) => {
                        const globalIndex = faqs.findIndex((f: { question: string; answer: string; category: string }) => f.question === faq.question)
                        const isOpen = openItems.includes(globalIndex)

                        return (
                            <div
                                key={globalIndex}
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleItem(globalIndex)}
                                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-8 h-8 bg-[#4AA6B1] rounded-full flex items-center justify-center">
                                                <span className="text-white text-sm font-bold">
                                                    Q
                                                </span>
                                            </div>
                                        </div>
                                        <h3 className="font-semibold text-gray-800 text-lg">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <div className="flex-shrink-0 ml-4">
                                        <svg
                                            className={`w-5 h-5 text-[#4AA6B1] transition-transform duration-200 ${
                                                isOpen ? 'rotate-180' : ''
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </div>
                                </button>

                                {isOpen && (
                                    <div className="px-6 pb-4">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-8 h-8 bg-[#EBAA35] rounded-full flex items-center justify-center">
                                                    <span className="text-white text-sm font-bold">
                                                        A
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>

                {/* Contact CTA */}
                <div className="text-center mt-12">
                    <div className="bg-gradient-to-r from-[#4AA6B1] to-[#9769A5] rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">
                            Still have questions?
                        </h3>
                        <p className="mb-6 max-w-2xl mx-auto">
                            We&apos;d love to discuss your child&apos;s needs and how our curriculum can support their development journey.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-[#4AA6B1] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                                Schedule a Visit
                            </button>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#4AA6B1] transition-all duration-300">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ