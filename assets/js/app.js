(function() {

  var exists = false;
  
  function init() {
    
    if (exists === true) {
      return;
    }
    
    $('#products').slick({
      speed: 250,
      infinte: false,
      prevArrow: '<button type="text" class="slick-prev"></button>',
      nextArrow: '<button type="text" class="slick-next"></button>',
      responsive: [
        {
          breakpoint: 3000,
          settings: "unslick" // destroys slick
        },
        {  
          breakpoint: 528,
          settings: {
            slidesToShow: 1,
            infinite: false,
            speed: 250,
          }
        }
      ]
    });

  }
  
  function check() {
    if ($(window).width() < 528) {
      init();
    }
  }
  
  $(document).ready(function() {
    $('#products').on('destroy', function(event, slick, currentSlide, nextSlide){
      exists = false;
    });
    
    $('#products').on('init', function(event, slick, currentSlide, nextSlide){
      exists = true;
    });

    init();
    
    $(window).resize(init);
  });
  
  
})();