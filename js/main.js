$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });


  $('.hero-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="btn prevBtn"><i class="fa fa-angle-left fa-2x text-white"></i></button>',
    nextArrow: '<button class="btn nextBtn"><i class="fa fa-angle-right fa-2x text-white"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });