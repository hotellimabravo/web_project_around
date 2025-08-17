export const enableValidation = (obj) => {
	const formList = Array.from(document.querySelectorAll(obj.formSelector));

	formList.forEach((form) => {
		const inputList = Array.from(form.querySelectorAll(obj.inputSelector));
		const submitButton = form.querySelector(obj.submitButtonSelector);

		// função que mostra ou limpa os erros
		function checkInput(input) {
			const divError = form.querySelector(`#${input.id}-error`);

			if (!input.validity.valid) {
				divError.classList.add('active');
				divError.textContent = input.validationMessage;
			} else {
				divError.classList.remove('active');
				divError.textContent = '';
			}
		}

		// função que desabilita/habilita botão conforme inputs
		function toggleButtonState() {
			const isValid = inputList.every((input) => input.validity.valid);
			if (isValid) {
				submitButton.classList.remove(obj.inactiveButtonClass);
				submitButton.disabled = false;
			} else {
				submitButton.classList.add(obj.inactiveButtonClass);
				submitButton.disabled = true;
			}
		}

		//verifica cada input
		inputList.forEach((input) => {
			input.addEventListener('input', () => {
				checkInput(input);
				toggleButtonState();
			});
		});

		// botão volta ao estado inicial
		toggleButtonState();
	});
};

// Função para limpar os erros e resetar botão
export const resetValidation = (form, obj) => {
	const inputList = Array.from(form.querySelectorAll(obj.inputSelector));
	const submitButton = form.querySelector(obj.submitButtonSelector);

	inputList.forEach((input) => {
		const divError = form.querySelector(`#${input.id}-error`);
		divError.classList.remove('active');
	});

	submitButton.classList.add(obj.inactiveButtonClass);
	submitButton.disabled = true;
};
