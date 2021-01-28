var rf;
var rm;

function setup() {
  createCanvas(1200,800);
  rm=createSprite(400, 200, 80, 30);
  rf=createSprite(200 , 200, 50, 80)


}


function draw() {
  background(255,255,255);  
rm.x=World.mouseX;
rm.y=World.mouseY;

if (rm.x-rf.x < rf.width/2+rm.width/2 && rf.x-rm.x < rf.width/2+rm.width/2 && rm.y-rf.y < rf.height/2+rm.height/2 && rf.y-rm.y < rf.height/2+rm.height/2 ){
 
  
  rm.shapeColor="red";
  rf.shapeColor="yellow";
} else {rm.shapeColor="green";
rf.shapeColor="green";}





//console.log(rm.x-rf.x);

  drawSprites();
}