# Arrow functions

AKA: _"fat arrows"_, _"anonymous functions"_.

Compared to a traditional function, **Arrow Functions** allow us to drop the `function () { return X; }` boilerplate, and express it as input/output.

| Pros | Cons |
|------------------------------------|------------------------------------|
| **Compact syntax 🎯:** simple operations can be expressed more readably | **Ill-suited to complex operations 👀:** shorter code isn't always more readable |
| **Anonymity 🕵️‍♀️:** preserves 'this' - no need for a `self` variable, or `.bind(this)` | **Harder to debug 🤷‍♂️:** reading the call stack (e.g. for an error in the console) when debugging isn't so informative |

---

### **Example 1:** 'double' function

```js
// traditional function:
function double (n) {
  return n * 2
}

// arrow function:
const double = n => n * 2

/**
 * Note: we don't need to write `return` - the results of RHS is returned
 */
```

### **Example 2:** passing multiple arguments
When passing multiple arguments to an arrow function, we have to wrap the argument list in paraentheses:

```js
// traditional function:
function getBio (name, age) {
  return `${name} is ${age} years old`
}

// arrow function:
const getBio = (name, age) => `${name} is ${age} years old`
```

### **Example 3:** function body covering multiple lines
When we need multiple lines, we can use the `{}` block syntax we are used to in traditional functions:

```js
// traditional function:
function SomeModal () {
  const self = this
  this.visible = false

  setTimeout(function () {
    /**
     * in here, `this` isn't SomeModal 😬
     * 
     * so that's why we store `this`
     * in a variable called `self` above
     */

    self.visible = true
  }, 1000)
}

// arrow function:
function SomeModal () {
  this.visible = false

  setTimeout(() => {
    /**
     * arrow functions are *anonymous* 🕵️‍♀️,
     * and `this` is inherited from the surrounding code (SomeModal)
     * 
     * we can use `this` in here as you'd expect 🎉
     */
    this.visible = true
  }, 1000)
}
```

---

## Further reading

*  [Arrow function expressions - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
