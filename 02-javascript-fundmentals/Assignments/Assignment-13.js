/*
The while Loop﻿
1. Recreate the challenge from the lecture Looping Arrays, Breaking and Continuing, but this time using a while loop (call the array percentages3).

2. Reflect on what solution you like better for this task: the for loop or the while loop?

*/
const populations = [256, 1564, 1441, 125];
const percentages3 = [];
const percentageWOrld1 = (populations) => (populations / 7900) * 100;

let i = 0;
while (i < populations.length) {
  percentages3.push(percentageWOrld1(populations[i]));
  i++;
}
console.log(percentages3);
