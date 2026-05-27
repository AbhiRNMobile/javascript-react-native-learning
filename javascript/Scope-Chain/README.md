# JavaScript Scope Chain & Lexical Environment

## What is Scope?

Scope defines the accessibility and visibility of variables in JavaScript.

It determines where variables can be accessed in the code.

---

# Lexical Scope

JavaScript uses lexical scoping.

This means scope is determined by the physical placement of code during writing time.

Inner functions can access variables from parent scopes.

---

# Scope Chain

Scope Chain is the mechanism JavaScript uses to resolve variables.

If a variable is not found in the current scope, JavaScript searches in parent scopes until it reaches the global scope.

---

# Example

```js
let a = 100

function first() {
  let b = 200

  function second() {
    let c = 300

    console.log(a)
    console.log(b)
    console.log(c)
  }

  second()
}

first()
```

Output:

```text
100
200
300
```

---

# Variable Resolution Flow

JavaScript searches variables in this order:

```text
Current Scope
   ↓
Parent Scope
   ↓
Global Scope
```

If variable is not found:

```text
ReferenceError
```

---

# Important Rules

- Child functions can access parent variables
- Parent functions cannot access child variables
- Scope chain works upward only
- JavaScript uses lexical scoping

---

# Lexical Environment

Each execution context contains:
- local memory
- reference to parent lexical environment

This enables scope chaining.

---

# Key Learnings

- Scope controls variable accessibility
- JavaScript uses lexical scoping
- Scope chain resolves variables
- Inner functions access parent scope variables

---

# Common Interview Questions

1. What is Scope?
2. What is Lexical Scope?
3. What is Scope Chain?
4. How JavaScript resolves variables?
5. What is Lexical Environment?