import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SideMenu from "./SideMenu";

export default function SpecialTreatments() {
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
                      <h5>Speciality Treatments</h5>
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
                        <h5>Tonic Signature Massage</h5>
                        <p>
                          Our most luxurious and all inclusive techniques
                          combined European and Asian free style massage paying
                          close attention to particular areas requiring TLC with
                          preferred pressure to relax and treat tired muscles
                          done by our most experienced and requested wellness
                          therapists will deliver an intensely therapeutic,
                          targeted and customized massage according to your
                          areas of concern.
                        </p>
                        <p>
                          A unique pre blended aromatherapy massage oil with
                          Frankincense, Lavender, Rosemary and Pine.
                        </p>
                        <h6 class="price">75 Minutes - USD 78 </h6>
                      </blockquote>
                    </div>

                    <div class="post-cont">
                      <blockquote>
                        <h5>Aromatherapy Facial</h5>
                        <p>
                          Your skin will get a fresh and young look. Double
                          cleanse and scrub for a more glowing look, tone –
                          hydrating mask and moisturize to smoothen the skin in
                          just 75minutes of pure facial massage with the use of
                          gua sha and jade roller to even out sk in tone. Fewer
                          wrinkles and any other factors associated with ageing
                          skin will v anish. Includes stress buster massage on
                          shoulders, neck and upper back, hand and arm massage
                          while on mask.
                        </p>
                        <h6 class="price">75 Minutes - USD 75 </h6>
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
