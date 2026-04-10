const experiences = [
    {
        title: "PATHflow",
        subtitle: "Founder",
        period: "2025",
        description:
            "Founded a newsletter and web application connecting students with HR. Built and scaled the platform end-to-end, including the corporate database, website, and outreach pipeline. Expanded the project into career consulting, helping students understand recruitment, technical screening, and professional development.",
    },
    {
        title: "International Student Practice, Joint Institute for Nuclear Research",
        subtitle: "Intern",
        period: "2025",
        description:
            "Developed new algorithms based on deep learning for neutron tomography in the Frank Laboratory of Neutron Physics.",
    },
    {
        title: "Internship Institut Mihajlo Pupin",
        subtitle: "Intern",
        period: "2025",
        description:
            "Built interactive dashboards for ML model explainability, enabling technical and non-technical stakeholders to interpret model behaviour more effectively.",
    },
    {
        title: "Data Analyst and HR, Lukow Group",
        subtitle: "Data Analyst & HR",
        period: "06/2024–10/2024",
        description:
            "Supported a new quant team through headhunting and technical screening for ML and quant roles. Contributed to projects on portfolio-risk minimisation and prediction pipelines, and explored AI tooling to streamline candidate evaluation.",
    },
    {
        title: "IT & Innovation, AstraZeneca",
        subtitle: "Intern",
        period: "09/2023–04/2024",
        description:
            "Helped develop and maintain an ML-based disease-prediction tool in collaboration with HCP and CVRM teams. Monitored model performance, supported deployment decisions, and co-organised Health Hacks with X+ participants, bridging clinical and technical teams.",
    },
];

const ExperienceSection = () => {
    return (
        <section id="experience" className="px-6 py-16">
            <div className="mx-auto max-w-6xl">
                <h2 className="mb-4 text-4xl font-bold">Experience</h2>
                <p className="mb-10 max-w-2xl text-foreground/75">
                    Projects and roles across data, machine learning, healthcare,
                    product-building, and analytics.
                </p>

                <div className="space-y-6">
                    {experiences.map((exp) => (
                        <div
                            key={`${exp.title}-${exp.period}`}
                            className="rounded-3xl border border-foreground/10 p-6 md:p-8"
                        >
                            <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                                <div>
                                    <h3 className="text-2xl font-semibold">{exp.title}</h3>
                                    <p className="text-sm font-medium uppercase tracking-wide text-foreground/60">
                                        {exp.subtitle}
                                    </p>
                                </div>
                                <span className="text-sm text-foreground/60">{exp.period}</span>
                            </div>

                            <p className="leading-8 text-foreground/80">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;