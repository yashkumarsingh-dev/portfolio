import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  ChevronDown, 
  MapPin, 
  Menu, 
  X, 
  ExternalLink,
  Brain,
  Database,
  Plug,
  Puzzle,
  Send,
  Coffee,
  Code,
  Clock,
  Handshake,
  Quote
} from "lucide-react";
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
  SiLinkedin,
  SiLeetcode,
} from "react-icons/si";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "Stats", href: "#stats" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

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

const stats = [
  { value: 25, label: "Projects Completed", color: "text-portfolio-accent" },
  { value: 12, label: "Technologies Mastered", color: "text-portfolio-purple" },
  { value: 500, label: "Problems Solved", color: "text-portfolio-accent" },
  { value: 2, label: "Years Experience", color: "text-portfolio-purple" },
];

const testimonials = [
  {
    quote:
      "Yash delivered an exceptional full-stack application that exceeded our expectations. His attention to detail and problem-solving skills are remarkable. The project was completed on time with clean, maintainable code.",
    name: "Arjun Singh",
    role: "Senior Developer, TechCorp",
    initials: "AS",
    gradient: "from-portfolio-accent to-portfolio-purple",
  },
  {
    quote:
      "Working with Yash was a pleasure. His expertise in React and Node.js helped us build a scalable application. He communicates clearly and is always ready to go the extra mile for quality results.",
    name: "Priya Gupta",
    role: "Product Manager, InnovateLabs",
    initials: "PG",
    gradient: "from-portfolio-purple to-portfolio-accent",
  },
  {
    quote:
      "Yash's machine learning project showcased his analytical thinking and technical prowess. The forest fire detection system was innovative and well-implemented. Highly recommend his services.",
    name: "Rahul Kumar",
    role: "Research Scientist, EcoTech",
    initials: "RK",
    gradient: "from-portfolio-accent to-portfolio-purple",
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yash-kumar-singh-b50b9a23b",
    icon: SiLinkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/yashkumarsingh-dev",
    icon: SiGithub,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/cooldudeup69/",
    icon: SiLeetcode,
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/user/yashsrs55/",
    icon: Code,
  },
];

// Custom hook for intersection observer
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.rootMargin]);

  return [ref, isIntersecting];
}

// Counter component for stats
function Counter({ value, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return <span>{count}</span>;
}

// Header Component
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-portfolio-primary/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container-max px-4 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="font-montserrat font-bold text-xl"
        >
          <span className="text-portfolio-accent">Yash</span> Kumar Singh
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex space-x-8"
        >
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="nav-link"
            >
              {item.name}
            </button>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </motion.button>
      </nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden fixed inset-0 bg-portfolio-primary/95 backdrop-blur-sm z-40 pt-20"
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 20,
              }}
              transition={{
                duration: 0.3,
                delay: isMobileMenuOpen ? index * 0.1 : 0,
              }}
              onClick={() => handleNavClick(item.href)}
              className="text-2xl font-montserrat font-semibold text-gray-300 hover:text-portfolio-accent transition-colors duration-300"
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </header>
  );
}

// Hero Component
function Hero() {
  const handleScrollToWork = () => {
    const workSection = document.querySelector("#work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    window.open("#", "_blank");
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-portfolio-primary flex items-center justify-center relative overflow-hidden"
    >
      <div className="container-max px-4 text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-montserrat font-bold text-5xl md:text-7xl mb-6"
        >
          <span className="text-portfolio-accent">Yash</span> Kumar Singh
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-4"
        >
          Full Stack Developer | MERN Stack | AI/ML Enthusiast
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-gray-400 mb-8 flex items-center justify-center gap-2"
        >
          <MapPin className="w-5 h-5 text-portfolio-accent" />
          Noida, India
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button onClick={handleScrollToWork} className="btn-primary">
            View Projects
          </button>
          <button onClick={handleDownloadResume} className="btn-secondary">
            Download Resume
          </button>
        </motion.div>
      </div>

      {/* Animated Arrow */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-8 h-8 text-portfolio-accent" />
        </motion.div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-portfolio-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-portfolio-purple rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}

// About Component
function About() {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section
      id="about"
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
            About <span className="text-portfolio-accent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="relative inline-block">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
                alt="Professional headshot"
                className="rounded-full w-64 h-64 mx-auto object-cover border-4 border-portfolio-accent/30 shadow-2xl"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-portfolio-accent/20 to-portfolio-purple/20 rounded-full blur-xl animate-pulse-glow"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            <p className="mb-6">
              I'm a recent{" "}
              <span className="text-portfolio-accent font-semibold">
                MCA graduate
              </span>{" "}
              from Birla Institute of Technology, Mesra (Off-Campus, Noida),
              with a solid background in software development, web technologies,
              and database management.
            </p>
            <p className="mb-6">
              Comfortable with{" "}
              <span className="text-portfolio-accent font-semibold">
                Java, Python, C++, and the MERN stack
              </span>
              . I enjoy solving problems and love turning ideas into real,
              working solutions.
            </p>
            <p>
              Passionate about{" "}
              <span className="text-portfolio-purple font-semibold">
                AI/ML technologies
              </span>{" "}
              and always eager to learn new frameworks and tools that can
              enhance my development workflow.
            </p>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-portfolio-gray-850 rounded-2xl p-8"
        >
          <h3 className="font-montserrat font-bold text-2xl mb-8 text-center">
            Education Timeline
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-portfolio-primary rounded-xl p-6 border-l-4 border-portfolio-accent">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-montserrat font-bold text-xl">
                  Master of Computer Applications
                </h4>
                <span className="text-portfolio-accent font-semibold">
                  CGPA: 8.2
                </span>
              </div>
              <p className="text-gray-300 mb-2">
                Birla Institute of Technology, Mesra (Off-Campus, Noida)
              </p>
              <p className="text-gray-400">08/2023 – 05/2025</p>
            </div>

            <div className="bg-portfolio-primary rounded-xl p-6 border-l-4 border-portfolio-purple">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-montserrat font-bold text-xl">
                  Bachelor of Computer Applications
                </h4>
                <span className="text-portfolio-purple font-semibold">
                  CGPA: 8.86
                </span>
              </div>
              <p className="text-gray-300 mb-2">
                Birla Institute of Technology, Mesra (Off-Campus, Noida)
              </p>
              <p className="text-gray-400">08/2020 – 05/2023</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Skills Component
function Skills() {
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

// Work Component
function Work() {
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

// Stats Component
function Stats() {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section
      id="stats"
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
            Project <span className="text-portfolio-accent">Statistics</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-portfolio-gray-850 rounded-2xl p-8 hover:bg-portfolio-gray-850/80 transition-all duration-300">
                <div
                  className={`text-4xl md:text-5xl font-montserrat font-bold ${stat.color} mb-2`}
                >
                  <Counter value={stat.value} isVisible={isIntersecting} />
                </div>
                <p className="text-gray-300 font-montserrat font-semibold">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Component
function Testimonials() {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
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
            What People <span className="text-portfolio-accent">Say</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-accent mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-96 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: index === currentSlide ? 1 : 0,
                  x: index === currentSlide ? 0 : 100,
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 ${
                  index === currentSlide ? "block" : "hidden"
                }`}
              >
                <div className="bg-portfolio-gray-850 rounded-2xl p-8 text-center h-full flex flex-col justify-center">
                  <Quote className="text-6xl text-portfolio-accent mb-6 mx-auto" />
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center`}
                    >
                      <span className="text-portfolio-primary font-montserrat font-bold text-xl">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-portfolio-accent"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Component
function Contact() {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
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
            Get In <span className="text-portfolio-accent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-montserrat font-bold text-2xl mb-6">
              Let's Work Together!
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              I'm always excited to take on new challenges and collaborate on
              innovative projects. Whether you need a full-stack application,
              AI/ML solution, or just want to discuss an idea, I'm here to help.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-portfolio-accent/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-portfolio-accent" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold">Location</h4>
                  <p className="text-gray-300">Noida, India</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-portfolio-accent/20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-portfolio-accent" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold">
                    Response Time
                  </h4>
                  <p className="text-gray-300">Within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-portfolio-accent/20 rounded-full flex items-center justify-center">
                  <Handshake className="w-6 h-6 text-portfolio-accent" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold">
                    Availability
                  </h4>
                  <p className="text-gray-300">Open for new projects</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="text-gray-300 font-montserrat font-semibold block mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-portfolio-gray-850 border border-gray-700 focus:border-portfolio-accent text-white rounded-lg px-4 py-3 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-gray-300 font-montserrat font-semibold block mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-portfolio-gray-850 border border-gray-700 focus:border-portfolio-accent text-white rounded-lg px-4 py-3 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-gray-300 font-montserrat font-semibold block mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-portfolio-gray-850 border border-gray-700 focus:border-portfolio-accent text-white rounded-lg px-4 py-3 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-portfolio-accent to-portfolio-purple hover:from-portfolio-accent/80 hover:to-portfolio-purple/80 text-portfolio-primary font-montserrat font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-portfolio-accent/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2 inline" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-portfolio-secondary py-12">
      <div className="container-max px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 mb-6 md:mb-0"
          >
            <p>&copy; 2025 Yash Kumar Singh. All rights reserved.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-portfolio-accent transition-colors duration-300 transform hover:scale-110"
              >
                <social.icon className="w-6 h-6" />
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

// Main Portfolio Component
export default function Portfolio() {
  useEffect(() => {
    document.title = "Yash Kumar Singh - Full Stack Developer | MERN Stack | AI/ML";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}