import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-top textcenter">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="logo">
                  <img
                    src="assets/images/fslogo.png"
                    className="fslogo-img"
                    alt=""
                  />
                </div>
                <div className="footer-column footer-about">
                  <p className="footer-about-text">
                    Spa at Marino is the right choice to uplift your spirit with
                    a completely rejuvenated mind and body.
                  </p>
                </div>
              </div>

              <div className="col-md-12">
                <div className="footer-column footer-contact">
                  <h3 className="footer-title mab">Contact</h3>
                  <p className="footer-contact-text">
                    7<sup>th</sup> Floor - Marino Mall, 590 Galle Road, Colombo
                    03.
                  </p>
                  <div className="footer-contact-info">
                    <p className="footer-contact-phone ">
                      <img
                        className="fcall"
                        src="assets/images/2101281-02.png"
                      />
                      +94 11 255 0171 <br />
                      <img
                        className="fcall"
                        src="assets/images//2101281-03.png"
                      />
                      +94 78 470 8987
                    </p>
                    <p className="footer-contact-mail">
                      <a href="contact.html">spa@marinomall.com</a>
                    </p>
                  </div>

                  <div className="logo">
                    <img
                      src="assets/images/flogo.png"
                      className="flogo-img"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="footer-bottom-inner">
                  <p className="footer-bottom-copy-right">
                    © Copyright 2022 by
                    <a href="https://www.spaatmarino.com">
                      www.spaatmarino.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
