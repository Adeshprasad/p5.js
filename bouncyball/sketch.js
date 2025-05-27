let ball = {
  x:200,
  y:300,
  xspeed:4,
  yspeed:-3
} ;
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);//makes the background black

  //create a ball
  fill(0);
  stroke(255);
  strokeWeight(4);
  ellipse(ball.x,ball.y,25,25);

  //calling bouncy function
  bouncy();
  //calling the move function
  move();
}

//function to make the ball bouncy
function bouncy () {
  if(ball.x>width || ball.x<0) {
    ball.xspeed= ball.xspeed * -1;
  }
  if(ball.y>height || ball.y<0) {
    ball.yspeed= ball.yspeed * -1;
  }
}

function move() {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}