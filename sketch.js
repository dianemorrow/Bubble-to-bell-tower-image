var b1;
var bubbleExpanding = true; //setting up a boolean variable


function preload () {
  img = loadImage ('images/Bell_tower.jpg');
}

function setup() {
  createCanvas (600, 400);
  b1 = new Bubble (300, 400, 20);
}

function mousePressed () {
  b1.clicked ();
}

function draw() {
  background (133, 185, 242);
  if (bubbleExpanding) {     //the update only occurs in the true state
    b1.update();
    b1.display();
  } else {
    image (img, 0, 0);
  }
}





