import { useEffect } from "react";
import { jquery } from "react-jquery-plugin";
import $ from "jquery";

const useJQueryInitializer = () => {
  useEffect(() => {
    // This function will reinitialize your jQuery components
    $(document).ready(function () {
      $("#slider").nivoSlider();
    });

    // Optional: Cleanup if necessary
    return () => {
      // Destroy the slider if a method exists
      if ($("#slider").data("nivoslider")) {
        $("#slider").data("nivoslider").destroy();
      }
    };
  }, []); // Empty dependency array ensures this runs on mount and unmount only
};

export default useJQueryInitializer;
