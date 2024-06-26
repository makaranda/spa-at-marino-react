import React from "react";
import { Link, useLocation } from "react-router-dom";
export default function SideMenu() {
  return (
    <div>
      <div class="news2-sidebar row">
        <div class="col-md-12">
          <div class="widget">
            <div class="widget-title">
              <Link to="/treatments/full-body-massage">
                <h6>Head to Toe Massage</h6>
              </Link>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="widget">
            <div class="widget-title">
              <Link to="/treatments/short-treatments">
                <h6>Focused Treatments</h6>
              </Link>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="widget">
            <div class="widget-title">
              <Link to="/treatments/scrubs-and-wraps">
                <h6>Scrubs and Wraps</h6>
              </Link>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="widget">
            <div class="widget-title">
              <Link to="/treatments/hair-and-facials">
                <h6>Hair and Facials</h6>
              </Link>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="widget">
            <div class="widget-title">
              <Link to="/treatments/special-treatments">
                <h6>Speaciality Treatments</h6>
              </Link>
            </div>
          </div>
        </div>

        <div class="col-md-12">
          <div class="widget">
            <div class="widget-title">
              <Link to="/treatments/our-spa-package">
                <h6>Spa Package</h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
