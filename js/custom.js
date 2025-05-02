$(function () {
  $(".main_sec01_slide").slick({
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 6000,
    speed: 1000,
  });

  $(".main_sec01 .arrows .prev").on("click", function () {
    $(".main_sec01_slide").slick("slickPrev");
  });

  $(".main_sec01 .arrows .next").on("click", function () {
    $(".main_sec01_slide").slick("slickNext");
  });

  $(".main_sec02_slide").slick({
    slidesToShow: 4,
    arrows: false,
    dots: true,
  });

  $(".main_sec02 .arrows .prev").on("click", function () {
    $(".main_sec02_slide").slick("slickPrev");
  });

  $(".main_sec02 .arrows .next").on("click", function () {
    $(".main_sec02_slide").slick("slickNext");
  });
});


$(function () {
  $(".main-sec02_slide").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(".main-sec02 .arrows .prev"),
    nextArrow: $(".main-sec02 .arrows .next"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

//

$(function () {
  const main_sec04_slide = new Swiper('.main_sec04_slide', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
  });

  $('.main_sec04 .prev').on('click', function () {
    main_sec04_slide.slidePrev();
  });

  $('.main_sec04 .next').on('click', function () {
    main_sec04_slide.slideNext();
  });

  let sw = true;
  $('.main_sec04 .play').on('click', function () {
    if (sw) {
      main_sec04_slide.autoplay.start();
      $(this).addClass('on');
    } else {
      main_sec04_slide.autoplay.pause();
      $(this).removeClass('on');
    }

    sw = !sw;
  });

});


$(function () {
  const MIS = new Swiper('.main_sec05_slide', {
    loop: true,
    effect: 'fade',
    pagination: {
      el: '.main_sec05 .page',
      clickable: true,
    },
    navigation: {
      nextEl: '.main_sec05 .next',
      prevEl: '.main_sec05 .prev',
    },
  });


});



//
// $(function () {
//   $(window).on('scroll', function () {
//     let sct = $(window).scrollTop();

//     if (sct > 0) {
//       $('#header').addClass('on');
//     } else {
//       $('#header').removeClass('on');
//     }
//   });
// });


$(function () {
  const lenis = new Lenis({
    autoRaf: true,
    duration: 2,
  });
});


$(function () {
  AOS.init();
});
