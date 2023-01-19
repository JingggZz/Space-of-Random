let angle = 0;
let rotations = [];

function setup() {
  createCanvas(1280,800, WEBGL);
  createEasyCam();
  document.oncontextmenu = ()=>false;
}

function draw() {
  background(0);

  drawASphere();
  surroundingCircles();
  circles()

}

function drawASphere(){
  beginShape();
  frameRate(24);
  
  stroke(random(255),random(255),random(255));
  strokeWeight(2);
  
  noFill();
  
  rotateY(millis() / 1000);
  sphere(500, 24, 3);
  
  endShape();
  
}
function circles(){
  beginShape();
  strokeWeight(3);
  
  for(let i=0; i < 10; i++){
    circle(0,0,250 + i * random(50,70));
    
    rotateY(20);
    rotateZ(50 + i);
  }
}

function surroundingCircles(){
  beginShape();
  
  for(let i=0; i<1500; i++){
    frameRate(10);
    
    stroke(255);
    circle(random(600,1200),random(600,1200),random(30));
    
    let v0 = createVector(0, 100);
    let v1 = createVector(50, 0);

    rotate(10,v1.rotate(angle));
    
    angle = angle + 0.1;

  }
  endShape();
}