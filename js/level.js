var levels = [{
    name: "Level 1",
    grid: createLevel(2, 10)
  },
  {
    name: "Level 2",
    grid: createLevel(3,13)
  },
  {
    name: "Level 3",
    grid: createLevel(4,15)
  },
  {
    name: "Level 4",
    grid: createLevel(5,20)
  }
] 

// Random array creator 

// Level Generator
// 1: 2,20 2: 3,15, 3: 4, 25

function createLevel(numRow, numEl) {
  var level = []
  for (var row = 0; row <= numRow; row++) {
  var array = Array.from({length: numEl}, () => " ") 
  for (var col = 0; col< Math.floor(Math.random()*array.length); col++) {
    array.splice(Math.random()*array.length, 1, "X")
  }
  level.push(array)
  }
  return level
  }