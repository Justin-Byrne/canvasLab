/**
 * @class           {Object}   Stroke                           Stroke properties of associated object
 * @property        {number}   [type=0]                         Type: (0) Solid or (1) Dashed
 * @property        {number[]} [segments=[5, 5]]                Dashed line segment distance(s)
 * @property        {string}   [color='0, 0, 0']                RGB color value; r, g, b
 * @property        {number}   [alpha=1]                        Alpha (transparency); number/decimal
 * @property        {number}   [width=2]                        Thickness of stroke
 * @property        {Shadow}   shadow                           Shadow properties
 */
class Stroke
{
    _type     = 0;
    _segments = [ 5, 5 ];
    _color    = '0, 0, 0';
    _alpha    = 1;
    _width    = 1;

    /**
     * Create a stroke
     * @param           {number}   type                         Type: (0) Solid or (1) Dashed
     * @param           {number[]} segments                     Dashed line segment distance(s)
     * @param           {string}   color                        RGB color value
     * @param           {number}   alpha                        Alpha value; number/decimal
     * @param           {number}   width                        Thickness of stroke
     */
    constructor ( type, segments, color, alpha, width )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isType     = VALIDATION.isType;
            this._isSegments = VALIDATION.isSegments;
            this._isRgb      = VALIDATION.isRgb;
            this._isAlpha    = VALIDATION.isAlpha;
            this._isWidth    = VALIDATION.isWidth;

            this._getRgb = UTILITIES.get.rgb;

        this.type     = type;
        this.segments = segments;
        this.color    = color;
        this.alpha    = alpha;
        this.width    = width;
    }

    ////    [ TYPE ]    ////////////////////////////////////

        /**
         * Set type
         * @param           {number} value                              Type: (0) Solid or (1) Dashed
         */
        set type ( value )
        {
            this._type = ( this._isType ( value ) ) ? value : this._type;
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
            this._segments = ( this._isSegments ( value ) ) ? value : this._segments;
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

    ////    [ WIDTH ]   ////////////////////////////////////

        /**
         * Set width value
         * @param           {number} value                              Thickness of stroke
         */
        set width ( value )
        {
            this._width = ( this._isWidth ( value ) ) ? value : this._width;
        }

        /**
         * Get width value
         * @return          {number}                                    Thickness of stroke
         */
        get width ( )
        {
            return this._width;
        }

    ////    VALIDATION  ////////////////////////////////////

        _isType     ( ) { }

        _isSegments ( ) { }

        _isRgb      ( ) { }

        _isAlpha    ( ) { }

        _isWidth    ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        _getRgb ( ) { }
}
