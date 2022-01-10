let jonSnowHealth = 100;
jonSnowHealth = 100 + "";

// console.log(typeof jonSnowHealth, jonSnowHealth);

// jonSnowHealth = +jonSnowHealth;
// console.log(typeof jonSnowHealth, jonSnowHealth);

let theWinner = "Jamie is the winner.";

let theRealWinner = theWinner.replace("Jamie", "Jon");

if (theRealWinner.includes("Jon")) {
  console.log("replaced");
} else console.log("failed");

// Jon-is-the-winner

//in-line chaining
let newWinnerSplit = theRealWinner.split(" ").join("-").toLowerCase();
// console.log(newWinnerSplit);
// let newWinnerKabob = newWinnerSplit.join("-");
// console.log(newWinnerKabob);

// functions
// declaration
function isJonAlive() {
  if (jonSnowHealth > 0) {
    console.log("Jon is alive!");
  } else console.log("Jon is dead 🐺 ☠️");
}

isJonAlive(jonSnowHealth);

// function with a param
function surpriseAttack(attack) {
  jonSnowHealth -= attack;
  isJonAlive();
}
surpriseAttack(20);
surpriseAttack(40);
surpriseAttack(40);
surpriseAttack(40);

function greeting(person1, person2) {
  console.log(
    `${person1} and ${person2} would like to say hello to each other`
  );
}
greeting("Jon Snow", "Ned Stark");

function rollDice() {
  let possibleRolls = [1, 2, 3, 4, 5, 6];
  let randomIndex = Math.floor(Math.random() * possibleRolls.length);
  return possibleRolls[randomIndex];
}
// let firstRoll = rollDice();
// let secondRoll = rollDice();
// let thirdRoll = rollDice();
// let fourthRoll = rollDice();
// let fifthRoll = rollDice();

function diceMultiplier() {
  let firstRoll = rollDice();
  let secondRoll = rollDice();

  return firstRoll * secondRoll;
}
let multiplied = diceMultiplier();
console.log(multiplied);
