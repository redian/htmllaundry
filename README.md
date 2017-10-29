htmllaundry 
=========

A simple utility node module providing methods to handle html data. Inspired by the [htmllaundry](https://pypi.python.org/pypi/htmllaundry) python package with the same name.

## Installation

```shell
  npm install htmllaundry --save
```

## Usage

Available methods: 
- `escape`: Convert HTML reserved characters to their corresponding HTML Entities. https://www.w3schools.com/html/html_entities.asp
- `unsescape`: Invese operation to the escape method.
- `stripMarkup`: Strip all markup from a HTML fragment.
```js
  // es6
  import HL from 'htmllaundry';
```
```js
  // Escaping special reserved HTML characters.
  const string = "Foo & Bar";
  const escaped = HL.escape(string);

  console.log('string', string, 'escaped', escaped);
  // Input: Foo & Bar
  // Output: Foo &amp; Bar
```

```js
  // Unescaping HTML entities to special reserved HTML characters.
  const string = "Foo &amp; Bar";
  const escaped = HL.unescape(string);

  console.log('string', string, 'escaped', escaped);
  // Input: Foo &amp; Bar
  // Output: Foo & Bar
```

```js
  // Stripping HTML tags
  const markup = "<html>Foo</html>";
  const text = HL.stripMarkup(markup);

  console.log('markup', markup, 'text', text);
  // Input: <html>Foo</html>
  // Output: Foo
```
```js
  // es5
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
* 0.1.0 Add escape and unescape methods as well as refactor to a singleton 
* 0.0.3 Add es5 example
* 0.0.2 Add README.md file
* 0.0.1 Initial release
