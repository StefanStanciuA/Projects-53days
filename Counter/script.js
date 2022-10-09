const progress = document.getElementById('progress')
const increase = document.getElementById('increase')
const decrease = document.getElementById('decrease')

let count = 0
updateDisplay()

increase.addEventListener('click', () => {
    count++

    updateDisplay()
})

decrease.addEventListener('click', () => {
    count--

    if (count < 0) {
        count = 0
    }
    updateDisplay()

})

function updateDisplay() {
    progress.textContent = count
}