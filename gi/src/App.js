import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import VeryEasy from "./components/veryEasy";
import Medium from "./components/medium";
import Hard from "./components/hard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/">VeryEasy</Link>
            </li>
            <li>
              <Link to="/medium">Medium</Link>
            </li>
            <li>
              <Link to="/hard">Hard</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<VeryEasy />} />
          <Route path="/medium" element={<Medium />} />
          <Route path="/hard" element={<Hard />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
