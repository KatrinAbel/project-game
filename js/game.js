class Game{
  constructor(ctx, grid) {
    this.ctx = ctx
    this.bubbles = []
    // Creation of bubbles based on level grid
    var bubbleRadius = (ctx.canvas.width / grid[0].length)/2
    for (var row = 0; row < grid.length; row++) {
      for (var col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === 'X') {
          this.bubbles.push(new Bubble(
            this.ctx,
            (col*bubbleRadius*2)+bubbleRadius,
            (row*bubbleRadius*2)+bubbleRadius,
            bubbleRadius
            ))
          }
        }
      }
    this.ball_radius = bubbleRadius/2
    this.paddle = new Paddle(this.ctx, 300, 30)
    this.balls = [new Ball(this.ctx, this.ctx.canvas.width/2, this.ctx.canvas.height-this.paddle.height-this.ball_radius, this.ball_radius)]
    console.log(this.balls)
    this.life = 3
  }

  launch(){
    for (var i = 0; i < this.balls.length; i++) {
      this.balls[i].launchBall()
    }
  }

  drawEverything(){
  this.ctx.clearRect(0,0,this.ctx.canvas.width, this.ctx.canvas.height)
  this.paddle.drawPaddle()
  for (var i = 0; i <this.balls.length; i++) {
    this.balls[i].drawBall()
  }
  for (var i = 0; i<this.bubbles.length; i++) {
    this.bubbles[i].drawBubble()
  }
  this.drawLives()
  }

  update(){
  this.paddle.updatePaddle()
  for (var iBall = 0; iBall < this.balls.length; iBall++) {
    this.balls[iBall].updateBall()
    this.checkCollisionPaddleBall()
    for (var iBubble = this.bubbles.length-1; iBubble >=0; iBubble--) {
      if (this.checkCollisionBubbleBall(this.balls[iBall], this.bubbles[iBubble])) {
        console.log("Delete")
        this.bubbles.splice(iBubble, 1)
        this.balls[iBall].vy *=-1
      }
    }
  }
  this.removeUselessBalls()
  this.ballsAreLife()
  }
  
  checkCollisionPaddleBall() {
  for (var i = 0; i < this.balls.length; i++)
    if (this.paddle.top() <= this.balls[i].bottom() && 
      this.paddle.right() >= this.balls[i].left() && 
      this.paddle.left() <= this.balls[i].right()) {
      this.balls[i].vy *=-1
    }
  }
  
  checkCollisionBubbleBall(ball, bubble) {
  var d = (Math.sqrt((ball.x-bubble.x)**2+(ball.y-bubble.y)**2)) 
    if (d < ball.radius + bubble.radius) {
      return true
    }
  }
  
  start(){
  var that = this
    var intervalId = setInterval(function(){
      that.drawEverything()
      that.update()
    }, 1000/60)
  }

  removeUselessBalls() {
  for (var i = this.balls.length-1; i >= 0; i--)
    if (this.balls[i].top() > this.ctx.canvas.height) {
    this.balls.splice(i, 1)
    }
  }

  drawLives() {
  this.ctx.save()
  this.ctx.font = "30px sans-serif"
  this.ctx.textAlign = "right"
  this.ctx.fillText("Lives: "+ this.life, this.ctx.canvas.width-50, this.ctx.canvas.height-(this.ctx.canvas.height-50))
  this.ctx.restore()
  }

  ballsAreLife(){
  if (this.balls.length === 0) {
    this.balls.push(new Ball((this.ctx, this.ctx.canvas.width/2, this.ctx.canvas.height-this.paddle.height-this.ball_radius, this.ball_radius)))
    console.log("new ball")
    this.life -=1
    console.log(this.life)
    }
  }
}
