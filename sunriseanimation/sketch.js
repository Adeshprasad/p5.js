let sunHeight=600;
let redvalue=0;
let greenvalue=0;
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(redvalue,greenvalue,0);

  //creates the sun.
  noStroke();
  fill(255,117,54);
  circle(300,sunHeight,100);

  //mountains
  stroke(0);
  fill("brown");
  triangle(150,400,300,300,350,400);
  fill(101, 67, 33);
  triangle(150,400,300,300,100,400);
  fill("brown");
  triangle(0,400,200,300,300,400);
  fill("brown");
  triangle(250,400,500,200,600,400);

  if(sunHeight>100){
    sunHeight-=2;
  }
  if(sunHeight<400){
    redvalue+=5;
    greenvalue++;
  }
  console.log(sunHeight);
}
