const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var bob;
var wood1;
var ground;
var engine;
function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  ground= new Ground(400,390,800,10);
  bob= new Bob(400,300,70,70);
  // wood1= new wood(400,100,5,100);
   sling=new SlingShot(bob.body,{x:400,y:10});
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  ground.display();
 // wood1.display();

  bob.display(); 
 
  sling.display();
  if(keyCode===32){
    bob.body.position.y = mouseY;
    bob.body.position.x = mouseX;
    }
}