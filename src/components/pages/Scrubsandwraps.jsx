import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SideMenu from "./SideMenu";

export default function Scrubsandwraps() {
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
                        <h5>Scrubs and Wraps</h5>
                      </h5>
                    </div>
                  </div>

                  <div class="item">
                    <div class="post-img">
                      <a href="">
                        <img src="/assets/images/scrubs.jpg" alt="" />
                      </a>
                    </div>

                    <div class="post-cont">
                      <blockquote>
                        <h5>Detox – me scrub & wrap</h5>
                        <p>
                          Coffee based scrub for a good natural detox and clear
                          skin impurities and improve blood circulation. Gets
                          rid of cellulite if done regularly.{" "}
                        </p>
                        <h6 class="price">30 minutes - USD 68</h6>
                      </blockquote>
                    </div>

                    <div class="post-cont">
                      <blockquote>
                        <h5>Himalayan salt scrub</h5>
                        <p>
                          A full body exfoliating scrub to let your skin breathe
                          by unclogging pores; regenerates skin cells for a
                          smooth, glowing baby skin feel.{" "}
                        </p>
                        <h6 class="price">30 minutes - USD 58</h6>
                      </blockquote>
                    </div>

                    <div class="post-cont">
                      <blockquote>
                        <h5>Clay cocoon wrap</h5>
                        <p>
                          A powerful healing detoxifying clay wrap to help tone
                          and cleanse. The added essential oil of lemongrass
                          further enhances the effect. Includes acupressure
                          massage while on a cocoon wrap.
                        </p>
                        <h6 class="price">30 minutes - USD 68</h6>
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
