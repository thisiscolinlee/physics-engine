let b1, b2;
let e = 1, m_sum;
let slider_e, button, slider_m1, slider_m2, slider_v1, slider_v2, slider_y;
let x, y,user_y;
let ball_v1 = 10, ball_v2 = 0, ball_y_v1 = 0, ball_y_v2 = 0, ball_m1 = 150, ball_m2 = 150, user_y_add = 0;
let font
let stop=0, v2_result, v1_result;


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

	slider_e = createSlider(0, 1, e, 0.01);	
  slider_e.addClass("blackSlider");
	slider_m1 = createSlider(50, 250, ball_m1, 5);
  slider_m1.addClass("orangeSlider");
	slider_m2 = createSlider(50, 250, ball_m2, 5);
  slider_m2.addClass("blackSlider");
	slider_v1 = createSlider(5, 15, ball_v1, 1);
  slider_v1.addClass("orangeSlider");
	slider_v2 = createSlider(-5, 5, ball_v2, 1);
  slider_v2.addClass("blackSlider");
	slider_y = createSlider(-Math.sqrt(ball_m1)*(windowWidth/windowHeight)*7, Math.sqrt(ball_m1)*(windowWidth/windowHeight)*7, user_y_add, 0.1);
  slider_y.addClass("orangeSlider");

	//update button
	button = createButton('');
	button.mousePressed(changeE3);
  button.addClass("canvasButton");

	y = round((windowHeight-100)/2);
	user_y = round((windowHeight-100)/2 - slider_y.value());

	ball_m1 = slider_m1.value();
	ball_m2 = slider_m2.value();
	ball_v1 = slider_v1.value();
	ball_v2 = slider_v2.value();

	// color of the balls
	orange = color('black');
  darkOrange = color('black');
	black = color('black');
  white = color('white')
	transWhite = color('255,255,2')

	// ball objects
	b1 = new Ball(-50, user_y, ball_m1, ball_v1, ball_y_v1, orange,black);
	b2 = new Ball(width/2, y, ball_m2, ball_v2, ball_y_v2, black,orange);
 
	// controlling frame rate
	frameRate(200);
}

function draw() {
  slider_e.position(20,135);
  slider_m1.position(20, height-148);
  slider_v1.position(20, height-88);
  slider_m2.position(windowWidth - 110, height-148);
  slider_v2.position(windowWidth - 110, height-88);
  slider_y.position(20,height-208);

	button.position(windowWidth-113, height-222);
	background('white');

  textFont(font); 
  textAlign(LEFT);
  textSize(38);
	fill(black)
  text('e', 20, 175);
  textSize(25);
  textAlign(RIGHT);
  text(slider_e.value(), 100, 175);

  textSize(25);
  textAlign(LEFT);
  fill('black'); 
	text(slider_m1.value(), 20, height-108);
  text(slider_v1.value(), 20, height-48);
  fill('black'); 
  text(slider_m2.value(), width - 110, height-108);
  text(slider_v2.value(), width - 110, height-48);
	textSize(29);
	fill('black'); 
	text('-', 20, height-170);
	textAlign(CENTER); textSize(25);
	text('y', 60, height-170);
	textSize(40);
	fill('black'); 
	text('Start',windowWidth-71, height-185);


 
	fill('black'); 
  textAlign(RIGHT); textSize(22);
  text("kg", width - 24, height-108);
  text("m/s", width - 24, height-48);
  fill('black');
  text("kg", 106, height-108);
  text("m/s", 106, height-48);
	textSize(29);
	text('+', 100, height-170);

	b1.createParticle();
	b2.createParticle();
	b1.move();
	b2.move();
	b1.collide(b2);
}


function changeE3() {
	ball_m1 = slider_m1.value()
	ball_m2 = slider_m2.value()
	ball_v1 = slider_v1.value()
	ball_v2 = slider_v2.value()
	user_y_add = slider_y.value()

	e = slider_e.value();
	m_sum = ball_m1+ball_m2;
	removeSliders();
	setup();
}
function removeSliders() {
	slider_m1.remove();
	slider_m2.remove();
	slider_v1.remove();
	slider_v2.remove();
	slider_e.remove();
	slider_y.remove();
  button.remove();
}

class Ball {
	constructor(x, y, m, xSpeed, ySpeed, c1,c2) {
		this.x = x,
		this.y = y,
        this.m = m;
				if(windowWidth/windowHeight>=1){
					this.r = Math.sqrt(m)*(windowWidth/windowHeight)*5;
				}
				if(windowWidth/windowHeight<1){
					this.r = Math.sqrt(m*5)*(windowWidth/windowHeight)*3;
				}
		this.Speed = xSpeed;
		this.xSpeed = xSpeed;
		this.ySpeed = ySpeed;
		this.c1 = c1;
		this.c2 = c2;
		// this.deltaE = 0;
	}
	createParticle() {
		noStroke();
		fill(this.c1);
		ellipse(this.x, this.y, this.r * 2);
    textAlign(CENTER); textSize(this.r/7*4);
	  text(Math.round(this.Speed*10)/10, this.x, this.y - this.r*7/6);
		
		fill(this.c2); textSize(this.r/7*4);
		text(this.m, this.x, this.y+this.r/5);
	}
	move() {
		this.x += this.xSpeed/4*3;
		this.y += this.ySpeed;
	}
	update(newSpeed,newSpeedX,newSpeedY) {
		this.xSpeed = newSpeedX;
		this.ySpeed = newSpeedY;
		this.Speed = newSpeed;
	}
	collide(other) {
		if (this.r + other.r >= Math.sqrt((this.x-other.x)**2 + (this.y-other.y)**2)) {

			let tan_i = (this.y-other.y)/(this.x-other.x); 
			let dega = Math.atan(tan_i)*180/Math.PI;
			
			v2_result = round(((this.m * (1 + e) * (this.xSpeed - other.xSpeed)) / (this.m + other.m))*10)/10 + round(other.xSpeed*10)/10;
			v1_result = -round(((other.m * (1 + e) * (this.xSpeed - other.xSpeed)) / (this.m + other.m))*10)/10 + round(this.xSpeed*10)/10;
			
			/*
			if(this.Speed == other.Speed){
				this.m = m_sum;
			}*/
			let sin_degb_calc = other.m*v2_result/this.m*v1_result;
			let sin_degb = sin_degb_calc*Math.sin(dega/180*Math.PI);
			let degb = Math.abs(Math.asin(int(sin_degb))/180*Math.PI);

			let v2_x_result = v2_result*Math.cos(int(dega)/180*Math.PI);
			let v2_y_result = v2_result*Math.sin(int(dega)/180*Math.PI);
				
			other.update(v2_result, v2_x_result, v2_y_result);
			let v1_x_result = v1_result*Math.cos(int(dega)/180*Math.PI);
			let v1_y_result = v1_result*Math.sin(int(dega)/180*Math.PI);

			if(this.m>=other.m){
				v1_x_result = v1_result*Math.cos(int(dega)/180*Math.PI);
				v1_y_result = -v1_result*Math.sin(int(dega)/180*Math.PI);	
			}
			this.update(v1_result, v1_x_result, v1_y_result);
		}
/*
		if(this.Speed == other.Speed){
			other.x = (other.x+this.x)/2;
			other.y = (other.y+this.y)/2;
			if(windowWidth/windowHeight>=1){
				this.r = Math.sqrt(m)*(windowWidth/windowHeight)*5;
			}
			if(windowWidth/windowHeight<1){
				this.r = Math.sqrt(m*5)*(windowWidth/windowHeight)*3;
			}
		}
		/*
						line_A = abs(rocket.y - circle.pos[1])
			line_B = abs(rocket.x - circle.pos[0])
					
			sin_X = line_B / dist
			cos_X = line_A / dist
			stars_val = math.sqrt(2*stars_mass) / dist

			if circle.radius >= 3:
					if circle.pos[0] >= rocket.x and circle.pos[1] >= rocket.y:        
							circle.pos[0] -= stars_val*sin_X*0.4
							circle.pos[1] -= stars_val*cos_X*0.3
					if circle.pos[0] >= rocket.x and circle.pos[1] <= rocket.y:        
							circle.pos[0] -= stars_val*sin_X*0.4
							circle.pos[1] += stars_val*cos_X*0.3
					if circle.pos[0] <= rocket.x and circle.pos[1] >= rocket.y:        
							circle.pos[0] += stars_val*sin_X*0.4
							circle.pos[1] -= stars_val*cos_X*0.3
					if circle.pos[0] <= rocket.x and circle.pos[1] <= rocket.y:        
							circle.pos[0] += stars_val*sin_X*0.4
							circle.pos[1] += stars_val*cos_X*0.3*/

	}
}