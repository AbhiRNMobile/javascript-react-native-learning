# JavaScript This Keyword

## What is this?

`this` is a special keyword in JavaScript.

Its value is determined by how a function is called, not where the function is defined.

---

## Important Rule

```text
this is decided at call time.
```

JavaScript determines the value of `this` based on the caller of the function.

---

## Object Method Call

```js
const user = {
  name: "Abhi",

  getName() {
    console.log(this.name)
  }
}

user.getName()
```

Output:

```text
Abhi
```

Reason:

```js
this === user
```

---

## Lost this Problem

```js
const person = {
  name: "Rahul",

  sayName() {
    console.log(this.name)
  }
}

const fn = person.sayName

fn()
```

Output:

```text
undefined
```

Reason:

The function is called independently.

There is no object calling the function.

Therefore:

```js
this !== person
```

---

## Arrow Function and this

### Important Rule

```text
Arrow functions do not have their own this.
```

Arrow functions inherit `this` from their surrounding scope.

This behavior is called:

```text
Lexical this
```

---

## Arrow Function Example

```js
const person = {
  name: "Rahul",

  sayName: () => {
    console.log(this.name)
  }
}

person.sayName()
```

Output:

```text
undefined
```

Reason:

Arrow functions do not create their own `this`.

---

## Normal Function vs Arrow Function

### Normal Function

```js
const person = {
  name: "Rahul",

  sayName() {
    console.log(this.name)
  }
}
```

Rule:

```text
this is decided by the caller.
```

---

### Arrow Function

```js
const person = {
  name: "Rahul",

  sayName: () => {
    console.log(this.name)
  }
}
```

Rule:

```text
this is inherited from the parent scope.
```

---

## setTimeout with Normal Function

```js
const person = {
  name: "Rahul",

  sayName() {
    setTimeout(function () {
      console.log(this.name)
    }, 1000)
  }
}

person.sayName()
```

Output:

```text
undefined
```

Reason:

The callback is a normal function and loses its original `this`.

---

## setTimeout with Arrow Function

```js
const person = {
  name: "Rahul",

  sayName() {
    setTimeout(() => {
      console.log(this.name)
    }, 1000)
  }
}

person.sayName()
```

Output:

```text
Rahul
```

Reason:

Arrow functions inherit `this` from the parent function.

---

# call()

`call()` invokes a function immediately and allows us to manually set the value of `this`.

Example:

```js
const person = {
  name: "Rahul"
}

function greet() {
  console.log(this.name)
}

greet.call(person)
```

Output:

```text
Rahul
```

---

## call() with Arguments

```js
function print(age, city) {
  console.log(this.name, age, city)
}

const person = {
  name: "Rahul"
}

print.call(person, 25, "Delhi")
```

Output:

```text
Rahul 25 Delhi
```

---

# apply()

`apply()` works like `call()`.

The difference is that arguments are passed as an array.

Example:

```js
function print(age, city) {
  console.log(this.name, age, city)
}

const person = {
  name: "Rahul"
}

print.apply(person, [25, "Delhi"])
```

Output:

```text
Rahul 25 Delhi
```

---

# bind()

`bind()` does not execute the function immediately.

It returns a new function with `this` permanently bound.

Example:

```js
const person = {
  name: "Rahul"
}

function greet() {
  console.log(this.name)
}

const fn = greet.bind(person)

fn()
```

Output:

```text
Rahul
```

---

## Why bind()?

It helps solve the Lost `this` Problem.

Example:

```js
const person = {
  name: "Rahul",

  sayName() {
    console.log(this.name)
  }
}

const fn = person.sayName.bind(person)

fn()
```

Output:

```text
Rahul
```

---

# call vs apply vs bind

| Method | Sets this | Executes Immediately | Arguments            |
| ------ | --------- | -------------------- | -------------------- |
| call   | Yes       | Yes                  | Individual           |
| apply  | Yes       | Yes                  | Array                |
| bind   | Yes       | No                   | Returns New Function |

---

## Real World React Native Usage

Used in:

* Event Handlers
* setTimeout
* setInterval
* Callback Functions
* Class Components

Arrow functions and bind are commonly used to avoid losing `this`.

---

## Key Learnings

* `this` is decided at call time.
* The caller determines the value of `this`.
* Object method calls assign `this` to the object.
* Standalone function calls lose the original `this`.
* Arrow functions do not create their own `this`.
* Arrow functions use lexical `this`.
* `call()` executes immediately and sets `this`.
* `apply()` executes immediately and accepts arguments as an array.
* `bind()` returns a new function and executes later.

---

## Common Interview Questions

1. What is this in JavaScript?
2. How is this determined?
3. What is the Lost this Problem?
4. What is lexical this?
5. Difference between normal and arrow functions?
6. What is call()?
7. What is apply()?
8. What is bind()?
9. Difference between call(), apply() and bind()?
10. Why are arrow functions used inside setTimeout?
