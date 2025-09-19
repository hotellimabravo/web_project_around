// utils.js

export function resetValidation(form, obj) {
	const inputList = Array.from(form.querySelectorAll(obj.inputSelector));
	const submitButton = form.querySelector(obj.submitButtonSelector);

	inputList.forEach((input) => {
		const divError = form.querySelector(`#${input.id}-error`);
		divError.classList.remove(obj.errorClass);
		divError.textContent = '';
	});

	submitButton.classList.add(obj.inactiveButtonClass);
	submitButton.disabled = true;
}
