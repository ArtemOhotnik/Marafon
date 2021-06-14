const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const  timeList = document.querySelector('.time-list')
const timeEl = document.querySelector('#time')
const  color = ['#FFFFFF', '#50C878', '#CC397B', '#F4CA16', '#318CE7', '#ff96ad', '#00ead3', '#f98404']
let time = 0
let timeBackApp = 0
const scoreB = document.querySelector('#score')
const board = document.querySelector('#board')
let score = 0

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', event =>
{
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        timeBackApp = time
        screens[1].classList.add('up')
        startGame()
    }
})



board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        creatRandomCircle()
    }
})



function startGame() {

    setInterval(decreaseTime, 1000)
    creatRandomCircle()
    setTime(time)
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }


}



function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    board.innerHTML = `<h1>Счёт: <span class="primary"> ${score}</span></h1>`
    timeEl.parentNode.classList.add('hide')
}

function creatRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const color = getRandomColor()

    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)



    circle.classList.add('circle')

    scoreB.innerHTML = `Score:${score}`

    circle.style.background = color

    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`


    board.append(circle)
}

function getRandomNumber(min, max) {
    return  Math.round(Math.random() * (max - min) + min)
}

function  getRandomColor() {
    const index = Math.floor(Math.random() * color.length)
    return color[index]
}


