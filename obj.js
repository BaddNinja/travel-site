var confirmation = {
	init: function() {
		$('.confirmation').on('click', 'button', this.loadConfirmation);
		$('.confirmation').on('click', '.view-pass', this.showBoardingPass);
	},
	loadConfirmation: function() {
		var ticket = $(this).closest('.confirmation').find('.ticket'),
			trip = ticket.data('trip'),
			url = './data/' + trip + '.json';

		$.ajax(url, {
			dataType: 'json',
			contentType: 'application/json',
			success: function(response) {
				var ticketInfo = $('<p>' + response.location + '</p>');
				$('<p>' + response.departure + '</p>').appendTo(ticketInfo);
				$('<p>' + response.flight + '</p>').appendTo(ticketInfo);
				$(ticket).html(ticketInfo).slideDown();
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