/**
 * @class           {Object}  Point                             X & Y coordinates for an object
 * @property        {number}  [x=0]                             X - x-axis coordinate
 * @property        {number}  [y=0]                             Y - y-axis coordinate
 * @property        {Options} options                           Ancillary properties
 */
class Point
{
    _x = 0;
    _y = 0;

    _canvas = undefined;

    #_options = new Options;

    /**
     * Create a point
     * @param           {number} x                                  X coordinate value
     * @param           {number} y                                  Y coordinate value
     */
    constructor ( x, y )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isAspect = VALIDATION.isAspect;
            this._isInDom  = VALIDATION.isInDom;

            this._drawAxis    = UTILITIES.draw.axis;
            this._drawBorder  = UTILITIES.draw.border;
            this._rotatePoint = UTILITIES.misc.rotatePoint;

            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.discrete.canvas );

            delete this.#_options._shadow;
            delete this.#_options._border;

        this.x = x;
        this.y = y;
    }

    ////    [ X ]   ////////////////////////////////////////

        /**
         * Set x-axis value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         */
        set x ( value )
        {
            this._x = (  ( typeof value === 'number' )  &&  !isNaN ( value )  ) ? value : this._x;
        }

        /**
         * Get x-axis value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         */
        get x ( )
        {
            return this._x;
        }

    ////    [ Y ]   ////////////////////////////////////////

        /**
         * Set the y-axis value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         */
        set y ( value )
        {
            this._y = (  ( typeof value === 'number' )  &&  !isNaN ( value )  ) ? value : this._y;
        }

        /**
         * Get y-axis value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         */
        get y ( )
        {
            return this._y;
        }

    ////    [ CANVAS ]  ////////////////////////////////////

        /**
         * Set canvas value
         * @public
         * @function
         * @param           {string} value                              Canvas id
         */
        set canvas ( value ) { }

        /**
         * Get canvas value
         * @readOnly
         * @function
         * @return          {string}                                     Canvas id
         */
        get canvas ( ) { }

    ////    [ OPTIONS ] ////////////////////////////////////

        /**
         * Get options
         * @public
         * @function
         * @return          {Options}                                   Options object
         */
        get options ( )
        {
            return this.#_options;
        }

    ////    & EXTEND &  ////////////////////////////////////

        /**
         * Get center of this object
         * @readOnly
         * @function
         * @return          {Point}                                     Center point coordinates
         */
        get center ( )
        {
            return new Point ( this.x, this.y );
        }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is an Aspect
         * @private
         * @function
         * @param           {Object} value                              Aspect or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isAspect}
         */
        _isAspect ( ) { }

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isInDom}
         */
        _isInDom  ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {number} offset                             Offset of axis
         * @param           {Object} color                              Color model
         * @param           {number} stop                               Gradient color stop
         * @see             {@link UTILITIES.draw.axis}
         */
        _drawAxis   ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {Aspect} aspect                             Aspect properties
         * @param           {Object} color                              Color model
         * @see             {@link UTILITIES.draw.border}
         */
        _drawBorder ( ) { }

        /**
         * Rotates the origin point by the degree & distance passed
         * @private
         * @function
         * @param           {Point}  origin                             Origin point
         * @param           {number} degree                             Degree to rotate
         * @param           {number} distance                           Distance from origin
         * @see             {@link UTILITIES.misc.rotatePoint}
         */
        _rotatePoint ( ) { }

        /**
         * Draws associated options
         * @public
         * @function
         * @param           {number} offset                             Offset of drawable options
         */
        drawOptions ( )
        {
            let _offset = 20;

            let _aspect = new Aspect ( _offset, _offset );

            ////////////////////////////////////////////////////////////////////

            this._drawBorder ( _aspect );

            this._drawAxis   ( );
        }

        /**
         * Invert x & y coordinate values
         * @public
         * @function
         */
        invert ( )
        {
            let _y = this.y;

            [ this.y, this.x ] = [ this.x, _y ];
        }

        /**
         * Move this object
         * @public
         * @function
         * @param           {number}  degree                            Direction to move; in degrees
         * @param           {number}  distance                          Distance to move
         */
        move ( degree, distance )
        {
            let _point = this._rotatePoint ( { x: this.x, y: this.y }, degree, distance );


            [ this.x, this.y ] = [ _point.x, _point.y ];
        }
}
