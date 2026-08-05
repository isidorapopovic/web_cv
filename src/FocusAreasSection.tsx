const focusAreas = [
    {
        title: "Healthcare",
        description:
            "Collaborated with clinical, commercial, and technical teams at AstraZeneca on an ML-based disease-prediction tool, from prototype through deployment support. Also built a disease-risk prediction web app that earned an Honourable Student Award at the Huawei Developer Competition Europe, ranking top 7 of 120+ teams.",
    },
    {
        title: "Finance",
        description:
            "Contributed to portfolio risk-minimisation models and prediction pipelines for a newly formed quantitative team at Lukowa Group, and applied a convex optimisation approach to multi-asset portfolio construction as part of a Master's in Applied Mathematics.",
    },
    {
        title: "Research",
        description:
            "Investigated detecting Parkinson's disease from voice-signal features for a Bachelor's thesis, presented at the International Conference of Undergraduate Research, University of Warwick. Built interactive dashboards for ML model explainability during an internship at Institut Mihajlo Pupin.",
    },
];

const FocusAreasSection = () => {
    return (
        <section className="px-6 py-24">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-6xl md:text-8xl font-black mb-3">Focus Areas</h2>
                <p className="text-xl mb-12">Where the work has landed</p>

                <div className="grid md:grid-cols-3 gap-8">
                    {focusAreas.map((area, i) => (
                        <div
                            key={i}
                            className="rounded-2xl border border-[var(--border)] bg-[var(--card)] text-[var(--card-foreground)] p-8"
                        >
                            <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                            <p className="text-base leading-8">{area.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FocusAreasSection;
