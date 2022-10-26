function setup() {
    createCanvas(800,800);
}

function draw() {
    background(140)

    //Title/Text
    textSize(46);
    text("AHHH!", 330, 60);
    text("Brit Ramsey", 290, 790);

    //Head
    let c = color(255, 235, 205);
    fill(c);
    noStroke();
    circle(400, 250, 160);

    //Eyes
    c = color("white");
    fill(c);
    stroke(2);
    strokeWeight(1);
    ellipse(370, 230, 40, 25);
    ellipse(430, 230, 40, 25);
    c = color("black");
    fill(c);
    circle(370, 230, 10);
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
    ellipse(400, 295, 60, 30);

    //Body
    c = color(128, 0, 0);
    fill(c);
    rect(315, 330, 175, 250);

    //Arms
    strokeWeight(10);
    line(315, 400, 250, 200);
    line(490, 400, 600, 250);

    //Legs
    noStroke();
    triangle(315, 750, 375, 550, 375, 750);
    triangle(485, 750, 420, 550, 420, 750);

    //Hat
    c = color("black");
    fill(c);
    rect(320, 100, 160, 100, 90, 90, 0, 0);
}
