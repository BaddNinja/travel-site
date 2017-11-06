var confirmation = {
	init: function() {
		$('.confirmation').on('click', 'button', this.loadConfirmation);
		$('.confirmation').on('click', '.view-pass', this.showBoardingPass);
	},
	loadConfirmation: function() {
		var ticket = $(this).closest('.confirmation').find('.ticket'),
			trip = ticket.data('trip');
		$.ajax('https://BaddNinja.github.io/travel-site/data/' + trip + '.json', {
			contentType: 'application/json',
			dataType: 'json',
			success: function(response) {
				var msg;
				msg.append('<p><strong>Destination: ' + '</strong>'+ response.location + '</p>');
				msg.append('<p><strong>Departure: ' + '</strong>'+ response.departure + '</p>');
				msg.append('<p><strong>Flight Number: ' + '</strong>'+ response.location + '</p>');
				msg.append('<p><strong>Boarding Pass: </strong><a class="view-pass" href="#">View Boarding Pass');
				msg.append('</a><div class="details">boarding pass image HAHA!</div></p>');
			$(ticket).html(msg).slideDown();
			},
			error: function(request, errorType, errorMessage) {
				alert('Error: ' + errorType + ' with message: ' + errorMessage);
			},
			timeout: 3000
		});
	},
	showBoardingPass: function() {
		event.preventDefault();
		$(this).closest('.ticket').find('.details').show();
		$(this).hide();
	}
};

$(document).ready(function() {
	confirmation.init();
});