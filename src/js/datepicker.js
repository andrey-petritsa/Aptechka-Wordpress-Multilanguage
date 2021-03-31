import datepicker from 'js-datepicker'

export default function initDatepicker(datepickerInputId) {
    const isElementExist = document.querySelector(datepickerInputId)
    if (isElementExist) {
        return datepicker(datepickerInputId, {
            formatter: (input, date) => {
                const currentValue = date.toLocaleDateString()
                input.value = currentValue
            },
            overlayPlaceholder: `Месяц рождения вашего малыша`,
            customDays: [`Пн`, `Вт`, `Ср`, `Чт`, `Пт`, `Сб`, `Вс`],
            customMonths: [`Январь`, `Февраль`, `Март`, `Апрель`, `Май`, `Июнь`, `Июль`, `Август`, `Сентябрь`, `Октябрь`, `Ноябрь`, `Декабрь`],
        })
    } else {
        return false
    }
}
