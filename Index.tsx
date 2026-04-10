import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import AccomplishmentsSection from "@/components/AccomplishmentsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <AccomplishmentsSection />
      <ContactSection />
      <footer className="px-6 md:px-20 py-10 text-center text-muted-foreground text-sm">
        © 2026 John Smith. All rights reserved.
      </footer>
    </main>
  );
};

export default Index;
