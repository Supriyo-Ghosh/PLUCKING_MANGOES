class Launcher{

    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 2,
            length: 10
        }
      this.launcher=Constraint.create(options);
      this.bodyA=bodyA
      this.pointB=pointB
      World.add(world,this.launcher);
    }
    fly(){
        this.launcher.bodyA=null
    }
    display(){
        if(this.launcher.bodyA){
        
     var pointA = this.bodyA.position
     var pointB = this.pointB
     strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}