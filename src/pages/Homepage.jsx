import { useRef, Component } from "react";
import Particles from "../components/Particles";
import LaserFlow from "../components/LaserFlow";
import PixelTransition from "../components/PixelTransition";
import "./Homepage.css";

class LaserFlowErrorBoundary extends Component {
    state = { hasError: false };
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            return <div className="homepage-laser-wrap" style={{ background: "transparent" }} />;
        }
        return this.props.children;
    }
}

const Homepage = () => {
    const laserWrapRef = useRef(null);

    return (
        <section className="homepage-section">
            {/* 1. Particles in the back */}
            <div className="homepage-particles-wrap">
                <Particles
                    particleColors={["#ffffff", "#ffffff"]}
                    particleCount={1500}
                    particleSpread={15}
                    speed={0.2}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>

            {/* 2. LaserFlow on top of particles, with image card inside its container */}
            <div
                ref={laserWrapRef}
                className="homepage-laser-wrap"
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
  horizontalBeamOffset={0.96}     // right side
  verticalBeamOffset={0.5}

  color="#CF9EFF"

  horizontalSizing={0.45}
  verticalSizing={2.0}

  wispDensity={2}
  wispSpeed={6}
  wispIntensity={10}

  flowSpeed={0.6}
  flowStrength={0.8}

  fogIntensity={1.2}
  fogScale={0.6}
  fogFallSpeed={1.2}

  decay={0.3}                    // FAST startup

  falloffStart={1.0}

  style={{
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
  }}
>
</LaserFlow>
                </LaserFlowErrorBoundary>
            </div>

            <div className="homepage-content-border">
                <div className="homepage-content-inner">
                    <PixelTransition
                        firstContent={
                            <div className="homepage-photo-left" style={{
                                width: "100%",
                                height: "100%",
                                overflow: "hidden",
                                borderRadius: "var(--radius-md, 14px)"
                            }}>
                                <img
                                    src="/mehak.jpeg"
                                    alt="Mehak"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        objectPosition: "center",
                                        display: "block"
                                    }}
                                />
                            </div>
                        }
                        secondContent={
                            <div className="homepage-photo-left" style={{
                                width: "100%",
                                height: "100%",
                                overflow: "hidden",
                                borderRadius: "var(--radius-md, 14px)"
                            }}>
                                <img
                                    src="/mehak.jpeg"
                                    alt="Mehak"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        objectPosition: "center",
                                        filter: "grayscale(100%)",
                                        display: "block"
                                    }}
                                />
                            </div>
                        }
                        gridSize={8}
                        pixelColor='#ffffff'
                        once={false}
                        animationStepDuration={0.4}
                        className="pixel-transition-container"
                    />
                </div>
            </div>
        </section>
    );
};

export default Homepage;
