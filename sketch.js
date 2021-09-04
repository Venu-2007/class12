
function preload(){
  //pre-load images
  runnerimage = loadImage("Runner-1.png")
  pathImg = loadImage("path.png")
}
      
function setup(){
  createCanvas(400,400);
  //create sprites here
  player = createSprite(100,200,100,100);
  player.addImage(runnerimage);
  
  
  path=createSprite(200,200,20,20);
  path.addImage(pathImg);
  
  
}

function draw() {
  background(0);
 


}
