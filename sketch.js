const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boy;
var snow;
var background,backgroundImage;
var snowing =[];

function preload(){
  backgroundImage = loadImage("snow3.jpg");
  
}

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

  boy = new Boy(1000,650,500)

 /* snow = new Snow(Math.random(00,1200),5,5);*/
    
  }

function draw() {
  background(backgroundImage);


  Engine.update(engine);  
  if (frameCount%10===0){
    snowing.push(new Snow (random(10,1200),5,25));
  }

  for (var j = 0; j < snowing.length; j++){
    snowing[j].display();
  }

  boy.display();
}