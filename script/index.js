let editProfile = document.querySelector('.profile__button-edit')
let popup = document.querySelector('.popup')
let closePopup = document.querySelector('.popup__close')
let formElement = popup.querySelector('.popup__form')
let nameInput = formElement.querySelector('#input_name')
let jobInput = formElement.querySelector('#input_job')
let nameProfile = document.querySelector('.profile__name')
let jobProfile = document.querySelector('.profile__job')

function addPopup() {
    popup.classList.add('popup_opened')
    if(popup.classList.contains('popup_opened')) {
        nameInput.value = nameProfile.textContent
        jobInput.value = jobProfile.textContent
    }
}

function removePopup() {
    popup.classList.remove('popup_opened')
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    
    nameProfile.textContent = nameInput.value
    jobProfile.textContent = jobInput.value

    removePopup()

}

editProfile.addEventListener('click', addPopup)
closePopup.addEventListener('click', removePopup)
formElement.addEventListener('submit', handleFormSubmit)

