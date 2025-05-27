let flowers = [];
function createFlower() {
  //flower object
  let flower = {
    x: random (50,600),
    y: random (100,600),
    size: random(20,100),
    lifespan: random(2000,5000),
    color:(random(255),random(255),random(255))
  };
return flower;
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  frameRate(1);

  for (let flower of flowers) {
    drawFlower(flower);   
  }


}
function drawFlower(flower) {
  noStroke();
  //colors the flower petals with random colours
  fill(random(255),random(255),random(255));

  //creates the flower petals
  ellipse(flower.x,flower.y,flower.size/2,flower.size);
  ellipse(flower.x,flower.y,flower.size,flower.size/2);

  //creates the center bud for the flower
  noStroke();
  fill(255,204,0);
  circle(flower.x,flower.y,flower.size/2);
  
}

function drawFlowers() {
  //loo to create 10 flowers
    for (let i=0;i<10;i++) {
    let flower1= createFlower();
    flowers.push(flower1);
  }
}
//creates a flower when the mouse is pressed.
function mousePressed() {
  let flower = createFlower();
  flower.x = mouseX;
  flower.y = mouseY;
  flowers.push(flower);
}