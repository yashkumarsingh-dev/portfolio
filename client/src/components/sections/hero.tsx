import React from "react";
import heroProfile from "../../assets/hero-profile.png";

export default function Hero(){
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#18191A] overflow-hidden px-4 md:px-0">
      {/* Main content container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center w-full max-w-6xl mx-auto py-16">
        {/* Left: Name and Description */}
        <div className="md:w-1/2 w-full text-left text-white space-y-8 md:pr-12 flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-extrabold font-serif mb-2 tracking-tight">
            <span className="block">Yash Kumar Singh</span>
          </h1>
          <div className="h-1 w-16 bg-[#06e6f7] rounded mb-4" />
          <p className="text-gray-200 text-lg md:text-xl mb-6 max-w-lg">
            Full Stack Web Developer <span className="mx-2">|</span> Code with Purpose{" "}
            <span className="mx-2">|</span> AI/ML for Impact
          </p>
          <div className="flex items-center gap-2" style={{ color: "#06e6f7" }}>
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <path d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.828 0l-4.243-4.243a8 8 0 1 1 11.314 0z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            Noida, India
          </div>
          <div className="flex gap-6">
            <a
              href="#work"
              className="bg-gradient-to-r from-[#00F6FF] to-portfolio-purple hover:from-[#00F6FF]/80 hover:to-portfolio-purple/80 text-white hover:text-white font-montserrat font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center">
              View Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1T9DFGKT_WOuZAR1r0h1K8SeLZ8u4O2Nh/view?usp=sharing"
              className="px-8 py-3 rounded-full border-2 border-gray-600 text-white font-semibold hover:bg-gray-700 transition shadow-md flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
              download>
              Download Resume
            </a>
          </div>
        </div>
        {/* Right: Hero Image with Centered Accent Ring, no elevated background */}
        <div className="md:w-1/2 w-full flex justify-center items-center relative mt-12 md:mt-0">
          <div className="relative flex items-center justify-center">
            {/* Perfectly centered accent ring */}
            <span className="absolute flex items-center justify-center w-full h-full pointer-events-none">
              <span
                className="block w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full border-8 opacity-30"
                style={{ borderColor: "#06e6f7" }}
              />
            </span>
            <img
              src={heroProfile}
              alt="Hero Profile"
              className="relative w-[320px] md:w-[400px] rounded-2xl object-cover shadow-2xl z-10 bg-transparent"
              style={{ objectPosition: "top" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
