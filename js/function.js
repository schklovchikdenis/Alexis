$(document).ready(function () {
  $('.testi-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
  });

  tabs();
});

function tabs() {
  $('[data-tabs]').on('click', function (event) {
    event.preventDefault();
    let elId = $(this).attr('href');
    console.log(elId);
    $('[data-tabs]').parent().removeClass('activ');
    $(this).parent().addClass('activ');

    $('[data-tabs-pane]').removeClass('activ');
    $(elId).addClass('activ');
  });
  
}


