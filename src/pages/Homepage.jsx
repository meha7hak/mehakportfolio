import { useRef, Component } from "react";
import Particles from "../components/Particles";
import LaserFlow from "../components/LaserFlow";
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
                        el.style.setProperty("--my", `${y + rect.height * 0.5}px`);
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
                        horizontalBeamOffset={0.1}
                        verticalBeamOffset={0.0}
                        color="#CF9EFF"
                        horizontalSizing={0.5}
                        verticalSizing={2}
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
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
                    >
                        {/* No text content inside LaserFlow – photo is in the bordered card on the left */}
                    </LaserFlow>
                </LaserFlowErrorBoundary>
            </div>

            {/* Bordered content area: your picture on the left, no text content */}
            <div className="homepage-content-border">
                <div className="homepage-content-inner">
                    <div className="homepage-photo-left">
                        <img
                            src="/mehak.jpeg"
                            alt="Mehak"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center",
                                borderRadius: "var(--radius-md, 14px)",
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Homepage;
