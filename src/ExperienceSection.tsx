const experiences = [
    {
        title: "PATHflow",
        subtitle: "Founder",
        description: [
            "Built and developed the platform end-to-end as sole founder, from concept to a working product.",
            "Identified recurring pain points in student career navigation and recruitment, and translated them into a practical platform and consulting concept.",
            "Owned product thinking, user research, and execution across both business and technical workstreams.",
        ],
    },
    {
        title: "Internship Institut Mihajlo Pupin",
        subtitle: "Intern",
        description: [
            "Built interactive dashboards for explaining ML model behaviour and predictions to technical and non-technical stakeholders.",
            "Designed visualisations that translated model outputs and feature importance into terms domain experts could act on.",
            "Supported the team's model-explainability workflow, bridging raw model outputs and stakeholder decision-making.",
        ],
    },
    {
        title: "Data Analyst and HR, Lukowa Group",
        subtitle: "06/2024 – 10/2024",
        description: [
            "Worked in a hybrid analytical and operational role supporting a newly formed quantitative team.",
            "Built and contributed to portfolio risk-minimisation models and prediction pipelines for the team's quantitative strategies.",
            "Ran technical screening and evaluation of candidates for ML and quantitative roles, combining data analysis with recruitment support.",
            "Explored and piloted AI tools to automate and improve candidate evaluation workflows.",
            "Helped bridge analytical work, process improvement, and people-focused decision-making.",
        ],
    },
    {
        title: "IT & Innovation - AstraZeneca",
        subtitle: "09/2023 – 04/2024",
        description: [
            "Collaborated with clinical, commercial, and technical teams on an ML-based disease-prediction tool, from prototype through deployment support.",
            "Monitored model performance in production and fed findings back into deployment-related decisions.",
            "Translated technical model behaviour into terms usable by clinical and business stakeholders.",
            "Co-organised Health Hacks events, bringing clinical and technical participants together to prototype solutions to real healthcare problems.",
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