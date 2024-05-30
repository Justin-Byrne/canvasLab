/**
 * @class           {Object} Conic                              Conic gradient object type and properties
 * @property        {Point}  point                              X & Y axis coordinates
 * @property        {number} angle                              Angle in radians
 * @property        {Array.<Stop>} stops                        Array of color stops
 */
class Conic
{
    _point = new Point;
    _angle = 0;
    _stops = new Array;

    /**
     * Create a Conic gradient object type
     * @property        {number} angle                              Angle in radians
     * @property        {Point}  point                              Starting point of linear gradient
     * @property        {Array.<Stop>} stops                        Array of color stops
     */
    constructor ( angle, point, stops )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isPoint  = VALIDATION.isPoint;
            this._isRadian = VALIDATION.isRadian;
            this._isStop   = VALIDATION.isStop;

            this._stopColorCycle = UTILITIES.color.cycle.stop;

        this.point = point;
        this.angle = angle;
        this.stops = stops;
    }

    ////    [ ANGLE ]     //////////////////////////////////

        /**
         * Set angle property
         * @public
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
         * @function
         * @param           {Array.<Stop>} values                       Color stops
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
         * @function
         * @return          {Array.<Stop>}                              Color stops
         */
        get stops ( )
        {
            return this._stops;
        }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isPoint}
         */
        _isPoint  ( ) { }

        /**
         * Returns whether the passed value is a radian; 0 - 6.28...
         * @private
         * @function
         * @param           {number} value                              Radian value; 0 - 6.28...
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isRadian}
         */
        _isRadian ( ) { }

        /**
         * Returns whether the passed value is a Stop or object equivalent
         * @private
         * @function
         * @param           {Object} value                              Stop or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isStop}
         */
        _isStop   ( ) { }

    ////    UTILITIES    ///////////////////////////////////

        /**
         * Cycle colors for gradient stop(s)
         * @private
         * @function
         * @param           {Object}   start                            Color model & values
         * @param           {Object}   end                              Color model & values
         * @param           {number}   progress                         Progress time unit; 0.00 - 1.00
         * @param           {number}   stop                             Color stop to cycle
         * @param           {number}   max                              Maximum number of steps between interpolation
         * @param           {function} clear                            Clear callback from root object
         * @param           {function} draw                             Draw callback from root object
         * @see             {@link Utilities.color.cycle.stop}
         */
        _stopColorCycle ( ) { }
}
