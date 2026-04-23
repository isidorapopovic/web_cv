import { GraduationCap, BookOpen } from "lucide-react";

const items = [
    {
        icon: GraduationCap,
        degree: "Master’s Degree in Applied Mathematics (2024–2025)",
        title: "Convex optimisation approach to multi-asset portfolio construction",
    },
    {
        icon: BookOpen,
        degree: "Bachelor’s Degree in Electrical Engineering and Computing (2020–2024)",
        title: "Detecting Parkinson’s Disease Using Voice Signals",
    },
];

const EducationSection = () => {
    return (
        <section className="px-6 py-24">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
                <div>
                    <h2 className="text-6xl md:text-8xl font-black mb-3">Education</h2>
                    <p className="text-xl">Academic Background</p>
                </div>

                <div className="border-t border-foreground/20">
                    {items.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={i}
                                className="flex items-start gap-5 py-8 border-b border-foreground/20"
                            >
                                <Icon className="w-8 h-8 shrink-0 mt-1" />
                                <div>
                                    <p className="text-2xl md:text-3xl font-semibold">
                                        {item.degree}
                                    </p>
                                    <p className="text-lg md:text-xl mt-2 text-foreground/80 italic">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default EducationSection;