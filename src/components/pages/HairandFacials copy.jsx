import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SideMenu from "./SideMenu";

export default function OurSpaPackage() {
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
                      <h5>Our Spa package</h5>
                    </div>
                  </div>

                  <div class="item">
                    <div class="post-img">
                      <a href="">
                        <img src="/assets/images/short_treatments.jpg" alt="" />
                      </a>
                    </div>

                    <div class="post-cont">
                      <blockquote>
                        <h5>Tonic Spa Escapade</h5>
                        <p>
                          We use himalayan salt glow for a deep exfoliation to
                          get rid of stubborn dead skin in your body, finally a
                          soothing one hour massage of your choice to complete
                          your spa experience
                        </p>
                        <h6 class="price">2 hours - USD 108</h6>
                      </blockquote>
                    </div>

                    <div class="post-cont">
                      <blockquote>
                        <h5>Spa-Liday Package </h5>
                        <p>
                          Restore your inner peace and re-balance your body and
                          mind with the treatment below for a real spa
                          experience. The ultimate pamper package perfect for
                          wellness gift giving or why not indulge yourself and
                          have some ‘me’ time
                        </p>
                        <h6 class="price">4 hours - USD 195 </h6>
                      </blockquote>
                    </div>

                    <div class="post-cont">
                      <blockquote>
                        <h5>Moroccan Hammam Experience</h5>

                        <h6 class="price">2 hours - USD 118 </h6>
                      </blockquote>
                    </div>

                    <div class="post-cont">
                      <blockquote>
                        <h5>Couple Package</h5>

                        <h6 class="price">100 min - USD 178 </h6>
                      </blockquote>
                    </div>

                    <div class="post-cont">
                      <blockquote>
                        <h5>Spa Combo</h5>

                        <h6 class="price">90 min - USD 88 </h6>
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
