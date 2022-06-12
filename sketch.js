var  asteroid,spaceship;
var asteroidImg,spaceshipImg;
var bullet,bulletImg;
var asteroidsGroup,bulletsGroup;
var gameState=1;
var score=0 ;

function preload(){
  spaceshipImg=loadImage("spaceship.png");
  asteroidImg=loadImage("asteroids.png");
  bulletImg=loadImage("bullet.png")
}

function setup() {
  createCanvas(800,800);

  spaceship= createSprite(400,700,50,50);
  spaceship.addImage(spaceshipImg)
  spaceship.scale=0.2

  asteroidsGroup = createGroup();  
  bulletsGroup = createGroup();
  
  heading= createElement("h1");

}

function draw() {
  background("#BDA297");  

 

  heading.html("Scoreboard:"+score)
  heading.style('color:red'); 
  heading.position(50,10)

  
  text("tap to shoot",350,50);
  text.scale = 5 ;

  if(gameState===1){
    spaceship.x=mouseX  

if (frameCount % 80 === 0) {
      drawasteroids();
    }

    if(keyDown("space")){
      shootBullet();
    }

    if(asteroidsGroup.collide(spaceship)){
      handleGameover(asteroidsGroup);
      

    }
    if(asteroidsGroup.collide(bulletsGroup)){
      handleBubbleCollision(asteroidsGroup);
    }


  }

  drawSprites();
}

function drawasteroids(){
  asteroid = createSprite(random(20,780),40,40,40);
  asteroid.addImage(asteroidImg);
  asteroid.scale = 0.5;
  asteroid.velocityY = 8;
  asteroid.lifetime = 400;
  asteroidsGroup.add(asteroid);
}


function shootBullet(){
  bullet= createSprite( 150,height/2, 50,50)
  bullet.x= spaceship.x-20
  bullet.addImage(bulletImg)
  bullet.scale=0.25
  bullet.velocityY= -7
  bulletsGroup.add(bullet)
}

function handleBubbleCollision(asteroidsGroup){
  
     score=score+10;
  
  bulletsGroup.destroyEach()
  asteroidsGroup.destroyEach()
}

function handleGameover(asteroidsGroup){

  asteroidsGroup.destroyEach();
  

  
    gameState=2
  
    
    
  }