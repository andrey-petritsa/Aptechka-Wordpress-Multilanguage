export default function initPopupHowToUse() {
    const popupHowToUse = document.querySelector(`.how-to-use__button`)
    const popupInstruction = document.querySelector(`.instruction-popup`)
    const popupActionClose = document.querySelector(`.popup__action-close`)
    if (popupHowToUse && popupInstruction && popupActionClose) {
        popupHowToUse.addEventListener(`click`, function (event) {
            event.preventDefault()
            popupInstruction.classList.toggle(`instruction-popup_active`)
            document.querySelector(`body`).classList.toggle(`lock`)
        })
        popupActionClose.addEventListener(`click`, function (event) {
            event.preventDefault()
            popupInstruction.classList.toggle(`instruction-popup_active`)
            document.querySelector(`body`).classList.toggle(`lock`)
        })
    }


}
