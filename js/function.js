$(document).ready(function() {
      $('.slider__slid').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
        nextArrow: '<img src="img/arowSlid.png" alt="" />',
          prevArrow: '<div class="prev"></div>'
      });
});
