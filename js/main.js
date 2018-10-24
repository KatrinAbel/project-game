// Global canvas variables
var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")
var width = canvas.width
var height = canvas.height
var game

// Onload go to Page "play" - for debugging purposes

window.onload = function(){

// Set Interval function for start overlay - functions in pageFunction.js

  var intervalIdOverlay = setInterval(function() {
  this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height)
  circleAnimation()
  drawStartBox()
  },1000/5)

  // Onclick canvas start the game with level 1

  $("#canvas").click(function(e) {
    clearInterval(intervalIdOverlay)
    e.preventDefault;
    game = new Game(ctx, levels[0].grid);
    game.start()
  })

  // Paddle functionality - on keydown move paddle

  $(document).keydown(function(e) {
    
  e.preventDefault();
  switch(e.keyCode) {
    case 39: 
    game.paddle.movement = "right"
    console.log(game.paddle.movement)
    break;
    case 37:
    game.paddle.movement = "left"
    console.log(game.paddle.movement)
    break;
    case 32:
    game.launch()
    console.log("main-launch")
    break;
  }
  })

  // Paddle functionality- on keyup stop paddle

  $(document).keyup(function(e) {
    e.preventDefault();
    switch(e.keyCode) {
    case 39:
    case 37:
    game.paddle.movement = null
    break;
    }
  })

}