import Particles from "../components/Particles";

const Homepage = () => {
    return (
        <>
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
                    particleCount={1500}
                    particleSpread={15}
                    speed={0.2}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />

            </section>
        </>
    );
};

export default Homepage;
