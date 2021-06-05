var tom, tomImg1, tomImg2, tomImg3;
var jerry, jerryImg1, jerryImg2, jerryImg3;
var forestImg;

function preload() {
    //load the images here
    forestImg = loadImage("garden.png");
    tomImg1 = loadImage("cat1.png");
    jerryImg1 = loadImage("mouse1.png");
    tomImg2 = loadAnimation("cat2.png","cat3.png");
    jerryImg2 = loadImage("mouse2.png");
    tomImg3 = loadImage("cat4.png");
    jerryImg3 = loadImage("mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(850,700,50,50);
    tom.addImage("tom",tomImg1);
    tom.scale = 0.2;
    jerry = createSprite(200,700,50,50);
    jerry.addImage("jerry",jerryImg1);
    jerry.scale = 0.2;
}

function draw() {

    background(forestImg);
    //Write condition here to evalute if tom and jerry collide

    if (tom.x - jerry. x < (tom.width - jerry.width)/2){
        tom.addImage("tomHappy",tomImg3);
        tom.changeImage("tomHappy")
        jerry.addImage("jerryHappy",jerryImg2);
        jerry.changeImage("jerryHappy");
        tom.velocityX = 0;

    }

    drawSprites();
    keyPressed();
}


function keyPressed(){

  //For moving and changing animation write code here

  if (keyCode === 37){
      jerry.addImage("mouseTeasing",jerryImg3);
      jerry.changeImage("mouseTeasing");
      jerry.frameDelay = 25;
  }

  if (keyCode === 37){
      tom.addAnimation("catWalking",tomImg2);
      tom.changeAnimation("catWalking");
      tom.velocityX = -2;
  }

}
