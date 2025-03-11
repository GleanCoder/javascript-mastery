/*
🎯 Desturcturing is an ES6 feature and it's basically a way of unpacking values from an array or an object into separate variables.

🎯 Destructuring is to break a complex data structure down into a smaller data structure like a variable.

✅ Destructring Arrays:

🎯 for arrays we use destructuring to retrieve elements from the array and store them into variables in a very easy way.

*/

const arr = ["Aditya", "Kiran", "Acharya"];

// Traditional way to assign these elements to a variable ❌

const fName = arr[0];
const mName = arr[1];
const lName = arr[2];

// using Destruturing method ✅

let [firstName, middleName, lastName] = arr;

// Here [] is the Destructring assignment
console.log(firstName, middleName, lastName);

// Suppose you want to skip the middle name in destructuring then you can add an extra , read below code for understanding
const [firName, , lasName] = arr;
console.log(firName, lasName);

// Suppose you want to switch the firstname with middleName

// Traditional way ❌
const temp = firstName;
firstName = middleName;
middleName = temp;
console.log(firstName, lastName); // Kiran Acharya

// Using Destructuring ✅

[firstName, lastName] = [lastName, firstName];
console.log(firstName, lastName);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//  Return Values using function

const [starter, mainCourse] = restaurant.order(2, 1);
console.log(starter, mainCourse);

//Destructuring Nested Array
const numArr = [2, 4, [5, 6]];
const [i, , [j, k]] = numArr;
console.log(i, j, k);

// We can also set default values for variables when we extract them, this can be usefull in the case where we don't know the length of the Array.

const numArray = [2, 6, 3];
const [p, q, r, s] = numArray; // s is undefined ,cause we have only 3 elements in numArray but we extracting for 4 variables that's why we need default values
console.log(p, q, r, s);

const [a = 1, b = 1, c = 1, d = 1] = numArray; // here d=1 because we assigned default value to d .

//An example where this is usefull => when we get data from an API
console.log(a, b, c, d);
