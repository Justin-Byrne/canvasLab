/**
 * @class           {Object}        Radial                      Radial gradient object type and properties
 * @property        {Point}         start                       X & Y axis coordinates (start)
 * @property        {Number}        startRadius                 Starting radius of linear gradient
 * @property        {Point}         end                         X & Y axis coordinates (end)
 * @property        {Number}        endRadius                   Ending radius of linear gradient gradient
 * @property        {Array.<Stops>} stops                       Array of color stops
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
     * @property        {Point}         start                       Starting point of linear gradient
     * @property        {Number}        startRadius                 Starting radius of linear gradient gradient
     * @property        {Point}         end                         Ending point of linear gradient
     * @property        {Number}        endRadius                   Ending radius of linear gradient gradient
     * @property        {Array.<Stops>} stops                       Array of color stops
     */
    constructor ( start, startRadius, end, endRadius, stops )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isPoint      = VALIDATION.isPoint;
            this._isStop       = VALIDATION.isStop;
            this._isColorModel = VALIDATION.isColorModel;
            this._isRadius     = VALIDATION.isRadius;

            this._stopColorCycle = UTILITIES._stopColorCycle;

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
         * @name start
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
         * @name start
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
         * @name startRadius
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
         * @name startRadius
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
         * @name end
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
         * @name end
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
         * @name endRadius
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
         * @name endRadius
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
         * @name stops
         * @function
         * @param           {Array.<Stops>} value                       Color stops
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

        _isPoint      ( ) { }

        _isStop       ( ) { }

        _isColorModel ( ) { }

        _isRadius     ( ) { }

    ////    UTILITIES    ///////////////////////////////////

        _stopColorCycle ( ) { }
}
