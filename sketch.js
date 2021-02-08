const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground
var ground2


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,200, 700, 50)
	ground2 = new Ground(400, 735, 800, 5)
	ball = new Ball(250, 250, 30, 30)
	ball2 = new Ball(325, 250, 30, 30)
	ball3 = new Ball(400, 250, 30, 30)
	ball4 = new Ball(475, 250, 30, 30)
	ball5 = new Ball(550, 250, 30, 30)
	ball6 = new Ball(625, 250, 30, 30)
	rope1 = new Rope(ball.body,{x:250,y:200})
	rope2 = new Rope(ball2.body,{x:325,y:200})
	rope3 = new Rope(ball3.body,{x:400,y:200})
	rope4 = new Rope(ball4.body,{x:475,y:200})
	rope5 = new Rope(ball5.body,{x:550,y:200})
	rope6 = new Rope(ball6.body,{x:625,y:200})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#43464B");

  if(keyDown("up")){
    Matter.Body.applyForce(ball.body, ball.body.position, {x:-55,y:-25}, )
  }

  ground.display();
  ground2.display();
  ball.display();	
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  drawSprites();
 
}



