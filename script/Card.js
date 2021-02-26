export default class Card {
    constructor(name, link, cardSelector) {
        this._title = name
        this._img = link
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
        this._setEventListeners()
        this._element.querySelector('.place__title').textContent = this._title
        this._element.querySelector('.place__img').src = this._img
        this._element.querySelector('.place__img').alt = this._title

        return this._element
    }
    _handleLike() {
        this._element.querySelector('.place__like').classList.toggle('place__like_active')
    }
    _handleRemove() {
        this._element.remove()
    }
    _handleOpenPopup() {
        popupImage.src = this._img
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