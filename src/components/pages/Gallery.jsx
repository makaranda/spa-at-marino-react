import React, { useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "waypoints/lib/jquery.waypoints.min.js";
import Header from "./Header";
import Footer from "./Footer";
import $ from "jquery";
import baguetteBox from "baguettebox.js";
import "baguettebox.js/dist/baguetteBox.min.css";

export default function () {
  const galleryRef = useRef(null);
  useEffect(() => {
    // MagnificPopup Gallery
    // if (galleryRef.current) {
    //   $(galleryRef.current).magnificPopup({
    //     delegate: ".popimg",
    //     type: "image",
    //     gallery: {
    //       enabled: true,
    //     },
    //   });

    //   $(".img-zoom").magnificPopup({
    //     type: "image",
    //     closeOnContentClick: true,
    //     mainClass: "mfp-fade",
    //     gallery: {
    //       enabled: true,
    //       navigateByImgClick: true,
    //       preload: [0, 1],
    //     },
    //   });

    //   $(".magnific-youtube, .magnific-vimeo, .magnific-custom").magnificPopup({
    //     disableOn: 700,
    //     type: "iframe",
    //     mainClass: "mfp-fade",
    //     removalDelay: 300,
    //     preloader: false,
    //     fixedContentPos: false,
    //   });
    // }

    baguetteBox.run(".gallery", {
      // Custom options
      captions: true,
      buttons: "auto",
      fullScreen: false,
      noScrollbars: false,
      bodyClass: "baguetteBox-open",
      titleTag: false,
      async: false,
      preload: 2,
      animation: "slideIn",
      afterShow: null,
      afterHide: null,
      onChange: null,
      overlayBackgroundColor: "rgba(0,0,0,.8)",
    });
  }, []);
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
          <div class="row gallery" ref={galleryRef}>
            <div class="col-md-6 gallery-item">
              <a href="/assets/images/gallery/g1.jpg" title="" class="img-zoom">
                <div class="gallery-box">
                  <div class="gallery-img">
                    <img
                      src="/assets/images/gallery/g1.jpg"
                      class="img-fluid mx-auto d-block"
                      alt="work-img"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-6 gallery-item">
              <a href="/assets/images/gallery/g2.jpg" title="" class="img-zoom">
                <div class="gallery-box">
                  <div class="gallery-img">
                    <img
                      src="/assets/images/gallery/g2.jpg"
                      class="img-fluid mx-auto d-block"
                      alt="work-img"
                    />
                  </div>
                </div>
              </a>
            </div>

            <div class="col-md-4 gallery-item">
              <a href="/assets/images/gallery/g5.jpg" title="" class="img-zoom">
                <div class="gallery-box">
                  <div class="gallery-img">
                    <img
                      src="/assets/images/gallery/g5.jpg"
                      class="img-fluid mx-auto d-block"
                      alt="work-img"
                    />
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
                    <img
                      src="/assets/images/gallery/g7.jpg"
                      class="img-fluid mx-auto d-block"
                      alt="work-img"
                    />
                  </div>
                </div>
              </a>
            </div>

            <div class="col-md-4 gallery-item">
              <a href="/assets/images/gallery/g6.jpg" title="" class="img-zoom">
                <div class="gallery-box">
                  <div class="gallery-img">
                    <img
                      src="/assets/images/gallery/g6.jpg"
                      class="img-fluid mx-auto d-block"
                      alt="work-img"
                    />
                  </div>
                </div>
              </a>
            </div>

            <div class="col-md-6 gallery-item">
              <a href="/assets/images/gallery/g3.jpg" title="" class="img-zoom">
                <div class="gallery-box">
                  <div class="gallery-img">
                    <img
                      src="/assets/images/gallery/g3.jpg"
                      class="img-fluid mx-auto d-block"
                      alt="work-img"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-6 gallery-item">
              <a href="/assets/images/gallery/g4.jpg" title="" class="img-zoom">
                <div class="gallery-box">
                  <div class="gallery-img">
                    <img
                      src="/assets/images/gallery/g4.jpg"
                      class="img-fluid mx-auto d-block"
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
