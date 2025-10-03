"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence, MotionProps } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { SiteSettings } from "@/lib/types"
import { urlFor } from "@/lib/sanity"

const Path = (props: MotionProps & { d?: string }) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
)

const NAV_ITEMS = [
  { label: "About Us", href: "/AboutUs" },
  { label: "Curriculum", href: "/Curriculum" },
  { label: "Partnerships", href: "/Partnerships" },
  { label: "Safety", href: "/Safety" },
  { label: "Assistance", href: "/Assistance" },
  { label: "Contact Us", href: "/Contact" },
]

interface NavBarProps {
  siteSettings: SiteSettings | null
}

const NavBar = ({ siteSettings }: NavBarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Optional: prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isMobileMenuOpen])

  const logoUrl = siteSettings?.navbarLogo ? urlFor(siteSettings.navbarLogo).url() : "/cuddles_logo.svg"

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={logoUrl}
              alt="cuddles logo"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-black hover:text-purple font-bold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <Path
                d={isMobileMenuOpen ? "M 3 16.5 L 17 2.5" : "M 2 5 L 20 5"}
                animate={isMobileMenuOpen ? "open" : "closed"}
              />
              <Path
                d="M 2 9.5 L 20 9.5"
                animate={isMobileMenuOpen ? "open" : "closed"}
                initial={false}
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
              />
              <Path
                d={isMobileMenuOpen ? "M 3 2.5 L 17 16.5" : "M 2 13.5 L 20 13.5"}
                animate={isMobileMenuOpen ? "open" : "closed"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-black hover:text-purple hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default NavBar
