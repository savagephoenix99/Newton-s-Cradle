class Rope{
    constructor(bodyA, pointB) {
        var options = {
                bodyA:bodyA,
                pointB:pointB,
                length:300,
                stiffness:0.04 
                }

                this.pointB=pointB
            this.object=Constraint.create(options)
        World.add(world, this.object);
      }
      attach(body){
        this.object.bodyA=body;
      }

      
      display(){
          var pointA = this.object.bodyA.position;
          var pointB = this.pointB;

          stroke(48,22,8)
          strokeWeight(4)
          line(pointA.x, pointA.y, pointB.x, pointB.y)

          
        }
     }