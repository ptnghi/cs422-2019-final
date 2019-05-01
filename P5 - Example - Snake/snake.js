class Snake extends Movable{
    constructor(){
        super();
        this.x = 0;
        this.y = 0;
        this.xSpeed = 1 ;
        this.ySpeed = 0;
        this.scl = 20;
    }

    getScl(){
        return this.scl;
    }
    
    update(){
        this.x = this.x +this.xspeed*this.scl;
        this.y = this.y +this.yspeed*this.scl;
  
        this.x = constrain(this.x, 0, width-this.scl);
        this.y = constrain(this.y, 0, height-this.scl);
    }

    show(){
        fill(255);
        rect(this.x, this.y, this.scl, this.scl);
    }

    eat(pos){
        var d = dist(this.x, this.y, pos.x, pos.y);
        if(d < 1){
            return true;
        }else{
            return false;
        }
    }

    dir(x,y){
        this.xspeed = x;
        this.yspeed = y; 
    }

}