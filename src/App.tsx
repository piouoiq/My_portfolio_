import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router";
import HomePage from "./assets/Pages/HomePage";
import ProjectPage from "./assets/Pages/ProjectPage";
import Curriculum from "./assets/Pages/curriculum";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProjectPage" element={<ProjectPage />} />
        <Route path="/Curriculum" element={<Curriculum />} />
      </Routes>
    </Router>
  );
}

export default App;
