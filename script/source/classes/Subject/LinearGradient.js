/**
 * @class           {Object} LinearGradient                     LinearGradient properties of associated object
 */
class LinearGradient
{
    _start      = new Point;
    _end        = new Point;

    _colorStops = new Object;

    /**
     * Create a LinearGradient
     * @property        {Point} start                              Starting point of linear gradient
     * @property        {Point} end                                Ending point of linear gradient
     * @property        {Array} colorStops                         Array of color stops
     */
    constructor ( start, end, colorStops )
    {
        ////    COMPOSITION     ////////////////////////////

            // this._isRgb   = VALIDATION.isRgb;
            // this._isAlpha = VALIDATION.isAlpha;
            this._isPoint  = VALIDATION.isPoint;
            // this._isNumber = VALIDATION.isNumber;

            this._getRgb = UTILITIES.get.rgb;

        // this.color = color;
        // this.alpha = alpha;
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

    ////    [ COLORSTOP ]    ///////////////////////////////




    ////    [ COLORSTOPS ]    //////////////////////////////




        // gradient.addColorStop(0, "green");
        // gradient.addColorStop(0.5, "cyan");
        // gradient.addColorStop(1, "green");

    ////    VALIDATION  ////////////////////////////////////

        // _isRgb   ( ) { }

        // _isAlpha ( ) { }

        _isPoint  ( ) { }

        // _isNumber ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        _getRgb ( ) { }
}
