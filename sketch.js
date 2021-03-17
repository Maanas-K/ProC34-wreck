const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body= Matter.Body;
const Constraint = Matter.Constraint;

var myengine,myworld;
var ground;
var blocks=[];
var wreck;
var rope, tie={x: 400, y: 200};

function setup(){
createCanvas(1200,600)
    myengine=Engine.create();
    myworld=myengine.world;

    ground=new Ground(600,600,1200,20)

    for(var i=0;i<10;i++){
        blocks[i]=new Box(800,height-(i*50))
    }

    wreck=new Ball(600,300)

   rope = new SlingShot(wreck.body,tie)
    
}
function draw(){
    background(0)
    Engine.update(myengine);

    ground.display();
    
    for(var i=0;i<10;i++){
        blocks[i].display();
    }

    wreck.display();
    //rope.display();
}