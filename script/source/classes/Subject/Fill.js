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

            this._isFillType   = VALIDATION.isFillType;
            this._isColorModel = VALIDATION.isColorModel;
            this._isGradient   = VALIDATION.isGradient;

        this.color    = color;
        this.type     = type;
        this.gradient = gradient;
    }

    ////    [ COLOR ]    ///////////////////////////////////

        /**
         * Set color type
         * @public
         * @name color
         * @function
         * @param           {Object} value                              Color model
         */
        set color ( value )
        {
            this._color = this._isColorModel ( value ) ? value : this._color;
        }

        /**
         * Get color type
         * @readOnly
         * @name color
         * @function
         * @return          {Object}                                    Color model
         */
        get color ( )
        {
            return this._color;
        }

    ////    [ TYPE ]    ////////////////////////////////////

        /**
         * Set type value
         * @public
         * @name type
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
         * @name type
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
         * @name gradient
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
         * @name gradient
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
         * @name pattern
         * @function
         * @return          {Pattern}                                   Pattern fill object
         */
        get pattern ( )
        {
            return this._pattern;
        }

    ////    VALIDATION    //////////////////////////////////

        _isFillType   ( ) { }

        _isColorModel ( ) { }

        _isGradient   ( ) { }
}
