/**
 * @class           {Object} ControlPoints                      Defines the shape of a bezier curve
 * @property        {number}  p0                                Control point one
 * @property        {number}  p1                                Control point two
 * @property        {number}  p2                                Control point three
 * @property        {number}  p3                                Control point four
 */
class ControlPoints
{
    _p0 = 0;
    _p1 = 0;
    _p2 = 0;
    _p3 = 0;

    /**
     * Create control points
     * @param           {number}  p0                                Control point one
     * @param           {number}  p1                                Control point two
     * @param           {number}  p2                                Control point three
     * @param           {number}  p3                                Control point four
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
         * @public
         * @function
         * @param           {number} value                              Control point one
         */
        set p0 ( value )
        {
            this._p0 = ( this._isNumber ( value ) ) ? value : this._p0;
        }

        /**
         * Get control point one
         * @readOnly
         * @function
         * @return          {number}                                    Control point one
         */
        get p0 ( )
        {
            return this._p0;
        }

    ////    [ TWO ]     ////////////////////////////////////////

        /**
         * Set control point one
         * @public
         * @function
         * @param           {number} value                              Control point two
         */
        set p1 ( value )
        {
            this._p1 = ( this._isNumber ( value ) ) ? value : this._p1;
        }

        /**
         * Get control point one
         * @readOnly
         * @function
         * @return          {number}                                    Control point two
         */
        get p1 ( )
        {
            return this._p1;
        }

    ////    [ THREE ]     //////////////////////////////////////

        /**
         * Set control point one
         * @public
         * @function
         * @param           {number} value                              Control point three
         */
        set p2 ( value )
        {
            this._p2 = ( this._isNumber ( value ) ) ? value : this._p2;
        }

        /**
         * Get control point one
         * @readOnly
         * @function
         * @return          {number}                                    Control point three
         */
        get p2 ( )
        {
            return this._p2;
        }

    ////    [ FOUR ]     ////////////////////////////////////////

        /**
         * Set control point one
         * @public
         * @function
         * @param           {number} value                              Control point four
         */
        set p3 ( value )
        {
            this._p3 = ( this._isNumber ( value ) ) ? value : this._p3;
        }

        /**
         * Get control point one
         * @readOnly
         * @function
         * @return          {number}                                    Control point four
         */
        get p3 ( )
        {
            return this._p3;
        }

    ////    VALIDATION  ////////////////////////////////////////

        /**
         * Returns whether the passed value is a Number value
         * @private
         * @function
         * @param           {number} value                              Number value
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isNumber}
         */
        _isNumber ( ) { }
}
