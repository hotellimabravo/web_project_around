export default class FormValidator {
	constructor(formElement, obj) {
		this._formElement = formElement;
		this._inputSelector = obj.inputSelector;
		this._submitButtonSelector = obj.submitButtonSelector;
		this._inputErrorClass = obj.inputErrorClass;
		this._errorClass = obj.errorClass;
		this._inactiveButtonClass = obj.inactiveButtonClass;
	}

	enableValidation() {
		const inputList = Array.from(
			this._formElement.querySelectorAll(this._inputSelector),
		);
		const submitButton = this._formElement.querySelector(
			this._submitButtonSelector,
		);

		const checkInput = (input) => {
			const divError = this._formElement.querySelector(`#${input.id}-error`);

			if (!input.validity.valid) {
				divError.classList.add('active');
				divError.textContent = input.validationMessage;
			} else {
				divError.classList.remove('active');
				divError.textContent = '';
			}
		};

		const toggleButtonState = () => {
			const isValid = inputList.every((input) => input.validity.valid);
			if (isValid) {
				submitButton.classList.remove(this._inactiveButtonClass);
				submitButton.disabled = false;
			} else {
				submitButton.classList.add(this._inactiveButtonClass);
				submitButton.disabled = true;
			}
		};

		inputList.forEach((input) => {
			input.addEventListener('input', () => {
				checkInput(input);
				toggleButtonState();
			});
		});

		toggleButtonState();
	}
}
