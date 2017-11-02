$(document).ready(function() {
	$('.confirmation').on('click', 'button', function(e) {
		var ticket = $(e.target).closest('.confirmation').find('.ticket'),
			trip = ticket.data('trip');
		$.ajax('https://BaddNinja.github.io/travel-site/html/' + trip + '.html', {
			success: function(response) {
				$(ticket).html(response).slideDown();
			},
			error: function(request, errorType, errorMessage) {
				alert('Error: ' + errorType + ' with message: ' + errorMessage);
			},
			timeout: 3000
		});
	});

	$('.confirmation').on('click', '.view-pass', function(event) {
		event.preventDefault();
		$(this).closest('.ticket').find('.details').show();
	});
});