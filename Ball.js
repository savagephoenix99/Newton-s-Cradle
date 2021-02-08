class Ball{
    constructor(x, y, width, height) {
      var options = {

          'restitution':0,
          'friction':0.75,
          'density':1.2
      }
      
      this.body = Bodies.circle(x,y,width,  options);
      this.width=width
      this.height=height
      this.image=loadImage("ball.png")
      World.add(world, this.body);      

      }
      display(){
        var bob=this.body.position;
        var angle=this.body.angle;
      
        push()
        translate(bob.x, bob.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.width, this.height);  
        strokeWeight(2);
        fill("#BBBAC0");
        pop()  
      }
      }