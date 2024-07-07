import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <nav>
        <h2>Fib Calculator</h2>
        <Link to="/">Home</Link> <br />
        <Link to="/otherpage">Other Page</Link>
      </nav>
      <Routes>
        <Route index path="/" element={<Fib />} />
        <Route path="/otherpage" element={<OtherPage />} />
      </Routes>
    </>
  );
}

export default App;
