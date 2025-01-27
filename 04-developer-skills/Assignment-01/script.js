// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

/*
// 1) Understanding the problem

=> array is given, i have to display this array with a string like "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// 2) Breaking up into sub-problems

=> PrintForecast function with arr parameter 
=> travel the loop to get individual elements
=> for counting day I can use current index+1
=> take empty string to add more string on it

*/
function printForecast(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days... `;
  }
  console.log(`...${str}`);
}

const testCase1 = printForecast([17, 21, 23]);
const testCase2 = printForecast([12, 5, -5, 0, 4]);
