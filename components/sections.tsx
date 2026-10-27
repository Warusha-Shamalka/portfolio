"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, ArrowDown, ExternalLink, Mail } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export function HeroSection() {
  return (
    <section id="hero" className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-4 py-28 sm:px-6 md:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[8%] top-[18%] h-56 w-56 rounded-full bg-primary/15 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute bottom-[8%] right-[4%] h-64 w-64 rounded-full border border-primary/15 sm:h-96 sm:w-96" />
        <div className="absolute bottom-[12%] right-[8%] h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>
      <motion.div 
        className="relative z-10 grid w-full max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.div className="space-y-7" variants={fadeInUp}>
          <motion.h1 
            className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl"
            variants={fadeInUp}
          >
            Warusha Shamalka
          </motion.h1>
          <motion.h2 
            className="flex w-fit flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm text-muted-foreground shadow-[0_0_30px_rgba(34,211,238,0.05)] md:text-base"
            variants={fadeInUp}
          >
            Third-Year Computer Science Undergraduate | <span className="text-primary">Aspiring DevOps Engineer</span>
          </motion.h2>
          <motion.p 
            className="max-w-xl text-base leading-7 text-muted-foreground md:text-lg"
            variants={fadeInUp}
          >
            Developing hands-on experience in Linux, Docker, CI/CD, and automation through
            distributed-systems projects. Seeking a DevOps internship to grow into a capable
            DevOps engineer.
          </motion.p>
          
          <motion.div className="flex flex-col flex-wrap gap-3 sm:flex-row" variants={fadeInUp}>
            <Link 
              href="#projects"
              className="group w-full rounded-xl bg-primary px-6 py-3.5 text-center font-semibold text-primary-foreground shadow-[0_10px_30px_rgba(34,211,238,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-[0_15px_36px_rgba(34,211,238,0.3)] sm:w-auto"
            >
              <span className="inline-flex items-center gap-2">View Projects <span className="transition-transform duration-300 group-hover:translate-x-1">→</span></span>
            </Link>
            <Link 
              href="https://github.com/Warusha-Shamalka"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card/40 px-6 py-3.5 font-medium text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-secondary sm:justify-start"
            >
              <Github className="w-5 h-5" />
              GitHub
            </Link>
          </motion.div>
          <motion.div 
            className="grid max-w-xl grid-cols-3 gap-3 pt-3 sm:gap-4"
            variants={fadeInUp}
          >
            <div className="rounded-2xl border border-border/70 bg-card/50 p-3 backdrop-blur-sm transition-colors hover:border-primary/30 sm:p-4">
              <h4 className="text-xl font-bold text-primary sm:text-2xl">3.76</h4>
              <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:text-xs">GPA / 4.0</p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-card/50 p-3 backdrop-blur-sm transition-colors hover:border-primary/30 sm:p-4">
              <h4 className="text-lg font-bold text-foreground sm:text-xl">BSc (Hons)</h4>
              <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:text-xs">Computer Science</p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-card/50 p-3 backdrop-blur-sm transition-colors hover:border-primary/30 sm:p-4">
              <h4 className="text-lg font-bold text-foreground sm:text-xl">3rd Year</h4>
              <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:text-xs">Undergraduate</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div 
          className="relative flex justify-center md:justify-end"
          variants={fadeInUp}
        >
          <div aria-hidden="true" className="absolute h-64 w-64 rounded-full border border-primary/25 sm:h-80 sm:w-80 lg:h-96 lg:w-96" />
          <div aria-hidden="true" className="absolute h-52 w-52 rounded-full bg-primary/20 blur-3xl sm:h-64 sm:w-64" />
          <div className="relative w-56 rounded-[2rem] border border-primary/30 bg-gradient-to-br from-primary/60 via-card to-primary/10 p-2 shadow-[0_24px_60px_rgba(0,0,0,0.42)] sm:w-64 md:w-72 lg:w-80">
            <div className="relative aspect-square overflow-hidden rounded-[1.6rem] bg-card">
            <Image
              src="/portfolio/profile.jpg"
              alt="Portrait of Warusha Shamalka, third-year Computer Science undergraduate"
              fill
              className="object-cover object-top transition-transform duration-700 hover:scale-105"
              priority
            />
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div 
        className="absolute bottom-7 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link href="#about" className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </Link>
      </motion.div>
    </section>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <motion.div 
        className="mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="rounded-3xl border border-border/70 bg-card/40 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:p-8 md:p-10">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Profile</span>
          </div>
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground md:text-4xl">About Me</h2>
        <div className="max-w-3xl space-y-6 text-base leading-7 text-muted-foreground md:text-lg">
          <p>
            {"I'm"} a third-year Computer Science undergraduate at the University of Colombo School of
            Computing, pursuing a BSc (Hons) in Computer Science with a 3.76 GPA. I am building toward
            a career in DevOps and seeking an internship where I can strengthen my practical skills.
          </p>
          <p>
            I have hands-on experience with Linux, Docker, Git, GitHub Actions, Bash, and CI/CD
            fundamentals. For a distributed-systems project, I containerised a PostgreSQL-backed delivery
            service within a three-service system running as 12 containers, configuring Docker Compose
            dependencies and health checks for PostgreSQL, RabbitMQ, and the service registry. I have
            also configured CMake builds and added a Snapcraft configuration for a C11/GTK 3 desktop
            application.
          </p>
          <p>
            I am particularly interested in cloud infrastructure, automation, and reliable systems. As
            an undergraduate, I am eager to learn from production environments while contributing
            thoughtfully to a DevOps team.
          </p>
        </div>
        </div>
      </motion.div>
    </section>
  )
}


export function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "C++", "C", "Go", "PHP", "Kotlin", "JavaScript"]
    },
    {
      title: "Backend & APIs",
      skills: ["FastAPI", "REST APIs"]
    },
    {
      title: "Mobile & Platforms",
      skills: ["Android SDK", "Firebase"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "SQLite", "Relational Database Design"]
    },
    {
      title: "Software Engineering",
      skills: ["Object-Oriented Programming (OOP)", "Data Structures & Algorithms", "MVC", "Design Patterns", "Agile"]
    },
    {
      title: "Distributed Systems",
      skills: ["Microservices", "Event-Driven Architecture", "Message Queues"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub", "Docker", "Docker Compose", "GitHub Actions", "CI/CD", "Bash"]
    },
    {
      title: "Systems",
      skills: ["Linux (Ubuntu)", "Networking"]
    }
  ]
  
  return (
    <section id="skills" className="relative overflow-hidden bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8">
      <div aria-hidden="true" className="absolute -left-36 top-16 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Toolkit</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">Technical Skills</h2>
          <p className="mb-12 text-muted-foreground">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/55 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.24)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="mb-5 flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                <span className="rounded-full border border-primary/20 bg-primary/5 px-2 py-1 text-xs font-medium text-primary">{category.skills.length}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="rounded-lg border border-transparent bg-secondary px-3 py-1.5 text-sm text-secondary-foreground transition-colors hover:border-primary/20 hover:bg-primary/10 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProjectsSection() {
  const projects = [
    {
      title: "Capstone Project — Distributed Microservices Architecture",
      description: "A delivery-service component of a distributed microservices system, built as a six-member team project.",
      highlights: [
        "Developed FastAPI endpoints for driver assignment, delivery-status tracking, and proof-of-delivery feedback, persisting records in PostgreSQL with SQLAlchemy and requiring a reason for failed-delivery feedback.",
        "Integrated the delivery service with a legacy route-optimization system over HTTP to request routes for assigned deliveries.",
        "Containerised the delivery service with Docker Compose as part of a three-service system running as 12 containers, with startup gated on PostgreSQL, RabbitMQ, and service-registry health checks."
      ],
      year: "2025",
      team: "6-member team",
      techStack: ["Python", "FastAPI", "Docker", "RabbitMQ", "PostgreSQL", "SQLAlchemy"],
      github: "https://github.com/NanocomStudios/Capstone_Project",
      demo: null,
    },
    {
      title: "UniVerse",
      description: "A five-role career-networking platform built by a four-member team using a custom PHP MVC architecture.",
      highlights: [
        "Led the team and designed the platform's normalized 18-table MySQL schema.",
        "Implemented session-based login with PHP password_verify(), server-side validation, and account-status checks, routing authenticated users to role-specific dashboards.",
        "Built alumni article management with author-only ownership checks, admin title search and category filters using parameterized SQL, and dashboard charts for users, jobs, mentorship bookings, and forum threads."
      ],
      year: "2026",
      team: "4-member team",
      techStack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Custom MVC"],
      github: "https://github.com/wcs2023/UniVerse",
      demo: null,
    },
    {
      title: "UPaste — Linux Clipboard History Manager",
      description: "A GTK 3 desktop application for searching and managing local clipboard history.",
      highlights: [
        "Built searchable clipboard history with copy/delete actions and pause/resume monitoring controls.",
        "Implemented local SQLite persistence with parameterized inserts and deletes, using a database trigger to retain the latest 500 text entries."
      ],
      year: "2025",
      team: null,
      techStack: ["C11", "GTK 3", "SQLite", "CMake"],
      github: "https://github.com/Warusha-Shamalka/UPaste",
      demo: null,
    },
    {
      title: "Mini Language Lexer, Parser & Interpreter",
      description: "A C implementation of a mini-language lexer, recursive-descent parser, and direct interpreter.",
      highlights: [
        "Rejects undeclared variables and duplicate declarations.",
        "Uses distinct exit codes for lexical, syntax, and semantic errors."
      ],
      year: "2025",
      team: null,
      techStack: ["C", "Recursive-descent Parsing", "Direct Interpretation"],
      github: null,
      demo: null,
    },
    {
      title: "Lumen Home — Smart Home Monitoring & Control System",
      description: "An Android smart-home control system built with a three-member team.",
      highlights: [
        "Implemented two-way Firebase Realtime Database synchronization between the Android app and web simulator, keeping device states updated without manual refresh.",
        "Built a control-screen timer that switches the simulated smart iron off at its configured duration limit and records a Firebase alert."
      ],
      year: "2025",
      team: "3-member team",
      techStack: ["Kotlin", "Android", "Firebase"],
      github: "https://github.com/vinujawakishta/smart-home-system",
      demo: null,
    },
    {
      title: "Q-Learning Path-Following EV3 Robot",
      description: "A Python Q-learning controller for path following with a LEGO EV3 robot.",
      highlights: [
        "Implemented epsilon-greedy action selection using direction and colour-sensor states to explore motor actions for EV3 path following.",
        "Added status logging to the EV3 controller to trace line-search and recovery behaviour during path-following trials."
      ],
      year: "2026",
      team: null,
      techStack: ["Python", "Q-Learning", "LEGO EV3"],
      github: "https://github.com/Chamudu/Q-Learning-Robot",
      demo: null,
    }
  ]
  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Selected work</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">Selected Projects</h2>
          <p className="mb-12 text-muted-foreground">Academic and personal projects that demonstrate my technical work</p>
        </motion.div>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/50 p-6 shadow-[0_12px_35px_rgba(0,0,0,0.14)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_20px_48px_rgba(0,0,0,0.25)] sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary via-primary/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="text-2xl font-bold tracking-tight text-foreground">{project.title}</h3>
                <span className="shrink-0 font-mono text-xs text-primary/70">0{index + 1}</span>
              </div>
              {(project.year || project.team) && (
                <p className="mb-5 flex flex-wrap gap-x-2 text-sm text-muted-foreground">
                  {[project.year, project.team].filter(Boolean).join(" · ")}
                </p>
              )}
              <p className="mb-5 max-w-4xl leading-relaxed text-muted-foreground">{project.description}</p>

              <div className="mb-6 rounded-2xl border border-border/50 bg-background/30 p-4 sm:p-5">
                <h4 className="mb-3 text-sm font-semibold text-foreground">Highlights</h4>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold text-foreground">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-border/60 bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View code for ${project.title}`}
                    className="flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-4 py-2.5 text-secondary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary sm:justify-start"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </Link>
                )}
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live demo for ${project.title}`}
                    className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 sm:justify-start"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function GitHubSection() {
  return (
    <section id="github" className="relative overflow-hidden bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8">
      <div aria-hidden="true" className="absolute right-0 top-0 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />
      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Code</span>
            <span className="h-px w-10 bg-primary" />
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">GitHub</h2>
          <p className="mb-8 text-muted-foreground">Explore my repositories and contributions</p>
          
          <div className="rounded-3xl border border-primary/20 bg-card/60 p-6 shadow-[0_20px_48px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:p-10">
            <div className="flex flex-col items-center gap-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 shadow-[0_0_34px_rgba(34,211,238,0.12)]">
                <Github className="h-10 w-10 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">@Warusha-Shamalka</h3>
                <p className="text-muted-foreground mb-6">
                  Explore my projects, contributions, and code on GitHub
                </p>
              </div>
              <Link
                href="https://github.com/Warusha-Shamalka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-[0_10px_30px_rgba(34,211,238,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90"
              >
                <Github className="w-5 h-5" />
                Visit GitHub Profile
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Connect</span>
            <span className="h-px w-10 bg-primary" />
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">Get In Touch</h2>
          <p className="mx-auto mb-10 max-w-lg text-muted-foreground">
            {"I'm"} open to DevOps internship opportunities, technical collaborations, and conversations about infrastructure and automation.
          </p>

          <div className="flex flex-col flex-wrap justify-center gap-4 sm:flex-row">
            <Link
              href="https://github.com/Warusha-Shamalka"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-border/60 bg-card/50 px-6 py-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-secondary"
            >
              <Github className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
              <span className="text-foreground font-medium">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/warusha-shamalka-3b04a71aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-border/60 bg-card/50 px-6 py-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-secondary"
            >
              <Linkedin className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
              <span className="text-foreground font-medium">LinkedIn</span>
            </Link>
            <Link
              href="mailto:wshamalka1@gmail.com"
              className="group flex items-center gap-3 rounded-2xl border border-border/60 bg-card/50 px-6 py-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-secondary"
            >
              <Mail className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
              <span className="text-foreground font-medium">Email</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
