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
                        horizontalBeamOffset={-0.18}
                        verticalBeamOffset={0.12}
                        color="#CF9EFF"

                        horizontalSizing={0.5}
                        verticalSizing={5}

                        wispDensity={1}
                        wispSpeed={15}
                        wispIntensity={5}

                        flowSpeed={0.35}
                        flowStrength={0.25}

                        fogIntensity={0.45}
                        fogScale={0.3}
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
