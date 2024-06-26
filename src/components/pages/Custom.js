import React, { useEffect } from "react";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

const App = () => {
  useEffect(() => {
    // ScrollIt
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
    }

    // Navbar scrolling background
    const wind = $(window);
    wind.on("scroll", function () {
      const bodyScroll = wind.scrollTop();
      const navbar = $(".navbar");
      const logo = $(".navbar .logo> img");
      if (bodyScroll > 100) {
        navbar.addClass("nav-scroll");
        logo.attr("src", "assets/images/logo-dark.png");
      } else {
        navbar.removeClass("nav-scroll");
        logo.attr("src", "assets/images/logo.png");
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

    // Additional initialization for other plugins (Select2, Datepicker, MagnificPopup, etc.)
  }, []);

  return <div></div>;
};

export default App;
