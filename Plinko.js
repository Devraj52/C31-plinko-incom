class Plinko{
    constructor(x,y,d){
        var ops={
            isStatic:true
        }
        this.plinko=Bodies.circle(x,y,d,ops);
        this.d=d;
        World.add(world,this.plinko);
    }
    display(){
        ellipseMode(CENTER);
        fill("white");
        ellipse(0,0,this.d)
    }
}