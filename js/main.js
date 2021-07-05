let main = (function () {
    let handleMenuResponsive = function () {
        function close_menu() {
            $(".main-menu,.overlay-menu").removeClass("active");
            $(".hamburger").removeClass("is-active").addClass("unactive");
            // $("body").removeClass("overflow-hidden");
        }

        $(document).on("click", ".hamburger.unactive", function () {
            $(".main-menu,.overlay-menu").addClass("active");
            $(".hamburger").removeClass("unactive").addClass("is-active");
            // $("body").addClass("overflow-hidden");
            return false;
        });
        $(document).on(
            "click",
            ".hamburger.is-active,.bg-layer,.overlay-menu",
            function () {
                close_menu();
                return false;
            }
        );
        // document.getElementsByClassName('bg-layer')[0].addEventListener('click', () => {
        //     close_menu();
        // });
        // document.getElementsByClassName('overlay-menu')[0].addEventListener('click', () => {
        //     close_menu();
        // });
    };

    let handleDropDown = function () {
        $(".custom-dropdown > a").on("click", function (e) {
            e.preventDefault();
           $(this).addClass("active");
        });
        $(document).on("click", function (event) {
            let $trigger = $(".custom-dropdown");
            if ($trigger !== event.target && !$trigger.has(event.target).length) {
                $trigger.removeClass("active");
            }
        });
    };



    let swiperMainSlider = function () {
        let swiperAnimation = new SwiperAnimation();
        new Swiper("#main-slider", {
            autoplay: {
                delay: 10000,
                disableOnInteraction: false,
            },
            spaceBetween: 30,
            effect: "fade",
            speed: 500,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                // type: "fraction",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            on: {
                init: function () {
                    swiperAnimation.init(this).animate();
                },
                slideChange: function () {
                    swiperAnimation.init(this).animate();
                },
            },
        });
    };

    let fixedHeaderOnScroll = function () {
        $(window).scroll(function () {
            let sticky = $("#header"),
                scroll = $(window).scrollTop(),
                body = $("body");

            if (scroll >= 300) {
                sticky.addClass("fixed");
                body.addClass("header-is-fixed");

            } else {
                sticky.removeClass("fixed");
                body.removeClass("header-is-fixed");
            }
        });
    };

    //plus-btnValue minus-btnValue
    let increaseDecreaseInput = function () {
        $(document).on('click', '.minus-btn, .plus-btn', function (e) {
            var $this = $(e.target),
                input = $this.parent().parent().find('.number-cunt'),
                v = $this.hasClass('minus-btn') ? input.val() - 1 : input.val() * 1 + 1,
                min = input.attr('data-min') ? input.attr('data-min') : 1,
                max = input.attr('data-max') ? input.attr('data-max') : false;
            if (v >= min) {
                if (!max === false && v > max) {
                    return false
                } else input.val(v);
            }
            e.preventDefault();
        });
        $(document).on('change', '.number-cunt', function (e) {
            var input = $(e.target),
                min = input.attr('data-min') ? input.attr('data-min') : 1,
                max = input.attr('data-max'),
                v = input.val();
            if (v > max) input.val(max);
            else if (v < min) input.val(min);
        });
    }


    return {
        init: function () {
            handleMenuResponsive();
            fixedHeaderOnScroll();
            handleDropDown();
            if ($("#main-slider").length) {
                swiperMainSlider();
            }
            if ($('.number-cunt').length) {
                increaseDecreaseInput()
            }
        },
    };
})();

$(document).ready(function () {
    main.init();
});
