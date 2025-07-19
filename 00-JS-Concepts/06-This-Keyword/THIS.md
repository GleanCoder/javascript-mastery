# Understanding the `this` Keyword in JavaScript

## Overview

The `this` keyword in JavaScript refers to the object that is executing the current function. Its value depends on how and where it is used.

---

## 1. Global Scope

In the global execution context:

- In browsers, `this` refers to the `window` object.
- In Node.js, `this` refers to the `global` object.

```js
console.log(this); // In browser: window object
```

---

## 2. Inside a Function

In a regular function:

- `this` is `undefined` in strict mode.
- `this` refers to `window` in non-strict mode.

```js
function show() {
  console.log(this); // Strict mode: undefined, otherwise window
}
show();
```

---

## 3. Inside an Object (Method Call)

When `this` is used in an object's method, it refers to the object itself.

```js
const obj = {
  name: "Aditya",
  greet: function () {
    console.log(this.name); // "Aditya"
  },
};
obj.greet();
```

---

## 4. Inside an Arrow Function

Arrow functions do **not** have their own `this`. They inherit `this` from their surrounding scope.

```js
const obj = {
  name: "Aditya",
  greet: () => {
    console.log(this.name); // `this` refers to global scope, so undefined
  },
};
obj.greet();
```

---

## 5. Inside a Constructor Function

When using `new`, `this` refers to the newly created object.

```js
function Person(name) {
  this.name = name;
}
const user = new Person("Aditya");
console.log(user.name); // "Aditya"
```

---

## 6. Inside a Class

In a class, `this` refers to the instance of the class.

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(this.name); // "Aditya"
  }
}
const user = new Person("Aditya");
user.greet();
```

---

## 7. `this` in Event Listeners

In a DOM event handler, `this` refers to the element that received the event.

```js
document.querySelector("button").addEventListener("click", function () {
  console.log(this); // Refers to the button element
});
```

---

## 8. Explicitly Setting `this` (`call`, `apply`, `bind`)

- `call()` and `apply()` invoke a function with a specific `this`.
- `bind()` returns a new function with `this` permanently set.

```js
const obj = { name: "Aditya" };
function greet() {
  console.log(this.name);
}
greet.call(obj); // "Aditya"
const boundFunc = greet.bind(obj);
boundFunc(); // "Aditya"
```

---

## 🔥 Key Takeaways

- `this` depends on **how** a function is called.
- Arrow functions **inherit** `this` from their surrounding scope.
- Object methods use `this` to refer to the object.
- In classes and constructors, `this` refers to the instance.
- `call`, `apply`, and `bind` allow manual control over `this`.

---
