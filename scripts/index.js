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

//
//
//
// CARREGANDO 6 IMAGENS
//
//
//
// função que cria DIV
//
//
window.addEventListener('DOMContentLoaded', () => {
	const galeria = document.querySelector('.element');

	initialCards.forEach((card) => {
		// console.log(card.link);
		const div = document.createElement('div');
		div.classList.add('card');

		div.innerHTML = `
								<img
									src="${card.link}"
									alt="${card.name}"
									class="card__img" />
								<div class="card__text-container">
									<h2 class="card__text">${
										card.name.length > 20
											? card.name.slice(0, 15) + '...'
											: card.name
									}</h2>
									<img
										src="./images/heart.png"
										alt="Imagem de um coração para curtidas"
										class="card__like-button" />
								</div>

		`;
		galeria.appendChild(div);
	});
});

//
//
// Função que chama os dados da variavel initialCards
//
//
// function lendoValores(cards) {
// 	cards.forEach((card) => {
// 		console.log(`Name: ${card.name} | Link: ${card.link}`);
// 	});
// }
// lendoValores(initialCards);
//
//
//
