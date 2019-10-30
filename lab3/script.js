let canvas

document.addEventListener('DOMContentLoaded', appStart)

function appStart(){
    canvas = document.querySelector('#canvas')
    canvas.addEventListener('touchstart', onTouchStart)
    canvas.addEventListener('touchedd', onTouchEnd)
    canvas.addEventListener('touchmove', onTouchMove)
}

function onTouchMove(e){
    console.log
    // pobierz pędzel
    const brush = getSquareBrush()
    //ustal położenie
    const x = e.touches[0].screenX
    const y = e.touches[0].screenY
    brush
    // namaluj
}

function onTouchStart(e){
    console.log
}

function onTouchEnd(e){
    console.log
}

function getSquareBrush(){
    constdiv = document.createElement('div')
    div.classList.add(['brush', 'square-brush'])
    return div
}



