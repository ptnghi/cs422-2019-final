class FlappyBirdGame {
    constructor(){
        this.pipes =[];
        this.bird  = new Bird();
        this.pipes.push(new Pipe()); 
        this.isOver = false;
    }

    draw(){
        if(!this.isOver){
            background(0);
        
            for(var i=0; i< this.pipes.length; i++){
            this.pipes[i].show();
            this.pipes[i].update();
        
            if(this.bird.hits(this.pipes[i])){
                this.isOver = true;
            }
            if(this.pipes[i].offscreen()){
                this.pipes.splice(i, 1);
            }
            }
            
            this.bird.update();
            this.bird.draw();
        
            if(frameCount % 180 == 0){
            this.pipes.push(new Pipe());
            }  
        }
    }

    update(){

    }

    keyPressed(key){
        if(key == ' '){    
          this.bird.up();
        }
      }

      keyReleased(key,keyCode){

      }
}