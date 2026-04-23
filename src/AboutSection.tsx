import profileImage from "./assets/profile.png";

const AboutSection = () => {
    return (
        <section className="px-6 py-24">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-black mb-10">About</h2>

                <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10">
                    <div className="max-w-3xl text-lg leading-9 space-y-6">
                        <p>
                            Technical and business-oriented professional with experience across AI,
                            analytics, healthcare, finance, and early-stage venture building.
                            Skilled at translating complex technical work into clear business and
                            user-focused solutions and comfortable working across technical and
                            non-technical teams.
                        </p>

                        <p>
                            Experience includes product-building, stakeholder collaboration, data
                            analysis, explainability tools and innovation projects. Interested in
                            product, innovation, and client-facing roles where technology
                            understanding, communication, and problem-solving are equally important.
                        </p>
                    </div>

                    <div className="shrink-0">
                        <img
                            src={profileImage}
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