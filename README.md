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
var createDist = require( 'distributions-normal' );
```

To create a normal distribution,

``` javascript
var normal = createDist();
```

The distribution is configurable and has the following methods...


#### normal.support()

Returns the distribution support, which is the set of all real values.

``` javascript
var support = normal.support();
// returns [-inf, inf]
```


#### normal.mean( [value] )

This method is a setter/getter. If no `value` is provided, returns the distribution `mean`. To set the distribution `mean`,

``` javascript
normal.mean( 100 );
```

The default distribution `mean` is 0.


#### normal.variance( [value] )

This method is a setter/getter. If no `value` is provided, returns the distribution `variance`. To set the distribution `variance`,

``` javascript
normal.variance( 25 );
```

The default distribution `variance` is 1.


#### normal.median()

Returns the distribution `median`, which is equal to the distribution `mean`.

``` javascript
var median = normal.median();
// equals normal.mean()
```


#### normal.mode()

Returns the distribution `mode`, which is equal to the distribution `mean`.

``` javascript
var mode = normal.mode();
// equals normal.mean()
```


#### normal.skewness()

Returns the distribution `skewness`, which is equal to 0.

``` javascript
var skewness = normal.skewness();
// returns 0
```

#### normal.ekurtosis()

Returns the distribution `excess kurtosis`, which is equal to 0.

``` javascript
var excess = normal.ekurtosis();
// returns 0
```


#### normal.information()

Returns the [Fisher information](http://en.wikipedia.org/wiki/Fisher_information).

``` javascript
var info = normal.information();
// returns [...]
```


#### normal.entropy()

Returns the distribution's [differential entropy](http://en.wikipedia.org/wiki/Differential_entropy).

``` javascript
var entropy = normal.entropy();
// approx 1.42 for mu=0, variance=1
```

#### normal.pdf( [arr] )

If a vector is not provided, returns the probability density function (PDF). If a vector is provided, evaluates the PDF for each vector element.

``` javascript
var data = [ -1, -0.5, 0, 0.5, 1 ];

var pdf = normal.pdf( data );
// returns [...]
```

#### normal.cdf( [arr] )

If a vector is not provided, returns the cumulative density function (CDF). If a vector is provided, evaluates the CDF for each vector element.

``` javascript
var data = [ -1, -0.5, 0, 0.5, 1 ];

var cdf = normal.cdf( data );
// returns [...]
```


#### normal.inv( [arr] )

If a cumulative probability vector is not provided, returns the inverse cumulative distribution function (aka the quantile function). If a cumulative probability vector is provided, evaluates the quantile function for each vector element.

``` javascript
var probs = [ 0.025, 0.5, 0.975 ];

var quantiles = normal.inv( probs );
// returns [...]
``` 

Note: all vector values must exist on the interval `[0, 1]`.




## Examples

``` javascript
var createDist = require( 'distributions-normal' ),
	median = require( 'compute-median' ),
	mean = require( 'compute-mean' );

// Define the distribution parameters...
var mu = 100,
	s2 = 25,
	xLow = 0,
	xHigh = 200;

// Create a vector...
var vec = new Array( 1000 ),
	len = vec.length,
	inc;

inc = ( xHigh - xLow ) / len;

for ( var i = 0; i < len; i++ ) {
	vec[ i ] = inc*i + xLow;
}

// Create a normal distribution and configure...
var normal = createDist()
	.mean( mu )
	.variance( s2 );

// Evaluate the probability density function over the vector...
var pdf = normal.pdf( vec );

// Find the max...
var max = pdf[ 0 ],
	idx = 0;
for ( var j = 1; j < pdf.length; j++ ) {
	if ( pdf[ j ] > max ) {
		max = pdf[ j ];
		idx = j;
	}
}
console.log( 'Max: ' + vec[ idx ] );

// Calculate the median...
console.log( 'Median: ' + median( vec ) );

// Calculate the mean...
console.log( 'Mean: ' + mean( vec ) );

// Evaluate the quantile function for canonical cumulative probability values...
var quantiles = normal.inv( [ 0.025, 0.5, 0.975 ] );

console.log( quantiles );
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