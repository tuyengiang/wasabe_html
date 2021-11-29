jQuery(document).ready(function ($) {
    //slide-home
    $('.owl-carousel.slide-home').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        nav: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });

    //slide poster
    $('.owl-carousel.slide-poster').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        nav: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: false
            }
        }
    });

    //slide product
    $('.owl-carousel.slide-product').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        nav: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 6,
            }
        }
    });

    //slide-banner-sale
    $('.owl-carousel.slide-banner').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        nav: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
            }
        }
    });

    $('.owl-carousel.slide-banner-2').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        nav: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
            }
        }
    });
    //change icon
    $('.owl-carousel .owl-nav button.owl-prev').html('<i class="fa fa-chevron-left" aria-hidden="true"></i>');
    $('.owl-carousel .owl-nav button.owl-next').html('<i class="fa fa-chevron-right" aria-hidden="true"></i>');


    //slide thuong hieu
    $('#slick1').slick({
        rows: 2,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        // autoplay: true,
        // autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 4,
        centerPadding: '10px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    $('button.slick-prev.slick-arrow').html('<svg enable-background="new 0 0 13 20" viewBox="0 0 13 20" x="0" y="0" class="shopee-svg-icon icon-arrow-left-bold"><polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9"></polygon></svg>');
    $('button.slick-next.slick-arrow').html('<svg enable-background="new 0 0 13 21" viewBox="0 0 13 21" x="0" y="0" class="shopee-svg-icon icon-arrow-right-bold"><polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11"></polygon></svg>');

    //slide gallery
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: false,
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,

    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: false,
            smartSpeed: 200,
            slideSpeed: 500,
            margin:10,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });

    //light box
    $('#sync1 a').fancybox();
});

//menu mobile
//menu
document.addEventListener(
    "DOMContentLoaded", () => {
        new Mmenu(
            document.querySelector('#mobile-menu'),
            {
                extensions: ['theme-dark', 'shadow-page'],
                setSelected: true,
            },
            {
                navbars: {
                    breadcrumbs: {
                        removeFirst: true,
                    },

                },
            },
        );
    }
);