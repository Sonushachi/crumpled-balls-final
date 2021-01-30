const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var log1,log2,log3;
var paper,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	

	engine = Engine.create();
	world = engine.world;

  ground = new Ground(400,600,800,20);
  
  paper = new Paper(50,590,55);

  log1 = new Dustbin(485,555,20,80);
  log2 = new Dustbin(560,580,130,20);
  log3 = new Dustbin(620,560,20,85);


	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0,0,0);

paper.display();
log1.display();
 log2.display();
  log3.display();
  ground.display();

  drawSprites();
 
}

function keyPressed() {
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-55});
}
}

