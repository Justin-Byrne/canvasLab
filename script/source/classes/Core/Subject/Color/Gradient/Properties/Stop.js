/**
 * @class           {Object} Stop                               Color stop properties for associated array(s)
 * @property        {string} [color=<Rgb>]                      Color model & value
 * @property        {number} offset                             Representation of the color stop position; 0 = start, & 1 = end
 */
class Stop
{
    _color  = new Rgb;
    _offset = undefined;

    /**
     * Create a color stop
     * @property        {string} color                             CSS color value
     * @property        {number} offset                            Representation of the color stop position
     */
    constructor ( color, offset )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isColorModel = VALIDATION.isColorModel;
            this._isDecimal    = VALIDATION.isDecimal;

        this.color  = color;
        this.offset = offset;
    }

    ////    [ COLOR ]     //////////////////////////////////

        /**
         * Set color value
         * @public
         * @function
         * @param           {Object} value                              Color model; Rgb, Hsl, Hwb
         */
        set color ( value )
        {
            this._color = ( this._isColorModel ( value ) ) ? value : this._color;
        }

        /**
         * Get color value
         * @public
         * @function
         * @return          {Object}                                    Color model; Rgb, Hsl, Hwb
         */
        get color ( )
        {
            return this._color;
        }

    ////    [ OFFSET ]   ///////////////////////////////////

        /**
         * Set offset value
         * @public
         * @function
         * @param           {number} value                              Offset value
         */
        set offset ( value )
        {
            this._offset = ( this._isDecimal ( value ) ) ? value : this._offset;
        }

        /**
         * Get offset value
         * @readOnly
         * @function
         * @return          {number}                                    Offset value
         */
        get offset ( )
        {
            return this._offset;
        }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is a color model
         * @private
         * @function
         * @param           {Object} value                              Color model or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isColorModel}
         */
        _isColorModel ( ) { }

        /**
         * Returns whether the passed value is a decimal value; 0.00 - 1
         * @private
         * @function
         * @param           {number} value                              Decimal value; 0.00 - 1
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isDecimal}
         */
        _isDecimal ( ) { }
}
