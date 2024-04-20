import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="images/logo.png" alt="logo" style={{ width: "100px" }} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Amanda Rahmat Hidayat
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="/achievement"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Achievement
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/myskills"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                My Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/myprojects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                My Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/certification"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Certification
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
