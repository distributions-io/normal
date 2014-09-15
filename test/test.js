
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

	it( 'should do something' );

});