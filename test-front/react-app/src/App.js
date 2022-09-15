import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Resume from "./Components/Resume/Resume";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume/:id" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
