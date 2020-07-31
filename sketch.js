const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var bob1, bob2, bob3, bob4, bob5, rope1, rope2, rope3, rope4, rope5, roof;

function preload()
{

}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(width/2, height/4, width/5, 20);
	var bobX = width/2;
	var bobY = height/4+ 500;
	var bobD = 40;
	bob1 = new Bob(bobX-bobD*2, bobY, bobD);
	bob2 = new Bob(bobX-bobD, bobY, bobD);
	bob3 = new Bob(bobX, bobY, bobD);
	bob4 = new Bob(bobX+bobD, bobY, bobD);
	bob5 = new Bob(bobX+bobD*2, bobY, bobD);
	rope1 = new Rope(bob1.body, roof.body, -bobD*2, 0);
	rope2 = new Rope(bob2.body, roof.body, -bobD*1, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, bobD*1, 0);
	rope5 = new Rope(bob5.body, roof.body, bobD*2, 0);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
}



