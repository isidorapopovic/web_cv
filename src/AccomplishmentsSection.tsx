const accomplishments = [
  {
    title: "Coding Competitions",
    subtitle: "Recognition",
    description:
      "Secured first place in regional coding competition, showcasing problem-solving skills and innovative coding techniques.",
  },
  {
    title: "Technical Publications",
    subtitle: "December 2025",
    description:
      "Featured in tech magazine for developing cutting-edge mobile app with unique user interface and functionalities.",
  },
  {
    title: "Hackathon Success",
    subtitle: "Team Lead",
    description:
      "Received recognition for outstanding teamwork and creativity in developing a mobile app during a 48-hour hackathon event.",
  },
];

const AccomplishmentsSection = () => {
  return (
    <section className="px-6 md:px-20 py-20">
      <div className="flex items-start justify-between mb-4">
        <h2 className="font-heading text-5xl md:text-7xl font-black">Accomplishments</h2>
        <a
          href="#contact"
          className="hidden md:inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity flex-shrink-0"
        >
          Get in touch
        </a>
      </div>
      <p className="text-muted-foreground mb-6">Noteworthy Achievements</p>
      <div className="border-t border-foreground/20">
        {accomplishments.map((acc, i) => (
          <div key={i} className="grid md:grid-cols-[1fr_2fr] gap-8 py-10 border-b border-foreground/20">
            <div>
              <h3 className="font-heading text-xl font-bold">{acc.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">{acc.subtitle}</p>
            </div>
            <p className="text-foreground/70 leading-relaxed">{acc.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccomplishmentsSection;
