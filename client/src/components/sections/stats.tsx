import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useEffect, useState } from "react";

const stats = [
  { value: 25, label: "Projects Completed", color: "text-portfolio-accent" },
  { value: 12, label: "Technologies Mastered", color: "text-portfolio-purple" },
  { value: 500, label: "Problems Solved", color: "text-portfolio-accent" },
  { value: 2, label: "Years Experience", color: "text-portfolio-purple" },
];

function Counter({ value, isVisible }: { value: number; isVisible: boolean }) {
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

export default function Stats() {
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
