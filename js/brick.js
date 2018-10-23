class Brick {
  constructor(ctx, x, y, width, height){
    this.ctx = ctx
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }
  drawBricks() {
    ctx.save()
    this.ctx.fillStyle = "green"
    this.ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.restore()
  }
}