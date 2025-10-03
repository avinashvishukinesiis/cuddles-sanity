import React from 'react'
import Image from 'next/image'
import { Curriculum } from '@/lib/types'
import { urlFor } from '@/lib/sanity'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

interface LearningMethodologyProps {
    curriculumData?: Curriculum | null
}

const LearningMethodology: React.FC<LearningMethodologyProps> = ({ curriculumData }) => {
    const defaultData = {
        learningMethodologySection: {
            title: "Our Learning Methodologies",
            subtitle: "Research-based approaches that make learning meaningful and joyful",
            methodologies: [
                {
                    title: "Montessori Approach",
                    description: "Child-led learning with specially designed materials that encourage independence, concentration, and a love for learning.",
                    keyFeatures: ["Self-directed activity", "Mixed age classrooms", "Specialized educational materials", "Freedom of movement and choice"],
                    color: "#9769A5"
                },
                {
                    title: "STEM Integration",
                    description: "Science, Technology, Engineering, and Math concepts introduced through hands-on experiments and real-world problem solving.",
                    keyFeatures: ["Inquiry-based learning", "Critical thinking development", "Creative problem solving", "Real-world applications"],
                    color: "#4AA6B1"
                },
                {
                    title: "Creative Arts Integration",
                    description: "Art, music, and creative expression woven throughout the curriculum to develop imagination and self-expression.",
                    keyFeatures: ["Multi-sensory experiences", "Creative thinking", "Cultural appreciation", "Emotional expression"],
                    color: "#EBAA35"
                },
                {
                    title: "Play-Based Learning",
                    description: "Learning happens naturally through purposeful play, exploration, and hands-on experiences that spark curiosity.",
                    keyFeatures: ["Learning through play", "Hands-on exploration", "Natural curiosity", "Joyful discovery"],
                    color: "#F9839D"
                }
            ]
        }
    }

    const methodologyData = curriculumData?.learningMethodologySection || defaultData.learningMethodologySection

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#4AA6B1] mb-4">
                        {methodologyData.title}
                    </h2>
                    <p className="text-xl text-[#4AA6B1] max-w-3xl mx-auto">
                        {methodologyData.subtitle}
                    </p>
                </div>

                {/* Methodologies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {methodologyData.methodologies?.map((method: { title: string; description: string; keyFeatures: string[]; icon?: SanityImageSource; color: string }, index: number) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-8 shadow-lg border-l-4 hover:shadow-xl transition-shadow duration-300"
                            style={{ borderLeftColor: method.color }}
                        >
                            <div className="flex items-start gap-4 mb-6">
                                {method.icon && typeof method.icon === 'object' && (
                                    <div
                                        className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                                        style={{ backgroundColor: `${method.color}20` }}
                                    >
                                        <Image
                                            src={urlFor(method.icon as SanityImageSource).url()}
                                            alt={`${method.title} icon`}
                                            className="w-8 h-8"
                                            width={32}
                                            height={32}
                                        />
                                    </div>
                                )}
                                <div>
                                    <h3
                                        className="text-2xl font-bold mb-2"
                                        style={{ color: method.color }}
                                    >
                                        {method.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {method.description}
                                    </p>
                                </div>
                            </div>

                            {/* Key Features */}
                            {method.keyFeatures && method.keyFeatures.length > 0 && (
                                <div className="space-y-2">
                                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {method.keyFeatures.map((feature: string, featureIndex: number) => (
                                            <div
                                                key={featureIndex}
                                                className="flex items-center gap-2"
                                            >
                                                <div
                                                    className="w-2 h-2 rounded-full flex-shrink-0"
                                                    style={{ backgroundColor: method.color }}
                                                />
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-[#4AA6B1] mb-4">
                            Experience Our Methods in Action
                        </h3>
                        <p className="text-gray-600 mb-6">
                            See how our research-based methodologies create an environment where children thrive and develop a lifelong love for learning.
                        </p>
                        <button className="bg-[#4AA6B1] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#3A8A94] transition-colors duration-300">
                            Schedule a Visit
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LearningMethodology