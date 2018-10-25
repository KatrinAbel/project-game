// Color scheme dark - bubble background
// var colors = [
//   "rgb(205,92,92)", "rgb(188,143,143)" , "rgb(255,228,225)", "rgb(128,0,0)", "rgb(255,140,0)"
// 

var colors = ["#f38181", "#fce38a", "#eaffd0", "#95e1d3"]

// Start overlay animation circles

class Circle {
  constructor(ctx,x,y,radius, vx, vy) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.radius = radius
    this.vx = vx
    this.vy = vy
  }

  drawCircle() {
    this.ctx.beginPath()
    this.ctx.strokeStyle = colors[Math.floor(Math.random()*(colors.length-1))]
    this.ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true)
    this.ctx.closePath()
    this.ctx.stroke()
    this.ctx.restore()
  }

  updateCircle() {
    if (this.x + this.radius > this.ctx.canvas.width || this.x - this.radius < 0) {
      this.vx *=-1
    }
    if (this.y + this.radius > this.ctx.canvas.height || this.y - this.radius < 0) {
      this.vy *=-1
    }
    this.x +=this.vx
    this.y +=this.vy
    this.drawCircle()
  }
}

function circleAnimation(){
  var circle = []
  for (var i = 0; i <100; i++) {
    var ctx = this.ctx
    var x = Math.random()*(this.ctx.canvas.width - radius*2) + radius
    var y = Math.random()*(this.ctx.canvas.height - radius*2) + radius
    var radius = Math.random()*this.ctx.canvas.width/15
    var vx = (Math.random()-0.5)*2
    var vy = (Math.random()-0.5)*2
    circle.push(new Circle(ctx, x, y, radius, vx, vy))
    circle[i].updateCircle()
  }
}

// Start overlay text input

function drawStartBox() {
  var boxHeight = 300
  var boxWidth = 700

  ctx.save()

  ctx.fillStyle = "rgba(255,255,255,0.5)"
  ctx.fillRect(ctx.canvas.width/2-boxWidth/2, ctx.canvas.height/2-boxHeight/2, boxWidth, boxHeight)
  ctx.restore()

  ctx.fillStyle = "#2f4f4f"
  ctx.font = "normal small-caps bold 70px helvetica"
  ctx.textAlign = "center"
  ctx.fillText("BUBBLE TROUBLE", ctx.canvas.width/2, ctx.canvas.height/2 - boxHeight/6)
  ctx.font = "bold 30px Courier New"
  ctx.fillText("bubble up your game", ctx.canvas.width/2, ctx.canvas.height/2 + boxHeight/6)
  ctx.fillText("press space to start and < > to move", ctx.canvas.width/2, ctx.canvas.height/2 + boxHeight/6*2)
  ctx.restore()

  ctx.strokeSTyle = "#808080"
  ctx.beginPath()
  ctx.moveTo(ctx.canvas.width/2-boxWidth/2+100, ctx.canvas.height/2)
  ctx.lineTo(ctx.canvas.width/2+boxWidth/2-100, ctx.canvas.height/2)
  ctx.closePath()
  ctx.stroke()
  ctx.restore()
}

// Lost overlay text input

function drawLostOverlay() {
  var boxHeight = 300
  var boxWidth = 700

  ctx.save()

  ctx.fillStyle = "rgba(255,255,255,0.5)"
  ctx.fillRect(ctx.canvas.width/2-boxWidth/2, ctx.canvas.height/2-boxHeight/2, boxWidth, boxHeight)
  ctx.restore()

  ctx.fillStyle = "#2f4f4f"
  ctx.font = "normal small-caps bold 70px helvetica"
  ctx.textAlign = "center"
  ctx.fillText("You Lost", ctx.canvas.width/2, ctx.canvas.height/2 - boxHeight/6)
  ctx.font = "bold 25px Courier New"
  ctx.fillText("don't loose your bubbles", ctx.canvas.width/2, ctx.canvas.height/2 + boxHeight/6, boxWidth)
  ctx.fillText("try again: press space to start and < > to move", ctx.canvas.width/2, ctx.canvas.height/2 + boxHeight/6*2, boxWidth-50)
  ctx.restore()

  ctx.strokeSTyle = "#808080"
  ctx.beginPath()
  ctx.moveTo(ctx.canvas.width/2-boxWidth/2+100, ctx.canvas.height/2)
  ctx.lineTo(ctx.canvas.width/2+boxWidth/2-100, ctx.canvas.height/2)
  ctx.closePath()
  ctx.stroke()
  ctx.restore()
}


// Won overlay text input

function drawWonOverlay() {
  var boxHeight = 300
  var boxWidth = 700

  ctx.save()

  ctx.fillStyle = "rgba(255,255,255,0.5)"
  ctx.fillRect(ctx.canvas.width/2-boxWidth/2, ctx.canvas.height/2-boxHeight/2, boxWidth, boxHeight)
  ctx.restore()

  ctx.fillStyle = "#2f4f4f"
  ctx.font = "normal small-caps bold 70px helvetica"
  ctx.textAlign = "center"
  ctx.fillText("You're awesome", ctx.canvas.width/2, ctx.canvas.height/2 - boxHeight/6)
  ctx.font = "bold 25px Courier New"
  ctx.fillText("so bubble up for a wild ride", ctx.canvas.width/2, ctx.canvas.height/2 + boxHeight/6, boxWidth)
  ctx.fillText("press space to start and < > to move", ctx.canvas.width/2, ctx.canvas.height/2 + boxHeight/6*2, boxWidth)
  ctx.restore()

  ctx.strokeSTyle = "#808080"
  ctx.beginPath()
  ctx.moveTo(ctx.canvas.width/2-boxWidth/2+100, ctx.canvas.height/2)
  ctx.lineTo(ctx.canvas.width/2+boxWidth/2-100, ctx.canvas.height/2)
  ctx.closePath()
  ctx.stroke()
  ctx.restore()
}


