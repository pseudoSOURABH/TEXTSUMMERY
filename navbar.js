import React from "react";
import PropTypes from "prop-types";
// import { Link } from 'react-router-dom'


export default function Navbar(probs) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${
        probs.mode === "light" ? "white" : "white"
      } bg-${probs.mode === "light" ? "dark" : "dark"}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {probs.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/about">
                {probs.aboutText}
              </Link>
            </li> */}
          </ul>
          {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contact us
              </a> */}
          {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul> */}
          {/* </li> */}
          {/* <li className="nav-item">
              <a className="nav-link disabled" href="/">
                Disabled
              </a>
            </li>
          </ul> */}
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-danger" type="submit">
              Search
            </button>
          </form> */}

          <div
            className={`form-check form-switch  text-${
              probs.mode === "dark" ? "white" : "white"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={probs.toggleMode}
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label  "
              htmlFor="flexSwitchCheckDefault "
            >
              Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  // title: PropTypes.string.isRequired    when we strictly want to pass title in app.js
  aboutText: PropTypes.string,
};

//we can also set default prop probs
Navbar.defaultProps = {
  title: "enter title",
  aboutText: "enter about",
};

//it works when we dont pas argument there in app.js's component.
