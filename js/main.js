// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

window.onload = colorChange;
/*====================================
 Function to change text color
 ======================================*/
function colorChange() {
	var hexacode = ['#FF0000', '#00FF00'];
	var el = document.getElementById('rules').style;
	var counter = 0;
	var hexalen = hexacode.length;

	function auto() {
		el.color = hexacode[counter = ++counter % hexalen];
	}
	setInterval(auto, 250);
}

function main() {

	(function () {
		'use strict';

		/* ==============================================
		 Testimonial Slider
		 =============================================== */

		$('a.page-scroll').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top - 40
					}, 900);
					return false;
				}
			}
		});

		/*====================================
		 Function to blink text
		 ======================================*/
		function blinker() {
			$('.blink_me').fadeOut(1000);
			$('.blink_me').fadeIn(1000);
		}

		setInterval(blinker, 1000); //Runs every 2seconds

		/*====================================
		 Function to display Date & Time
		 ======================================*/
		function dateTime() {
			document.getElementById('dtText').innerHTML = new Date();
		}
		setInterval(dateTime, 1000);

		/*====================================
		 Show Menu on Book
		 ======================================*/
		$(window).bind('scroll', function () {
			var navHeight = $(window).height() - 100;
			if ($(window).scrollTop() > navHeight) {
				$('.navbar-default').addClass('on');
			} else {
				$('.navbar-default').removeClass('on');
			}
		});

		$('body').scrollspy({
			target: '.navbar-default',
			offset: 80
		})

		$(document).ready(function () {
			$("#team").owlCarousel({
				navigation: false, // Show next and prev buttons
				slideSpeed: 300,
				paginationSpeed: 400,
				autoHeight: true,
				itemsCustom: [
					[0, 1],
					[450, 2],
					[600, 2],
					[700, 2],
					[1000, 4],
					[1200, 4],
					[1400, 4],
					[1600, 4]
				],
			});

			$("#clients").owlCarousel({
				navigation: false, // Show next and prev buttons
				slideSpeed: 300,
				paginationSpeed: 400,
				autoHeight: true,
				itemsCustom: [
					[0, 1],
					[450, 2],
					[600, 2],
					[700, 2],
					[1000, 4],
					[1200, 5],
					[1400, 5],
					[1600, 5]
				],
			});

			$("#testimonial").owlCarousel({
				navigation: false, // Show next and prev buttons
				slideSpeed: 300,
				paginationSpeed: 400,
				singleItem: true
			});

		});

		/*====================================
		 Portfolio Isotope Filter
		 ======================================*/
		$(window).load(function () {
			var $container = $('#lightbox');
			$container.isotope({
				filter: '*',
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
			$('.cat a').click(function () {
				$('.cat .active').removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$container.isotope({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					}
				});
				return false;
			});
		});
	}());
}
main();