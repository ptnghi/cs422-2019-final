class FlappyBirdGame {
    constructor(){
        this.pipes =[];
        this.bird  = new Bird();
        this.pipes.push(new Pipe()); 
        this.isOver = false;
        frameRate(60);
    }

    draw(){
        background(0);
        if(!this.isOver){

        
            for(let i=0; i< this.pipes.length; i++){
                this.pipes[i].show();
            }
            this.bird.draw();
        } else {
            this.gameOver();
        }
    }

    update(){
        if (!this.isOver){
            console.log(this.pipes.length);
            for (let i = 0; i< this.pipes.length; i++){
                this.pipes[i].update();
                if(this.bird.hits(this.pipes[i])){
                    this.isOver = true;
                }
                if(this.pipes[i].offscreen()){
                    this.pipes.splice(i, 1);
                }
            }
            this.bird.update();
            if(frameCount % 180 === 0){
                this.pipes.push(new Pipe());
            }
        }
        console.log(this.isOver);
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
    keyPressed(key){
        if(key == ' '){    
          this.bird.up();
        }
    }

    keyReleased(key,keyCode){

    }
}