const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject;
var mangoObj1, mangoObj2, mangoObj3, mangoObj4, mangoObj5;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new mango(1100,100,30);
  mango2 = new mango(1170,130,30);
  mango3 =  new mango(1010,140,30);
	mango4 = new mango(1000,70,30);
  mango5 = new mango(1100,70,30);
  
  stone = new Stone(235,420,30);

  launcher = new Launcher(stone.body,{ x:235, y:420 });
   
	treeObj = new tree(1050,580);
	groundObject = new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  groundObject.display();

  launcher.display();

  stone.display();

  detectcollision(stone,mango1)
  detectcollision(stone,mango2)
  detectcollision(stone,mango3)
  detectcollision(stone,mango4)
  detectcollision(stone,mango5)
  
}
function mouseDragged(){
   Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
  launcher.fly()
}

function keyPressed (){
  if (keyCode === 32){
    Matter.Body.setPosition(stone.body, {x:235, y:420 })
    launcher.attach(stone.body);
  }
}

function detectcollision (stone, mango){
  mangoPosition = mango.body.position
  stonePosition = stone.body.position

  var distance = dist(stonePosition.x, stonePosition.y, mangoPosition.x, mangoPosition.y)
  if (distance<=mango.r+stone.r){
    Matter.Body.setStatic(mango.body,false);
  }
  
  
}
