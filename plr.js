class Plr {
  constructor(x,y){
    var opt = {
      friction:1.0,
      restitution:1.0,
      density:1.0
    }
    
    this.body = Matter.Bodies.rectangle(x,y,25,25)
    Matter.World.add(world,this.body)
  }
  
  display(){
     push()
   translate(this.body.position.x,this.body.position.y) ;
  
    imageMode(CENTER)
    image(plr,0,0,25,25)
    pop()
  }
}