'use strict';

(function(){
	const mainNav = document.querySelector('.main-nav');
	const mainNavList = mainNav.querySelector('.main-nav__list');
	const mainNavBurger = mainNav.querySelector('.main-nav__burger');
	const mainLogo = document.querySelector('.main-logo');

	mainNav.classList.remove('main-nav__list--nojs');
	mainNavBurger.classList.remove('main-nav__burger--nojs');

	const burgerHandler = function() {
		if (mainNavList.classList.contains('main-nav__list--closed')) {
			mainNavList.classList.add('main-nav__list--show');
			mainNavList.classList.remove('main-nav__list--closed');
			mainNavBurger.classList.add('main-nav__burger--opened');
			mainNavBurger.classList.remove('main-nav__burger--closed');
			mainLogo.classList.add('main-logo--center');

		} else if (mainNavList.classList.contains('main-nav__list--show')) {
			mainNavList.classList.add('main-nav__list--closed');
			mainNavList.classList.remove('main-nav__list--show');
			mainNavBurger.classList.add('main-nav__burger--closed');
			mainNavBurger.classList.remove('main-nav__burger--opened');
			mainLogo.classList.remove('main-logo--center');
		};
	};

	mainNavBurger.addEventListener('click', function(evt) {
		evt.preventDefault();
		burgerHandler();
	});
}());