var hands = ["rock", "paper", "scissors"];
var computer, choice;
var hasStarted = false;

function select() {
  var random = Math.floor(Math.random() * 3);
  computer = hands[random];
  $(".selected").text("Your Turn");
  //   console.log(computer);
}

$("img").on("click", function () {
  choice = $(this).attr("id");
  $(".selected").text("You chose " + choice);
  evaluate();
});

function evaluate() {
  if (choice === computer) {
    $(".selected").text("Match Draw!");
    setTimeout(function () {
      $(".selected").text("");
    }, 1000);
    restart();
  } else if (
    (choice === "rock" && computer === "scissors") ||
    (choice === "scissors" && computer === "paper") ||
    (choice === "paper" && computer === "rock")
  ) {
    $(".selected").text("You Won! " + choice + " beat " + computer);
    setTimeout(function () {
      $(".selected").text("");
    }, 1000);
    restart();
  } else {
    $(".selected").text("Computer Won! " + computer + " beat " + choice);
    setTimeout(function () {
      $(".selected").text("");
    }, 1000);
    restart();
  }
}

$(document).on("keydown", function () {
  if (!hasStarted) {
    $("#header").text("Keep Up The Game!");
    select();
    hasStarted = true;
  }
});

function restart() {
  $("#header").text("Press any key to start!");
  hasStarted = false;
}
