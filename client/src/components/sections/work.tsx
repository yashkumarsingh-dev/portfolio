import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Developer - MERN Chat App",
    period: "01/2025–Present",
    description:
      "Developed a MERN-stack real-time chat web application with Gemini AI Agentfor smart replies, syntax highlighting, code sharing, smart debugging, JWT/OAuth authentication, Socket.io messaging, and responsive to all devices, modular architecture.",
    image:
      "https://images.unsplash.com/photo-1625314887424-9f190599bd56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fEFJfGVufDB8fDB8fHww",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    gradient: "from-portfolio-accent to-portfolio-purple",
    badgeColor: "bg-portfolio-accent/20 text-portfolio-accent",
    github: "https://github.com/yashkumarsingh-dev/AI-Developer",
  },
  {
    title: "Military Assets Management System",
    period: "06/2025–07/2025",
    description:
      "Built a full-stack app with React, Express, Node.js, and PostgreSQL for managing military assets, featuring tracking, maintenance scheduling, dashboards, and role-based access.",
    image:
      "https://plus.unsplash.com/premium_photo-1661901234139-d833950e05e0?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Express", "PostgreSQL", "Real-time"],
    gradient: "from-portfolio-purple to-portfolio-accent",
    badgeColor: "bg-portfolio-purple/20 text-portfolio-purple",
    github: "https://github.com/yashkumarsingh-dev/military-assets",
  },
  {
    title: "Password Manager SaaS",
    period: "06/2025–07/2025",
    description:
      "A secure full-stack SaaS app for managing and storing passwords. Built with the MERN stack, featuring JWT authentication, encrypted storage, and Razorpay integration. Deployed using Vercel and Railway with MongoDB Atlas to ensure performance, scalability, and data security.",
    image:
      "https://images.pexels.com/photos/32871420/pexels-photo-32871420.jpeg",
    technologies: ["MERN", "MongoDb Atlas", "Razorpay"],
    gradient: "from-green-500 to-portfolio-accent",
    badgeColor: "bg-green-500/20 text-green-400",
    github: "https://github.com/yashkumarsingh-dev/password-manager-saas",
  },
];



export default function Work() {
  // Dummy intersection observer for animation only
  const [ref, isIntersecting] = [null, true];

  return (
    <section
      id="work"
      ref={ref}
      className="section-padding bg-portfolio-secondary">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
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
              className="project-card group">
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
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${project.badgeColor}`}>
                    {project.period}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm ${
                        tech === "AI/ML" ||
                        tech === "Real-time" ||
                        tech === "Environmental"
                          ? "bg-portfolio-purple/20 text-portfolio-purple"
                          : "bg-portfolio-accent/20 text-portfolio-accent"
                      }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-gradient-to-r from-[#00F6FF] to-portfolio-purple hover:from-[#00F6FF]/80 hover:to-portfolio-purple/80 text-white font-montserrat font-semibold py-3 rounded-xl transition-all duration-300">
                    View Project
                  </a>
                ) : (
                  <button
                    className="w-full bg-gradient-to-r from-[#00F6FF] to-portfolio-purple text-white font-montserrat font-semibold py-3 rounded-xl opacity-50 cursor-not-allowed"
                    disabled>
                    View Project
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
