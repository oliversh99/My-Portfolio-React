import React from "react";
import { Link } from "react-router-dom";

const styles = {
  nav: {
    padding: 25,
    // backgroundColor: "#9433d274",
    // BACKROUND COLOR
  },
  mainHeader: {
    fontSize: 55,
  },
  navbarTabs: {
    fontSize: 35,
  },
};

function NavBars() {
  return (
    <nav
    className="navbar navbar-expand-lg navbar-dark bg-primary"
     
    // className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={styles.nav}
    >
      <Link className="navbar-brand mx-auto" to="/" style={styles.mainHeader}>
        OLivar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto" style={styles.navbarTabs}>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/resume" className="nav-link">
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBars;
