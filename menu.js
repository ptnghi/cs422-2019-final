function Menu(){
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    
}

window.onresize = function() {
    var w = window.innerWidth;
    var h = window.innerHeight;  
    canvas.size(w,h);
    width = w;
    height = h;
  };