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
        autoplay: false,
        centerMode: true,
        speed: 500
    });

    $(".easty-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
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

    $(".home-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: false,
        swipe: true,
        autoplay: true,
        speed: 1000
    });


    $(".test-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        infinite: false,
        autoplay: false,
        speed: 500,
        swipe: true,
        nextArrow: '.slider-3-next',
        prevArrow: '.slider-3-prev',
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

    if ($(window).width() < 990) { }


    // ----------- header sticky -------- 
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

    // ---- aos Animation ---

    AOS.init({
        easing: 'ease-in-out-sine'
    });

});


// ------- modal ------- 


$(document).ready(function () {
    $('.popup, .overlay').hide();
    $(".register").click(function () {
        $(".popup, .overlay").show(100);
        $("body").addClass("show-popup");
    });
    // ---- login forn open and sign-in form close -- 
    $(".createbtn").click(function () {
        $(".popup, .overlay").show(100);
        $(".popup1").hide();
    });

    // ----- forget form open and login form close --- 
    $(".lostbtn").click(function () {
        $('.popup2, .overlay').hide();
        $(".popup2, .overlay").show(100);
        $(".popup1").hide();
    });

    // -- open login form and close forget form ---- 
    $(".backlogin").click(function () {
        $(".popup1").show(100);
        $(".popup2").hide();
    });


});

$(document).ready(function () {
    $('.popup1, .overlay').hide();
    $(".loginbtn").click(function () {
        $(".popup1").show(100);
        $(".popup").hide();
    });
});

$(document).on("mouseup", ".overlay", function (e) {
    $(".popup, .overlay").hide(250);
    $("body").removeClass("show-popup");
});

$(document).on("mouseup", ".close", function (e) {
    $(".popup, .overlay").hide(250);
    $("body").removeClass("show-popup");
});

// ----- 1 ---- 
$(document).on("mouseup", ".overlay", function (e) {
    $(".popup1, .overlay").hide(250);
    $(".popup2, .overlay").hide(250);
    $("body").removeClass("show-popup");
});

$(document).on("mouseup", ".close1", function (e) {
    $(".popup1, .overlay").hide(250);
    $("body").removeClass("show-popup");
});

$(document).on("mouseup", ".close2", function (e) {
    $(".popup2, .overlay").hide(250);
    $("body").removeClass("show-popup");
});
