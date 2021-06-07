const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var e;
var w;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    e = Engine.create();
    w = e.world;

    ground= new Ground(600,380,1200,20);
    box1 = new Box(250,250);
}

function draw(){
    background(255,255,255)
    Engine.update(e);
    //console.log(w);
    ground.display();
    box1.display();   
    
}