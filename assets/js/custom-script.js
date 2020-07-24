jQuery(document).ready(function() {
  
    jQuery(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 4000,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 1,
          nav: false
        },
        1000: {
          items: 1,
          nav: false,
          loop: true,
          margin: 20,
        }
      }
    });
  });