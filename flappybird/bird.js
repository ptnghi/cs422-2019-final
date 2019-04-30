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