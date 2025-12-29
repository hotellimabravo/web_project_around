import Card from './card.js';
import FormValidator from './formvalidator.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import {
	addPopup,
	imageLinkInput,
	imageNameInput,
	popup,
	profileName,
	nameInput,
	profileDescription,
	descriptionInput,
	handleProfileFormSubmit,
	handleAddFormSubmit,
	setHandleCardClick,
	section,
} from './utils.js';

const formElement = document.querySelector('#popup__form');
const editButton = document.querySelector('.profile__edit-button');
const addFormElement = document.querySelector('.add-popup__form');
const addBtn = document.querySelector('.profile__add-button');

const popupProfile = new Popup('.popup');
const popupAdd = new Popup('.add-popup');
const imagePopup = new PopupWithImage('.image-popup');

imagePopup.setEventListeners();
popupProfile.setEventListeners();
popupAdd.setEventListeners();

const handleCardClick = (link, name) => {
	imagePopup.open(link, name);
};

setHandleCardClick(handleCardClick);
section.render();

const validationConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__button',
	inactiveButtonClass: 'popup__button_disabled',
	inputErrorClass: 'popup__input-error',
	errorClass: 'popup__error_visible',
};

const validationProfile = new FormValidator(formElement, validationConfig);
validationProfile.enableValidation();

const validationCard = new FormValidator(
	addPopup.querySelector('.popup__form'),
	validationConfig,
);
validationCard.enableValidation();

editButton.addEventListener('click', () => {
	popupProfile.open();
	nameInput.value = profileName.textContent;
	descriptionInput.value = profileDescription.textContent;
});

addBtn.addEventListener('click', () => {
	popupAdd.open();
});

formElement.addEventListener('submit', (evt) => {
	handleProfileFormSubmit(evt);
	popupProfile.close();
});

addFormElement.addEventListener('submit', (evt) => {
	handleAddFormSubmit(evt);
	popupAdd.close();
});
