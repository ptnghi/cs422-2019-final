class Snake extends Movable{
  constructor(){
      super();
      this.x = 0;
      this.y = 0;
      this.xSpeed= 1 ;
      this.ySpeed = 0;
      this.scl = 20;
      this.total = 0;
      this.tail = [];
  }

  getScl(){
      return this.scl;
  }
  
  update(){
      if(this.total === this.tail.length){
          for (var i = 0; i< this.tail.length-1; i++){
              this.tail[i] = this.tail[i+1];
          }            
      }
      this.tail[this.total-1] = createVector(this.x, this.y); 

      this.x = this.x +this.xSpeed  *this.scl;
      this.y = this.y +this.ySpeed*this.scl;

      this.x = constrain(this.x, 0, width-this.scl);
      this.y = constrain(this.y, 0, height-this.scl);        
  }

  show(){
      fill(255);
      for (var i=0; i<this.tail.length; ++i){
          rect(this.tail[i].x, this.tail[i].y, this.scl, this.scl);
      }
      rect(this.x, this.y, this.scl, this.scl);
  }

  eat(pos){
      var d = dist(this.x, this.y, pos.x, pos.y);
      if(d < 1){
          this.total++;
          return true;
      }else{
          return false;
      }
  }

  dir(x,y){
      this.xSpeed = x;
      this.ySpeed = y; 
  }

  death(){
      for (var i=0; i<this.tail.length; i++){
          var pos = this.tail[i];
          var d = dist(this.x, this.y, pos.x, pos.y);
          if(d<1){
              this.total = 0;
              this.tail = [];
              return true;
          }
      }
      return false;
  }
}