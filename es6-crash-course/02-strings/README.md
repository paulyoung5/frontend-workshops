# Strings

The biggest new thing for strings in ES6 is **Template Literals**.

Template literals are strings written with backticks (`\``) rather than single or double quotes. They bring a few new features to strings, and simplify many common tasks.

## Interpolation with Template Literals

In PHP  and other languages, it's possible to **interpolate** strings with a placeholder-like syntax:

```php
$name = 'Paul';
$greeting = "Welcome back, {$name}!"
```

Before ES6, to achieve the same result in JavaScript, you'd do something like this:

```js
var name = 'Paul'
var greeting = 'Welcome back, ' + name
```

With **Template Literals**, we can now interpolate with a similar placeholder style in JavaScript:

```js
const name = 'Paul'
const greeting = `Welcome back, ${name}`
```

## Multi-line strings

Storing a multi-line string is tedious in earlier versions of JS, leading to examples like this:

```js
var list = "Shopping list \
\
- apple \
- banana \
- grapes";
```

Above, we need a `\` to denote the end of each line which gets messy quickly.

**Template Literals** greatly simplify working with multiline strings, it _just works_:

```js
const list = `Shopping list

- apple
- banana
- grapes`
```

The above is likely to be enough for now, but read on for more new cool stuff possible with strings.

## More: Tagged templates

**Tagged templates** are another new feature, where we can prepend a function name onto a template literal:

```js
function shout (strings) {
  // strings is an array of all strings in this literal
  // we only have one:
  return strings[0].toUpperCase()
}

const greeting = shout`this is a lowercase sentence made uppercase`
// THIS IS A LOWERCASE SENTENCE MADE UPPERCASE
```

The above is essentially a nicer syntax for the below:

```js
function shout (sentence) {
  return setence.toUpperCase()
}

const greeting = shout('this is a lowerase sentence made uppercase')
```

The power of these becomes more obvious when you're interpolating values in, as shown previously.

A tagged template has access to the **'in-between' stage** before the interpolation happens, to make transforms as needed.

For example, if we wanted to greet users in their own language, we could write a tagged template like this: 

```js
const name = 'Paul'
const greeting = internationalised`Hello ${name}`
```

We're hoping that depending on the user's chosen language, we can show a greeting like:
*  "Bonjour Paul"
*  "Hello Paul"
*  "Hola, Paul"

To achieve this, we can implement the `internationalised` function:

```js
const hello = {
  'en': 'Hello',
  'fr': 'Bonjour',
  'es': 'Hola'
}

// imagine that this value comes from a select dropdown:
const userPreferredLanguage = 'es'

function internationalised (strings, name) {
  // Get the relevant 'hello' for the user's preferred language
  // 'hola'
  const greeting = hello[userPreferredLanguage]

  return `${greeting} ${name}` // 'Hello Paul'
}
```

---

## Further reading

*  [Template literals (Template strings) - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

---

## Browser Support

![Browser support for Template Literals](https://res.cloudinary.com/ireaderinokun/image/upload/v1583930695183/caniuse-embed/all/template-literals.png)
