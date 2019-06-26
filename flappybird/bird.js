class Bird extends Movable{
    constructor(){
        super();
        this.x = 32;
        this.y = height/2;   
        this.gravity = 0.98 ;
        this.lift = -21;
        this.velocityY = 0;
        this.isOver = false;
    }

    hits(pipe){
        if(this.y < pipe.top + pipe.pipeWidth || this.y > pipe.top + pipe.pipeWidth + pipe.holeDistance ){
            if(this.x > pipe.x-pipe.pipeWidth/3 && this.x < pipe.x-pipe.pipeWidth/3 + pipe.pipeLidWidth){
                console.log(this.y);
                console.log(pipe.top + pipe.pipeWidth);
                console.log(pipe.top + pipe.pipeWidth + pipe.holeDistance);
                this.isOver = true;
                return true;
            }
        }
        return false;
    }

    draw(){
        stroke(0);

        fill(255,246,143);
        ellipse(this.x, this.y, 60, 40);


        fill(255,239,213);
        ellipse(this.x-26, this.y+5, 30, 20);

        fill(255,0,0);
        ellipse(this.x+20, this.y+10, 40, 15);
        line(this.x, this.y+10, this.x+40, this.y+10);

        fill(255);
        ellipse(this.x+12, this.y-7, 30, 20);
        ellipse(this.x+18, this.y-7, 1, 7);
    }

    update(){
        if (!this.isOver) {
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
    }
    up(){
        this.velocityY += this.lift;
    }
}