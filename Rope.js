class Rope{
    constructor(b1,p2){
    var r = {bodyA: b1, pointB: p2 , length:250 , stiffness:0.5}
        this.body =Constraint.create(r)
        World.add(w,this.body)
        this.point = p2
    }
    display(){
        if (this.body.bodyA){
            line(this.body.bodyA.position.x, this.body.bodyA.position.y, this.point.x, this.point.y)
        }

    }
    fly(){
        this.body.bodyA = null
    }
}