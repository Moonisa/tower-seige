class Box {
  constructor(x,y){
    var options = {
        isStatic: false
    }
    this.body = Bodies.rectangle(x,y,25,25);
    World.add(w, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y,25,25);
  }
};
