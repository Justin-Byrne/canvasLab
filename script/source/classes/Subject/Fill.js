/**
 * @class           {Object}  Fill                              Fill container for various fill types
 * @property        {Object}  [color=<Rgb>]                     Color model & value
 * @property        {string}  [type='solid']                    Fill type; solid | linear | radial | conic | pattern
 * @property        {Object}  gradient                          Gradient object; Linear | Radial | Conic
 * @property        {Pattern} pattern                           Pattern fill object
 */
class Fill
{
    _color    = new Rgb ( 0, 0, 0, 0 );
    _type     = 'solid';
    _gradient = undefined;
    _pattern  = undefined;

    /**
     * Create a fill type
     * @param           {Object} [color=<Rgb>]                      Color model & value
     * @param           {string} [type='solid']                     Fill type
     * @param           {Object} gradient                           Gradient object
     */
    constructor ( color, type, gradient )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isColorModel = VALIDATION.isColorModel;
            this._isGradient   = VALIDATION.isGradient;
            this._isFillType   = VALIDATION.isFillType;

        this.color    = color;
        this.type     = type;
        this.gradient = gradient;
    }

    ////    [ COLOR ]    ///////////////////////////////////

        /**
         * Set color type
         * @public
         * @function
         * @param           {Object} value                              Color model; Rgb
         */
        set color ( value )
        {
            this._color = this._isColorModel ( value ) ? value : this._color;
        }

        /**
         * Get color type
         * @readOnly
         * @function
         * @return          {Object}                                    Color model; Rgb
         */
        get color ( )
        {
            return this._color;
        }

    ////    [ TYPE ]    ////////////////////////////////////

        /**
         * Set type value
         * @public
         * @function
         * @param           {string} value                              Fill type value
         */
        set type ( value )
        {
            this._type = ( this._isFillType ( value ) ) ? value : this._type;
        }

        /**
         * Get type value
         * @readOnly
         * @function
         * @return          {string}                                    Fill type value
         */
        get type ( )
        {
            return this._type;
        }

    ////    [ GRADIENT ]   /////////////////////////////////

        /**
         * Set gradient gradient properties
         * @public
         * @function
         * @param           {Object} value                              Gradient object & properties
         */
        set gradient ( value )
        {
            this._gradient = ( this._isGradient ( value ) ) ? value : this._gradient;

            this._type     = ( this._isGradient ( value ) ) ? value.constructor.name.toLowerCase ( ) : this._type;
        }

        /**
         * Get gradient gradient properties
         * @readOnly
         * @function
         * @return          {Object}                                    Gradient object & properties
         */
        get gradient ( )
        {
            return this._gradient;
        }

    ////    [ PATTERN ]   //////////////////////////////////

        /**
         * Get pattern fill object
         * @public
         * @function
         * @return          {Pattern}                                   Pattern fill object
         */
        get pattern ( )
        {
            return this._pattern;
        }

    ////    VALIDATION    //////////////////////////////////

        /**
         * Returns whether the passed value is a color model
         * @private
         * @function
         * @param           {Object} value                              Color model or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isColorModel}
         */
        _isColorModel ( ) { }

        /**
         * Returns whether the passed value is a gradient object
         * @private
         * @function
         * @param           {Object} value                              Gradient object
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isGradient}
         */
        _isGradient   ( ) { }

        /**
         * Returns whether the passed value is a fill type
         * @private
         * @function
         * @param           {string} value                              Fill type
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isFillType}
         */
        _isFillType   ( ) { }
}
