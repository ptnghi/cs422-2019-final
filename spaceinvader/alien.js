class Alien extends Movable{
    constructor(inx, iny, inhp) {
        super(inx,iny);
        this.hp = inhp;
        this.destroyed = false;
        this.xdir = 1;
        this.r = 15
    }

    update(velo){
        this.x += velo * this.xdir;
        return (this.x > width || this.x < 0);
    }

    draw(){
        fill(255,125,75);
        ellipse(this.x, this.y, this.r*2 , this.r*2);
    }

    damaged(dmg){
        this.hp -= dmg;
        if (this.hp <= 0){
            this.destroyed = true;
        }
    }
    shift(){
        this.xdir *= -1;
        this.y += 20;
    }
    hit(bullet){
        let d = dist(this.x,this.y, bullet.x,bullet.y);
        if (d < this.r + bullet.r) {
            this.damaged(bullet.damage);
            bullet.destroy();
        }
    }
}
