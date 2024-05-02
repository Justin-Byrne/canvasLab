/**
 * @class           {Object}         Fill                       Fill container for various fill types
 * @property        {Object}         [color=<Rgb>]              Color model & value
 * @property        {string}         [type='solid']             Fill type; solid | linear | radial | conic | pattern
 * @property        {GradientLinear} linear                     Linear Gradient fill object
 * @property        {GradientRadial} radial                     Radial Gradient fill object
 * @property        {GradientConic}  conic                      Conic Gradient fill object
 * @property        {FillPattern}    pattern                    Pattern fill object
 */
class Fill
{
    _color = new Rgb ( 0, 0, 0, 0 );
    _type  = 'solid';

    _gradient =
    {
        linear: undefined,
        radial: undefined,
        conic:  undefined
    }

    _pattern  = undefined;

    /**
     * Create a fill type
     * @param           {string} type                              Fill type
     */
    constructor ( color, type )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isFillType   = VALIDATION.isFillType;
            this._isColorModel = VALIDATION.isColorModel;

        this.color = color;
        this.type  = type;

        ////    INSTANTIATE FILL TYPE    ///////////////////

        this._init ( );
    }

    ////    [ COLOR ]    ///////////////////////////////////

        set color ( value )
        {
            this._color = this._isColorModel ( value ) ? value : this._color;
        }

        get color ( )
        {
            return this._color;
        }

    ////    [ TYPE ]    ////////////////////////////////////

        /**
         * Set type value
         * @param           {string} value                              Fill type value
         */
        set type ( value )
        {
            this._type = ( this._isFillType ( value ) ) ? value : this._type;
        }

        /**
         * Get type value
         * @return          {string}                                    Fill type value
         */
        get type ( )
        {
            return this._type;
        }

    ////    [ LINEAR ]   ///////////////////////////////////

        /**
         * Get linear gradient fill object
         * @return          {GradientLinear}                            Linear gradient fill object
         */
        get linear ( )
        {
            return this._linear;
        }

    ////    [ RADIAL ]   ///////////////////////////////////

        /**
         * Get radial gradient fill object
         * @return          {GradientRadioal}                           Radial gradient fill object
         */
        get radial ( )
        {
            return this._radial;
        }

    ////    [ RADIAL ]   ///////////////////////////////////

        /**
         * Get conic gradient fill object
         * @return          {GradientConic}                             Conic gradient fill object
         */
        get conic ( )
        {
            return this._conic;
        }

    ////    [ PATTERN ]   //////////////////////////////////

        /**
         * Get pattern fill object
         * @return          {FillPattern}                               Pattern fill object
         */
        get pattern ( )
        {
            return this._pattern;
        }

    ////    VALIDATION  ////////////////////////////////////

        _isColorModel ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        // _getRgb ( ) { }

    ////    INIT    ////////////////////////////////////////

        _init ( )
        {
            switch ( this.type )
            {
                case 'solid':

                    break;

                case 'linear':

                    break;

                case 'radial':

                    break;

                case 'conic':

                    break;

                case 'pattern':

                    break;
            }
        }
}
