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

const popup = document.querySelectorAll(".popup")
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
    const htmlElement = cardTemplate.cloneNode(true)
    htmlElement.querySelector(".place__title").textContent = name
    htmlElement.querySelector(".place__img").src = link
    htmlElement.querySelector(".place__img").alt = name

    handleLikePlace(htmlElement)
    handleDeletePlace(htmlElement)
    handlePopupPlaceImage(htmlElement)
    placesList.prepend(htmlElement)
}

//Лайк карточки
function handleLikePlace(evt) {
    evt.querySelector(".place__like").addEventListener("click", function (evt) {
        evt.target.classList.toggle("place__like_active")
    })
}

//Удаление карточки
function handleDeletePlace(evt) {
    evt.querySelector(".place__delete").addEventListener("click", function (evt) {
        evt.target.closest(".place").remove()
    })
}

//Открываем изображение в модалке
function handlePopupPlaceImage(evt) {
    const titile = evt.querySelector(".place__title")
    evt.querySelector(".place__img").addEventListener("click", function (evt) {
        image.src = evt.target.src
        image.alt = titile.textContent
        figcaption.textContent = titile.textContent
        openPopup(popupImage)
    })
}

//Открываем модалку "Редактирования профиля"
function handlePopupEditOpen() {
    openPopup(popupEdit)
    nameInput.value = nameProfile.textContent
    aboutInput.value = aboutProfile.textContent
    formEditProfile.addEventListener("submit", handlePopupEditSubmit)
}

//Меняем имя и описание профиля
function handlePopupEditSubmit(evt) {
    evt.preventDefault()
    nameProfile.textContent = nameInput.value
    aboutProfile.textContent = aboutInput.value
    closePopup(popupEdit)
    formEditProfile.removeEventListener("submit", handlePopupEditSubmit)
}

//Открываем модалку "Новое место"
function handlePopupNewCardOpen() {
    openPopup(popupNewCard)
    formNewCard.reset()
    formNewCard.addEventListener("submit", handlePopupNewCardSubmit)
}

//Добавляем карточку нового места
function handlePopupNewCardSubmit(evt) {
    evt.preventDefault()
    renderItem(placeInput.value, imgInput.value)
    closePopup(popupNewCard)
    formNewCard.removeEventListener("submit", handlePopupNewCardSubmit)
}

//Закрытие модалки
function closePopup(evt) {
    evt.classList.remove("popup_opened")
    document.removeEventListener('keydown', handleEscUp)
}

//Закрытие модалки на Esc
function handleEscUp(evt) {
    const activePopup = document.querySelector('.popup_opened')
    if (evt.key === 'Escape') {
        closePopup(activePopup)
    }
}

popup.forEach((item) => {
    item.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
            closePopup(item)
        }
    })
})

//Открытие модалки
function openPopup(evt) {
    evt.classList.add("popup_opened")
    document.addEventListener('keydown', handleEscUp)
}


editProfile.addEventListener("click", handlePopupEditOpen)
placeButtonAdd.addEventListener("click", handlePopupNewCardOpen)
