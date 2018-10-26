class Game {
  constructor(ctx, grid, levelName, paddle_Width) {
    this.ctx = ctx;
    this.name = levelName;
    this.paddle_Width = paddle_Width;
    this.bubbles = [];
    // Creation of bubbles based on level grid
    var bubbleRadius = ctx.canvas.width / grid[0].length / 2;
    for (var row = 0; row < grid.length; row++) {
      for (var col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === "X") {
          this.bubbles.push(
            new Bubble(
              this.ctx,
              col * bubbleRadius * 2 + bubbleRadius,
              row * bubbleRadius * 2 + bubbleRadius,
              bubbleRadius
            )
          );
        }
      }
    }
    this.ball_radius = bubbleRadius / 2;
    this.paddle = new Paddle(this.ctx, this.paddle_Width, 30);
    this.balls = [
      new Ball(
        this.ctx,
        this.ctx.canvas.width / 2,
        this.ctx.canvas.height - this.paddle.height - this.ball_radius,
        this.ball_radius
      )
    ];
    this.life = 3;
  }

  launch() {
    for (var i = 0; i < this.balls.length; i++) {
      this.balls[i].launchBall();
    }
  }

  drawEverything() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.drawExplanation();
    this.paddle.drawPaddle();
    for (var i = 0; i < this.balls.length; i++) {
      this.balls[i].drawBall();
    }
    for (var i = 0; i < this.bubbles.length; i++) {
      this.bubbles[i].drawBubble();
    }
    this.drawLives();
    this.drawHighScore();
  }

  update() {
    this.paddle.updatePaddle();
    for (var iBall = 0; iBall < this.balls.length; iBall++) {
      this.balls[iBall].updateBall(this.paddle);
      this.checkCollisionPaddleBall(this.balls[iBall], this.paddle);
      for (var iBubble = this.bubbles.length - 1; iBubble >= 0; iBubble--) {
        if (
          this.checkCollisionBubbleBall(
            this.balls[iBall],
            this.bubbles[iBubble]
          ) === true
        ) {
          console.log("Delete");
          this.bubbles[iBubble].deleteBubble();
          this.bubbles.splice(iBubble, 1);
          highscore +=1
          var popBubbleSound = new sound("https://raw.githubusercontent.com/KatrinAbel/project-game-bubble-trouble/master/sound/bubble_pop.mp3");
          popBubbleSound.play();
        }
      }

      //If lost - draw lostOverlay
      if (this.life === 0) {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        drawLostOverlay();
        highscore = 0
        // var cough = new sound("../sound/hack.mp3");
        // cough.play();
      }

      //If won - draw wonOverlay
      if (this.bubbles.length === 0) {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        drawWonOverlay();
        //var applause = new sound("../sound/claps3.mp3");
        //applause.play();
      }
    }

    this.removeUselessBalls();
    this.ballsAreLife();
  }

  checkCollisionPaddleBall(ball, paddle) {
    if (
      paddle.left() < ball.x &&
      ball.x < paddle.right() &&
      paddle.top() < ball.bottom() &&
      ball.y < paddle.top()
    ) {
      var factor = (2 * (ball.x - paddle.paddleCenter().x)) / paddle.width; // Number between -1 and 1
      var maxAngle = (1 * Math.PI) / 2;
      var paddleAngle = -Math.PI / 2 + factor * maxAngle;
      ball.angle = (-ball.angle + paddleAngle) / 2;
      ball.y = paddle.top() - ball.radius;
    }
  }

  checkCollisionBubbleBall(ball, bubble) {
    var d = Math.sqrt((ball.x - bubble.x) ** 2 + (ball.y - bubble.y) ** 2);
    if (d < ball.radius + bubble.radius) {
      ball.bounceHorizontally(); 
      // ball.bounceAdvanced(bubble)
      return true;
    }
  }

  start() {
    var that = this;
    this.intervalId = setInterval(function() {
      that.drawEverything();
      that.update();
    }, 1000 / 60);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  removeUselessBalls() {
    for (var i = this.balls.length - 1; i >= 0; i--)
      if (this.balls[i].top() > this.ctx.canvas.height) {
        this.balls.splice(i, 1);
      }
  }

  drawLives() {
    this.ctx.save();
    this.ctx.fillRect(
      this.ctx.canvas.width - 350,
      this.ctx.canvas.height - 85,
      350,
      50
    )
    this.ctx.fillStyle = "slategray";
    this.ctx.font = "bold 30px helvetica";
    this.ctx.textAlign = "right";
    this.ctx.fillText(
      "YOLTT*: " + this.life,
      this.ctx.canvas.width - 100,
      this.ctx.canvas.height - 50
    );
    this.ctx.restore();
  }

  drawHighScore(){
    this.ctx.save();
    this.ctx.fillRect(
      0,
      this.ctx.canvas.height - 85,
      350,
      50
    )
    this.ctx.fillStyle = "slategray";
    this.ctx.font = "bold 30px helvetica";
    this.ctx.textAlign = "left";
    this.ctx.fillText(
      "ZEN STATUS: " + highscore,
      50,
      this.ctx.canvas.height - 50
    );
    this.ctx.restore();
  }

  drawExplanation(){
    this.ctx.save()
    this.ctx.fillStyle = "rgb(255,255,255)"
    this.ctx.font = "20px GeoSansLight"
    this.ctx.fillText("*you only live three times", this.ctx.canvas.width-100, this.ctx.canvas.height-5)
    this.ctx.restore()
  }
  
  // Currently not called anywhere 
  sound(){
    if (this.life === 0) {
    console.log("test");
     var cough = new sound("../sound/hack.mp3");
    cough.play();
    }
  }

  // On loss of ball 1) Push new ball 2) Deduct life and 3) Return paddle to middle of canvas
  ballsAreLife() {
    if (this.balls.length === 0) {
      this.balls.push(
        new Ball(
          this.ctx,
          this.ctx.canvas.width / 2,
          this.ctx.canvas.height - this.paddle.height - this.ball_radius,
          this.ball_radius
        )
      );
      console.log("New ball");
      this.paddle.x = this.ctx.canvas.width / 2 - this.paddle.width / 2;
      this.paddle.y = this.ctx.canvas.height - this.paddle.height;
      return (this.life -= 1);
    }
  }
}
