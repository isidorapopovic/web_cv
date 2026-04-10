const experiences = [
  {
    title: "Software Development",
    subtitle: "Coding Expertise",
    description:
      "Developed advanced software solutions using Java, Python, and C++. Led a team of developers in creating innovative applications that streamlined processes and enhanced user experiences.",
  },
  {
    title: "Web Development",
    subtitle: "Web Applications",
    description:
      "Designed and implemented interactive web interfaces using HTML, CSS, and JavaScript. Collaborated with cross-functional teams to deliver web-based solutions that met client requirements.",
  },
  {
    title: "Mobile App Development",
    subtitle: "iOS & Android",
    description:
      "Built cross-platform mobile applications with React Native and Flutter. Focused on performance optimization and delivering seamless user experiences across devices.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="px-6 md:px-20 py-20">
      <h2 className="font-heading text-5xl md:text-7xl font-black mb-4">Experience</h2>
      <p className="text-muted-foreground mb-6">Professional Journey</p>
      <div className="border-t border-foreground/20">
        {experiences.map((exp, i) => (
          <div key={i} className="grid md:grid-cols-[1fr_2fr] gap-8 py-10 border-b border-foreground/20">
            <div>
              <h3 className="font-heading text-xl font-bold">{exp.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">{exp.subtitle}</p>
            </div>
            <p className="text-foreground/70 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
