/*
CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

1. Create an array called bills containing all 10 test bill values.

2. Create empty arrays for the tips and the totals (tips and totals)

3. Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

1. First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

3. Call the function with the totals array.

*/
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = function (bill) {
  //   return
  for (let bill = 0; bill < bills.length; bill++) {
    tips.push(
      bills[bill] >= 50 && bills[bill] <= 300
        ? bills[bill] * 0.15
        : bills[bill] * 0.2
    );
  }
  for (let i = 0; i < tips.length; i++) {
    totals.push(bills[i] + tips[i]);
  }
  console.log(`Bills: ${bills}`);
  console.log(`Tips: ${tips}`);
  console.log(`Totals: ${totals}`);
};
calcTip(bills);

const calcAverage = function (arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const average = sum / arr.length;
  return average;
};
calcAverage(totals);
