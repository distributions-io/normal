Normal
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Normal distribution.


## Installation

``` bash
$ npm install distributions-normal
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var normal = require( 'distributions-normal' );
```


## Examples

``` javascript

```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ open reports/coverage/lcov-report/index.html
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/distributions-normal.svg
[npm-url]: https://npmjs.org/package/distributions-normal

[travis-image]: http://img.shields.io/travis/distributions-io/normal/master.svg
[travis-url]: https://travis-ci.org/distributions-io/normal

[coveralls-image]: https://img.shields.io/coveralls/distributions-io/normal/master.svg
[coveralls-url]: https://coveralls.io/r/distributions-io/normal?branch=master

[dependencies-image]: http://img.shields.io/david/distributions-io/normal.svg
[dependencies-url]: https://david-dm.org/distributions-io/normal

[dev-dependencies-image]: http://img.shields.io/david/dev/distributions-io/normal.svg
[dev-dependencies-url]: https://david-dm.org/dev/distributions-io/normal

[github-issues-image]: http://img.shields.io/github/issues/distributions-io/normal.svg
[github-issues-url]: https://github.com/distributions-io/normal/issues