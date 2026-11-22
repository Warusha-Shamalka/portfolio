"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowRight, Github, Mail } from "lucide-react"

const tools = ["Linux", "Docker", "Python", "Git", "GitHub Actions"]

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion()
  const entrance = shouldReduceMotion
    ? { initial: false as const, animate: { opacity: 1, y: 0 } }
    : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 } }

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[min(900px,100svh)] items-center overflow-hidden px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32 lg:px-8"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-48 top-20 h-[30rem] w-[30rem] rounded-full bg-primary/[0.09] blur-[120px]" />
        <div className="absolute right-[-10rem] top-[15%] h-[34rem] w-[34rem] rounded-full bg-cyan-400/[0.07] blur-[130px]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.08fr_0.92fr] md:gap-10 lg:gap-16">
        <motion.div
          className="relative z-10 order-2 md:order-1"
          initial={entrance.initial}
          animate={entrance.animate}
          transition={{ duration: shouldReduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.035] px-3.5 py-2 text-xs font-medium tracking-wide text-muted-foreground shadow-sm backdrop-blur-sm sm:text-sm">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to DevOps internship opportunities
          </div>

          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary sm:text-sm">
            Computer Science · University of Colombo
          </p>
          <h1
            id="hero-title"
            className="max-w-[13ch] text-[clamp(3.2rem,7.1vw,6.1rem)] font-bold leading-[0.98] tracking-[-0.065em] text-foreground"
          >
            Warusha <span className="text-primary">Shamalka</span>
          </h1>

          <h2 className="mt-6 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Aspiring <span className="text-primary">DevOps Engineer</span>
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted-foreground sm:text-base sm:leading-8">
            Third-year BSc (Hons) Computer Science undergraduate at the University of Colombo School of Computing. I enjoy working with Linux, cloud infrastructure, containers, and CI/CD—and have hands-on experience building and containerizing distributed microservices.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="#projects"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_8px_28px_rgba(34,211,238,0.16)] transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_12px_34px_rgba(34,211,238,0.24)] active:translate-y-0"
            >
              Explore Projects
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <Link
              href="https://github.com/Warusha-Shamalka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.035] px-5 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-primary/40 hover:bg-primary/[0.06]"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </Link>
            <Link
              href="mailto:wshamalka1@gmail.com"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-primary sm:ml-1"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact me
            </Link>
          </div>

          <div className="mt-10 grid max-w-[34rem] grid-cols-3 divide-x divide-white/[0.09] rounded-2xl border border-white/[0.09] bg-white/[0.025] px-2 py-4 backdrop-blur-sm sm:px-4">
            <div className="px-2 sm:px-3">
              <p className="text-xl font-semibold tracking-tight text-primary sm:text-2xl">3.76</p>
              <p className="mt-1 text-[10px] uppercase leading-4 tracking-[0.13em] text-muted-foreground sm:text-[11px]">GPA <span className="normal-case tracking-normal">/ 4.0</span></p>
            </div>
            <div className="px-3 sm:px-4">
              <p className="text-sm font-semibold leading-6 text-foreground sm:text-base">BSc (Hons)</p>
              <p className="mt-1 text-[10px] uppercase leading-4 tracking-[0.13em] text-muted-foreground sm:text-[11px]">Computer Science</p>
            </div>
            <div className="px-3 sm:px-4">
              <p className="text-sm font-semibold leading-6 text-foreground sm:text-base">Third year</p>
              <p className="mt-1 text-[10px] uppercase leading-4 tracking-[0.13em] text-muted-foreground sm:text-[11px]">Undergraduate</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="mr-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/75">Exploring</span>
            {tools.map((tool) => (
              <span key={tool} className="rounded-md border border-white/[0.08] bg-white/[0.025] px-2 py-1 font-mono text-[10px] text-muted-foreground sm:text-[11px]">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative order-1 mx-auto w-full max-w-[19rem] md:order-2 md:max-w-[25rem]"
          initial={entrance.initial}
          animate={entrance.animate}
          transition={{ duration: shouldReduceMotion ? 0 : 0.75, delay: shouldReduceMotion ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div aria-hidden="true" className="absolute -inset-8 rounded-[2.5rem] bg-primary/[0.09] blur-3xl sm:-inset-12" />
          <div aria-hidden="true" className="absolute -right-3 -top-3 h-24 w-24 rounded-tr-[2rem] border-r border-t border-primary/40 sm:-right-5 sm:-top-5 sm:h-32 sm:w-32" />
          <div aria-hidden="true" className="absolute -bottom-3 -left-3 h-24 w-24 rounded-bl-[2rem] border-b border-l border-primary/25 sm:-bottom-5 sm:-left-5 sm:h-32 sm:w-32" />

          <div className="group relative rounded-[1.8rem] border border-white/[0.13] bg-gradient-to-br from-white/[0.13] via-white/[0.035] to-primary/[0.11] p-2 shadow-[0_28px_90px_rgba(0,0,0,0.48)] transition-[border-color,box-shadow] duration-300 hover:border-primary/35 hover:shadow-[0_30px_95px_rgba(0,0,0,0.48),0_0_40px_rgba(34,211,238,0.08)] sm:rounded-[2rem] sm:p-2.5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-card sm:rounded-[1.55rem]">
              <Image
                src="/portfolio/profile.jpg"
                alt="Portrait of Warusha Shamalka"
                fill
                priority
                sizes="(max-width: 767px) 304px, (max-width: 1279px) 40vw, 400px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/5" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-5">
                <div>
                  <p className="text-sm font-semibold text-white">Warusha Shamalka</p>
                  <p className="mt-1 text-xs text-white/70">CS undergraduate · UCSC</p>
                </div>
                <span className="rounded-lg border border-white/15 bg-black/30 px-2.5 py-1.5 font-mono text-[10px] text-white/80 backdrop-blur-md">LK / 2026</span>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -right-2 flex items-center gap-2 rounded-xl border border-white/[0.12] bg-[#101416]/90 px-3 py-2.5 shadow-xl backdrop-blur-xl sm:-right-8 sm:bottom-8 sm:px-4">
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(34,211,238,0.75)]" aria-hidden="true" />
            <span className="font-mono text-[10px] text-foreground/90 sm:text-xs">building with purpose</span>
          </div>
        </motion.div>
      </div>

      <Link
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-5 left-1/2 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.025] text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary md:flex"
      >
        <ArrowDown className="h-4 w-4" aria-hidden="true" />
      </Link>
    </section>
  )
}
