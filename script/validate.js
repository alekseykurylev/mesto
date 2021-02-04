const formElement = document.querySelector('.form')
const formInput = formElement.querySelector('.form__input')
const formError = formElement.querySelector(`#${formInput.id}-error`)

//Показываем ошибку
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.add('form__input_type_error')
    errorElement.textContent = errorMessage
    errorElement.classList.add('form__input-error_active')
}

//Прячем ошибку
const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.remove('form__input_type_error')
    errorElement.classList.remove('form__input-error_active')
    errorElement.textContent = ''
}

//Проверка поля
const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage)
    } else {
        hideInputError(formElement, inputElement)
    }
}

//Проверяем поля
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid
    })
}

//Меняем кнопку
const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('form__submit_inactive')
    } else {
        buttonElement.classList.remove('form__submit_inactive')
    }
}

//Поиск полей и кнопки
const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.form__input'))
    const buttonElement = formElement.querySelector('.form__submit')

    toggleButtonState(inputList, buttonElement)
    
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement)
            toggleButtonState(inputList, buttonElement)
        })
    })
}

//Поиск формы
const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.form'))
    
    formList.forEach((formElement) => {
        setEventListeners(formElement)
    })
}

enableValidation()
