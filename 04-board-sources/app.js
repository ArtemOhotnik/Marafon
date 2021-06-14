const board = document.querySelector('#board')
const  color = ['#03256c', '#2541b2', '#F4CA16', '#e5d549', '#94FFEB', '#FFAFEB', '#FDF5E6', '#6E7F80']
const SQUARES_NUMBER = 500


for (let i = 0; i < SQUARES_NUMBER; i++) {
    const  square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mousemove', () => {
        setColor(square)
    })
    square.addEventListener('mouseenter', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}



function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function  getRandomColor() {
    const index = Math.floor(Math.random() * color.length)
    return color[index]
}