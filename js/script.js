$(document).ready(function () {
	//aside menu
	$('.aside__hide').click(function (event) {
		$('.aside, .aside__hide, .aside__title, .aside__link, .main, .profile, .profile__image, .profile__technical, .decor, .profile__name, .profile__position, .profile__tests-done, .profile__finished-tests, .footer').toggleClass('passive');
	});

	//header burger menu
	$('.header__burger, .close-menu-area, .header__link').click(function (event) {
		$('.header__burger, .header__menu, .header__menu-bg').toggleClass('active');
		$('body').toggleClass('lock');
	});

	//header__profile
	$('.header__profile-image').click(function (event) {
		$('.quiz__body, .header__profile, .footer, .header__profile-image').toggleClass('show');
	});

	//checkbox
	$.each($('.test__form-option'), function (index, val) {
		if ($(this).find('input').prop('checked') == true) {
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.test__form-option', function (event) {
		if ($(this).hasClass('active')) {
			$(this).find('input').prop('checked', false);
		} else {
			$(this).find('input').prop('checked', true);
		}
		$(this).toggleClass('active');
		return false;
	});
});