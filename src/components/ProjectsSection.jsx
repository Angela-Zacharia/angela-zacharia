import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    description:
      "A personal portfolio site to showcase projects, experience, and design flair — fully responsive and animated!",
    github: "https://github.com/Angela-Zacharia/angela-zacharia",
    demo: "https://angela-zacharia.netlify.app/",
  },
  {
    title: "Food Savor - Food Management System",
    tech: ["JavaScript", "Firebase", "Raspberry Pi"],
    description:
      "Designed and built a Food Management and Recipe Display system, leveraging serial numbers to efficiently track product breakdowns and associated recipes.",
    demo: "https://sehgal-arjun.github.io/foodsavour/index.html",
  },
  {
    title: "RAIInet",
    tech: ["C++", "OOP"],
    description:
      "Engineered a modular, turn-based C++ strategy game using OOP and encapsulated gameplay classes",
    github: "https://github.com/Angela-Zacharia/RAIInet"
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-gradient-to-b from-secondary/20 to-secondary/40">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Projects</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition relative overflow-hidden border border-primary/10"
              >
                {/* Floating accent gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 hover:opacity-100 transition duration-300 rounded-xl pointer-events-none" />

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-primary">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary/70 transition"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary/70 transition"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
