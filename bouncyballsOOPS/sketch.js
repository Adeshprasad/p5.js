let ball1;
let ball2;
let ball3;
let ball4;

function setup() {
  createCanvas(600, 600);
  ball1 = new Ball();
  ball2 = new Ball();
  ball3 = new Ball();
  ball4 = new Ball();
}

function draw() {
  background(0);
  frameRate(100);
  ball1.move();
  ball1.display();
  ball2.move();
  ball2.display();
  ball3.move();
  ball3.display();
  ball4.move();
  ball4.display();
}

class Ball  {
  constructor () {
    this.x = random (150,width-50);
    this.y = random (600,100);
    this.xspeed = 4;
    this.yspeed = -3;

  }
  move () {
    if(this.x>width || this.x<0) {
      this.xspeed = this.xspeed * -1;
    }
    if(this.y>height || this.y<0){
      this.yspeed = this.yspeed * -1;
    }
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }
  display() {
    fill(random(0,255));
    stroke(255);
    strokeWeight(4);
    ellipse(this.x,this.y,25,25);
  }
}

