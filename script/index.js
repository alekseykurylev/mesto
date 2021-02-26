import Card from './Card.js'
import FormValidator from './FormValidator.js'

const initialCards = [
    {
        name: "Архыз",
        link:
            "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
        name: "Челябинская область",
        link:
            "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
        name: "Иваново",
        link:
            "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
        name: "Камчатка",
        link:
            "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
        name: "Холмогорский район",
        link:
            "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
        name: "Байкал",
        link:
            "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
]
const nameProfile = document.querySelector(".profile__name")
const aboutProfile = document.querySelector(".profile__about")

const popups = document.querySelectorAll(".popup")
const popupСloseButton = document.querySelectorAll(".popup__close")

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

const popupCard = document.querySelector(".popup_type_image")
const popupImage = document.querySelector(".popup__image")
const popupFigcaption = document.querySelector(".popup__figcaption")

const placesList = document.querySelector(".places__list")
const cardTemplate = document.querySelector(".card_template").content

//Добавляем карточки на старте
initialCards.forEach((item) => {
    const card = new Card(item.name, item.link, '.card_template')
    const cardElement = card.generateCard()
    placesList.append(cardElement)
})

//Открываем модалку "Новое место"
function handlePopupNewCardOpen() {
    openPopup(popupNewCard)
    formNewCard.reset()
}

//Добавляем карточку нового места
function handlePopupNewCardSubmit(evt) {
    evt.preventDefault()
    const card = new Card(placeInput.value, imgInput.value, '.card_template')
    const cardElement = card.generateCard()
    placesList.prepend(cardElement)
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

popups.forEach((item) => {
    item.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
            closePopup(item)
        }
    })
})

//Открытие модалки
function openPopup(popup) {
    popup.classList.add("popup_opened")
    document.addEventListener('keydown', handleEscUp)
}

//Закрытие модалки
function closePopup(popup) {
    popup.classList.remove("popup_opened")
    document.removeEventListener('keydown', handleEscUp)
}

//Закрытие модалки на Esc
function handleEscUp(evt) {
    const activePopup = document.querySelector('.popup_opened')
    if (evt.key === 'Escape') {
        closePopup(activePopup)
    }
}


const formSettings = (settings) => {
    const formList = Array.from(document.querySelectorAll(settings.formSelector))
    formList.forEach((formElement) => {
        new FormValidator(settings, formElement).enableValidation()
    })
}

formSettings({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_inactive',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
})

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