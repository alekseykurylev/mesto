import Card from './components/Card.js'
import Section from './components/Section.js'
import UserInfo from './components/UserInfo.js'
import PopupWithImage from './components/PopupWithImage.js'
import PopupWithForm from './components/PopupWithForm.js'
import FormValidator from './components/FormValidator.js'
import initialCards from './data.js'
import {
    editProfile,
    placeButtonAdd,
    formEditProfile,
    nameInput,
    aboutInput,
    formNewCard,
    formSetting
} from './utils.js';



const createCard = (name, link) => {
    const card = new Card({
        name: name, link: link,
        handleCardClick: () => {
            popupWithImage.open(name, link)
        }
    }, '.card_template')
    return card.generateCard()
}

const cardList = new Section({
    items: initialCards,
    renderer: (data) => {
        const cardElement = createCard(data.name, data.link)
        cardList.addItem(cardElement)
    }
}, '.places__list')
cardList.renderItems()


const popupWithImage = new PopupWithImage('.popup_type_image')
popupWithImage.setEventListeners()


const userInfo = new UserInfo('.profile__name', '.profile__about')
const popupUserForm = new PopupWithForm('.popup_type_edit', {
    formSubmit: (data) => {
        userInfo.setUserInfo(data)
    }
})
popupUserForm.setEventListeners()
const handlePopupEditProfile = () => {
    const userData = userInfo.getUserInfo()
    nameInput.value = userData.name
    aboutInput.value = userData.about
    popupUserForm.open()
}


const popupCardForm = new PopupWithForm('.popup_type_new-card', {
    formSubmit: (data) => {
        const cardElement = createCard(data.place, data.img)
        cardList.addItem(cardElement)
    }
})
popupCardForm.setEventListeners()
const handlePopupNewCard = () => {
    popupCardForm.open()
}


const profileFormValidator = new FormValidator(formSetting, formEditProfile)
profileFormValidator.enableValidation()
const cardFormValidator = new FormValidator(formSetting, formNewCard)
cardFormValidator.enableValidation()


placeButtonAdd.addEventListener("click", handlePopupNewCard)
editProfile.addEventListener("click", handlePopupEditProfile)


