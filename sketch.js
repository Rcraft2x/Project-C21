
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var ball
var ground
var leftblock
var rightblock,engine,world
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=Bodies.rectangle(400,680,800,20,{isStatic:true})
World.add(world,ground)
	Engine.run(engine);
  //
	leftblock=Bodies.rectangle(600,620,20,100,{isStatic:true})
	World.add(world,leftblock)
	//
	rightblock=Bodies.rectangle(750,620,20,100,{isStatic:true})
	World.add(world,rightblock)
	//
	ball=Bodies.circle(50,660,20,{restitution:0.3})
	World.add(world,ball)
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,800,20)
 rect(leftblock.position.x,leftblock.position.y,20,100)
 rect(rightblock.position.x,rightblock.position.y,20,100)
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,20,20)
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:0.06,y:-0.05});
	}
}


