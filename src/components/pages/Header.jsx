import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [isHighlightedTwo, setIsHighlighted2] = useState(false);
  // Function to toggle the state
  const toggleHighlight = () => {
    setIsHighlighted(!isHighlighted);
  };

  const toggleHighlightTwo = () => {
    setIsHighlighted2(!isHighlightedTwo);
    //console.log("Testing");
  };
  return (
    <div>
      <div className="progress-wrap cursor-pointer">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>

      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="logo-wrapper navbar-brand valign">
            <Link to="/">
              <div className="logo">
                <img
                  src="/assets/images/logo.png"
                  className="logo-img"
                  alt=""
                />
              </div>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar">
              <i className="ti-line-double"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <span className="nav-link active">
                  TREATMENTS <i className="ti-angle-down"></i>
                </span>
                <ul className="dropdown-menu last">
                  <li className="dropdown-item">
                    <Link to="/treatments/full-body-massage">
                      Full Body Massage
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/treatments/short-treatments">
                      Short Treatments
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/treatments/scrubs-and-wraps">
                      Scrubs and Wraps
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/treatments/hair-and-facials">
                      Hair and Facials
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/treatments/special-treatments">
                      Speciality Treatments
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/treatments/our-spa-package">
                      Our Spa Package
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/gallery">
                  Gallery
                </a>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
