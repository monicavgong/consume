//images
let me;
let me2;
let lefteye;
let righteye;
let nose;
let mouth;
let rightear;
let leftear;


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

//ellipse booleans. See mousePressed function below and draw function for how they are used
let ellipse1Bool = false;
let ellipse2Bool = false;
let ellipse3Bool = false;
let ellipse4Bool = false;
let ellipse5Bool = false;
let ellipse6Bool = false;
let ellipse7Bool = false;
let ellipse8Bool = false;
let ellipse9Bool = false;
let ellipse10Bool = false;

//intro boolean
let introBool = false;

//face detection variables
let capture;
let tracker;
let positions;
let w = 640,
h = 480;
let faceRecBool = false;

//face detection button
let faceRecButton;

//third level boolean
let level3Bool = false;

//canvas variable
let canvas;


function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function preload(){
	me = loadImage("images/background/face2.png");
	lefteye = loadImage("images/eyes/eye5.png");
	righteye = loadImage("images/eyes/eye15.png");
	nose = loadImage("images/nose/nose2.png");
	mouth = loadImage("images/mouth/mouth1.png");
	leftear = loadImage("images/ear/ear5.png");
	rightear = loadImage("images/ear/ear7.png");
	me2 = loadImage("images/background/face3.png")
}

function setup (){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('z-index', '-1');
	rectMode(CENTER);
	imageMode(CENTER);

	//create and hide the face detection button
	//if you want a different event to trigger level 3, you don't need to use this
	faceRecButton = createButton("Stop Face Detection");
	faceRecButton.position(100, 200);
	faceRecButton.style('z-index', '1');
	faceRecButton.hide();

	//initialize the web cam.
	//if you have a simple screen between the intro and
	//face detection page, we can put this in a different function and have
	//a button press initialize it so the camera isn't running from the beginning.
	capture = createCapture({
		audio: false,
		video: {
			width: w,
			height: h
		}
	}, function() {
		console.log('capture ready.')
	});
	capture.elt.setAttribute('playsinline', '');

	capture.size(w, h);
	capture.hide();

	tracker = new clm.tracker();
	tracker.init();
	tracker.start(capture.elt);
	//end webcam stuff

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

	//set the intro boolena to true
	introBool = true;
}

function draw(){
	//in draw, we check against our booleans and
	//draw the matching function. We need to do this in draw because the
	//functions need to be updated every frame. These booleans are being flipped in the
	//custom functions below.

	//the intro boolean is true right away (in setup), so it will draw the intro function below.
	if(introBool == true){
		intro();
	}

	//if all of our ellipse booleans are true (from mouse presses below), we're finished with the intro screen,
	//so introBool gets flipped to false and faceRecBool flips to true.
	if(ellipse1Bool == true && ellipse2Bool == true && ellipse3Bool == true && ellipse4Bool == true && ellipse5Bool == true &&
		ellipse6Bool == true && ellipse7Bool == true && ellipse8Bool == true && ellipse9Bool == true && ellipse10Bool == true){
			introBool = false;
			faceRecBool = true;
		}

		//if faceRecBool is true, draw face detection function
		if(faceRecBool == true){
			faceRecDetect();
		}

		//if level3Bool is true, draw level3 function
		if(level3Bool == true){
			level3();
		}

	}

	//intro function/level/scene
	function intro(){
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

	//face detection function/level/scene
	function faceRecDetect(){
		background(245, 233, 244);
		image(me2, 845, 446, 850, 883);

		//showing the button. Again, if you want somethign else to trigger the next level
		//you can get rid of this.
		faceRecButton.show();

		//if the button is pressed, trigger level3
		faceRecButton.mousePressed(level3);

		//this translate will center the image
		push();
		translate(windowWidth/2 - capture.width/2, windowHeight/2.5 - capture.height/2.5)
		imageMode(CORNERS);
		image(capture, 0, 0, w, h);
		positions = tracker.getCurrentPosition();
		imageMode(CENTER);

		noStroke();

		for (let i = 0; i < positions.length; i++) {
			fill(255);
			// fill(map(i, 0, positions.length, 0, 360), 50, 100);
			ellipse(positions[i][0], positions[i][1], 4, 4);
			// text(i, positions[i][0], positions[i][1]);
			image(lefteye, positions[24][0], positions[24][1], 100, 100);
			image(righteye, positions[29][0], positions[29][1], 100, 100);
			image(nose, positions[62][0], positions[62][1], 80, 80);
			image(mouth, positions[60][0], positions[60][1], 120, 100);
			image(rightear, positions[13][0], positions[13][1], 100, 100);
			image(leftear, positions[0][0], positions[0][1], 100, 100);
		}
		pop();

	}

	//level 3 funciton
	function level3(){
		//hide the button
		faceRecButton.hide();

		//flip the faceRecBool and level3Bool. these are being referenced in draw()
		faceRecBool = false;
		level3Bool = true;

		background(245, 233, 244);
		textSize(40);
		fill(0);
		text('Level 3', windowWidth/2, windowHeight/2);
	}


	function mousePressed() {
		//if the intro boolean is true, flip each ellipse boolean to true once you click on them
		if(introBool == true){
			let a = dist(mouseX, mouseY, ellipse1X, ellipse1Y);
			if (a < 7.5) {
				r1 = 255;
				g1 = 0;
				b1 = 0;
				ellipse1Bool = true;
			}

			let b = dist(mouseX, mouseY, ellipse2X, ellipse2Y);
			if (b < 7.5) {
				r2 = 255;
				g2 = 0;
				b2 = 0;
				ellipse2Bool = true;
			}

			let c = dist(mouseX, mouseY, ellipse3X, ellipse3Y);
			if (c < 7.5) {
				r3 = 255;
				g3 = 0;
				b3 = 0;
				ellipse3Bool = true;
			}

			let d = dist(mouseX, mouseY, ellipse4X, ellipse4Y);
			if (d < 7.5) {
				r4 = 255;
				g4 = 0;
				b4 = 0;
				ellipse4Bool = true;
			}

			let e = dist(mouseX, mouseY, ellipse5X, ellipse5Y);
			if (e < 7.5) {
				r5 = 255;
				g5 = 0;
				b5 = 0;
				ellipse5Bool = true;
			}

			let f = dist(mouseX, mouseY, ellipse6X, ellipse6Y);
			if (f < 7.5) {
				r6 = 255;
				g6 = 0;
				b6 = 0;
				ellipse6Bool = true;
			}

			let g = dist(mouseX, mouseY, ellipse7X, ellipse7Y);
			if (g < 7.5) {
				r7 = 255;
				g7 = 0;
				b7 = 0;
				ellipse7Bool = true;
			}

			let h = dist(mouseX, mouseY, ellipse8X, ellipse8Y);
			if (h < 7.5) {
				r8 = 255;
				g8 = 0;
				b8 = 0;
				ellipse8Bool = true;
			}

			let j = dist(mouseX, mouseY, ellipse9X, ellipse9Y);
			if (j < 7.5) {
				r9 = 255;
				g9 = 0;
				b9 = 0;
				ellipse9Bool = true;
			}

			let k = dist(mouseX, mouseY, ellipse10X, ellipse10Y);
			if (k < 7.5) {
				r10 = 255;
				g10 = 0;
				b10 = 0;
				ellipse10Bool = true;
			}
		}
	}
