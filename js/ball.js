class Ball {
  constructor(ctx, x, y, radius) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.radius = radius
    this.speed = 0
    this.angle = -Math.PI/2
  }

  vx() {return this.speed*Math.cos(this.angle)}

  vy_new() {return this.speed*Math.sin(this.angle)}

  isStatic(){
    return this.speed === 0
  }
  
  launchBall(){
    if (this.isStatic()) {
      this.speed = 10
    }
  }

  top(){return this.y - this.radius}
  bottom(){ return this.y + this.radius}
  left(){return this.x - this.radius}
  right(){return this.x + this.radius}

  bounceHorizontally(){
    this.angle = -1*this.angle
  }

  bounceVertically(){
    this.angle = -1*(this.angle-Math.PI/2) + Math.PI/2
  }
  
  drawBall() {
    this.ctx.save()
    this.ctx.beginPath()
    this.ctx.fillStyle = "darkslategray"
    this.ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true)
    this.ctx.closePath()
    this.ctx.fill()
    this.ctx.restore()
  }

  updateBall() {
    this.x +=this.vx()

    this.y +=this.vy_new()

    var topOrBottomCollision = this.y - this.radius < 0 
    if (topOrBottomCollision) { 
      //this.vy *=-1
      this.bounceHorizontally()
    }
    var leftOrRightCollision = this.x - this.radius < 0 || this.x + this.radius > this.ctx.canvas.width
    if (leftOrRightCollision) { 
      //this.vx *=-1
      this.bounceVertically()
    }
  }
}