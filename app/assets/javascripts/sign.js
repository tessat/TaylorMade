// ***************
// Includes
// ***************

// ***************
// Events
// ***************

// On page load
$(document).ready(function() {

	runSignUnfold();
	
});

// On rung unfold trigger
$('.sign ul li').live('unfold', function() {
	
	unfold(this);

});



// ***************
// Functions
// ***************

function runSignUnfold() {
	setTimeout(function() {
		$('.sign ul li:first').trigger('unfold');
	}, 500);
}


function unfold(rung) {
	// Lower the rung
	$(rung).addClass('down');
	
	// Swing the rung
	setTimeout(function() {
		
		$(rung).addClass('swing');
		var counter = 0;
		var intv = setInterval(function() {
			$(rung).toggleClass('back');
			// Stop the swing
			if (counter > 2) {
				// Stop the swing
				clearInterval(intv);
				// Reset the position
				$(rung).removeClass('swing');
				// Trigger the next rung
				if ($(rung).next('li').length > 0) {
					setTimeout(function() {
						$(rung).next('li').trigger('unfold');
					}, 1000);
				}
			}
			counter++;
		}, 450);
		
	}, 100);
}

