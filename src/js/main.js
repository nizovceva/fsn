svg4everybody();

// @include('detect.js')
// @include('globals.js')


var recommendSwiper = new Swiper ('.recommend .swiper-container', {
  slidesPerView: 1,
  slidesPerColumn: 1,
  spaceBetween: 30,
  loop: true,
  
  pagination: {
    el: '.recommend .swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  navigation: {
    nextEl: '.recommend .swiper-button.next',
    prevEl: '.recommend .swiper-button.prev',
  },

  breakpoints: {
    620: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 30,
    },
    800: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 30,
    },
    1028: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      slidesPerColumn: 2,
      spaceBetween: 30,
    }
  }

});

// var listingsGalleryThumbs = new Swiper('.listings-slider-thumbs', {
//   direction: 'vertical',
//   slidesPerView: 'auto',
//   paginationClickable: true,
//   spaceBetween: 30,
//   autoplayDisableOnInteraction: false
// });
// var listingsGallery = new Swiper('.listings-slider', {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   effect: 'fade',
  
//   pagination: {
//     el: '.listings .swiper-pagination',
//     type: 'bullets',
//     clickable: true,
//   },

//   navigation: {
//     nextEl: '.listings .swiper-button.next',
//     prevEl: '.listings .swiper-button.prev',
//   },

//   thumbs: {
//     swiper: listingsGalleryThumbs
//   }
// });
$('.listings-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.listings .swiper-button.prev'),
  nextArrow: $('.listings .swiper-button.next'),
  fade: true,
  asNavFor: '.listings-slider-thumbs',
  //infinite: false,
});
$('.listings-slider-thumbs').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  vertical: true,
  asNavFor: '.listings-slider',
  rows: 0,
  dots: true,
  appendDots: $('.listings .swiper-pagination'),
  centerMode: false,
  focusOnSelect: true,
  centerPadding: 0,
  //infinite: false,
  verticalSwiping: true,
});

var reviewsSwiper = new Swiper ('.reviews-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  effect: 'fade',
  
  pagination: {
    el: '.reviews .swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  navigation: {
    nextEl: '.reviews .swiper-button.next',
    prevEl: '.reviews .swiper-button.prev',
  },

});


$('.datepicker').datepicker({
  format: 'mm/dd/yyyy'
});

$('.phone-mask').inputmask({ mask: '+7(999) 999 99 99', placeholder: '+7(___) ___ __ __' });

setTimeout(function() {
  $('.page-index-form').find('.dropdown.bootstrap-select').each(function(index, elem) {
    let $placeholder = $(elem).find('select.selectpicker').attr('placeholder');
    $(elem).find('button.btn.dropdown-toggle').attr('title', $placeholder).find('.filter-option-inner-inner').text($placeholder);
  });
}, 100);

$('.reviews-item').on('click', '.reviews-item-more', function(e) {
  e.preventDefault();
  $(this).parents('.reviews-item-head').toggleClass('is-open');
});