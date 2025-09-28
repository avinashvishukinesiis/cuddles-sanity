import React from 'react'
import { Curriculum } from '@/lib/types'
import { urlFor } from '@/lib/sanity'

interface SubjectAreasProps {
    curriculumData?: Curriculum | null
}

const SubjectAreas: React.FC<SubjectAreasProps> = ({ curriculumData }) => {
    const defaultData = {
        subjectAreasSection: {
            title: "Our Subject Areas",
            subtitle: "Comprehensive curriculum covering all aspects of child development",
            subjects: [
                {
                    title: "Language & Literacy",
                    description: "Building communication skills through storytelling, phonics, vocabulary development, and early reading and writing experiences.",
                    activities: ["Story time", "Phonics games", "Writing practice", "Vocabulary building", "Drama and role play"],
                    color: "#9769A5"
                },
                {
                    title: "Mathematics & Logic",
                    description: "Exploring numbers, patterns, shapes, and problem-solving through hands-on activities and real-world applications.",
                    activities: ["Number recognition", "Pattern making", "Shape exploration", "Counting games", "Simple problem solving"],
                    color: "#4AA6B1"
                },
                {
                    title: "Science & Discovery",
                    description: "Encouraging curiosity about the natural world through experiments, observations, and hands-on exploration.",
                    activities: ["Nature walks", "Simple experiments", "Weather observation", "Plant care", "Animal studies"],
                    color: "#EBAA35"
                },
                {
                    title: "Creative Arts & Music",
                    description: "Developing creativity and self-expression through art, music, dance, and various creative mediums.",
                    activities: ["Painting and drawing", "Music and rhythm", "Dance and movement", "Craft projects", "Creative expression"],
                    color: "#F9839D"
                },
                {
                    title: "Physical Development",
                    description: "Building gross and fine motor skills through active play, sports, and coordination activities.",
                    activities: ["Outdoor play", "Yoga and stretching", "Ball games", "Climbing activities", "Fine motor skills"],
                    color: "#58BAC6"
                },
                {
                    title: "Social-Emotional Learning",
                    description: "Developing emotional intelligence, empathy, and social skills through group activities and mindful practices.",
                    activities: ["Circle time", "Emotion recognition", "Conflict resolution", "Sharing and cooperation", "Mindfulness"],
                    color: "#69CEE9"
                }
            ]
        }
    }

    const subjectsData = curriculumData?.subjectAreasSection || defaultData.subjectAreasSection

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#4AA6B1] mb-4">
                        {subjectsData.title}
                    </h2>
                    <p className="text-xl text-[#4AA6B1] max-w-3xl mx-auto">
                        {subjectsData.subtitle}
                    </p>
                </div>

                {/* Subjects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {subjectsData.subjects?.map((subject: { title: string; description: string; activities: string[]; icon?: unknown; color: string }, index: number) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-6 shadow-lg border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            style={{ borderColor: subject.color }}
                        >
                            {/* Subject Icon */}
                            <div className="text-center mb-4">
                                {subject.icon ? (
                                    <div
                                        className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4"
                                        style={{ backgroundColor: `${subject.color}20` }}
                                    >
                                        <img
                                            src={urlFor(subject.icon).url()}
                                            alt={`${subject.title} icon`}
                                            className="w-10 h-10"
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 text-white text-2xl font-bold"
                                        style={{ backgroundColor: subject.color }}
                                    >
                                        {subject.title.charAt(0)}
                                    </div>
                                )}

                                <h3
                                    className="text-xl font-bold mb-3"
                                    style={{ color: subject.color }}
                                >
                                    {subject.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                {subject.description}
                            </p>

                            {/* Activities */}
                            {subject.activities && subject.activities.length > 0 && (
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Activities:</h4>
                                    <div className="space-y-1">
                                        {subject.activities.slice(0, 4).map((activity: string, activityIndex: number) => (
                                            <div
                                                key={activityIndex}
                                                className="flex items-center gap-2"
                                            >
                                                <div
                                                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                                    style={{ backgroundColor: subject.color }}
                                                />
                                                <span className="text-xs text-gray-600">{activity}</span>
                                            </div>
                                        ))}
                                        {subject.activities.length > 4 && (
                                            <div className="text-xs text-gray-500 mt-2">
                                                +{subject.activities.length - 4} more activities
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom Message */}
                <div className="text-center mt-12 bg-gradient-to-r from-[#4AA6B1] to-[#9769A5] rounded-3xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">
                        Integrated Learning Approach
                    </h3>
                    <p className="max-w-3xl mx-auto leading-relaxed">
                        Our subject areas don&apos;t exist in isolation. We integrate learning across all subjects,
                        creating meaningful connections that help children see how different areas of knowledge
                        work together in the real world.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SubjectAreas