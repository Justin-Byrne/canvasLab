/**
 * @class           {Object} ShadowCollection                   Shadow of associated object
 * @property        {Object} [color=<Rgb>]                      Color model & value
 * @property        {number} blur                               Blur strength
 * @property        {Point}  offset                             Point offset coordinates
 */
class ShadowCollection
{
    _color  = new Rgb;
    _blur   = 3;
    _offset = new Point;

    /**
     * Create a shadow collection
     */
    constructor ( )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isColorModel = VALIDATION.isColorModel;
            this._isBlur       = VALIDATION.isBlur;
            this._isPoint      = VALIDATION.isPoint;

            this._setAll = UTILITIES.set.all;
    }

    ////    [ COLOR ]   ////////////////////////////////////

        /**
         * Set color value
         * @public
         * @name color
         * @function
         * @param           {string} value                              RGB color value
         */
        set color ( value )
        {
            if ( this._isColorModel ( value ) )  this._setAll ( 'color', value );
        }

        /**
         * Get color value
         * @public
         * @name color
         * @function
         * @return          {string}                                    RGB color value
         */
        get color ( )
        {
            return this._color;
        }

    ////    [ BLUR ]    ////////////////////////////////////

        /**
         * Set blur value
         * @public
         * @name blur
         * @function
         * @param           {number} blur                               Blur value
         */
        set blur ( value )
        {
            if ( this._isBlur ( value ) )  this._setAll ( 'blur', value );
        }

        /**
         * Get blur value
         * @readOnly
         * @name blur
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
         * @name offset
         * @function
         * @param           {Point} value                               Shadow offset
         */
        set offset ( value )
        {
            if ( this._isPoint ( value ) )  this._setAll ( 'offset', value );
        }

        /**
         * Get offset
         * @public
         * @name offset
         * @function
         * @return          {Point}                                     Shadow offset
         */
        get offset ( )
        {
            return this._offset;
        }


        /**
         * Set x-axis offset value
         * @public
         * @name x
         * @function
         * @param           {number} value                              X coordinate value
         */
        set x ( value ) { this._offset.x = value; }

        /**
         * Get x-axis offset value
         * @readOnly
         * @name x
         * @function
         * @return          {number}                                    X coordinate value
         */
        get x ( )       { return this._offset.x;  }


        /**
         * Set the y-axis offset value
         * @public
         * @name y
         * @function
         * @param           {number} value                              Y coordinate value
         */
        set y ( value ) { this._offset.y = value; }

        /**
         * Get y-axis offset value
         * @readOnly
         * @name y
         * @function
         * @return          {number}                                    Y coordinate value
         */
        get y ( )       { return this._offset.y;  }

    ////    VALIDATION  ////////////////////////////////////

        _isBlur  ( ) { }

        _isPoint ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        _setAll ( ) { }
}
