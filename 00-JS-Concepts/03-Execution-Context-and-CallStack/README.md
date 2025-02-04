# JavaScript Execution Context and Call Stack Explained

This document explains how JavaScript manages code execution through **execution contexts** and the **call stack**.

---

## 1. Execution Context

An **execution context** is an environment where JavaScript code is evaluated and executed. It is created whenever a function is invoked or the script starts.

### Types of Execution Contexts

- **Global Execution Context (GEC)**:
  - Created when the script first runs.
  - Represents the global scope (e.g., `window` in browsers, `global` in Node.js).
- **Function Execution Context (FEC)**:
  - Created every time a **function is called**.
  - Represents the function’s local scope.
- **Eval Execution Context**: Rarely used (created by `eval()`).

### Phases of an Execution Context

1. **Creation Phase** (Compilation):

   - **Hoisting**: `var` variables are initialized to `undefined`, and function declarations are fully hoisted.
   - **Scope Chain**: Determines accessible variables (lexical scoping).
   - **`this` Binding**: Determined based on how the function is called.

2. **Execution Phase** (Runtime):
   - Code runs line-by-line, assigning values to variables and executing logic.

### Components of an Execution Context

- **Variable Environment**: Stores `var`, `let`, `const`, and function declarations.
- **Lexical Environment**: Resolves variable/function references (scope chain).
- **`this` Binding**: Contextual reference (e.g., `window` in global scope).

---

## 2. Call Stack

The **call stack** is a LIFO (Last-In, First-Out) structure that tracks the order of execution contexts. JavaScript is single-threaded, so only one context executes at a time.

### How It Works

- When a function is called, its execution context is **pushed** onto the stack.
- When a function returns, its context is **popped** off the stack.

### Example

```javascript
function first() {
  console.log("First");
  second(); // Call second()
}

function second() {
  console.log("Second");
  third(); // Call third()
}

function third() {
  console.log("Third");
}

first(); // Start the chain
```

### Call Stack Flow:

1. `first()` is pushed.

2. `second()` is pushed when called inside `first()`.

3. `third()` is pushed when called inside `second()`.

4. `third()` pops after logging "Third".

5. `second()` pops after `third()` returns.

6. `first()` pops after `second()` returns.

### Key Behaviors

1. Synchronous Execution:

   - Code runs line-by-line; the stack blocks until the current context completes.

2. Stack Overflow:

   - Occurs with infinite recursion (e.g., a function calling itself endlessly):

```javascript
function crash() {
  crash(); // Recursive call with no exit
}
crash(); // Stack overflow!
```

### Closures & Scope Chain:

- Inner functions retain access to outer scopes even after outer contexts are popped.

---

### Takeaways

- **Execution Context:** The environment where code runs (variables, scope, this).
- **Call Stack:** Manages the order of function execution (LIFO).
- **Single-Threaded:** Only one context executes at a time.
