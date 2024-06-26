import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SideMenu from "./SideMenu";

export default function HairandFacials() {
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
              <h1>Treatments</h1>
            </div>
          </div>
        </div>
      </div>

      <section class="news2 section-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <div class="row">
                <div class="col-md-12">
                  <div class="post-cont textcenter paddint">
                    <div class="widget-title">
                      <h5>
                        <h5>Hair and facials</h5>
                      </h5>
                    </div>
                  </div>

                  <div class="item">
                    <div class="post-img">
                      <a href="">
                        <img src="/assets/images/hair.jpg" alt="" />
                      </a>
                    </div>

                    <div class="post-cont">
                      <blockquote>
                        <h5>Malay Strength</h5>
                        <p>
                          Malaysia’s traditional hair treatment with light
                          massages on the scalp, neck and shoulders. A powerful
                          treatment to relax the mind with rhythmical touch.{" "}
                        </p>
                        <i class="ti-arrow-circle-right"></i>Choose from:
                        Oatmeal & Pineapple OR Oatmeal & Olive
                        <h6 class="price">30 Minutes - USD 30 </h6>
                      </blockquote>
                    </div>

                    <div class="post-cont">
                      <blockquote>
                        <h5>Gua Sha Facial</h5>
                        <p>
                          Gua Sha encourages collagen production (strength in
                          cells). It sculpts and tones the face shape, allowing
                          inflammation to drain and muscles to become free of
                          tension.{" "}
                        </p>
                        <h6 class="price">60 Minutes - USD 60 </h6>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <SideMenu />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
