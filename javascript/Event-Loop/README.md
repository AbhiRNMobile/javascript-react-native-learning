# JavaScript Event Loop

## What is Event Loop?

The Event Loop is a mechanism that allows JavaScript to handle asynchronous operations while remaining single-threaded.

It continuously monitors the Call Stack and queues, ensuring that asynchronous callbacks are executed at the correct time.

---

# Why Event Loop is Needed?

JavaScript is single-threaded, meaning it can execute only one task at a time.

Without the Event Loop, long-running tasks such as:
- API calls
- Timers
- User events

would block the execution of the entire application.

The Event Loop enables non-blocking asynchronous behavior.

---

# Core Components

## 1. Call Stack

The Call Stack manages function execution.

Every function call creates an execution context and is pushed onto the stack.

After execution completes, it is removed from the stack.

---

## 2. Web APIs

Web APIs are provided by the browser or runtime environment.

Examples:
- setTimeout
- fetch
- DOM events
- event listeners

These APIs execute outside the JavaScript engine.

---

## 3. Callback Queue (Macrotask Queue)

Completed asynchronous callbacks are placed in the Callback Queue.

Examples:
- setTimeout
- setInterval
- DOM events

---

## 4. Microtask Queue

Microtasks have higher priority than the Callback Queue.

Examples:
- Promise callbacks
- queueMicrotask

---

## 5. Event Loop

The Event Loop continuously checks:

1. Is the Call Stack empty?
2. If yes, process all Microtasks.
3. Then process tasks from the Callback Queue.

---

# Example

```js
console.log("Start")

setTimeout(() => {
  console.log("Timeout")
}, 0)

Promise.resolve().then(() => {
  console.log("Promise")
})

console.log("End")
```

Output:

```text
Start
End
Promise
Timeout
```

---

# Why Promise Executes Before setTimeout?

Promise callbacks are placed inside the Microtask Queue.

setTimeout callbacks are placed inside the Callback Queue.

The Event Loop always processes the entire Microtask Queue before processing the Callback Queue.

---

# Event Loop Flow

```text
Call Stack
     ↓
Web APIs
     ↓
Microtask Queue / Callback Queue
     ↓
Event Loop
     ↓
Call Stack
```

---

# Important Rules

1. JavaScript is single-threaded.
2. setTimeout does not execute immediately.
3. Promise callbacks have higher priority than setTimeout callbacks.
4. Event Loop processes Microtasks before Macrotasks.
5. Asynchronous operations are handled outside the Call Stack.

---

# Common Interview Questions

1. What is the Event Loop?
2. Why is the Event Loop needed?
3. Difference between Call Stack and Callback Queue?
4. Difference between Microtask Queue and Callback Queue?
5. Why does Promise execute before setTimeout?
6. Is JavaScript single-threaded or multi-threaded?