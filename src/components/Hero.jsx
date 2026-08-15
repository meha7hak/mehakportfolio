import { useRef, Component } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LaserFlow from "./LaserFlow";
import PixelTransition from "./PixelTransition";
import ShuffleText from "./ShuffleText";
import "./Hero.css";

class LaserFlowErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="homepage-laser-wrap" style={{ background: "transparent" }} />
      );
    }
    return this.props.children;
  }
}

const Hero = () => {
  const heroRef = useRef(null);
  const laserWrapRef = useRef(null);

  // Framer motion scroll values relative to hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Scroll animations per specification:
  // - Profile image scales to ~0.9 and shifts slightly left
  const imageScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);
  const imageX = useTransform(scrollYProgress, [0, 0.8], [0, -20]);

  // - Text moves upward slightly and fades gradually
  const textY = useTransform(scrollYProgress, [0, 0.8], [0, -30]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // - LaserFlow fades gradually after the hero
  const laserOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section id="home" ref={heroRef} className="hero-section">
      {/* 2. LaserFlow on top of particles, with image card inside its container */}
      <motion.div
        ref={laserWrapRef}
        className="homepage-laser-wrap"
        style={{ zIndex: 4, opacity: laserOpacity }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const el = laserWrapRef.current;
          if (el) {
            el.style.setProperty("--mx", `${x}px`);
            el.style.setProperty("--my", `${y}px`);
          }
        }}
        onMouseLeave={() => {
          const el = laserWrapRef.current;
          if (el) {
            el.style.setProperty("--mx", "-9999px");
            el.style.setProperty("--my", "-9999px");
          }
        }}
      >
        <LaserFlowErrorBoundary>
          <LaserFlow
            horizontalBeamOffset={0.0}
            verticalBeamOffset={0.12}
            color="#CF9EFF"
            horizontalSizing={0.5}
            verticalSizing={5}
            wispDensity={1}
            wispSpeed={15}
            wispIntensity={5}
            flowSpeed={0.35}
            flowStrength={0.25}
            fogIntensity={0.14}
            fogScale={0.18}
            fogFallSpeed={0.6}
            decay={1.1}
            falloffStart={1.2}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
          />
        </LaserFlowErrorBoundary>
      </motion.div>

      {/* Bordered content container */}
      <div className="homepage-content-border">
        <div className="homepage-content-inner">
          <motion.div style={{ scale: imageScale, x: imageX, width: "100%", maxWidth: "500px", aspectRatio: "3 / 4" }}>
            <PixelTransition
              firstContent={
                <div
                  className="homepage-photo-left"
                  style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    borderRadius: "var(--radius-md, 14px)",
                  }}
                >
                  <img
                    src="/mehak.jpeg"
                    alt="Mehak"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                    }}
                  />
                </div>
              }
              secondContent={
                <div
                  className="homepage-photo-left"
                  style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    borderRadius: "var(--radius-md, 14px)",
                  }}
                >
                  <img
                    src="/mehak.jpeg"
                    alt="Mehak"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      filter: "grayscale(100%)",
                      display: "block",
                    }}
                  />
                </div>
              }
              gridSize={8}
              pixelColor="#ffffff"
              once={false}
              animationStepDuration={0.4}
              className="pixel-transition-container"
            />
          </motion.div>

          <motion.div
            className="homepage-welcome"
            style={{ y: textY, opacity: textOpacity }}
          >
            <ShuffleText
              text="Hi, I'm Mehak!"
              as="h1"
              className="homepage-welcome-title"
              trigger="both"
              delay={200}
              speed={1.2}
            />
            <ShuffleText
              text="I'm a Full Stack Developer who enjoys building modern, responsive, and scalable web applications. From crafting intuitive user interfaces to developing robust backend systems, I love turning ideas into real-world products."
              as="p"
              className="homepage-welcome-desc"
              trigger="both"
              delay={700}
              speed={1.8}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
