import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Developer Chat App",
    period: "01/2025–Present",
    description:
      "MERN stack application with Google Gemini AI integration for smart replies and code suggestions. Features real-time chat with Socket.io and JWT authentication.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Node.js", "MongoDB", "AI/ML"],
    gradient: "from-portfolio-accent to-portfolio-purple",
    badgeColor: "bg-portfolio-accent/20 text-portfolio-accent",
  },
  {
    title: "Task Management System",
    period: "05/2024–Present",
    description:
      "Full-stack MERN application with real-time updates, task categorization, and user authentication. Features drag-and-drop interface and progress tracking.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Express", "MongoDB", "Real-time"],
    gradient: "from-portfolio-purple to-portfolio-accent",
    badgeColor: "bg-portfolio-purple/20 text-portfolio-purple",
  },
  {
    title: "Forest Fire Detection",
    period: "01/2023–05/2023",
    description:
      "Python-based machine learning system that predicts forest fire likelihood using environmental factors like temperature, humidity, and oxygen levels.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Python", "Machine Learning", "Environmental"],
    gradient: "from-green-500 to-portfolio-accent",
    badgeColor: "bg-green-500/20 text-green-400",
  },
];

export default function Work() {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section
      id="work"
      ref={ref}
      className="section-padding bg-portfolio-secondary"
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
            Featured <span className="text-portfolio-accent">Work</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="project-card group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} interface`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-montserrat font-bold text-xl">
                    {project.title}
                  </h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${project.badgeColor}`}>
                    {project.period}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm ${
                        tech === "AI/ML" || tech === "Real-time" || tech === "Environmental"
                          ? "bg-portfolio-purple/20 text-portfolio-purple"
                          : "bg-portfolio-accent/20 text-portfolio-accent"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  className={`w-full bg-gradient-to-r ${project.gradient} hover:opacity-80 text-portfolio-primary font-montserrat font-semibold py-3 rounded-xl transition-all duration-300`}
                >
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
