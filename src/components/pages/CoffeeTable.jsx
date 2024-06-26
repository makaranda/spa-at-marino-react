import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function CoffeeTable() {
  return (
    <div>
      <Header />

      <section className="shop">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="page-title res7"></ul>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="tz-gallery">
                <div className="row product-grid">
                  <div className="toolbar">
                    <div className="show-result">
                      <h4
                        className=""
                        style={{
                          fontWeight: "600",
                          color: "#03244ea8",
                          textTransform: "uppercase",
                        }}
                      >
                        Coffee Table
                      </h4>
                    </div>
                  </div>

                  <div style={{ marginTop: "-15px", marginBottom: "20px" }}>
                    <Link
                      to="/"
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
                      <i className="fa fa-reply-all" aria-hidden="true"></i>{" "}
                      Back
                    </Link>
                  </div>

                  <div
                    className="col-sm-6 col-md-4 shop-grid-img"
                    style={{ padding: "14px" }}
                  >
                    <a
                      className="lightbox"
                      href="assets/images/product/table/TCT022NS-540.jpg"
                      style={{ borderRadius: "10px !important" }}
                    >
                      <img
                        className="shop-zoom-img"
                        src="assets/images/product/table/TCT022NS-230.jpg"
                        alt=""
                        style={{ borderRadius: "4px" }}
                      />
                    </a>
                    <div
                      className="product-info"
                      style={{ textAlign: "center" }}
                    >
                      <h6 className="pro-code" style={{ marginBottom: "1px" }}>
                        TCT022NS
                      </h6>
                      <span style={{ fontSize: "12px" }}>(Side Table)</span>
                      <h5 className="pro-price">Rs. 26,975</h5>
                    </div>
                  </div>

                  <div
                    className="col-sm-6 col-md-4 shop-grid-img"
                    style={{ padding: "14px" }}
                  >
                    <a
                      className="lightbox"
                      href="assets/images/product/table/MCT006-540.jpg"
                      style={{ borderRadius: "10px !important" }}
                    >
                      <img
                        className="shop-zoom-img"
                        src="assets/images/product/table/MCT006-230.jpg"
                        alt=""
                        style={{ borderRadius: "4px" }}
                      />
                    </a>
                    <div
                      className="product-info"
                      style={{ textAlign: "center" }}
                    >
                      <h6 className="pro-code" style={{ marginBottom: "1px" }}>
                        MCT006
                      </h6>
                      <span style={{ fontSize: "12px" }}>(Coffee Table)</span>
                      <h5 className="pro-price">Rs. 80,475</h5>
                    </div>
                  </div>

                  <div
                    className="col-sm-6 col-md-4 shop-grid-img"
                    style={{ padding: "14px" }}
                  >
                    <a
                      className="lightbox"
                      href="assets/images/product/table/TCT015NS-540.jpg"
                      style={{ borderRadius: "10px !important" }}
                    >
                      <img
                        className="shop-zoom-img"
                        src="assets/images/product/table/TCT015NS-230.jpg"
                        alt=""
                        style={{ borderRadius: "4px" }}
                      />
                    </a>
                    <div
                      className="product-info"
                      style={{ textAlign: "center" }}
                    >
                      <h6 className="pro-code" style={{ marginBottom: "1px" }}>
                        TCT015NS
                      </h6>
                      <span style={{ fontSize: "12px" }}>(Coffee Table)</span>
                      <h5 className="pro-price">Rs. 79,375</h5>
                    </div>
                  </div>

                  <div
                    className="col-sm-6 col-md-4 shop-grid-img"
                    style={{ padding: "14px" }}
                  >
                    <a
                      className="lightbox"
                      href="assets/images/product/table/TCT025NS-540.jpg"
                      style={{ borderRadius: "10px !important" }}
                    >
                      <img
                        className="shop-zoom-img"
                        src="assets/images/product/table/TCT025NS-230.jpg"
                        alt=""
                        style={{ borderRadius: "4px" }}
                      />
                    </a>
                    <div
                      className="product-info"
                      style={{ textAlign: "center" }}
                    >
                      <h6 className="pro-code" style={{ marginBottom: "1px" }}>
                        TCT025NS
                      </h6>
                      <span style={{ fontSize: "12px" }}>(Side Table)</span>
                      <h5 className="pro-price">Rs. 51,375</h5>
                    </div>
                  </div>

                  <div
                    className="col-sm-6 col-md-4 shop-grid-img"
                    style={{ padding: "14px" }}
                  >
                    <a
                      className="lightbox"
                      href="assets/images/product/table/MCT011-540.jpg"
                      style={{ borderRadius: "10px !important" }}
                    >
                      <img
                        className="shop-zoom-img"
                        src="assets/images/product/table/MCT011-230.jpg"
                        alt=""
                        style={{ borderRadius: "4px" }}
                      />
                    </a>
                    <div
                      className="product-info"
                      style={{ textAlign: "center" }}
                    >
                      <h6 className="pro-code" style={{ marginBottom: "1px" }}>
                        MCT011
                      </h6>
                      <span style={{ fontSize: "12px" }}>(Coffee Table)</span>
                      <h5 className="pro-price">Rs. 74,375</h5>
                    </div>
                  </div>

                  <div
                    className="col-sm-6 col-md-4 shop-grid-img"
                    style={{ padding: "14px" }}
                  >
                    <a
                      className="lightbox"
                      href="assets/images/product/table/1C7A1528-view.jpg"
                      style={{ borderRadius: "10px !important" }}
                    >
                      <img
                        className="shop-zoom-img"
                        src="assets/images/product/table/1C7A1528-list.jpg"
                        alt=""
                        style={{ borderRadius: "4px" }}
                      />
                    </a>
                    <div
                      className="product-info"
                      style={{ textAlign: "center" }}
                    >
                      <h6 className="pro-code" style={{ marginBottom: "1px" }}>
                        1C7A1528
                      </h6>
                      <span style={{ fontSize: "12px" }}>(Coffee Table)</span>
                      <h5 className="pro-price">Rs. 99,775</h5>
                    </div>
                  </div>

                  <div
                    className="col-sm-6 col-md-4 shop-grid-img"
                    style={{ padding: "14px" }}
                  >
                    <a
                      className="lightbox"
                      href="assets/images/product/table/TCT024NS-540.jpg"
                      style={{ borderRadius: "10px !important" }}
                    >
                      <img
                        className="shop-zoom-img"
                        src="assets/images/product/table/TCT024NS-230.jpg"
                        alt=""
                        style={{ borderRadius: "4px" }}
                      />
                    </a>
                    <div
                      className="product-info"
                      style={{ textAlign: "center" }}
                    >
                      <h6 className="pro-code" style={{ marginBottom: "1px" }}>
                        TCT024NS
                      </h6>
                      <span style={{ fontSize: "12px" }}>(Coffee Table)</span>
                      <h5 className="pro-price">Rs. 69,175</h5>
                    </div>
                  </div>

                  <div
                    className="col-sm-6 col-md-4 shop-grid-img"
                    style={{ padding: "14px" }}
                  >
                    <a
                      className="lightbox"
                      href="assets/images/product/table/MCT007-540.jpg"
                      style={{ borderRadius: "10px !important" }}
                    >
                      <img
                        className="shop-zoom-img"
                        src="assets/images/product/table/MCT007-230.jpg"
                        alt=""
                        style={{ borderRadius: "4px" }}
                      />
                    </a>
                    <div
                      className="product-info"
                      style={{ textAlign: "center" }}
                    >
                      <h6 className="pro-code" style={{ marginBottom: "1px" }}>
                        MCT007
                      </h6>
                      <span style={{ fontSize: "12px" }}>(Coffee Table)</span>
                      <h5 className="pro-price">Rs. 42,275</h5>
                    </div>
                  </div>

                  <div
                    className="col-sm-6 col-md-4 shop-grid-img"
                    style={{ padding: "14px" }}
                  >
                    <a
                      className="lightbox"
                      href="assets/images/product/table/1C7A1494-view.jpg"
                      style={{ borderRadius: "10px !important" }}
                    >
                      <img
                        className="shop-zoom-img"
                        src="assets/images/product/table/1C7A1494-list-2.jpg"
                        alt=""
                        style={{ borderRadius: "4px" }}
                      />
                    </a>
                    <div
                      className="product-info"
                      style={{ textAlign: "center" }}
                    >
                      <h6 className="pro-code" style={{ marginBottom: "1px" }}>
                        1C7A1494
                      </h6>
                      <span style={{ fontSize: "12px" }}>(Coffee Table)</span>
                      <h5 className="pro-price">Rs. 59,875</h5>
                    </div>
                  </div>

                  <div
                    className="col-sm-6 col-md-4 shop-grid-img"
                    style={{ padding: "14px" }}
                  >
                    <a
                      className="lightbox"
                      href="assets/images/product/table/TCT023P-540.jpg"
                      style={{ borderRadius: "10px !important" }}
                    >
                      <img
                        className="shop-zoom-img"
                        src="assets/images/product/table/TCT023P-230.jpg"
                        alt=""
                        style={{ borderRadius: "4px" }}
                      />
                    </a>
                    <div
                      className="product-info"
                      style={{ textAlign: "center" }}
                    >
                      <h6 className="pro-code" style={{ marginBottom: "1px" }}>
                        TCT023P
                      </h6>
                      <span style={{ fontSize: "12px" }}>(Coffee Table)</span>
                      <h5 className="pro-price">Rs. 57,975</h5>
                    </div>
                  </div>

                  <div
                    className="col-sm-6 col-md-4 shop-grid-img"
                    style={{ padding: "14px" }}
                  >
                    <a
                      className="lightbox"
                      href="assets/images/product/table/MCT008-540 .jpg"
                      style={{ borderRadius: "10px !important" }}
                    >
                      <img
                        className="shop-zoom-img"
                        src="assets/images/product/table/MCT008-230.jpg"
                        alt=""
                        style={{ borderRadius: "4px" }}
                      />
                    </a>
                    <div
                      className="product-info"
                      style={{ textAlign: "center" }}
                    >
                      <h6 className="pro-code" style={{ marginBottom: "1px" }}>
                        MCT008
                      </h6>
                      <span style={{ fontSize: "12px" }}>(Coffee Table)</span>
                      <h5 className="pro-price">Rs. 64,575</h5>
                    </div>
                  </div>

                  <div
                    className="col-sm-6 col-md-4 shop-grid-img"
                    style={{ padding: "14px" }}
                  >
                    <a
                      className="lightbox"
                      href="assets/images/product/table/MCT013-540.jpg"
                      style={{ borderRadius: "10px !important" }}
                    >
                      <img
                        className="shop-zoom-img"
                        src="assets/images/product/table/MCT013-230.jpg"
                        alt=""
                        style={{ borderRadius: "4px" }}
                      />
                    </a>
                    <div
                      className="product-info"
                      style={{ textAlign: "center" }}
                    >
                      <h6 className="pro-code" style={{ marginBottom: "1px" }}>
                        MCT013
                      </h6>
                      <span style={{ fontSize: "12px" }}>(Coffee Table)</span>
                      <h5 className="pro-price">Rs. 64,775</h5>
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
