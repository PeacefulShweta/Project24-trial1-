
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	DustbinP1 = new Dustbin(700,320,70,70);
	DustbinP2 = new Dustbin()

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine)
  

  DustbinP1.display();
  DustbinP2.display();
  drawSprites();
 
}

function keyPressed(){
if(keycode === up_ARROW){
	Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
}
}



