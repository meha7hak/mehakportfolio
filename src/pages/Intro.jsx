import GridScan from "../components/GridScan";

const Intro = ({ onEnter }) => {
    return (
        <section
            style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                overflow: "hidden",
            }}
        >
            {/* Background */}
            <GridScan
                sensitivity={0.55}
                lineThickness={1}
                linesColor="#392e4e"
                gridScale={0.1}
                scanColor="#FF9FFC"
                scanOpacity={0.4}
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
                <h1>Signal Received!</h1>
                <button onClick={onEnter}>Proceed</button>
            </div>
        </section>
    );
};

export default Intro;
