// Original brick class

// class Brick {
//   constructor(ctx, x, y, width, height){
//     this.ctx = ctx
//     this.x = x
//     this.y = y
//     this.width = width
//     this.height = height
//   }
//   drawBricks() {
//     ctx.save()
//     this.ctx.fillStyle = "green"
//     this.ctx.fillRect(this.x, this.y, this.width, this.height)
//     ctx.restore()
//   }
// }

// Original brick array originator

// var brickWidth = ctx.canvas.width / grid[0].length
// var brickHeight = 50
// for (var row = 0; row < grid.length; row++) {
//   for (var col = 0; col < grid[row].length; col++) {
//     if (grid[row][col] === 'X') {
//       this.bubbles.push(new Bubble(
//         this.ctx,
//         col*brickWidth,
//         row*brickHeight,
//         brickWidth,
//         brickHeight
//       ))
//     }
//   }
// }
// }