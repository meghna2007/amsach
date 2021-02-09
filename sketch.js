const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world;
var ground,ball;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  var option ={
    isStatic : true
  }
 ground = Bodies.rectangle(400,390,800,10,option);
  this.width = 800;
  this.height = 20;
  World.add(world,ground);

  var option ={
    restitution:1.5
  }
 ball= Bodies.circle(200,200,20,option);
  
  
  World.add(world,ball);
  //console.log(object)

}

function draw() {
  background("green");  
  Engine.update(engine);
  rectMode(CENTER)
  rect(this.ground.position.x,this.ground.position.y,800,20);


  ellipseMode(RADIUS)
  ellipse(this.ball.position.x,this.ball.position.y,20,20);


  drawSprites();
}