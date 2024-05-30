/**
 * @class           {Object} Hwb 								HWB color model
 * @property        {number} [hue=0] 							Hue value; 0 - 360 (degree)
 * @property        {number} [whiteness=0] 						Whiteness value; 0 - 1 (decimal)
 * @property        {number} [blackness=0] 						Blackness value; 0 - 1 (decimal)
 * @property        {number} [alpha=1] 							Alpha value; 0 - 1 (decimal)
 */
class Hwb
{
	_hue       = 0;
	_whiteness = 0;
    _blackness = 0;
    _alpha     = 1;

    /**
	 * Create an HWB color Model
	 * @param       	{number} hue                               	Hue value
	 * @param       	{number} whiteness 							Whiteness value
	 * @param       	{number} blackness 							Blackness value
	 * @param       	{number} alpha 								Alpha value
	 */
    constructor ( hue, whiteness, blackness, alpha )
	{
		////    COMPOSITION    /////////////////////////////

			this._isDecimal = VALIDATION.isDecimal;
			this._isDegree  = VALIDATION.isDegree;

			Object.defineProperty ( this, 'alpha',  PROPERTY_BLOCKS.discrete.alpha  );

		this.hue       = hue;
		this.whiteness = whiteness;
		this.blackness = blackness;
		this.alpha     = ( alpha === undefined ) ? 1 : alpha;
	}

	////    [ HUE ]    /////////////////////////////////////

		/**
		 * Sets the hue value
		 * @public
		 * @function
		 * @param           {number} hue 								Hue value; 0 - 360
		 */
		set hue ( value )
		{
			this._hue = this._isDegree ( value ) ? value : this._hue;
		}

		/**
		 * Gets the hue value
		 * @public
		 * @function
		 * @return 			{number}									Hue value; 0 - 360
		 */
		get hue ( )
		{
			return this._hue;
		}

	////    [ WHITENESS ]    ///////////////////////////////

		/**
		 * Sets the whiteness value
		 * @public
		 * @function
		 * @param           {number} whiteness 							Whiteness value; 0 - 1
		 */
		set whiteness ( value )
		{
			this._whiteness = this._isDecimal ( value ) ? value : this._whiteness;
		}

		/**
		 * Gets the whiteness value
		 * @public
		 * @function
		 * @return 			{number} 									Whiteness value; 0 - 1
		 */
		get whiteness ( )
		{
			return this._whiteness;
		}

	////    [ BLACKNESS ]    ///////////////////////////////

		/**
		 * Sets the blackness value
		 * @public
		 * @function
		 * @param           {number} blackness 							Blackness value; 0 - 1
		 */
		set blackness ( value )
		{
			this._blackness = this._isDecimal ( value ) ? value : this._blackness;
		}

		/**
		 * Gets the blackness value
		 * @public
		 * @function
		 * @return 			{number} 									Blackness value; 0 - 1
		 */
		get blackness ( )
		{
			return this._blackness;
		}

	////    VALIDATION  ////////////////////////////////////

		/**
         * Returns whether the passed value is a decimal value; 0.00 - 1
         * @private
         * @function
         * @param           {number} value 								Decimal value; 0.00 - 1
         * @return          {boolean} 									True || False
         * @see             {@link Validation.isDecimal}
         */
        _isDecimal ( ) { }

        /**
	     * Returns whether the passed value is a degree
	     * @prviate
	     * @function
	     * @param           {number} value 								Degree
	     * @return          {boolean} 									True || False
	     * @see             {@link Validation.isDegree}
	     */
		_isDegree  ( ) { }

	////    [ UTILITIES ]    ///////////////////////////////

		/**
		 * Returns a CSS compatible <color> string value
		 * @public
		 * @function
		 * @return 			{string} 									CSS <color> string
		 */
		toCss ( )
		{
			return `hwb(${this.hue}deg ${this.whiteness * 100}% ${this.blackness * 100}% / ${this.alpha * 100}%)`;
		}
}
