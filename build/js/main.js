"use strict";svg4everybody(),function(){function e(s,e){var n;n=function(e,i){bowser[e]&&document.documentElement.classList.add("is-"+s+"-"+i)},e.forEach(function(e){var i=void 0,s=void 0,s="string"==typeof e?i=e:(i=e[0],e[1]);n(i,s)})}e("engine",["blink","gecko",["msedge","edge"],["msie","ie"],"webkit"]),e("device",["mobile","tablet"]),e("browser",["android","bada","blackberry","chrome","firefox","ios","kMeleon",["msedge","edge"],["msie","ie"],"opera","phantom","qupzilla","safari","sailfish",["samsungBrowser","samsung"],"seamonkey","silk","sleipnir","tizen","ucbrowser","vivaldi","webos",["yandexbrowser","yandex"]]),e("os",["android","bada","blackberry","chromeos","firefoxos","ipad","iphone","ipod","ios","linux","mac","windows","windowsphone","sailfish","tizen","webos"])}();var $window=$(window),$document=$(document),$html=$(document.documentElement),$body=$(document.body),recommendSwiper=new Swiper(".recommend .swiper-container",{slidesPerView:1,slidesPerColumn:1,spaceBetween:30,loop:!0,pagination:{el:".recommend .swiper-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".recommend .swiper-button.next",prevEl:".recommend .swiper-button.prev"},breakpoints:{620:{slidesPerView:2,slidesPerColumn:2,spaceBetween:30},800:{slidesPerView:2,slidesPerColumn:2,spaceBetween:30},1028:{slidesPerView:2,slidesPerColumn:2,spaceBetween:30},1200:{slidesPerView:4,slidesPerColumn:2,spaceBetween:30}}});$(".listings-slider").slick({slidesToShow:1,slidesToScroll:1,prevArrow:$(".listings .swiper-button.prev"),nextArrow:$(".listings .swiper-button.next"),fade:!0,asNavFor:".listings-slider-thumbs"}),$(".listings-slider-thumbs").slick({slidesToShow:2,slidesToScroll:1,vertical:!0,asNavFor:".listings-slider",rows:0,dots:!0,appendDots:$(".listings .swiper-pagination"),centerMode:!1,focusOnSelect:!0,centerPadding:0,verticalSwiping:!0});var reviewsSwiper=new Swiper(".reviews-slider",{slidesPerView:1,spaceBetween:30,effect:"fade",pagination:{el:".reviews .swiper-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".reviews .swiper-button.next",prevEl:".reviews .swiper-button.prev"}});$(".datepicker").datepicker({format:"mm/dd/yyyy"}),$(".phone-mask").inputmask({mask:"+7(999) 999 99 99",placeholder:"+7(___) ___ __ __"}),setTimeout(function(){$(".page-index-form").find(".dropdown.bootstrap-select").each(function(e,i){var s=$(i).find("select.selectpicker").attr("placeholder");$(i).find("button.btn.dropdown-toggle").attr("title",s).find(".filter-option-inner-inner").text(s)})},100),$(".reviews-item").on("click",".reviews-item-more",function(e){e.preventDefault(),$(this).parents(".reviews-item-head").toggleClass("is-open")});