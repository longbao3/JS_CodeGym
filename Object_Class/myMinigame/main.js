class Camile{
    constructor(image,top,left,bot,right,width,height){
        this.image = image;
        this.top = top;
        this.bot = bot;
        this.right = right;
        this.left = left;
        this.width = width;
        this.height = height;
    }
    getCamileElement(){
        return "<img width='" + this.width + "'" + " height='" + this.height + "'" 
        +  "src='" + this.image + "'" + "style='top: "+this.top+ "px; left:" + this.left
        + "px; bot=" + this.bot + "px; right=" + this.right + "px;position:absolute;' />";
    }

    moveRight(){
        this.left += 10;
    }
    moveDown(){
        this.top += 10;
    }
    moveLeft(){
        this.left -=1;
    }
    moveUp(){
        this.top +=1;
    }
}
let camile = new Camile('camile.png',0,0,0,0,200,150);
document.getElementById('game').innerHTML = camile.getCamileElement();
camile.moveRight();
console.log(camile.left);

function start(){
    if(camile.left < 1000){
        camile.moveRight();
    }
    document.getElementById('game').innerHTML = camile.getCamileElement();
    setTimeout(start,20);
}
function Down(){
    if(camile.top < 300){
        camile.moveDown();
        document.getElementById('game').innerHTML = camile.getCamileElement();
        setTimeout(Down,20);
    }

}
// start();
Down();
setInterval(start,2000);
console.log(camile.left);