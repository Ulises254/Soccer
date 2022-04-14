class ball{
    constructor(x,y){
        var options={
            isStatic: true
        }
        this.r=40;
        this.body=Bodies.circle(x,y,this.r,options);
        this.image=loadImage("balon.png");
        World.add(world, this.body);
        this.trayectory=[];
    }
    shoot(){
        var newAngle=leg.angle;
        newAngle= newAngle*(3.14/180)
        var velocity=p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, {
            x:velocity.x*(180/3.14), 
            y:velocity.y*(180/3.14)
        })
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r, this.r);
        pop();
        
        if(this.body.velocity.x>0 && this.body.position.x>10){
            var position=[this.body.position.x, this.body.position.y];
            this.trayectory.push(position);
        }
        for(var i=0; i<this.trayectory.length; i++){
            image(this.image,this.trayectory[i][0],this.trayectory[i][1],5,5);
        }
    }
}