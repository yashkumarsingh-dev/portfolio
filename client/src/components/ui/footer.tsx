import { motion } from "framer-motion";
import { SiLinkedin, SiGithub, SiLeetcode } from "react-icons/si";
import { Code2 } from "lucide-react";

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
    icon: Code2,
  },
];

export default function Footer() {
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
