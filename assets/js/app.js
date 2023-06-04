
const headerElement = {
  toggleBtn:document.getElementById("toggle_btn"),
  headerNav:document.getElementById("header_nav"),
  crosBtn:document.getElementById("cros_btn"),
}

const {headerNav, toggleBtn, crosBtn} = headerElement
toggleBtn.addEventListener("click", function(){
  headerNav.classList.toggle("activeNav")
})
crosBtn.addEventListener("click", function(){
  headerNav.classList.remove("activeNav")
})

window.addEventListener("click", function(event) {
  if (!headerNav.contains(event.target) && !toggleBtn.contains(event.target)) {
    headerNav.classList.remove("activeNav")
  }
});

// banner slider
$('.banner_slider').slick({
    lazyLoad: 'ondemand',
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    autoplay: true
});

$(function (e) {
  "use strict";
  e(".testimonial-slider-slick").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: !1,
      focusOnSelect: !0,
      dots: !0,
      autoplay: !1,
      autoplaySpeed: 5e3,
      appendDots: e(".custom-paging-testi"),
      responsive: [{
          breakpoint: 767,
          settings: {
              autoplay: !1
          }
      }, {
          breakpoint: 420,
          settings: {
              autoplay: !1
          }
      }]
  }),
  e("a[data-slide]").click(function (s) {
      s.preventDefault();
      var o = e(this).data("slide");
      e(".testimonial-slider-slick").slick("slickGoTo", o - 1)
  })
});

//   socket year
let socketYear = document.getElementById("socket_year")
let PresentYear = (year) =>{
  let date = new Date()
  let PreYear = date.getFullYear()
  year.innerText = PreYear
}
PresentYear(socketYear)

  
