import { useEffect } from "react";
import Header from "../components/ui/header.jsx";
import Hero from "../components/sections/hero.jsx";
import About from "../components/sections/about.jsx";
import Skills from "../components/sections/skills.jsx";
import Work from "../components/sections/work.jsx";
import Stats from "../components/sections/stats.jsx";
import Testimonials from "../components/sections/testimonials.jsx";
import Contact from "../components/sections/contact.jsx";
import Footer from "../components/ui/footer.jsx";

export default function Home() {
  useEffect(() => {
    // Set page title
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