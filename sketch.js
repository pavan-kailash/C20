var mr,fr
function setup() {
  createCanvas(800,400);
 mr= createSprite(300, 200, 30, 30);
 mr.shapeColor="green"

 fr= createSprite(600, 200, 50, 50);
 fr.shapeColor="green"
}

function draw() {
  background("yellow");  

  mr.x=World.mouseX
  mr.y=World.mouseY

  if(mr.x-fr.x<40 && fr.x-mr.x<40 && mr.y-fr.y<40 &&  fr.y-mr.y<40){
    mr.shapeColor="red"
    fr.shapeColor="red"
  }
else{
  mr.shapeColor="green"
  fr.shapeColor="green"
}
  drawSprites();
}