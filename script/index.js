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

const popupImage = document.querySelector(".popup_type_image")
const image = document.querySelector(".popup__image")
const figcaption = document.querySelector(".popup__figcaption")

const placesList = document.querySelector(".places__list")
const cardTemplate = document.querySelector(".card_template").content

//Карточки из масива при загрузке страницы
function renderItemsStart() {
    initialCards.forEach((item) => {
        renderItem(item.name, item.link)
    })
}
renderItemsStart()

//Рендер карточки
function renderItem(name, link) {
    const htmlElement = createCard(name, link)
    placesList.prepend(htmlElement)
}

//Создание карточки
function createCard(name, link) {
    const cardElement = cardTemplate.cloneNode(true)
    cardElement.querySelector(".place__title").textContent = name
    cardElement.querySelector(".place__img").src = link
    cardElement.querySelector(".place__img").alt = name

    handleLikePlace(cardElement)
    handleDeletePlace(cardElement)
    handlePopupPlaceImage(cardElement, name, link)

    return cardElement
}

  

//Лайк карточки
function handleLikePlace(evt) {
    evt.querySelector(".place__like").addEventListener("click", (evt) => {
        evt.target.classList.toggle("place__like_active")
    })
}

//Удаление карточки
function handleDeletePlace(evt) {
    evt.querySelector(".place__delete").addEventListener("click", (evt) => {
        evt.target.closest(".place").remove()
    })
}

//Открываем изображение в модалке
function handlePopupPlaceImage(cardElement, name, link) {
    cardElement.querySelector(".place__img").addEventListener("click", () => {
        image.src = link
        image.alt = name
        figcaption.textContent = name
        openPopup(popupImage)
    })
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

//Открываем модалку "Новое место"
function handlePopupNewCardOpen() {
    openPopup(popupNewCard)
    formNewCard.reset()
    
}

//Добавляем карточку нового места
function handlePopupNewCardSubmit(evt) {
    evt.preventDefault()
    renderItem(placeInput.value, imgInput.value)
    closePopup(popupNewCard)

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


editProfile.addEventListener("click", handlePopupEditOpen)
formEditProfile.addEventListener("submit", handlePopupEditSubmit)
placeButtonAdd.addEventListener("click", handlePopupNewCardOpen)
formNewCard.addEventListener("submit", handlePopupNewCardSubmit)
