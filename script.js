let x
let id = 0
let game = function() {
  x = Math.random()*3
  if (x < 1) {
    id = 'rock';
  } else if (x < 2) {
    id = 'paper';
  } else {
    id = 'sissor';
  }
  document.getElementById(id).style.display = 'inline'

  setTimeout(function displayNone() {
    document.getElementById(id).style.display = 'none'
  },1000)
}

let pc = 0
let me = 0
function rock() {
  game()
  if (id == 'paper') {pc += 1}
  else if (id == 'sissor'){me += 1}
  result()
}
function paper() {
  game()
  if (id == 'rock') {me += 1}
  else if (id == 'sissor'){pc += 1}
  result()
}
function sissor() {
  game()
  if (id == 'paper') {me += 1}
  else if (id == 'rock'){pc += 1}
  result()
}

function result() {
  document.getElementById('me').innerHTML = 'Me : ' + me
  document.getElementById('pc').innerHTML = 'PC : ' + pc
}
