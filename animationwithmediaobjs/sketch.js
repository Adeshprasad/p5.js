let flower1;
let flower2;
let flower3;
let watercan;

//y coordinate for the images
let flowerY = 450;

//size of flower before it starts growing
let flowerSize = 20;

//function to load the images
function preload() {
  flower1 = loadImage("images/flower-1.png");
  flower2 = loadImage("images/flower-2.png");
  flower3 = loadImage("images/flower-3.png");
  watercan = loadImage("images/Watercan.gif");

}

function setup() {
  createCanvas(600, 600);

  //center coordinates for the image
  imageMode(CENTER);

  //resize the flowers to 100 x 100 pixels
  flower1.resize(100, 100);
  flower2.resize(100, 100);
  flower3.resize(100, 100);
  watercan.resize(50,50);

}

function draw() {
  background(255);

  //drawing stems for the three flowers
  stroke("brown");
  strokeWeight(3);
  line(100,500,100,flowerY);
  line(200,500,200,flowerY);
  line(300,500,300,flowerY);

 


  //draw the static flowers in one row.
  image(flower1, 100, flowerY, flowerSize, flowerSize);
  image(flower2, 200, flowerY, flowerSize, flowerSize);
  image(flower3, 300, flowerY, flowerSize, flowerSize);


   //creating a watering can
  image(watercan,mouseX,mouseY);

  
  //condition to grow the flowers and stems
  if (mouseIsPressed) {
    flowerY -= 1;
    flowerSize += 2;
  }

  //condition for limits to the flower growth
  if(flowerSize>100) {
    flowerSize=100;
  }
  if(flowerY<100) {
    flowerY = 450;
    flowerSize=20;
  }
}
