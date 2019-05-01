
var game;

function setup() {
    createCanvas(600,900);
    game = new SpaceInvaderGame();
}

function draw() {
    game.draw();
    game.update();
}


function keyPressed() {
    game.keyPressed(key,keyCode);
}

function keyReleased() {
    game.keyReleased(key,keyCode);
}