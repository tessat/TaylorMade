// ***************
// Includes
// ***************

// ***************
// Events
// ***************

// On page load
$(document).ready(function() {
	// Index load
	if ($('.pages').hasClass('index')) {
	
		// On initial load, do special animation
		if (window.newUser) {
			animateIndexLoad();
		} else {
			quickIndexLoad();
		}

	}

});



// ***************
// Functions
// ***************

function animateIndexLoad() {
	animateHeader(function(r) {
		setTimeout(function() {
			// Animate sign
			$('.pages.index .sign').trigger('animateSign');
		}, 1000);

	});
}

function quickIndexLoad() {
	// Show stamp
	$('#header h2').show();
	// Show sign
	$('.pages.index .sign').trigger('showSign');
}