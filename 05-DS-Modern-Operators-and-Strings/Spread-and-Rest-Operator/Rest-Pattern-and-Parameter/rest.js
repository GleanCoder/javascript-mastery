/*
🎯 The Rest operator exactly looks like the Spread operator and it has the same syntax with the three dots but it actually does the opposite of the spread operator.

➡️ We used Spread operator to expand array into individual elements or to pass multiple values into a function.

➡️ But Rest operator collect multiple elements and condense them into an array.

👉 the spread operator is to unpack elements from an array while Rest is to pack elements into an array.

*/

/*
const arr = [1, 2, ...[3, 4]];

➡️ This is SPREAD, because on Right side of = Assignment operator, however we can use it on the left side of the = together with Destructuring.

*/

// 1️⃣ DESTRUCTURING:

const arr = [1, 2, ...[3, 4]];

//REST, beacuse on left side of = sign
const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others); //OUTPUT: 1 2 [ 3, 4, 5 ]

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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
};

const [Pizza, , Risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

// console.log(Pizza, Risotto, otherFoods);

/*
Rest syntax collects all the array after the last variable. So in this case the Risotto.

 it doesn't include any skipped elements. in this case it doesn't included the pasta from the main menu cause we skipped it in destructuring

 => So the Rest pattern must be the last in the destructuring assignment, because otherwise how will js know untill when it should collect the rest of the array.
*/

//OBJECTS
const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

// 2️⃣ FUNCTIONS:

// Rest is usefull when we have the less number of parameters   as compared to no. of arguments and it is usefull to take both array and single value as parameter and argument

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  //   console.log(sum);
};
add(2, 3, 4, 1);

const x = [23, 5, 7];

add(...x);

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
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant2.orderPizza("mushrooms", "onion", "olives", "spinach");

// so rest operator is used to collect all of the remaining unused paraneters.

/*
The spread operator is used where we would otherwise write values, separated by a comma. On the other hand the rest pattern is basically used where we would otherwise write variable names separated by commas.

so again we can use rest where variable separated by commas not values separated by commas


*/

/*
➡️ Spread (...) is used when expanding values. It takes individual values out of an array or object and spreads them where values are expected.

➡️ Rest (...) is used when collecting values. It groups multiple values into a single variable.

🎯 Key Difference:
👉 Spread is used where values go (like expanding an array into arguments or elements).

👉 Rest is used where variable names go (like collecting function arguments into a single variable).
*/
