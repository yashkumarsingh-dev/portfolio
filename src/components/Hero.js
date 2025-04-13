import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['I am Yash Kumar Singh', 'I am a Developer'],
      typeSpeed: 90,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat text-white px-4"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1001917/pexels-photo-1001917.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
    >
      <div className="text-center bg-black bg-opacity-50 p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          <span ref={typedRef} className="text-yellow-200"></span>
        </h1>
        <p className="text-lg sm:text-xl max-w-xl mx-auto mb-4">
          I'm a passionate developer with a love for building clean and responsive web applications using modern technologies.
        </p>
        <ul className="list-disc list-inside text-left max-w-md mx-auto">
          <li>Watching Anime</li>
          <li>Playing Football</li>
          <li>Coding</li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
