# JavaScript Scope and Scope Chain

## **1. Scope**

Scope determines where variables can be accessed in the code. JavaScript has three types of scope:

### **Global Scope**

Variables declared outside any function or block are accessible everywhere in the program.

```js
let globalVar = "I am global";
function test() {
  console.log(globalVar); // Accessible
}
test();
console.log(globalVar); // Accessible
```

### **Function Scope**

Variables declared inside a function are accessible only within that function.

```js
function myFunction() {
  let funcVar = "I exist only inside this function";
  console.log(funcVar); // Accessible
}
myFunction();
console.log(funcVar); // ❌ ReferenceError: funcVar is not defined
```

### **Block Scope**

Variables declared with `let` or `const` inside `{}` are only accessible within that block.

```js
{
  let blockVar = "Inside block";
  console.log(blockVar); // Accessible
}
console.log(blockVar); // ❌ ReferenceError: blockVar is not defined
```

---

## **2. Scope Chain**

When JavaScript looks for a variable, it follows the **scope chain**, moving outward from the current scope to the global scope.

```js
let a = 10;
function outer() {
  let b = 20;
  function inner() {
    let c = 30;
    console.log(a, b, c); // ✅ Can access all variables due to scope chain
  }
  inner();
}
outer();
```

If a variable is not found in the current scope, JavaScript checks parent scopes until it reaches the global scope.

---

## **3. Scoping vs Scope**

- **Scope**: The area where a variable is accessible.
- **Scoping**: The process of determining where variables can be accessed in a program.

---

## **4. Lexical Scope**

Lexical scope means that **a function’s scope is determined by where it is written in the code, not where it is called**.

```js
function outer() {
  let a = 100;
  function inner() {
    console.log(a); // ✅ Accesses 'a' from outer function
  }
  inner();
}
outer();
```

`inner()` can access `a` from `outer()` due to **lexical (static) scoping**.

---

## **5. Variable Lookup**

JavaScript searches for variables in the **current scope first**. If not found, it moves **up the scope chain**.

```js
let x = 50;
function checkScope() {
  let x = 30;
  console.log(x); // 30 (Local scope takes priority)
}
checkScope();
console.log(x); // 50 (Global scope)
```

If a variable isn’t found in the entire scope chain, JavaScript throws a **ReferenceError**.

---

### **Summary**

✅ **Global Scope** → Accessible everywhere  
✅ **Function Scope** → Accessible only inside a function  
✅ **Block Scope** → Accessible only inside `{}` when using `let` or `const`  
✅ **Scope Chain** → JavaScript searches parent scopes if a variable isn't found locally  
✅ **Lexical Scope** → Functions remember where they were defined, not where they were called  
✅ **Variable Lookup** → JavaScript looks for variables in the nearest scope first

🚀 **Mastering scope is key to writing clean and bug-free JavaScript!**
