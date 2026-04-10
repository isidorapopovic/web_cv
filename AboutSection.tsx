import workspaceImg from "@/assets/workspace.jpg";

const AboutSection = () => {
  return (
    <section className="px-6 md:px-20 py-20">
      <h2 className="font-heading text-5xl md:text-7xl font-black mb-4">About Me</h2>
      <p className="text-muted-foreground mb-10">Tech Background</p>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <p className="text-foreground/80 leading-relaxed">
          As a recent Computer Science graduate, I bring a wealth of knowledge in software development,
          data structures, and algorithms. My experience includes developing mobile apps and web-based
          applications, showcasing my proficiency in Java, Python, and C++. I am now eager to embark on
          a challenging and rewarding career in the software development industry.
        </p>
        <div>
          <p className="text-foreground/80 leading-relaxed mb-8">
            I am passionate about coding and creating digital solutions that make a difference. I
            thrive in collaborative environments that foster creativity and innovation. With a strong
            foundation in Computer Science, I am ready to tackle complex challenges and contribute to
            cutting-edge projects.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Learn more
          </a>
        </div>
      </div>

      <img
        src={workspaceImg}
        alt="Developer workspace with multiple monitors"
        className="w-full max-w-4xl rounded-lg"
        width={1280}
        height={720}
      />
    </section>
  );
};

export default AboutSection;
