class Ball {
  constructor(ctx, x, y, radius) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.radius = radius
    this.vx = 0
    this.vy = 0
  }

  drawBall() {
    ctx.save()
    this.ctx.beginPath()
    this.ctx.fillStyle = "black"
    this.ctx.arc(this.x, this.y, this.radius, Math.PI, Math.PI*4)
    this.ctx.closePath()
    this.ctx.fill()
    ctx.restore()
  }

  isStatic(){
    return this.vx === 0 && this.vy === 0
  }

  launchBall(){
  if (this.isStatic()) {
    this.vx = 5
    this.vy = - 5
  }
  }

  top(){return this.y - this.radius}
  bottom(){ return this.y + this.radius}
  left(){return this.x - this.radius}
  right(){return this.x + this.radius}

  updateBall() {
    this.x +=this.vx
    this.y +=this.vy
    var topOrBottomCollision = this.y - this.radius < 0 
    if (topOrBottomCollision) { this.vy *=-1}
    var leftOrRightCollision = this.x - this.radius < 0 || this.x + this.radius > this.ctx.canvas.width
    if (leftOrRightCollision) { this.vx *=-1}
  }
}