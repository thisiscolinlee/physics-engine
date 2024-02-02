let font
let c = 'white';
let planet = 'Earth'

function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
}
function preload(){
  font = loadFont('../fonts/regular.ttf');
}

function setup() {
  var canvas=
  createCanvas(windowWidth,windowHeight);
  canvas.parent('container1');
  
  //x1 = random(0,width);

  slider_ramp = createSlider(0,windowHeight*4/5,0);
  slider_gforce = createSlider(1,25,9.8,0.1);
  slider_ramp.addClass("blackSlider");
  slider_gforce.addClass("longSlider");

  r = 60;
  ball_x = r;
  ball_x_vel = 0;
  ball_y_vel = 0;
  frameRate(200);
}


function draw() {    
  background(c);
  textFont(font); 

  slider_ramp.position(windowWidth-110,100);

  let val = slider_ramp.value();
  x1 = windowWidth;
  y1= windowHeight;
  x2 = 0;
  y2=windowHeight-val;

  diameter = r*2;
  let G_force = slider_gforce.value()/24;


  triangle(x1, y1, x2, y2, 0, windowHeight);

  fill('black');
  noStroke();  
  ellipseMode(RADIUS);
  ellipseMode(CENTER);

  inclination = (y2-y1)/(x2-x1);
  sin_x = val / Math.sqrt((x1-x2)**2+(y1-y2)**2);
  cos_x = windowWidth / Math.sqrt((x1-x2)**2+(y1-y2)**2);
  tan_x = val / windowWidth 
  angle = Math.asin(sin_x)*180/Math.PI

  printtext();

  ball_y = inclination*(ball_x-windowWidth-r*sin_x)+windowHeight-r*cos_x;
  ellipse(ball_x,ball_y,diameter,diameter);

  ball_x_acc = sin_x*cos_x*G_force;
  ball_x+= ball_x_vel;
  ball_x_vel+=ball_x_acc;

  if(ball_x - r >= windowWidth){
    ball_x=-r;
    ball_x_vel=0;
  }

}

function printtext(){
  gforce = round(slider_gforce.value()*10)/10

  if(slider_gforce.value() >= 1 && slider_gforce.value() <= 2){
    gforce = 1.6;
    c = color(200,200,200);
    planet = 'Moon'
  }
  else if(slider_gforce.value() >= 3.3 && slider_gforce.value() <= 4.1){
    gforce = 3.7;
    c = color(231,125,17);
    planet = 'Mars'
  }
  else if(slider_gforce.value() >= 8.4 && slider_gforce.value() <= 9.2){
    gforce = 8.9;
    c = color(249,194,26);
    planet = 'Venus'
  }
  else if(slider_gforce.value() >= 9.4 && slider_gforce.value() <= 10.2){
    gforce = 9.8;
    c = 'white';
    planet = 'Earth'
  }
  else if(slider_gforce.value() >= 10.2 && slider_gforce.value() <= 11){
    gforce = 10.4;
    c = color(219,181,124);
    planet = 'Saturn'
  }
  else if(slider_gforce.value() >= 23 && slider_gforce.value() <= 25){
    gforce = 24.8;
    c = color(216,202,157);
    planet = 'Jupiter'
  }
  else{
    c = 'white'; planet = '';
  }

  textSize(25);
  textAlign(LEFT);
	text(round(angle), windowWidth-110, 140);
  text(gforce, windowWidth-110, 175);

  textSize(27);
  text(planet, windowWidth-110, 210);

  textSize(25);
  textAlign(RIGHT);
  text('deg', windowWidth-30, 140);  
  text('G', windowWidth-30, 175);  
}

