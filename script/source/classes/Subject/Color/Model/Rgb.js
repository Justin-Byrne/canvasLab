/**
 * @class           {Object} Rgb 								RGB color model
 * @property        {number} [red=0] 							Red value; 0 - 255
 * @property        {number} [green=0] 							Green value; 0 - 255
 * @property        {number} [blue=0] 							Blue value; 0 - 255
 * @property        {number} [alpha=1] 							Alpha value; 0 - 1 (decimal)
 */
class Rgb
{
	_red   = 0;
	_green = 0;
	_blue  = 0;
	_alpha = 1;

	/**
	 * Create an RGB color model
	 * @param 			{number} red                               	Red value
	 * @param 			{number} green                             	Green value
	 * @param 			{number} blue 								Blue value
	 * @param 			{number} alpha 								Alpha value
	 */
	constructor ( red, green, blue, alpha )
	{
		////    COMPOSITION    /////////////////////////////

			this._is256 = VALIDATION.is256;

			Object.defineProperty ( this, 'alpha', PROPERTY_BLOCKS.discrete.alpha  );

		this.red   = red;
		this.green = green;
		this.blue  = blue;
		this.alpha = ( alpha === undefined ) ? 1 : alpha;
	}

	////    [ RED ]    /////////////////////////////////////

		/**
		 * Sets the red value
		 * @public
		 * @function
		 * @param           {number} red                        		Red value; 0 - 255
		 */
		set red ( value )
		{
			this._red = this._is256 ( value ) ? Math.round ( value ) : this._red;
		}

		/**
		 * Gets the red value
		 * @readOnly
		 * @function
		 * @return 			{number}									Red value; 0 - 255
		 */
		get red ( )
		{
			return this._red;
		}

	////    [ GREEN ]    ///////////////////////////////////

		/**
		 * Sets the green value
		 * @public
		 * @function
		 * @param 			{number} green 								Green value; 0 - 255
		 */
		set green ( value )
		{
			this._green = this._is256 ( value ) ? Math.round ( value ) : this._green;
		}

		/**
		 * Gets the green value
		 * @readOnly
		 * @function
		 * @return 			{number} 									Green value; 0 - 255
		 */
		get green ( )
		{
			return this._green;
		}

	////    [ BLUE ]    ////////////////////////////////////

		/**
		 * Sets the blue value
		 * @public
		 * @function
		 * @param 			{number} blue 								Blue value; 0 - 255
		 */
		set blue ( value )
		{
			this._blue = this._is256 ( value ) ? Math.round ( value ) : this._blue;
		}

		/**
		 * Gets the blue value
		 * @readOnly
		 * @function
		 * @return 			{number} 									Blue value; 0 - 255
		 */
		get blue ( )
		{
			return this._blue;
		}

	////    [ VALIDATION ]    //////////////////////////////

		/**
	     * Returns whether the passed value is a 256 color value; 0 - 255
	     * @private
	     * @function
	     * @param           {number} value 								256 color value; 0 - 255
	     * @return          {boolean} 									True || False
	     * @see             {@link VALIDATION.is256}
	     */
		_is256 ( ) { }

	////    [ UTILITIES ]    ///////////////////////////////

		/**
		 * Color cycling
		 * @private
		 * @function
		 * @param  			{Object}   start							Color model & values
		 * @param  			{Object}   end 								Color model & values
		 * @param 			{number}   progress 						Progress time unit; 0.00 - 1.00
		 * @param 			{number}   max 								Maximum number of steps between interpolation
		 * @param 			{function} clear 							Clear callback from root object
		 * @param 			{function} draw 							Draw callback from root object
		 */
		_cycle ( start, end, progress, max, clear, draw )
	    {
	    	this._lerpRgb ( start, end, progress, max );
		}

		/**
		 * Linear interpolation color transitions
		 * @private
		 * @function
		 * @param  			{Object} start 								Color model & values
		 * @param  			{Object} end 								Color model & values
		 * @param 			{number} progress 							Progress time unit; 0.00 - 1.00
		 * @param 			{number} max 								Maximum number of steps between interpolation
		 */
		_lerp ( start, end, progress, max )
		{
			return Math.round ( start + ( end - start ) * progress / max );
		}

		/**
		 * Linear interpolation of Rgb values
		 * @private
		 * @function
		 * @param  			{Object} start 								Color model & values
		 * @param  			{Object} end 								Color model & values
		 * @param 			{number} progress 							Progress time unit; 0.00 - 1.00
		 * @param 			{number} max 								Maximum number of steps between interpolation
		 */
		_lerpRgb ( start, end, progress, max )
	    {
	    	this._red   = this._lerp ( start.red,   end.red,   progress, max );

	    	this._green = this._lerp ( start.green, end.green, progress, max );

	    	this._blue  = this._lerp ( start.blue,  end.blue,  progress, max );
		}

		fade ( start, end, progress, max )
	    {
	    	this._cycle ( start, end, progress, max );

	    	return this;
		}

		/**
		 * Returns a CSS compatible <color> string value
		 * @public
		 * @function
		 * @return 			{string} 									CSS <color> string
		 */
		toCss ( )
		{
			return `rgb(${this.red} ${this.green} ${this.blue} / ${this.alpha * 100}%)`;
		}
}
