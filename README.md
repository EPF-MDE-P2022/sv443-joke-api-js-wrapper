# JokeAPI - JavaScript wrapper

JavaScript wrapper for the [JokeAPI](https://jokeapi.dev/).

If you really want to use this library in your project. Go ahead and use it. But there may be some bugs.  
Documentation can be found [here](https://sahithyandev.github.io/sv443-joke-api-js-wrapper/)

## Important Note

This wrapper may have a lot of bugs. **Use with caution**.

I am not currently working on this project. So it won't receive any updates in the near future. 
I want to let you know that, If you create an issue, I will surely try to solve it.

I also want to say that, **I am open to transfer this project to someone else**.

## Usage

You can use it in both Browser and Node.

First you have to import the library.

in HTML, include this script tag inside `<head>`

```html
<script src="https://unpkg.com/sv443-joke-api@0.0.8/web/index.js"></script>
```

for node, you have to install it using `npm` or `yarn` and then import it.

```bash
npm install --save sv443-joke-api
# OR
yarn add sv443-joke-api
```

```javascript
const JokeAPI = require('sv443-joke-api');
```

After importing the library, you can

```javascript
JokeAPI.getJokes()
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
  })
```

Here is a codepen example for how you can use this library.
https://codepen.io/sahith27/pen/QWEPwPg

## Development

Read the [Development Guide](./docs-manual/Development-Guide.md) to learn how to develop this library.
