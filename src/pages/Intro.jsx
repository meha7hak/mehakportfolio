import GridScan from "../components/GridScan";
import FuzzyText from "../components/Fuzzy";

const Intro = ({ onEnter }) => {
    return (
        <section
            style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                overflow: "hidden",
                backgroundColor: "var(--bg-primary, #0b0e14)",
            }}
        >
            {/* Background */}
            <GridScan
                sensitivity={0.5}
                lineThickness={1}
                linesColor="#EA7B7B"
                gridScale={0.1}
                scanColor="#D25353"
                scanOpacity={0.2}
                enablePost
                bloomIntensity={0.6}
                chromaticAberration={0.002}
                noiseIntensity={0.01}
                style={{
                    position: "absolute",
                    inset: 0,
                }}
            />

            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1.5rem",
                    textAlign: "center",
                }}
            >
                <FuzzyText
                    baseIntensity={0.2}
                    hoverIntensity={0.5}
                    enableHover
                    fontSize="clamp(2rem, 5vw, 4rem)"
                >
                    Signal Received!
                </FuzzyText>
                <button onClick={onEnter}>Proceed</button>
            </div>
        </section>
    );
};

export default Intro;
