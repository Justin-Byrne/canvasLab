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
     * Create a LinearGradient
     * @property        {number} offset                            Representation of the color stop position
     * @property        {string} color                             CSS color value
     */
    constructor ( offset, color )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isDecimal    = VALIDATION.isDecimal;
            this._isColorModel = VALIDATION.isColorModel;

        this.offset = offset;
        this.color  = color;
    }

    ////    [ OFFSET ]   ///////////////////////////////////

        /**
         * Set offset value
         * @param           {number} value                              Offset value
         */
        set offset ( value )
        {
            this._offset = ( this._isDecimal ( value ) ) ? value : this._offset;
        }

        /**
         * Get offset value
         * @return          {number}                                    Offset value
         */
        get offset ( )
        {
            return this._offset;
        }

    ////    [ COLOR ]     //////////////////////////////////

        /**
         * Set color value
         * @param           {string} value                              CSS color value
         */
        set color ( value )
        {
            this._color = ( this._isColorModel ( value ) ) ? value : this._color;
        }

        /**
         * Get color value
         * @return          {string}                                    CSS color value
         */
        get color ( )
        {
            return this._color;
        }

    ////    VALIDATION  ////////////////////////////////////

        _isDecimal    ( ) { }

        _isColorModel ( ) { }
}
