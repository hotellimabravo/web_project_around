import Card from './card.js';
import FormValidator from './formvalidator.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import {
	addPopup,
	profileName,
	nameInput,
	profileDescription,
	descriptionInput,
	setHandleCardClick,
	section,
} from './utils.js';

const formElement = document.querySelector('#popup__form');
const editButton = document.querySelector('.profile__edit-button');
const addFormElement = document.querySelector('.add-popup__form');
const addBtn = document.querySelector('.profile__add-button');

const imagePopup = new PopupWithImage('.image-popup');
imagePopup.setEventListeners();

const handleCardClick = (link, name) => {
	imagePopup.open(link, name);
};

setHandleCardClick(handleCardClick);
section.render();

const popupProfile = new PopupWithForm('.popup', (formData) => {
	profileName.textContent = formData.name;
	profileDescription.textContent = formData.description;
	popupProfile.close();
});

const popupAdd = new PopupWithForm('.add-popup', (formData) => {
	const name = formData['novo local'];
	const link = formData['addCardlink'];
	const cardInstance = new Card(name, link, handleCardClick);
	const cardElement = cardInstance.cardCreateElement();

	section.addItem(cardElement);
	popupAdd.close();
});

popupProfile.setEventListeners();
popupAdd.setEventListeners();

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
	const currentData = {
		name: profileName.textContent,
		description: profileDescription.textContent,
	};
	nameInput.value = currentData.name;
	descriptionInput.value = currentData.description;
});

addBtn.addEventListener('click', () => {
	popupAdd.open();
});
