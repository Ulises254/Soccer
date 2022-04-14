const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var backgroundImg;
var player, playerImage;
var angle;
var leg;
var pelota;
var balls=[];
function preload(){
    backgroundImg= loadImage("fondo.jpg");
    playerImage= loadImage("player.png");                                                                                               
}

function setup(){
    var canvas = createCanvas(displayWidth-20,(7*displayHeight)/8);
    engine = Engine.create();
    world = engine.world;

    angleMode(DEGREES);
    angle=15;
    
    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(width/2,height,width,20);
    var options={
        isStatic:true
    }
    player= Bodies.rectangle(160, 350, 160, 310, options);
    World.add(world, player);
    leg=new Leg(220,590,130,100,angle);

    

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    image(backgroundImg, 0,0, width, height);
    
    for(var i=0; i<balls.length; i++){
        showBall(balls[i], i);
    }

    box1.display();
    box2.display();
    ground.display();

    leg.display();
    
    push();
    image(playerImage,player.position.x, player.position.y, 160, 310);
    pop();
    
}

function keyPressed(){
    if(keyCode== RIGHT_ARROW){
        pelota= new ball(250,640);
        pelota.trayectory=[];
        Matter.Body.setAngle(pelota.body, leg.angle);
        balls.push(pelota);
    }
}

function showBall(ball1, index){
    if(ball1){
        ball1.display();
        if(ball1.body.position.x>=width || ball1.body.position.y>=height-10){
            //ball1.remove(index);

        }
    }
    

}

function keyReleased(){
    if(keyCode==RIGHT_ARROW){
        balls[balls.length-1].shoot();
    }
}