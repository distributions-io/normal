
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	normal = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'distributions-normal', function tests() {
	'use strict';

	it( 'should export a function', function test() {
		expect( normal ).to.be.a( 'function' );
	});

	it( 'should provide a setter/getter for the distribution mean' );

	it( 'should provide a setter/getter for the distribution variance' );

	it( 'should provide a method to get the distribution median' );

	it( 'should return a median value equal to the mean' );

	it( 'should provide a method to get the distribution mode' );

	it( 'should return a mode value equal to the mean' );

	it( 'should provide a method to get the distribution skewness' );

	it( 'should return a skewness equal to 0' );

	it( 'should provide a method to get the distribution excess kurtosis' );

	it( 'should return an excess kurtosis equal to 0' );

	it( 'should provide a method to get the distribution entropy' );

	it( 'should provide a method to get the distribution information' );

	it( 'should provide a method to get/evaluate the distribution PDF' );

	it( 'should provide a method to get/evaluate the distribution CDF' );

	it( 'should provide a method to get/evaluate the distribution quantile function' );

});