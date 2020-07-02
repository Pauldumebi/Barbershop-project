$(document).ready(function() {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
    
    var page1Top = $("carouselV5").offset().top;
    var page2Top = $(".About-us-container").offset().top;
    var page3Top = $(".Our-best-services").offset().top;
    var page4Top = $(".pricing-section").offset().top;
    var page5Top = $("#Contact").offset().top;

    if (scrollPos >= page1Top && scrollPos < page2Top) {
      $("#home").addClass("active");
      $("#About-scroll").addClass("active");
      $("#Services-scroll").removeClass("active");
      $("#Pricing-scroll").removeClass("active");
      $("#Contact-scroll").removeClass("active");
    } else {
      $("home").removeClass("active");
    }

    if (scrollPos >= page2Top && scrollPos < page3Top) {
      $("#About-scroll").addClass("active");
      $("#home").addClass("active");
      $("#Services-scroll").removeClass("active");
      $("#Pricing-scroll").removeClass("active");
      $("#Contact-scroll").removeClass("active");
    } else {
      $("#About-scroll").removeClass("active");
    }

    if (scrollPos >= page2Top && scrollPos < page3Top) {
      $("#Services-scroll").removeClass("active");
      $("#About-scroll-scroll-scroll").addClass("active");
      $("#home").addClass("active");
      $("#Pricing-scroll").removeClass("active");
      $("#Contact-scroll").removeClass("active");
    } else {
      $("#Services-scroll").removeClass("active");
    }

    if (scrollPos >= page2Top && scrollPos < page3Top) {
      $("#Pricing-scroll-scroll").removeClass("active");
      $("#About-scroll-scroll").addClass("active");
      $("#home").addClass("active");
      $("#Services-scroll-scroll").removeClass("active");
      $("#Contact-scroll-scroll").removeClass("active");
    } else {
      $("#Pricing-scroll-scroll").removeClass("active");
    }
    
    if (scrollPos >= page3Top) {
      $("#Contact-scroll").removeClass("active");
      $("#Services-scroll").removeClass("active");
      $("#About-scroll").addClass("active");
      $("#home").addClass("active");
      $("#Pricing-scroll").removeClass("active");
    } else {
      $("#Contact-scroll").removeClass("active");
    }

  });
});