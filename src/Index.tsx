import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import AccomplishmentsSection from "./AccomplishmentsSection";
import ContactSection from "./ContactSection";

const Index = () => {
    return (
        <main className="min-h-screen">
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <EducationSection />
            <AccomplishmentsSection />
            <ContactSection />

            <footer className="border-t border-foreground/10 px-6 py-8">
                <div className="mx-auto max-w-6xl text-center text-sm text-foreground/70">
                    © 2026 Isidora Popovic. All rights reserved.
                </div>
            </footer>
        </main>
    );
};

export default Index;