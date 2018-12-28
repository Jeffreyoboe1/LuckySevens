/*
Creator:  Jeffrey S. Padgett
Date Created:  Dec. 27, 2018
Last Modified:
*/
function verify() {
  clearErrors();

  // parseFloat takes the input (type string) and makes it into float, then toFixed returns string, which I convert back to float.
  var bet = parseFloat(parseFloat(document.getElementById("bet").value).toFixed(2));
  var bet2 = 10.00;
  console.log('bet is: ' + bet);
  console.log('bet2 is: ' + bet2);

  if (bet<=0) {
    alert("You have to bet some money if you want to play!");
    document.getElementById("bet").className="error";
    document.getElementById("bet").focus();
    return;
  }

  play(bet);


// end of verify function
}

function play(bet) {
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

    // end of while money > 0 loop;
  }

  document.getElementById('resultBet').innerText = bet;
  document.getElementById('resultRollsBeforeBroke').innerText = rolls;
  document.getElementById('resultMaxMoney').innerText = maxMoney;
  document.getElementById('resultRollAtMax').innerText = rollAtMax;
  document.getElementById("results").style.display="block";
  document.getElementById("play").innerText="Play Again";
  document.getElementById("reset").style.display="inline";


}

function rollDice() {
  return (roll6sided() + roll6sided());
}

function roll6sided() {
  var num = Math.floor(Math.random() * 6) + 1;
  return num;
}

function clearErrors() {
  document.getElementById("bet").className="";
}

function reset() {
  document.getElementById("results").style.display="none";
  document.getElementById("bet").value = "0.00";
  document.getElementById("play").innerText = "Play";
  document.getElementById("reset").style.display="none";

}
