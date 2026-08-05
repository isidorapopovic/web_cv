const AboutSection = () => {
    return (
        <section className="px-6 py-24">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-black mb-10">About</h2>

                <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10">
                    <div className="max-w-3xl text-lg leading-9 space-y-6">
                        <p>
                            Data scientist and applied mathematician focused on building explainable
                            machine learning models and quantitative optimisation methods — from
                            disease-prediction tools and model-explainability dashboards to
                            portfolio risk models — with hands-on experience applying that work
                            across healthcare, finance, and early-stage venture building.
                        </p>

                        <p>
                            Experience includes product-building, stakeholder collaboration, data
                            analysis, explainability tools and innovation projects. Interested in
                            product, innovation, and client-facing roles where technical depth,
                            communication, and problem-solving carry equal weight.
                        </p>
                    </div>

                    <div className="shrink-0">
                        <img
                            src="/profile.png"
                            alt="Profile"
                            className="profile-photo"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;