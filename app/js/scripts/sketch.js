// p5.js sketch using portraits of hillary clinton and donald trump moving on the screen
// used only as background for the showcase prior to the US presidential election in 2016

var rotationangle = 1;
var rotationspeed = 5;
var neworiginX = 100;
var neworiginY = 100;
var originspeedX = 2;
var originspeedY = 3;

var donneworiginX = 670;
var donneworiginY = 20;

var donoriginspeedX = 2;
var donoriginspeedY = 3;

var donrotationangle = 1;
var donrotationspeed = 5;


var donnie;
var hillary;


function setup() {
    var canvas = createCanvas(windowWidth,windowHeight);

  // Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent('my-canvas');

  background(255, 255,255);
  hillary = loadImage("img/hillary.png");
  donnie = loadImage("img/donald.png");
}

function draw (){
	background(255,255,255);
  push();      //temporarily move coordinate system origin
  translate (neworiginX, neworiginY);
  rotate (radians(rotationangle));
  imageMode (CENTER);   //rectangle origin is in middle of rectangle
  image(hillary, 0, 0, 81, 260);
  rotationangle = rotationangle + rotationspeed;   //movement of rectangle
  neworiginX = neworiginX + originspeedX;
  neworiginY = neworiginY + originspeedY;

  if (neworiginX > width || neworiginX < 0) { //boundary limits
     originspeedX = originspeedX * -1;
     rotationspeed = rotationspeed * -1;

  }


  if (neworiginY > height || neworiginY < 0) { //boundary limits Y
     originspeedY = originspeedY * -1;
     rotationspeed = rotationspeed * -1;

  }
  pop();
  push();
	translate (donneworiginX, donneworiginY);  //location of new coordinate system origin
	rotate (radians(donrotationangle));
	imageMode (CENTER);
	image(donnie, 0, 0, 81, 260);
	donrotationangle = donrotationangle + donrotationspeed;   //movement of rectangle
	donneworiginX = donneworiginX + donoriginspeedX;
	donneworiginY = donneworiginY + donoriginspeedY;
	if (donneworiginX > width || donneworiginX < 0) { //boundary limits
	 donoriginspeedX = donoriginspeedX * -1;
	 donrotationspeed = donrotationspeed * -1;

	}


	if (donneworiginY > height || donneworiginY < 0) { //boundary limits Y
	 donoriginspeedY = donoriginspeedY * -1;
	 donrotationspeed = donrotationspeed * -1;

	}


  pop();

}
