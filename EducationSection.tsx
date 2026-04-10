import { GraduationCap, BookOpen, Cpu, Code } from "lucide-react";

const items = [
  { icon: GraduationCap, text: "Bachelor's Degree in Computer Science" },
  { icon: BookOpen, text: "Relevant coursework in Data Structures" },
  { icon: Cpu, text: "Specialization in Algorithms" },
  { icon: Code, text: "Experience in Software Development" },
];

const EducationSection = () => {
  return (
    <section className="px-6 md:px-20 py-20">
      <h2 className="font-heading text-5xl md:text-7xl font-black mb-4">Education</h2>
      <p className="text-muted-foreground mb-6">Academic Background</p>
      <div className="border-t border-foreground/20 max-w-2xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-4 py-6 border-b border-foreground/20">
            <item.icon className="w-8 h-8 flex-shrink-0" />
            <span className="font-heading text-xl md:text-2xl font-bold">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
