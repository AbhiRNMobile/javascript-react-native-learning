# JavaScript Call Stack

## What is Call Stack?

Call Stack is a stack data structure used by JavaScript to manage function execution.

JavaScript follows the LIFO (Last In First Out) principle.

---

# Why Call Stack is Needed?

Call Stack helps JavaScript:
- track function execution
- manage execution order
- know which function is currently running

---

# Function Execution Flow

When a function is called:
1. A new execution context is created
2. It is pushed into the call stack
3. Function executes
4. After completion, it is removed from the stack

---

# Example

```js
function one() {
  two()
}

function two() {
  three()
}

function three() {
  console.log("Hello")
}

one()
```

---

# Internal Call Stack Flow

```text
[ Global ]
[ one ]
[ two ]
[ three ]
```

After completion:

```text
[ Global ]
```

---

# Function Execution Context

Each function gets:
- its own memory space
- its own execution context

Variables inside functions remain local to that function.

---

# Stack Overflow

If functions keep calling infinitely, stack memory becomes full.

Example:

```js
function test() {
  test()
}

test()
```

Error:

```text
Maximum call stack size exceeded
```

---

# Recursion

Recursion means a function calling itself.

Example:

```js
function count(n) {
  if (n === 0) return

  console.log(n)

  count(n - 1)
}

count(3)
```

Output:

```text
3
2
1
```

---

# Key Learnings

- JavaScript uses call stack for execution
- Functions create execution contexts
- JavaScript follows LIFO principle
- Stack manages execution order
- Infinite recursion causes stack overflow

---

# Common Interview Questions

1. What is Call Stack?
2. How JavaScript manages function execution?
3. What is stack overflow?
4. Explain recursion internally
5. What happens internally during function calls?