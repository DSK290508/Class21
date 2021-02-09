var fixedRect, movingRect;

function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gobject1 = createSprite(800, 600, 70, 40);
  gobject1.shapeColor = "white"
  gobject2 = createSprite(600, 600, 50, 60);
  gobject2.shapeColor = "red"
  gobject3 = createSprite(700, 100, 70, 40);
  gobject3.shapeColor = "violet"
  gobject3.velocityY = 1;
  gobject4 = createSprite(700, 500, 66, 45);
  gobject4.velocityY = -1;
  gobject4.shapeColor = "yellow"


}

function draw() {
  background(0, 0, 0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect, gobject2)) {
    movingRect.shapeColor = "blue";
    gobject2.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    gobject2.shapeColor = "green";
  }
  bounceOff(gobject3, gobject4);
  drawSprites();
}

