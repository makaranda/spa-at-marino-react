import React, { useState, useEffect, useRef } from "react";
import { Jquery } from "react-jquery-plugin";
import { Link, useLocation } from "react-router-dom";
import Preloader from "./Preloader";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import "waypoints/lib/jquery.waypoints.min.js";

export default function Header() {
  const location = useLocation();
  const galleryRef = useRef(null);

  useEffect(() => {
    // Function to deactivate the preloader after 2 seconds
    const deactivatePreloader = () => {
      const preloader = document.getElementById("preloader");
      const preloader_bg = document.getElementById("preloader_bg");
      if (preloader) {
        preloader.classList.remove("d-none");
        preloader_bg.classList.remove("d-none");
        setTimeout(() => {
          preloader.classList.add("d-none");
          preloader_bg.classList.add("d-none");
        }, 2000); // 2 seconds
      }
    };

    // Deactivate preloader on route change
    deactivatePreloader();

    // Ensure jQuery is available and initialize scrollIt
    if ($.scrollIt) {
      $.scrollIt({
        upKey: 38,
        downKey: 40,
        easing: "swing",
        scrollTime: 600,
        activeClass: "active",
        onPageChange: null,
        topOffset: -70,
      });
    } else {
      console.error("scrollIt plugin is not loaded");
    }

    // Navbar scrolling background
    const wind = $(window);
    wind.on("scroll", function () {
      const bodyScroll = wind.scrollTop();
      const navbar = $(".navbar");
      const logo = $(".navbar .logo> img");
      if (bodyScroll > 100) {
        navbar.addClass("nav-scroll");
        logo.attr("src", "/assets/images/logo-dark.png");
      } else {
        navbar.removeClass("nav-scroll");
        logo.attr("src", "/assets/images/logo.png");
      }
    });

    // Close navbar-collapse when a link is clicked
    $(".navbar-nav .dropdown-item a").on("click", function () {
      $(".navbar-collapse").removeClass("show");
    });

    // Sections background image from data background
    const pageSection = $(".bg-img, section");
    pageSection.each(function () {
      if ($(this).attr("data-background")) {
        $(this).css(
          "background-image",
          "url(" + $(this).data("background") + ")"
        );
      }
    });

    // Animations
    const contentWayPoint = function () {
      let i = 0;
      $(".animate-box").waypoint(
        function (direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            i++;
            $(this.element).addClass("item-animate");
            setTimeout(function () {
              $("body .animate-box.item-animate").each(function (k) {
                const el = $(this);
                setTimeout(
                  function () {
                    const effect = el.data("animate-effect");
                    if (effect === "fadeIn") {
                      el.addClass("fadeIn animated");
                    } else if (effect === "fadeInLeft") {
                      el.addClass("fadeInLeft animated");
                    } else if (effect === "fadeInRight") {
                      el.addClass("fadeInRight animated");
                    } else {
                      el.addClass("fadeInUp animated");
                    }
                    el.removeClass("item-animate");
                  },
                  k * 200,
                  "easeInOutExpo"
                );
              });
            }, 100);
          }
        },
        { offset: "85%" }
      );
    };
    contentWayPoint();

    var owl = $(".header .owl-carousel");

    // Slider owlCarousel - (Inner Page Slider)
    $(".slider .owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      margin: 0,
      autoplay: true,
      autoplayTimeout: 5000,
      nav: false,
      navText: [
        '<i class="ti-angle-left" aria-hidden="true"></i>',
        '<i class="ti-angle-right" aria-hidden="true"></i>',
      ],
      responsiveClass: true,
      responsive: {
        0: {
          dots: true,
        },
        600: {
          dots: true,
        },
        1000: {
          dots: true,
        },
      },
    });

    // Slider owlCarousel (Homepage Slider)
    $(".slider-fade .owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      margin: 0,
      autoplay: true,
      autoplayTimeout: 5000,
      animateOut: "fadeOut",
      nav: true,
      navText: [
        '<i class="ti-angle-left" aria-hidden="true"></i>',
        '<i class="ti-angle-right" aria-hidden="true"></i>',
      ],
      responsiveClass: true,
      responsive: {
        0: {
          dots: false,
        },
        600: {
          dots: false,
        },
        1000: {
          dots: true,
        },
      },
    });
    owl.on("changed.owl.carousel", function (event) {
      var item = event.item.index - 2; // Position of the current item
      $("span").removeClass("animated fadeInUp");
      $("h4").removeClass("animated fadeInUp");
      $("h1").removeClass("animated fadeInUp");
      $("p").removeClass("animated fadeInUp");
      $(".butn-light").removeClass("animated fadeInUp");
      $(".butn-dark").removeClass("animated fadeInUp");
      $(".owl-item")
        .not(".cloned")
        .eq(item)
        .find("span")
        .addClass("animated fadeInUp");
      $(".owl-item")
        .not(".cloned")
        .eq(item)
        .find("h4")
        .addClass("animated fadeInUp");
      $(".owl-item")
        .not(".cloned")
        .eq(item)
        .find("h1")
        .addClass("animated fadeInUp");
      $(".owl-item")
        .not(".cloned")
        .eq(item)
        .find("p")
        .addClass("animated fadeInUp");
      $(".owl-item")
        .not(".cloned")
        .eq(item)
        .find(".butn-light")
        .addClass("animated fadeInUp");
      $(".owl-item")
        .not(".cloned")
        .eq(item)
        .find(".butn-dark")
        .addClass("animated fadeInUp");
    });
    // Initialize owlCarousel for various elements
    $(".testimonials .owl-carousel").owlCarousel({
      loop: true,
      margin: 30,
      mouseDrag: true,
      autoplay: false,
      dots: true,
      nav: false,
      responsiveClass: true,
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1000: { items: 1 },
      },
    });

    $(".rooms1 .owl-carousel").owlCarousel({
      loop: true,
      margin: 30,
      mouseDrag: true,
      autoplay: false,
      dots: true,
      autoplayHoverPause: true,
      nav: false,
      responsiveClass: true,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 },
      },
    });

    // Similar initialization for other carousels...

    // Smooth Scrolling
    $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
        if (
          location.pathname.replace(/^\//, "") ===
            this.pathname.replace(/^\//, "") &&
          location.hostname === this.hostname
        ) {
          let target = $(this.hash);
          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
          if (target.length) {
            event.preventDefault();
            $("html, body").animate(
              { scrollTop: target.offset().top },
              1000,
              function () {
                const $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                  return false;
                } else {
                  $target.attr("tabindex", "-1");
                  $target.focus();
                }
              }
            );
          }
        }
      });

    // Scroll back to top
    const progressPath = document.querySelector(".progress-wrap path");
    const pathLength = progressPath ? progressPath.getTotalLength() : "";
    if (progressPath) {
      progressPath.style.transition = progressPath.style.WebkitTransition =
        "none";
      progressPath.style.strokeDasharray = pathLength + " " + pathLength;
      progressPath.style.strokeDashoffset = pathLength;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = progressPath.style.WebkitTransition =
        "stroke-dashoffset 10ms linear";
      const updateProgress = function () {
        const scroll = $(window).scrollTop();
        const height = $(document).height() - $(window).height();
        const progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
      };
      updateProgress();
      $(window).scroll(updateProgress);
    }

    const offset = 150;
    const duration = 550;
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > offset) {
        $(".progress-wrap").addClass("active-progress");
      } else {
        $(".progress-wrap").removeClass("active-progress");
      }
    });

    $(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  }, [location]);
  return (
    <div>
      <Preloader />
      <div class="progress-wrap cursor-pointer">
        <svg
          class="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>

      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <div class="logo-wrapper navbar-brand valign">
            <Link to="/">
              <div class="logo">
                <img src="/assets/images/logo.png" class="logo-img" alt="" />
              </div>
            </Link>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="icon-bar">
              <i class="ti-line-double"></i>
            </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item dropdown">
                <span class="nav-link active">
                  TREATMENTS <i class="ti-angle-down"></i>
                </span>
                <ul class="dropdown-menu last">
                  <li class="dropdown-item">
                    <Link to="/treatments/full-body-massage">
                      Full Body Massage
                    </Link>
                  </li>
                  <li class="dropdown-item">
                    <Link to="/treatments/short-treatments">
                      Short Treatments
                    </Link>
                  </li>
                  <li class="dropdown-item">
                    <Link to="/treatments/scrubs-and-wraps">
                      Scrubs and Wraps
                    </Link>
                  </li>
                  <li class="dropdown-item">
                    <Link to="/treatments/hair-and-facials">
                      Hair and Facials
                    </Link>
                  </li>
                  <li class="dropdown-item">
                    <Link to="/treatments/special-treatments">
                      Speciality Treatments
                    </Link>
                  </li>
                  <li class="dropdown-item">
                    <Link to="/treatments/our-spa-package">
                      Our Spa Package
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/products">
                  Products
                </Link>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/gallery">
                  Gallery
                </a>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
