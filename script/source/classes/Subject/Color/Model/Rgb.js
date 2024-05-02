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
		 * @name red
		 * @function
		 * @param           {number} red                        Red value; 0 - 255
		 */
		set red ( value )
		{
			this._red = this._is256 ( value ) ? value : this._red;
		}

		/**
		 * Gets the red value
		 * @public
		 * @name red
		 * @function
		 * @param 			{number}							Red value; 0 - 255
		 */
		get red ( )
		{
			return this._red;
		}

	////    [ GREEN ]    ///////////////////////////////////

		/**
		 * Sets the green value
		 * @public
		 * @name green
		 * @function
		 * @param           {number} green 						Green value; 0 - 255
		 */
		set green ( value )
		{
			this._green = this._is256 ( value ) ? value : this._green;
		}

		/**
		 * Gets the green value
		 * @public
		 * @name green
		 * @function
		 * @param 			{number} 							Green value; 0 - 255
		 */
		get green ( )
		{
			return this._green;
		}

	////    [ BLUE ]    ////////////////////////////////////

		/**
		 * Sets the blue value
		 * @public
		 * @name blue
		 * @function
		 * @param           {number} blue 						Blue value; 0 - 255
		 */
		set blue ( value )
		{
			this._blue = this._is256 ( value ) ? value : this._blue;
		}

		/**
		 * Gets the blue value
		 * @public
		 * @name blue
		 * @function
		 * @param 			{number} 							Blue value; 0 - 255
		 */
		get blue ( )
		{
			return this._blue;
		}

	////    [ VALIDATION ]    //////////////////////////////

		_is256 ( ) { }

	////    [ UTILITIES ]    ///////////////////////////////

		/**
		 * Returns a CSS compatible <color> string value
		 * @public
		 * @name toCss
		 * @function
		 * @return 			{string} 							CSS <color> string
		 */
		toCss ( )
		{
			return `rgb(${this.red} ${this.green} ${this.blue} / ${this.alpha * 100}%)`;
		}
}
