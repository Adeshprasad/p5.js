let balls = [];
function setup () {
    createCanvas(600,600);
}

function draw () {
    background(0);

    for(let i=0;i<balls.length;i++){
        balls[i].display();
        balls[i].move();
    }
}

function mousePressed  () {
    let r= 25;
    let b = new Ball(mouseX,mouseY,r);
    balls.push(b);
}

class Ball  {
    constructor() {
        this.x= mouseX;
        this.y= mouseY;
        this.r= 25;
    }

    move () {
        this.x = this.x + random(-10,10);
        this.y = this.y + random(-10,10);
    }


    display() {
        fill(255);
        ellipse(this.x,this.y,this.r);
    }
}