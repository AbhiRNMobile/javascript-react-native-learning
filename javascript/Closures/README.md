# JavaScript Closures

## What is Closure?

A closure is created when an inner function remembers variables from its parent scope even after the parent function has completed execution.

Closures are possible because of lexical scoping.

---

# Why Closures Exist?

Normally, when a function completes execution:
- its execution context is removed
- local variables are destroyed
- memory is cleaned

However, if an inner function still depends on parent variables, JavaScript preserves those variables in memory.

This preserved relationship is called a Closure.

---

# Example

```js
function outer() {
  let name = "Abhi"

  return function inner() {
    console.log(name)
  }
}

const fn = outer()

fn()
```

Output:

```text
Abhi
```

---

# Internal Working

## Step 1

`outer()` executes.

Memory:

```text
name = "Abhi"
```

---

## Step 2

`outer()` returns `inner()` function.

```js
const fn = outer()
```

Now:

```text
fn = inner function
```

---

## Step 3

`inner()` still uses:

```js
name
```

from parent scope.

Because of this dependency, JavaScript does not destroy the variable.

The parent scope memory is preserved.

---

# Closure Mental Model

```text
Function + Remembered Parent Variables
```

---

# Real World Use Cases

## 1. Counter

```js
function createCounter() {
  let count = 0

  return function () {
    count++
    console.log(count)
  }
}
```

Closure preserves `count` between function calls.

---

## 2. React State

```js
const [count, setCount] = useState(0)
```

React internally uses closures to preserve state values between renders.

---

## 3. Event Handlers

```js
button.onclick = function () {
  console.log(username)
}
```

Event handlers remember variables from parent scope even after execution completes.

---

# Advantages of Closures

- Data persistence
- Data privacy
- State preservation
- Useful in callbacks and event handlers

---

# Important Points

- Closures depend on lexical scope
- Inner functions can access parent variables
- Parent memory can survive after execution
- Closures preserve references, not copies

---

# Common Interview Questions

1. What is Closure?
2. Why are closures needed?
3. How closures work internally?
4. Real world use cases of closures?
5. How React uses closures?