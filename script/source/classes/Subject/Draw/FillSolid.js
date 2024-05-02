/**
 * @class           {Object} FillSolid                          Solid fill properties of associated object
 * @property        {string} [color='255, 255, 255']            RGB color value; r, g, b
 * @property        {number} [alpha=0]                          Alpha (transparency); number/decimal
 */
class FillSolid
{
    _color = '255, 255, 255';
    _alpha = 1;

    /**
     * Create a fill, solid
     * @param           {string} color                              RGB color value
     * @param           {number} alpha                              Alpha value; number/decimal
     */
    constructor ( color, alpha )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isRgb   = VALIDATION.isRgb;
            this._isAlpha = VALIDATION.isAlpha;

            this._getRgb = UTILITIES.get.rgb;

        this.color = color;
        this.alpha = alpha;
    }

    ////    [ COLOR ]   ////////////////////////////////////

        /**
         * Set color value
         * @param           {string} value                              RGB color value
         */
        set color ( value )
        {
            this._color = ( this._isRgb ( value ) ) ? this._getRgb ( value ) : this._color;
        }

        /**
         * Get color value
         * @return          {string}                                    RGB color value
         */
        get color ( )
        {
            return this._color;
        }

    ////    [ ALPHA ]   ////////////////////////////////////

        /**
         * Set alpha value
         * @param           {number} value                              Alpha value; number/decimal
         */
        set alpha ( value )
        {
            this._alpha  = ( this._isAlpha ( value ) ) ? value : this._alpha;
        }

        /**
         * Get alpha value
         * @return          {number}                                    Alpha value; number/decimal
         */
        get alpha ( )
        {
            return this._alpha;
        }

    ////    VALIDATION  ////////////////////////////////////

        _isRgb   ( ) { }

        _isAlpha ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        _getRgb ( ) { }
}
