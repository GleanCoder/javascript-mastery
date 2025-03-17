const arr = [5, 8, 9];

/*

Suppose we want to create new array using arr array and some extra elements then what should we do ? If we go for mannual then we have to code it like:
const newArr=[2,7,arr[0],arr[1],arr[2]] ❌

Otherwise we have a better option called Spread Operator
*/

// Using Spread Operator

const newArr = [2, 7, ...arr]; // if we store arr array without spread operator then it would stored as an whole array [2, 7, [5, 8, 9]] not as an individual elements [2, 7, 5, 8, 9].

/*
🎯 Spread operator is to basically take all the values out of the array, and then write them Individually.

✅ USE CASES:

👉 when we want to expand an array.
👉 When we pass arguments into functions.

*/

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

const newMenu = [...restaurant.mainMenu, "Biriyani"]; //This is complete new array.not manipulating the resturant.mainMenu array
// console.log(newMenu);

/*
🎯 Spread Operator is similar to Destruction but the difference is, Spread Operator takes all the elements from the array and it also doesn't create new variables

The spread operator (...) is used to expand elements of an array or object into individual elements, often for copying or merging.

Destructuring is used to extract values from arrays or objects into separate variables..

*/

// Copy/ Shallow Copy array

const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const CompleteMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

/*
🎯Spread Operator works on all so-called iterables
✅ arrays
✅ strings
✅ maps
✅ sets

But Not Objects.
*/

const personName = "Aditya";
const letters = [...personName];
// console.log(letters); // OUTPUT: [ 'A', 'd', 'i', 't', 'y', 'a' ]

//👉 We can't use Spread Operator in String Template literal ${``}, cause here we can't pass multiple values using , that's only allowed to pass in function arguments or in array

//FUNCTION

const restaurant2 = {
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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
};

const ingridient = [
  //   prompt("Let's make pasta! Ingredient-1"),
  //   prompt("Ingredient-2"),
  //   prompt("Ingredient-3"),
];
restaurant2.orderPasta(...ingridient);

//OBJECTS
// Since ES 2018, the spread operator actually also works on Objects,even though objects are not iterables.

const newResturant = { ...restaurant, founder: "Aditya", foundIn: 2020 };
console.log(newResturant);
