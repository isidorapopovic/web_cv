const experiences = [
    {
        title: "PATHflow",
        subtitle: "Founder",
        description: [
            "Built and developed the platform end-to-end.",
            "Identified student and recruitment pain points and turned them into a practical platform and consulting concept.",
            "Combined product thinking, user understanding, and execution across business and technical workstreams.",
        ],
    },
    {
        title: "Internship Institut Mihajlo Pupin",
        subtitle: "Intern",
        description: [
            "Built interactive dashboards for ML model explainability.",
            "Helped make technical outputs easier to understand for both technical and non-technical stakeholders.",
            "Supported clearer communication of model behaviour and insights through visual tools.",
        ],
    },
    {
        title: "Data Analyst and HR, Lukowa Group",
        subtitle: "06/2024 – 10/2024",
        description: [
            "Worked in a hybrid analytical and operational role supporting a new quantitative team.",
            "Combined data analysis with technical recruitment support for ML and quantitative roles.",
            "Contributed to portfolio risk minimisation models and prediction pipelines.",
            "Conducted technical screening of candidates and supported team-building efforts.",
            "Explored AI tools to automate and improve candidate evaluation workflows.",
            "Helped bridge analytical work, process improvement, and people-focused decision-making.",
        ],
    },
    {
        title: "IT & Innovation - AstraZeneca",
        subtitle: "09/2023 – 04/2024",
        description: [
            "Worked with cross-functional teams on healthcare innovation and ML deployment support.",
            "Collaborated with clinical, commercial, and technical teams on an ML-based disease prediction tool.",
            "Monitored model performance and supported deployment-related decisions.",
            "Helped connect technical work with business and healthcare stakeholder needs.",
            "Co-organised Health Hacks events, bringing together clinical and technical participants around innovation challenges.",
        ],
    },
];

const ExperienceSection = () => {
    return (
        <section className="px-6 py-24">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-6xl md:text-8xl font-black mb-3">Experience</h2>
                <p className="text-xl mb-12">Professional Journey</p>

                <div className="border-t border-foreground/20">
                    {experiences.map((exp, i) => (
                        <div
                            key={i}
                            className="grid md:grid-cols-2 gap-8 py-12 border-b border-foreground/20"
                        >
                            <div>
                                <h3 className="text-3xl font-bold mb-2">{exp.title}</h3>
                                <p className="text-xl">{exp.subtitle}</p>
                            </div>

                            <div>
                                <ul className="space-y-3 text-lg leading-9 list-disc pl-6">
                                    {exp.description.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;