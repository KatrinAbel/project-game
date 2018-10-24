var levels = [{
  name: "Level 1",
  grid: createLevel(10)
  },
  {
    name: "Level 2",
    grid: createLevel(25)
  },
  {
    name: "Level 3",
    grid: createLevel(25)
  }
] 

// Random array creator 

function createLevel(numEl) {
  var level = []
  for (var row = 0; row <=3; row++) {
  var array = Array.from({length: numEl}, () => " ") 
  for (var col = 0; col< Math.floor(Math.random()*array.length); col++) {
    array.splice(Math.random()*array.length, 1, "X")
  }
  level.push(array)
  }
  return level
  }