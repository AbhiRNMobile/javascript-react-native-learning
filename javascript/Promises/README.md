# JavaScript Promises

## What is a Promise?

A Promise is a JavaScript object that represents the future result of an asynchronous operation.

The result may not be available immediately but will be available at some point in the future.

---

## Why Were Promises Introduced?

Before Promises, asynchronous operations were handled using callbacks.

Example:

```js
getUser(function(user) {
  getPosts(user.id, function(posts) {
    getComments(posts[0].id, function(comments) {
      console.log(comments)
    })
  })
})
```

This creates deeply nested code known as:

* Callback Hell
* Pyramid of Doom

Promises provide a cleaner and more maintainable solution for handling asynchronous operations.

---

## Promise States

A Promise can exist in only one of the following states:

### 1. Pending

The operation is still in progress.

### 2. Fulfilled

The operation completed successfully.

### 3. Rejected

The operation failed.

---

## Creating a Promise

```js
const promise = new Promise((resolve, reject) => {
  resolve("Success")
})
```

---

## Consuming a Promise

### then()

Used when the Promise is fulfilled.

```js
promise.then((data) => {
  console.log(data)
})
```

### catch()

Used when the Promise is rejected.

```js
promise.catch((error) => {
  console.log(error)
})
```

---

## Promise Flow

```text
Pending
   ↓
Fulfilled
   ↓
then()

OR

Pending
   ↓
Rejected
   ↓
catch()
```

---

## Promise Constructor Behaviour

The Promise constructor executes synchronously.

Example:

```js
console.log("Start")

const promise = new Promise((resolve) => {
  console.log("Inside Promise")

  resolve("Success")
})

console.log("End")
```

Output:

```text
Start
Inside Promise
End
```

The Promise constructor runs immediately during execution.

---

## Promise Callbacks

Methods such as:

* then()
* catch()
* finally()

execute asynchronously.

Their callbacks are placed inside the Microtask Queue.

---

## Promise and Event Loop

Example:

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

## Why Promise Executes Before setTimeout

Promise callbacks are stored inside the Microtask Queue.

setTimeout callbacks are stored inside the Callback Queue (Macrotask Queue).

The Event Loop always processes all Microtasks before processing the Callback Queue.

---

## Promise Chaining

Each `.then()` returns a new Promise.

The value returned from one `.then()` becomes the input of the next `.then()`.

Example:

```js
Promise.resolve(5)
  .then((num) => {
    return num + 5
  })
  .then((num) => {
    return num * 2
  })
```

Flow:

```text
5
↓
10
↓
20
```

---

## Important Rule

```text
Return value from one then()
↓
Input for next then()
```

---

## What Happens If Nothing Is Returned?

```js
Promise.resolve(5)
  .then((num) => {
    console.log(num)
  })
  .then((num) => {
    console.log(num)
  })
```

Output:

```text
5
undefined
```

Reason:

If no value is returned, JavaScript automatically returns:

```js
undefined
```

The next `.then()` receives that value.

---

## Promise Error Handling

Errors are handled using `.catch()`.

Example:

```js
Promise.resolve("Data")
  .then(() => {
    throw new Error("Something went wrong")
  })
  .catch((error) => {
    console.log(error.message)
  })
```

Output:

```text
Something went wrong
```

---

## Error Flow

```text
Error Thrown
      ↓
Promise Rejected
      ↓
Remaining then() skipped
      ↓
Nearest catch() executed
```

---

## Promise.all()

Used when all promises must succeed.

```js
Promise.all([
  fetchUsers(),
  fetchPosts(),
  fetchComments()
])
```

If any promise fails, the entire operation fails.

---

## Promise.allSettled()

Used when all promises should complete regardless of success or failure.

```js
Promise.allSettled([
  promise1,
  promise2,
  promise3
])
```

---

## Promise.race()

Returns the result of the first completed promise.

```js
Promise.race([
  promise1,
  promise2
])
```

---

## Promise.any()

Returns the first successful promise.

```js
Promise.any([
  promise1,
  promise2,
  promise3
])
```

---

## Promise API Comparison

| Method             | Behaviour                     |
| ------------------ | ----------------------------- |
| Promise.all        | All promises must succeed     |
| Promise.allSettled | Waits for all promises        |
| Promise.race       | First completed promise wins  |
| Promise.any        | First successful promise wins |

---

## Real World React Native Usage

Promises are commonly used with:

* fetch()
* axios()
* AsyncStorage
* Firebase
* SQLite

Example:

```js
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
```

---

## Key Learnings

* A Promise represents a future value.
* Promises solve Callback Hell.
* Promise states are Pending, Fulfilled and Rejected.
* Promise constructor executes synchronously.
* then(), catch() and finally() execute asynchronously.
* Promise callbacks are stored in the Microtask Queue.
* Every then() returns a new Promise.
* Returned values are passed to the next then().
* Errors propagate to the nearest catch().
* Promise APIs help manage multiple asynchronous operations.

---

## Common Interview Questions

1. What is a Promise?
2. Why were Promises introduced?
3. What are Promise states?
4. Difference between resolve() and reject()?
5. Is Promise constructor synchronous or asynchronous?
6. What does then() return?
7. How does Promise chaining work?
8. What happens if a then() does not return anything?
9. Why does Promise execute before setTimeout?
10. How does catch() handle errors?
11. Difference between Promise.all() and Promise.allSettled()?
12. Difference between Promise.race() and Promise.any()?
