import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <header className="header slider-fade">
        <div className="owl-carousel owl-theme">
          <div
            className="text-center item bg-img"
            data-overlay-dark="2"
            data-background="/assets/images/spa-slider01.jpg"
          >
            <div className="v-middle caption">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <span>
                      <i className="star-rating"></i>
                      <i className="star-rating"></i>
                      <i className="star-rating"></i>
                      <i className="star-rating"></i>
                      <i className="star-rating"></i>
                    </span>
                    <h4 className="colorh">Spa at Marino</h4>
                    <h1>Usher yourself to ultimate relaxation</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="text-center item bg-img"
            data-overlay-dark="2"
            data-background="/assets/images/spa-slider02.jpg"
          >
            <div className="v-middle caption">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <span>
                      <i className="star-rating"></i>
                      <i className="star-rating"></i>
                      <i className="star-rating"></i>
                      <i className="star-rating"></i>
                      <i className="star-rating"></i>
                    </span>
                    <h4 className="colorh">Spa at Marino</h4>
                    <h1>The perfect way to soothe your senses</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="text-center item bg-img"
            data-overlay-dark="3"
            data-background="/assets/images/spa-slider03.jpg"
          >
            <div className="v-middle caption">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <span>
                      <i className="star-rating"></i>
                      <i className="star-rating"></i>
                      <i className="star-rating"></i>
                      <i className="star-rating"></i>
                      <i className="star-rating"></i>
                    </span>
                    <h4 className="colorh">Spa at Marino</h4>
                    <h1>Enjoy the best moment of your life</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="text-center item bg-img"
            data-overlay-dark="3"
            data-background="/assets/images/spa-slider04.jpg"
          >
            <div className="v-middle caption">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <span>
                      <i className="star-rating"></i>
                      <i className="star-rating"></i>
                      <i className="star-rating"></i>
                      <i className="star-rating"></i>
                      <i className="star-rating"></i>
                    </span>
                    <h4 className="colorh">Spa at Marino</h4>
                    <h1>Ease your body’s tension with a luxury experience</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reservation">
          <a href="tel:8551004444">
            <div className="icon d-flex justify-content-center align-items-center">
              <i className="flaticon-call"></i>
            </div>
            <div className="call">
              <span>+94 11 255 0171</span> <br />
              Reservation
            </div>
          </a>
        </div>
      </header>

      <section className="about section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 mb-30 animate-box"
              data-animate-effect="fadeInUp"
            >
              <span>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
              </span>

              <div className="section-title">
                Welcome to the best spa in town..
              </div>
              <p className="textj">
                Spa at Marino operated by Tonic Lanka sets the new benchmark for
                the spa industry by allowing you to enjoy the most luxurious
                experience that you could have ever imagined. The magical touch
                of our expert therapists with their unique techniques will usher
                you to heavenly peacefulness.
              </p>

              <p className="textj">
                The pleasant atmosphere is specially designed with extraordinary
                patterns, soothing shades, sensational aroma, and soft lighting
                to promote tranquility at its very core for a star-class therapy
                session.
              </p>

              <div className="reservations">
                <div className="icon iconsho">
                  <img src="/assets/images/2101281-02.png" loading="lazy" />
                </div>
                <div className="text">
                  <p>Reservation</p>{" "}
                  <a className="ls" href="tel:+94784708987">
                    +94 11 255 0171
                  </a>
                </div>
              </div>

              <div className="reservations">
                <div className="icon iconsho">
                  <img src="/assets/images/2101281-03.png" loading="lazy" />
                </div>
                <div className="text">
                  <p>Reservation</p>{" "}
                  <a href="https://wa.me/+94784708987">+94 78 470 8987</a>
                </div>
              </div>
            </div>
            <div
              className="col col-md-6 mb-30 animate-box"
              data-animate-effect="fadeInUp"
            >
              <img src="/assets/images/spa-f.jpg" alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="pricing section-padding bg-black">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-subtitle">
                <span>Tonic Lanka</span>
              </div>
              <div className="section-title">
                <span>TREATMENT MENU</span>
              </div>

              <div className="reservations mb-30">
                <div className="icon">
                  <span className="flaticon-call"></span>
                </div>
                <div className="text">
                  <p className="color-2">For information</p>{" "}
                  <a href="tel:+94784708987">+94 11 255 0171</a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="pricing-card">
                <img
                  src="/assets/images/spa-slider02.jpg"
                  alt=""
                  loading="lazy"
                />
                <div className="desc">
                  <div className="amount">Head to Toe Massage</div>
                </div>
                <div className="butn-dark mybutt">
                  {" "}
                  <a href="full_body_massage.php">
                    <span>Menu</span>
                  </a>{" "}
                </div>
                <br />
              </div>
            </div>

            <div className="col-md-6">
              <div className="pricing-card">
                <img
                  src="/assets/images/menu-short-treatments.jpg"
                  alt=""
                  loading="lazy"
                />
                <div className="desc">
                  <div className="amount">Focused Treatment</div>
                </div>
                <div className="butn-dark mybutt">
                  {" "}
                  <a href="short_treatments.php">
                    <span>Menu</span>
                  </a>{" "}
                </div>
                <br />
              </div>
            </div>

            <div className="col-md-6">
              <div className="pricing-card">
                <img
                  src="/assets/images/menu-wraps-and-scrubs.jpg"
                  alt=""
                  loading="lazy"
                />
                <div className="desc">
                  <div className="amount">Scrubs and Wraps</div>
                </div>
                <div className="butn-dark mybutt">
                  {" "}
                  <a href="scrubs_and_wraps.php">
                    <span>Menu</span>
                  </a>{" "}
                </div>
                <br />
              </div>
            </div>

            <div className="col-md-6">
              <div className="pricing-card">
                <img
                  src="/assets/images/spa-slider01.jpg"
                  alt=""
                  loading="lazy"
                />
                <div className="desc">
                  <div className="amount">Hair and Facial</div>
                </div>
                <div className="butn-dark mybutt">
                  {" "}
                  <a href="hair_and_facials.php">
                    <span>Menu</span>
                  </a>{" "}
                </div>
                <br />
              </div>
            </div>

            <div className="col-md-6">
              <div className="pricing-card">
                <img
                  src="/assets/images/gallery/g4.jpg"
                  alt=""
                  loading="lazy"
                />
                <div className="desc">
                  <div className="amount">Speciality Treatment</div>
                </div>
                <div className="butn-dark mybutt">
                  {" "}
                  <a href="special.php">
                    <span>Menu</span>
                  </a>{" "}
                </div>
                <br />
              </div>
            </div>

            <div className="col-md-6">
              <div className="pricing-card">
                <img
                  src="/assets/images/gallery/g1.jpg"
                  alt=""
                  loading="lazy"
                />
                <div className="desc">
                  <div className="amount">Spa Packages</div>
                </div>
                <div className="butn-dark mybutt">
                  {" "}
                  <a href="our_spa_package.php">
                    <span>Menu</span>
                  </a>{" "}
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="video-wrapper video section-padding bg-img bg-fixed"
        data-overlay-dark="3"
        data-background="/assets/images/spa-video-back.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <span>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
              </span>
              <div className="section-subtitle">
                <span>Spa at Marino</span>
              </div>
              <div className="section-title">
                <span>Promotional Video</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="text-center col-md-12">
              <a className="vid" href="https://youtu.be/z8QT1tvx-Fo">
                <div className="vid-butn">
                  <span className="icon">
                    <i className="ti-control-play"></i>
                  </span>
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
