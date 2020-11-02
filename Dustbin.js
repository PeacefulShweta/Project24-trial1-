class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0,
          'friction':0,
          'density':0
      }
      this.body = Bodies.rectangle(x, y,radius);// in place of radius write width, height .
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      Rect(0, 0, this.width, this.height);
      pop();
    }
  };
