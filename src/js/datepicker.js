import datepicker from 'js-datepicker'

export default function initDatepicker() {
    const ruOptions = {
        formatter: (input, date) => {
            const currentValue = date.toLocaleDateString()
            input.value = currentValue
        },
        overlayPlaceholder: `Месяц рождения вашего малыша`,
        customDays: [`Пн`, `Вт`, `Ср`, `Чт`, `Пт`, `Сб`, `Вс`],
        customMonths: [`Январь`, `Февраль`, `Март`, `Апрель`, `Май`, `Июнь`, `Июль`, `Август`, `Сентябрь`, `Октябрь`, `Ноябрь`, `Декабрь`],
    }

    const dateInputs = document.querySelectorAll(`input[type=datepicker]`)
    if (dateInputs) {
        dateInputs.forEach((dateInput) => {
            datepicker(dateInput, ruOptions)
        })
    }
}

