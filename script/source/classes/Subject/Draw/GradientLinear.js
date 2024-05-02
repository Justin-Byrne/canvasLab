/**
 * @class           {Object} GradientLinear                     GradientLinear properties of associated object
 * @property        {Point}  start                              X & Y axis coordinates (start)
 * @property        {Point}  end                                X & Y axis coordinates (end)
 * @property        {Array}  end                                X & Y axis coordinates (end)
 */
class GradientLinear
{
    _start = new Point;
    _end   = new Point;

    _stops = new Array;

    /**
     * Create a LinearGradient
     * @property        {Point} start                              Starting point of linear gradient
     * @property        {Point} end                                Ending point of linear gradient
     * @property        {Array} stops                              Array of color stops
     */
    constructor ( start, end, stops )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isPoint     = VALIDATION.isPoint;
            this._isColorName = VALIDATION.isColorName;
            this._isRgb       = VALIDATION.isRgb;
            this._isAlpha     = VALIDATION.isAlpha;

            this._getRgb = UTILITIES.get.rgb;

        this.start = start;
        this.end   = end;
        this.stops = stops;
    }

    ////    [ START ]   ////////////////////////////////////

        /**
         * Set starting point
         * @param           {Point} value                               Starting point
         */
        set start ( value )
        {
            this._start = ( this._isPoint ( value ) ) ? value : this._start;
        }

        /**
         * Set starting point
         * @return          {Point}                                     Starting point
         */
        get start ( )
        {
            return this._start;
        }

    ////    [ END ]     ////////////////////////////////////

        /**
         * Set ending point
         * @param           {Point} value                               Ending point
         */
        set end ( value )
        {
            this._end = ( this._isPoint ( value ) ) ? value : this._end;
        }

        /**
         * Set ending point
         * @return          {Point}                                     Ending point
         */
        get end ( )
        {
            return this._end;
        }

    ////    [ COLORSTOPS ]    //////////////////////////////

        // [ 0, "rgba(0,0,0,.5)" ],
        // [ 0, "rgb(0,0,0)" ],
        // [ 0, "green" ],
        // [ 0.5, "cyan" ],
        // [ 1, "green" ],

        // gradient.addColorStop(0, "rgba(0,0,0,.5)");
        // gradient.addColorStop(0, "rgb(0,0,0)");
        // gradient.addColorStop(0, "green");
        // gradient.addColorStop(0.5, "cyan");
        // gradient.addColorStop(1, "green");

    ////    VALIDATION  ////////////////////////////////////

        _isPoint     ( ) { }

        _isColorName ( ) { }

        _isRgb       ( ) { }

        _isAlpha     ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        _getRgb ( ) { }
}
