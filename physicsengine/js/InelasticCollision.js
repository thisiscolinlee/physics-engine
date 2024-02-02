function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
}


function setup() {
  var canvas=
  createCanvas(windowWidth, windowHeight);
  canvas.parent('container1');
  
  //x1 = random(0,width);
  height= windowHeight
  width = windowWidth
  x1 = width/2;
  background('white')

  r=80;
  y1=-2*r;
  q1=0;
  q2=0;
  q3=0;
  pandan=0;

  v=0.98;
  a=0.98
  t=0;
}


function draw() {  
  background('white');
  //rect(0, height-20, width, 10);
  ellipseMode(RADIUS);
  ellipseMode(CENTER);

  ellipse(x1,y1,2*r,2*r);
  fill('black');

  noStroke();
  y1=y1+q1;
  q1=q1+0.7;
  q3=q3-0.5;

  if(mouseIsPressed)
  {
    x1 = mouseX;
    y1 = mouseY
    q1=0;
    q2=0;
    q3=0;
  }

  if(q1>=0 && pandan == 0)
  {
    q3=0;
    pandan=1;
  }
  if(y1+r>=height)
  {
    y1 = height-r;
    q1 = q3+q2/100;
    q2 -= q3;
    q3 = 0;
    pandan=0;
    if(q1>=0)
    {    
      r = random(20,70)
      x1 = random(r,width-r)
      y1= random(-r,windowHeight/2*3);
      q1=0;
      q2=0;
      q3=0;
    }
  }
}

