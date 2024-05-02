/**
 * @class           {Object} ColorStop                          ColorStop properties for associated array(s)
 * @property        {number} offset                             Representation of the color stop position; 0 = start, & 1 = end
 * @property        {string} color                              A CSS <color> value
 */
class ColorStop
{
    _offset = undefined;
    _color  = undefined;

    /**
     * Create a LinearGradient
     * @property        {number} offset                            Representation of the color stop position
     * @property        {string} color                             CSS color value
     */
    constructor ( offset, color )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isColorName = VALIDATION.isColorName;
            this._isRgb       = VALIDATION.isRgb;

            this._getRgb = UTILITIES.get.rgb;

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
            this._offset = ( this._isPoint ( value ) ) ? value : this._offset;
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
            this._color = ( this._isPoint ( value ) ) ? value : this._color;
        }

        /**
         * Get color value
         * @return          {string}                                    CSS color value
         */
        get color ( )
        {
            return this._color;
        }

    ////    [ COLORSTOPS ]    //////////////////////////////

        // [ 0, "rgba(0,0,0,.5)" ],
        // [ 0, "rgb(0,0,0)" ],
        // [ 0, "green" ],
        // [ 0.5, "cyan" ],
        // [ 1, "green" ],

        // gradient.addColorStop(0, "rgba(0,0,0,.5)");
        // gradient.addColorStop(0, "rgb(0,0,0)");
        // gradient.addColorStop(0, "green");
        // gradient.addColorStop(0.5, "cyan");

    ////    VALIDATION  ////////////////////////////////////

        _isColorName ( ) { }

        _isRgb       ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        _getRgb ( ) { }
}
