import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      <div class="preloader-bg"></div>
      <div id="preloader">
        <div id="preloader-status">
          <div class="preloader-position loader">
            <span></span>
          </div>
        </div>
      </div>

      <div class="progress-wrap cursor-pointer">
        <svg
          class="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>

      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <div class="logo-wrapper navbar-brand valign">
            <Link to="/">
              <div class="logo">
                <img src="/assets/images/logo.png" class="logo-img" alt="" />
              </div>
            </Link>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="icon-bar">
              <i class="ti-line-double"></i>
            </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item dropdown">
                <span class="nav-link active">
                  TREATMENTS <i class="ti-angle-down"></i>
                </span>
                <ul class="dropdown-menu last">
                  <li class="dropdown-item">
                    <Link to="full-body-massage">Full Body Massage </Link>
                  </li>
                  <li class="dropdown-item">
                    <Link href="short-treatments">Short Treatments</Link>
                  </li>
                  <li class="dropdown-item">
                    <Link href="scrubs-and_wraps">Scrubs and Wraps</Link>
                  </li>
                  <li class="dropdown-item">
                    <Link href="hair-and-facials">Hair and Facials</Link>
                  </li>
                  <li class="dropdown-item">
                    <Link href="special">Speciality Treatments</Link>
                  </li>
                  <li class="dropdown-item">
                    <Link href="our-spa-package">Our Spa Package</Link>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/products">
                  Products
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/gallery">
                  Gallery
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/about">
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
