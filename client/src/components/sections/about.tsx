import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function About() {
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
