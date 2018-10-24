// Global canvas variables
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var game;


window.onload = function() {

  // Set Interval function for start overlay - functions in pageFunction.js

  var intervalIdOverlay = setInterval(function() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    circleAnimation();
    drawStartBox();
  }, 1000 / 5);

  // Onclick canvas start the game with level 1

  $("#canvas").on("click", function(e) {

    //Clear start screen and initialize first game
    clearInterval(intervalIdOverlay);
    e.preventDefault();

    //If there is a game and game life is 0 stop the game first
    if (game && game.life === 0 || game && game.bubbles.length === 0) {
      game.stop();
    }

    //Start or restart the game
    if (!game || (game && game.life === 0)) {
      game = new Game(ctx, levels[0].grid, 200);
      game.start()
      
      $(document).off("keydown");

      // Paddle functionality - on keydown move paddle
      $(document).keydown(function(e) {
        e.preventDefault();
        switch (e.keyCode) {
          case 39:
            game.paddle.movement = "right";
            console.log(game.paddle.movement);
            break;
          case 37:
            game.paddle.movement = "left";
            console.log(game.paddle.movement);
            break;
          case 32:
            game.launch();
            console.log("main-launch");
            break;
        }
      });
    }

    //Level up
    if (game && game.bubbles.length === 0) {
      game = new Game(ctx, levels[1].grid, 100);
      game.start()
      
      $(document).off("keydown");

      // Paddle functionality - on keydown move paddle
      $(document).keydown(function(e) {
        e.preventDefault();
        switch (e.keyCode) {
          case 39:
            game.paddle.movement = "right";
            console.log(game.paddle.movement);
            break;
          case 37:
            game.paddle.movement = "left";
            console.log(game.paddle.movement);
            break;
          case 32:
            game.launch();
            console.log("main-launch");
            break;
        }
      });
    }
  });



  // Paddle functionality- on keyup stop paddle

  $(document).keyup(function(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case 39:
      case 37:
        game.paddle.movement = null;
        break;
    }
  });
};
