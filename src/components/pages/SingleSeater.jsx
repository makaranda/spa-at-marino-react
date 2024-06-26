import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function SingleSeater() {
  return (
    <div>
      <Header />
      <section class="shop">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <ul class="page-title res7"></ul>
            </div>

            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="tz-gallery">
                <div class="row product-grid">
                  <div class="toolbar">
                    <div class="show-result">
                      <h4
                        class=""
                        style={{
                          fontWeight: "600",
                          color: "#03244ea8",
                          textTransform: "uppercase",
                        }}
                      >
                        Single Seater
                      </h4>
                    </div>
                  </div>

                  <div style={{ marginTop: "-15px", marginBottom: "20px" }}>
                    <a
                      href="/"
                      style={{
                        backgroundColor: "#03244e",
                        color: "#fff",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        paddingBottom: "5px",
                        paddingTop: "5px",
                        borderRadius: "6px",
                      }}
                    >
                      <i class="fa fa-reply-all" aria-hidden="true"></i> Back
                    </a>
                  </div>

                  <div
                    class="col-sm-6 col-md-4 shop-grid-img"
                    style={{ padding: "14px" }}
                  >
                    <a
                      class="lightbox"
                      href="assets/images/product/large/miford.jpg"
                      style={{ borderRadius: "10px !important" }}
                    >
                      <img
                        class="shop-zoom-img"
                        src="assets/images/product/miford.jpg"
                        alt=""
                        style={{ borderRadius: "4px" }}
                      />
                    </a>
                    <div class="product-info" style={{ textAlign: "center" }}>
                      <h6 class="pro-code" style={{ marginBottom: "1px" }}>
                        Milford
                      </h6>
                      <h5 class="pro-price">Rs. 36,600</h5>
                    </div>
                  </div>

                  <div
                    class="col-sm-6 col-md-4 shop-grid-img"
                    style={{ padding: "14px" }}
                  >
                    <a
                      class="lightbox"
                      href="assets/images/product/large/ollie.jpg"
                      style={{ borderRadius: "10px !important" }}
                    >
                      <img
                        class="shop-zoom-img"
                        src="assets/images/product/ollie.jpg"
                        alt=""
                        style={{ borderRadius: "4px" }}
                      />
                    </a>
                    <div class="product-info" style={{ textAlign: "center" }}>
                      <h6 class="pro-code" style={{ marginBottom: "1px" }}>
                        Ollie
                      </h6>
                      <h5 class="pro-price">Rs. 46,800</h5>
                    </div>
                  </div>

                  <div
                    class="col-sm-6 col-md-4 shop-grid-img"
                    style={{ padding: "14px" }}
                  >
                    <a
                      class="lightbox"
                      href="assets/images/product/large/ashdon.jpg"
                      style={{ borderRadius: "10px !important" }}
                    >
                      <img
                        class="shop-zoom-img"
                        src="assets/images/product/ashdon.jpg"
                        alt=""
                        style={{ borderRadius: "4px" }}
                      />
                    </a>
                    <div class="product-info" style={{ textAlign: "center" }}>
                      <h6 class="pro-code" style={{ marginBottom: "1px" }}>
                        Ashdon
                      </h6>
                      <h5 class="pro-price">Rs. 53,600</h5>
                    </div>
                  </div>

                  <div
                    class="col-sm-6 col-md-4 shop-grid-img"
                    style={{ padding: "14px" }}
                  >
                    <a
                      class="lightbox"
                      href="assets/images/product/large/kaizer-min.jpg"
                      style={{ borderRadius: "10px !important" }}
                    >
                      <img
                        class="shop-zoom-img"
                        src="assets/images/product/kaizer.jpg"
                        alt=""
                        style={{ borderRadius: "4px" }}
                      />
                    </a>
                    <div class="product-info" style={{ textAlign: "center" }}>
                      <h6 class="pro-code" style={{ marginBottom: "1px" }}>
                        Kaizer Ottoman
                      </h6>
                      <h5 class="pro-price">Rs. 44,800</h5>
                    </div>
                  </div>

                  <div
                    class="col-sm-6 col-md-4 shop-grid-img"
                    style={{ padding: "14px" }}
                  >
                    <a
                      class="lightbox"
                      href="assets/images/product/large/julie-min.jpg"
                      style={{ borderRadius: "10px !important" }}
                    >
                      <img
                        class="shop-zoom-img"
                        src="assets/images/product/julie.jpg"
                        alt=""
                        style={{ borderRadius: "4px" }}
                      />
                    </a>
                    <div class="product-info" style={{ textAlign: "center" }}>
                      <h6 class="pro-code" style={{ marginBottom: "1px" }}>
                        Julie Ottoman
                      </h6>
                      <h5 class="pro-price">Rs. 54,100</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
