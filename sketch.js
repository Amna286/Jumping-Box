var canvas;
var music, hit, blast;
var surface1, surface2, surface3, surface4;
var box;
var edge1, edge2, edge3, edge4;

function preload() {
    music = loadSound("music.mp3");
    hit = loadSound("hit.wav");
    blast = loadSound("blast.wav");
}

function setup() {
    canvas = createCanvas(800, 600);

    surface1 = createSprite(100, 590, 200, 20);
    surface2 = createSprite(300, 590, 200, 20);
    surface3 = createSprite(500, 590, 200, 20);
    surface4 = createSprite(700, 590, 200, 20);

    surface1.shapeColor = "lightcoral";
    surface2.shapeColor = "palevioletred";
    surface3.shapeColor = "cadetblue";
    surface4.shapeColor = "teal";

    box = createSprite(random(20, 780), 0, 50, 50);
    box.shapeColor = "white";
    box.velocityX = 5;
    box.velocityY = 4;

    edge1 = createSprite(400, 0, 800, 10);
    edge2 = createSprite(400, 600, 800, 10);
    edge3 = createSprite(0, 400, 10, 800);
    edge4 = createSprite(800, 400, 10, 800)
}

function draw() {
    background(rgb(169,169,169));

    box.bounceOff(edge1);
    box.bounceOff(edge2);
    box.bounceOff(edge3);
    box.bounceOff(edge4);

    if(isTouching(box, surface1)) {
        box.shapeColor = "lightcoral";
        hit.play();
        box.bounceOff(surface1);
    }
    if(isTouching(box, surface2)) {
        box.shapeColor = "palevioletred";
        music.play();
        box.bounceOff(surface2);
    }
    if(isTouching(box, surface3)) {
        box.shapeColor = "cadetblue";
        box.bounceOff(surface3);
        music.stop();
        hit.play();
        box.velocityX = 0;
        box.velocityY = 0;
    }
    if(isTouching(box, surface4)) {
        box.shapeColor ="teal";
        blast.play();
        box.bounceOff(surface4);
    }

    drawSprites();
}
