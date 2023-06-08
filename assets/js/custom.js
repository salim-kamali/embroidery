$(document).ready(function () {

    $(".blog-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipe: true,
        centerMode: true,
        centerPadding: '20px',
        nextArrow: '.slider-1-next',
        prevArrow: '.slider-1-prev',
        responsive: [

            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,

                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1.000,

                }
            }]
    });

    $(".sbs-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true,
        swipe: true,
        autoplay: true,
        centerMode: true,
        speed: 500
    });

    $(".easty-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: true,
        speed: 500,
        swipe: true,
        nextArrow: '.slider-2-next',
        prevArrow: '.slider-2-prev',
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1.000,

                }
            }]
    });

    // $(".home-slider").slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     dots: true,
    //     arrows: false,
    //     infinite: true,
    //     swipe: true,
    //     autoplay: true,
    //     speed: 500
    // });

    if ($(window).width() < 990) { }



    if ($(window).width() > 100) {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            var tp = $(".default_sticky").attr('data-top');
            if (scroll >= tp) {
                $(".default_sticky").addClass("affix");
                $(".sticky_button").addClass("show");
                $("body").addClass("body_affix");
                // $("body").css("padding-top", tp+'px');
            } else {
                $(".default_sticky").removeClass("affix");
                $(".sticky_button").removeClass("show");
                $("body").removeClass("body_affix");
                //$("body").css("padding-top", '0px');
            }
        });
    }


});