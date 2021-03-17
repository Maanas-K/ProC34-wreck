class Ball{
    constructor(x,y){
      var options={
  
      }
  
      this.ball=Bodies.circle(x,y,50);
  
      World.add(myworld,this.ball)
    }
    display(){
  
      var angle= this.ball.angle
      var pos= this.ball.position
      push ();
      translate (pos.x,pos.y);
      ellipseMode(RADIUS)
  
      rotate (angle)
  
      fill ("white")
      ellipse(0,0,50,50)
      
     pop ();
  
  
    }
  }