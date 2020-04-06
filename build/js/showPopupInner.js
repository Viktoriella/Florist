'use strict';

(function(){
	const overlay = document.querySelector('.popup__overlay');
	const popup = document.querySelector('.popup');
	const popupCloseButton = popup.querySelector('.popup__close');
	const orderButton = document.querySelector('.inner__order-button');

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

	orderButton.addEventListener('click', function(evt) {
		evt.preventDefault();
		popupHandler();
	});

}());