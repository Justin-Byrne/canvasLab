/**
 * @class           {Object} Hsl 								HSL color model
 * @property        {number} [hue=0] 							Hue value; 0 - 360 (degree)
 * @property        {number} [saturation=0] 					Saturation value; 0 - 1 (decimal)
 * @property        {number} [lightness=0] 						Lightness value; 0 - 1 (decimal)
 * @property        {number} [alpha=1] 							Alpha value; 0 - 1 (decimal)
 */
class Hsl
{
	_hue        = 0;
	_saturation = 0;
	_lightness  = 0;
	_alpha      = 1;

	/**
	 * Create an HSL color model
	 * @param 			{number} hue                               	Hue value
	 * @param        	{number} saturation 						Saturation value
	 * @param        	{number} lightness 							Lightness value
	 * @param        	{number} alpha 								Alpha value
	 */
	constructor ( hue, saturation, lightness, alpha )
	{
		////    COMPOSITION    /////////////////////////////

			this._isDegree  = VALIDATION.isDegree;
			this._isDecimal = VALIDATION.isDecimal;

			Object.defineProperty ( this, 'alpha', PROPERTY_BLOCKS.discrete.alpha );

		this.hue 		= hue;
		this.saturation = saturation;
		this.lightness  = lightness;
		this.alpha 		= ( alpha === undefined ) ? 1 : alpha;
	}

	////    [ HUE ]    /////////////////////////////////////

		/**
		 * Sets the hue value
		 * @public
		 * @name hue
		 * @function
		 * @param           {number} hue 							Hue value; 0 - 360
		 */
		set hue ( value )
		{
			this._hue = this._isDegree ( value ) ? value : this._hue;
		}

		/**
		 * Gets the hue value
		 * @public
		 * @name hue
		 * @function
		 * @return 			{number}								Hue value; 0 - 360
		 */
		get hue ( )
		{
			return this._hue;
		}

	////    [ SATURATION ]    //////////////////////////////

		/**
		 * Sets the saturation value
		 * @public
		 * @name saturation
		 * @function
		 * @param           {number} saturation 					Saturation value; 0 - 1
		 */
		set saturation ( value )
		{
			this._saturation = this._isDecimal ( value ) ? value : this._saturation;
		}

		/**
		 * Gets the saturation value
		 * @public
		 * @name saturation
		 * @function
		 * @return 			{number}								Saturation value; 0 - 1
		 */
		get saturation ( )
		{
			return this._saturation;
		}

	////    [ LIGHTNESS ]    ///////////////////////////////

		/**
		 * Sets the lightness value
		 * @public
		 * @name lightness
		 * @function
		 * @param           {number} lightness 						Lightness value; 0 - 1
		 */
		set lightness ( value )
		{
			this._lightness = this._isDecimal ( value ) ? value : this._lightness;
		}

		/**
		 * Gets the lightness value
		 * @public
		 * @name lightness
		 * @function
		 * @return 			{number}								Lightness value; 0 - 1
		 */
		get lightness ( )
		{
			return this._lightness;
		}

	////    [ VALIDATION ]    //////////////////////////////

		_isDegree  ( ) { }

		_isDecimal ( ) { }

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
			return `hsl(${this.hue}deg ${this.saturation * 100}% ${this.lightness * 100}% / ${this.alpha * 100}%)`;
		}
}
