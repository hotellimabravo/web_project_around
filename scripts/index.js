import { resetValidation } from './utils.js';
import Card from './card.js';
import FormValidator from './formvalidator.js';

const formElement = document.querySelector('#popup__form');
const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');
const addPopupCloseBtn = document.querySelector('.add-popup__close-button');
const nameInput = document.querySelector('#name');
const descriptionInput = document.querySelector('#description');
const profileName = document.querySelector('.profile__info-name');
const profileDescription = document.querySelector('.profile__info-title');
const addFormElement = document.querySelector('.add-popup__form');
const imageNameInput = document.querySelector('#add-name');
const imageLinkInput = document.querySelector('#add-link');
const imagePopup = document.querySelector('.image-popup');
const imagePopupImg = document.querySelector('.image-popup__img');
const imagePopupTitle = document.querySelector('.image-popup__title');
const imagePopupClose = document.querySelector('.image-popup__close');
const galeria = document.querySelector('.element');
const addPopup = document.querySelector('.add-popup');
const addBtn = document.querySelector('.profile__add-button');
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

function openCardPopup() {
	addPopup.classList.add('add-popup_opened');

	imageNameInput.value = '';
	imageLinkInput.value = '';
	// Instancia a classe FormValidator para o formulário específico dentro do popup
	const validationCard = new FormValidator(
		addPopup.querySelector('.popup__form'),
		{
			formSelector: '.popup__form',
			inputSelector: '.popup__input',
			submitButtonSelector: '.popup__button',
			inactiveButtonClass: 'popup__button_disabled',
			inputErrorClass: 'popup__input_type_error',
			errorClass: 'popup__error_visible',
		},
	);

	// Ativa a validação para esse formulário específico
	validationCard.enableValidation();
}
addBtn.addEventListener('click', openCardPopup);

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

addPopupCloseBtn.addEventListener('click', closeCardPopup);

function openPopup() {
	popup.classList.add('popup_opened');
	nameInput.value = profileName.textContent;
	descriptionInput.value = profileDescription.textContent;

	const validationProfile = new FormValidator(formElement, {
		formSelector: '.popup__form',
		inputSelector: '.popup__input',
		submitButtonSelector: '.popup__button',
		inactiveButtonClass: 'popup__button_disabled',
		inputErrorClass: 'popup__input_type_error',
		errorClass: 'popup__error_visible',
	});

	validationProfile.enableValidation();
}

function closePopup() {
	popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

function handleProfileFormSubmit(evt) {
	evt.preventDefault();
	profileName.textContent = nameInput.value;
	profileDescription.textContent = descriptionInput.value;
	closePopup();
}
formElement.addEventListener('submit', handleProfileFormSubmit);

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

		// cardCreate(card);
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

addFormElement.addEventListener('submit', handleAddFormSubmit);

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

document.addEventListener('keydown', handleEscClose);

function clickOutCloseImagePopup(evt) {
	if (evt.target === imagePopup) {
		imagePopup.classList.remove('image-popup_opened');
	}
}

document.addEventListener('click', clickOutCloseImagePopup);
