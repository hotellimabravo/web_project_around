import Card from './card.js';
import FormValidator from './formvalidator.js';
import {
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
} from './utils.js';

const formElement = document.querySelector('#popup__form');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const addPopupCloseBtn = document.querySelector('.add-popup__close-button');
const addFormElement = document.querySelector('.add-popup__form');
const addBtn = document.querySelector('.profile__add-button');
export const initialCards = [
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
const validationConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__button',
	inactiveButtonClass: 'popup__button_disabled',
	inputErrorClass: 'input__type_error',
	errorClass: 'popup__error_visible',
};

const validationProfile = new FormValidator(formElement, validationConfig);
validationProfile.enableValidation();

const validationCard = new FormValidator(
	addPopup.querySelector('.popup__form'),
	validationConfig,
);
validationCard.enableValidation();

addBtn.addEventListener('click', openCardPopup);
addPopupCloseBtn.addEventListener('click', closeCardPopup);
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleProfileFormSubmit);
addFormElement.addEventListener('submit', handleAddFormSubmit);
document.addEventListener('keydown', handleEscClose);
document.addEventListener('click', clickOutCloseImagePopup);
