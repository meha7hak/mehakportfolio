import { useState, useEffect } from "react";
import GooeyNav from "./GooeyNav";
import "./Navbar.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ lenisRef }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section detection
      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec) {
          const top = sec.offsetTop;
          if (scrollPos >= top) {
            setActiveIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, index, item) => {
    e.preventDefault();
    setActiveIndex(index);
    const target = document.querySelector(item.href);
    if (target) {
      if (lenisRef?.current) {
        lenisRef.current.scrollTo(target, { offset: -60 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Format nav items with click handler for GooeyNav compatibility
  const gooeyItems = navItems.map((item, idx) => ({
    label: item.label,
    href: item.href,
    onClick: (e) => handleNavClick(e, idx, item),
  }));

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <GooeyNav
        items={gooeyItems}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={activeIndex}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </header>
  );
};

export default Navbar;
