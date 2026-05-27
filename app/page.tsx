import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { 
  HeroSection, 
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
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
        <GitHubSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
