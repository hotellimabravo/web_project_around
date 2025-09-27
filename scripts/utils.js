import { initialCards } from './index.js';
import Card from './card.js';

const addPopup = document.querySelector('.add-popup');
const imageNameInput = document.querySelector('#add-name');
const imageLinkInput = document.querySelector('#add-link');
const popup = document.querySelector('.popup');
const nameInput = document.querySelector('#name');
const profileName = document.querySelector('.profile__info-name');
const descriptionInput = document.querySelector('#description');
const profileDescription = document.querySelector('.profile__info-title');
const galeria = document.querySelector('.element');
const imagePopupClose = document.querySelector('.image-popup__close');
const imagePopup = document.querySelector('.image-popup');
const imagePopupImg = document.querySelector('.image-popup__img');
const imagePopupTitle = document.querySelector('.image-popup__title');

window.addEventListener('DOMContentLoaded', () => {
	const openImagePopup = (src, title) => {
		imagePopupImg.src = src;
		imagePopupImg.alt = title;
		imagePopupTitle.textContent = title;
		imagePopup.classList.add('image-popup_opened');
	};

	initialCards.forEach((card) => {
		const getCard = new Card(card.name, card.link, openImagePopup);
		getCard.cardCreateElement();
		galeria.appendChild(getCard.cardCreateElement());
	});

	imagePopupClose.addEventListener('click', () => {
		imagePopup.classList.remove('image-popup_opened');
	});
});

function handleAddFormSubmit(evt) {
	evt.preventDefault();
	const openImagePopup = (src, title) => {
		imagePopupImg.src = src;
		imagePopupImg.alt = title;
		imagePopupTitle.textContent = title;
		imagePopup.classList.add('image-popup_opened');
	};
	const newCard = {
		name: imageNameInput.value.trim(),
		link: imageLinkInput.value.trim(),
	};
	const addCard = new Card(newCard.name, newCard.link, openImagePopup);
	addCard.cardCreateElement();
	galeria.prepend(addCard.cardCreateElement());
	closeCardPopup();
	imageNameInput.value = '';
	imageLinkInput.value = '';
}

function openCardPopup() {
	addPopup.classList.add('add-popup_opened');
	imageNameInput.value = '';
	imageLinkInput.value = '';
}

function closeCardPopup() {
	addPopup.classList.remove('add-popup_opened');
	resetValidation(addPopup.querySelector('.popup__form'), {
		inputSelector: '.popup__input',
		submitButtonSelector: '.popup__button',
		inactiveButtonClass: 'popup__button_disabled',
		inputErrorClass: 'popup__input_type_error',
		errorClass: 'popup__error_visible',
	});
}

function resetValidation(form, obj) {
	const inputList = Array.from(form.querySelectorAll(obj.inputSelector));
	const submitButton = form.querySelector(obj.submitButtonSelector);

	inputList.forEach((input) => {
		const divError = form.querySelector(`#${input.id}-error`);
		divError.classList.remove(obj.errorClass);
		divError.textContent = '';
	});

	submitButton.classList.add(obj.inactiveButtonClass);
	submitButton.disabled = true;
}

function openPopup() {
	popup.classList.add('popup_opened');
	nameInput.value = profileName.textContent;
	descriptionInput.value = profileDescription.textContent;
}

function closePopup() {
	popup.classList.remove('popup_opened');
	resetValidation(popup.querySelector('.popup__form'), {
		inputSelector: '.popup__input',
		submitButtonSelector: '.popup__button',
		inactiveButtonClass: 'popup__button_disabled',
		inputErrorClass: 'popup__input_type_error',
		errorClass: 'popup__error_visible',
	});
}

function handleProfileFormSubmit(evt) {
	evt.preventDefault();
	profileName.textContent = nameInput.value;
	profileDescription.textContent = descriptionInput.value;
	closePopup();
}

function handleEscClose(evt) {
	if (evt.key === 'Escape') {
		if (popup.classList.contains('popup_opened')) {
			closePopup();
		}
		if (addPopup.classList.contains('add-popup_opened')) {
			closeCardPopup();
		}
		if (imagePopup.classList.contains('image-popup_opened')) {
			imagePopup.classList.remove('image-popup_opened');
		}
	}
}

function clickOutCloseImagePopup(evt) {
	if (evt.target === imagePopup) {
		imagePopup.classList.remove('image-popup_opened');
	}
}

export {
	openCardPopup,
	addPopup,
	imageLinkInput,
	imageNameInput,
	closeCardPopup,
	closePopup,
	popup,
	openPopup,
	profileName,
	nameInput,
	profileDescription,
	descriptionInput,
	handleProfileFormSubmit,
	imagePopup,
	handleAddFormSubmit,
	handleEscClose,
	clickOutCloseImagePopup,
};
