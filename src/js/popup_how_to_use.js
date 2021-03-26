export default function init_popup_how_to_use() {
    const popup_how_to_use = document.querySelector('.how-to-use__button')
    const popup_instruction = document.querySelector('.instruction-popup')
    const popup_action_close = document.querySelector('.popup__action-close')
    if(popup_how_to_use && popup_instruction && popup_action_close) {
        popup_how_to_use.addEventListener(`click`, function (event) {
            event.preventDefault()
            popup_instruction.classList.toggle(`instruction-popup_active`)
            document.querySelector('body').classList.toggle(`lock`)
        })
        popup_action_close.addEventListener('click', function(event) {
            event.preventDefault();
            popup_instruction.classList.toggle(`instruction-popup_active`)
            document.querySelector('body').classList.toggle(`lock`)
        })
    }
    
    
}