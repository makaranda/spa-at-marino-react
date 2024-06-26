import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function ReclinerSofa() {
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
                        class="current"
                        style={{
                          fontWeight: "600",
                          color: "#03244ea8",
                          textTransform: "uppercase",
                        }}
                      >
                        RECLINER Sofa
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
                      href="assets/images/product/large/oslen-larg.jpg"
                      style={{ borderRadius: "10px !important" }}
                    >
                      <img
                        class="shop-zoom-img product-image-sl"
                        src="assets/images/product/oslen.jpg"
                        alt=""
                        style={{ borderRadius: "4px" }}
                      />
                    </a>
                    <div class="product-info" style={{ textAlign: "center" }}>
                      <h6 class="pro-code" style={{ marginBottom: "1px" }}>
                        Oslen Sofa
                      </h6>
                      <span style={{ fontSize: "12px" }}>
                        (with 4 Electric Recliners - Fabric)
                      </span>
                      <h5 class="pro-price">Rs. 606,300</h5>
                    </div>
                  </div>

                  <div
                    class="col-sm-6 col-md-4 shop-grid-img"
                    style={{ padding: "14px" }}
                  >
                    <a
                      class="lightbox product-image-sl"
                      href="assets/images/product/large/manchester-larg.jpg"
                      style={{ borderRadius: "10px !important" }}
                    >
                      <img
                        class="shop-zoom-img product-image-sl"
                        src="assets/images/product/manchester.jpg"
                        alt=""
                        style={{ borderRadius: "4px" }}
                      />
                    </a>
                    <div class="product-info" style={{ textAlign: "center" }}>
                      <h6 class="pro-code" style={{ marginBottom: "1px" }}>
                        Manchester Sofa
                      </h6>
                      <span style={{ fontSize: "12px" }}>
                        (with 3 Electric Recliners - Fabric)
                      </span>
                      <h5 class="pro-price">Rs. 476,600</h5>
                    </div>
                  </div>

                  <div
                    class="col-sm-6 col-md-4 shop-grid-img"
                    style={{ padding: "14px" }}
                  >
                    <a
                      class="lightbox"
                      href="assets/images/product/alixton_lrg.jpg"
                      style={{ borderRadius: "10px !important" }}
                    >
                      <img
                        class="shop-zoom-img"
                        src="assets/images/product/aliston-web-new.jpg"
                        alt=""
                        style={{ borderRadius: "4px" }}
                      />
                    </a>
                    <div class="product-info" style={{ textAlign: "center" }}>
                      <h6 class="pro-code" style={{ marginBottom: "1px" }}>
                        Alliston Sofa
                      </h6>
                      <span style={{ fontSize: "12px" }}>
                        ( with 5 Electric Recliners - Fabric)
                      </span>
                      <h5 class="pro-price">Rs. 710,600</h5>
                    </div>
                  </div>

                  <div
                    class="col-sm-6 col-md-4 shop-grid-img"
                    style={{ padding: "14px" }}
                  >
                    <a
                      class="lightbox"
                      href="assets/images/product/large/brighton_larg.jpg"
                      style={{ borderRadius: "10px !important" }}
                    >
                      <img
                        class="shop-zoom-img"
                        src="assets/images/product/brighton.jpg"
                        alt=""
                        style={{ borderRadius: "4px" }}
                      />
                    </a>
                    <div class="product-info" style={{ textAlign: "center" }}>
                      <h6 class="pro-code" style={{ marginBottom: "1px" }}>
                        Brighton Sofa
                      </h6>
                      <span style={{ fontSize: "12px" }}>
                        (with 4 Electric Recliners - Fabric)
                      </span>
                      <h5 class="pro-price">Rs. 673,000</h5>
                    </div>
                  </div>

                  <div
                    class="col-sm-6 col-md-4 shop-grid-img"
                    style={{ padding: "14px" }}
                  >
                    <a
                      class="lightbox"
                      href="assets/images/product/large/caprio-larg.jpg"
                      style={{ borderRadius: "10px !important" }}
                    >
                      <img
                        class="shop-zoom-img"
                        src="assets/images/product/capriosofa.jpg"
                        alt=""
                        style={{ borderRadius: "4px" }}
                      />
                    </a>
                    <div class="product-info" style={{ textAlign: "center" }}>
                      <h6 class="pro-code" style={{ marginBottom: "1px" }}>
                        Caprio Sofa
                      </h6>
                      <span style={{ fontSize: "12px" }}>
                        (with 1 Electric Recliner - Leather)
                      </span>
                      <h5 class="pro-price">Rs. 661,800</h5>
                    </div>
                  </div>

                  <div
                    class="col-sm-6 col-md-4 shop-grid-img"
                    style={{ padding: "14px" }}
                  >
                    <a
                      class="lightbox"
                      href="assets/images/product/large/fortland-larg.jpg"
                      style={{ borderRadius: "10px !important" }}
                    >
                      <img
                        class="shop-zoom-img"
                        src="assets/images/product/potland.jpg"
                        alt=""
                        style={{ borderRadius: "4px" }}
                      />
                    </a>
                    <div class="product-info" style={{ textAlign: "center" }}>
                      <h6 class="pro-code" style={{ marginBottom: "1px" }}>
                        Portland Corner Sofa
                      </h6>
                      <span style={{ fontSize: "12px" }}>
                        (with 2 Electric Recliners - Fabric)
                      </span>
                      <h5 class="pro-price">Rs. 574,600</h5>
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
