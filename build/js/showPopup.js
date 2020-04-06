'use strict';

(function(){
	const actionsButton = document.querySelector('.actions__button');
	const overlay = document.querySelector('.popup__overlay');
	const popup = document.querySelector('.popup');
	const popupCloseButton = popup.querySelector('.popup__close');

	const closePopup = function() {
		popup.classList.remove('popup--show');
		overlay.classList.remove('popup__overlay--show');
	};

	const popupHandler = function() {
		popup.classList.add('popup--show');
		overlay.classList.add('popup__overlay--show');

		popupCloseButton.addEventListener('click', function(evt) {
			evt.preventDefault();
			closePopup();
		});

		const closePopupEsc = function(evt) {
			if (evt.keyCode === 27) {
				evt.preventDefault();
				closePopup();
				document.removeEventListener('keydown', closePopupEsc);
			}
		};
		document.addEventListener('keydown', closePopupEsc);
	};
	
	actionsButton.addEventListener('click', function(evt) {
		evt.preventDefault();
		popupHandler();
	});

}());