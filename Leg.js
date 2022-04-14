class Leg{
    constructor(x,y,width,height,angle){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.angle=angle;
        this.legImg=loadImage("playerLeg.png");
        this.playerImg=loadImage("player.png");
    }
    


    display(){
        if(keyIsDown(RIGHT_ARROW)){
            this.angle -= 5;
         

        }
        if(this.angle>120){
            this.angle= 15;
        }
       /* if(keyIsDown(LEFT_ARROW)&& this.angle<50){
            this.angle-=1;
        }*/
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.legImg,0,0,this.width, this.height);
        pop();
        //image(this.playerImg,70,20,200,200);
    }

    
}