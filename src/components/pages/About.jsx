import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function About() {
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
              <h1>About Us</h1>
            </div>
          </div>
        </div>
      </div>

      <section class="about section-padding paddin">
        <div class="container">
          <div class="row">
            <div
              class="col-md-6 mb-30 animate-box"
              data-animate-effect="fadeInUp"
            >
              <span>
                <i class="star-rating"></i>
                <i class="star-rating"></i>
                <i class="star-rating"></i>
                <i class="star-rating"></i>
                <i class="star-rating"></i>
              </span>
              <div class="section-subtitle">
                Enjoy the best moment of your life
              </div>
              <div class="section-title">Welcome to the best spa in town..</div>
              <p class="textj">
                Spa at Marino operated by Tonic Lanka sets the new benchmark for
                the spa industry by allowing you to enjoy the most luxurious
                experience that you could have ever imagined. The magical touch
                of our expert therapists with their unique techniques will usher
                you to heavenly peacefulness.
              </p>

              <p class="textj">
                The pleasant atmosphere is specially designed with extraordinary
                patterns, soothing shades, sensational aroma, and soft lighting
                to promote tranquility at its very core for a star-class therapy
                session.
              </p>

              <p class="textj">
                The use of our very own branded balms, herbs, and essential oils
                developed using special blends of the finest organic ingredients
                will encourage soothing relaxation with a touch of nature.
              </p>

              <p class="textj">
                Spa at Marino is the right choice to uplift your spirit with a
                completely rejuvenated mind and body.
              </p>
            </div>

            <div class="col col-md-6" data-animate-effect="fadeInUp">
              <img src="/assets/images/about-us.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
