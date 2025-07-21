const formElement = document.querySelector('.popup__form');

const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');

const nameInput = document.querySelector('#name');
const descriptionInput = document.querySelector('#description');

const profileName = document.querySelector('.profile__info-name');
const profileDescription = document.querySelector('.profile__info-title');

function openPopup() {
	popup.classList.add('popup_opened');
	nameInput.value = profileName.textContent;
	descriptionInput.value = profileDescription.textContent;
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

const galeria = document.querySelector('.element');

function cardCreate(card) {
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
	likeBtn.src = './images/heart.png';
	likeBtn.alt = 'Imagem de um coração para curtidas!';

	// criar o botão de excluir foto

	txtContainer.append(cardTxt, likeBtn);

	div.append(cardImg, txtContainer);

	return galeria.appendChild(div);
}

window.addEventListener('DOMContentLoaded', () => {
	initialCards.forEach((card) => {
		cardCreate(card);
	});
});
