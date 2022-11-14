var x = 20;
var y = 20;
var charDiam = 25;

var diam = 25;
var grow = 4;

var rectX = 700;
var rectY = 400;
var rectMove = 2;

var rect2X = 1000;
var rect2Y = 200;
var rect2Move = 5;

var mousex;
var mousey;

var w = 87
var a = 65
var s = 83
var d = 68

function setup() {
    createCanvas(1400,800)
}

function draw () {
    background(145);

    fill(24, 200, 29);
    circle(x, y, charDiam);
    if (x > 1400) {
        x = 0;
    } else if (x < 0) {
        x = 1400;
    } else if (y > 800) {
        y = 0;
    } else if (y < 0) {
        y = 800;
    }

    
    if(keyIsDown(a)) {
        x-=5;
    } else if (keyIsDown(d)) {
        x+=5;
    } else if (keyIsDown(w)) {
        y-=5;
    } else if (keyIsDown(s)) {
        y+=5;
    } 

    fill(255, 0, 0);
    circle(mousex, mousey, 100);

    fill(214, 82, 247)
    rect(rectX, rectY, 50, 200);
    rectY+= rectMove;
    if (rectY == 800) {
        rectY=0;
    }

    rect(rect2X, rect2Y, 25, 300);
    rect2Y += rect2Move;
    if (rect2Y == 800) {
        rect2Y = 0;
    }

    fill(0, 255, 145);
    circle(300, 600, diam);
    diam += grow;
    if (diam >= 400) {
        diam *= -1;
    }


    line(1380, 750, 1400, 750);
    line(1380, 795, 1400, 795);
    fill(0,0,0);
    textSize(12);
    text("EXIT", 1370, 775);
    if (x > 1400 && y > 750 && y < 795) {
        textSize(46);
        text("YOU WIN!", 500, 400);
    }
}

function mousePressed() {
    mousex = mouseX;
    mousey = mouseY;
}

