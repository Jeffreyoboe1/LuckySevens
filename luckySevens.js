/*
Creator:  Jeffrey S. Padgett
Date Created:  Dec. 27, 2018
Last Modified:
*/


function roll6sided() {
  var num = Math.floor(Math.random() * 6) + 1;
  return num;
}

function rollDice() {
  return (roll6sided + roll6sided);
}
