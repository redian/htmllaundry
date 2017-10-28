htmllaundry 
=========

A simple utility node module providing methods to handle html data. Inspired by the [htmllaundry](https://pypi.python.org/pypi/htmllaundry) python package with the same name.

## Installation

```shell
  npm install htmllaundry --save
```

## Usage

```js
  // es6
  import { stripMarkup } from 'htmllaundry';

  const markup = "<html>Foo</html>";
  const text = stripMarkup(markup);

  console.log('markup', markup, 'text', text);
  // Input: <html>Foo</html>
  // Output: Foo

  // es5
  var htmllaundry = require("htmllaundry");

  var markup = "<html><span>Foo</span><span>Bar</span></html>";
  var text = htmllaundry.stripMarkup(markup);

  console.log('markup', markup, 'text', text);
  // Input: <html><span>Foo</span><span>Bar</span></html>
  // Output: FooBar
```

## Tests

```shell
   npm test
```
Test Status: [![CircleCI](https://circleci.com/gh/redian/htmllaundry/tree/master.svg?style=svg)](https://circleci.com/gh/redian/htmllaundry/tree/master)

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History
* 0.0.3 Add es5 example
* 0.0.2 Add README.md file
* 0.0.1 Initial release
