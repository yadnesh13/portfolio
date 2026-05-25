import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    "about",
    "experience",
    "projects",
    "skills",
    "contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((id) =>
        document.getElementById(id)
      );

      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-gray-900">

      <nav className="max-w-7xl mx-auto px-8 md:px-20 py-5 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight"
        >
          YB
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">

          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`capitalize transition duration-300 ${
                activeSection === item
                  ? "text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>

      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-gray-900 bg-black/95 backdrop-blur-xl"
          >

            <div className="flex flex-col px-8 py-6 gap-6">

              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setIsOpen(false)}
                  className={`capitalize transition duration-300 text-lg ${
                    activeSection === item
                      ? "text-white"
                      : "text-gray-400"
                  }`}
                >
                  {item}
                </a>
              ))}

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}

export default Navbar;