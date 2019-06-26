
var game;
var state;
var menu;
function setup() {
    createCanvas(600,900);
    menu = new Menu();
    state = 0;
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
    if (game != null){
        if(game.isOver && key == 'q'){
            createCanvas(600,900);
            game = null;
            rectMode(CORNER);
            state = 0;
        } else {
            game.keyPressed(key,keyCode);
        }
    }
}

function keyReleased() {
    if (game != null){
        if (!game.isOver){
            game.keyReleased(key,keyCode);
        }
    }
}

function  mousePressed() {
   if (state === 0 ){
       let choice = menu.select(mouseX, mouseY);
       switch (choice) {
           case 1:
               game = new FlappyBirdGame();
               state = 1;
               break;
           case 2:
               game = new SnakeGame();
               state =1;
               break;
           case 3:
               game = new SpaceInvaderGame();
               state = 1;
               break;
       }
   }
}
  
// canvas = createCanvas(window.innerWidth, window.innerHeight);
// window.onresize = function() {
//   var w = window.innerWidth;
//   var h = window.innerHeight;  
//   canvas.size(w,h);
//   width = w;
//   height = h;
// };