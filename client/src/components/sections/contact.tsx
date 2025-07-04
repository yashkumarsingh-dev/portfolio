import React, { useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Handshake, Send } from "lucide-react";

export default function Contact() {
  // Dummy intersection observer for animation only
  const [ref, isIntersecting] = [null, true];
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const data = new FormData(form);
    await fetch("https://formspree.io/f/xgvyqgvj", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    // Scroll to hero section
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    // Optionally reset form
    form.reset();
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding bg-portfolio-primary">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
            Get In <span className="text-portfolio-accent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}>
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
            transition={{ duration: 0.8, delay: 0.4 }}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="text-gray-300 font-montserrat font-semibold">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 bg-portfolio-gray-850 border-gray-700 focus:border-portfolio-accent text-white w-full rounded p-3"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-gray-300 font-montserrat font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 bg-portfolio-gray-850 border-gray-700 focus:border-portfolio-accent text-white w-full rounded p-3"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-gray-300 font-montserrat font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 bg-portfolio-gray-850 border-gray-700 focus:border-portfolio-accent text-white w-full rounded p-3 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#00F6FF] to-portfolio-purple hover:from-[#00F6FF]/80 hover:to-portfolio-purple/80 text-white font-montserrat font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
