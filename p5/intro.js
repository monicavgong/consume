//images
let me;
let r1;
let g1;
let b1;

let r2;
let g2;
let b2;

let r3;
let g3;
let b3;

let r4;
let g4;
let b4;

let r5;
let g5;
let b5;

let r6;
let g6;
let b6;

let r7;
let g7;
let b7;

let r8;
let g8;
let b8;

let r9;
let g9;
let b9;

let r10;
let g10;
let b10;

let ellipse1X = 970;
let ellipse1Y = 405;
let ellipse2X = 945;
let ellipse2Y = 490;
let ellipse3X = 840;
let ellipse3Y = 560;
let ellipse4X = 748;
let ellipse4Y = 490;
let ellipse5X = 710;
let ellipse5Y = 405;
let ellipse6X = 706;
let ellipse6Y = 305;
let ellipse7X = 750;
let ellipse7Y = 220;
let ellipse8X = 840;
let ellipse8Y = 200;
let ellipse9X = 930;
let ellipse9Y = 220;
let ellipse10X = 980;
let ellipse10Y = 305;


function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function setup (){
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  imageMode(CENTER);
  me = loadImage("images/background/face2.png");

  r1 = 0;
  g1 = 0;
  b1 = 0;

  r2 = 0;
  g2 = 0;
  b2 = 0;

  r3 = 0;
  g3 = 0;
  b3 = 0;

  r4 = 0;
  g4 = 0;
  b4 = 0;

  r5 = 0;
  g5 = 0;
  b5 = 0;

  r6 = 0;
  g6 = 0;
  b6 = 0;

  r7 = 0;
  g7 = 0;
  b7 = 0;

  r8 = 0;
  g8 = 0;
  b8 = 0;

  r9 = 0;
  g9 = 0;
  b9 = 0;

  r10 = 0;
  g10 = 0;
  b10 = 0;

}

function draw(){
  createCanvas(windowWidth, windowHeight);
  imageMode(CORNERS);
  background(245, 233, 244);
  imageMode(CENTER);
  image(me, 845, 446, 800, 833);

//ellipse 1
    fill(r1, g1, b1);
    stroke (255, 255, 255);
    ellipse(ellipse1X, ellipse1Y, 15, 15);

//ellipse 2
    fill(r2, g2, b2);
    stroke (255, 255, 255);
    ellipse(ellipse2X, ellipse2Y, 15, 15);

//ellipse 3
    fill(r3, g3, b3);
    stroke (255, 255, 255);
    ellipse(ellipse3X, ellipse3Y, 15, 15);

//ellipse 4
    fill(r4, g4, b4);
    stroke (255, 255, 255);
    ellipse(ellipse4X, ellipse4Y, 15, 15);

//ellipse 5
    fill(r5, g5, b5);
    stroke (255, 255, 255);
    ellipse(ellipse5X, ellipse5Y, 15, 15);

//ellipse 6
    fill(r6, g6, b6);
    stroke (255, 255, 255);
    ellipse (ellipse6X, ellipse6Y, 15, 15);

//ellipse 7
    fill(r7, g7, b7);
    stroke (255, 255, 255);
    ellipse (ellipse7X, ellipse7Y, 15, 15);

//ellipse 8
    fill(r8, g8, b8);
    stroke (255, 255, 255);
    ellipse (ellipse8X, ellipse8Y, 15, 15);

//ellipse 9
    fill(r9, g9, b9);
    stroke (255, 255, 255);
    ellipse (ellipse9X, ellipse9Y, 15, 15);

//ellipse 10
    fill(r10, g10, b10);
    stroke (255, 255, 255);
    ellipse (ellipse10X, ellipse10Y, 15, 15);
}

function mousePressed() {
  let a = dist(mouseX, mouseY, ellipse1X, ellipse1Y);
  if (a < 7.5) {
    r1 = 255;
    g1 = 0;
    b1 = 0;
  }

  let b = dist(mouseX, mouseY, ellipse2X, ellipse2Y);
  if (b < 7.5) {
    r2 = 255;
    g2 = 0;
    b2 = 0;
  }

  let c = dist(mouseX, mouseY, ellipse3X, ellipse3Y);
  if (c < 7.5) {
    r3 = 255;
    g3 = 0;
    b3 = 0;
  }

  let d = dist(mouseX, mouseY, ellipse4X, ellipse4Y);
  if (d < 7.5) {
    r4 = 255;
    g4 = 0;
    b4 = 0;
  }

  let e = dist(mouseX, mouseY, ellipse5X, ellipse5Y);
  if (e < 7.5) {
    r5 = 255;
    g5 = 0;
    b5 = 0;
  }

  let f = dist(mouseX, mouseY, ellipse6X, ellipse6Y);
  if (f < 7.5) {
    r6 = 255;
    g6 = 0;
    b6 = 0;
  }

  let g = dist(mouseX, mouseY, ellipse7X, ellipse7Y);
  if (g < 7.5) {
    r7 = 255;
    g7 = 0;
    b7 = 0;
  }

  let h = dist(mouseX, mouseY, ellipse8X, ellipse8Y);
  if (h < 7.5) {
    r8 = 255;
    g8 = 0;
    b8 = 0;
  }

  let j = dist(mouseX, mouseY, ellipse9X, ellipse9Y);
  if (j < 7.5) {
    r9 = 255;
    g9 = 0;
    b9 = 0;
  }

  let k = dist(mouseX, mouseY, ellipse10X, ellipse10Y);
  if (k < 7.5) {
    r10 = 255;
    g10 = 0;
    b10 = 0;
  }
}
