import Card from '../components/card.js';
import FormValidator from '../components/formvalidator.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {
	addPopup,
	nameInput,
	descriptionInput,
	setHandleCardClick,
	section,
} from '../components/utils.js';
import UserInfo from '../components/UserInfo.js';

const formElement = document.querySelector('#popup__form');
const editButton = document.querySelector('.profile__edit-button');
const addFormElement = document.querySelector('.add-popup__form');
const addBtn = document.querySelector('.profile__add-button');

const userInfo = new UserInfo({
	nameSelector: '.profile__info-name',
	jobSelector: '.profile__info-title',
});

const imagePopup = new PopupWithImage('.image-popup');
imagePopup.setEventListeners();

const handleCardClick = (link, name) => {
	imagePopup.open(link, name);
};

setHandleCardClick(handleCardClick);
section.render();

const popupProfile = new PopupWithForm('.popup', (formData) => {
	userInfo.setUserInfo({
		name: formData.name,
		job: formData.description,
	});
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
	const currentData = userInfo.getUserInfo();
	nameInput.value = currentData.name;
	descriptionInput.value = currentData.job;
	popupProfile.open();
});

addBtn.addEventListener('click', () => {
	popupAdd.open();
});
