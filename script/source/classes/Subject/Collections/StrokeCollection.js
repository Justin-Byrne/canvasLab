/**
 * @class           {Object}   StrokeCollection                 Stroke properties of associated object
 * @property        {number}   [type=0]                         Type: (0) Solid or (1) Dashed
 * @property        {number[]} [segments=[5, 5]]                Dashed line segment distance(s)
 * @property        {string}   [color='0, 0, 0']                RGB color value; r, g, b
 * @property        {number}   [alpha=1]                        Alpha (transparency); number/decimal
 * @property        {number}   [width=2]                        Thickness of stroke
 * @property        {Shadow}   shadow                           Shadow properties
 */
class StrokeCollection
{
    _type     = 0;
    _segments = [ 5, 5 ];
    _color    = '0, 0, 0';
    _alpha    = 1;
    _width    = 2;

    _master   = undefined;

    /**
     * Create a stroke collection
     */
    constructor ( )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isType     = VALIDATION.isType;
            this._isSegments = VALIDATION.isSegments;
            this._isRgb      = VALIDATION.isRgb;
            this._isAlpha    = VALIDATION.isAlpha;
            this._isWidth    = VALIDATION.isWidth;

            this._getRgb = UTILITIES.get.rgb;
            this._setAll = UTILITIES.set.all;
    }

    ////    [ TYPE ]    ////////////////////////////////////

        /**
         * Set type
         * @param           {number} value                              Type: (0) Solid or (1) Dashed
         */
        set type ( value )
        {
            if ( this._isType ( value ) ) this._setAll ( 'type', value );
        }

        /**
         * Get type
         * @return          {number}                                    Type: (0) Solid or (1) Dashed
         */
        get type ( )
        {
            return this._type;
        }

    ////    [ SEGMENTS ]    ////////////////////////////////

        /**
         * Set segment value
         * @param           {Array} value                               Dashed line segment distance(s)
         */
        set segments ( value )
        {
            if ( this._isSegments ( value ) ) this._setAll ( 'segments', value );
        }

        /**
         * Get segment value
         * @return          {Array}                                     Dashed line segment distance(s)
         */
        get segments ( )
        {
            return this._segments;
        }

    ////    [ COLOR ]   ////////////////////////////////////

        /**
         * Set color value
         * @param           {string} value                              RGB color value
         */
        set color ( value )
        {
            if ( this._isRgb ( value ) ) this._setAll ( 'color', value );
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
            if ( this._isAlpha ( value ) ) this._setAll ( 'alpha', value );
        }

        /**
         * Get alpha value
         * @return          {number}                                    Alpha value; number/decimal
         */
        get alpha ( )
        {
            return this._alpha;
        }

    ////    [ WIDTH ]   ////////////////////////////////////

        /**
         * Set width value
         * @param           {number} value                              Thickness of stroke
         */
        set width ( value )
        {
            if ( this._isWidth ( value ) ) this._setAll ( 'width', value );
        }

        /**
         * Get width value
         * @return          {number}                                    Thickness of stroke
         */
        get width ( )
        {
            return this._width;
        }

    ////    [ MASTER ]  ////////////////////////////////////

        set master ( value )
        {
            this._master = ( typeof value === 'object' )

                               ? value

                               : console.error ( `[ERROR] "${ value.constructor.name }", is not a valid type !` );
        }

    ////    VALIDATION  ////////////////////////////////////

        _isType     ( ) { }

        _isSegments ( ) { }

        _isRgb      ( ) { }

        _isAlpha    ( ) { }

        _isWidth    ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        _getRgb ( ) { }

        _setAll ( ) { }
}
