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
