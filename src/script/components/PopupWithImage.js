import Popup from './Popup.js'
import { popupImage, popupFigcaption } from '../utils.js';
export default class PopupWithImage extends Popup {
    open(name, link) {
        super.open()
        popupImage.src = link
        popupImage.alt = name
        popupFigcaption.textContent = name
    }
}