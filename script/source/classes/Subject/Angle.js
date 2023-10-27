/**
 * @class           {Object}  Angle                             Angle properties of associated object
 * @property        {number}  [start=0]                         The start of the angle, in radians; measured from the positive x-axis
 * @property        {number}  [end=360]                         The end of the angle, in radians; measured from the positive x-axis
 * @property        {boolean} [clockwise=true]                  Path arc clockwise
 */
class Angle
{
    _start     = 0;
    _end       = 360;
    _clockwise = true;

    /**
     * Create an angle
     * @param           {number}  start                             The angle at which the arc starts in degrees, measured from the positive x-axis
     * @param           {number}  end                               The angle at which the arc ends in degrees, measured from the positive x-axis
     * @param           {boolean} clockwise                         Draws the arc clockwise between the start and end angles
     */
    constructor ( start, end, clockwise )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isRadian = VALIDATION.isRadian;
            this._isDegree = VALIDATION.isDegree;

        this.start     = start;
        this.end       = end;
        this.clockwise = clockwise;
    }

    ////    [ START ]   ////////////////////////////////////

        /**
         * Set start angle
         * @param           {number} value                              Start angle; in degrees
         */
        set start ( value )
        {
            this._start = ( this._isDegree ( value ) ) ? value : this._start;
        }

        /**
         * Get start angle
         * @return          {number}                                    Start value; in degrees
         */
        get start ( )
        {
            return this._start;
        }

        ////    UTILITY     ////////////////////////////

            /**
             * Get start angle in radians
             * @return          {number}                                    Start value; to radians
             */
            get startInRadians ( )
            {
                return this._convert2Radian ( this.start );
            }

    ////    [ END ]     ////////////////////////////////////

        /**
         * Set end angle
         * @param           {number} value                              End angle; in degrees
         */
        set end ( value )
        {
            this._end = ( this._isDegree ( value ) ) ? value : this._end;
        }

        /**
         * Get end angle
         * @return          {number}                                    End angle; in degrees
         */
        get end ( )
        {
            return this._end;
        }

        ////    UTILITY     ////////////////////////////

            /**
             * Get end angle in radians
             * @return          {number}                                    End value; in radians
             */
            get endInRadians ( )
            {
                return this._convert2Radian ( this.end );
            }

    ////    [ CLOCKWISE ]   ////////////////////////////////

        /**
         * Set clockwise
         * @param           {boolean} value                             Clockwise; true | false
         */
        set clockwise ( value )
        {
            this._clockwise = ( typeof value === 'boolean' ) ? value : this._clockwise;
        }

        /**
         * Get clockwise
         * @return          {boolean}                                   Clockwise; true | false
         */
        get clockwise ( )
        {
            return this._clockwise;
        }

    ////    VALIDATION  ////////////////////////////////////

        _isRadian ( ) { }

        _isDegree ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Convert degree to radian
         * @param           {number} value                              Degree
         * @return          {number}                                    Conversion in radians
         */
        _convert2Radian ( value )
        {
            return ( this._isDegree ) ? ( value * ( Math.PI / 180 ) ) : console.warn ( `${value} is not a degree value !` );
        }

        /**
         * Convert radian to degree
         * @param           {number} value                              Radian
         * @return          {number}                                    Conversion in degrees
         */
        _convert2Degree ( value )
        {
            return ( this._isRadian ) ? ( value / ( Math.PI / 180 ) ) : console.warn ( `${value} is not a radian value !` );
        }
}
