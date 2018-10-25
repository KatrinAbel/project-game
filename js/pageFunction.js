// Start directory move to different pages

function goToPage(link) {
  $("[data-page]").hide()
  $("[data-page="+link+"]").show()

// Add class active in navbar

  $('li.nav-item').each(function(){
    var href = $(this).find('a.nav-link').attr('href')
    if (href === link) 
      $(this).addClass('active')
    else
      $(this).removeClass('active')
  })
}

// Listen for click events on <a>

$("a").click(function (event) {
  event.preventDefault();
  var href = ($(this).attr("href"))
  //goToPage($(this).attr("href"))
  goToPage(href);
})

// Return Home when clicking on logo

$(".navbar-brand").click(function (event) {
  event.preventDefault();
  goToPage("play");
})


var color = ["#f5f4e8", "#c50d66", "#f07810", "#eec60a"]

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
  ctx.font = "normal bold 70px CallingHeart"
  ctx.textAlign = "center"
  ctx.fillText("Bubble Trouble", ctx.canvas.width/2, ctx.canvas.height/2 - boxHeight/6)
  ctx.font = "bold 30px GeoSansLight"
  ctx.fillText("bubble up your game", ctx.canvas.width/2, ctx.canvas.height/2 + boxHeight/6)
  ctx.fillText("press space to launch and < > to move", ctx.canvas.width/2, ctx.canvas.height/2 + boxHeight/6*2)
  ctx.restore()

  ctx.strokeStyle = "#c50d66"
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
  ctx.font = "normal bold 70px CallingHeart"
  ctx.textAlign = "center"
  ctx.fillText("Well...", ctx.canvas.width/2, ctx.canvas.height/2 - boxHeight/6)
  ctx.font = "bold 30px GeoSansLight"
  ctx.fillText("don't loose your bubbles", ctx.canvas.width/2, ctx.canvas.height/2 + boxHeight/6, boxWidth)
  ctx.fillText("try again: press space to launch and < > to move", ctx.canvas.width/2, ctx.canvas.height/2 + boxHeight/6*2, boxWidth-50)
  ctx.restore()

  ctx.strokeStyle = "#c50d66"
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
  ctx.font = "normal bold 70px CallingHeart"
  ctx.textAlign = "center"
  ctx.fillText("You're awesome!", ctx.canvas.width/2, ctx.canvas.height/2 - boxHeight/6)
  ctx.font = "bold 30px GeoSansLight"
  ctx.fillText("... now bubble up for a wild ride", ctx.canvas.width/2, ctx.canvas.height/2 + boxHeight/6, boxWidth)
  ctx.fillText("press space to launch and < > to move", ctx.canvas.width/2, ctx.canvas.height/2 + boxHeight/6*2, boxWidth)
  ctx.restore()

  ctx.strokeStyle = "#c50d66"
  ctx.beginPath()
  ctx.moveTo(ctx.canvas.width/2-boxWidth/2+100, ctx.canvas.height/2)
  ctx.lineTo(ctx.canvas.width/2+boxWidth/2-100, ctx.canvas.height/2)
  ctx.closePath()
  ctx.stroke()
  ctx.restore()
}


