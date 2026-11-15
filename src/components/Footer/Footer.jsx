import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative pb-10 pt-16">
      <div className="hairline absolute inset-x-0 top-0" />
      <div className="wrap">
        <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            {/* Name / Logo */}
            <h2 className="text-gold-gradient text-3xl font-light tracking-[-0.04em] sm:text-4xl">Muhammad Hilal</h2>

            {/* Navigation Links - Responsive */}
            <nav aria-label="Footer" className="mt-6 flex flex-wrap justify-center gap-x-7 gap-y-2 md:justify-start">
              {[
                { name: "About", id: "about" },
                { name: "Skills", id: "skills" },
                { name: "Experience", id: "experience" },
                { name: "Projects", id: "work" },
                { name: "Education", id: "education" },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleScroll(item.id)}
                  className="link-draw my-1 text-sm text-mist transition-colors duration-500 hover:text-gold-300 sm:text-[0.95rem]"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Media Icons - Responsive */}
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/Muhammadsafiktk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-lg text-mist transition-all duration-500 ease-silk hover:-translate-y-1 hover:border-gold-400/50 hover:bg-gold-400/[0.07] hover:text-gold-300 hover:shadow-[0_14px_40px_-14px_rgba(217,189,132,0.5)]"
            >
              <FaGithub />
            </a>
            <span
              aria-hidden="true"
              className="grid h-12 w-12 cursor-default place-items-center rounded-full border border-white/10 bg-white/[0.03] text-lg text-mist transition-all duration-500 ease-silk hover:-translate-y-1 hover:border-gold-400/50 hover:bg-gold-400/[0.07] hover:text-gold-300"
            >
              <FaLinkedin />
            </span>
          </div>
        </div>

        {/* Copyright Text */}
        <p className="mt-14 border-t border-white/[0.06] pt-7 text-center text-sm text-fog md:text-left">
          © 2027 All rights reserved | Muhammad Hilal
        </p>
      </div>
    </footer>
  );
};

export default Footer;
