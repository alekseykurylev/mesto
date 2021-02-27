import { popupCard, popupImage, popupFigcaption, openPopup, closePopup } from './utils.js'
export default class Card {
    constructor(name, link, cardSelector) {
        this._title = name
        this._imgLink = link
        this._cardSelector = cardSelector
    }
    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.place')
            .cloneNode(true);

        return cardElement;
    }
    generateCard() {
        this._element = this._getTemplate()
        this._img = this._element.querySelector('.place__img')
        this._setEventListeners()
        this._element.querySelector('.place__title').textContent = this._title
        this._img.src = this._imgLink
        this._img.alt = this._title

        return this._element
    }
    _handleLike() {
        this._element.querySelector('.place__like').classList.toggle('place__like_active')
    }
    _handleRemove() {
        this._element.remove()
        this._element = ''
    }
    _handleOpenPopup() {
        popupImage.src = this._imgLink
        popupImage.alt = this._title
        popupFigcaption.textContent = this._title
        openPopup(popupCard)
    }
    _handleClosePopup() {
        closePopup(popupCard)
        popupImage.src = ''
        popupImage.alt = ''
        popupFigcaption.textContent = ''
    }
    _setEventListeners() {
        this._element.querySelector('.place__like').addEventListener('click', () => {
            this._handleLike()
        })
        this._element.querySelector('.place__delete').addEventListener('click', () => {
            this._handleRemove()
        })
        this._element.querySelector('.place__img').addEventListener('click', () => {
            this._handleOpenPopup()
        })
    }
}