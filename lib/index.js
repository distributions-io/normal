/**
*
*	DISTRIBUTIONS: normal
*
*
*	DESCRIPTION:
*		- Normal distribution.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	// MODULES //

	var erf = require( 'compute-erf' ),
		erfinv = require( 'compute-erfinv' );


	// FUNCTIONS //

	/**
	* FUNCTION: getPDF( mu, variance )
	*	Returns a probability density function for a normal distribution with mean `mu` and variance `s2`.
	*
	* @private
	* @param {Number} mu - distribution mean
	* @param {Number} variance - distribution variance
	* @returns {Function} probability density function (PDF)
	*/
	function getPDF( mu, s2 ) {
		var A = 1 / (  Math.sqrt(s2*2*Math.PI) ),
			B = -1 / (2*s2);
		/**
		* FUNCTION: pdf( x )
		*	Evaluates the probability distribution function at input value `x`.
		*
		* @private
		* @param {Number} x - input value
		* @returns {Number} evaluated PDF
		*/
		return function pdf( x ) {
			var C = x - mu;
			return A * Math.exp( B*C*C );
		};
	} // end FUNCTION getPDF()

	/**
	* FUNCTION: getCDF( mu, variance )
	*	Returns a cumulative density function for a normal distribution with mean `mu` and variance `s2`.
	*
	* @private
	* @param {Number} mu - distribution mean
	* @param {Number} variance - distribution variance
	* @returns {Function} cumulative density function (CDF)
	*/
	function getCDF( mu, s2 ) {
		var A = 1 / 2,
			B = Math.sqrt( s2*2 );
		/**
		* FUNCTION: cdf( x )
		*	Evaluates the cumulative distribution function at input value `x`.
		*
		* @private
		* @param {Number} x - input value
		* @returns {Number} evaluated CDF
		*/
		return function cdf( x ) {
			var C = x - mu;
			return A * ( 1 + erf( C / B ) );
		};
	} // end FUNCTION getCDF()

	/**
	* FUNCTION: getQuantileFunction( mu, variance )
	*	Returns a quantile function for a normal distribution with mean `mu` and variance `s2`.
	*
	* @private
	* @param {Number} mu - distribution mean
	* @param {Number} variance - distribution variance
	* @returns {Function} quantile function
	*/
	function getQuantileFunction( mu, s2 ) {
		var A = mu,
			B = Math.sqrt( s2*2 );
		/**
		* FUNCTION: quantile( x )
		*	Evaluates the quantile function at input value `x`.
		*
		* @private
		* @param {Number} x - input value
		* @returns {Number} evaluated quantile function
		*/
		return function quantile( x ) {
			var C = 2*x - 1;
			return A + B*erfinv( C );
		};
	} // end FUNCTION getQuantileFunction()


	// NORMAL //

	/**
	* FUNCTION: Distribution()
	*	Distribution constructor.
	*
	* @constructor
	* @returns {Distribution} Distribution instance
	*/
	function Distribution() {
		this._mu = 0;
		this._variance = 1;
		return this;
	} // end FUNCTION Distribution()

	/**
	* METHOD: support()
	*	Returns the distribution support.
	*
	* @returns {Array} distribution support
	*/
	Distribution.prototype.support = function() {
		return [ Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY ];
	}; // end METHOD support()

	/**
	* METHOD: mean( [value] )
	*	Mean value setter and getter. If a value is provided, sets the mean value. If no value is provided, returns the mean value.
	*
	* @param {Number} [value] - mean value
	* @returns {Distribution|Number} Distribution instance or mean value
	*/
	Distribution.prototype.mean = function( value ) {
		if ( !arguments.length ) {
			return this._mu;
		}
		if ( typeof value !== 'number' || value !== value ) {
			throw new TypeError( 'mean()::invalid input argument. Mean value must be numeric.' );
		}
		this._mu = value;
		return this;
	}; // end METHOD mean()

	/**
	* METHOD: variance( [value] )
	*	Variance setter and getter. If a value is provided, sets the distribution variance. If no value is provided, returns the variance.
	*
	* @param {Number} [value] - variance
	* @returns {Distribution|Number} Distribution instance or variance
	*/
	Distribution.prototype.variance = function( value ) {
		if ( !arguments.length ) {
			return this._variance;
		}
		if ( typeof value !== 'number' || value !== value || value < 0 ) {
			throw new TypeError( 'variance()::invalid input argument. Variance must be a positive number.' );
		}
		this._variance = value;
		return this;
	}; // end METHOD variance()

	/**
	* METHOD: median()
	*	Returns the distribution median.
	*
	* @returns {Number} median
	*/
	Distribution.prototype.median = function( value ) {
		return this._mu;
	}; // end METHOD median()

	/**
	* METHOD: mode()
	*	Returns the distribution mode.
	*
	* @returns {Number} mode
	*/
	Distribution.prototype.mode = function( value ) {
		return this._mu;
	}; // end METHOD mode()

	/**
	* METHOD: skewness()
	*	Returns the distribution skewness.
	*
	* @returns {Number} skewness
	*/
	Distribution.prototype.skewness = function( value ) {
		return 0;
	}; // end METHOD skewness()

	/**
	* METHOD: ekurtosis()
	*	Returns the distribution excess kurtosis.
	*
	* @returns {Number} excess kurtosis
	*/
	Distribution.prototype.ekurtosis = function( value ) {
		return 0;
	}; // end METHOD ekurtosis()

	/**
	* METHOD: information()
	*	Returns the Fisher information.
	*
	* @returns {Array} Fisher information (2x2 array)
	*/
	Distribution.prototype.information = function() {
		var s2 = this._variance,
			arr = new Array( 2 );

		arr[ 0 ] = [ 1 / s2, 0 ];
		arr[ 1 ] = [ 0, 1 / (2*s2*s2) ];
		return arr;
	}; // end METHOD information()

	/**
	* METHOD: entropy()
	*	Returns the entropy.
	*
	* @returns {Number} entropy
	*/
	Distribution.prototype.entropy = function() {
		return 0.5 * Math.log( 2*Math.PI*Math.E*this._variance );
	}; // end METHOD entropy()

	/**
	* METHOD: pdf( [vec] )
	*	If provided an input vector, evaluates the distribution PDF for each vector element. IF no input argument is provided, returns the PDF.
	*
	* @param {Array} [vec] - 1d input array
	* @returns {Function|Array} distribution PDF or evaluated PDF
	*/
	Distribution.prototype.pdf = function( vec ) {
		var pdf, len, arr, val;

		pdf = getPDF( this._mu, this._variance );

		if ( !arguments.length ) {
			return pdf;
		}
		if ( !Array.isArray( vec ) ) {
			throw new TypeError( 'pdf()::invalid input argument. Must provide an array.' );
		}
		len = vec.length;
		arr = new Array( len );
		for ( var i = 0; i < len; i++ ) {
			val = vec[ i ];
			if ( typeof val !== 'number' || val !== val ) {
				throw new TypeError( 'pdf()::invalid input argument. Array must only contain numeric values.' );
			}
			arr[ i ] = pdf( val );
		}
		return arr;
	}; // end METHOD pdf()

	/**
	* METHOD: cdf( [vec] )
	*	If provided an input vector, evaluates the distribution CDF for each vector element. IF no input argument is provided, returns the CDF.
	*
	* @param {Array} [vec] - 1d input array
	* @returns {Function|Array} distribution CDF or evaluated CDF
	*/
	Distribution.prototype.cdf = function( vec ) {
		var cdf, len, arr, val;

		cdf = getCDF( this._mu, this._variance );

		if ( !arguments.length ) {
			return cdf;
		}
		if ( !Array.isArray( vec ) ) {
			throw new TypeError( 'cdf()::invalid input argument. Must provide an array.' );
		}
		len = vec.length;
		arr = new Array( len );
		for ( var i = 0; i < len; i++ ) {
			val = vec[ i ];
			if ( typeof val !== 'number' || val !== val ) {
				throw new TypeError( 'cdf()::invalid input argument. Array must only contain numeric values.' );
			}
			arr[ i ] = cdf( val );
		}
		return arr;
	}; // end METHOD cdf()

	/**
	* METHOD: inv( [vec] )
	*	If provided an input vector, evaluates the inverse cumulative distribution (quantile) function for each vector element. If no input argument is provided, returns the quantile function.
	*
	* @param {Array} [vec] - 1d input array
	* @returns {Function|Array} distribution quantile function or evaluated quantile function
	*/
	Distribution.prototype.inv = function( vec ) {
		var q, len, arr, val;

		q = getQuantileFunction( this._mu, this._variance );

		if ( !arguments.length ) {
			return q;
		}
		if ( !Array.isArray( vec ) ) {
			throw new TypeError( 'inv()::invalid input argument. Must provide an array.' );
		}
		len = vec.length;
		arr = new Array( len );
		for ( var i = 0; i < len; i++ ) {
			val = vec[ i ];
			if ( typeof val !== 'number' || val !== val ) {
				throw new TypeError( 'inv()::invalid input argument. Array must only contain numeric values.' );
			}
			if ( val < 0 || val > 1 ) {
				throw new Error( 'inv()::invalid input argument. Array values must exist on the interval [0,1].' );
			}
			arr[ i ] = q( val );
		}
		return arr;
	}; // end METHOD inv()


	// EXPORTS //

	module.exports = function createDistribution() {
		return new Distribution();
	};

})();