const accomplishments = [
    {
        title: "Huawei Developer Competition Europe",
        subtitle: "2023",
        description:
            "Awarded Honourable Student Award as part of a top 7/120+ teams ranking for designing a disease-risk prediction web app on Huawei Cloud.",
    },
    {
        title: "Electrical Engineering Students’ European Association",
        subtitle: "2022–2024",
        description:
            "Served as EESTEC Ambassador, represented the association to corporate partners, drove collaborations and initiatives, and helped scale partnership strategy across the organisation.",
    },
    {
        title: "Top Female Founders, EIT Summer School",
        subtitle: "2024",
        description:
            "Joined a healthcare-focused entrepreneurship programme with mentoring from experts in big pharma, academia, and healthcare, learning how to identify needs, build teams, develop business models, and pitch ideas.",
    },
    {
        title: "Detecting Parkinson’s Disease Using Voice Signals",
        subtitle: "2025",
        description:
            "Presented research at the International Conference of Undergraduate Research, University of Warwick.",
    },
];

const AccomplishmentsSection = () => {
    return (
        <section className="px-6 py-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h2 className="text-6xl md:text-8xl font-black mb-3">
                            Accomplishments
                        </h2>
                        <p className="text-xl">Noteworthy Achievements</p>
                    </div>

                    <p className="hidden md:block text-xl">Get in touch</p>
                </div>

                <div className="border-t border-foreground/20">
                    {accomplishments.map((acc, i) => (
                        <div
                            key={i}
                            className="grid md:grid-cols-2 gap-8 py-12 border-b border-foreground/20"
                        >
                            <div>
                                <h3 className="text-3xl font-bold mb-2">{acc.title}</h3>
                                <p className="text-xl">{acc.subtitle}</p>
                            </div>

                            <div>
                                <p className="text-lg leading-9">{acc.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AccomplishmentsSection;