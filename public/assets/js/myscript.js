(function ($) {
  // Begin jQuery
  $(function () {
    // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").toggle();
      // Close one dropdown when selecting another
      $(".nav-dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $("html").click(function () {
      $(".nav-dropdown").hide();
    });
    // Toggle open and close nav styles on click
    $("#nav-toggle").click(function () {
      $("nav ul").slideToggle();
    });
    // Hamburger to X toggle
    $("#nav-toggle").on("click", function () {
      this.classList.toggle("active");
    });
  }); // end DOM ready
})(jQuery); // end jQuery

$(".list li a").hover(function () {
  alert("asd"); // Changes the .image-holder's img src to the src defined in .list a's data attribute.
  var value = $(this).attr("data-src");
  $(".image-holder img").attr("src", value);
});

$(function () {
  $("#nav .dropdown").hover(
    function () {
      $("#products-menu.dropdown-menu", this).stop(true, true).fadeIn("fast");
      $(this).toggleClass("open");
    },
    function () {
      $("#products-menu.dropdown-menu", this).stop(true, true).fadeOut("fast");
      $(this).toggleClass("open");
    }
  );
});
