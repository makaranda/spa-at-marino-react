import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SideMenu from "./SideMenu";

export default function Fullbodymessage() {
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
                      <h5>Head to Toe massage</h5>
                    </div>
                  </div>

                  <div class="item">
                    <div class="post-img">
                      <a href="">
                        <img src="/assets/images/full-body-page.jpg" alt="" />
                      </a>
                    </div>

                    <div class="post-cont">
                      <blockquote>
                        <h5>
                          Spa Escapade
                          <p class="testal">
                            A luxury spa experience with a guided journey to
                            well-being and balance.
                          </p>
                        </h5>
                      </blockquote>
                    </div>

                    <div class="post-cont">
                      <blockquote>
                        <h5>Asian Tradition</h5>
                        <p>
                          <span class="tag">Medium-to-strong.</span>
                          Holistically combines the best of Indigenous, Indian,
                          Chinese and Malay massage techniques for a soothing
                          experience connecting you with the Asian tradition.
                        </p>
                        <i class="ti-arrow-circle-right"></i>With essential oils
                        of Black Pepper, Lemongrass, Bergamot, Cinnamon
                        <br />
                        <h6 class="price">60 Minutes - USD 58 </h6>
                      </blockquote>
                    </div>

                    <div class="post-cont">
                      <blockquote>
                        <h5>Balinese</h5>
                        <p>
                          <span class="tag">Soft-to-medium.</span>A therapy of
                          Indonesian healing methods to relieve strain of tired
                          muscles and aching backs. Can be offered with stomach
                          and breast massage.
                        </p>
                        <i class="ti-arrow-circle-right"></i>With essential oils
                        of Frangipani, Patchouli , Lavender, Rose Geranium
                        <br />
                        <h6 class="price">60 Minutes - USD 58 </h6>
                      </blockquote>
                    </div>

                    <div class="post-cont">
                      <blockquote>
                        <h5>Californian</h5>
                        <p>
                          <span class="tag">Gentle.</span>Soothe your body, mind
                          and soul with gentle strokes applied from head-to-toe
                          promising tranquility for the senses. Increases
                          circulation and helps repair tissues.
                        </p>
                        <i class="ti-arrow-circle-right"></i>With essential oils
                        of Lavender, Geranium, Ylang Ylang (Sensuality),
                        Bergamot
                        <h6 class="price">60 Minutes - USD 58 </h6>
                      </blockquote>
                    </div>

                    <div class="post-cont">
                      <blockquote>
                        <h5>Classic</h5>
                        <p>
                          <span class="tag">Soft-to-medium.</span> A classic
                          Swedish rub, gentler than the Deep Tissue massage, For
                          pure relaxation and to ease physical fatigue and
                          tension.
                        </p>
                        <i class="ti-arrow-circle-right"></i>With essential oils
                        of Peppermint, Citrus, Rosemary, Lemongrass
                        <h6 class="price">60 Minutes - USD 58 </h6>
                      </blockquote>
                    </div>

                    <div class="post-cont">
                      <blockquote>
                        <h5>Deep Tissue</h5>
                        <p>
                          <span class="tag">Very strong.</span> Sustained
                          pressure is applied with slow, firm strokes using
                          thumbs and elbows to ease knots and relax deep muscle
                          tension. A whole-body therapy that focuses most on the
                          shoulders and lower back.
                        </p>
                        <i class="ti-arrow-circle-right"></i>With essential oils
                        of Rosemary, Patchouli, Lavender, Peppermint
                        <h6 class="price">60 Minutes - USD 58 </h6>
                      </blockquote>
                    </div>

                    <div class="post-cont">
                      <blockquote>
                        <h5>Combination</h5>
                        <p>
                          <span class="tag">Mixed Pressure</span> Can't decide?
                          We will tailor made according to what your body needs
                          amix of 3 chosen types above to meet your
                          expectations.Let us know your areas of concern, we
                          guarantee you are in good hands.
                        </p>
                        <i class="ti-arrow-circle-right"></i>Special oil to be
                        recommended by aromatherapist for an additional cost
                        <h6 class="price">60 Minutes - USD 68 </h6>
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
