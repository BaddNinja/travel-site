var confirmation = {
	init: function() {
		$('.confirmation').on('click', 'button', this.loadConfirmation);
		$('.confirmation').on('click', '.view-pass', this.showBoardingPass);
	},
	loadConfirmation: function() {
		alert('You pressed a button!');
		var ticket = $(this).closest('.confirmation').find('.ticket'),
			trip = ticket.data('trip'),
			url = 'https://BaddNinja.github.io/travel-site/data/' + trip + '.json';
		alert(url);
		$.ajax(url, {
			dataType: 'json',
			contentType: 'application/json',
			success: function(response) {
				$(ticket).html(response).slideDown();
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