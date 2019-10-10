;jQuery(function ($) {

	'use strict';

	/*------------------------------------
		01. Mobile Menu
	--------------------------------------*/
	$('.primary-menu').meanmenu({
		meanMenuContainer: '.mobile-menu-area',
		meanScreenWidth: "991",
		meanRevealPosition: "right",
	});

	/*-------------------------------------------
	    02. Sticky Header
	--------------------------------------------- */

	let win = $(window);
	let sticky_id = $(".header-area");
	win.on('scroll', function () {
		let scroll = win.scrollTop();
		if (scroll < 245) {
			sticky_id.removeClass("sticky-header");
		} else {
			sticky_id.addClass("sticky-header");
		}
	});

    
	/*------------------------------------
        03. Overlay Close
	--------------------------------------*/
	$(window).scroll(function () {
		if ($(this).scrollTop() !== 0) {
			$('#scrollUp').fadeIn();
		} else {
			$('#scrollUp').fadeOut();
		}
	});
	$('#scrollUp').on('click', function () {
		$("html, body").animate({scrollTop: 0}, 600);
		return false;
    });
    
    /*------------------------------------
		04. Slider
	--------------------------------------*/
    if (jQuery('.slider-active').length) {
        $('.slider-active').owlCarousel({
            items: 5,
            loop: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 10000,
            dots: false,
            margin: 30,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1589: {
                    items: 5
                }
            }
        });
    }




});