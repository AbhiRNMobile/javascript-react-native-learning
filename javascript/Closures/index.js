function createCounter() {
  let count = 0

  return function () {
    count++
    console.log(count)
  }
}

const counter = createCounter()

counter()
counter()
counter()



function outer() {
  let name = "Abhi"

  return function inner() {
    console.log(name)
  }
}

const fn = outer()

fn()