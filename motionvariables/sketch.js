let cloudOneX=150;
let lineX1=0;
let lineX2=0;

function setup() {
  //creates a 1000 by 1000 pixel canvas
  createCanvas(1000, 1000);

}

function draw() {
  //changes the colour of the background to blue 
  background("blue");
  frameRate=15;

  //creates a grassland for the trees
  fill(10,250,10);
  stroke(0);
  rect(0,600,1000,1000);

  //crescent moon
  fill(255);
  circle(900,100,100);

  fill(0,0,255);
  noStroke();
  circle(875,100,100);

  //mountains? lol
  fill("gray");
  stroke(0);
  triangle(0,600,400,300,600,600);
  triangle(0,600,100,500,200,600);
  triangle(450,600,900,200,1000,600);

  
  trees(100,700,50,100);
  trees(400,700,50,100);
  trees(250,650,50,100);
  trees(700,700,50,100);
  trees(800,650,50,100);
  trees(900,700,50,100);
  //clouds
  fill(255);
  ellipse(cloudOneX,100,100,50);
  ellipse(cloudOneX+150,70,75,50);
  ellipse(cloudOneX+100,300,70,40);

  //shooting stars
  stroke("red");
  strokeWeight(2);
  line(lineX1,lineX2,lineX1+40,lineX2-40);

  //adding motions to the clouds
  cloudOneX= frameCount % width;

  //shooting star motion
  lineX1 = random(0,width);
  lineX2 = random(0,height/2);
}

function trees(x,y,w,h) {
//creates the trees (BASE)
  fill("brown");
  rect(x,y,w,h);
  //created the leaves
  fill(0,150,0);
  triangle(75,700,125,650-frameCount%200,175,700);
  triangle(375,700,425,650-frameCount%200,475,700);
  triangle(225,650,275,610-frameCount%200,325,650);
  triangle(675,700,725,650-frameCount%200,775,700);
  triangle(775,650,825,610-frameCount%200,875,650);
  triangle(875,700,925,650-frameCount%200,975,700);

}
