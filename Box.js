class Box{
  constructor(x,y){
    var options={

    }

    this.block=Bodies.rectangle(x,y,50,50);

    World.add(myworld,this.block)
  }
  display(){

    var angle= this.block.angle
    var pos= this.block.position
    push ();
    translate (pos.x,pos.y);
    rectMode (CENTER)

    rotate (angle)

    fill ("yellow")
    rect(0,0,50,50)
    
   pop ();


  }
}