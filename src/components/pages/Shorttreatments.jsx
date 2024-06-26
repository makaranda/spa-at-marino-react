import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SideMenu from "./SideMenu";

export default function Shorttreatments() {
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
                        <h5>Short Treatments</h5>
                      </h5>
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
                        <h5>Head, Neck & Shoulder</h5>
                        <p>
                          A soothing treatment focusing on your trapezius muscle
                          goes across your shoulders and extends to the middle
                          of your back to ease away tension and stress on your
                          neck.{" "}
                        </p>
                        <h6 class="price">30 Minutes - USD 28 </h6>
                      </blockquote>
                    </div>

                    <div class="post-cont">
                      <blockquote>
                        <h5>Foot & Leg</h5>
                        <p>
                          A restorative foot treatment to improve circulation
                          and reduce leg muscle cramp and stiffness and pain.{" "}
                        </p>
                        <h6 class="price">30 Minutes - USD 30 </h6>
                      </blockquote>
                    </div>

                    <div class="post-cont">
                      <blockquote>
                        <h5>Full Back With Oil</h5>
                        <p>
                          A traditional massage soothing back and shoulder
                          tension at pressure of your choice.
                        </p>
                        <p>
                          Using essential oils of your selection from our six
                          signature oils.{" "}
                        </p>
                        <h6 class="price">30 Minutes - USD 35 </h6>
                      </blockquote>
                    </div>

                    <div class="post-cont">
                      <blockquote>
                        <h5>Ear Candling</h5>
                        <p>
                          Therapeutic treatment not only feels good but also has
                          medicinal benefits such as
                        </p>
                        <p>
                          increasing blood flow, pain relief on your torso,
                          upper and lower back.
                        </p>
                        <h6 class="price">30 Minutes - USD 38 </h6>
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
