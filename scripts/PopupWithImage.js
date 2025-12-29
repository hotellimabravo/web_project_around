import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
	constructor(popupSelector) {
		super(popupSelector);
		this._imageElement = this._popup.querySelector('.image-popup__img');
		this._captionElement = this._popup.querySelector('.image-popup__title');
	}

	open(srcImg, title) {
		this._imageElement.src = srcImg;
		this._imageElement.alt = title;
		this._captionElement.textContent = title;

		// Imagem chama popup de classe diferente - tive que ajustar
		this._popup.classList.add('image-popup_opened');
		document.addEventListener('keydown', this._handleEscClose);
	}

	close() {
		this._popup.classList.remove('image-popup_opened');
		document.removeEventListener('keydown', this._handleEscClose);
	}
}
