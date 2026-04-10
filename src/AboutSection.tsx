const skills = [
    "Python",
    "SQL",
    "Power BI",
    "Data storytelling",
    "Machine learning",
    "Supervised & unsupervised learning",
    "Model evaluation",
    "ML explainability",
    "Deep learning",
    "Large language models",
    "Probability & statistics",
    "Mathematical modelling",
    "Optimisation",
    "Business innovation",
    "Problem solving",
    "Teamwork",
    "Adaptability",
    "Pitching",
];

const languages = [
    "English — C1",
    "Italian — C1",
    "German — B1",
    "French — A1",
];

const AboutSection = () => {
    return (
        <section id="about" className="px-6 py-16">
            <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
                <div>
                    <h2 className="mb-6 text-4xl font-bold">About Me</h2>
                    <p className="text-base leading-8 text-foreground/80">
                        Electrical Engineering graduate and current Master’s student in
                        Applied Mathematics, focused on applying data science and machine
                        learning to real-world business and healthcare problems.
                    </p>
                    <p className="mt-4 text-base leading-8 text-foreground/80">
                        I have hands-on experience with Python, SQL, Power BI, statistics,
                        machine learning, deep learning, and large language models,
                        including cross-country and cross-functional projects. I am
                        comfortable working with both technical and non-technical
                        stakeholders and translating data insights into decisions.
                    </p>
                    <p className="mt-4 text-base leading-8 text-foreground/80">
                        I am actively seeking Data Analyst, Data Engineer, and Data
                        Scientist roles.
                    </p>
                </div>

                <div className="space-y-8">
                    <div className="rounded-3xl border border-foreground/10 p-6">
                        <h3 className="mb-4 text-2xl font-semibold">Skills</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-foreground/15 px-4 py-2 text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-3xl border border-foreground/10 p-6">
                        <h3 className="mb-4 text-2xl font-semibold">Languages</h3>
                        <ul className="space-y-3 text-foreground/80">
                            {languages.map((language) => (
                                <li key={language}>{language}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;