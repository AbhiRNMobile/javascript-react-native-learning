// ========================================
// 1. Object Property Lookup
// ========================================

const user = {
name: "Rahul"
}

console.log(user.name)
console.log(user.toString)

// ========================================
// 2. Prototype Chain
// ========================================

console.log(user.xyz)

// Output:
// undefined

// ========================================
// 3. Object.prototype
// ========================================

console.log(user.hasOwnProperty)

// ========================================
// 4. Array.prototype
// ========================================

const arr = [1, 2, 3]

console.log(arr.map)
console.log(arr.filter)
console.log(arr.reduce)

// ========================================
// 5. **proto**
// ========================================

console.log(arr.**proto** === Array.prototype)

console.log(user.**proto** === Object.prototype)

// Output:
// true
// true

// ========================================
// 6. Constructor Function
// ========================================

function Person(name) {
this.name = name
}

const user1 = new Person("Rahul")

console.log(user1)

// ========================================
// 7. prototype vs **proto**
// ========================================

console.log(user1.**proto** === Person.prototype)

// Output:
// true

// ========================================
// 8. Shared Methods
// ========================================

Person.prototype.sayHello = function () {
console.log(`Hello ${this.name}`)
}

const user2 = new Person("Abhi")

user1.sayHello()
user2.sayHello()

// Output:
// Hello Rahul
// Hello Abhi

// ========================================
// 9. Shared Prototype
// ========================================

console.log(user1.**proto** === user2.**proto**)

// Output:
// true

// ========================================
// 10. Prototype Property Lookup
// ========================================

Person.prototype.country = "India"

console.log(user1.country)

// Output:
// India

// ========================================
// 11. Prototype Shadowing
// ========================================

user1.country = "USA"

console.log(user1.country)

// Output:
// USA

// ========================================
// 12. hasOwnProperty
// ========================================

console.log(user1.hasOwnProperty("name"))
console.log(user1.hasOwnProperty("country"))

// Output:
// true
// true (because country was overridden on user1)
