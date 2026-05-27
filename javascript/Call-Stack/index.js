function one() {
  console.log("One")

  two()

  console.log("After Two")
}

function two() {
  console.log("Two")

  three()

  console.log("After Three")
}

function three() {
  console.log("Three")
}

console.log("Start")

one()

console.log("End")