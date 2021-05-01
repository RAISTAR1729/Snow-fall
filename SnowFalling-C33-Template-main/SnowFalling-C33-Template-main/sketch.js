var bgimage,bg;
var cat1image,cat2image,cat;
function preload(){
bgimage=loadImage("snow1.jpg")
bgimage=loadImage("snow2.jpg")
bgimage=loadImage("snow3.jpg")
//bgimage=loadImage("snow4.jpg")
//bgimage=loadImage("snow5.jpg")
cat1image=loadImage("cat1.png")
//cat2image=loadAnimation("cat2.png","cat4.png")

}
function setup() {
  createCanvas(1000,800);
bg=createSprite(500,400);
bg.addImage(bgimage);

bg.scale=2
cat=createSprite(800,600)
cat.addImage(cat1image)
cat.scale=0.1;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
function keyPressed(){
if(keyCode===32){
cat.velocityX=-3
//cat.addAnimation("catwalking",cat2image)
}
if(keyCode===UP_ARROW){
cat.x=100
cat.velocityX=0
}
}