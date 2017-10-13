$(document).on('ready', function () {
    smoothScrol();
    slickInit();
    submitForm('#sendForm', '#okForm');
});

function submitForm(send, ok) {
    $(send).click(function () {
        var phone = $('#phone').val();
        var name = $('#name').val();
        var regPhone = /[0]\d{9}/,
            validatePhone = regPhone.test(phone);

        if (validatePhone && name) {

            $(this).addClass('hidden');
            $(ok).show();
            setTimeout(function () {
                $(ok).hide();
                $(send).removeClass('hidden').show();
                $('#phone').val('');
                $('#name').val('');
            }, 2000);
        } else {
            $('#phone').val('נא להכניס מספר תקין');
            setTimeout(function () {
                $('#phone').val('');
                $('#name').val('');
            }, 2000);
        }
    });
}

function slickInit() {
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
}

function smoothScrol() {
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () { // Callback after animation  // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                    });
                }
            }
        });
}

// $(document).ready(function () {
//     $('a[href^="#"]').on('click', function (e) {
//         e.preventDefault();

//         var target = this.hash;
//         var $target = $(target);

//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top
//         }, 900, 'swing', function () {
//             window.location.hash = target;
//         });
//     });
// });

// var myHeader = $('#logo');
// myHeader.data('position', myHeader.position());
// $(window).scroll(function () {
//     var hPos = myHeader.data('position'),
//         scroll = getScroll();
//     if (hPos.top < scroll.top - 100) {
//         myHeader.addClass('fixed');
//     } else {
//         myHeader.removeClass('fixed');
//     }
// });

// function getScroll() {
//     var b = document.body;
//     var e = document.documentElement;
//     return {
//         left: parseFloat(window.pageXOffset || b.scrollLeft || e.scrollLeft),
//         top: parseFloat(window.pageYOffset || b.scrollTop || e.scrollTop)
//     };
// }