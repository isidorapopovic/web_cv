const experiences = [
    {
        title: "PATHflow",
        subtitle: "Founder",
        description:
            "Founded a newsletter and web application connecting students with HR. Built and scaled the platform end-to-end, including the corporate database, website, and outreach pipeline. Expanded the project into career consulting, helping students understand recruitment, technical screening, and professional development.",
    },
    {
        title: "International Student Practice, Joint Institute for Nuclear Research",
        subtitle: "Intern",
        description:
            "Developed new algorithms based on deep learning for neutron tomography in the Frank Laboratory of Neutron Physics.",
    },
    {
        title: "Internship Institut Mihajlo Pupin",
        subtitle: "Intern",
        description:
            "Built interactive dashboards for ML model explainability, enabling technical and non-technical stakeholders to interpret model behaviour.",
    },
    {
        title: "Data Analyst and HR, Lukow Group",
        subtitle: "06/2024 – 10/2024",
        description:
            "Supported a new quant team through headhunting and technical screening for ML and quant roles, contributed to projects on portfolio-risk minimisation and prediction pipelines, and explored AI tooling to streamline candidate evaluation.",
    },
    {
        title: "IT & Innovation, AstraZeneca",
        subtitle: "09/2023 – 04/2024",
        description:
            "Helped develop and maintain an ML-based disease-prediction tool in collaboration with HCP and CVRM teams, monitored model performance, supported deployment decisions, and helped bridge clinical and technical teams.",
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
                                <p className="text-lg leading-9">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;