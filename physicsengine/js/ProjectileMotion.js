
function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
}

function setup() {

  var canvas=
  createCanvas(windowWidth,windowHeight);
  canvas.parent('container1');
  //x1 = random(0,width);
  
  background('white');
  
  x1 = 15;
  y1=height/5*1;
  q1=0;
  q2=0; 


  x2 = 25;
  y2=height/5*1;
  q3=0;
  q4=0;
}

function draw() {  
  //alert(y1)
  background('white')
  ellipseMode(RADIUS);
  ellipseMode(CENTER);
  ellipse(x1,y1,80,80);
  r1=80/2;
  fill('black');
  noStroke();


  ellipseMode(RADIUS);
  ellipseMode(CENTER);
  ellipse(x2,y2,110,110);
  r2=110/2;
  fill('black');
  noStroke();


  y1=y1+q1;
  q1+=0.098;
  x1+=width/200;
  q2=3;

  y2=y2+q3;
  q3+=0.098;
  x2+=width/300;


  if(x1-r1>=width)
  {
    x1=0;
    y1=height/4*1;
    q1=0;
    q2=0;  
  }
  if(y1+r1>height)
  {
    y1=height-r1;
  }

  if(x2-r2>=width)
  {
    x2=0;
    y2=height/4*1;
    q3=0;
    q4=0;    
  }
  if(y2+r2>height)
  {
    y2=height-r2;
  }
  

}
