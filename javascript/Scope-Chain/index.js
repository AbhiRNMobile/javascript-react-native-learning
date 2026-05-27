let username = "Abhi"

function outer() {
  let age = 24

  function inner() {
    let city = "Delhi"

    console.log(username)
    console.log(age)
    console.log(city)
  }

  inner()
}

outer()