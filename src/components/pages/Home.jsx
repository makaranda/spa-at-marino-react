import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="slider-area">
        <div className="bend niceties preview-2">
          <div id="mainslider" className="nivoSlider slider-image">
            <img src="assets/images/slider/slider10.jpg" alt="" />
            <img src="assets/images/slider/slider12.jpg" alt="" />
          </div>
          <div id="htmlcaption1" className="nivo-html-caption slider-caption-1">
            <div className="slider-progress"></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="slider-content">
                    <div
                      className="layer-1 wow bounceInRight"
                      data-wow-duration="1.5"
                      data-wow-delay=".5s "
                    >
                      <h2 className="title1">sofa chair</h2>
                    </div>
                    <div
                      className="layer-1-2 wow bounceInRight"
                      data-wow-duration="2"
                      data-wow-delay=".7s "
                    >
                      <p className="title2">
                        Furnishing your home made simple{" "}
                      </p>
                    </div>
                    <div
                      className="layer-1-3 wow bounceInUp"
                      data-wow-duration="1.5"
                      data-wow-delay=".9s "
                    >
                      <a href="#" className="ready-btn">
                        Shop It now!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="htmlcaption2" className="nivo-html-caption slider-caption-1">
            <div className="slider-progress"></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="slider-content">
                    <div
                      className="layer-1-1 wow slideInLeft"
                      data-wow-duration="1.5"
                      data-wow-delay=".5s "
                    >
                      <h2 className="title1">Lounge Chair </h2>
                    </div>
                    <div
                      className="layer-1-2 wow slideInLeft"
                      data-wow-duration="1.5"
                      data-wow-delay=".7s "
                    >
                      <p className="title2">
                        Furnishing your home made simple{" "}
                      </p>
                    </div>
                    <div
                      className="layer-1-3 wow bounceInUp"
                      data-wow-duration="1.5"
                      data-wow-delay=".9s "
                    >
                      <a href="#" className="ready-btn">
                        Shop It now!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
