import Card from './Card.js'
import FormValidator from './FormValidator.js'
import initialCards from './data.js'
import { openPopup, closePopup } from './utils.js'

const nameProfile = document.querySelector(".profile__name")
const aboutProfile = document.querySelector(".profile__about")

const editProfile = document.querySelector(".profile__button-edit")
const popupEdit = document.querySelector(".popup_type_edit")
const formEditProfile = popupEdit.querySelector(".form")
const nameInput = formEditProfile.querySelector("#name-input")
const aboutInput = formEditProfile.querySelector("#about-input")

const placeButtonAdd = document.querySelector(".profile__button-add")
const popupNewCard = document.querySelector(".popup_type_new-card")
const formNewCard = popupNewCard.querySelector(".form")
const placeInput = formNewCard.querySelector("#place-input")
const imgInput = formNewCard.querySelector("#img-input")



const placesList = document.querySelector(".places__list")

//Создание карточки
const createCard = (name, link, cardSelector) => {
    const card = new Card(name, link, cardSelector)
    const cardElement = card.generateCard()
    placesList.prepend(cardElement)
}

//Добавляем карточки на старте
initialCards.forEach((item) => {
    createCard(item.name, item.link, '.card_template')
})

//Открываем модалку "Новое место"
function handlePopupNewCardOpen() {
    openPopup(popupNewCard)
    formNewCard.reset()
    cardFormValidator.toggleButtonState()
}

//Добавляем карточку нового места
function handlePopupNewCardSubmit(evt) {
    evt.preventDefault()
    createCard(placeInput.value, imgInput.value, '.card_template')
    closePopup(popupNewCard)
}

//Открываем модалку "Редактирования профиля"
function handlePopupEditOpen() {
    openPopup(popupEdit)
    nameInput.value = nameProfile.textContent
    aboutInput.value = aboutProfile.textContent

}

//Меняем имя и описание профиля
function handlePopupEditSubmit(evt) {
    evt.preventDefault()
    nameProfile.textContent = nameInput.value
    aboutProfile.textContent = aboutInput.value
    closePopup(popupEdit)

}

const formSetting = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_inactive',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
}

const profileFormValidator = new FormValidator(formSetting, formEditProfile)
profileFormValidator.enableValidation()

const cardFormValidator = new FormValidator(formSetting, formNewCard)
cardFormValidator.enableValidation()


editProfile.addEventListener("click", handlePopupEditOpen)
formEditProfile.addEventListener("submit", handlePopupEditSubmit)
placeButtonAdd.addEventListener("click", handlePopupNewCardOpen)
formNewCard.addEventListener("submit", handlePopupNewCardSubmit)







// Решил попробовать сделать класс для попапа, но видо нужно изучить следующий спринт :)
// class Popup {
//     constructor(element) {
//         this._element = element
//     }
//     handleOpenPopup() {
//         this._setEventListeners()
//         this._element.classList.add("popup_opened")
//     }
//     handleClosePopup() {
//         //this._setEventListeners()
//         this._element.classList.remove("popup_opened")
//         //document.removeEventListener('keydown', handleEscUp)
//     }
//     _setEventListeners() {
//         this._element.addEventListener('click', (evt) => {
//             if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
//                 this.handleClosePopup()
//             }
//         })
//         document.addEventListener('keydown', (evt) => {
//             if (evt.key === 'Escape') {
//                 this.handleClosePopup()
//             }
//         })
 
//     }
// }