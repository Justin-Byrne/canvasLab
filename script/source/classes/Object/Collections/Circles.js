/**
 * @class           {Array} Circles                             Collection of circle elements within an array
 * @property        {Point} point                               X & Y axis coordinates
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 */
class Circles extends Array
{
    _point   = new Point;

    _canvas  = undefined;

    _storage = { type: Circle }

    constructor ( point = { x: undefined, y: undefined }, canvas )
    {
        super ( );

        ////    COMPOSITION     ////////////////////////////

            this._isInDom = VALIDATION.isInDom;
            this._isPoint = VALIDATION.isPoint;

            this.pushPop = UTILITIES.pushPop;
            this.draw    = UTILITIES.draw.typicalCollection;

            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.combined.canvas );

        this.point = point;
        this.canvas = canvas;
    }

    ////    [ POINT ]   ////////////////////////////////////

        set point ( value )
        {
            this._point = ( this._isPoint ( value ) ) ? value : this._point;
        }

        get point ( )
        {
            return this._point;
        }


        set x ( value ) { this._point.x = value; }

        get x ( )       { return this._point.x;  }


        set y ( value ) { this._point.y = value; }

        get y ( )       { return this._point.y;  }

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

        _isInDom ( ) { }

        _isPoint ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        pushPop ( ) { }

    ////    DRAW    ////////////////////////////////////////

        draw ( ) { }
}
