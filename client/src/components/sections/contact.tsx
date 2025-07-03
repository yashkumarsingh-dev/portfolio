import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useState } from "react";
import { MapPin, Clock, Handshake, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "Name, email, and message are required.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
                <Label
                  htmlFor="name"
                  className="text-gray-300 font-montserrat font-semibold"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 bg-portfolio-gray-850 border-gray-700 focus:border-portfolio-accent text-white"
                />
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="text-gray-300 font-montserrat font-semibold"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 bg-portfolio-gray-850 border-gray-700 focus:border-portfolio-accent text-white"
                />
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className="text-gray-300 font-montserrat font-semibold"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="mt-2 bg-portfolio-gray-850 border-gray-700 focus:border-portfolio-accent text-white resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-gradient-to-r from-portfolio-accent to-portfolio-purple hover:from-portfolio-accent/80 hover:to-portfolio-purple/80 text-portfolio-primary font-montserrat font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-portfolio-accent/25"
              >
                {contactMutation.isPending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
