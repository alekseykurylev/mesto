export default class Card {
    constructor({name, link, handleCardClick}, cardSelector) {
        this._title = name
        this._imgLink = link
        this._cardSelector = cardSelector
        this._handleCardClick = handleCardClick
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
    _setEventListeners() {
        this._element.querySelector('.place__like').addEventListener('click', () => {
            this._handleLike()
        })
        this._element.querySelector('.place__delete').addEventListener('click', () => {
            this._handleRemove()
        })
        this._element.querySelector('.place__img').addEventListener('click', () => {
            this._handleCardClick()
        })
    }
}