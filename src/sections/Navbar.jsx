/* eslint-disable no-unused-vars */
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from 'motion/react';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (!element) return;

  const yOffset = -80; // height of navbar (adjust as needed)
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};

function Navigation({ onLinkClick }) {
  return (
    <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
      <li>
        <button onClick={() => onLinkClick("home")} className="text-neutral-400 hover:text-white transition">
          Home
        </button>
      </li>
      <li>
        <button onClick={() => onLinkClick("about")} className="text-neutral-400 hover:text-white transition">
          Services
        </button>
      </li>
      <li>
        <button onClick={() => onLinkClick("projects")} className="text-neutral-400 hover:text-white transition">
          Work
        </button>
      </li>
      <li>
        <button onClick={() => onLinkClick("contact")} className="text-neutral-400 hover:text-white transition">
          Contact
        </button>
      </li>
    </ul>
  );
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (id) => {
    scrollToSection(id);
    setIsOpen(false); // close mobile menu after clicking
  };

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-3xl font-bold text-neutral-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-sm scroll-smooth"
          >
            AtmosFlix
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center sm:hidden text-neutral-400 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <nav className="hidden sm:flex">
            <Navigation onLinkClick={handleLinkClick} />
          </nav>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation onLinkClick={handleLinkClick} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};
