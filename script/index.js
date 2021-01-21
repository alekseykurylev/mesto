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
];
const nameProfile = document.querySelector(".profile__name");
const jobProfile = document.querySelector(".profile__job");

const editProfile = document.querySelector(".profile__button-edit");
const popupEdit = document.querySelector(".popup_type_edit");
const formEditProfile = popupEdit.querySelector(".popup__form");
const nameInput = formEditProfile.querySelector("#input_name");
const jobInput = formEditProfile.querySelector("#input_job");

const placeButtonAdd = document.querySelector(".profile__button-add");
const popupNewCard = document.querySelector(".popup_type_new-card");
const formNewCard = popupNewCard.querySelector(".popup__form");
const placeInput = formNewCard.querySelector("#input_place");
const imgInput = formNewCard.querySelector("#input_img");

const popupImage = document.querySelector(".popup_type_image");
const image = document.querySelector(".popup__image");
    const figcaption = document.querySelector(".popup__figcaption");

const placesList = document.querySelector(".places__list");
const cardTemplate = document.querySelector(".card_template").content;

//Карточки из масива при загрузки страницы
function renderItemsStart() {
  initialCards.forEach((item) => {
    renderItem(item.name, item.link);
  });
}
renderItemsStart();

//Рендер карточки
function renderItem(name, link) {
  const htmlElement = cardTemplate.cloneNode(true);
  htmlElement.querySelector(".place__title").textContent = name;
  htmlElement.querySelector(".place__img").src = link;
  htmlElement.querySelector(".place__img").alt = name;

  handleLikePlace(htmlElement);
  handleDeletePlace(htmlElement);
  handlePopupPlaceImage(htmlElement);
  placesList.prepend(htmlElement);
}

//Лайк карточки
function handleLikePlace(evt) {
  evt.querySelector(".place__like").addEventListener("click", function (evt) {
    evt.target.classList.toggle("place__like_active");
  });
}

//Удаление карточки
function handleDeletePlace(evt) {
  evt.querySelector(".place__delete").addEventListener("click", function (evt) {
    evt.target.closest(".place").remove();
  });
}

//Модалка картинки
function handlePopupPlaceImage(evt) {
  const titile = evt.querySelector(".place__title");
  evt.querySelector(".place__img").addEventListener("click", function (evt) {
    image.src = evt.target.src;
    image.alt = titile.textContent;
    figcaption.textContent = titile.textContent;
    togglePopup(popupImage);
  });
}

//Открытие и закрытие модалки
function togglePopup(evt) {
  evt.classList.toggle("popup_opened");
  evt.querySelector(".popup__close").addEventListener("click", function (evt) {
    evt.target.closest(".popup").classList.remove("popup_opened");
  });
}

//Модальное окно профиля
function handlePopupEditOpen() {
  togglePopup(popupEdit);
  if (popupEdit.classList.contains("popup_opened")) {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
  }
}
function handlePopupEditSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  togglePopup(popupEdit);
}

//Модальное окно новое место
function handlePopupNewCardOpen() {
  togglePopup(popupNewCard);
  formNewCard.reset();
}
function handlePopupNewCardSubmit(evt) {
  evt.preventDefault();
  renderItem(placeInput.value, imgInput.value);
  togglePopup(popupNewCard);
}

editProfile.addEventListener("click", handlePopupEditOpen);
formEditProfile.addEventListener("submit", handlePopupEditSubmit);

placeButtonAdd.addEventListener("click", handlePopupNewCardOpen);
formNewCard.addEventListener("submit", handlePopupNewCardSubmit);
