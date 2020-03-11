# Asynchronous JavaScript

When we want to call a function after another has run, we might pass a "callback" function.

For example, if we want to fetch data from 'mywebsite.com/data' and log it to the console:

```js
function onSuccess (response) {
  // do things with the `response` after complete
  console.log(response)
}

function onError (error) {
  console.log('Something broke!')
  console.log(error)
}

function fetchData (url, successCallback, errorCallback) {
  const requestForData = new XMLHttpRequest()

  requestForData.onreadystatechange = function () {
    const { status, responseText } = requestForData
    
    if (status === 200) {
      return successCallback(responseText)
    }

    return errorCallback(new Error('Something went wrong'))
  }

  requestForData.open('GET', url)
  requestForData.send()
}

fetchData('mywebsite.com/data', onSuccess, onError)
```

Chaining asynchronous behaviour is a bit more difficult with callbacks, and often ends in [callback hell](http://callbackhell.com).

## Promises 🤝

**Promises** are a new way of working with asynchronous JavaScript.

Promises can be thought of as an 'agreement' to return a value, as they can be in 1 of 3 states:

*  **Pending**: action in progress;
*  **Resolved**: action finished successfully;
*  **Rejected**: action finished unsuccessfully.

To create a promise:



Rewriting the previous `fetchData` request example:

```js
function onSuccess (response) {
  // do things with the `response` after complete
  console.log(response)
}

function onError (error) {
  console.log('Something broke!')
  console.log(error)
}

const fetchData = function (url) {
  return new Promise((resolve, reject) => {
    const requestForData = new XMLHttpRequest()

    requestForData.onreadystatechange = function () {
      const { status, responseText } = requestForData

      if (status === 200) {
        // We've successfully retrieved data
        // Calling `resolve` here sets the promise as `resolved`
        return resolve(responseText)
      }

      // If the response code isn't 200, something went wrong
      // We call `reject` here to set the promise as `rejected`
      return reject(new Error('Something went wrong'))
    }

    requestForData.open('GET', url)
    requestForData.send()
  })
}

fetchData().then(onSuccess).catch(onError)
```

**Note:**
*  `fetchData` doesn't have knowledge of callbacks
*  We can chain as many `.then()` calls as we want, each capturing the value returned by the previous

### N.B. writing your own promises

While the above example explains how promises resolve and reject, most of the time, you'll be working with the promises returned by library functions, rather than defining your own through `new Promise()`.

For example the new [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) is a new way of making a network request that is based on promises:

```js
fetch('mywebsite.com/data', {
  method: 'get'
}).then(response => console.log(response))
```

##  async/await

Marking a function as **async** makes it possible to treat a function returning a `Promise` as if it were synchronous.

---

## Browser Support

![Browser support for Promises](https://res.cloudinary.com/ireaderinokun/image/upload/v1583930695183/caniuse-embed/all/promises.png)

See [Browser Compatability](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) on MDN for support data on async/await.