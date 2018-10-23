class Paddle {
  constructor(ctx, width, height) {
    this.ctx = ctx
    this.x = (this.ctx.canvas.width/2)-(width/2)
    this.y = this.ctx.canvas.height-height
    this.width = width
    this.height = height
    this.movement = null
    this.speed = 1
  }

  drawPaddle(){
    ctx.save()
    this.ctx.fillStyle = "black"
    this.ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.restore()
  }

  paddleCenter(){
    return {
      x: this.x + this.width/2,
      y: this.y + this.height/2
    }
  }

  top(){return this.y}
  bottom(){return this.y-this.height}
  left(){return this.x}
  right(){return this.x+this.width}

  updatePaddle(){
    if (this.movement === "right") {
      this.x +=1 *this.speed
    }
    else if (this.movement === "left") {
      this.x -=1* this.speed
    }
  }
}