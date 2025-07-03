import { motion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";

export default function Hero() {
  const handleScrollToWork = () => {
    const workSection = document.querySelector("#work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    // TODO: Replace with actual resume URL
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
