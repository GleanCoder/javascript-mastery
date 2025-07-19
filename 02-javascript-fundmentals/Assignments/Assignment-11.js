/*
Looping Arrays, Breaking and Continuing﻿

1. Let's bring back the populations array from a previous assignment.

2. Use a for loop to compute an array called percentages2 containing the percentages of the world population for the 4 population values. Use the function percentageWOrld1 that you created earlier.

3. Confirm that percentages2 contains exactly the same values as the percentages array that we created manually in the previous assignment, and reflect on how much better this solution is.

*/
const populations = [256, 1564, 1441, 125];
const percentages2 = [];
const percentageWOrld1 = (populations) => (populations / 7900) * 100;
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageWOrld1(populations[i]));
}
console.log(percentages2);
