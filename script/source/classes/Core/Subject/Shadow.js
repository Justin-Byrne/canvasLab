/**
 * @class           {Object} Shadow                             Shadow of associated object
 * @property        {Object} [color=<Rgb>]                      RGB color value; r, g, b
 * @property        {number} [blur=3]                           Blur strength
 * @property        {Point}  offset                             Point offset coordinates
 */
class Shadow
{
    _color  = new Rgb;
    _blur   = 3;
    _offset = new Point;

    /**
     * Create a shadow
     * @param           {Object} color                              RGB color value
     * @param           {number} blur                               Shadow blur value
     * @param           {Point}  offset                             Shadow offset
     */
    constructor ( color, blur, offset = { x: undefined, y: undefined } )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isColorModel = VALIDATION.isColorModel;
            this._isBlur       = VALIDATION.isBlur;
            this._isPoint      = VALIDATION.isPoint;

            Object.defineProperty ( this, 'offset', PROPERTY_BLOCKS.individual.offset  );
            Object.defineProperty ( this, 'x',      PROPERTY_BLOCKS.individual.offsetX );
            Object.defineProperty ( this, 'y',      PROPERTY_BLOCKS.individual.offsetY );

        this.color  = color;
        this.blur   = blur;
        this.offset = offset;
    }

    ////    [ COLOR ]   ////////////////////////////////////

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

    ////    [ BLUR ]    ////////////////////////////////////

        /**
         * Set blur value
         * @public
         * @function
         * @param           {number} blur                               Blur value
         */
        set blur ( value )
        {
            this._blur = ( this._isBlur ( value ) ) ? value : this._blur;
        }

        /**
         * Get blur value
         * @readOnly
         * @function
         * @return          {number}                                    Blur value
         */
        get blur ( )
        {
            return this._blur;
        }

    ////    [ OFFSET.(X)(Y) ]   ////////////////////////////

        /**
         * Set offset
         * @public
         * @function
         * @param           {Point} value                               Shadow offset
         * @see             {@link PROPERTY_BLOCKS.individual.offset}
         */
        set offset ( value ) { }

        /**
         * Get offset
         * @public
         * @function
         * @return          {Point}                                     Shadow offset
         * @see             {@link PROPERTY_BLOCKS.individual.offset}
         */
        get offset ( ) { }


        /**
         * Set x-axis offset value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         * @see             {@link PROPERTY_BLOCKS.individual.offsetX}
         */
        set x ( value ) { }

        /**
         * Get x-axis offset value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         * @see             {@link PROPERTY_BLOCKS.individual.offsetX}
         */
        get x ( ) { }


        /**
         * Set the y-axis offset value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         * @see             {@link PROPERTY_BLOCKS.individual.offsetY}
         */
        set y ( value ) { }

        /**
         * Get y-axis offset value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         * @see             {@link PROPERTY_BLOCKS.individual.offsetY}
         */
        get y ( ) { }

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
         * Returns whether the passed value is a blur value
         * @private
         * @function
         * @param           {number} value                              Blur value
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isBlur}
         */
        _isBlur ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isPoint}
         */
        _isPoint ( ) { }
}
