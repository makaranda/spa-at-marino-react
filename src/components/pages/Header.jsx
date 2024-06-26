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
      <header>
        <div className="header-top"></div>

        <div className="header-mid-area">
          <div className="container ">
            <div className="row">
              <div className="col-sm-6 col-xs-12">
                <div className="logo-area">
                  <a href="/">
                    <img src="assets/images/logo.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-bottom-area">
          <div className="container">
            <div className="row">
              <nav className="main-menu">
                <ul className="menu list">
                  <li>
                    <a className="active1" href="/">
                      Home
                    </a>
                  </li>
                  <li className="dropdown">
                    <Link
                      data-toggle="dropdown"
                      className="dropdown-toggle"
                      id="lol"
                      to="#"
                    >
                      Sofas <b className="caret"></b>
                    </Link>
                    <ul
                      className="dropdown-menu"
                      style={{ background: "#fff", marginTop: "-1px" }}
                    >
                      <li className="dropdown-menu2">
                        <a href="/sofa-sets" style={{ color: "#03244ebf" }}>
                          Sofa Sets
                        </a>
                      </li>
                      <li className="dropdown-menu2">
                        <a
                          href="/recliner-sofas"
                          style={{ color: "#03244ebf" }}
                        >
                          Recliner Sofas
                        </a>
                      </li>
                      <li className="dropdown-menu2">
                        <a
                          href="/corner-and-chaise-sofas"
                          style={{ color: "#03244ebf" }}
                        >
                          Corner & Chaise Sofas{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/single-seaters"
                          style={{ color: "#03244ebf" }}
                        >
                          Single Seaters
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/coffee-table-and-side-table">
                      Coffee Tables & Side Tables
                    </a>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="mobile-menu-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mobile-menu mean-container">
                  <div className="mean-bar">
                    <a
                      href="#"
                      class="meanmenu-reveal"
                      style={{ right: "0", left: "auto" }}
                      onClick={toggleHighlight}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </a>
                    <nav id="dropdown" className="mean-nav">
                      <ul
                        className={`${isHighlighted ? "menu" : "d-none menu"}`}
                      >
                        <li>
                          <a className="active1" href="/">
                            Home
                          </a>
                        </li>
                        <li className="dropdown">
                          <button
                            className="dropdown-toggle2"
                            type="button"
                            onClick={toggleHighlightTwo}
                            style={{
                              backgroundColor: "transparent",
                              padding: "10px 0 10px 20px",
                              border: "none",
                              fontSize: "12px",
                              color: "#666666",
                              fontWeight: "bold",
                              fontFamily: "Montserrat, sans-serif !important",
                              textTransform: "uppercase",
                            }}
                          >
                            Sofas <b className="caret"></b>
                          </button>
                          <ul
                            className={`${
                              isHighlightedTwo
                                ? "d-block dropdown-menu"
                                : "d-none dropdown-menu"
                            }`}
                            style={{ background: "#fff" }}
                          >
                            <li>
                              <a href="/sofa-sets">Sofa Sets</a>
                            </li>
                            <li>
                              <a href="/recliner-sofas">Recliner Sofas </a>
                            </li>
                            <li>
                              <a href="/corner-and-chaise-sofas">
                                Corner & Chaise Sofas
                              </a>
                            </li>
                            <li>
                              <a
                                href="/single-seaters"
                                style={{ color: "#03244ebf" }}
                              >
                                Single Seaters{" "}
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/coffee-table-and-side-table">
                            Coffee Tables & Side Tables
                          </a>
                        </li>
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
