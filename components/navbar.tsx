"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("#hero")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)

      const scrollPosition = window.scrollY + 160
      const currentSection = [...navLinks]
        .reverse()
        .find(({ href }) => {
          const section = document.querySelector(href)
          return section && section.getBoundingClientRect().top + window.scrollY <= scrollPosition
        })

      setActiveSection(currentSection?.href ?? "#hero")
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-5 ${
        isScrolled
          ? "border-primary/20 bg-background/85 shadow-[0_12px_32px_rgba(0,0,0,0.32)] backdrop-blur-xl"
          : "border-border/70 bg-background/60 backdrop-blur-md"
      }`}>
        <Link
          href="#hero"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-primary sm:text-base"
          onClick={() => setActiveSection("#hero")}
        >
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_14px_rgba(34,211,238,0.9)] transition-transform duration-300 group-hover:scale-125" />
          Warusha Shamalka
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setActiveSection(link.href)}
                className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${
                  activeSection === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.span
                    layoutId="active-nav-link"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="rounded-xl border border-border bg-secondary/60 p-2 text-foreground transition-colors hover:border-primary/50 hover:text-primary md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-border/70 bg-background/95 p-2 shadow-[0_12px_32px_rgba(0,0,0,0.32)] backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-xl px-4 py-3 text-sm transition-colors ${
                      activeSection === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                    onClick={() => {
                      setActiveSection(link.href)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
