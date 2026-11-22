import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import {
  AboutSection,
  SkillsSection,
  ProjectsSection,
  GitHubSection,
  ContactSection
} from "@/components/sections"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <GitHubSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
