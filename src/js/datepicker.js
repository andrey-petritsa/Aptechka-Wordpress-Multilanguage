import datepicker from 'js-datepicker'

export default function init_datepicker(datepicker_input_id) {
    return datepicker(datepicker_input_id, {
        formatter: (input, date, instance) => {
            const value = date.toLocaleDateString()
            input.value = value
        },
        overlayPlaceholder: `Месяц рождения вашего малыша`,
        customDays: [`Пн`, `Вт`, `Ср`, `Чт`, `Пт`, `Сб`, `Вс`],
        customMonths: [`Январь`, `Февраль`, `Март`, `Апрель`, `Май`, `Июнь`, `Июль`, `Август`, `Сентябрь`, `Октябрь`, `Ноябрь`, `Декабрь`],
    })
}