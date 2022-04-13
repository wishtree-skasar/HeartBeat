$(function () {
  $("ul > li > a").each(function () {
    var url = window.location.href;
    var href = $(this).prop("href");
    console.log(url);
    console.log(href);
    if (url == href) {
      $(this).css({ color: "#FC3990", "text-decoration": "underline" });
    }
  });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("activate");
    var ans = this.nextElementSibling;
    if (this.classList.contains("activate")) {
      ans.style.maxHeight = ans.scrollHeight + "px";
    } else {
      ans.style.maxHeight = 0;
    }
  });
}

// for menu links
$(".nav-btn").on("click", function () {
  $(".sidebar").addClass("show-links");
  $(".nav-logo").css("z-index", "-1");
});
$(".close-btn").on("click", function () {
  $(".sidebar").removeClass("show-links");
});

$(function () {
  $("#clients").owlCarousel({
    items: 3,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ["<", ">"],
  });
});
