class Ball {
  constructor(ctx, x, y, radius) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.radius = radius
    this.speed = 0
    this.angle = -Math.PI/2
  }

  vx() {return this.speed*Math.cos(this.angle)
  }

  vy_new() {return this.speed*Math.sin(this.angle)
  }

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

  // Not working
  // bounceAdvanced(bubble){
  //   console.log("bounce", bubble);
  //   var vectorCollision = {
  //     x: bubble.x - this.x,
  //     y: bubble.y - this.y
  //   }
  //   var angleCollision = Math.atan2(vectorCollision.y, vectorCollision.x)
  //   var angleDiff = this.angle - angleCollision
  //   console.log(this.angle* 180/Math.PI, angleCollision* 180/Math.PI, angleDiff* 180/Math.PI);
  //   this.angle = -this.angle - 2*angleDiff
  // }
  
  bounceHorizontally(){
    this.angle = -1*this.angle
  }

  bounceVertically(){
    this.angle = -1*(this.angle-Math.PI/2) + Math.PI/2
  }
  
  drawBall() {
    this.ctx.save()
    this.ctx.beginPath()
    this.ctx.fillStyle = "#eec60a"
    this.ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true)
    this.ctx.closePath()
    this.ctx.fill()
    this.ctx.restore()
  }

  updateBall(paddle) {
    if(this.speed === 0) {
      this.x = paddle.paddleCenter().x
      return
    }

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