


var size = 46;
var count = 0;
var sizeDirection = 1;

var headX = 400;
var headY = 235;


var armOneY = 200;
var armTwoY = 250;
var handDirection = 1;

var eyeX = 370;
var eyeY = 230;
var eyeDirection = 1;

var mouthX = 400;
var mouthY = 295;
var mouthDirection = 1;
var mouthYDirection =1;


function setup() {
    createCanvas(800,800);
    movement1 = floor(random(1, 10));
    movement2 = floor(random(1, 20));
    movement3 = floor(random(1, 5));
    movement4 = floor(random(1, 3));
    movement5 = floor(random(1, 3));
    movement6 = floor(random(1, 50));
    movement7 = floor(random(1, 50));
}

function draw() {
    background(140)

    //Title/Text
    textSize(size);
    text("Brit Ramsey", 290, 790);
    size += movement1;
    count++;
    if(count > 5) {
        movement1 *= -1;
        count = 0;
    }
    text("AHHH!", 330, 60);

    //Head
    let c = color(255, 235, 205);
    fill(c);
    noStroke();
    circle(headX, headY, 160);
    headX+=movement2;
    if(headX >= 425 || headX <= 375) {
        movement2 *= -1;
    }

    //Eyes
    c = color("white");
    fill(c);
    stroke(2);
    strokeWeight(1);
    ellipse(eyeX, 230, 40, 25);
    eyeX += movement3;
    if (eyeX >= 395 || eyeX <= 355) {
        movement3 *= -1;
    }
    ellipse(430, 230, 40, 25);
    c = color("black");
    fill(c);
    circle(eyeX, 230, 10);
    circle(430, 230, 10);

    //Eyebrows
    stroke(0);
    strokeWeight(4);
    line(350, 210, 390, 215);
    line(410, 215, 450, 210);

    //Nose
    strokeWeight(2);
    line(400, 250, 390, 265);
    line(390, 265, 400, 265);

    //Mustache
    strokeWeight(6);
    point(425, 280);
    point(365, 299);
    point(365, 294);
    point(365, 289);
    point(365, 284);
    point(370, 282);
    point(375, 280);
    point(380, 278);
    point(385, 276);
    point(390, 274);
    point(395, 272);
    point(400, 270);
    point(405, 272);
    point(410, 274);
    point(415, 276);
    point(420, 278);
    point(425, 280);
    point(430, 282);
    point(435, 284);
    point(435, 289);
    point(435, 284);
    point(435, 299);
    point(435, 294);

    //Mouth
    c = color("white");
    fill(c);
    strokeWeight(2);
    ellipse(mouthX, mouthY, 60, 30);
    mouthX += movement4;
    mouthY += movement5;
    if (mouthX >= 425 || mouthX <= 400 && mouthY >= 315 || mouthY <= 295) {
        movement4 *= -1;
        movement5 *= -1;
    }

    //Body
    c = color(128, 0, 0);
    fill(c);
    rect(315, 330, 175, 250);

    //Arms
    strokeWeight(10);
    line(315, 400, 250, armOneY);
    line(490, 400, 600, armTwoY);
    armOneY += movement6;
    if (armOneY >= 250 || armOneY <= 150) {
        movement6 *= -1;
    }
    armTwoY += movement7;
    if (armTwoY >= 300 || armTwoY <= 200) {
        movement7 *= -1;
    }

    //Legs
    noStroke();
    triangle(315, 750, 375, 550, 375, 750);
    triangle(485, 750, 420, 550, 420, 750);

    //Hat
    c = color("black");
    fill(c);
    rect(320, 100, 160, 100, 90, 90, 0, 0);
}
