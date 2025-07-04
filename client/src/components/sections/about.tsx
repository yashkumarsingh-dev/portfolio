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
      className="section-padding bg-portfolio-secondary flex flex-col items-center justify-center min-h-screen">
      <div className="container-max w-full flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
            About <span className="text-portfolio-accent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-accent mx-auto"></div>
        </motion.div>

        {/* Centered About Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 leading-relaxed max-w-2xl w-full text-center mx-auto">
          <p className="mb-6">
            I'm a recent{" "}
            <span className="text-portfolio-accent font-semibold">
              MCA graduate
            </span>{" "}
            from Birla Institute of Technology, Mesra (Off-Campus, Noida), with
            a solid background in software development, web technologies, and
            database management.
          </p>
          <p className="mb-6">
            Comfortable with{" "}
            <span className="text-portfolio-accent font-semibold">
              Java, Python, C++, and the MERN stack
            </span>
            . I enjoy solving problems and love turning ideas into real, working
            solutions.
          </p>
          <p>
            Passionate about{" "}
            <span className="text-portfolio-purple font-semibold">
              AI/ML technologies
            </span>{" "}
            and always eager to learn new frameworks and tools that can enhance
            my development workflow.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-portfolio-gray-850 rounded-2xl p-8 mt-16 w-full">
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
