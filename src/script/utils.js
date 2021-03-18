export const editProfile = document.querySelector(".profile__button-edit")
export const placeButtonAdd = document.querySelector(".profile__button-add")

export const formEditProfile = document.forms['edit-profile']
export const nameInput = formEditProfile.elements.name
export const aboutInput = formEditProfile.elements.about

export const popupImage = document.querySelector('.popup__image')
export const popupFigcaption = document.querySelector('.popup__figcaption')

export const formNewCard = document.forms['new-card']

export const formSetting = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_inactive',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
}