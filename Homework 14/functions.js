var charX;
var charY;

var shapeXs = []
var shapeYs = []
var diameters = []

var xSpeed = []
var ySpeed = []

var rColor = ['red', 'blue', 'black', 'yellow', 'orange', 'pink'];
//var randomIndex = Math.floor(Math.random() * rColor.length);
var randomColor = rColor[Math.floor(Math.random() * rColor.length)];

var mousex;
var mousey;

var w = 87
var a = 65
var s = 83
var d = 68

function setup() {
    createCanvas(1000,800)
    for (var i = 0; i < 10; i++) {
        xSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) * 1);
        shapeXs[i] = Math.floor(Math.random() * 1000) + 20;
        diameters[i] = Math.floor(Math.random() * 30) + 10;
        }
    for (var a = 0; a < 10; a++) {
        ySpeed[a] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) * 1);
        shapeYs[a] = Math.floor(Math.random() * 800) + 15;
        diameters[a] = Math.floor(Math.random() * 30) + 10;
        }
    createPlayer(40, 40);
}

function draw () {

    background(145);

    boarderCreation();

    drawPlayer();

    playerMovement();
    
    mouseOnClick();

    createExit();

    youWin();

    dShapes();

    dShapes_2();
    
}

function mousePressed() {
    mousex = mouseX;
    mousey = mouseY;
}

function dShapes() {
    for (var i = 0; i < shapeYs.length; i++) {
        fill(randomColor);
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        ySpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 15)) + 10);
        shapeYs[i] += ySpeed[i];

        if (shapeYs[i] > 800) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = 800;
        }
    }
}

function dShapes_2() {
    for (var a = 0; a < shapeXs.length; a++) {
        fill(randomColor);
        circle(shapeXs[a], shapeYs[a], diameters[a]);
        xSpeed[a] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) * 1);
        ySpeed[a] = 0
        shapeYs[a] += ySpeed[a];
        shapeXs[a] += xSpeed[a];

        if (shapeXs[a] > 1000) {
            shapeXs[a] = 0;
        }
        if (shapeXs[a] < 0) {
            shapeXs[a] = 1000;
        } 
    }
}

function mouseOnClick() {
    fill(randomColor);
    circle(mousex, mousey, 100);
}

function createPlayer(x, y) {
    charX = x;
    charY = y;
    return charX, charY;
}

function drawPlayer() {
    fill("green");
    circle(charX, charY, 15);
}

function playerMovement() {
    if(keyIsDown(a)) {
        charX-=5;
    } else if (keyIsDown(d)) {
        charX+=5;
    } else if (keyIsDown(w)) {
        charY-=5;
    } else if (keyIsDown(s)) {
        charY+=5;
    } 

    if (charX > 970 && charY < 750) {
        charX = 965;
    } else if (charX < 20) {
        charX = 30;
    } else if (charY > 780) {
        charY = 770;
    } else if (charY < 20) {
        charY = 30;
    }
}

function boarderCreation() {
    fill('black');
    rect(0, 0, 1000, 10);
    rect(0, 0, 10, 800);
    rect(980, 0, 20, 750);
    rect(0, 790, 1000, 10);
}

function createExit() {
    line(980, 750, 1400, 750);
    line(980, 795, 1400, 795);
    fill(0,0,0);
    textSize(12);
    text("EXIT", 970, 775);
}

function youWin() {
    if (charX > 1000 && charY > 750 && charY < 795) {
        textSize(46);
        text("YOU WIN!", 400, 400);
    }
}