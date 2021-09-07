var canvas,bg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
  bgImage = loadImage("images/garden.png");
  tomImage1 = loadImage("images/tOmone.png");
  tomImage2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
  tomImage3 = loadAnimation("images/tomFour.png");
}

function setup(){
   canvas = createCanvas(1000,800);

   tom = createSprite(870,600);
   tom.addAnimation("tomSleeping",tomImage1);
   tom.scale = 0.2;
   
   jerry = createSprite(200,600);
   jerry.addAnimation("jerryStanding",jerryimage1);
   jerry.scale = 0.15;
}

function draw() {

  if(tom.x - jerry.x < (tom.width - jerry.width)/2)
  {
   tom.velocityX = 0;
   tom.addAnimation("tomFour",tomImg3);
   tom.changeAnimation("tomFour",tomImg3);
    tom.x = 300;
    tom.scale = 0.2;
  } 
 

  drawSprites();
    
}


function keyPressed(){

    
}