import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "/src/openDyslexic.css";

function Header() {
  //Theme Toggle
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  //Font Toggle
  const [isDyslexicFont, setIsDyslexicFont] = useState(() => {
    return localStorage.getItem("dyslexia-font") === "enabled";
  });

  useEffect(() => {
    if (isDyslexicFont) {
      document.body.classList.add("use-open-dyslexic");
      localStorage.setItem("dyslexia-font", "enabled");
    } else {
      document.body.classList.remove("use-open-dyslexic");
      localStorage.setItem("dyslexia-font", "disabled");
    }
  }, [isDyslexicFont]);

  return (
    <header>
      <nav className="navbar navbar-expand-md bg-body-tertiary border-bottom gap-2">
        <div className="container-fluid">
          <div className="nav navbar-nav flex-row align-items-center">
            <Link to="/" className="mx-2">
              <img
                src="/img/DnD Logo.png"
                alt="DnD Logo"
                width="50"
                height="50"
                className="border border-1 rounded"
              />
            </Link>
            <Link className="nav-item nav-link" to="/spells">
              Spells
            </Link>
            <Link className="nav-item nav-link" to="/monsters">
              Monsters
            </Link>
            <Link className="nav-item nav-link" to="/classes">
              Classes
            </Link>
          </div>

          <div className="nav navbar-nav flex-row align-items-center justify-content-end gap-2">
            <button
              className={`btn ${isDyslexicFont ? "btn-outline-secondary" : "btn-outline-secondary"}`}
              onClick={() => setIsDyslexicFont(!isDyslexicFont)}
            >
              {isDyslexicFont
                ? "Disable Dyslexic Font"
                : "Enable Dyslexic Font"}
            </button>
            <button className="btn btn-outline-secondary" onClick={toggleTheme}>
              {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
