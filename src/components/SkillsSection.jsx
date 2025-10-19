import { motion } from "framer-motion";

const experiences = [
  {
    year: "2025",
    company: "OpenAI",
    role: "Frontend Engineer",
    description:
      "Worked on building dynamic interfaces with React, Next.js, and TypeScript. Collaborated with designers and backend teams to deliver high-performance user experiences.",
  },
  {
    year: "2023 - 2024",
    company: "TechVision Labs",
    role: "Full Stack Developer",
    description:
      "Developed scalable full-stack web apps using Node.js and React. Led implementation of reusable UI components with Tailwind CSS.",
  },
  {
    year: "2021 - 2023",
    company: "Freelance",
    role: "Web Developer",
    description:
      "Built responsive websites and dashboards for small businesses. Focused on accessibility, SEO, and performance optimization.",
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        <div className="relative border-l-2 border-primary/50 pl-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-10 relative"
            >
              {/* Dot on the timeline */}
              <div className="absolute -left-[10px] top-2 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-md" />

              <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <span className="text-sm text-muted-foreground font-medium">
                    {exp.year}
                  </span>
                </div>
                <p className="text-primary font-medium mb-1">{exp.company}</p>
                <p className="text-muted-foreground text-sm">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
