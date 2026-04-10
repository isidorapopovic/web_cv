const HeroSection = () => {
    return (
        <section className="px-6 py-20 md:py-28">
            <div className="mx-auto max-w-6xl">
                <div className="max-w-4xl">
                    <p className="mb-4 inline-block rounded-full border border-foreground/20 px-4 py-2 text-sm font-medium">
                        Data Analyst • Data Engineer • Data Scientist
                    </p>

                    <h1 className="mb-6 text-5xl font-black leading-none md:text-7xl">
                        Isidora
                        <br />
                        Popovic
                    </h1>

                    <p className="max-w-2xl text-lg leading-8 text-foreground/80 md:text-xl">
                        BSc in Electrical Engineering and Computing, currently pursuing a
                        Master’s degree in Applied Mathematics, with hands-on experience in
                        Python, SQL, Power BI, statistics, machine learning, deep learning,
                        and large language models.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#experience"
                            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                        >
                            View Experience
                        </a>

                        <a
                            href="#contact"
                            className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground/5"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;