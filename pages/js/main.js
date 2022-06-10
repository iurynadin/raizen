(function ($) {
    $(".navbar-burger").on("click", function (event) {
        toggleMenu();
        // console.log("menu");
        event.preventDefault();
    });
    function toggleMenu() {
        $(".navbar-burger").toggleClass("is-active");
        $('.bgTopNav').toggleClass('is-active')
        $('.topNavUl').toggleClass('is-active');
        if (window.innerWidth <= 768) {
            $('header').toggleClass('px-4');
            $('.header__hambcont').toggleClass('mobile-active');
        }
    }

    $("header ul.topNavUl li a").on(
        "click",
        function (event) {
            event.preventDefault();
            toggleMenu();
            var url = $(this).attr("href");
            setTimeout(function () {
                $("html, body")
                    .stop()
                    .animate({ scrollTop: $(url).offset().top, }, 800, "easeInOutExpo" );
            }, 200);

        }
    );

    $("a.btnStart, .ulSummary li a").on( "click", function (event) {
            event.preventDefault();
            var url = $(this).attr("href");
            var duration = ($(this).data("duration")) ? $(this).data("duration") : 800;
            $("html, body")
                .stop()
                .animate({ scrollTop: $(url).offset().top, }, duration, "easeInOutExpo" );

        }
    );

    // $(".header__hambcont").hover(
    //     function(){
    //         console.log('mouseover');
    //         $('.bgTopNav').toggleClass('is-hovered')
    //     },
    //     function(){
    //         console.log('mouseleave');
    //         $('.bgTopNav').toggleClass('is-hovered')
    //     }
    // );
    
})(jQuery);