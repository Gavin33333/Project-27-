
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof, bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, rope1, rope2, rope3, rope4, rope5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
roof = new Roof(400,100,500,50);
rope1 = new Rope(bobObject1.body, roof.body, -bobDiameter*2,0)
bobObject1 = new bob(175,500,100);
rope2 = new Rope(bobObject2.body, roof.body, -bobDiameter*2,0)
bobObject2 = new bob(275,500,100);
rope3 = new Rope(bobObject3.body, roof.body, -bobDiameter*2,0)
bobObject3 = new bob(375,500,100);
rope4 = new Rope(bobObject4.body, roof.body, -bobDiameter*2,0)
bobObject4 = new bob(475,500,100);
rope5 = new Rope(bobObject5.body, roof.body, -bobDiameter*2,0)
bobObject5 = new bob(575,500,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display(); 
  rope5.display();
  drawSprites();
 
}



