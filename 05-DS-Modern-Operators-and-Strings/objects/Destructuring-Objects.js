/*
🎯 to destructure object we use {} => Curly braces , In objects the order of elements doesn't matters. we can access them by  property names
*/

// Data needed for first part of the section
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
};

const { name, mainMenu, openingHours } = restaurant;
// console.log(name, mainMenu, openingHours);

// What if we want to access it by using different name {actualPropertyName: newName}
const {
  name: resturantName,
  starterMenu: starters,
  mainMenu: mainCourse,
} = restaurant;
// console.log(resturantName, starters, mainCourse);

/*
another feature is default value this is usefull when we are trying to access / Read a property that doesn't exist on the object

👉 This is helpfull when we dont have data or hard-coded like we have it here but in real world we get data from somewhere else
*/
const { name: hotelName = [], starterMenu: starter, main = [] } = restaurant;
// console.log(hotelName, starter, main);

//Mutating Variables

let a = 123;
let b = 56;
let c = { a: 2, b: 6 };
// let { a, b } = c; // here if we use let or const we will get an error like cann't redeclare block-scoped variable
// {a,b}=c; // we cann't assign = simply to a block so for destructuring we need to wrap up everything inside () parentheses

({ a, b } = c);
// console.log(a, b);

// Destructuring Nested Objects

/*
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
};

*/

const {
  fri: { open: o, close: cs },
} = openingHours;
// console.log(o, cs);

/*
Many times in javascript we have function with a lots of parameter but then it can be harder to know the order  of the parameters for someone that is using this function, and so instead of defining the parameters manually, we can just pass an object into the function as an argument and the function will then immideately destructure that object.

*/

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
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `
    );
  },
};

restaurant2.orderDelivery({
  starterIndex: 1,
  mainIndex: 0,
  time: "19:26",
  address: "New Delhi",
});
