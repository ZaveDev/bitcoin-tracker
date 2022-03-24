import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
  const toggleMode = (e) => {
    e.preventDefault();
    console.log(darkMode);
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div>
        <div>{darkMode ? <FaMoon /> : <FaSun />}</div>
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={darkMode ? "toggle toggled" : "toggle"}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
