class Snow{
    constructor(x,y,r){
        var option = {
            'restitution':0,
            'density':0.1,
            'friction':0,
            isStatic:false
        }
        this.Image = loadImage("snow4.webp")
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x,y,r,option);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.Image,0,0,this.r,this.r);
        pop();
    }
}