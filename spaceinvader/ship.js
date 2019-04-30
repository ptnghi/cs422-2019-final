class ship {
    constructor(inx, iny) {
        this.x = inx;
        this.y = iny;
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
        if ((bullet.x < this.x + 10)
            && (bullet.x > this.x - 1)
            && (bullet.y < this.y+20)
            && (bullet.y > this.y-20)) {
            this.damaged();
            bullet.destroy();
        }
    }
}
