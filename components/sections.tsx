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
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <motion.div 
        className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center"
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
            Computer Science Undergraduate | <span className="text-primary">Full-Stack & Cloud-Native Developer</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground leading-relaxed max-w-lg"
            variants={fadeInUp}
          >
            Building scalable, cloud-native applications with modern web technologies. 
            Passionate about full-stack development, system architecture, and delivering production-ready solutions.
          </motion.p>
          
          <motion.div className="flex flex-wrap gap-4" variants={fadeInUp}>
            <Link 
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5"
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
            className="flex gap-8 pt-6"
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
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-[6px] border-white/90 shadow-2xl">
              <Image 
                src="/profile.jpg"
                alt="Portrait of Warusha Shamalka, Computer Science student"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
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
    <section id="about" className="py-24 px-6">
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
            {"I'm"} a third-year Computer Science undergraduate at the University of Colombo School of Computing, 
            pursuing a BSc (Hons) in Computer Science. My academic journey combines strong theoretical 
            foundations with practical, hands-on development experience.
          </p>
          <p>
            As a Full-Stack and Cloud-Native Developer, I specialize in building scalable web applications 
            using modern technologies like React, Next.js, Node.js, and cloud platforms. I have experience 
            with real-time systems, security implementations, and DevOps practices.
          </p>
          <p>
            I believe in writing clean, maintainable code and following best practices in software architecture. 
            Whether {"it's"} designing RESTful APIs, implementing WebSocket connections, or deploying containerized 
            applications, I approach every project with a focus on quality and scalability.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Framer Motion", "Tiptap", "Recharts"]
    },
    {
      title: "Backend & Data",
      skills: ["Node.js", "Express", "Socket.io", "PHP (MVC)", "Python", "Flask", "MongoDB", "MySQL", "PostgreSQL", "Sanity CMS"]
    },
    {
      title: "AI & Real-Time",
      skills: ["Transformers.js", "Web Workers", "WebSockets", "MQTT", "RabbitMQ"]
    },
    {
      title: "Security & Encryption",
      skills: ["Web Crypto API", "RSA-OAEP", "AES-GCM", "JWT RS256", "RBAC", "bcrypt"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["Docker", "Google Cloud Run", "Cloud Build", "Secret Manager", "GitHub Actions", "Vercel", "Linux"]
    },
    {
      title: "Architecture & Tooling",
      skills: ["pnpm Monorepos", "REST", "SOAP", "TCP", "GROQ", "Git", "CI/CD Pipelines"]
    }
  ]

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
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
      title: "UniVerse",
      description: "A comprehensive university management system built as a 2nd year group project. UniVerse streamlines academic operations by providing an integrated platform for student information management, course scheduling, and administrative tasks.",
      problem: "Managing university operations across multiple disconnected systems leads to inefficiency and data inconsistency.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "JWT Authentication"],
      github: "https://github.com/wcs2023/UniVerse",
      demo: "https://uni-verse-beige.vercel.app/",
      featured: true
    }
  ]

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground mb-12">Selected projects and system architectures</p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 ${project.featured ? 'ring-1 ring-primary/30' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {project.featured && (
                <span className="text-xs uppercase tracking-wider text-primary mb-4 block">
                  Featured Project - Group Project
                </span>
              )}
              <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-2">Problem it solves:</h4>
                <p className="text-muted-foreground text-sm">{project.problem}</p>
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

              <div className="flex gap-4">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </Link>
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
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
    <section id="github" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">GitHub Activity</h2>
          <p className="text-muted-foreground mb-8">Check out my repositories and contributions</p>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
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
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
            {"I'm"} always open to discussing new opportunities, collaborations, or just having a conversation about technology.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
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
              href="mailto:contact@warushashamalka.dev"
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
