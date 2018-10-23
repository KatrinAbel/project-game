class Bubble {
  constructor(ctx, x, y, radius){
    this.ctx = ctx
    this.x = x
    this.y = y
    this.radius = radius
  }
  drawBubble() {
    this.ctx.beginPath()
    this.ctx.strokeStyle = "green"
    this.ctx.arc(this.x, this.y, this.radius, Math.PI, Math.PI*4)
    this.ctx.closePath()
    this.ctx.stroke()
    ctx.restore()
  }

  top(){return this.y - this.radius}
  bottom(){return this.y + this.radius }
  left(){return this.x - this.radius}
  right(){return this.x + this.radius}
}