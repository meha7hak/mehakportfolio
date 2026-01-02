import Homepage from "./pages/Homepage";
import Intro from "./pages/Intro";
import { useState } from "react";

function App() {
  const [entered, setEntered] = useState(false);
  return (
    <>
      {!entered ? (
        <Intro onEnter={() => setEntered(true)} />
      ) : (
        <Homepage />
      )}
    </>
  );
}
export default App;