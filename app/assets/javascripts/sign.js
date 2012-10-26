// ***************
// Includes
// ***************

// ***************
// Events
// ***************

// On animate sign
$('.sign').live('animateSign', function() {
	animateSign();
});

// On show sign
$('.sign').live('showSign', function() {
	showSign();
});

// On rung unfold trigger
$('.sign ul li').live('unfold', function() {
	unfold(this);
});



// ***************
// Functions
// ***************

function animateSign() {
	// Animate sign load
	$('.sign').addClass('animate');
	$('.sign').css({top: '0px'});
		
	// Bounce sign
	setTimeout(function() {
		$('.sign').removeClass('animate');
		
		// Bounce up
		$('.sign').animate({
			top: '-100px',
		}, 300, function() {
			// Bounce down
			$('.sign').animate({
				top: '0px',
			}, {
				duration: 1700,
				specialEasing: {
					top: 'easeOutBounce',
				},
				complete: function() {
					
					// Animate sign container
					var oldHeight = $('.sign-container').css('height');
					$('.sign-container').css({height: 'auto'});
					var newHeight = $('.sign-container').css('height');
					$('.sign-container').css({height: oldHeight});
					$('.sign-container').animate({
						height: newHeight
					}, 500, function() {
						$('.sign-container').css({height: 'auto'});
						
						// Unfold sign
						setTimeout(function() {
							$('.sign ul li:first').trigger('unfold');
						}, 500);
						
					});
					
				}
			});
		});
		
	}, 700);	
}

function showSign() {
	// Show sign container
	$('.sign-container').height('auto');
	$('.sign-container .sign').removeClass('up');
	
	// Unfold sign
	setTimeout(function() {
		$('.sign ul li:first').trigger('unfold');
	}, 900);
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
		}, 340);
		
	}, 220);
}

