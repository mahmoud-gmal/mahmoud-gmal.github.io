/*global $, alert, console*/

// adjust header height
$(function () {
	"use strict";
	$("header").height($(window).height());
	$(window).resize(function () {
		$("header").height($(window).height());
	});

	// trigger mixitup
	$("#nice").mixItUp();

	// add class to button for mixitup
	$(".filter").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");

	});

	// links add active class
	$("nav li a").click(function () {

		$(this).parent().addClass("active").siblings().removeClass("active");
	});


	//  responsive navbar
	$("nav a.hidden").on("click", function () {

		$("nav ul").toggleClass('show');
	});

	// smooth scrool to Div 
	$("nav li a").click(function () {
		$("html, body").animate({
			scrollTop: $('#' + $(this).data('value')).offset().top
		}, 1300);
	});


});