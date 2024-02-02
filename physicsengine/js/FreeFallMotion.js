function setup() {
  frameRate(20)

  var canvas=
  createCanvas(windowWidth,windowHeight*3/2);
  canvas.parent('container1');
  
  background('white')
  
  ball_x = windowWidth/2;
  ball_y_vel = 0;
  g = 0.1*100/200/200
  t = 0;
  q1=9.8;
  q2=0;
  r=100;
  n=0;
  ball_y = r/2;  
}


function draw() {  
  ball_y = ball_y + ball_y_vel;
  ball_y_vel += 10;

  fill('black'); 
  ellipse(ball_x,ball_y,r,r);
  noStroke();
  
}
function windowResized() {
  resizeCanvas(wrapper.offsetHeight,wrapper.offsetWidth)
}
