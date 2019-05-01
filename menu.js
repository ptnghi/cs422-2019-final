class Menu {
    constructor(){

    }

    draw(){
        background('#ad453e');

        noStroke();
        fill('#65ad3e');
        rect(100,100,400,200);
        rect(100,350,400,200);
        rect(100,600,400,200);

        fill('#ad3e9c');
        textAlign(CENTER);
        textSize(50);
        textStyle(BOLD);
        text('Flappy Bird', 300, 220);
        text('Snake', 300, 470);
        text('Space Invader', 300, 720);


    }
    update(){

    }

    select(mousex, mousey){
        if (mousex > 100 && mousex <500){
            if (mousey > 100 && mousey < 300){
                return 1;
            }
            if (mousey > 350 && mousey < 550){
                return 2;
            }
            if (mousey > 600 && mousey < 800){
                return 3;
            }
            return 0;
        }
        return 0;
    }
}