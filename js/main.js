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
    let swiperFeatureSlider = function () {
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
                1600: {
                    slidesPerView: 5,
                    slidesPerColumn: 2,
                    slidesPerGroup: 4,
                },
            },
        });
    }

    let albumSwiper = function () {
        var swiper = new Swiper("#album_slider", {
            spaceBetween: 10,
            slidesPerView: 4,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            speed: 500,
            pagination: {
                el: ".album_slider-pagination",
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 2,
                },
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 3,
                },
                1600: {
                    slidesPerView: 4,
                }
            },
        });
    }

    let productDetailsSlider = function () {
        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: false,
            watchSlidesVisibility: true,
            watchSlidesProgress: false,
            breakpoints: {
                0: {
                    slidesPerView: 3,
                },
                400: {
                    slidesPerView: 3,
                },
                640: {
                    slidesPerView: 4,
                },
                768: {
                    slidesPerView: 5,
                },
                992: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 4,
                },
            },
        });
        var swiper2 = new Swiper(".mySwiper2", {
            spaceBetween: 10,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            thumbs: {
                swiper: swiper
            }
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
    let faveButton = function () {
        $('.fave-btn').on('click', function () {
            $(this).toggleClass('active');
        })
    }
    let shareButton = function () {
        var popover = new bootstrap.Popover(document.querySelector('.copy-btn'), {
            // trigger: 'focus'
        })
        var clipboard = new ClipboardJS('.copy-btn');
        // $(function () {
        //     $('[data-toggle="popover"]').popover(
        //         {
        //             delay: {"show": 300, "hide": 100}
        //         }
        //     );
        // })
        $(".copy-btn").on("shown.bs.popover", function () {
            setTimeout(function () {
                popover.hide();
            }, 1500)
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

    let imgUpload = function () {
        // var input = $(".edit-profile-photo input");
        var readURL = function (input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('.pic1').attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        };
        $(".up1").on('change', function () {
            readURL(this);
        });
    }

    let galleryFancybox = function () {
        Fancybox.bind('[data-fancybox="gallery"]', {
            // hideClass: false,
        });
    }
    let tit_width = function () {
            let phoneInput = $('.iti--allow-dropdown');
            let phoneNumberDrop = $(".iti__country-list")
            let phoneInputWidth = phoneInput.width();
            phoneNumberDrop.css('width', phoneInputWidth + 'px')
            $(window).on('resize', function () {
                let phoneInputWidth = phoneInput.width();
                phoneNumberDrop.css('width', phoneInputWidth + 'px');
            });
    };
    $("#newUserModal").on("shown.bs.modal", function (){
        tit_width()
    })
    $("#map_search").focus(function() {
        $("#searchURL").fadeIn(200)
    });
    $("#map_search").on("focusout", function (){
        $("#searchURL").fadeOut(200)
    })

    return {
        init: function () {
            handleMenuResponsive();
            fixedHeaderOnScroll();
            handleDropDown();
            // if ($("#statistics_slider").length) {
            //     swiperStatisticsSlider();
            // }
            if ($(".tit-input").length) {
                tit_width();
            }
            if ($('.number-cunt').length) {
                increaseDecreaseInput()
            }
            if (("#album_slider").length) {
                albumSwiper();
            }
            if ($('.fave-btn').length) {
                faveButton();
            }
            if ($('#feature_slider').length) {
                swiperFeatureSlider();
            }
            if ($(".copy-btn").length) {
                shareButton();
            }
            if ($(".mySwiper").length) {
                productDetailsSlider();
            }
            if ($(".pic1").length) {
                imgUpload();
            }
            if($('[data-fancybox="gallery"]').length){
                galleryFancybox();
            }

        },
    };
})();

$(document).ready(function () {
    main.init();
});
