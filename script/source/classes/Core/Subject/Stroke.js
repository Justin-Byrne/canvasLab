/**
 * @class           {Object}   Stroke                           Stroke properties of associated object
 * @property        {Object}   [color=<Rgb>]                    Color model & value
 * @property        {string}   [type='solid']                   Stroke type; 'solid' || 'dashed'
 * @property        {number[]} [segments=[5, 5]]                Dashed line segment distance(s)
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
     * @param           {string}   type                             Stroke type
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
         * @function
         * @param           {string} value                              Stroke type: 'solid' || 'dashed'
         */
        set type ( value )
        {
            this._type = ( this._isStrokeType ( value ) ) ? value : this._type;
        }

        /**
         * Get type
         * @readOnly
         * @function
         * @return          {string}                                    Stroke type: 'solid' || 'dashed'
         */
        get type ( )
        {
            return this._type;
        }

    ////    [ SEGMENTS ]    ////////////////////////////////

        /**
         * Set segment value
         * @public
         * @function
         * @param           {Array.<number>} value                      Dashed line segment distance(s)
         */
        set segments ( value )
        {
            this._segments = ( this._isSegments ( value ) ) ? value : this._segments;
        }

        /**
         * Get segment value
         * @readOnly
         * @function
         * @return          {Array.<number>}                            Dashed line segment distance(s)
         */
        get segments ( )
        {
            return this._segments;
        }

    ////    [ COLOR ]   ////////////////////////////////////

        /**
         * Set color value
         * @public
         * @function
         * @param           {Rgb} value                                 Color model
         */
        set color ( value )
        {
            this._color = ( this._isColorModel ( value ) ) ? value : this._color;
        }

        /**
         * Get color value
         * @public
         * @function
         * @return          {Rgb}                                       Color model
         */
        get color ( )
        {
            return this._color;
        }

    ////    [ WIDTH ]   ////////////////////////////////////

        /**
         * Set width value
         * @public
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
         * @function
         * @return          {number}                                    Thickness of stroke
         */
        get width ( )
        {
            return this._width;
        }

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
         * Returns whether the passed value is an Array of segment values
         * @private
         * @function
         * @param           {Array.<number>} value                      Array of segment values
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isSegments}
         */
        _isSegments   ( ) { }

        /**
         * Returns whether the passed value is a stroke type
         * @private
         * @function
         * @param           {string} value                              Stroke type
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isStrokeType}
         */
        _isStrokeType ( ) { }

        /**
         * Returns whether the passed value is a width value
         * @private
         * @function
         * @param           {number} value                              Width value
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isWidth}
         */
        _isWidth      ( ) { }
}
