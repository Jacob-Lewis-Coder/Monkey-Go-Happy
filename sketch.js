var PLAY = 1;
var END = 0;
var gameState = PLAY;



var monkey , monkey_running
var  bananaImage,  obstacleImage
var bananaGroup,  obstacleGroup
var Banana
var Obstacle;
var score;
var rand
var rock_top


function preload(){
  
  
  
  monkey_running =   loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png")
  obstacleImage = loadImage("obstacle.png");
 
  
}



function setup() {
  createCanvas(600,250);
  monkey = createSprite(50,180,20,50);
  monkey.addAnimation("monkey_running", monkey_running);
 FoodGroup = createGroup();
  ground = createSprite(300,220,600,10);
  monkey.debug = true;
  monkey.scale = 0.1;
 
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  rock_topGroup= createGroup();
  
  
  score = 0
}


function draw() {
  background ("white");
  ground.shapeColor = "black";
  text("Score:"+score,545,30)
  
  
  
  if (gameState === PLAY){
    ground.velocityX = -10
    
     if(keyDown("space")&& monkey.y >= 180) {
        monkey.velocityY = -15;
    }
    monkey.velocityY = monkey.velocityY + 0.8
    
    if (monkey.isTouching(rock_topGroup)&&keyDown("space")){
   monkey.velocityY = -15;
   monkey.velocityY = monkey.velocityY + 0.8
      
    }
    
    if (monkey.isTouching(bananaGroup)){
      score = score+10;
      bananaGroup.destroyEach();
    }
    
    if (monkey.isTouching(obstacleGroup)){
      score = score-0.1;
    }
   
    if (ground.x>- 300){
      ground.x = 300
    }
    if (monkey.x<0){
      monkey.x = 100;  
      monkey.velocityX =0;
    }
    Bananas();
    Obstacles();
    Rock_top();
  }
  monkey.collide (ground);
  //monkey.collide(rock_topGroup);
  
 
  drawSprites();
  
}

function Bananas() {
  
  if (frameCount % 225 === 0){
   Banana = createSprite (600,Math.round(random(10,60)),50,50);
    Banana.addImage(bananaImage); 
    Banana.scale = 0.1;
  bananaGroup.add(Banana);
  Banana.velocityX = -3;
    Banana.lifetime = 600
  }
}

function Obstacles(){
  if (frameCount%175===0){
    Obstacle = createSprite (600,190,50,50);
    Obstacle.addImage(obstacleImage);
    Obstacle.scale = 0.2;
    obstacleGroup.add(Obstacle);
    Obstacle.velocityX = -3;
    Obstacle.lifetime = 600;
   
  }
}

function Rock_top(){
  if (frameCount%175===0){
    rock_top= createSprite (600,146,40,10);
    rock_topGroup.add(rock_top);
    rock_top.velocityX = -3
    rock_top.visible = false;
    
  }
}



