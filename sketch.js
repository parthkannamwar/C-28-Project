
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy,gamestate;

function preload(){
	boy=loadImage("images/boy.png");
	bg=loadImage("images/bg.jpg")
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,40,30);
	mango2=new mango(1200,200,30);
	mango3=new mango(900,200,30);
	mango4=new mango(1100,200,30);
	mango5=new mango(1000,240,30);
	mango6=new mango(980,100,30);
	mango7=new mango(1030,150,30);
	mango8=new mango(1140,120,30);
	
	

	stoneObj=new Stone(240,420,20)

	hand=new Hand(stoneObj.body,{x:240,y:420})

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width*2,20);
	
	Engine.run(engine);

}

function draw() {

  background(bg);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);

  detectcollision(stoneObj,mango1);
  detectcollision(stoneObj,mango2);
  detectcollision(stoneObj,mango3);
  detectcollision(stoneObj,mango4);
  detectcollision(stoneObj,mango5);
  detectcollision(stoneObj,mango6);
  detectcollision(stoneObj,mango7);
  detectcollision(stoneObj,mango8);
  

if(keyDown("space"))
{
	Body.setPosition(stoneObj.body,{x:240,y:420})
	hand.attach(stoneObj.body)
}




treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

	hand.display()
//  groundObject.display();
  stoneObj.display();



}



function mouseDragged()
{
	Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}


function mouseReleased()
{
	hand.fly();
	gamestate="launched"
}

function detectcollision(lstone,lmango)
{
	mpos=lmango.body.position
	spos=lstone.body.position


	var distance=dist(spos.x,spos.y,mpos.x,mpos.y)
	if(distance<=lmango.r+lstone.radius)
	{
		Matter.Body.setStatic(lmango.body,false)
	}
}