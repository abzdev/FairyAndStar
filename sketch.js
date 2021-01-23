const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var fairy, faryImage, bgImage, star, starImage;

function preload() {
  fairyImage = loadImage('images/fairy1.png');
  bgImage = loadImage('images/starnight.png');
  starImage = loadImage('images/star.png');
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,750);
  
  var options = {
    'isStatic':true
  }

  fairy = Bodies.rectangle(200,650,10,10,options);
  image(fairyImage,0,0,fairy.width,fairy.height);
  
  World.add(world,fairy);

  star = Bodies.rectangle(700,100,10,10,options);
  World.add(world,star);
  image(starImage,star.position.x,star.position.y,star.width,star.height);

}


function draw() {
  background(bgImage);
  rectMode(CENTER);
  rect(fairy.position.x,fairy.position.y,fairy.width,fairy.height);
  rect(star.position.x,star.position.y,star.width,star.height);

  if(keyDown('LEFT_ARROW')) {
    fairy.position.x -= 3;
  }
  if(keyDown('RIGHT_ARROW')) {
    fairy.position.x += 3; 
  }
  if(keyDown('DOWN_ARROW')) {
    Matter.Body.setStatic(star,false);
  }
  if(star.position.y > 500) {
    Matter.Body.setStatic(star,true);
  }
  Engine.update(engine);
}
