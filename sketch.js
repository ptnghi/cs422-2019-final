
var game;

function setup() {
    createCanvas(600,900);
    // game = new SpaceInvaderGame();
    game = new snakeGame();
}

function draw() {
    game.draw();
    // game.update();
}


function keyPressed() {
    // game.keyPressed(key,keyCode);
    game.keyPressed(keyCode);
}

function keyReleased() {
    game.keyReleased(key,keyCode);
}
  
// canvas = createCanvas(window.innerWidth, window.innerHeight);
// window.onresize = function() {
//   var w = window.innerWidth;
//   var h = window.innerHeight;  
//   canvas.size(w,h);
//   width = w;
//   height = h;
// };