
function setup (){
  //creates a canvas of size 600 pixels width and 500 pixels high
  createCanvas(600,500);
}
function draw(){
  //changes the background of the canvas to orange
  background("orange");

  //creates a sun 
  fill("yellow");
  stroke(255,190,0);
  strokeWeight(10);
  circle(520,80,100)
  

  //creates grassfield
  fill("green");
  stroke("green");
  rect(0,350,600,400);

  //creates emojis
  textSize(100);
  text("🔥",mouseX,mouseY);
   text("🪷",300,300);
}