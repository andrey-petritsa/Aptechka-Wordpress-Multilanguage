function reset_selects(selects) {
    selects.forEach(select => {
        select.classList.remove("tooth__select_active")
    });
}

function reset_tooth_images(tooth_images) {
    tooth_images.forEach(tooth_image => {
        tooth_image.classList.remove("tooth__image-column_active")
    });
}


export default function init_tooth() {
    let selects = document.querySelectorAll(".tooth__select")
    let tooth_images = document.querySelectorAll(".tooth__image-column")
    if(selects && tooth_images) {
        
        selects.forEach(select => {
            select.addEventListener('click', function(event) {
                event.preventDefault()
                reset_selects(selects)
                reset_tooth_images(tooth_images)
                this.classList.toggle("tooth__select_active")
                let i = Array.prototype.indexOf.call(selects, this);
                tooth_images[i].classList.toggle('tooth__image-column_active')
            })
        });
    }
}




