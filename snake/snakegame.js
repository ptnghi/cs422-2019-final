class SnakeGame{
    constructor(){
        this.player = new Snake();
        this.food = null;
        frameRate(10);
        this.pickLocation();
        this.isOver = false;
        this.isWon = false;
    }

    pickLocation(){
        var cols = floor(width/this.player.getScl())
        var rows = floor(height/this.player.getScl())
      
        this.food = createVector(floor(random(cols)), floor(random(rows)));
        this.food.mult(this.player.getScl());
      }

    draw() {
        background(51);

        if (!this.isOver){
            this.player.show();

            fill(255, 0, 100)
            rect(this.food.x, this.food.y, this.player.getScl(), this.player.getScl());
        } else {
            this.gameOver();
        }
    }

    update(){
        if (!this.isOver) {
            this.isOver = this.player.death();
            this.player.update();
            if (this.player.eat(this.food)) {
                this.pickLocation();
            }
        }
    }

    gameOver(){
        textSize(36);
        textAlign(CENTER);
        if (!this.isWon){
            text('Game Over you N00b', width/2, height/2);
            text('Press R to restart', width/2, height/2 + 40);
        } else {
            text('Congrats You Won', width/2, height/2);
            text('Press R to restart', width/2, height/2 + 40)
        }

        text('Press Q to return to menu', width/2, height/2 + 80);
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