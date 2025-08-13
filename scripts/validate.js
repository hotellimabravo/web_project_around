// RECOMENDAÇÕES
//
// formulário de perfil
//
// Ambos os campos são obrigatórios.
// O campo "Nome" deve conter entre 2 e 40 caracteres.
// O campo "Sobre" deve conter entre 2 e 200 caracteres.
//
// formulário de novo local
//
//  Ambos os campos são obrigatórios.
// O campo "Título" deve conter entre 2 e 30 caracteres.
// O campo "URL da imagem" deve conter uma URL.

enableValidation({
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__button',
	inactiveButtonClass: 'popup__button_disabled',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__error_visible',
});
