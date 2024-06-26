import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function () {
  return (
    <div>
      <Header />
      <div
        className="banner-header section-padding valign bg-img bg-fixed"
        data-overlay-dark="4"
        data-background="/assets/images/headerimg.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 caption mt-90">
              <h1>Gallery</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6 gallery-item">
              <a
                href="/assets/images/gallery/g1.jpg"
                title=""
                className="img-zoom"
              >
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img
                      src="/assets/images/gallery/g1.jpg"
                      className="img-fluid mx-auto d-block"
                      alt="work-img"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 gallery-item">
              <a
                href="/assets/images/gallery/g2.jpg"
                title=""
                className="img-zoom"
              >
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img
                      src="/assets/images/gallery/g2.jpg"
                      className="img-fluid mx-auto d-block"
                      alt="work-img"
                    />
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-4 gallery-item">
              <a
                href="/assets/images/gallery/g5.jpg"
                title=""
                className="img-zoom"
              >
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img
                      src="/assets/images/gallery/g5.jpg"
                      className="img-fluid mx-auto d-block"
                      alt="work-img"
                    />
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-4 gallery-item">
              <a
                href="/assets/images/gallery/g7a.jpg"
                title=""
                className="img-zoom"
              >
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img
                      src="/assets/images/gallery/g7.jpg"
                      className="img-fluid mx-auto d-block"
                      alt="work-img"
                    />
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-4 gallery-item">
              <a
                href="/assets/images/gallery/g6.jpg"
                title=""
                className="img-zoom"
              >
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img
                      src="/assets/images/gallery/g6.jpg"
                      className="img-fluid mx-auto d-block"
                      alt="work-img"
                    />
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-6 gallery-item">
              <a
                href="/assets/images/gallery/g3.jpg"
                title=""
                className="img-zoom"
              >
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img
                      src="/assets/images/gallery/g3.jpg"
                      className="img-fluid mx-auto d-block"
                      alt="work-img"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 gallery-item">
              <a
                href="/assets/images/gallery/g4.jpg"
                title=""
                className="img-zoom"
              >
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img
                      src="/assets/images/gallery/g4.jpg"
                      className="img-fluid mx-auto d-block"
                      alt="work-img"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
