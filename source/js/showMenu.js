'use strict';

(function(){
	var mainNav = document.querySelector('.main-nav');
	var mainNavList = mainNav.querySelector('.main-nav__list');
	var mainNavBurger = mainNav.querySelector('.main-nav__burger');
	var mainLogo = document.querySelector('.main-logo');

	mainNav.classList.remove('main-nav__list--nojs');
	mainNavBurger.classList.remove('main-nav__burger--nojs');

	var burgerHandler = function() {
		if (mainNavList.classList.contains('main-nav__list--closed')) {
			mainNavList.classList.add('main-nav__list--show');
			mainNavList.classList.remove('main-nav__list--closed');
			mainNavBurger.classList.add('main-nav__burger--opened');
			mainNavBurger.classList.remove('main-nav__burger--closed');
			mainLogo.classList.remove('main-logo--left');
			mainLogo.classList.add('main-logo--center');

		} else if (mainNavList.classList.contains('main-nav__list--show')) {
			mainNavList.classList.add('main-nav__list--closed');
			mainNavList.classList.remove('main-nav__list--show');
			mainNavBurger.classList.add('main-nav__burger--closed');
			mainNavBurger.classList.remove('main-nav__burger--opened');
			mainLogo.classList.remove('main-logo--center');
			mainLogo.classList.add('main-logo--left');
		};
	};

	mainNavBurger.addEventListener('click', function(evt) {
		evt.preventDefault();
		burgerHandler();
	});
}());