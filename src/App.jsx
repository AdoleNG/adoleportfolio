import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Hero } from "./components/Hero";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { EducationSection } from "./components/EducationSection";
import { ProjectPage } from "./components/ProjectPage";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      {/* 🔵 Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">

          {/* Hamburger FIRST */}
          <button
            className="nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Nav links SECOND + push to right */}
          <ul
            className={`nav-links ${menuOpen ? "open" : ""}`}
            style={{ marginLeft: "auto" }}   // ⭐ THIS pushes links to the right
          >
            <li>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#education" onClick={() => setMenuOpen(false)}>
                Education
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
            <li>
              <a href="#resume" onClick={() => setMenuOpen(false)}>
                Resume
              </a>
            </li>
          </ul>

        </div>
      </nav>

      {/* 🔵 Main Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero />

              <div id="projects">
                <ProjectsSection />
              </div>

              <div id="education">
                <EducationSection />
              </div>

              <div id="contact">
                <ContactSection />
              </div>

              <div id="resume"></div>
            </div>
          }
        />

        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
