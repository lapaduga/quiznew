$(document).ready(function () {
	//aside menu
	$('.aside__hide').click(function (event) {
		$('.aside, .aside__hide, .aside__title, .aside__link, .aside__title-passive, .main, .profile, .profile__image, .profile__technical, .decor, .profile__name, .profile__position, .profile__tests-done, .profile__finished-tests, .footer').toggleClass('passive');
	});

	//checkbox
	$.each($('.test__form-option'), function(index, val){
		if($(this).find('input').prop('checked')==true){
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.test__form-option', function(event){
		if ($(this).hasClass('active')) {
			$(this).find('input').prop('checked', false);
		} else {
			$(this).find('input').prop('checked', true);
		}
		$(this).toggleClass('active');
		return false;
	});
});