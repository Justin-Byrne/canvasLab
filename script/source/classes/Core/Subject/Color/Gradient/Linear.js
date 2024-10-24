/**
 * @class           {Object}       Linear                       Linear gradient object type and properties
 * @property        {Point}        start                        Start X & Y axis coordinates
 * @property        {Point}        end                          End X & Y axis coordinates
 * @property        {Array.<Stop>} stops                        Array of color stops
 */
class Linear
{
    _start = new Point;
    _end   = new Point;
    _stops = new Array;

    /**
     * Create a Linear gradient object type
     * @property        {Point}        start                        Starting point of linear gradient
     * @property        {Point}        end                          Ending point of linear gradient
     * @property        {Array.<Stop>} stops                        Array of color stops
     */
    constructor ( start, end, stops )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isColorModel = VALIDATION.isColorModel;
            this._isPoint      = VALIDATION.isPoint;
            this._isStop       = VALIDATION.isStop;

            this.__stopColorCycle = UTILITIES.individual.color.cycle.stop;

        this.start = start;
        this.end   = end;
        this.stops = stops;
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ START ]    /////////////////////

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

        ////    [ END ]    ///////////////////////

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

        ////    [ STOPS ]    /////////////////////

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
         * @see             {@link UTILITIES.individual.color.cycle.stop}
         */
        _stopColorCycle ( ) { }
}
