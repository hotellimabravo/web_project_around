import Card from './card.js';
import Section from './Section.js';

export const addPopup = document.querySelector('.add-popup');
export const imageNameInput = document.querySelector('#add-name');
export const imageLinkInput = document.querySelector('#add-link');
export const profileName = document.querySelector('.profile__info-name');
export const nameInput = document.querySelector('#name');
export const profileDescription = document.querySelector(
	'.profile__info-title',
);
export const descriptionInput = document.querySelector('#description');

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
	{
		name: 'Capacete Top',
		link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH0fvNmYp_L1BuZi-ShsKBSpRuuwB8N9nQYw&s',
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

export { section, initialCards };
