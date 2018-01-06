function submitForm(send, ok) {
    $(send).click(function () {
        var phone = $('#phone').val();
        var name = $('#name').val();
        var regName = new RegExp('^[א-ת ]{2,30}$'),
            validateName = regName.test(name);
        var regPhone = /[0]\d{9}/,
            validatePhone = regPhone.test(phone);

        if (validatePhone && validateName) {

            $(this).addClass('hidden');
            $(ok).show();
            setTimeout(function () {
                $(ok).hide();
                $(send).removeClass('hidden').show();
                $('#phone').val('');
                $('#name').val('');
            }, 2000);
        } else if (phone === '' || name === '') {
            $('#name').val('נא למלה את שני השדות');
            setTimeout(function () {
                $('#name').val('');
            }, 2000);
        } else if (!validatePhone) {
            $('#phone').val('נא להכניס מספר תקין');
            setTimeout(function () {
                $('#phone').val('');
            }, 2000);
        } else if (!validateName) {
            $('#name').val('נא להכניס שם בעברית בלבד');
            setTimeout(function () {
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


$(document).on('ready', function () {
    smoothScrol();
    slickInit();
    submitForm('#sendForm', '#okForm');
});
