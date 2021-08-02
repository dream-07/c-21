const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);

	ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	
  


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(280,350,10,ball_options);
	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
Matter.Bodies.circle(ball.position.x,ball.position.y,10);

  drawSprites();
 Engine.update(engine);
}



