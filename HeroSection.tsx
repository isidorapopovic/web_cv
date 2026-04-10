const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20">
      <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">Software Engineer Portfolio</p>
      <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black leading-tight mb-6">
        John<br />Smith
      </h1>
      <p className="text-muted-foreground max-w-md text-lg">
        Computer Science Graduate & Aspiring Software Engineer
      </p>
    </section>
  );
};

export default HeroSection;
