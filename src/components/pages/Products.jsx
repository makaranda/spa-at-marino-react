import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Products() {
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
              <h1>Products</h1>
            </div>
          </div>
        </div>
      </div>

      <section class="section-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <img src="/assets/images/products.jpg" class="mb-30" alt="" />
              <p>
                The use of our very own branded balms, herbs, and essential oils
                created by our specialists using the finest organic ingredients
                with the right blend that will encourage the fullest relaxation
                of the mind and body.
              </p>

              <div class="row">
                <div class="col-md-6">
                  <img
                    src="/assets/images/products-1.jpg"
                    class="mb-30"
                    alt=""
                  />
                </div>
                <div class="col-md-6">
                  <img
                    src="/assets/images/products-2.jpg"
                    class="mb-30"
                    alt=""
                  />
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
