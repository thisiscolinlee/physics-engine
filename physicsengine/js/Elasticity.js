function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
}

function setup() {
  var canvas=
  createCanvas(windowWidth,windowHeight);
  canvas.parent('container1');
  
  //x1 = random(0,width);
  
  background('white')
  
  x1 = windowWidth/3
  x2 = windowWidth/3*2
  y1=0;
  y2=0;
  
  q1=0;
  q2=0;

  q3=0;
  q4=0;
  
}

function draw() {  
  //alert(y1)
  background('white'); 
  ellipseMode(RADIUS);
  ellipseMode(CENTER);
  ellipse(x1,y1,90,90);
  r1=45;
  fill('black');
  noStroke();

  ellipseMode(RADIUS);
  ellipseMode(CENTER);
  ellipse(x2,y2,120,120);
  r2=60;
  fill('black');
  noStroke();

  y1=y1+q1;
  q1=q1+0.7;

  y2=y2+q3;
  q3=q3+0.98;
  
    if(y1+r1>=windowHeight)
    {
      y1 = windowHeight-r1;
      q1 = -20+q2;
      q2 +=0.98;
      if(q1>=0)
      {
        x1 = random(r1,windowWidth-r1)
        y1=0;
        q1=0;
        q2=0;
      }
    }

  if(y2+r2>=windowHeight)
  {
    y2= windowHeight-r2;
    q3 = -15+q4;
    q4 +=0.98;
    if(q3>=0)
    {
      x2 = random(r2,windowWidth-r2)
      y2=0;
      q3=0;
      q4=0;
    }
  }
}
