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
                        horizontalBeamOffset={-0.48}    // Start from top-left (left edge of border)
                        verticalBeamOffset={0.12}       // End/Flare at top border of content
                        color="#CF9EFF"

                        horizontalSizing={0.25}         // Perfect width beam
                        verticalSizing={3.2}            // Full height beam with slight overflow

                        wispDensity={0.8}               // Minimal wisps for cleaner look
                        wispSpeed={2.5}                 // Very slow, subtle wisp movement
                        wispIntensity={15}              // Strong but controlled wisp presence

                        flowSpeed={0.15}                // Very slow, smooth flow
                        flowStrength={1.0}              // Maximum flow strength

                        fogIntensity={1.8}              // Strong, dense fog
                        fogScale={0.25}                 // Very fine fog particles
                        fogFallSpeed={0.3}              // Slow, controlled fog fall

                        decay={0.5}                     // Very sharp decay
                        falloffStart={0.85}             // Immediate falloff

                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            width: "100%",
                            height: "100%",
                            pointerEvents: "none"
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
