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



    let swiperStatisticsSlider = function () {
        var swiper = new Swiper("#statistics_slider", {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 10,
            pagination: {
                el: ".statistics_slider-pagination",
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    slidesPerColumn: 2,
                },
                400: {
                    slidesPerView: 2,
                    slidesPerColumn: 2,
                },
                640: {
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                },
                768: {
                    slidesPerView: 1,
                    slidesPerColumn: 2,
                },
                1024: {
                    slidesPerView: 2,
                    slidesPerColumn: 2,
                },
            },
        });
    };
    let swiperFeatureSlider =function () {
        var swiper = new Swiper("#feature_slider", {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 15,
            slidesPerGroup: 1,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            speed: 500,
            pagination: {
                el: ".feature_slider-pagination",
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    slidesPerColumn: 2,
                },
                400: {
                    slidesPerView: 2,
                    slidesPerColumn: 2,
                },
                640: {
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                },
                768: {
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                    slidesPerGroup: 2,
                },
                992: {
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                    slidesPerGroup: 2,
                },
                1200: {
                    slidesPerView: 4,
                    slidesPerColumn: 2,
                    slidesPerGroup: 3,
                },
                1400: {
                    slidesPerView: 5,
                    slidesPerColumn: 2,
                    slidesPerGroup: 4,
                },
            },
        });
    }

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
    let faveButton = function (){
        $('.fave-btn').on('click', function (){
            $(this).toggleClass('active');
        })
    }

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
            // if ($("#statistics_slider").length) {
            //     swiperStatisticsSlider();
            // }
            if ($('.number-cunt').length) {
                increaseDecreaseInput()
            }
            if ($('.fave-btn').length){
                faveButton();
            }
            if ($('#feature_slider').length){
                swiperFeatureSlider();
            }
        },
    };
})();

$(document).ready(function () {
    main.init();
});
