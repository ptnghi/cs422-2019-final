class Bullet {
    constructor(inx, iny, velocity, color) {
        this.x = inx;
        this.y = iny;
        this.velocity = velocity;
        this.r = 8;
        this.color = color;
        this.destroyed = false;
        this.damage = 5;
    }

    draw(){
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }

    update(){
        this.y -= this.velocity;
        if (this.y < 0 || this.y > height){
            this.destroyed = true;
        }
    }

    destroy(){
        this.destroyed = true;
    }
}
