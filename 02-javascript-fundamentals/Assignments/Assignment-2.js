/*
CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
---------------------------------------------------------------------------------------------------------------------------------------------
Your tasks:

1. Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

2. And now let's use arrays! So, create an array called bills containing the test data below.

3. Create an array called tips containing the tip value for each bill, calculated from the function you created before.

4. BONUS: Create an array totals containing the total values, so the bill + tip.
---------------------------------------------------------------------------------------------------------------------------------------------
TEST DATA: 125, 555, and 44.
*/
"use strict";

function calcTip(billValue) {
  let tip;
  if (billValue >= 50 && billValue <= 300) {
    tip = billValue * (15 / 100);
  } else {
    tip = billValue * (20 / 100);
  }
  return tip;
}

const bills = [125, 555, 44];
const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]),
];
const totals = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[bills.length - 1] + tips[tips.length - 1],
];
console.log(`Bills: ${bills}`);
console.log(`Tips: ${tips}`);
console.log(`Totals ${totals}`);
