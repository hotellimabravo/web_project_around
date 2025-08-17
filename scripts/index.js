import { enableValidation, resetValidation } from './validate.js';

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

// popup imagens
const imagePopup = document.querySelector('.image-popup');
const imagePopupImg = document.querySelector('.image-popup__img');
const imagePopupTitle = document.querySelector('.image-popup__title');
const imagePopupClose = document.querySelector('.image-popup__close');

//  Cria galeria do feed
const galeria = document.querySelector('.element');

// abre o popup e cria função do botão
const addPopup = document.querySelector('.add-popup');
const addBtn = document.querySelector('.profile__add-button');

//  função que abre o add card popup
function openCardPopup() {
	addPopup.classList.add('add-popup_opened');

	imageNameInput.value = '';
	imageLinkInput.value = '';

	// limpa erros e reseta botão
	resetValidation(addPopup.querySelector('.popup__form'), {
		inputSelector: '.popup__input',
		submitButtonSelector: '.popup__button',
		inactiveButtonClass: 'popup__button_disabled',
		inputErrorClass: 'popup__input_type_error',
		errorClass: 'popup__error_visible',
	});
}
addBtn.addEventListener('click', openCardPopup);

// função que fecha o add card popup
function closeCardPopup() {
	addPopup.classList.remove('add-popup_opened');
}
addPopupCloseBtn.addEventListener('click', closeCardPopup);

//  função que abre o profile popup
function openPopup() {
	popup.classList.add('popup_opened');
	nameInput.value = profileName.textContent;
	descriptionInput.value = profileDescription.textContent;

	// limpa erros e reseta botão
	resetValidation(popup.querySelector('.popup__form'), {
		inputSelector: '.popup__input',
		submitButtonSelector: '.popup__button',
		inactiveButtonClass: 'popup__button_disabled',
		inputErrorClass: 'popup__input_type_error',
		errorClass: 'popup__error_visible',
	});
}

//  função que fecha o profile popup
function closePopup() {
	popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

// função que envia as infs digitadas no profile popup
function handleProfileFormSubmit(evt) {
	evt.preventDefault();
	profileName.textContent = nameInput.value;
	profileDescription.textContent = descriptionInput.value;
	closePopup();
}
formElement.addEventListener('submit', handleProfileFormSubmit);
//
//
// CARREGANDO 6 IMAGENS NO FEED
//
//
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

function cardCreateElement(card) {
	// cria a div do cartão do feed
	const div = document.createElement('div');
	div.classList.add('card');

	// cria a imagem do card
	const cardImg = document.createElement('img');
	cardImg.classList.add('card__img');
	cardImg.src = card.link;
	cardImg.alt = card.name;

	// cria o card container
	const txtContainer = document.createElement('div');
	txtContainer.classList.add('card__text-container');

	// cria o card__text
	const cardTxt = document.createElement('h2');
	cardTxt.classList.add('card__text');
	cardTxt.textContent =
		card.name.length > 16 ? card.name.slice(0, 11) + '...' : card.name;

	// cria o coração de like
	const likeBtn = document.createElement('img');
	likeBtn.classList.add('card__like-button');
	likeBtn.src = './images/heartSVG.svg';
	likeBtn.alt = 'Imagem de um coração para curtidas!';

	likeBtn.addEventListener('click', () => {
		const isLiked = likeBtn.classList.toggle('liked');

		if (isLiked) {
			likeBtn.src = './images/heartSVGlike.svg';
		} else {
			likeBtn.src = './images/heartSVG.svg';
		}
	});

	// criar o botão de excluir foto
	const delBtn = document.createElement('img');
	delBtn.classList.add('card__delete-button');
	delBtn.src = './images/trash.png';
	delBtn.addEventListener('click', () => {
		div.remove();
	});

	cardImg.addEventListener('click', () => {
		openImagePopup(card.link, card.name);
	});

	txtContainer.append(cardTxt, likeBtn);

	div.append(cardImg, txtContainer, delBtn);

	return div;
}

window.addEventListener('DOMContentLoaded', () => {
	initialCards.forEach((card) => {
		const cardElement = cardCreateElement(card);
		// cardCreate(card);
		galeria.appendChild(cardElement);
	});
});

// função que adiciona imagens ao feed que já possui 6 imagens
function handleAddFormSubmit(evt) {
	evt.preventDefault();

	const newCard = {
		name: imageNameInput.value.trim(),
		link: imageLinkInput.value.trim(),
	};

	// sem validação

	const cardElement = cardCreateElement(newCard);
	galeria.prepend(cardElement);

	closeCardPopup();

	imageNameInput.value = '';
	imageLinkInput.value = '';
}

addFormElement.addEventListener('submit', handleAddFormSubmit);

// pop up imagens
function openImagePopup(src, title) {
	imagePopupImg.src = src;
	imagePopupImg.alt = title;
	imagePopupTitle.textContent = title;
	imagePopup.classList.add('image-popup_opened');
}

imagePopupClose.addEventListener('click', () => {
	imagePopup.classList.remove('image-popup_opened');
});

// Habilita a validação do formulário

enableValidation({
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__button',
	inactiveButtonClass: 'popup__button_disabled',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__error_visible',
});

// Função fechar popups com o ESCAPE
function handleEscClose(evt) {
	if (popup.classList.contains('popup_opened')) {
		closePopup();
	}

	if (addPopup.classList.contains('add-popup_opened')) {
		closeCardPopup();
	}
}

document.addEventListener('keydown', handleEscClose);
