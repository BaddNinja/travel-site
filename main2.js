var confirmation = {
	init: function() {
		$('.confirmation').on('click', 'button', this.loadConfirmation);
		$('.confirmation').on('click', '.view-pass', this.showBoardingPass);
	},
	loadConfirmation: function() {
		var ticket = $(this).closest('.confirmation').find('.ticket'),
			url = 'http://www.filltext.com/?callback=?';
		$.getJSON(url, {
			'rows': 3,
			'country': '{country}',
			'departure': '{date|01-01-2018,01-15-2018}',
			'flight': '{numberRange|1000to4999}'
		})
		.done(function( data ) {
			$.each(data, function(i, item) {
				var msg =
					'<p><strong>Destination: ' + '</strong>'+ item.country + '</p>' +
					'<p><strong>Departure: ' + '</strong>'+ item.departure + '</p>' +
					'<p><strong>Flight Number: ' + '</strong>'+ item.flight + '</p>' +
					'<p><strong>Boarding Pass: </strong><a class="view-pass" href="#">View Boarding Pass' +
					'</a><div class="details">boarding pass image</div></p>';
				$(ticket).html(msg).slideDown();
			});
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