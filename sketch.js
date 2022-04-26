var engine,world;
var ball;
var groundObj;
var leftSide;
var radius = 40;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(260,100,radius/2,ball_options);
	World.add(world,ball);


	groundObj =new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1350,600,20,120);

	Engine.run(engine);
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		ball = Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05});
	}
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,radius,radius)

  groundObj.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
 
}



