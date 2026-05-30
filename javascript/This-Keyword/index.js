// ========================================
// 1. Object Method Call
// ========================================

const user = {
name: "Abhi",

getName() {
console.log(this.name)
}
}

user.getName()

// Output:
// Abhi

// ========================================
// 2. Lost this Problem
// ========================================

const person = {
name: "Rahul",

sayName() {
console.log(this.name)
}
}

const fn = person.sayName

fn()

// Output:
// undefined

// ========================================
// 3. Arrow Function this
// ========================================

const student = {
name: "Aman",

printName: () => {
console.log(this.name)
}
}

student.printName()

// Output:
// undefined

// ========================================
// 4. setTimeout with Normal Function
// ========================================

const personOne = {
name: "Rahul",

sayName() {
setTimeout(function () {
console.log(this.name)
}, 1000)
}
}

personOne.sayName()

// Output:
// undefined

// ========================================
// 5. setTimeout with Arrow Function
// ========================================

const personTwo = {
name: "Rahul",

sayName() {
setTimeout(() => {
console.log(this.name)
}, 1000)
}
}

personTwo.sayName()

// Output:
// Rahul

// ========================================
// 6. call()
// ========================================

const employee = {
name: "John"
}

function greet() {
console.log(this.name)
}

greet.call(employee)

// Output:
// John

// ========================================
// 7. apply()
// ========================================

function print(age, city) {
console.log(this.name, age, city)
}

const userInfo = {
name: "Rahul"
}

print.apply(userInfo, [25, "Delhi"])

// Output:
// Rahul 25 Delhi

// ========================================
// 8. bind()
// ========================================

function showName() {
console.log(this.name)
}

const personInfo = {
name: "Abhi"
}

const boundFunction = showName.bind(personInfo)

boundFunction()

// Output:
// Abhi

// ========================================
// 9. bind Solves Lost this
// ========================================

const customer = {
name: "Rohit",

printName() {
console.log(this.name)
}
}

const safeFunction = customer.printName.bind(customer)

safeFunction()

// Output:
// Rohit
