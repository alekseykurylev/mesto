import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
    constructor(popupSelector, {formSubmit}) {
        super(popupSelector)
        this._formSubmit = formSubmit
        this._form = this._popup.querySelector('.form')
    }
    _getInputValues() {
        // собирает данные всех полей формы
        this._inputList = this._form.querySelectorAll('.form__input')
        const value = {}
        this._inputList.forEach((input) => {
            value[input.name] = input.value
        })
        return value
    }
    close() {
        super.close()
        this._form.reset()
    }
    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault()
            this._formSubmit(this._getInputValues())
            this.close()
        })
    }
}