
// wrapper function
$(document).ready(function() {  

// cycle documentation:
// http://jquery.malsup.com/cycle/
$('.gallery').cycle({
		fx: 'wipe', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		speed:1000,
		timeout:1000
	});
});

