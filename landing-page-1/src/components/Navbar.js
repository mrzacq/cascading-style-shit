import { useState } from "react";
import Logo from "../assets/images/logo.png";

function Navbar() {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <a href="#main" className="logo">
        <img src={Logo} alt="Logo" />
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label htmlFor="menu-btn" className="menu-icon">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="#main">Home</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#presentation">UI</a>
        </li>
        <li>
          <a href="#download">Download</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
