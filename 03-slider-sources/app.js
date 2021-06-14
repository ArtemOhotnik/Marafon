const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')


let activeSlidIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changerSlide('up')
})
downBtn.addEventListener('click', () => {
    changerSlide('down')
})

function changerSlide(direction) {
    if(direction === 'up') {
        activeSlidIndex++
        if(activeSlidIndex === slidesCount) {
            activeSlidIndex = 0
        }
    }else if(direction === 'down') {
        activeSlidIndex--
        if (activeSlidIndex < 0) {
            activeSlidIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlidIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlidIndex * height}px)`
}