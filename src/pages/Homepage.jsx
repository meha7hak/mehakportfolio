import Particles from "../components/Particles";

const Homepage = () => {
    return (
        <>
            {/* Hero Section */}
            <section
                style={{
                    width: "100%",
                    height: "100vh",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <Particles
                    particleColors={["#ffffff", "#ffffff"]}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />

                {/* Hero Content */}
                <div style={{ position: "relative", zIndex: 1 }}>
                    {/* Your name, tagline, buttons */}
                </div>
            </section>
        </>
    );
};

export default Homepage;
