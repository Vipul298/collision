var rect,tangle;



function setup() {
  createCanvas(1200,800);
   rect = createSprite(200,200,50,80);
   rect.shapeColor = "green";
   tangle = createSprite(400,200,80,30);
   tangle.shapeColor = "green";
}

function draw() {
  background(255,255,255); 
  tangle.x  = World.mouseX;
  tangle.y = World.mouseY;
  console.log(rect.x-tangle.x);

  if (tangle.x-rect.x<tangle.width/2+rect.width/2 && rect.x-tangle.x<tangle.width/2+rect.width/2
    && tangle.y-rect.y<tangle.width/2+rect.width/2 && rect.y-tangle.y<tangle.width/2+rect.width/2){
    rect.shapeColor = "red";
    tangle.shapeColor = "red";
  }
  else {
    rect.shapeColor = "green";
    tangle.shapeColor = "green";}

  drawSprites();
}