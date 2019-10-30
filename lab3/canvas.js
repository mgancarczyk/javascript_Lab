class Photoshop{
    constructor(targetElemenstId){
        this.canvas = document.querySelector('#' + targetElemenstId)
        this.canvas.addEventListener('touchmove', (e) => this.onTouchMove(e))
        this.brushShapeName='square'
    }
}

function onTouchMove(e){

    this.brushShape = new Brus(hthis.brushShapeName)
    const brush=this.brushShape.getBrush();
    
    const x=e.touches[0].clientX-this.canvas.offsetLeft;
    const y=e.touches[0].clientY-this.canvas.offsetTop;
    brush.style.top=y+'px';
    brush.style.left=x+'px';

    this.canvas.appendChild(brush);
}
setBrush(brushShape){
    this.brushShapeName=brushShape
}