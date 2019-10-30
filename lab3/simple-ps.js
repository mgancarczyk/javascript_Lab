document.addEventListener('DOMContentLoaded', appStart);
let canvas;
let myPs

function appStart(){
    myPs = new Photoshop('canvas')

    document
        .querySelector('#squareBtn')
        .addEventListener('touchstart', ()=>{
            myPs.setbrush('square');
        });

    document
        .querySelector('#circleBtn')
        .addEventListener('touchstart', ()=>{
            myPs.setbrush('circle');
        });
}



