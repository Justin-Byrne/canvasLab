/**
 * @class           {Object}        Conic                       Conic gradient object type and properties
 * @property        {number}        angle                       Angle in radians
 * @property        {Point}         point                       X & Y axis coordinates
 * @property        {Array.<Stops>} stops                       Array of color stops
 */
class Conic
{
    _point = new Point;

    _angle = 0;

    _stops = new Array;

    /**
     * Create a Conic gradient object type
     * @property        {number}        angle                      Angle in radians
     * @property        {Point}         point                      Starting point of linear gradient
     * @property        {Array.<Stops>} stops                      Array of color stops
     */
    constructor ( angle, point, stops )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isPoint  = VALIDATION.isPoint;
            this._isRadian = VALIDATION.isRadian;
            this._isStop   = VALIDATION.isStop;

            this._stopColorCycle = UTILITIES._stopColorCycle;

        this.point = point;
        this.angle = angle;
        this.stops = stops;
    }

    ////    [ ANGLE ]     //////////////////////////////////

        /**
         * Set angle property
         * @public
         * @name angle
         * @function
         * @param           {Angle} value                               Angle object
         */
        set angle ( value )
        {
            this._angle = ( this._isRadian ( value ) ) ? value : this._angle;
        }

        /**
         * Set angle property
         * @readOnly
         * @name angle
         * @function
         * @return          {Angle}                                     Angle object
         */
        get angle ( )
        {
            return this._angle;
        }

    ////    [ START ]   ////////////////////////////////////

        /**
         * Set point
         * @public
         * @name point
         * @function
         * @param           {Point} value                               Point
         */
        set point ( value )
        {
            this._point = ( this._isPoint ( value ) ) ? value : this._point;
        }

        /**
         * Get point
         * @readOnly
         * @name point
         * @function
         * @return          {Point}                                     Point
         */
        get point ( )
        {
            return this._point;
        }

    ////    [ STOPS ]    ///////////////////////////////////

        /**
         * Set color stops
         * @public
         * @name stops
         * @function
         * @param           {Array.<Stops>} values                      Color stops
         */
        set stops ( value )
        {
            if ( Array.isArray ( value ) )

                for ( let _stop of value )

                    if ( this._isStop ( _stop ) )

                        this._stops.push ( _stop );
            else

                console.warn ( '[ ERROR ]: value is not of type Array !' );
        }

        /**
         * Get color stops
         * @readOnly
         * @name stops
         * @function
         * @return          {Array.<Stops>}                             Color stops
         */
        get stops ( )
        {
            return this._stops;
        }

    ////    VALIDATION  ////////////////////////////////////

        _isPoint  ( ) { }

        _isRadian ( ) { }

        _isStop   ( ) { }

    ////    UTILITIES    ///////////////////////////////////

        _stopColorCycle ( ) { }
}
