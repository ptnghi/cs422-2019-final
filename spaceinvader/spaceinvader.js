class SpaceInvaderGame {
    constructor(){
        this.player = new Ship(width/2, height-20);
        this.playerBullets = [];
        this.enemyBullets = []
        this.aliens = this.createEnemy();
        this.totalvelo = 20;
        this.maxbullet = 0;
        this.isOver = false;

    }


    createEnemy(){
        let temp = [];
        for (let i = 0; i<5; i++){
            for (let j = 0; j< 5; j++){
                temp[i*5 + j] = new Alien(j*100+100, i*50 + 50,10);
            }
        }
        return temp;
    }

    cleanup(){
        if (this.player.isDestroyed){
            this.isOver = true;
        }
        for (let i = 0; i< this.enemyBullets.length; i++){
            if (this.enemyBullets[i].destroyed){
                this.enemyBullets.splice(i,1);
            }
        }
        for (let i = 0; i < this.playerBullets.length; i++) {
            if (this.playerBullets[i].destroyed){
                this.playerBullets.splice(i,1);
            }
        }

        for (let i = 0; i <  this.aliens.length; i++) {
            if (this.aliens[i].destroyed){
                this.aliens.splice(i,1);
            }
        }
    }

    keyPressed(key,keyCode){
        if (key === ' '){
            let bullet = new Bullet(this.player.x, this.player.y, 5, '#EEFFCCFF');
            this.playerBullets.push(bullet);
        } else if ((key === 'r') && (this.isOver)){
            this.restart();
        }
        if (keyCode === RIGHT_ARROW){
            this.player.setdir(1);
        } else if (keyCode === LEFT_ARROW) {
            this.player.setdir(-1);
        }
    }

    keyReleased(key,keyCode){
        if (key != ' '){
            this.player.setdir(0);
        }
    }

    update(){
        if (!this.isOver) {
            let edge = 0;
            this.maxbullet = round(this.aliens.length / 5) + 1;
            this.player.update();

            for (let i = 0; i < this.playerBullets.length; i++) {
                this.playerBullets[i].update();
                for (let j = 0; j < this.aliens.length; j++) {
                    this.aliens[j].hit(this.playerBullets[i]);
                }
            }

            console.log(this.enemyBullets.length);
            if (this.enemyBullets.length < this.maxbullet) {
                let shooter = random(this.aliens);
                let bullet = new Bullet(shooter.x, shooter.y, -5, '#FFEECCFF');
                this.enemyBullets.push(bullet);
            }

            if (this.enemyBullets.length > 0) {
                for (let i = 0; i < this.enemyBullets.length; i++) {
                    this.enemyBullets[i].update();
                    this.player.hit(this.enemyBullets[i]);
                }
            }

            for (let i = 0; i < this.aliens.length; i++) {
                if (this.aliens[i].update(this.totalvelo / this.aliens.length)) {
                    edge = 1;
                }
            }

            if (edge == 1) {
                for (let i = 0; i < this.aliens.length; i++) {
                    this.aliens[i].shift();
                }
            }

            this.cleanup();
        }
    }

    draw() {
        background(51);
        if (!this.isOver){
            this.player.draw();

            for (let i = 0; i < this.playerBullets.length; i++) {
                this.playerBullets[i].draw();
            }

            if (this.enemyBullets.length > 0) {
                for (let i = 0; i < this.enemyBullets.length; i++) {
                    this.enemyBullets[i].draw();
                }
            }
            for (let i = 0; i < this.aliens.length; i++){
                this.aliens[i].draw();
            }
        } else {
            this.gameOver();
        }
    }

    gameOver(){
        textSize(36);
        textAlign(CENTER);
        text('Game Over you N00b', width/2, height/2);
        text('Press R to restart', width/2, height/2 + 40);
    }

    restart(){
        this.player = new Ship(width/2, height-20);
        this.playerBullets = [];
        this.enemyBullets = []
        this.aliens = this.createEnemy();
        this.maxbullet = 0;
        this.isOver = false;
    }
}