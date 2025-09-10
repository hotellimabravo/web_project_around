export default class Card {
	constructor(name, link, openImagePopup) {
		this._name = name;
		this._link = link;
		this._openImagePopup = openImagePopup;
	}

	cardCreateElement() {
		const div = document.createElement('div');
		div.classList.add('card');

		const cardImg = document.createElement('img');
		cardImg.classList.add('card__img');
		cardImg.src = this._link;
		cardImg.alt = this._name;

		const txtContainer = document.createElement('div');
		txtContainer.classList.add('card__text-container');

		const cardTxt = document.createElement('h2');
		cardTxt.classList.add('card__text');
		cardTxt.textContent =
			this._name.length > 16 ? this._name.slice(0, 11) + '...' : this._name;

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

		const delBtn = document.createElement('img');
		delBtn.classList.add('card__delete-button');
		delBtn.src = './images/trash.png';
		delBtn.addEventListener('click', () => {
			div.remove();
		});

		cardImg.addEventListener('click', () => {
			this._openImagePopup(this._link, this._name);
		});

		txtContainer.append(cardTxt, likeBtn);

		div.append(cardImg, txtContainer, delBtn);

		return div;
	}
}
