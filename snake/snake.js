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