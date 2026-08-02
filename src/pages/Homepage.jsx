import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Particles from "../components/Particles";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "./Homepage.css";

const Homepage = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="homepage-main">
      {/* Top Navbar */}
      <Navbar lenisRef={lenisRef} />

      {/* 1. Background Particles fixed layer */}
      <div className="homepage-particles-fixed">
        <Particles
          particleColors={["#ffffff", "#cf9eff", "#ff79dc"]}
          particleCount={1200}
          particleSpread={15}
          speed={0.2}
          particleBaseSize={90}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Content Sections */}
      <div className="homepage-content-wrapper">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Homepage;
