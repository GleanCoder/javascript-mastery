# JavaScript Engine & Runtime: A Deep Dive

## Table of Contents

1. [JavaScript Engine](#javascript-engine)
   - [Parser](#parser)
   - [Interpreter](#interpreter)
   - [Compiler (JIT)](#compiler-jit)
   - [Memory Heap & Garbage Collector](#memory-heap--garbage-collector)
   - [Call Stack](#call-stack)
2. [JavaScript Runtime](#javascript-runtime)
   - [Web APIs / C++ APIs](#web-apis--c-apis)
   - [Callback Queues](#callback-queues)
   - [Event Loop](#event-loop)
3. [Visualization with Mermaid](#visualization-with-mermaid)
4. [Asynchronous Workflow Example](#asynchronous-workflow-example)
5. [Key Terms Explained](#key-terms-explained)

---

## 1. JavaScript Engine <a name="javascript-engine"></a>

The JavaScript Engine converts human-readable code into machine-executable instructions. Let’s break down its components:

### **Parser** <a name="parser"></a>

- **Purpose**: Converts source code into an **Abstract Syntax Tree (AST)**.
- **Process**:
  1. **Lexical Analysis**: Splits code into tokens (e.g., `function`, `add`, `(`).
  2. **Syntax Analysis**: Validates grammar and builds the AST.
- **Example**:
  ```javascript
  function sum(a, b) {
    return a + b;
  }
  ```
- **Tokens:** `function`, `sum`, `(`, `a`, `,`, `b`, `)`, `{`, `return`, `a`, `+`, `b`, `}`.

- **AST:** A tree with nodes for functions, parameters, and operations.

### **Interpreter** <a name="interpreter"></a>

- **Purpose:** Executes bytecode line-by-line.

- **Pros:** Fast initial execution.

- **Cons:** Slower for repetitive code (e.g., loops).

- **Example:** The interpreter executes the AST’s bytecode representation.

### **Compiler (JIT)** <a name="compiler-jit"></a>

- **Purpose:** Optimizes frequently executed code ("hot code") into machine code.

- **Key Techniques:**

  - **Inline Caching:** Remembers object property locations for faster access.

  - **Hidden Classes:** Assigns shared structures to similar objects (used in V8).

- **Example:** A loop running 10,000x is compiled to optimized machine code.

### **Memory Heap & Garbage Collector** <a name="memory-heap--garbage-collector"></a>

- **Memory Heap:**

  - Stores objects, variables, and closures.

  - Example: `let obj = { x: 1 };` allocates memory in the heap.

- **Garbage Collector:**

  - **Mark-and-Sweep:** Flags unreachable objects (e.g., variables out of scope) and deletes them.

  - **Generational Collection (V8):** Prioritizes cleaning short-lived "young generation" objects.

### **Call Stack** <a name="call-stack"></a>

- **Purpose:** Tracks function execution in a LIFO (Last-In-First-Out) order.

**Stack Frame:** Created for each function call, storing arguments and local variables.

**Example:**

```javascript
function greet() {
  console.log("Hi!");
}
function main() {
  greet();
}
main();
```

- **Stack Flow:**

  - `main()` → `greet()` → `console.log()` → (popped after execution).

---

## 2. JavaScript Runtime <a name="javascript-runtime"></a>

The runtime provides the environment for JS execution, including APIs and task scheduling.

### **Web APIs / C++ APIs** <a name="web-apis--c-apis"></a>

- **Browser:** setTimeout, fetch, DOM manipulation.

- **Node.js:** fs.readFile, http module.

- **Role:** Handle asynchronous tasks outside the main thread.

### **Callback Queues** <a name="callback-queues"></a>

**1. Macrotask Queue:** Callbacks from setTimeout, I/O operations.
**2. Microtask Queue:** Higher-priority callbacks (e.g., Promise.then).

- **Priority:** Microtasks execute before Macrotasks.

### **Event Loop** <a name="event-loop"></a>

- **Role:** Coordinates the call stack, queues, and APIs.

- **Process:**

  1. Check if the **call stack** is empty.

  2. Execute all **microtasks**.

  3. Dequeue one **macrotask** and push it to the stack.

---

## 3. Visualization with Mermaid <a name="visualization-with-mermaid"></a>

### JavaScript Engine Workflow

![JS Engine WorkFlow](https://i.ibb.co/b67xHWK/JS-Engine-Workflow.webp)

### JavaScript Runtime Workflow

![JS Runtime WorkFlow](https://i.ibb.co/DtT7JBK/JS-Runtime-flow.webp)

### Async Example Flow

![JS Runtime WorkFlow](https://i.ibb.co/Jy4X9Sd/Async-flow.webp)

---

## **4. Asynchronous Workflow Example** <a name="asynchronous-workflow-example"></a>

```javascript
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

// Output:
// Start
// End
// Promise
// Timeout
```

- **Explanation:**

  1. `console.log("Start")` and `console.log("End")` execute immediately.

  2. `setTimeout` callback moves to the **Macrotask Queue**.

  3. `Promise.then` callback goes to the **Microtask Queue**.

  4. The **Event Loop** processes Microtasks before Macrotasks.

---

## 5. **Key Terms Explained** <a name="key-terms-explained"></a>

**Abstract Syntax Tree (AST)**

- A tree representation of code structure. Tools like ESLint use ASTs for static analysis.

**Bytecode**

- Intermediate code between AST and machine code. Faster to execute than raw source code.

**Inline Caching**

- Optimizes property access by caching object shapes (e.g., `obj.x` skips lookup after the first access).

**Hidden Classes (V8)**

- Objects with the same properties share hidden classes, enabling faster property access.

**Event Loop Phases (Node.js)**

**1. Timers:** Execute `setTimeout`/`setInterval`.

**2. I/O Callbacks:** Execute pending I/O callbacks.

**3. Poll:** Retrieve new I/O events.

**4. Check:** Execute `setImmediate` callbacks.

**5. Close:** Handle cleanup tasks (e.g., `socket.on('close')`).

**Codehot:**

- Frequently executed code (e.g., loops) optimized by the JIT compiler (e.g., V8’s TurboFan) for performance.

---

## Summary:

- **Engine** = Parser + Interpreter + Compiler + Heap/Stack.

- **Runtime** = Engine + APIs + Event Loop + Queues.

- **Visual Metaphor:** The engine is a chef (parsing, cooking code), the runtime is the kitchen (tools, timers, and a manager coordinating tasks).
