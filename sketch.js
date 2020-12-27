const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState=0;
var playButton;
var man1;
var rope1;
var gr;
var string;
var flag=0;
var bl1;


function preload(){

}
function setup(){
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;


 
  //playButton=createButton('PLAY');
  //playButton.position(800,600);

  man1 =new ropeman(70,height-80)
   gr=new Ground(width/2,height-20,width,20)
  
  bl1=new building(400,300,200,500)
 

}

function draw(){
 Engine.update(engine);
 

 if(gameState===0){
    background("purple");
    text("PRESS ENTER TO START THR GAME",400,300);
    textSize(20);
    text("ROPEMAN",200,50);
   //playButton.mousePressed(()=>{
   //gameState=1;
   //playButton.hide();
//   })
 }


 
 if(gameState===1){
     background("black")
     man1.display();
     gr.display();
     bl1.display();
     string.display();
     
 }
} 
    
function keyPressed(){
  if(keyCode===13){
    gameState=1;
  }
  
string=new rope(man1.body,bl1.body);

  
}

function mouseDragged(){

}



  
   
    
  


 





 
 
