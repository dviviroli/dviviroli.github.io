
/*
	Daniel Viviroli, https://github.com/dviviroli
	Basis: "Spatial" by TEMPLATED templated.co
*/

(function($) {
	$(function() {
		var	$window = $(window),
			$body = $('body');
			$body.addClass('is-loading');
			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});
	});
});
