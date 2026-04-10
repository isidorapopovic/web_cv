const education = [
    {
        degree: "Master’s Degree in Applied Mathematics",
        institution: "University of Belgrade School of Electrical Engineering",
        period: "2024–2025",
        details:
            "Focus on statistics, mathematical modelling, and a Master’s thesis on multi-asset portfolio convex optimisation.",
    },
    {
        degree: "Bachelor’s Degree in Electrical Engineering and Computing",
        institution: "University of Belgrade School of Electrical Engineering",
        period: "2020–2024",
        details:
            "Relevant work included signal and systems, orientation towards statistical analysis of signals, machine learning, data science, and 240 ECTS.",
    },
    {
        degree: "Regional Center for Talented Youth Belgrade 2",
        institution: "Belgrade",
        period: "2013–2020",
        details:
            "Competed in biomedical sciences, mathematics, physics, and English, and took part in the Best Young Researchers competition.",
    },
];

const EducationSection = () => {
    return (
        <section id="education" className="px-6 py-16">
            <div className="mx-auto max-w-6xl">
                <h2 className="mb-4 text-4xl font-bold">Education</h2>
                <p className="mb-10 max-w-2xl text-foreground/75">
                    Academic background in electrical engineering, computing, applied
                    mathematics, and statistics.
                </p>

                <div className="space-y-6">
                    {education.map((item) => (
                        <div
                            key={`${item.degree}-${item.period}`}
                            className="rounded-3xl border border-foreground/10 p-6 md:p-8"
                        >
                            <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                                <div>
                                    <h3 className="text-2xl font-semibold">{item.degree}</h3>
                                    <p className="text-foreground/70">{item.institution}</p>
                                </div>
                                <span className="text-sm text-foreground/60">{item.period}</span>
                            </div>

                            <p className="leading-8 text-foreground/80">{item.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationSection;