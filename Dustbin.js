class Dustbin {
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }

       this.x = x;
       this.y = y;
       this.width = width;
       this.height = height;
       this.body = Bodies.rectangle(x,y,width,height, options);
       World.add(world,this.body);

    }

    display(){

      var logpos = this.body.position;
      //push()
     // translate(logpos.x,logpos.y);
      rectMode(CENTER);
      strokeWeight(3);
      rect(this.x,this.y,this.width,this.height);
     // pop()

    }

}