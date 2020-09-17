(function ($) {
    "use strict";

    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 70)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    $('body').scrollspy({
        target: '#mainNav',
        offset: 100
    });

    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
            $('.navbar').css("background-color", "black")
            $('.navbar-brand').addClass("color-change")
        } else {
            $("#mainNav").removeClass("navbar-shrink");
            $('.navbar').css("background-color", "transparent")
            $('.navbar').removeClass("color-change")
        }
    };
    navbarCollapse();
    $(window).scroll(navbarCollapse);

})(jQuery);