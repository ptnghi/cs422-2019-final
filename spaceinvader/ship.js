class Ship extends Movable{
    constructor(inx, iny) {
        super(inx,iny);
        this.xdir = 0;
        this.isDestroyed = false;
    }

    draw(){
        fill(255);
        rectMode(CENTER);
        rect(this.x, height-40, 20, 40);
    }

    update(){
        this.x += this.xdir*5;
    }

    setdir(dir){
        this.xdir = dir;
    }

    damaged(){
        this.isDestroyed = true;
    }

    hit(bullet){
        if ((bullet.x + bullet.r < this.x + 10)
            && (bullet.x + bullet.r > this.x - 10)
            && (bullet.y + bullet.r < this.y+20)
            && (bullet.y + bullet.r > this.y-20)) {
            this.damaged();
            bullet.destroy();
        }
    }
}
