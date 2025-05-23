function setup() {
  createCanvas(1000, 625);
startBtn = new pixelated(200, 150,200,100);
  noSmooth();
}

function draw() {
  background(220);
  //draw objects
  // drawWallet(100, 200);
  // drawPhone(450, 160);
  // drawDiary(650, 160);
  startBtn.display()
  
}

function drawWallet(x, y) {
  // you enter the x and y value only
  rectMode(CORNER);
  stroke(25, 13, 69);
  strokeWeight(5);
  //brownish
  fill(125, 70, 45);
  //lower rect
  rect(x + 10, y - 10, 250, 180, 10, 10);
  //front rect
  rect(x, y, 250, 180, 10, 10);
  line(x + 20, y + 10, x + 230, y + 10);
  line(x + 20, y + 170, x + 230, y + 170);
  // line(x+240,y+10, x+240, y+170)
  //button and clip
  rect(x + 200, y + 180 / 2 - 15, 70, 40, 5, 5);
  fill(244, 190, 78);
  noStroke();
  circle(x + 230, y + 95, 25);
  
}

function drawPhone(x, y) {
  fill(250);
  stroke(0);
  strokeWeight(8);
  rectMode(CORNER);
  //phone rect
  fill(200);
  rect(x + 20, y, 130, 250, 15, 15);
  fill(255);
  rect(x, y, 130, 250, 15, 15);
  fill(0);
  //camera
  rect(x + 45, y, 40, 10, 10, 10);
  line(x + 50, y + 240, x + 90, y + 240);
  // fill(255);
  // stroke(0)
  // circle(x+80,y+230,20)
}

function drawDiary(x, y) {
  stroke(101, 109, 113);
  strokeWeight(2);
  fill(160, 173, 185); //light blue
  rect(x, y, 200, 280);
  noStroke();
  fill(101, 109, 113, 50); //transparent darker blue
  rect(x + 10, y, 10, 280); //3d effects
  fill(255);
  textSize(30);
  textFont("Press Start 2P");
  text("DIARY", x + 40, y + 280 / 2);

  fill(135, 168, 130); // muted green ribbon

  beginShape();
  vertex(x + 20, y + 280); // top left
  vertex(x + 30, y + 280); // top right
  vertex(x + 30, y + 300); // bottom right
  vertex(x + 20, y + 320); // bottom left
  endShape(CLOSE);
  
}
