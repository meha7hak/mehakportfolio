import Homepage from "./pages/Homepage";
import Intro from "./pages/Intro";
import { useState, Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "2rem",
          background: "var(--bg-primary, #0b0e14)",
          color: "var(--text-primary, #e6e6eb)",
          fontFamily: "system-ui, sans-serif",
          textAlign: "center",
        }}>
          <div>
            <h1 style={{ marginBottom: "0.5rem" }}>Something went wrong</h1>
            <pre style={{
              marginTop: "1rem",
              padding: "1rem",
              background: "rgba(255,255,255,0.06)",
              borderRadius: "8px",
              overflow: "auto",
              textAlign: "left",
              fontSize: "0.85rem",
            }}>
              {this.state.error?.message ?? String(this.state.error)}
            </pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [entered, setEntered] = useState(false);
  return (
    <ErrorBoundary>
      {!entered ? (
        <Intro onEnter={() => setEntered(true)} />
      ) : (
        <Homepage />
      )}
    </ErrorBoundary>
  );
}
export default App;