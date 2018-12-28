/*
Creator:  Jeffrey S. Padgett
Date Created:  Dec. 27, 2018
Last Modified:
*/
function verify() {
  clearErrors();

  // parseInt takes the input (type string) and makes it into int, so I can perform calculations.
  var bet = parseFloat(document.getElementById("bet").value).toFixed(2);
  console.log('bet is: ' + bet);

  if (bet<=0) {
    alert("You have to bet some money if you want to play!");
    document.getElementById("bet").className="error";
    document.getElementById("bet").focus();
  } else {

    var money = bet;
    var maxMoney = money;
    var rolls = 0;
    var rollAtMax = 0;


    while (money > 0) {

      var diceRoll = rollDice();

      if (diceRoll == 7) {
        money = money + 4;
      } else {
        money = money - 1;
      }

      rolls++;
      
      if (money > maxMoney) {
        maxMoney = money;
        rollAtMax = rolls;
      }


    }





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
  document.getElementById("bet").className="";
}
