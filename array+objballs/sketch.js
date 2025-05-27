let balls = [];

function setup() {
  createCanvas(600, 600);
  for(let i=0;i<50;i++) {
    let x = random (30,150);
    let y = random (100,600);
    let s1 = random (5,15);
    let s2 = random (-5,10);
  balls [i] = new Ball(x,y,s1,s2);
  }
}

function draw() {
  background(0);
  frameRate(100);
  for (let i=0;i<balls.length;i++) {
  balls [i].move();
  balls [i].display();
  }
}

class Ball  {
  constructor (x,y,xsd,ysd) {
    this.x = x;
    this.y = y;
    this.xspeed = xsd;
    this.yspeed = ysd;

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

