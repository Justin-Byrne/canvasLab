/**
 * @class           {Object} ControlPoints                      Defines the shape of a bezier curve
 * @property        {Point}  p0                                 Control point one
 * @property        {Point}  p1                                 Control point two
 * @property        {Point}  p2                                 Control point three
 * @property        {Point}  p3                                 Control point four
 */
class ControlPoints
{
    _p0 = 0;
    _p1 = 0;
    _p2 = 0;
    _p3 = 0;

    /**
     * Create control points
     * @param           {Point}  p0                                 Control point one
     * @param           {Point}  p1                                 Control point two
     * @param           {Point}  p2                                 Control point three
     * @param           {Point}  p3                                 Control point four
     */
    constructor ( p0, p1, p2, p3 )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isNumber = VALIDATION.isNumber;

        this.p0 = p0;
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }

    ////    [ ONE ]     ////////////////////////////////////////

        /**
         * Set control point one
         * @param           {Point} value                               Control Point ( x, y ) values
         */
        set p0 ( value )
        {
            this._p0 = ( this._isNumber ( value ) ) ? value : this._p0;
        }

        /**
         * Get control point one
         * @return          {Point}                                     Control Point ( x, y ) values
         */
        get p0 ( )
        {
            return this._p0;
        }

    ////    [ TWO ]     ////////////////////////////////////////

        /**
         * Set control point one
         * @param           {Point} value                               Control Point ( x, y ) values
         */
        set p1 ( value )
        {
            this._p1 = ( this._isNumber ( value ) ) ? value : this._p1;
        }

        /**
         * Get control point one
         * @return          {Point}                                     Control Point ( x, y ) values
         */
        get p1 ( )
        {
            return this._p1;
        }

    ////    [ THREE ]     //////////////////////////////////////

        /**
         * Set control point one
         * @param           {Point} value                               Control Point ( x, y ) values
         */
        set p2 ( value )
        {
            this._p2 = ( this._isNumber ( value ) ) ? value : this._p2;
        }

        /**
         * Get control point one
         * @return          {Point}                                     Control Point ( x, y ) values
         */
        get p2 ( )
        {
            return this._p2;
        }

    ////    [ FOUR ]     ////////////////////////////////////////

        /**
         * Set control point one
         * @param           {Point} value                               Control Point ( x, y ) values
         */
        set p3 ( value )
        {
            this._p3 = ( this._isNumber ( value ) ) ? value : this._p3;
        }

        /**
         * Get control point one
         * @return          {Point}                                     Control Point ( x, y ) values
         */
        get p3 ( )
        {
            return this._p3;
        }

    ////    VALIDATION  ////////////////////////////////////////

        _isNumber ( ) { }
}
