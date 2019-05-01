class SnakeGame{
    constructor(){
        this.player = new Snake();
        this.food = null;
        frameRate(10);
        this.pickLocation();
    }

    pickLocation(){
        var cols = floor(width/this.player.getScl())
        var rows = floor(height/this.player.getScl())
      
        this.food = createVector(floor(random(cols)), floor(random(rows)));
        this.food.mult(this.player.getScl());
      }

    draw() {
        background(51);

        this.player.show();

        fill(255, 0, 100)
        rect(this.food.x, this.food.y, this.player.getScl(), this.player.getScl());
    }

    update(){
        this.player.death();
        this.player.update();
        if(this.player.eat(this.food)){
            this.pickLocation();
        }
    }
    keyPressed(key,keyCode){
        if(keyCode === UP_ARROW){
          this.player.dir(0, -1);
        }
        else if(keyCode === DOWN_ARROW){
          this.player.dir(0,1);
        }
        else if(keyCode === LEFT_ARROW){
          this.player.dir(-1,0);
        }
        else if(keyCode === RIGHT_ARROW){
          this.player.dir(1,0);
        }
    }
    keyReleased(key,keyCode){

    }
}