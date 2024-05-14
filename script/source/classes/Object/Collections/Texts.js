/**
 * @class           {Array} Texts                               Collection of Text objects
 * @property        {Point} point                               X & Y axis coordinates
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 */
class Texts extends Array
{
    _point   = new Point;

    _canvas  = undefined;

    _storage = { type: Text }

    constructor ( point = { x: undefined, y: undefined }, canvas )
    {
        super ( );

        ////    COMPOSITION     ////////////////////////////

            this._isInDom = VALIDATION.isInDom;
            this._isPoint = VALIDATION.isPoint;

            this.pushPop = UTILITIES.pushPop;
            this.draw    = UTILITIES.draw.typicalCollection;

            Object.defineProperty ( this, 'point',  PROPERTY_BLOCKS.discrete.point  );
            Object.defineProperty ( this, 'x',      PROPERTY_BLOCKS.discrete.pointX );
            Object.defineProperty ( this, 'y',      PROPERTY_BLOCKS.discrete.pointY );
            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.combined.canvas );

        this.point = point;

        this.canvas = canvas;
    }

    ////    [ POINT ]   ////////////////////////////////////

        /**
         * Set point
         * @public
         * @name point
         * @function
         * @param           {Point} point                               X & Y axis coordinates
         */
        set point ( value ) { }

        /**
         * Get point
         * @public
         * @name point
         * @function
         * @return          {Point}                                     X & Y axis coordinates
         */
        get point ( ) { }


        /**
         * Set x-axis value
         * @public
         * @name x
         * @function
         * @param           {number} value                              X coordinate value
         */
        set x ( value ) { }

        /**
         * Get x-axis value
         * @readOnly
         * @name x
         * @function
         * @return          {number}                                    X coordinate value
         */
        get x ( ) {  }

        /**
         * Set y-axis value
         * @public
         * @name y
         * @function
         * @param           {number} value                              Y coordinate value
         */
        set y ( value ) { }

        /**
         * Get y-axis value
         * @readOnly
         * @name y
         * @function
         * @return          {number}                                    Y coordinate value
         */
        get y ( ) { }

    ////    [ CANVAS ]  ////////////////////////////////////

        /**
         * Set canvas value
         * @public
         * @name canvas
         * @function
         * @param           {string} value                              Canvas id
         * @see             {@link combined.canvas}
         */
        set canvas ( value ) { }

        /**
         * Get canvas value
         * @readOnly
         * @name canvas
         * @function
         * @return          {string}                                    Canvas id
         * @see             {@link combined.canvas}
         */
        get canvas ( ) { }

    ////    VALIDATION  ////////////////////////////////////

        _isInDom ( ) { }

        _isPoint ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        pushPop ( ) { }

    ////    DRAW    ////////////////////////////////////////

        draw ( ) { }
}
