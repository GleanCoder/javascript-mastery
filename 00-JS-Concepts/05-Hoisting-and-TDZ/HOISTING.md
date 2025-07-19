# Variable Environment: Hoisting and the Temporal Dead Zone (TDZ)

## 1. Introduction

In JavaScript, the **variable environment** determines how variables are stored and accessed during execution. Two important concepts related to this are **hoisting** and the **Temporal Dead Zone (TDZ)**.

---

## 2. Hoisting

### What is Hoisting?

Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope during compilation. However, **only declarations are hoisted, not initializations**.

### Example with `var`:

```js
console.log(a); // Undefined (Declaration is hoisted, but not the value)
var a = 5;
console.log(a); // 5
```

### Example with `let` and `const`:

Unlike `var`, `let` and `const` are also hoisted but remain **uninitialized** until the code execution reaches their declaration.

```js
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
```

---

## 3. Temporal Dead Zone (TDZ)

### What is TDZ?

The **Temporal Dead Zone (TDZ)** is the period between the declaration of a `let` or `const` variable and its initialization. Accessing the variable during this phase results in a **ReferenceError**.

### Example:

```js
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 20;
```

### Why Does TDZ Exist?

TDZ prevents the use of variables before they are properly declared, which helps catch potential errors and enforces better coding practices.

---

## 4. Function Hoisting

### Function Declarations

Function declarations are fully hoisted, meaning the entire function (both **declaration and body**) is moved to the top of its scope. This allows you to call the function before it appears in the code.

#### ✅ Example (Function Declaration Hoisting):

```js
sayHello(); // Works fine!

function sayHello() {
  console.log("Hello, world!");
}
```

Here, `sayHello()` is hoisted and available before its declaration.

### Function Expressions

Function expressions (including arrow functions) are **not fully hoisted**. Only the variable declaration is hoisted, but not its assigned function value.

#### ❌ Example (Function Expression Hoisting Issue):

```js
greet(); // ❌ TypeError: greet is not a function

var greet = function () {
  console.log("Hello!");
};
```

In this case, `greet` is hoisted as `undefined`, so calling it before the assignment results in an error.

#### 🛑 Same Issue with `let` or `const`:

```js
sayHi(); // ❌ ReferenceError: Cannot access 'sayHi' before initialization

let sayHi = () => {
  console.log("Hi!");
};
```

With `let` or `const`, `sayHi` remains in the **Temporal Dead Zone (TDZ)** until initialized.

### Summary Table

| Function Type                         | Hoisted?                      | Can Call Before Declaration? |
| ------------------------------------- | ----------------------------- | ---------------------------- |
| Function Declaration                  | ✅ Yes                        | ✅ Yes                       |
| Function Expression (`var`)           | ⚠️ Partially (as `undefined`) | ❌ No (TypeError)            |
| Function Expression (`let` / `const`) | ❌ No (TDZ)                   | ❌ No (ReferenceError)       |

---

## 5. Summary

| Feature       | `var`                               | `let` / `const`                         |
| ------------- | ----------------------------------- | --------------------------------------- |
| Hoisting      | Yes, but initialized to `undefined` | Yes, but stays in TDZ until initialized |
| TDZ           | No                                  | Yes                                     |
| Redeclaration | Allowed                             | Not allowed                             |
| Scope         | Function-scoped                     | Block-scoped                            |

Understanding these concepts is essential for writing clean and bug-free JavaScript code.

---

## 6. Additional Resources

- [MDN: Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [MDN: Temporal Dead Zone](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)
- [JavaScript Scope and Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

---
