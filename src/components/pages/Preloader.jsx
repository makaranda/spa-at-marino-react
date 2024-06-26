import React from "react";

const Preloader = () => {
  return (
    <div>
      <div class="preloader-bg" id="preloader_bg"></div>
      <div id="preloader" class="preloader active">
        <div id="preloader-status">
          <div class="preloader-position loader">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
