$(document).ready(function() {

	$('.site-nav a').on('click', function(event) {
		event.preventDefault();

		var target = $( $(this).attr('href') );
		//var id = target.attr('href');


		if ( target.selector.substring(0,1) === '#' ) {
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 700);
		} 

	});

});