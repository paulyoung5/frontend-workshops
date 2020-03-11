# Objects

## New shorthands

To store a variable called `name` in a property called `name`, you'd normally do:

```js
const name = 'john'

const person = {
  height: 180,
  eyeColor: 'blue',
  name: name
}
```

A new shorthand syntax can be used now when **the variable name is the same as the name of the property**:

```js
const name = 'john'

const person = {
  height: 180,
  eyeColor: 'blue',
  name
}
```

### Storing functions

To store a function within a given key on an object, you'd normally do:

```js
const library = {
  books: [],
  addBook: function (book) {
    this.books.push(book)
  },
  getBookCount: function getBookCount () {
    return this.books.length
  }
}
```

A shorthand syntax has been created to simplify this operation:

```js
const library = {
  books: [],
  addBook (book) {
    this.books.push(book)
  },
  getBookCount () {
    return this.books.length
  }
}
```

## Destructuring objects

Often, we want to use a handful of specific properties of an object in code:

```js
const album = {
  title: 'Chromatica',
  artist: 'Lady Gaga',
  released: new Date(2020, 3, 10)
}

console.log(`${album.artist}'s new album, ${album.title} is out ${album.released.getMonth()} ${album.released.getDay()}`) // "Lady Gaga's new album, Chromatica is out April 10"
```

Rather than needing to write `album.` each time in our string, we might make individual variables for the parts we care about, making things more readable:

```js
const artist = album.artist
const title = album.title
const released = album.released

console.log(`${artist}'s new album, ${title} is out ${released.getMonth()} ${released.getDay()}`)
```

We can use **destructuring** to declare these variables in a concise way:

```js
const { artist, title, released } = album

console.log(`${artist}'s new album, ${title} is out ${released.getMonth()} ${released.getDay()}`)
```

### What about when we try to destructure a property that doesn't exist?

When you try to acces a property of an object that doesn't exist, its value is `undefined`. The same is true for destructuring:

```js
console.log(album.genre) // "undefined"

const { genre } = album

console.log(genre) // "undefined"
```

If we don't have a value for `genre`, we might like to have a fallback value. Normally we'd first check whether it's `undefined` and return the 'fallback' value accordingly:

```js
const genre = (typeof album.genre !== 'undefined') ? album.genre : 'pop'

console.log(genre) // "pop"
```

One advantage of using destructuring syntax is that we can provide a **default value**:

```js
const { genre = 'pop' } = album

console.log(genre) // "pop"
```

This is more readable and the fallback value is declared with the variable.

## Spreading objects

A new **spread syntax** makes object merging, shallow-cloning and transforming easier.

To shallow-clone an object and add additional properties, you might do

```js
const myObj = {
  a: 1,
  b: 2
}

// create a new object with `myObj` properties and a new `c` property:
const newObj = Object.assign({}, myObj, {
  c: 3
})
```

This syntax is a bit verbose though. This can be simplified with the **spread operator** `...`:

```js
const myObj = {
  a: 1,
  b: 2
}

// create a new object with `myObj` properties and a new `c` property:
const newObj = {
  ...myObj,
  c: 3
})
```

We can do this with as many objects as we want:

```js
const objOne = {
  a: 1
}

const objTwo = {
  b: 2
}

const objThree = {
  c: 3
}

const objFour = {
  d: 4
}

const combined = {
  ...objOne,
  ...objTwo,
  ...objThree,
  ...objFour
}
```

**Note:** when merging objects containing properties with the same name, the value of that property is taken from the last object to be spread in.

---

## Browser Support

Check out the [Browser Compatability](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) section on MDN.
