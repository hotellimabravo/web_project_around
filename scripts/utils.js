import Card from './card.js';
import Section from './Section.js';

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

const initialCards = [
	{
		name: 'Vale de Yosemite',
		link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
	},
	{
		name: 'Lago Louise',
		link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
	},
	{
		name: 'Montanhas Carecas',
		link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg',
	},
	{
		name: 'Latemar',
		link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg',
	},
	{
		name: 'Parque Nacional da Vanoise ',
		link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg',
	},
	{
		name: 'Lago di Braies',
		link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg',
	},
];

const openImagePopup = (src, title) => {
	imagePopupImg.src = src;
	imagePopupImg.alt = title;
	imagePopupTitle.textContent = title;
	imagePopup.classList.add('image-popup_opened');
};

const renderer = (card) => {
	const getCard = new Card(card.name, card.link, openImagePopup);
	const cardElement = getCard.cardCreateElement();
	galeria.appendChild(cardElement);
};

const section = new Section(
	{ items: initialCards, renderer: renderer },
	'.element',
);

window.addEventListener('DOMContentLoaded', () => {
	section.render();

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
		inputErrorClass: 'popup__input-error',
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
		inputErrorClass: 'popup__input-error',
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
