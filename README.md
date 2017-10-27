htmllaundry
=========

A simple utility node module providing methods to handle html data. Inspired by the [htmllaundry](https://pypi.python.org/pypi/htmllaundry) python package with the same name.

## Installation

```shell
  npm install htmllaundry --save
```

## Usage

```js
  import { stripMarkup } from 'htmllaundry';

  const markup = "<html>Foo</html>";
  const text = stripMarkup(markup);

  console.log('markup', markup, 'text', text);
```

## Tests

```shell
   npm test
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.0.2 Add README.md file
* 0.0.1 Initial release
