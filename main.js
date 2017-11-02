$(document).ready(function() {
	$('.confirmation').on('click', 'button', function() {
		$(this).closest('.confirmation').find('.ticket').slideToggle();
	});

	$('.confirmation').on('click', '.view-pass', function() {
		$(this).closest('.ticket').find('.details').show();
	});
});