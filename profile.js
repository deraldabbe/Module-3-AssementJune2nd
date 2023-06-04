document.addEventListener(`DOMContentLoaded`, function() {
    const colorButton = document.getElementById(`color`)
    const placeButton = document.getElementById(`place`)
    const ritualButton = document.getElementById(`ritual`)

    colorButton.addEventListener(`click`, function() {
        alert(`My favorite color is Red.`)
})

placeButton.addEventListener(`click`, function() {
    alert(`My favorite place is anywhere near the water.`)
})

ritualButton.addEventListener(`click`, function() {
    alert(`My favorite ritual is enjoying a nice hot cup of joe.`)
})
})