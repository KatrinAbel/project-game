// Global canvas variables
var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")
var width = canvas.width
var height = canvas.height
var game

// Onload go to Page "play" - for debugging purposes
  window.onload = function(){

  goToPage("play")

  // On Play-Button click start the game 
  $("#play").click(function(e) {
    console.log(e)
    e.preventDefault;
    game = new Game(ctx, levels[0].grid);
    game.start()
  })

  // On keydown move paddle

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
  console.log("launch")
  break;
  }
  })

  // On keyup stop paddle

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