class Game{
  constructor(ctx, grid) {
    this.ctx = ctx
    this.bricks = []
    this.paddle = new Paddle(this.ctx, 300, 30)
    console.log(this.paddle)
    this.ball = new Ball(this.ctx, canvas.width/2, canvas.height/2, 20)
    console.log(this.ball)
    var brickWidth = ctx.canvas.width / grid[0].length
    var brickHeight = 50
    for (var row = 0; row < grid.length; row++) {
      for (var col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === 'X') {
          this.bricks.push(new Brick(
            this.ctx,
            col*brickWidth,
            row*brickHeight,
            brickWidth,
            brickHeight
          ))
        }
      }
  }
  }

  drawEverything(){
    this.ctx.clearRect(0,0,this.ctx.canvas.width, this.ctx.canvas.height)
    this.paddle.drawPaddle()
    this.ball.drawBall()
    for (var i = 0; i<this.bricks.length; i++) {
      this.bricks[i].drawBricks()
    }
  }

  launch(){
    this.ball.launchBall()
  }

  update(){
    this.paddle.updatePaddle()
    this.ball.updateBall()
    checkCollisionPaddleBall()
  }
  
  start(){
    var that = this
    var intervalId = setInterval(function(){
      that.drawEverything()
      that.update()
    }, 1000/60)
  }
}

// function checkCollisionPaddleBall(paddle, ball) {
//   if (paddle.top() <= ball.bottom()) {
//     ball.vy *=-1
//   }
// }

// // Build grid based on array in level.js
// buildGrid(array) {
//   for (var iRow = 0; iRow < array.length; iRow++) {
//     for ( var iCol = 0; iCol < array[iRow].length; iCol++) {
//       if (levels.grid[iRow][iCol] === "X") {
//         this.bricks.push(new brick(this.ctx, x, y, canvas.width/array)
//         )
//       }
//     }
// }
// 