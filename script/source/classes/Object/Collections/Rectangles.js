/**
 * @class           {Array} Rectangles                          Collection of Rectangle objects
 * @property        {Point} point                               X & Y axis coordinates
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 */
class Rectangles extends Array
{
    _point   = new Point;

    _canvas  = undefined;

    _storage = { type: Rectangle }

    /**
     * Create Rectangles object
     * @property        {Point}             point                   X & Y axis coordinates
     * @property        {HTMLCanvasElement} canvas                  Canvas Id
     */
    constructor ( point = { x: undefined, y: undefined }, canvas )
    {
        super ( );

        ////    COMPOSITION     ////////////////////////////

            this._isInDom = VALIDATION.isInDom;
            this._isPoint = VALIDATION.isPoint;

            this._clearCanvas       = UTILITIES.misc.clearCanvas;
            this.draw               = UTILITIES.draw.collection.twoDimensional;
            this.pushPop            = UTILITIES.pushPop;

            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.combined.canvas );
            Object.defineProperty ( this, 'point',  PROPERTY_BLOCKS.discrete.point  );
            Object.defineProperty ( this, 'x',      PROPERTY_BLOCKS.discrete.pointX );
            Object.defineProperty ( this, 'y',      PROPERTY_BLOCKS.discrete.pointY );

        this.x = point.x;
        this.y = point.y;

        this.canvas = canvas;
    }

    ////    [ POINT ]   ////////////////////////////////////

        /**
         * Set point
         * @public
         * @function
         * @param           {Point} value                               X & Y coordinates
         * @see             {@link discrete.point}
         */
        set point ( value ) { }

        /**
         * Get point
         * @public
         * @function
         * @return          {Point}                                     X & Y coordinates
         * @see             {@link discrete.point}
         */
        get point ( ) { }


        /**
         * Set x-axis value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         * @see             {@link discrete.pointX}
         */
        set x ( value ) { }

        /**
         * Get x-axis value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         * @see             {@link discrete.pointX}
         */
        get x ( ) { }


        /**
         * Set the y-axis value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         * @see             {@link discrete.pointY}
         */
        set y ( value ) { }

        /**
         * Get y-axis value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         * @see             {@link discrete.pointY}
         */
        get y ( ) { }

    ////    [ CANVAS ]  ////////////////////////////////////

        /**
         * Set canvas value
         * @param           {string} value                              Canvas id
         * @see             {@link combined.canvas}
         */
        set canvas ( value ) { }

        /**
         * Get canvas value
         * @return          {string}                                    Canvas id
         * @see             {@link combined.canvas}
         */
        get canvas ( ) { }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isInDom}
         */
        _isInDom  ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Returns the last Point within this Array
         * @public
         * @function
         * @return          {Point}                                     Last Array element's X & Y Coordinates
         */
        get endPoint ( )
        {
            return this [ this.length - 1 ].point;
        }

        /**
         * Push or pops the passed object
         * @public
         * @function
         * @param           {Object} object                             Object; Circle, Rectangle, Text
         * @see             {@link Utilities.misc.pushPop}
         */
        pushPop ( ) { }

    ////    DRAW    ////////////////////////////////////////

        /**
         * Draw this object
         * @public
         * @function
         * @param           {string} canvas                             Canvas Id
         */
        draw ( ) { }

        /**
         * Redraw this object
         * @public
         * @function
         * @param           {string}  canvas                            Canvas Id
         * @param           {Point}   point                             Point of new location
         * @param           {boolean} [clear=true]                      Clear canvas during each redraw
         */
        redraw ( canvas, point = { x: undefined, y: undefined }, clear = true )
        {
            [ this.x, this.y ] = [ point.x, point.y ]


            this._clearCanvas ( clear );


            this.draw ( canvas );
        }
}
