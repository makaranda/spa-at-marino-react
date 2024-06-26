import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Contact() {
  useEffect(() => {
    const form = document.querySelector(".contact__form");
    const msg = document.querySelector(".contact__msg");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Network response was not ok " + response.statusText
            );
          }
          return response.text();
        })
        .then((data) => {
          msg.style.display = "block";
          msg.textContent = data;
          msg.classList.remove("alert-danger");
          msg.classList.add("alert-success");
        })
        .catch((error) => {
          msg.style.display = "block";
          msg.textContent =
            "There was a problem with your submission: " + error.message;
          msg.classList.remove("alert-success");
          msg.classList.add("alert-danger");
        });
    });
  }, []);
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
              <h1>About Us</h1>
            </div>
          </div>
        </div>
      </div>

      <section class="contact section-padding">
        <div class="container">
          <div class="row mb-90">
            <div class="col-md-6 mb-60">
              <div class="reservations mb-30">
                <div class="icon">
                  <span class="flaticon-call"></span>
                </div>
                <div class="text">
                  <p>Reservation</p>
                  <a href="tel:+94112550171">+94 11 255 0171</a>
                </div>
              </div>
              <div class="reservations mb-30">
                <div class="icon">
                  <span class="flaticon-envelope"></span>
                </div>
                <div class="text">
                  <p>Email Info</p>
                  <a href="mailto:spa@marinomall.com">spa@marinomall.com</a>
                </div>
              </div>
              <div class="reservations">
                <div class="icon">
                  <span class="flaticon-location-pin"></span>
                </div>
                <div class="text">
                  <p>Address</p> No: 590, Galle Road, Colombo 03.
                </div>
              </div>
            </div>
            <div class="col-md-5 mb-30 offset-md-1">
              <h3>Get in touch</h3>
              <form method="post" class="contact__form" action="contact.php">
                <div class="row">
                  <div class="col-12">
                    <div
                      class="alert alert-success contact__msg"
                      style={{ display: "none" }}
                      role="alert"
                    >
                      Your message was sent successfully.
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 form-group">
                    <input
                      name="name"
                      type="text"
                      placeholder="Your Name *"
                      required
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <input
                      name="email"
                      type="email"
                      placeholder="Your Email *"
                      required
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <input
                      name="phone"
                      type="text"
                      placeholder="Your Number *"
                      required
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <input
                      name="subject"
                      type="text"
                      placeholder="Subject *"
                      required
                    />
                  </div>
                  <div class="col-md-12 form-group">
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="4"
                      placeholder="Message *"
                      required
                    ></textarea>
                  </div>
                  <div class="col-md-12">
                    <button class="butn-dark">
                      <a href="#0">
                        <span>Send Message</span>
                      </a>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15843.68427298263!2d79.8522571!3d6.9000433!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3b9f2109905dde6d!2sMarino%20Mall!5e0!3m2!1sen!2slk!4v1653556318282!5m2!1sen!2slk"
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
