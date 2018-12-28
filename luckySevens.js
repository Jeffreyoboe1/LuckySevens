/*
Creator:  Jeffrey S. Padgett
Date Created:  Dec. 27, 2018
Last Modified:
*/
function verify() {
  var bet = document.getElementById("bet").value;

  if (bet<=0) {
    alert("Your bet must be greater than 0");
    document.getElementById("bet").className="error";
    document.getElementById("bet").focus();
  }

}

function roll6sided() {
  var num = Math.floor(Math.random() * 6) + 1;
  return num;
}

function rollDice() {
  return (roll6sided + roll6sided);
}

function clearErrors() {


}
