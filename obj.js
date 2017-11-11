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
				var info = $(`<p><strong>Destination: </strong>${response.location}</p>
							<p><strong>Departure: </strong>${response.departure}</p>
							<p><strong>Flight #: </strong>${response.flight}</p>
							<p><strong>Boarding Pass: </strong><a class="view-pass" href="#">View Boarding Pass</a>
							<div class="details">boarding pass image</div></p>`);

				$(ticket).html(info).slideDown();
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