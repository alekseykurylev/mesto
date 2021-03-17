export default class UserInfo {
    constructor(nameSelector, aboutSelector) {
        this._name = document.querySelector(nameSelector)
        this._about = document.querySelector(aboutSelector)
    }
    getUserInfo() {
        // возвращает объект с данными пользователя
        const user = {
            name: this._name.textContent,
            about: this._about.textContent
        }
        return user
    }
    setUserInfo({name, about}) {
        // принимает новые данные пользователя и добавляет их на страницу
        this._name.textContent = name
        this._about.textContent = about

    }
   
}
