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
        class="banner-header section-padding valign bg-img bg-fixed"
        data-overlay-dark="4"
        data-background="/assets/images/headerimg.jpg"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12 caption mt-90">
              <h1>Gallery</h1>
            </div>
          </div>
        </div>
      </div>

      <section class="section-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-6 gallery-item">
              <a href="/assets/images/gallery/g1.jpg" title="" class="img-zoom">
                <div class="gallery-box">
                  <div class="gallery-img">
                    {" "}
                    <img
                      src="/assets/images/gallery/g1.jpg"
                      class="img-fluid mx-auto d-block"
                      alt="work-img"
                    />{" "}
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-6 gallery-item">
              <a href="/assets/images/gallery/g2.jpg" title="" class="img-zoom">
                <div class="gallery-box">
                  <div class="gallery-img">
                    {" "}
                    <img
                      src="/assets/images/gallery/g2.jpg"
                      class="img-fluid mx-auto d-block"
                      alt="work-img"
                    />{" "}
                  </div>
                </div>
              </a>
            </div>

            <div class="col-md-4 gallery-item">
              <a href="/assets/images/gallery/g5.jpg" title="" class="img-zoom">
                <div class="gallery-box">
                  <div class="gallery-img">
                    {" "}
                    <img
                      src="/assets/images/gallery/g5.jpg"
                      class="img-fluid mx-auto d-block"
                      alt="work-img"
                    />{" "}
                  </div>
                </div>
              </a>
            </div>

            <div class="col-md-4 gallery-item">
              <a
                href="/assets/images/gallery/g7a.jpg"
                title=""
                class="img-zoom"
              >
                <div class="gallery-box">
                  <div class="gallery-img">
                    {" "}
                    <img
                      src="/assets/images/gallery/g7.jpg"
                      class="img-fluid mx-auto d-block"
                      alt="work-img"
                    />{" "}
                  </div>
                </div>
              </a>
            </div>

            <div class="col-md-4 gallery-item">
              <a href="/assets/images/gallery/g6.jpg" title="" class="img-zoom">
                <div class="gallery-box">
                  <div class="gallery-img">
                    {" "}
                    <img
                      src="/assets/images/gallery/g6.jpg"
                      class="img-fluid mx-auto d-block"
                      alt="work-img"
                    />{" "}
                  </div>
                </div>
              </a>
            </div>

            <div class="col-md-6 gallery-item">
              <a href="/assets/images/gallery/g3.jpg" title="" class="img-zoom">
                <div class="gallery-box">
                  <div class="gallery-img">
                    {" "}
                    <img
                      src="/assets/images/gallery/g3.jpg"
                      class="img-fluid mx-auto d-block"
                      alt="work-img"
                    />{" "}
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-6 gallery-item">
              <a href="/assets/images/gallery/g4.jpg" title="" class="img-zoom">
                <div class="gallery-box">
                  <div class="gallery-img">
                    {" "}
                    <img
                      src="/assets/images/gallery/g4.jpg"
                      class="img-fluid mx-auto d-block"
                      alt="work-img"
                    />{" "}
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
