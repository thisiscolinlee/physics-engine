
function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
}

function setup() {
  var canvas=
  createCanvas(windowWidth,windowHeight);
  canvas.parent('container1');

  x1=windowWidth/3*2
  x2=windowWidth/3*1
}

var E=1000;

var c1 = {
  x:"windowWidth",
  mass:"50",
  diameter:"90"
};
var r1 = c1.diameter/2;
var x1 = c1.x;
var mass1 = c1.mass;
///Math.sqrt: 제곱근 구하기
var v1 = Math.sqrt(2*E/mass1);

var c2 = {
  x:"width/20",
  mass:"10",
  diameter:"50"
};
var r2 = c2.diameter/2;
var x2 = c2.x;
var mass2 = c2.mass;
var v2=0;

  
function draw() { 

  y1=windowHeight-r1
  y2=windowHeight-r2

  background('white')
  ellipseMode(RADIUS);
  ellipseMode(CENTER);
  ellipse(x1,y1,r1*2,r1*2);
  ellipse(x2,y2,r2*2,r2*2);

  fill('black');
  noStroke('');
  
  limit=Math.sqrt((x1-x2)**2-(y1-y2)**2);
  if(limit<=r1+r2){
    if(v1==0){
      v1=Math.sqrt(mass2/mass1)*v2;
      v2=0;
    }
    else if(v2==0)
    {
      v2=Math.sqrt(mass1/mass2)*v1;
      v1=0;
    }
  }
    

  if(width-x1<=r1){
    v1=-v1;
  }
  if(x2<=r2){
    v2=-v2;
  }

  x1=x1-v1;
  x2=x2-v2;
    
}
