import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import AccomplishmentsSection from "./AccomplishmentsSection";
import ContactSection from "./ContactSection";

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
