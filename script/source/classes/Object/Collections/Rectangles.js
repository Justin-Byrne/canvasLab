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

    constructor ( point = { x: undefined, y: undefined }, canvas )
    {
        super ( );

        ////    COMPOSITION     ////////////////////////////

            this.pushPop = UTILITIES.pushPop;

            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.combined.canvas );

        this.x = point.x;
        this.y = point.y;

        this.canvas = canvas;
    }

    ////    [ POINT ]   ////////////////////////////////////

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

        _isInDom ( elementId )
        {
            return ( document.getElementById ( elementId ) != null );
        }

    ////    UTILITIES   ////////////////////////////////////

        pushPop ( ) { }

    ////    DRAW    ////////////////////////////////////////

        draw ( canvas )
        {
            if ( canvas != undefined ) this.canvas = canvas;


            if ( this.length > 0 )

                for ( let _rectangle of this )
                {
                    _rectangle.x += this.x;
                    _rectangle.y += this.y;

                    _rectangle.draw ( );
                }

            else

                console.warn ( `No ${this.constructor.name} exist to draw !` );
        }
}
