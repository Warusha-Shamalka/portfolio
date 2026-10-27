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
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 md:py-20 relative">
      <motion.div 
        className="max-w-6xl w-full grid gap-10 items-center md:grid-cols-2 md:gap-12"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.div className="space-y-6" variants={fadeInUp}>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
            variants={fadeInUp}
          >
            Warusha Shamalka
          </motion.h1>
          <motion.h2 
            className="text-lg md:text-xl text-muted-foreground"
            variants={fadeInUp}
          >
            Third-Year Computer Science Undergraduate | <span className="text-primary">Aspiring DevOps Engineer</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground leading-relaxed max-w-lg"
            variants={fadeInUp}
          >
            Developing hands-on experience in Linux, Docker, CI/CD, and automation through
            distributed-systems projects. Seeking a DevOps internship to grow into a capable
            DevOps engineer.
          </motion.p>
          
          <motion.div className="flex flex-col sm:flex-row flex-wrap gap-4" variants={fadeInUp}>
            <Link 
              href="#projects"
              className="w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5 text-center"
            >
              View Projects
            </Link>
            <Link 
              href="https://github.com/Warusha-Shamalka"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </Link>
          </motion.div>
          <motion.div 
            className="flex flex-col sm:flex-row sm:flex-wrap gap-6 pt-6"
            variants={fadeInUp}
          >
            <div>
              <h4 className="text-2xl font-bold text-primary">3.76</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">GPA / 4.0</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-foreground">BSc (Hons)</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Computer Science</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-foreground">3rd Year</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Undergraduate</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div 
          className="flex justify-center md:justify-end"
          variants={fadeInUp}
        >
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-[6px] border-white/90 shadow-2xl">
            <Image
              src="/portfolio/profile.jpg"
              alt="Portrait of Warusha Shamalka, third-year Computer Science undergraduate"
              fill
              className="object-cover object-top rounded-full"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </Link>
      </motion.div>
    </section>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">About Me</h2>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-muted-foreground mb-12">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-lg hover:bg-primary/20 hover:text-primary transition-colors"
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Selected Projects</h2>
          <p className="text-muted-foreground mb-12">Academic and personal projects that demonstrate my technical work</p>
        </motion.div>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border/50 hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
              {(project.year || project.team) && (
                <p className="text-sm text-muted-foreground -mt-2 mb-4">
                  {[project.year, project.team].filter(Boolean).join(" · ")}
                </p>
              )}
              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-2">Highlights:</h4>
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View code for ${project.title}`}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-primary/20 hover:text-primary transition-colors"
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
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
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
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">GitHub</h2>
          <p className="text-muted-foreground mb-8">Explore my repositories and contributions</p>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border/50">
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center border border-primary/30">
                <Github className="w-10 h-10 text-primary" />
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
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
            {"I'm"} open to DevOps internship opportunities, technical collaborations, and conversations about infrastructure and automation.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Link
              href="https://github.com/Warusha-Shamalka"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-secondary hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Github className="w-6 h-6 text-primary" />
              <span className="text-foreground font-medium">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/warusha-shamalka-3b04a71aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-secondary hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Linkedin className="w-6 h-6 text-primary" />
              <span className="text-foreground font-medium">LinkedIn</span>
            </Link>
            <Link
              href="mailto:wshamalka1@gmail.com"
              className="flex items-center gap-3 px-6 py-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-secondary hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail className="w-6 h-6 text-primary" />
              <span className="text-foreground font-medium">Email</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
