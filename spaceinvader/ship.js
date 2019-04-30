class Ship extends Movable {
    constructor(inx) {
      this.x = inx;
      this.xdir = 0;
    }
  
    draw(){
      fill(255);
      rectMode(CENTER);
      rect(this.x, height-40, 20, 40);
    }
  
    update(){
      this.x += this.xdir*5;
    }
  
    setdir(dir){
      this.xdir = dir;
    }
  }

  