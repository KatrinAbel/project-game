var colors = ["#f38181", "#fce38a", "#eaffd0", "#95e1d3"]

class Bubble {
  constructor(ctx, x, y, radius){
    this.ctx = ctx
    this.x = x
    this.y = y
    this.radius = radius
  }

  drawBubble() {
    this.ctx.beginPath()
    this.ctx.fillStyle = "rgba(255,255,255,0.5)"
    this.ctx.strokeStyle = colors[Math.floor(Math.random()*(colors.length-1))]
    this.ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true)
    this.ctx.closePath()
    this.ctx.fill()
    this.ctx.stroke()
    this.ctx.restore()
  }

  deleteBubble(){
    this.ctx.beginPath()
    this.ctx.fillStyle = colors[Math.floor(Math.random()*(colors.length-1))]
    this.ctx.strokeStyle = colors[Math.floor(Math.random()*(colors.length-1))]
    this.ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true)
    this.ctx.fill()
    this.ctx.closePath()
    this.ctx.restore()
  }

  top(){return this.y - this.radius}
  bottom(){return this.y + this.radius }
  left(){return this.x - this.radius}
  right(){return this.x + this.radius}
}