import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function About() {
  return (
    <div>
      <Header />
      <div className="about-us-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="about-text">
                <h2
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "600",
                    fontSize: "24px",
                    color: "#565656",
                    marginBottom: "-13px",
                  }}
                >
                  About Us
                </h2>
                <hr />

                <p
                  style={{
                    fontSize: "15.5px",
                    lineHeight: "23px",
                    marginBottom: "20px",
                    letterSpacing: "0.5px",
                    textAlign: "justify",
                  }}
                >
                  Marino Plush presents exclusive and luxurious designs to
                  complete your space. All recliner sofas from Marino Plush use
                  an electric recliner mechanism allowing you to control and
                  find the perfect seating position. The range features premium
                  leather and lavish fabric for a plush indulgence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
