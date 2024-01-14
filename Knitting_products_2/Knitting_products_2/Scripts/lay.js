$('#hamburger').click( () => {
	let disp = $('.navbar .container-fluid').css('display');
	if (disp === 'none') {
		$('.navbar .container-fluid').css('display', 'block');
		$('.body-content').css('margin-top', '200px');
	} else {
		$('.navbar .container-fluid').css('display', 'none');
		$('.body-content').css('margin-top', '100px');
	}
})