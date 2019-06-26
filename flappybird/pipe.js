class Pipe {
    constructor(){
        this.pipeWidth = 60;
        this.top = random(height/2-this.pipeWidth);
        this.holeDistance = 200;
        this.bottom = height - (this.top+ this.holeDistance);
        this.x = width;    
        this.pipeLidWidth = 100;
        this.speed = 2;
    }    
    
    show(){
        fill(0,208,45);
        rect(this.x, 0, this.pipeWidth , this.top);
        rect(this.x-this.pipeWidth/3, this.top, this.pipeLidWidth , this.pipeWidth);
        rect(this.x-this.pipeWidth/3, this.top + this.pipeWidth + this.holeDistance, this.pipeLidWidth, this.pipeWidth);        
        rect(this.x, this.top + this.pipeWidth + this.holeDistance + this.pipeWidth, this.pipeWidth , this.bottom);
    }

    update(){
        this.x -= this.speed;
    }

    offscreen(){
        if(this.x < -this.pipeWidth ){
            return true;
        }
        return false;
    }
}