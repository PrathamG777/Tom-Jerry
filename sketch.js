var tom, tomImg1, tomImg2, tomImg3;
var jerry, jerryImg1, jerryImg2, jerryImg3;
var forest, forestImg;

function preload() {
    //load the images here
    forestImg = loadImage("garden.png");
    tomImg1 = loadImage("cat1.png");
    jerryImg1 = loadImage("mouse1.png");
    tomImg2 = loadAnimation(cat2.png,cat3.png);
    jerryImg2 = loadAnimation(mouse2.png,mouse3.png);
    tomImg3 = loadImage("cat4.png");
    jerryImg3 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(850,700,50,50);
    tom.addImage("tom",tomImg1);
    jerry = createSprite(200,700,50,50);
    jerry.addImage("jerry",jerryImg1);
    forest = createSprite(500,400,1000,800);
    forest.addImage("forest",forestImg);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if (tom.x - jerry. x < (tom.width - jerry.width)/2){
        tom.addImage("tomHappy",tomImg3);
        jerry.addImage("jerryHappy",jerryImg3);
        tom.velocityX = 0;

    }

    drawSprites();
    keyPressed();
}


function keyPressed(){

  //For moving and changing animation write code here

  if (keycode === LEFT_ARROW){
      jerry.addAnimation("mouseTeasing",mouseImg2);
      jerry.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;

      tom.addAnimation("catWalking",tomImg2);
      tom.changeAnimation("catWalking");
      tom.velocityX = -2;
  }

}
