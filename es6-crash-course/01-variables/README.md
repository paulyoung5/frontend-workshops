# Variables

## tl;dr

📣 Use `const` as often as possible, and `let` when you really need to mutate a variable.

Avoid using `var`, and be cautious when refactoring existing usages of `var`.

---

## `var` and its downsides

Usually when declaring a variable in JS, you'd use `var`:

```js
var plant = 'fern'
```

`var` bears more than a few gotchas that needlessly trip developers up, and leads to code that is more difficult to understand and maintain.

### `var` variables can be **re-declared**

This won't produce any errors:

```js
var plant = 'fern'
var plant = 'ivy'
```

While this is _fine_ for the above code example, imagine working with a ~1000 line long file - trying to work out this variable's beginning and progress through the code becomes unnecessarily difficult.

### Scoping with `var` is complicated and unintuitive

Variables declared with `var` also have an unintuitive scope - they can often be used **before being declared**:

```js
var drink

console.log(drink) // "cola", even though it doesn't appear to have a value yet

drink = 'cola'
```

JavaScript is actually reading this code in a **different order** to which it is written, because of "hoisting". Maintaining code becomes difficult because it's hard to trace where the value is changed.

## Introducing... `let` and `const`

`let` and `const` are 2 new ways of declaring variables in JavaScript. They are not 'hoisted' by JavaScript, and code flow is as expected.

Their main difference is that variables declared with `let` can be updated, and those declared with `const` cannot:

```js
let x = 1
x = 2 // ✅

const y = 3
y = 4 // 🚫 TypeError: invalid assignment to const `a`
```

`const` is especially useful and should be your **go-to** when declaring a variable, as tracking its value is much simpler.

When declaring an object with `const`, you can **still** change properties of the object; you cannot however give it a new object or value:

```js
const person = {
  name: 'Jane'
}

person.name = 'Jane Doe' // ✅

person = {
  name: 'Jane Doe',
  age: 46
} // 🚫 TypeError: invalid assignment to const `person`
```

---

## Browser Support

![Browser support for `let`](https://res.cloudinary.com/ireaderinokun/image/upload/v1583930695183/caniuse-embed/all/let.png)


![Browser support for `const`](https://res.cloudinary.com/ireaderinokun/image/upload/v1583930695183/caniuse-embed/all/const.png)