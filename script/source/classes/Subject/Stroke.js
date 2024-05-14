/**
 * @class           {Object}   Stroke                           Stroke properties of associated object
 * @property        {Object}   [color=<Rgb>]                    Color model & value
 * @property        {string}   [type='solid']                   Stroke type; solid | dashed
 * @property        {number[]} [segments=[5, 5]]                Dashed line segment distance(s); <array<numbers>>
 * @property        {number}   [width=2]                        Thickness of stroke
 * @property        {Shadow}   shadow                           Shadow properties
 */
class Stroke
{
    _color    = new Rgb;
    _type     = 'solid';
    _segments = [ 5, 5 ];
    _width    = 1;

    /**
     * Create a stroke
     * @param           {Object}   color                            RGB color value
     * @param           {number}   type                             Stroke type
     * @param           {number[]} segments                         Dashed line segment distance(s)
     * @param           {number}   alpha                            Alpha value; number/decimal
     * @param           {number}   width                            Thickness of stroke
     */
    constructor ( color, type, segments, width )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isColorModel = VALIDATION.isColorModel;
            this._isStrokeType = VALIDATION.isStrokeType;
            this._isSegments   = VALIDATION.isSegments;
            this._isWidth      = VALIDATION.isWidth;

        this.color    = color;
        this.type     = type;
        this.segments = segments;
        this.width    = width;
    }

    ////    [ TYPE ]    ////////////////////////////////////

        /**
         * Set type
         * @public
         * @name type
         * @function
         * @param           {number} value                              Type: (0) Solid or (1) Dashed
         */
        set type ( value )
        {
            this._type = ( this._isStrokeType ( value ) ) ? value : this._type;
        }

        /**
         * Get type
         * @readOnly
         * @name type
         * @function
         * @return          {number}                                    Type: (0) Solid or (1) Dashed
         */
        get type ( )
        {
            return this._type;
        }

    ////    [ SEGMENTS ]    ////////////////////////////////

        /**
         * Set segment value
         * @public
         * @name segments
         * @function
         * @param           {Array} value                               Dashed line segment distance(s)
         */
        set segments ( value )
        {
            ( this._isSegments ( value ) ) ? [ this._segments, this._type ] = [ value,          'dashed' ]

                                           : [ this._segments, this._type ] = [ this._segments, 'solid'   ];
        }

        /**
         * Get segment value
         * @readOnly
         * @name segments
         * @function
         * @return          {Array}                                     Dashed line segment distance(s)
         */
        get segments ( )
        {
            return this._segments;
        }

    ////    [ COLOR ]   ////////////////////////////////////

        /**
         * Set color value
         * @public
         * @name color
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
         * @name color
         * @function
         * @return          {Object}                                    Color model; Rgb, Hsl, Hwb
         */
        get color ( )
        {
            return this._color;
        }

    ////    [ WIDTH ]   ////////////////////////////////////

        /**
         * Set width value
         * @public
         * @name width
         * @function
         * @param           {number} value                              Thickness of stroke
         */
        set width ( value )
        {
            this._width = ( this._isWidth ( value ) ) ? value : this._width;
        }

        /**
         * Get width value
         * @readOnly
         * @name width
         * @function
         * @return          {number}                                    Thickness of stroke
         */
        get width ( )
        {
            return this._width;
        }

    ////    VALIDATION  ////////////////////////////////////

        _isColorModel ( ) { }

        _isStrokeType ( ) { }

        _isSegments   ( ) { }

        _isWidth      ( ) { }
}
