// Business Logic
function Player() {
  this.runningTotal = 0;
  this.totalScore = 0;
}

Player.prototype.holdScore = function() {
  this.totalScore += this.runningTotal;
}

Player.prototype.rollDice = function() {
  var random = randomNum();
  if (random > 1) {
    this.runningTotal += random;
  } else {
    alert("You rolled a 1! Player 2's turn!")
    this.runningTotal = 0;
  }
}
 //user interface logic//
function randomNum() {
  return Math.floor(Math.random() * 6 + 1)
}

$(document).ready(function() {

var player1 = new Player();
var player2 = new Player();

  // Player 1
  $("button#roll-btn-1").click(function() {
    player1.rollDice();
    $(".current-score-1").text(player1.runningTotal);

  });

  // Player 2
  $("button#roll-btn-2").click(function() {
    player2.rollDice();
    $(".current-score-2").text(player2.runningTotal);

  });

  // Hold 1
  $("button#hold-btn-1").click(function(event) {
    event.preventDefault();
    player1.holdScore();
    $(".total-score-1").text(player1.totalScore);
    player1.runningTotal = 0;
    $(".current-score-1").text(player1.runningTotal);
  });

  // Hold 2
  $("button#hold-btn-2").click(function(event) {
    event.preventDefault();
    player2.holdScore();
    $(".total-score-2").text(player2.totalScore);
    player2.runningTotal = 0;
    $(".current-score-2").text(player2.runningTotal);
  });
});
