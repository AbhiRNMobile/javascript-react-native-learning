// ========================================
// 1. Basic Promise
// ========================================

const basicPromise = new Promise((resolve, reject) => {
  resolve("Promise Resolved Successfully")
})

basicPromise.then((data) => {
  console.log(data)
})

// ========================================
// 2. Promise Constructor (Synchronous)
// ========================================

console.log("Start")

const promiseConstructor = new Promise((resolve) => {
  console.log("Inside Promise")

  resolve("Success")
})

console.log("End")

// Output:
// Start
// Inside Promise
// End

// ========================================
// 3. Promise + Event Loop
// ========================================

console.log("A")

setTimeout(() => {
  console.log("Timeout")
}, 0)

Promise.resolve().then(() => {
  console.log("Promise")
})

console.log("B")

// Output:
// A
// B
// Promise
// Timeout

// ========================================
// 4. Promise Chaining
// ========================================

Promise.resolve(5)
  .then((num) => {
    console.log(num)
    return num + 5
  })
  .then((num) => {
    console.log(num)
    return num * 2
  })
  .then((num) => {
    console.log(num)
  })

// Output:
// 5
// 10
// 20

// ========================================
// 5. No Return Example
// ========================================

Promise.resolve(5)
  .then((num) => {
    console.log(num)
  })
  .then((num) => {
    console.log(num)
  })

// Output:
// 5
// undefined

// ========================================
// 6. Promise Error Handling
// ========================================

Promise.resolve("Data")
  .then((data) => {
    console.log(data)

    throw new Error("Something went wrong")
  })
  .catch((error) => {
    console.log(error.message)
  })

// Output:
// Data
// Something went wrong

// ========================================
// 7. Promise.all()
// ========================================

Promise.all([
  Promise.resolve("User"),
  Promise.resolve("Posts"),
  Promise.resolve("Comments")
]).then((result) => {
  console.log(result)
})

// Output:
// ["User", "Posts", "Comments"]

// ========================================
// 8. Promise.allSettled()
// ========================================

Promise.allSettled([
  Promise.resolve("User"),
  Promise.reject("API Failed"),
  Promise.resolve("Comments")
]).then((result) => {
  console.log(result)
})

// ========================================
// 9. Promise.race()
// ========================================

Promise.race([
  new Promise((resolve) =>
    setTimeout(() => resolve("First"), 1000)
  ),
  new Promise((resolve) =>
    setTimeout(() => resolve("Second"), 2000)
  )
]).then((result) => {
  console.log(result)
})

// Output:
// First

// ========================================
// 10. Promise.any()
// ========================================

Promise.any([
  Promise.reject("Fail 1"),
  Promise.resolve("Success"),
  Promise.reject("Fail 2")
]).then((result) => {
  console.log(result)
})

// Output:
// Success