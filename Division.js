//var division;
class Division{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      //World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
      //for(var i=0;i<=width;k=k+80){
        //division.push(new Division(i,height-divisionHeight/2,10,divisionHeight))
    //}
    //pull();
    }
  
  };
 