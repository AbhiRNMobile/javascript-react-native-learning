console.log("Start")

setTimeout(() => {
  console.log("Timeout")
}, 0)

Promise.resolve().then(() => {
  console.log("Promise")
})

console.log("End")



console.log("A")

setTimeout(() => {
  console.log("B")
}, 0)

Promise.resolve().then(() => {
  console.log("C")
})

Promise.resolve().then(() => {
  console.log("D")
})

console.log("E")