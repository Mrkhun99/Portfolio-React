import { useState } from "react";
import { useActiveSection, useTheme } from "../hooks";

const sections = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "contact",
];

function Navbar() {
  const active = useActiveSection(sections);
  const [theme, toggleTheme] = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          Limkhun<span>.</span>
        </a>
        <nav className={`nav-links ${open ? "open" : ""}`}>
          {sections.slice(1).map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {id[0].toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <button
            className="icon-btn menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
