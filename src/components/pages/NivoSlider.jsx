import React, { useEffect } from "react";
import $ from "jquery";
import "nivo-slider";

const NivoSlider = ({ images }) => {
  useEffect(() => {
    // Initialize the Nivo Slider
    $(document).ready(function () {
      $("#slider").nivoSlider();
    });
  }, []);

  return (
    <div id="slider">
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

export default NivoSlider;
