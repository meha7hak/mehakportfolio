/* eslint-disable no-unused-vars */
import { useRef, useState, Component } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import LaserFlow from "./LaserFlow";
import Lanyard from "./Lanyard";
import FoldText from "./FoldText";
import WarpText from "./WarpText";
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

class LanyardErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Lanyard Error caught in boundary:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const checkWebGL = () => {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
};

const LanyardFallback = () => (
  <div className="homepage-photo-left">
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
);

const Hero = () => {
  const heroRef = useRef(null);
  const laserWrapRef = useRef(null);
  const [hasWebGL] = useState(() => checkWebGL());
  const shouldReduceMotion = useReducedMotion();

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
  const motionImageStyle = shouldReduceMotion ? {} : { scale: imageScale, x: imageX };
  const motionTextStyle = shouldReduceMotion ? {} : { y: textY, opacity: textOpacity };
  const laserStyle = shouldReduceMotion ? { zIndex: 4 } : { zIndex: 4, opacity: laserOpacity };

  return (
    <section id="home" ref={heroRef} className="hero-section">
      {/* 2. LaserFlow on top of particles, with image card inside its container */}
      <motion.div
        ref={laserWrapRef}
        className="homepage-laser-wrap"
        style={laserStyle}
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
          <div className="hero-visual-zone">
            <p className="hero-identity" aria-label="Aspiring Full Stack Dev">
              <span>Aspiring</span>
              <span>Full Stack</span>
              <span>Dev</span>
            </p>

            <motion.div
              className="hero-lanyard-container"
              style={motionImageStyle}
            >
              {hasWebGL ? (
                <LanyardErrorBoundary fallback={<LanyardFallback />}>
                  <Lanyard
                    position={[0, 0, 22]}
                    gravity={[0, -40, 0]}
                    frontImage="/mehak.jpeg"
                    imageFit="cover"
                  />
                </LanyardErrorBoundary>
              ) : (
                <LanyardFallback />
              )}
            </motion.div>
          </div>

          <div className="hero-divider" aria-hidden="true" />

          <motion.div
            className="homepage-welcome"
            style={motionTextStyle}
          >
            <div className="hero-copy">
              <p className="hero-kicker">01 / FULL STACK DEVELOPER</p>
              <h1 className="homepage-welcome-title">
                <FoldText
                  text="Hi, I'm Mehak!"
                  splitBy="char"
                  hinge="top"
                  trigger="mount"
                  duration={5}
                  stagger={0.065}
                  ease="power3.out"
                  perspective={700}
                  creaseShading={0.5}
                  fontSize="inherit"
                  fontWeight="inherit"
                  color="inherit"
                />
              </h1>
              <p className="hero-statement">CRAZY AND CREATIVE DEV.</p>
              <WarpText
                text="Full Stack Developer focused on building modern, responsive web applications, from intuitive interfaces to scalable backend systems."
                color="#e2d9f3"
                warpStrength={0.06}
                warpScale={1.6}
                speed={0.45}
                pointerInfluence={0.38}
                pointerStrength={0.32}
                refraction={0.014}
                ripple
                fontSize="clamp(0.95rem, 1.3vw, 1.15rem)"
                fontWeight={400}
                fontFamily="inherit"
                letterSpacing="0em"
                lineHeight={1.6}
                style={{ width: "min(100%, 600px)", height: "150px" }}
              />
            </div>

            <div className="hero-actions" aria-label="Hero links">
              <div className="hero-social-links">
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
              <a
                className="hero-resume-link"
                href="/resume/MehakkResume75.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
