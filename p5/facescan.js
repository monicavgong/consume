let capture;
let x = 0;
let w;
let h;

function setup(){
  createCanvas(800, 240);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  pixelDensity(1);
  // capture.hide();
  background(0);
  w = capture.width;
  h = capture.height;
}

function draw(){
  // image(capture, 0, 0);
  capture.loadPixels();

}
