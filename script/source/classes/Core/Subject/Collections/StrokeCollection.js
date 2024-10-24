/**
 * @class           {Object}   StrokeCollection                 Stroke properties of associated object
 * @property        {Object}   [color=<Rgb>]                    Color model & value
 * @property        {string}   [type='solid']                   Stroke type; solid | dashed
 * @property        {number[]} [segments=[5, 5]]                Dashed line segment distance(s)
 * @property        {number}   [alpha=1]                        Alpha (transparency); number/decimal
 * @property        {number}   [width=2]                        Thickness of stroke
 * @property        {Shadow}   shadow                           Shadow properties
 */
class StrokeCollection
{
    _color    = new Rgb;
    _type     = 'solid';
    _segments = [ 5, 5 ];
    _width    = 2;

    _master   = undefined;

    /**
     * Create a stroke collection
     */
    constructor ( )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isCanvasLabObject = VALIDATION.isCanvasLabObject;
            this._isColorModel      = VALIDATION.isColorModel;
            this._isStrokeType      = VALIDATION.isStrokeType;
            this._isSegments        = VALIDATION.isSegments;
            this._isWidth           = VALIDATION.isWidth;

            this._setAll = UTILITIES.individual.set.all;

            Object.defineProperty ( this, 'master', PROPERTY_BLOCKS.individual.master );
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ COLOR ]    /////////////////////

            /**
             * Set color value
             * @public
             * @function
             * @param           {string} value                              RGB color value
             */
            set color ( value )
            {
                if ( this._isColorModel ( value ) )

                    this._setAll ( 'color', value );
            }

            /**
             * Get color value
             * @public
             * @function
             * @return          {string}                                    RGB color value
             */
            get color ( )
            {
                return this._color;
            }

        ////    [ TYPE ]    //////////////////////

            /**
             * Set type
             * @public
             * @function
             * @param           {number} value                              Type: (0) Solid or (1) Dashed
             */
            set type ( value )
            {
                if ( this._isStrokeType ( value ) )

                    this._setAll ( 'type', value );
            }

            /**
             * Get type
             * @readOnly
             * @function
             * @return          {number}                                    Type: (0) Solid or (1) Dashed
             */
            get type ( )
            {
                return this._type;
            }

        ////    [ SEGMENTS ]    //////////////////

            /**
             * Set segment value
             * @public
             * @function
             * @param           {Array} value                               Dashed line segment distance(s)
             */
            set segments ( value )
            {
                if ( this._isSegments ( value ) )

                    this._setAll ( 'segments', value );
            }

            /**
             * Get segment value
             * @readOnly
             * @function
             * @return          {Array}                                     Dashed line segment distance(s)
             */
            get segments ( )
            {
                return this._segments;
            }

        ////    [ WIDTH ]    /////////////////////

            /**
             * Set width value
             * @public
             * @function
             * @param           {number} value                              Thickness of stroke
             */
            set width ( value )
            {
                if ( this._isWidth ( value ) )

                    this._setAll ( 'width', value );
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

        ////    [ MASTER ]    ////////////////////

            /**
             * Set master object
             * @public
             * @function
             * @param           {clObject} value                            Canvas Lab object
             * @see             {@link PROPERTY_BLOCKS.individual.master}
             */
            set master ( value ) { }

            /**
             * Get master object
             * @public
             * @function
             * @return          {clObject}                                  Master Canvas Lab object
             * @see             {@link PROPERTY_BLOCKS.individual.master}
             */
            get master ( ) { }

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

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Sets all option values throughout a collection
         * @private
         * @function
         * @param           {string}  property                          Option property
         * @param           {boolean} value                             True || False
         * @see             {@link UTILITIES.individual.set.all}
         */
        _setAll ( ) { }
}
