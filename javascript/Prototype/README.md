# JavaScript Prototype and Prototype Chain

## What is Prototype?

A prototype is an object from which other objects inherit properties and methods.

When JavaScript cannot find a property on an object, it looks for it in the object's prototype.

---

## Why Do We Need Prototypes?

Prototypes allow multiple objects to share the same methods instead of creating separate copies for every object.

This improves memory efficiency.

---

## Property Lookup

JavaScript follows this process:

```text
Object
 ↓
Prototype
 ↓
Prototype of Prototype
 ↓
null
```

If a property is found, the search stops.

If the property is not found, JavaScript continues searching through the prototype chain.

---

## Example

```js
const user = {
  name: "Rahul"
}

console.log(user.name)
console.log(user.toString)
```

### Search Process

```text
user.name
↓
Found inside user object

user.toString
↓
Not found in user
↓
Found in Object.prototype
```

---

# Prototype Chain

A prototype chain is the mechanism by which JavaScript searches for properties and methods.

Example:

```text
Object
 ↓
Prototype
 ↓
Prototype of Prototype
 ↓
null
```

If JavaScript reaches `null`, the search stops and `undefined` is returned.

---

## Example

```js
const user = {
  name: "Rahul"
}

console.log(user.xyz)
```

Output:

```text
undefined
```

Reason:

```text
user
 ↓
Object.prototype
 ↓
null
 ↓
undefined
```

---

# Object.prototype

Every normal object is linked to:

```text
Object.prototype
```

Example:

```js
const user = {
  name: "Rahul"
}

console.log(user.hasOwnProperty)
```

Search:

```text
user
 ↓
Object.prototype
```

---

# Array.prototype

Arrays have a different prototype chain.

```text
arr
 ↓
Array.prototype
 ↓
Object.prototype
 ↓
null
```

Methods like:

```js
map()
filter()
reduce()
forEach()
```

come from:

```js
Array.prototype
```

---

## Example

```js
const arr = [1, 2, 3]

arr.map(x => x * 2)
```

Search:

```text
arr
 ↓
Array.prototype
 ↓
map found
```

---

# **proto**

`__proto__` is a reference to an object's prototype.

Example:

```js
const arr = [1, 2, 3]

console.log(arr.__proto__ === Array.prototype)
```

Output:

```text
true
```

---

## Object Example

```js
const user = {
  name: "Rahul"
}

console.log(user.__proto__ === Object.prototype)
```

Output:

```text
true
```

---

# Constructor Functions

A constructor function is a regular JavaScript function used with the `new` keyword to create objects.

Example:

```js
function Person(name) {
  this.name = name
}
```

---

## Creating Objects

```js
const user = new Person("Rahul")
```

When `new` is used:

1. JavaScript creates a new object.
2. Links it to `Person.prototype`.
3. Executes the constructor function.
4. Returns the new object.

---

# prototype vs **proto**

## prototype

Exists on functions.

```js
Person.prototype
```

Used as a blueprint for objects created by that constructor.

---

## **proto**

Exists on objects.

```js
user.__proto__
```

Points to the object's prototype.

---

# Shared Methods Using Prototype

```js
function Person(name) {
  this.name = name
}

Person.prototype.sayHello = function () {
  console.log(`Hello ${this.name}`)
}
```

All objects created using `Person` share the same `sayHello` method.

---

## Example

```js
const user1 = new Person("Rahul")
const user2 = new Person("Abhi")
```

Both objects use:

```js
Person.prototype.sayHello
```

Only one copy exists in memory.

---

# Property Lookup with Prototype

```js
function Person(name) {
  this.name = name
}

Person.prototype.country = "India"

const user = new Person("Rahul")

console.log(user.country)
```

Search:

```text
user
 ↓
country not found
 ↓
Person.prototype
 ↓
country found
```

Output:

```text
India
```

---

# Prototype Shadowing

```js
function Person(name) {
  this.name = name
}

Person.prototype.country = "India"

const user = new Person("Rahul")

user.country = "USA"

console.log(user.country)
```

Output:

```text
USA
```

Reason:

JavaScript finds the property on the object and stops searching.

---

# hasOwnProperty()

Checks only the object's own properties.

Example:

```js
function Person(name) {
  this.name = name
}

Person.prototype.country = "India"

const user = new Person("Rahul")

console.log(user.hasOwnProperty("name"))
console.log(user.hasOwnProperty("country"))
```

Output:

```text
true
false
```

Reason:

```text
name
↓
Own property

country
↓
Prototype property
```

---

# Key Learnings

* JavaScript uses prototype-based inheritance.
* Objects inherit properties and methods from prototypes.
* Arrays inherit from Array.prototype.
* Objects inherit from Object.prototype.
* **proto** points to an object's prototype.
* prototype exists on constructor functions.
* Prototype chain continues until null.
* Prototypes improve memory efficiency by sharing methods.
* hasOwnProperty checks only own properties.

---

# Common Interview Questions

1. What is a prototype?
2. What is a prototype chain?
3. Difference between prototype and **proto**?
4. What is Object.prototype?
5. What is Array.prototype?
6. How does property lookup work?
7. What is prototype shadowing?
8. What is a constructor function?
9. Why do we use prototypes?
10. What does hasOwnProperty do?












//learning