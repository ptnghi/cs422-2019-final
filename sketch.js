
var game;
var state;
var menu;
function setup() {
    createCanvas(600,900);
    menu = new Menu();
    //game = new SpaceInvaderGame();
}

function draw() {
    if (state === 0){
        menu.draw();
    } else {
        game.draw();
        game.update();
    }
}


function keyPressed() {
    game.keyPressed(key,keyCode);
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