"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

type LabelProps = { id: string; label: string; required?: boolean }
function FieldLabel({ id, label, required }: LabelProps) {
    return (
        <label htmlFor={id} className="relative top-3 left-3 inline-flex items-center gap-1 text-[13px] text-[#9769A5]  px-2 bg-white rounded-full">
            {label}
            {required ? <span aria-hidden className="h-1.5 w-1.5 rounded-md bg-rose-400" /> : null}
        </label>
    )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
    return <div className="text-[14px] font-bold uppercase tracking-[0.2em] text-[#9769A5]">{children}</div>
}

export default function LetsBuild() {
    const [submitting, setSubmitting] = useState(false)
    const [formData, setFormData] = useState({
            Type_of_partnership: "",
            Category: "",
            Business_full_name: "",
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
                const res = await fetch("/api/build", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                })
    
                const result = await res.json()
                if (result.success) {
                    alert("✅ Form submitted successfully!")
                    setFormData({ Type_of_partnership: "", Category: "", Business_full_name: "", phone: "", email: "", comments: "" }) // reset
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
            <div className="h-max">
                {/* Top header */}
                <header className="mx-auto max-w-[500px] mb-8 text-[#9769A5]">
                    <motion.h2
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center text-balance text-4xl font-extrabold"
                    >
                        {"Let’s Build a Brighter Future Together!"}
                    </motion.h2>
                </header>

                {/* Main card */}
                <motion.section
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-6xl px-6"
                >
                    <div className="rounded-3xl border border-purple p-6 shadow-sm ring-1 ring-black/5 md:p-8">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            {/* Left: big headline + image */}
                            <div className="space-y-6">
                                <h2 className="text-pretty text-3xl font-extrabold text-[#9769A5] md:text-6xl md:max-w-2xs">
                                    Partner <br /> with us !
                                </h2>

                                <div className="overflow-hidden rounded-md ring-2 ring-purple-200">
                                    {/* You can replace this placeholder with a real image later */}
                                    <img
                                        src="/LetsBuild.png"
                                        alt="Child in a colorful classroom"
                                        className="w-full object-cover h-72 md:h-[450px]"
                                    />
                                </div>
                            </div>

                            {/* Right: form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Partnership section */}
                                <div className="space-y-2">
                                    <SectionTitle>{"Partnership information"}</SectionTitle>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                        <div className="md:col-span-2">
                                            <FieldLabel id="Type_of_partnership" label="Type of partnership" required />
                                            <input
                                                id="Type_of_partnership"
                                                name="Type_of_partnership"
                                                value={formData.Type_of_partnership}
                                                onChange={handleChange}
                                                required
                                                placeholder="Daycare"
                                                className="w-full rounded-md border border-[#9769A5]  px-4 py-2.5 text-sm text-slate-800 placeholder:text-[#9769A5] outline-none focus:border-[#9769A5] focus:ring-2 focus:ring-purple-200 transition"
                                            />
                                        </div>
                                        <div>
                                            <FieldLabel id="Category" label="Category" required />
                                            <input
                                                id="Category"
                                                name="Category"
                                                value={formData.Category}
                                                onChange={handleChange}
                                                min={0}
                                                required
                                                placeholder="MNC"
                                                className="w-full rounded-md border border-[#9769A5]  px-4 py-2.5 text-sm text-slate-800 placeholder:text-[#9769A5] outline-none focus:border-[#9769A5] focus:ring-2 focus:ring-purple-200 transition"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <hr className="border-[#9769A5]" />

                                {/* Business & contact name section */}
                                <div className="space-y-2">
                                    <SectionTitle>{"Business & contact name"}</SectionTitle>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <div>
                                            <FieldLabel id="Business_full_name" label="Business full name" required />
                                            <input
                                                id="Business_full_name"
                                                name="Business_full_name"
                                                value={formData.Business_full_name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Cuddles"
                                                className="w-full rounded-md border border-[#9769A5]  px-4 py-2.5 text-sm text-slate-800 placeholder:text-[#9769A5] outline-none focus:border-[#9769A5] focus:ring-2 focus:ring-purple-200 transition"
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
                                                className="w-full rounded-md border border-[#9769A5]  px-4 py-2.5 text-sm text-slate-800 placeholder:text-[#9769A5] outline-none focus:border-[#9769A5] focus:ring-2 focus:ring-purple-200 transition"
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
                                                className="w-full rounded-md border border-[#9769A5]  px-4 py-2.5 text-sm text-slate-800 placeholder:text-[#9769A5] outline-none focus:border-[#9769A5] focus:ring-2 focus:ring-purple-200 transition"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <hr className="border-[#9769A5]" />

                                {/* Comments */}
                                <div className="space-y-2">
                                    <SectionTitle>{"Expected Benefits from the Partnership"}</SectionTitle>
                                    <div>
                                        <FieldLabel id="comments" label="Comments" />
                                        <textarea
                                            id="comments"
                                            name="comments"
                                            value={formData.comments}
                                                onChange={handleChange}
                                            rows={3}
                                            placeholder="Incentives or commission"
                                            className="w-full rounded-md border border-[#9769A5]  px-4 py-3 text-sm text-slate-800 placeholder:text-[#9769A5] outline-none focus:border-[#9769A5] focus:ring-2 focus:ring-purple-200 transition"
                                        />
                                    </div>
                                </div>

                                {/* Submit */}
                                <motion.button
                                    whileHover={{ y: -1 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={submitting}
                                    className="group inline-flex w-full items-center justify-center gap-2 rounded-md  px-6 py-3 font-semibold text-white bg-purple shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 disabled:opacity-70"
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
       </section>

    )
}
