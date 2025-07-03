import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

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

export default function Testimonials() {
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
