// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


function animateHeader(callback) {
	callback = callback || $.noop;
	
	// Hide the scrollbars
	$('body').css({overflow: 'hidden'});
	// Animate stamp
	setTimeout(function() {
		// Move in
		$('#header .stamp').addClass('dostamp');
		setTimeout(function() {
			// Show stamp
			$('#header h2').show();
			// Move out
			$('#header .stamp').removeClass('dostamp');
			// Done
			setTimeout(function() {
				$('#header h2').addClass('animationDone');
				$('#header .stamp').hide();
				$('body').removeAttr('style');
				callback(true);
			}, 500);
		}, 900);
	}, 900);
	
}