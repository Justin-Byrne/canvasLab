/**
 * @class           {Object} Shadow                             Shadow of associated object
 * @property        {string} [color='0, 0, 0']                  RGB color value; r, g, b
 * @property        {number} [alpha=1]                          Alpha (transparency) number/decimal
 * @property        {number} [blur=3]                           Blur strength
 * @property        {Point}  offset                             Point offset coordinates
 */
class Shadow
{
    _color  = '0, 0, 0';
    _alpha  = 1;
    _blur   = 3;

    _offset = new Point;

    /**
     * Create a shadow
     * @param           {string} color                              RGB color value
     * @param           {number} alpha                              Alpha value; number/decimal
     * @param           {number} blur                               Shadow blur value
     * @param           {Point}  offset                             Shadow offset
     */
    constructor ( color, alpha, blur, offset = { x: undefined, y: undefined } )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isRgb   = VALIDATION.isRgb;
            this._isAlpha = VALIDATION.isAlpha;
            this._isBlur  = VALIDATION.isBlur;
            this._isPoint = VALIDATION.isPoint;

            this._getRgb = UTILITIES.get.rgb;

            Object.defineProperty ( this, 'offset', PROPERTY_BLOCKS.discrete.offset  );
            Object.defineProperty ( this, 'x',      PROPERTY_BLOCKS.discrete.offsetX );
            Object.defineProperty ( this, 'y',      PROPERTY_BLOCKS.discrete.offsetY );

        this.color  = color;
        this.alpha  = alpha;
        this.blur   = blur;

        this.offset = offset;
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
            this._alpha = ( this._isAlpha ( value ) ) ? value : this._alpha;
        }

        /**
         * Get alpha value
         * @return          {number}                                    Alpha value; number/decimal
         */
        get alpha ( )
        {
            return this._alpha;
        }

    ////    [ BLUR ]    ////////////////////////////////////

        /**
         * Set blur value
         * @param           {number} blur                               Blur value
         */
        set blur ( value )
        {
            this._blur = ( this._isBlur ( value ) ) ? value : this._blur;
        }

        /**
         * Get blur value
         * @return          {number}                                    Blur value
         */
        get blur ( )
        {
            return this._blur;
        }

    ////    [ OFFSET.(X)(Y) ]   ////////////////////////////

        /**
         * Set offset
         * @param           {Point} value                               Shadow offset
         * @see             {@link discrete.offset}
         */
        set offset ( value ) { }

        /**
         * Get offset
         * @return          {Point}                                     Shadow offset
         * @see             {@link discrete.offset}
         */
        get offset ( ) { }


        /**
         * Set x-axis offset value
         * @param           {number} value                              X coordinate value
         * @see             {@link discrete.offsetX}
         */
        set x ( value ) { }

        /**
         * Get x-axis offset value
         * @return          {number}                                    X coordinate value
         * @see             {@link discrete.offsetX}
         */
        get x ( ) { }


        /**
         * Set the y-axis offset value
         * @param           {number} value                              Y coordinate value
         * @see             {@link discrete.offsetY}
         */
        set y ( value ) { }

        /**
         * Get y-axis offset value
         * @return          {number}                                    Y coordinate value
         * @see             {@link discrete.offsetY}
         */
        get y ( ) { }

    ////    VALIDATION  ////////////////////////////////////

        _isRgb   ( ) { }

        _isAlpha ( ) { }

        _isBlur  ( ) { }

        _isPoint ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        _getRgb ( ) { }
}
