# JavaScript Execution Context

## What is JavaScript?

JavaScript is a high-level, single-threaded programming language used to build interactive web and mobile applications.

Modern JavaScript engines use JIT (Just In Time) compilation to optimize execution.

---

# Interpreted vs Compiled Language

## Compiled Language

Code is converted into machine code before execution.

Examples:
- C
- C++

## Interpreted Language

Code is executed line by line.

Examples:
- JavaScript
- Python

Modern JavaScript is both interpreted and JIT compiled internally.

---

# JavaScript Engine

A JavaScript engine executes JavaScript code.

Examples:
- V8 (Chrome)
- JavaScriptCore (Safari)
- Hermes (React Native)

Main responsibilities:
- Parsing
- Compiling
- Executing code

---

# Execution Context

Execution Context is the environment where JavaScript code executes.

It contains:
1. Memory Component
2. Code Component

---

# JavaScript Execution Phases

## 1. Memory Creation Phase

Memory is allocated for:
- variables
- functions

Example:

```js
var a = 10

function greet() {}
```

Internally:

```js
a -> undefined
greet -> function definition
```

---

## 2. Code Execution Phase

Code executes line by line.

Example:

```js
a = 10
```

---

# Hoisting

Hoisting is JavaScript's default behavior of moving declarations to the top during memory creation phase.

Example:

```js
console.log(a)

var a = 10
```

Output:

```js
undefined
```

Reason:
`var` is initialized with `undefined` during memory creation phase.

---

# var vs let vs const

| Keyword | Hoisted | Initial Value |
|----------|----------|----------------|
| var      | Yes      | undefined      |
| let      | Yes      | uninitialized  |
| const    | Yes      | uninitialized  |

---

# Temporal Dead Zone (TDZ)

`let` and `const` remain in Temporal Dead Zone until their declaration line executes.

Accessing them before initialization causes a `ReferenceError`.

---

# Key Learnings

- JavaScript runs in two phases
- Variables are hoisted during memory creation
- `var` gets initialized with undefined
- `let` and `const` stay in TDZ
- Execution context controls code execution

---

# Common Interview Questions

1. What is execution context?
2. Explain hoisting internally
3. Difference between var and let
4. What is Temporal Dead Zone?
5. How JavaScript executes code internally?