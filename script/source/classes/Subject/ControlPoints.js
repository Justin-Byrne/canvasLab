/**
 * @class           {Object} ControlPoints                      Defines the shape of a bezier curve
 * @property        {Point}  one                                Control point one
 * @property        {Point}  two                                Control point two
 */
class ControlPoints
{
    _one = new Point;
    _two = new Point;

    /**
     * Create control points
     * @param           {Point}  one                                Control point one
     * @param           {Point}  two                                Control point two
     */
    constructor (
                    one = { x: undefined, y: undefined },
                    two = { x: undefined, y: undefined }
                )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isPoint = VALIDATION.isPoint;

        this.one = one;
        this.two = two;
    }

    ////    [ ONE ]     ////////////////////////////////////////

        /**
         * Set control point one
         * @param           {Point} value                               Control Point ( x, y ) values
         */
        set one ( value )
        {
            this._one = ( this._isPoint ( value ) ) ? value : this._one;
        }

        /**
         * Get control point one
         * @return          {Point}                                     Control Point ( x, y ) values
         */
        get one ( )
        {
            return this._one;
        }

    ////    [ TWO ]     ////////////////////////////////////////

        /**
         * Set control point two
         * @param           {Point} value                               Control Point ( x, y ) values
         */
        set two ( value )
        {
            this._two = ( this._isPoint ( value ) ) ? value : this._two;
        }

        /**
         * Get control point two
         * @return          {Point}                                     Control Point ( x, y ) values
         */
        get two ( )
        {
            return this._two;
        }

    ////    VALIDATION  ////////////////////////////////////////

        _isPoint ( ) { }
}
