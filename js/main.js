// Global canvas variables
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var game;
var highscore = 0


window.onload = function() {
 
  goToPage("play")

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
    if (!game || (game && game.life === 0 && game.name === "Level 1")) {
      game = new Game(ctx, levels[0].grid, levels[0].name, 200);
      game.start()
      $(document).off("keydown");

      // Paddle functionality - on keydown move paddle
      $(document).keydown(function(e) {
        e.preventDefault();
        switch (e.keyCode) {
          case 39:
            game.paddle.movement = "right";
            break;
          case 37:
            game.paddle.movement = "left";
            break;
          case 32:
            game.launch();
            break;
        }
      });
    }

    //Level up - 2
    if (game && game.bubbles.length === 0 && game.name === "Level 1" ||
    game && game.life === 0 && game.name === "Level 2") {
      game = new Game(ctx, levels[1].grid, levels[1].name, 150);
      game.start()
      $(document).off("keydown");

      // Paddle functionality - on keydown move paddle
      $(document).keydown(function(e) {
        e.preventDefault();
        switch (e.keyCode) {
          case 39:
            game.paddle.movement = "right";
            break;
          case 37:
            game.paddle.movement = "left";
            break;
          case 32:
            game.launch();
            break;
        }
      });
    }

  // Level up - 3
  if (game && game.bubbles.length === 0 && game.name === "Level 2" ||
  game && game.life === 0 && game.name === "Level 3") {
    game = new Game(ctx, levels[2].grid, levels[2].name, 100);
    game.start()
    $(document).off("keydown");

    // Paddle functionality - on keydown move paddle
    $(document).keydown(function(e) {
      e.preventDefault();
      switch (e.keyCode) {
        case 39:
          game.paddle.movement = "right";
          break;
        case 37:
          game.paddle.movement = "left";
          break;
        case 32:
          game.launch();
          break;
      }
    });
  }

  //Level up - 4
  if (game && game.bubbles.length === 0 && game.name === "Level 3" ||
  game && game.life === 0 && game.name === "Level 4") {
    game = new Game(ctx, levels[3].grid, levels[3].name, 100);
    game.start()
    $(document).off("keydown");

    // Paddle functionality - on keydown move paddle
    $(document).keydown(function(e) {
      e.preventDefault();
      switch (e.keyCode) {
        case 39:
          game.paddle.movement = "right";
          break;
        case 37:
          game.paddle.movement = "left";
          break;
        case 32:
          game.launch();
          break;
      }
    });
  }
  
  // Closing of canvas onclick function
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

// Close window-onload function
}
