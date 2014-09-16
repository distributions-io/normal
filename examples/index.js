var createDist = require( './../lib' ),
	median = require( 'compute-median' ),
	mean = require( 'compute-mean' );

// Define the distribution parameters...
var mu = 100,
	s2 = 25,
	xLow = 0,
	xHigh = 200;

// Create a support vector...
var vec = new Array( 1000 ),
	len = vec.length,
	inc;

inc = ( xHigh - xLow ) / len;

for ( var i = 0; i < len; i++ ) {
	vec[ i ] = inc * i;
}

// Create a normal distribution and configure...
var normal = createDist()
	.mean( mu )
	.variance( s2 );

// Evaluate the probability density function over the support vector...
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