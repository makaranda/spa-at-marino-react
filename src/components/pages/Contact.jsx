import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Contact() {
  return (
    <div>
      <Header />

      <section className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="page-title">
                <h2
                  style={{
                    marginBottom: "-12px",
                    fontWeight: "600",
                    color: "#807878",
                  }}
                >
                  Location
                </h2>
                <hr style={{ marginBottom: "-3px" }} />
              </div>

              <div className="map-area">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9178161814784!2d79.8508038152513!3d6.900432020579768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259606512bbb5%3A0x3b9f2109905dde6d!2sMarino+Mall!5e0!3m2!1sen!2slk!4v1565332995638!5m2!1sen!2slk"
                  width="100%"
                  height="360"
                  frameborder="0"
                  style={{ border: "0" }}
                ></iframe>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="page-title">
                <h2
                  style={{
                    marginBottom: "-12px",
                    fontWeight: "600",
                    color: "#8c8c8c",
                  }}
                >
                  INFO
                </h2>
                <hr style={{ marginBottom: "-3px" }} />
              </div>
              <ul>
                <li
                  style={{
                    fontSize: "13.2px",
                    color: "#8c8c8c",
                    fontWeight: "600",
                  }}
                >
                  <i className="fa fa-envelope-o"></i> Address : Marino Mall,
                  No:590, Galle Road, Colombo 03
                </li>
                <br />
                <li
                  style={{
                    fontSize: "13.2px",
                    color: "#8c8c8c",
                    fontWeight: "600",
                  }}
                >
                  <i className="fa fa-phone"></i> Phone No : 011 7 15 66 77
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
