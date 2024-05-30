/**
 * @class           {Object} Stop                               Color stop properties for associated array(s)
 * @property        {number} offset                             Representation of the color stop position; 0 = start, & 1 = end
 * @property        {string} [color=<Rgb>]                      Color model & value
 */
class Stop
{
    _offset = undefined;
    _color  = new Rgb;

    /**
     * Create a color stop
     * @property        {number} offset                            Representation of the color stop position
     * @property        {string} color                             CSS color value
     */
    constructor ( offset, color )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isColorModel = VALIDATION.isColorModel;
            this._isDecimal    = VALIDATION.isDecimal;

        this.offset = offset;
        this.color  = color;
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

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is a color model
         * @private
         * @function
         * @param           {Object} value                              Color model or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isColorModel}
         */
        _isColorModel ( ) { }

        /**
         * Returns whether the passed value is a decimal value; 0.00 - 1
         * @private
         * @function
         * @param           {number} value                              Decimal value; 0.00 - 1
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isDecimal}
         */
        _isDecimal    ( ) { }
}
