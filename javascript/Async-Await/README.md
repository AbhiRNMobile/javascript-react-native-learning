# JavaScript Async / Await

## What is Async / Await?

Async/Await is a cleaner and more readable way to work with Promises.

It allows asynchronous code to be written in a synchronous-looking manner.

---

## Why Async / Await?

Before Async/Await, asynchronous operations were handled using Promise chaining.

Example:

```js
fetchUsers()
  .then((users) => {
    return fetchPosts(users.id)
  })
  .then((posts) => {
    return fetchComments(posts.id)
  })
```

As Promise chains become larger, code becomes harder to read and maintain.

Async/Await provides a simpler and more readable approach.

---

## Async Function

The `async` keyword is used to create an asynchronous function.

Example:

```js
async function greet() {
  return "Hello"
}
```

---

## Important Rule

An async function always returns a Promise.

Example:

```js
async function test() {
  return 100
}
```

Internally JavaScript behaves like:

```js
function test() {
  return Promise.resolve(100)
}
```

---

## Await Keyword

The `await` keyword waits for a Promise to resolve.

Example:

```js
const data = await fetchUsers()
```

Execution pauses until the Promise is settled.

---

## How Await Works

The `await` keyword can only be used inside an async function.

When the Promise resolves, await returns the resolved value.

---

## Example

```js
function getUser() {
  return Promise.resolve("Abhi")
}

async function test() {
  const user = await getUser()

  console.log(user)
}

test()
```

Output:

```text
Abhi
```

---

## Async/Await vs Promises

### Promise Style

```js
fetchUsers()
  .then((users) => {
    console.log(users)
  })
```

### Async/Await Style

```js
const users = await fetchUsers()

console.log(users)
```

Async/Await improves readability and maintainability.

---

## Error Handling

Errors are handled using try/catch.

Example:

```js
async function getData() {
  try {
    const data = await Promise.resolve("Success")

    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
```

---

## Handling Rejected Promises

```js
async function test() {
  try {
    await Promise.reject("Failed")
  } catch (error) {
    console.log(error)
  }
}
```

Output:

```text
Failed
```

When an awaited Promise is rejected, execution jumps directly to the catch block.

---

## Sequential Execution

```js
const users = await getUsers()
const posts = await getPosts()
const comments = await getComments()
```

Each operation waits for the previous one to complete.

### Total Time

```text
2s + 2s + 2s = 6s
```

---

## Parallel Execution

```js
const [users, posts, comments] = await Promise.all([
  getUsers(),
  getPosts(),
  getComments()
])
```

All operations run simultaneously.

### Total Time

```text
Maximum execution time among all promises
```

Example:

```text
2s
```

---

## When to Use Sequential Execution?

Use sequential execution when one operation depends on another.

Example:

```js
const user = await getUser()
const posts = await getPosts(user.id)
```

---

## When to Use Parallel Execution?

Use parallel execution when operations are independent.

Example:

```js
const [users, posts, comments] = await Promise.all([
  getUsers(),
  getPosts(),
  getComments()
])
```

---

## Real World React Native Usage

Async/Await is commonly used with:

* fetch()
* axios()
* AsyncStorage
* Firebase
* SQLite

Example:

```js
const getUsers = async () => {
  try {
    const response = await fetch(url)

    const data = await response.json()

    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
```

---

## Key Learnings

* Async/Await is built on top of Promises.
* Async functions always return a Promise.
* Await waits for Promise resolution.
* Await can only be used inside async functions.
* Rejected Promises are handled using try/catch.
* Promise.all can be used for parallel execution.
* Async/Await improves code readability.

---

## Common Interview Questions

1. What is Async/Await?
2. Why was Async/Await introduced?
3. What does an async function return?
4. What does await do?
5. Can await be used outside an async function?
6. How does Async/Await work internally?
7. How do you handle errors in Async/Await?
8. Difference between Promises and Async/Await?
9. What is sequential execution?
10. What is parallel execution?
11. Why use Promise.all with Async/Await?
