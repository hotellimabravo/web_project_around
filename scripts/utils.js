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
		name: 'Parque Nacional da Vanoise',
		link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg',
	},
	{
		name: 'Lago di Braies',
		link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg',
	},
];

let handleCardClick = null;

export function setHandleCardClick(fn) {
	handleCardClick = fn;
}

const renderer = (card) => {
	if (!handleCardClick) return;
	const cardInstance = new Card(card.name, card.link, handleCardClick);
	const cardElement = cardInstance.cardCreateElement();
	section.addItem(cardElement);
};

const section = new Section({ items: initialCards, renderer }, '.element');

export function handleAddFormSubmit(evt) {
	evt.preventDefault();
	if (!handleCardClick) return;
	const newCard = {
		name: imageNameInput.value.trim(),
		link: imageLinkInput.value.trim(),
	};
	const cardInstance = new Card(newCard.name, newCard.link, handleCardClick);
	const cardElement = cardInstance.cardCreateElement();
	section.addItem(cardElement);
	imageNameInput.value = '';
	imageLinkInput.value = '';
}

export function handleProfileFormSubmit(evt) {
	evt.preventDefault();
	profileName.textContent = nameInput.value;
	profileDescription.textContent = descriptionInput.value;
}

export {
	addPopup,
	imageLinkInput,
	imageNameInput,
	popup,
	profileName,
	nameInput,
	profileDescription,
	descriptionInput,
	initialCards,
	section,
};
