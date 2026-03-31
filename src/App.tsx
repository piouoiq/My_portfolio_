import "./App.css";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router";
import HomePage from "./assets/Pages/HomePage";
import ProjectPage from "./assets/Pages/ProjectPage";
import Curriculum from "./assets/Pages/curriculum";
import NotFound from "./assets/Pages/NotFound";
import { useState } from "react";
import { LangContext } from "./assets/Components/Sections/LangContext";

function App() {
  const [lang, setLang] = useState<"FR" | "EN">("EN");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ProjectPage" element={<ProjectPage />} />
          <Route path="/Curriculum" element={<Curriculum />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
    </LangContext.Provider>
  );
}

export default App;
