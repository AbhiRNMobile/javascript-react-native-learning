// ========================================
// 1. Async Function Always Returns Promise
// ========================================

async function test() {
return 100
}

test().then((data) => {
console.log(data)
})

// Output:
// 100

// ========================================
// 2. Basic Await Example
// ========================================

function getUser() {
return Promise.resolve("Abhi")
}

async function getData() {
const user = await getUser()

console.log(user)
}

getData()

// Output:
// Abhi

// ========================================
// 3. Await with Promise.resolve()
// ========================================

async function successExample() {
const data = await Promise.resolve("Success")

console.log(data)
}

successExample()

// Output:
// Success

// ========================================
// 4. Error Handling with try/catch
// ========================================

async function errorExample() {
try {
await Promise.reject("Failed")
} catch (error) {
console.log(error)
}
}

errorExample()

// Output:
// Failed

// ========================================
// 5. Sequential Execution
// ========================================

async function sequentialExecution() {
const users = await Promise.resolve("Users")
const posts = await Promise.resolve("Posts")
const comments = await Promise.resolve("Comments")

console.log(users)
console.log(posts)
console.log(comments)
}

sequentialExecution()

// ========================================
// 6. Parallel Execution
// ========================================

async function parallelExecution() {
const [users, posts, comments] = await Promise.all([
Promise.resolve("Users"),
Promise.resolve("Posts"),
Promise.resolve("Comments")
])

console.log(users)
console.log(posts)
console.log(comments)
}

parallelExecution()

// ========================================
// 7. Real World API Example
// ========================================

async function fetchUsers() {
try {
const response = await fetch(
"https://jsonplaceholder.typicode.com/users"
)

```
const data = await response.json()

console.log(data)
```

} catch (error) {
console.log(error)
}
}

// fetchUsers()
