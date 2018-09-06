"use strict";

(function ($) {


    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false;
    });


    $(document).ready(function () {

        var $grid = $('.grid').isotope({

            itemSelector: '.grid__item',
            layoutMode: 'packery',
            packery: {
                gutter: 7
            }
        });

        $grid.isotope({filter: '*'});

        $('.filter-button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});

        });

        $('.button').on('click', function () {
            $('.filter-button-group').find('.button').removeClass('button__activ');
            $(this).addClass('button__activ');
        })

    });



    $('.slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        slide: "div",
        dotsClass: ' slick-dots carousel__dots dots',
    });



    $('.slider__two').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        slide: "div",
        dotsClass: ' slick-dots carousel__dots dots',
        autoplay: true,
        autoplaySpeed: 4000,
    });


    $('.contact__button').click(function () {
        $('.dialog').fadeIn(500);
    });

    function cansel() {
        $('.dialog').toggle('dialog');
    }

    $('.close').click(cansel);
    $('.okay').click(cansel);


    var map = $('.map')[0];
    var uluru = {lat: 49.5687689, lng: 34.5858791};
    var map1 = new google.maps.Map(map,
        {
            center: uluru,
            zoom: 15
        });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map1,
        title: '',
        icon: "img/favicon.svg"
    });


})(jQuery);

