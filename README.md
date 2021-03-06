htmllaundry 
=========

A simple utility node module providing methods to handle html data. Inspired by the [htmllaundry](https://pypi.python.org/pypi/htmllaundry) python package with the same name.

## Installation

```shell
  npm install htmllaundry --save
```

## Usage

Available methods: 
- `escape`: Convert HTML reserved characters to their corresponding [HTML Entities](https://www.w3schools.com/html/html_entities.asp). 
- `unescape`: Inverse operation of escape method.
- `stripMarkup`: Strip all markup from a HTML fragment.

##### ES6 Examples
```js
  import HL from 'htmllaundry';
```
##### Escaping special reserved HTML characters
```js
 
  const string = "Foo & Bar";
  const escaped = HL.escape(string);

  console.log('string', string, 'escaped', escaped);
  // Input: Foo & Bar
  // Output: Foo &amp; Bar
```

##### Unescaping HTML entities to reserved HTML characters
```js
  const string = "Foo &amp; Bar";
  const unescaped = HL.unescape(string);

  console.log('string', string, 'unescaped', unescaped);
  // Input: Foo &amp; Bar
  // Output: Foo & Bar
```

##### Stripping HTML tags
```js
  const markup = "<html>Foo</html>";
  const text = HL.stripMarkup(markup);

  console.log('markup', markup, 'text', text);
  // Input: <html>Foo</html>
  // Output: Foo
```

##### ES5 Example
```js
  var HL = require("htmllaundry");

  var markup = "<html><span>Foo</span><span>Bar</span></html>";
  var text = HL.stripMarkup(markup);

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
* 0.1.7 Security update of dependencies.
* 0.1.6 Update documentation.
* 0.1.5 Update documentation.
* 0.1.4 Update dependencies.
* 0.1.3 Use module.exports in order for the es5 bundle to work.
* 0.1.2 Change back to object const with as default export.
* 0.1.1 Update documentation
* 0.1.0 Add escape and unescape methods as well as refactor to a singleton 
* 0.0.3 Add es5 example
* 0.0.2 Add README.md file
* 0.0.1 Initial release
