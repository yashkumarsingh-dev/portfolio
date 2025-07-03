import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiGit,
  SiMysql,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si";
import { Brain, Database, Plug, Puzzle, Send, Coffee, Code } from "lucide-react";

const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Python", icon: SiPython, color: "text-blue-400" },
  { name: "Java", icon: Coffee, color: "text-red-400" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-300" },
  { name: "Machine Learning", icon: Brain, color: "text-portfolio-purple" },
  { name: "API", icon: Plug, color: "text-portfolio-purple" },
  { name: "DBMS", icon: Database, color: "text-portfolio-purple" },
  { name: "HTML", icon: SiHtml5, color: "text-orange-400" },
  { name: "CSS", icon: SiCss3, color: "text-blue-400" },
  { name: "React.js", icon: SiReact, color: "text-cyan-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
  { name: "Problem Solving", icon: Puzzle, color: "text-portfolio-purple" },
];

const tools = [
  { name: "VS Code", icon: Code },
  { name: "Git", icon: SiGit },
  { name: "MySQL", icon: SiMysql },
  { name: "Postman", icon: Send },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "GitHub", icon: SiGithub },
];

export default function Skills() {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
      ref={ref}
      className="section-padding bg-portfolio-primary"
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
            Skills & <span className="text-portfolio-accent">Tools</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-accent mx-auto"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="skill-card"
            >
              <skill.icon className={`text-4xl ${skill.color} mb-4 mx-auto`} />
              <h3 className="font-montserrat font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="font-montserrat font-bold text-2xl text-gray-300 mb-8">
            Development Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="tool-badge"
              >
                <tool.icon className="text-portfolio-accent mr-2 inline-block" />
                <span className="font-montserrat font-semibold">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
