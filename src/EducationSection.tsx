import { GraduationCap, BookOpen, Cpu, Code } from "lucide-react";

const items = [
    {
        icon: GraduationCap,
        text: "Master’s Degree in Applied Mathematics (2024–2025)",
    },
    {
        icon: BookOpen,
        text: "Bachelor’s Degree in Electrical Engineering and Computing (2020–2024)",
    },
    {
        icon: Cpu,
        text: "Focus on statistics, mathematical modelling, and optimisation",
    },
    {
        icon: Code,
        text: "Machine learning, data science, signal analysis, and 240 ECTS",
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
                                className="flex items-center gap-5 py-8 border-b border-foreground/20"
                            >
                                <Icon className="w-8 h-8 shrink-0" />
                                <p className="text-2xl md:text-3xl font-semibold">{item.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default EducationSection;