import { useEffect } from "react";
import Header from "@/components/ui/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Work from "@/components/sections/work";
import Stats from "@/components/sections/stats";
import Contact from "@/components/sections/contact";
import Footer from "@/components/ui/footer";

export default function Home() {
  useEffect(() => {
    // Set page title
    document.title =
      "Yash Kumar Singh - Full Stack Developer | MERN Stack | AI/ML";
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
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
