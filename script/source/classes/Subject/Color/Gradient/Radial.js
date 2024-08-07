/**
 * @class           {Object} Radial                             Radial gradient object type and properties
 * @property        {Point}  start                              X & Y axis coordinates (start)
 * @property        {Number} startRadius                        Starting radius of linear gradient
 * @property        {Point}  end                                X & Y axis coordinates (end)
 * @property        {Number} endRadius                          Ending radius of linear gradient gradient
 * @property        {Array.<Stop>} stops                        Array of color stops
 */
class Radial
{
    _start       = new Point;
    _startRadius = 0;

    _end         = new Point;
    _endRadius   = 0;

    _stops       = new Array;

    /**
     * Create a Radial gradient object type and properties
     * @property        {Point}  start                              Starting point of linear gradient
     * @property        {Number} startRadius                        Starting radius of linear gradient gradient
     * @property        {Point}  end                                Ending point of linear gradient
     * @property        {Number} endRadius                          Ending radius of linear gradient gradient
     * @property        {Array.<Stop>} stops                        Array of color stops
     */
    constructor ( start, startRadius, end, endRadius, stops )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isPoint      = VALIDATION.isPoint;
            this._isStop       = VALIDATION.isStop;
            this._isColorModel = VALIDATION.isColorModel;
            this._isRadius     = VALIDATION.isRadius;

            this._stopColorCycle = UTILITIES.color.cycle.stop;

        this.start       = start;
        this.startRadius = startRadius;

        this.end         = end;
        this.endRadius   = endRadius;

        this.stops       = stops;
    }

    ////    [ START ]   ////////////////////////////////////

        /**
         * Set starting point
         * @public
         * @function
         * @param           {Point} value                               Starting point
         */
        set start ( value )
        {
            this._start = ( this._isPoint ( value ) ) ? value : this._start;
        }

        /**
         * Set starting point
         * @readOnly
         * @function
         * @return          {Point}                                     Starting point
         */
        get start ( )
        {
            return this._start;
        }

    ////    [ START RADIUS ]     ///////////////////////////

        /**
         * Set starting radius
         * @public
         * @function
         * @param           {Number} value                              Starting radius
         */
        set startRadius ( value )
        {
            this._startRadius = ( this._isRadius ( value ) ) ? value : this._startRadius;
        }

        /**
         * Set starting radius
         * @readOnly
         * @function
         * @return          {Number}                                    Starting radius
         */
        get startRadius ( )
        {
            return this._startRadius;
        }

    ////    [ END ]     ////////////////////////////////////

        /**
         * Set ending point
         * @public
         * @function
         * @param           {Point} value                               Ending point
         */
        set end ( value )
        {
            this._end = ( this._isPoint ( value ) ) ? value : this._end;
        }

        /**
         * Set ending point
         * @readOnly
         * @function
         * @return          {Point}                                     Ending point
         */
        get end ( )
        {
            return this._end;
        }

    ////    [ END RADIUS ]     /////////////////////////////

        /**
         * Set ending radius
         * @public
         * @function
         * @param           {Number} value                              Ending radius
         */
        set endRadius ( value )
        {
            this._endRadius = ( this._isRadius ( value ) ) ? value : this._endRadius;
        }

        /**
         * Set ending radius
         * @readOnly
         * @function
         * @return          {Number}                                    Ending radius
         */
        get endRadius ( )
        {
            return this._endRadius;
        }

    ////    [ STOPS ]    ///////////////////////////////////

        /**
         * Set color stops
         * @public
         * @function
         * @param           {Array.<Stop>} value                        Color stops
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
         * Returns whether the passed value is a color model
         * @private
         * @function
         * @param           {Object} value                              Color model or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isColorModel}
         */
        _isColorModel ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isPoint}
         */
        _isPoint  ( ) { }

        /**
         * Returns whether the passed value is a radius value
         * @private
         * @function
         * @param           {number} value                              Radius value
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isRadius}
         */
        _isRadius ( ) { }

        /**
         * Returns whether the passed value is a Stop or object equivalent
         * @private
         * @function
         * @param           {Object} value                              Stop or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isStop}
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
         * @see             {@link UTILITIES.color.cycle.stop}
         */
        _stopColorCycle ( ) { }
}
