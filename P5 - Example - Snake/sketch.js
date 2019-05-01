var s;

var food;


function setup() {
  createCanvas(600, 600); 

  s = new Snake(0,0);
  frameRate(10)
  pickLocation();
}

function pickLocation(){
  var cols = floor(width/s.getScl())
  var rows = floor(height/s.getScl())

  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(s.getScl());
}


function draw() {
  background(51);
  s.update();
  s.show();

  if(s.eat(food)){
    pickLocation();
  }

  fill(255, 0, 100)
  rect(food.x, food.y, s.getScl(), s.getScl());
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    s.dir(0, -1);
  }
  else if(keyCode == DOWN_ARROW){
    s.dir(0,1);
  }
  else if(keyCode == LEFT_ARROW){
    s.dir(-1,0);
  }
  else if(keyCode == RIGHT_ARROW){
    s.dir(1,0);
  }
}

