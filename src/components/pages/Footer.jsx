import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="footer-top textcenter">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="logo">
                  <img
                    src="assets/images/fslogo.png"
                    class="fslogo-img"
                    alt=""
                  />
                </div>
                <div class="footer-column footer-about">
                  <p class="footer-about-text">
                    Spa at Marino is the right choice to uplift your spirit with
                    a completely rejuvenated mind and body.
                  </p>
                </div>
              </div>

              <div class="col-md-12">
                <div class="footer-column footer-contact">
                  <h3 class="footer-title mab">Contact</h3>
                  <p class="footer-contact-text">
                    7<sup>th</sup> Floor - Marino Mall, 590 Galle Road, Colombo
                    03.
                  </p>
                  <div class="footer-contact-info">
                    <p class="footer-contact-phone ">
                      <img class="fcall" src="assets/images/2101281-02.png" />
                      +94 11 255 0171 <br />
                      <img class="fcall" src="assets/images//2101281-03.png" />
                      +94 78 470 8987
                    </p>
                    <p class="footer-contact-mail">
                      <a href="contact.html">spa@marinomall.com</a>
                    </p>
                  </div>

                  <div class="logo">
                    <img
                      src="assets/images/flogo.png"
                      class="flogo-img"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="footer-bottom-inner">
                  <p class="footer-bottom-copy-right">
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
