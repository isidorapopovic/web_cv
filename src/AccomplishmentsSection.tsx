const accomplishments = [
    {
        title: "Huawei Developer Competition Europe",
        subtitle: "Honourable Student Award",
        period: "2023",
        description:
            "Received Honourable Student Award as part of a top 7/120+ teams ranking for designing a disease-risk prediction web app on Huawei Cloud.",
    },
    {
        title: "Electrical Engineering Students’ European Association",
        subtitle: "EESTEC Ambassador",
        period: "2022–2024",
        description:
            "Represented the association to corporate partners, drove collaborations and initiatives, worked cross-team internally, shared best practices, and helped scale partnership strategy across the organisation.",
    },
    {
        title: "Top Female Founders, IT Summer School",
        subtitle: "Participant",
        period: "2024",
        description:
            "Organised by European Institute of Technology with mentoring from industry experts in big pharma, academia, and healthcare. Learned to identify healthcare needs, build a dynamic team, create a business model, and pitch ideas effectively.",
    },
    {
        title: "Detecting Parkinson’s Disease Using Voice Signals",
        subtitle: "Research",
        period: "2025",
        description:
            "Presented research at the International Conference of Undergraduate Research, University of Warwick.",
    },
];

const AccomplishmentsSection = () => {
    return (
        <section id="accomplishments" className="px-6 py-16">
            <div className="mx-auto max-w-6xl">
                <h2 className="mb-4 text-4xl font-bold">Achievements</h2>
                <p className="mb-10 max-w-2xl text-foreground/75">
                    Selected awards, leadership roles, and research milestones.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                    {accomplishments.map((acc) => (
                        <div
                            key={`${acc.title}-${acc.period}`}
                            className="rounded-3xl border border-foreground/10 p-6"
                        >
                            <div className="mb-3 flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-xl font-semibold">{acc.title}</h3>
                                    <p className="text-sm uppercase tracking-wide text-foreground/60">
                                        {acc.subtitle}
                                    </p>
                                </div>
                                <span className="text-sm text-foreground/60">{acc.period}</span>
                            </div>

                            <p className="leading-8 text-foreground/80">{acc.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AccomplishmentsSection;