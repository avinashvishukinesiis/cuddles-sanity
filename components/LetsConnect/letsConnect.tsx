"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

type LabelProps = { id: string; label: string; required?: boolean }
function FieldLabel({ id, label, required }: LabelProps) {
    return (
        <label htmlFor={id} className="relative top-3 left-3 inline-flex items-center gap-1 text-[13px] text-[#9769A5] bg-white px-2 border border-[#9769A5] rounded-full">
            {label}
            {required ? <span aria-hidden className="h-1.5 w-1.5 rounded-md bg-rose-400" /> : null}
        </label>
    )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
    return <div className="text-[14px] font-bold uppercase tracking-[0.2em] text-[#9769A5]">{children}</div>
}

export default function LetsConnect() {
    const [submitting, setSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        child_name: "",
        age: "",
        guardian: "",
        phone: "",
        email: "",
        comments: "",
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSubmitting(true)

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })

            const result = await res.json()
            if (result.success) {
                alert("✅ Form submitted successfully!")
                setFormData({ child_name: "", age: "", guardian: "", phone: "", email: "", comments: "" }) // reset
            } else {
                alert("❌ Failed: " + result.message)
            }
        } catch (err) {
            console.error("Error submitting form:", err)
            alert("❌ Something went wrong!")
        } finally {
            setSubmitting(false)
        }
    }



    return (
        <section>
            <svg xmlns="http://www.w3.org/2000/svg" className="relative -mb-1" viewBox="0 0 1440 320"><path fill="#9769A5" fillOpacity="1" d="M0,192L34.3,197.3C68.6,203,137,213,206,208C274.3,203,343,181,411,186.7C480,192,549,224,617,250.7C685.7,277,754,299,823,277.3C891.4,256,960,192,1029,176C1097.1,160,1166,192,1234,218.7C1302.9,245,1371,267,1406,277.3L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
            <div className="h-max bg-[#9769A5]">
                {/* Top header */}
                <header className="mx-auto max-w-6xl px-6 py-10 text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center text-balance text-4xl font-extrabold"
                    >
                        {"Let’s Connect"}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.05 }}
                        className="mx-auto mt-3 max-w-2xl text-2xl text-center text-pretty text-white/90 relative"
                    >
                        {
                            "We'd love to hear from you! Whether you have questions about our programs or want to schedule a visit, our team is here to help."
                        }
                        <img src="./handHeart.svg" className="w-64 absolute left-[-200px] top-[-90px]" />
                    </motion.p>
                </header>

                {/* Main card */}
                <motion.section
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-6xl px-6"
                >
                    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            {/* Left: big headline + image */}
                            <div className="space-y-6">
                                <h2 className="text-pretty text-3xl font-extrabold text-[#9769A5] md:text-6xl md:max-w-2xs">
                                    {"Your Child’s Bright Future Starts Here!"}
                                </h2>

                                <div className="overflow-hidden rounded-md ring-2 ring-purple-200">
                                    {/* You can replace this placeholder with a real image later */}
                                    <img
                                        src="/LetsConnect.png"
                                        alt="Child in a colorful classroom"
                                        className="h-56 w-full object-cover md:h-72"
                                    />
                                </div>
                            </div>

                            {/* Right: form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Child section */}
                                <div className="space-y-2">
                                    <SectionTitle>{"Child’s Information"}</SectionTitle>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                        <div className="md:col-span-2">
                                            <FieldLabel id="child_name" label="Child’s full name" required />
                                            <input
                                                id="child_name"
                                                name="child_name"
                                                value={formData.child_name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Your name"
                                                className="w-full rounded-md border border-[#9769A5] bg-white px-4 py-2.5 text-sm text-slate-800 placeholder:text-[#9769A5] outline-none focus:border-[#9769A5] focus:ring-2 focus:ring-purple-200 transition"
                                            />
                                        </div>
                                        <div>
                                            <FieldLabel id="age" label="Age" required />
                                            <input
                                                id="age"
                                                name="age"
                                                value={formData.age}
                                                onChange={handleChange}
                                                type="number"
                                                min={0}
                                                required
                                                placeholder="Age"
                                                className="w-full rounded-md border border-[#9769A5] bg-white px-4 py-2.5 text-sm text-slate-800 placeholder:text-[#9769A5] outline-none focus:border-[#9769A5] focus:ring-2 focus:ring-purple-200 transition"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <hr className="border-[#9769A5]" />

                                {/* Guardian section */}
                                <div className="space-y-2">
                                    <SectionTitle>{"Guardian Information"}</SectionTitle>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <div>
                                            <FieldLabel id="guardian" label="Guardian’s full name" required />
                                            <input
                                                id="guardian"
                                                name="guardian"
                                                value={formData.guardian}
                                                onChange={handleChange}
                                                required
                                                placeholder="Full name"
                                                className="w-full rounded-md border border-[#9769A5] bg-white px-4 py-2.5 text-sm text-slate-800 placeholder:text-[#9769A5] outline-none focus:border-[#9769A5] focus:ring-2 focus:ring-purple-200 transition"
                                            />
                                        </div>
                                        <div>
                                            <FieldLabel id="phone" label="Contact number" required />
                                            <input
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                type="tel"
                                                required
                                                placeholder="Number"
                                                className="w-full rounded-md border border-[#9769A5] bg-white px-4 py-2.5 text-sm text-slate-800 placeholder:text-[#9769A5] outline-none focus:border-[#9769A5] focus:ring-2 focus:ring-purple-200 transition"
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <FieldLabel id="email" label="Email Address" required />
                                            <input
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                type="email"
                                                required
                                                placeholder="youremail@gmail.com"
                                                className="w-full rounded-md border border-[#9769A5] bg-white px-4 py-2.5 text-sm text-slate-800 placeholder:text-[#9769A5] outline-none focus:border-[#9769A5] focus:ring-2 focus:ring-purple-200 transition"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <hr className="border-[#9769A5]" />

                                {/* Comments */}
                                <div className="space-y-2">
                                    <SectionTitle>{"Additional Comments (Optional)"}</SectionTitle>
                                    <div>
                                        <FieldLabel id="comments" label="Comments" />
                                        <textarea
                                            id="comments"
                                            name="comments"
                                            value={formData.comments}
                                            onChange={handleChange}
                                            rows={3}
                                            placeholder="What are the open hours"
                                            className="w-full rounded-md border border-[#9769A5] bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-[#9769A5] outline-none focus:border-[#9769A5] focus:ring-2 focus:ring-purple-200 transition"
                                        />
                                    </div>
                                </div>

                                {/* Submit */}
                                <motion.button
                                    whileHover={{ y: -1 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={submitting}
                                    className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#9769A5] px-6 py-3 font-semibold text-white shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 disabled:opacity-70"
                                >
                                    {submitting ? "Sending…" : "Send"}
                                    <svg
                                        className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" />
                                    </svg>
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </motion.section>

                {/* Optional: reference mock image (not used in UI) */}
                {/* If you want to display the provided mock for reference somewhere, add it like this:
          <img src="/images/reference-mock.png" alt="Reference mock" />
        */}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#9769A5" fillOpacity="1" d="M0,192L34.3,197.3C68.6,203,137,213,206,208C274.3,203,343,181,411,186.7C480,192,549,224,617,250.7C685.7,277,754,299,823,277.3C891.4,256,960,192,1029,176C1097.1,160,1166,192,1234,218.7C1302.9,245,1371,267,1406,277.3L1440,288L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
        </section>

    )
}
