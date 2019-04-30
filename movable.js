class Movable {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    draw(){

    }

    update(){
        
    }
}

class Bird extends Movable{
    constructor(x, y){
        super(x, y);   
        this.gravity = 0.98 ;
        this.lift = -21;
        this.velocityY = 0;
    }
    
    draw(){
        stroke(0);

        fill(255,246,143);
        this.body = ellipse(this.x, this.y, 60, 40);


        fill(255,239,213);
        this.wing = ellipse(this.x-26, this.y+5, 30, 20);

        fill(255,0,0);
        this.beak = ellipse(this.x+20, this.y+10, 40, 15);
        line(this.x, this.y+10, this.x+40, this.y+10);

        fill(255);
        this.eye = ellipse(this.x+12, this.y-7, 30, 20);
        ellipse(this.x+18, this.y-7, 1, 7);
    }

    update(){
        this.velocityY += this.gravity;
        this.velocityY *= 0.92;
        this.y +=this.velocityY;
        if(this.y > height){
            this.y = 0;            
        }

        if(this.y < 0){
            this.y = height;            
        }
    }
    up(){
        this.velocityY += this.lift;
    }
}

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

  class Snake extends Movable{
      constructor(x,y){
        super(x,y);
        this.xspeed = 1;
        this.yspeed = 0;
      }

      update(){
        this.x = this.x +this.xspeed*scl;
        this.y = this.y +this.yspeed*scl;
    
        this.x = constrain(this.x, 0, width-scl);
        this.y = constrain(this.y, 0, height-scl);
      }

      show(){
        fill(255);
        rect(this.x, this.y, scl, scl);
      }

      eat(){
        var d = dist(this.x, this.y, pos.x, pos.y);
        if(d < 1){
            return true;
        }else{
            return false;
        }
      }

      dir(x,y){
        this.xspeed = x;
        this.yspeed =y; 
      }
  }