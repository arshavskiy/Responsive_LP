$(document).on('ready', function () {
    $(".vertical-center ").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        speed: 500,
        infinite: true,
        slidesToShow: 1,
        vertical: true,
        slidesToScroll: 1
    });
});