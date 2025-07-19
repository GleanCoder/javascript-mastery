/*
CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.

TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

*/
const dolphinsScore_1 = 96;
const dolphinsScore_2 = 108;
const dolphinsScore_3 = 89;
const scoreDolphins = (dolphinsScore_1 + dolphinsScore_2 + dolphinsScore_3) / 3;

const koalasScore_1 = 88;
const koalasScore_2 = 91;
const koalasScore_3 = 110;
const scoreKoalas = (koalasScore_1 + koalasScore_2 + koalasScore_3) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy");
} else if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else {
  console.log("Koalas win the trophy");
}
