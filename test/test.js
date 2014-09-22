
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	createDist = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'distributions-normal', function tests() {
	'use strict';

	// SETUP //

	var normal;

	beforeEach( function() {
		normal = createDist();
	});


	// TESTS //

	it( 'should export a function', function test() {
		expect( createDist ).to.be.a( 'function' );
	});

	describe( 'mean', function tests() {

		it( 'should provide a setter/getter for the distribution mean', function test() {
			expect( normal.mean ).to.be.a( 'function' );
		});

		it( 'should throw an error if provided a non-numeric mean', function test() {
			var values = [
					'5',
					true,
					undefined,
					null,
					NaN,
					[],
					{},
					function(){}
				];

			for ( var i = 0; i < values.length; i++ ) {
				expect( badValue( values[i] ) ).to.throw( TypeError );
			}

			function badValue( value ) {
				return function() {
					normal.mean( value );
				};
			}
		});

		it( 'should set the distribution mean', function test() {
			normal.mean( 100 );
			assert.strictEqual( normal.mean(), 100 );
		});

	}); // end TESTS mean

	describe( 'variance', function tests() {

		it( 'should provide a setter/getter for the distribution variance', function test() {
			expect( normal.variance ).to.be.a( 'function' );
		});

		it( 'should throw an error if provided a non-numeric variance', function test() {
			var values = [
					'5',
					true,
					undefined,
					null,
					NaN,
					[],
					{},
					function(){}
				];

			for ( var i = 0; i < values.length; i++ ) {
				expect( badValue( values[i] ) ).to.throw( TypeError );
			}

			function badValue( value ) {
				return function() {
					normal.variance( value );
				};
			}
		});

		it( 'should set the distribution variance', function test() {
			normal.variance( 100 );
			assert.strictEqual( normal.variance(), 100 );
		});

	}); // end TESTS variance

	describe( 'median', function tests() {

		it( 'should provide a method to get the distribution median', function test() {
			expect( normal.median ).to.be.a( 'function' );
		});

		it( 'should return a median value equal to the mean', function test() {
			normal.mean( 72 );
			assert.strictEqual( normal.median(), 72 );
		});

	}); // end TESTS median

	describe( 'mode', function tests() {

		it( 'should provide a method to get the distribution mode', function test() {
			expect( normal.mode ).to.be.a( 'function' );
		});

		it( 'should return a mode equal to the mean', function test() {
			normal.mean( 43 );
			assert.strictEqual( normal.mode(), 43 );
		});

	}); // end TESTS mode

	describe( 'skewness', function tests() {

		it( 'should provide a method to get the distribution skewness', function test() {
			expect( normal.skewness ).to.be.a( 'function' );
		});

		it( 'should return a skewness equal to 0', function test() {
			assert.strictEqual( normal.skewness(), 0 );
		});

	}); // end TESTS skewness

	describe( 'excess kurtosis', function tests() {

		it( 'should provide a method to get the distribution excess kurtosis', function test() {
			expect( normal.ekurtosis ).to.be.a( 'function' );
		});

		it( 'should return an excess kurtosis equal to 0', function test() {
			assert.strictEqual( normal.ekurtosis(), 0 );
		});

	}); // end TESTS kurtosis

	describe( 'entropy', function tests() {

		it( 'should provide a method to get the distribution entropy', function test() {
			expect( normal.entropy ).to.be.a( 'function' );
		});

		it( 'should return the distribution entropy', function test() {
			var expected = 0.5 * ( Math.log( 2*Math.PI ) + 1 );

			normal.variance( 1 );
			assert.closeTo( normal.entropy(), expected, 0.0000001 );
		});

	}); // end TESTS entropy

	describe( 'information', function tests() {

		it( 'should provide a method to get the distribution information', function test() {
			expect( normal.information ).to.be.a( 'function' );
		});

		it( 'should return the distribution information', function test() {
			var expected = [
					[ 1, 0 ],
					[ 0, 0.5 ]
				];

			normal.variance( 1 );
			assert.deepEqual( normal.information(), expected );
		});

	}); // end TESTS information

	describe( 'pdf', function tests() {

		it( 'should provide a method to get/evaluate the distribution PDF', function test() {
			expect( normal.pdf ).to.be.a( 'function' );
		});

		it( 'should return a function', function test() {
			expect( normal.pdf() ).to.be.a( 'function' );
		});

		it( 'should throw an error if not provided an array', function test() {
			var values = [
					5,
					'5',
					true,
					undefined,
					null,
					NaN,
					{},
					function(){}
				];

			for ( var i = 0; i < values.length; i++ ) {
				expect( badValue( values[i] ) ).to.throw( TypeError );
			}

			function badValue( value ) {
				return function() {
					normal.pdf( value );
				};
			}
		});

		it( 'should throw an error if array contains non-numeric values', function test() {
			var values = [
					[],
					'5',
					true,
					undefined,
					null,
					NaN,
					{},
					function(){}
				];

			for ( var i = 0; i < values.length; i++ ) {
				expect( badValue( values[i] ) ).to.throw( TypeError );
			}

			function badValue( value ) {
				return function() {
					normal.pdf( [value] );
				};
			}
		});

		it( 'should evaluate the pdf', function test() {
			var data = [ -1, 0, 1 ];
			assert.isArray( normal.pdf( data ) );
		});

	}); // end TESTS pdf

	describe( 'cdf', function tests() {

		it( 'should provide a method to get/evaluate the distribution CDF', function test() {
			expect( normal.cdf ).to.be.a( 'function' );
		});

		it( 'should return a function', function test() {
			expect( normal.cdf() ).to.be.a( 'function' );
		});

		it( 'should throw an error if not provided an array', function test() {
			var values = [
					5,
					'5',
					true,
					undefined,
					null,
					NaN,
					{},
					function(){}
				];

			for ( var i = 0; i < values.length; i++ ) {
				expect( badValue( values[i] ) ).to.throw( TypeError );
			}

			function badValue( value ) {
				return function() {
					normal.cdf( value );
				};
			}
		});

		it( 'should throw an error if array contains non-numeric values', function test() {
			var values = [
					[],
					'5',
					true,
					undefined,
					null,
					NaN,
					{},
					function(){}
				];

			for ( var i = 0; i < values.length; i++ ) {
				expect( badValue( values[i] ) ).to.throw( TypeError );
			}

			function badValue( value ) {
				return function() {
					normal.cdf( [value] );
				};
			}
		});

		it( 'should evaluate the cdf', function test() {
			var data = [ -1, 0, 1 ],
				res = normal.cdf( data );
			assert.isArray( res );
			assert.strictEqual( res[1], 0.5 );
		});

	}); // end TESTS cdf

	describe( 'quantile', function test() {

		it( 'should provide a method to get/evaluate the distribution quantile function', function test() {
			expect( normal.quantile ).to.be.a( 'function' );
		});

		it( 'should return a function', function test() {
			expect( normal.quantile() ).to.be.a( 'function' );
		});

		it( 'should throw an error if not provided an array', function test() {
			var values = [
					5,
					'5',
					true,
					undefined,
					null,
					NaN,
					{},
					function(){}
				];

			for ( var i = 0; i < values.length; i++ ) {
				expect( badValue( values[i] ) ).to.throw( TypeError );
			}

			function badValue( value ) {
				return function() {
					normal.quantile( value );
				};
			}
		});

		it( 'should throw an error if array contains non-numeric values', function test() {
			var values = [
					[],
					'5',
					true,
					undefined,
					null,
					NaN,
					{},
					function(){}
				];

			for ( var i = 0; i < values.length; i++ ) {
				expect( badValue( values[i] ) ).to.throw( TypeError );
			}

			function badValue( value ) {
				return function() {
					normal.quantile( [value] );
				};
			}
		});

		it( 'should throw an error if array contains numeric values not on the interval [0,1]', function test() {
			var values = [ -0.01, 1.01 ];
			for ( var i = 0; i < values.length; i++ ) {
				expect( badValue( values[i] ) ).to.throw( Error );
			}
			function badValue( value ) {
				return function() {
					normal.quantile( [value] );
				};
			}
		});

		it( 'should evaluate the quantile function', function test() {
			var p = [ 0.025, 0.05, 0.159, 0.5, 0.841, 0.95, 0.975 ],
				res = normal.quantile( p );
			assert.isArray( res );
			assert.strictEqual( res[3], 0 );
			assert.closeTo( res[0], -1.959963984, 1e-7 );
			assert.closeTo( res[6], 1.959963984, 1e-7 );
		});

	}); // end TESTS quantile

});