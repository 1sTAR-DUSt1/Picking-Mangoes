class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:50,
            stiffness:0.05        
        }
        this.body = Constraint.create(options);
        World.add(world,this.body);
    }

    fly(){
        this.body.bodyA=null;
    }

    attach(){
        this.body.bodyA = stoneObj.body;
    }

    display(){
        if(this.body.bodyA){
        var pointA = this.body.bodyA.position;
        var pointB = this.body.pointB;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}