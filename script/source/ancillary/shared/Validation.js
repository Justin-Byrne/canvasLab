/**
 * Shared validation functions
 * @namespace       VALIDATION
 */
const VALIDATION =
{
    /**
     * Returns whether the passed value is a 256 color value; 0 - 255
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {number} value                              256 color value; 0 - 255
     * @return          {boolean}                                   True || False
     */
    is256 ( value )
    {
        return ( ( typeof value === 'number' )  &&  ( value >= 0 && value <= 255 ) );
    },

    /**
     * Returns whether the passed value is an Anchor alignment
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {string} value                              Anchor alignment
     * @return          {boolean}                                   True || False
     */
    isAnchor ( value )
    {
        let _options = [ 'center', 'top', 'topRight', 'right', 'bottomRight', 'bottom', 'bottomLeft', 'left', 'topLeft' ];


        for ( let _option of _options ) if ( value === _option )  return true;


        return false;
    },

    /**
     * Returns whether the passed value is an Angle or equivalent value
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {Object|number} value                       Angle object or number value
     * @return          {boolean}                                   True || False
     */
    isAngle ( value )
    {
        if ( value instanceof Angle ) return true;


        return ( ( typeof value === 'number' )  &&  ( value <= 360 ) );
    },

    /**
     * Returns whether the passed value is an Anchor alignment
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {string} value                              Anchor alignment
     * @return          {boolean}                                   True || False
     */
    isAlign ( value )
    {
        let _options = [ 'center', 'top', 'topRight', 'right', 'bottomRight', 'bottom', 'bottomLeft', 'left', 'topLeft' ];


        for ( let _option of _options ) if ( value === _option )  return true;


        return false;
    },

    /**
     * Returns whether the passed value is an alpha value; 0.00 - 1
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {number} value                              Alpha value; 0.00 - 1
     * @return          {boolean}                                   True || False
     */
    isAlpha ( value )
    {
        return (  ( typeof value === 'number' )  &&  ( value >= 0 && value <= 1  )  );
    },

    /**
     * Returns whether the passed value is an Aspect
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {Object} value                              Aspect or object equivalent
     * @return          {boolean}                                   True || False
     */
    isAspect ( value )
    {
        if ( value instanceof Aspect ) return true;

        // // // // // // // // // // // // // // // // // // // // // // // //

        let _length = ( Object.keys ( value ).length == 2 );

        let _width  = ( value.hasOwnProperty ( 'width'  ) ) ? ( typeof value.width === 'number' )  : false;

        let _height = ( value.hasOwnProperty ( 'height' ) ) ? ( typeof value.height === 'number' ) : false;


        return ( _width && _height && _length );
    },

    /**
     * Returns whether the passed value is a blur value
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {number} value                              Blur value
     * @return          {boolean}                                   True || False
     */
    isBlur ( value )
    {
        return ( ( typeof value === 'number' )  &&  ( value >= 0 ) );
    },

    /**
     * Returns whether the passed value is a CanvasLab object; Line, Circle, Rectangle, Text
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {Object} value                              CanvasLab object; Line, Circle, Rectangle, Text
     * @return          {boolean}                                   True || False
     */
    isCanvasLabObject ( value )
    {
        if ( value instanceof Line      ) return true;

        if ( value instanceof Circle    ) return true;

        if ( value instanceof Rectangle ) return true

        if ( value instanceof Text      ) return true;


        return false;
    },

    /**
     * Returns whether the passed value is a CSS color name
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {string} value                              CSS color name
     * @return          {boolean}                                   True || False
     */
    isColorName ( value )
    {
        let _colors =
        {
            A:
            [
                'aliceblue',
                'antiquewhite',
                'aqua',
                'aquamarine',
                'azure'
            ],
            B:
            [
                'beige',
                'bisque',
                'black',
                'blanchedalmond',
                'blue',
                'blueviolet',
                'brown',
                'burlywood'
            ],
            C:
            [
                'cadetblue',
                'chartreuse',
                'chocolate',
                'coral',
                'cornflowerblue',
                'cornsilk',
                'crimson',
                'cyan'
            ],
            D:
            [
                'darkblue',
                'darkcyan',
                'darkgoldenrod',
                'darkgray',
                'darkgreen',
                'darkkhaki',
                'darkmagenta',
                'darkolivegreen',
                'darkorange',
                'darkorchid',
                'darkred',
                'darksalmon',
                'darkseagreen',
                'darkslateblue',
                'darkslategray',
                'darkturquoise',
                'darkviolet',
                'deeppink',
                'deepskyblue',
                'dimgray',
                'dodgerblue'
            ],
            E: [ ],
            F:
            [
                'firebrick',
                'floralwhite',
                'forestgreen',
                'fuchsia'
            ],
            G:
            [
                'gainsboro',
                'ghostwhite',
                'gold',
                'goldenrod',
                'gray',
                'green',
                'greenyellow'
            ],
            H:
            [
                'honeydew',
                'hotpink'
            ],
            I:
            [
                'indianred',
                'indigo',
                'ivory'
            ],
            J: [ ],
            K:
            [
                'khaki'
            ],
            L:
            [
                'lavender',
                'lavenderblush',
                'lawngreen',
                'lemonchiffon',
                'lightblue',
                'lightcoral',
                'lightcyan',
                'lightgoldenrodyellow',
                'lightgreen',
                'lightgrey',
                'lightpink',
                'lightsalmon',
                'lightseagreen',
                'lightskyblue',
                'lightslategray',
                'lightsteelblue',
                'lightyellow',
                'lime',
                'limegreen',
                'linen'
            ],
            M:
            [
                'magenta',
                'maroon',
                'mediumaquamarine',
                'mediumblue',
                'mediumorchid',
                'mediumpurple',
                'mediumseagreen',
                'mediumslateblue',
                'mediumspringgreen',
                'mediumturquoise',
                'mediumvioletred',
                'midnightblue',
                'mintcream',
                'mistyrose',
                'moccasin'
            ],
            N:
            [
                'navajowhite',
                'navy',
                'navyblue'
            ],
            O:
            [
                'oldlace',
                'olive',
                'olivedrab',
                'orange',
                'orangered',
                'orchid'
            ],
            P:
            [
                'palegoldenrod',
                'palegreen',
                'paleturquoise',
                'palevioletred',
                'papayawhip',
                'peachpuff',
                'peru',
                'pink',
                'plum',
                'powderblue',
                'purple'
            ],
            Q: [ ],
            R:
            [
                'red',
                'rosybrown',
                'royalblue'
            ],
            S:
            [
                'saddlebrown',
                'salmon',
                'sandybrown',
                'seagreen',
                'seashell',
                'sienna',
                'silver',
                'skyblue',
                'slateblue',
                'slategray',
                'snow',
                'springgreen',
                'steelblue'
            ],
            T:
            [
                'tan',
                'teal',
                'thistle',
                'tomato',
                'turquoise'
            ],
            U: [ ],
            V:
            [
                'violet'
            ],
            W:
            [
                'wheat',
                'white',
                'whitesmoke'
            ],
            X: [ ],
            Y:
            [
                'yellow',
                'yellowgreen'
            ],
            Z: [ ]
        }


        return _colors [ value [ 0 ].toUpperCase ( ) ].includes ( value );
    },

    /**
     * Returns whether the passed value is a color model
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {Object} value                              Color model or object equivalent
     * @return          {boolean}                                   True || False
     */
    isColorModel ( value )
    {
        return ( value instanceof Rgb ) ? true : false;
    },

    /**
     * Returns whether the passed value is a decimal value; 0.00 - 1
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {number} value                              Decimal value; 0.00 - 1
     * @return          {boolean}                                   True || False
     */
    isDecimal ( value )
    {
        return ( ( typeof value === 'number' )  &&  ( value >= 0 && value <= 1  ) );
    },

    /**
     * Returns whether the passed value is a degree
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {number} value                              Degree
     * @return          {boolean}                                   True || False
     */
    isDegree ( value )
    {
        return ( ( typeof value === 'number' )  &&  ( value <= 360 ) );
    },

    /**
     * Returns whether the passed value is a fill type
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {string} value                              Fill type
     * @return          {boolean}                                   True || False
     */
    isFillType ( value )
    {
        return [ 'solid', 'linear', 'radial', 'conic', 'pattern' ].includes ( value );
    },

    /**
     * Returns whether the passed value is a gradient object
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {Object} value                              Gradient object
     * @return          {boolean}                                   True || False
     */
    isGradient ( value )
    {
        if ( value instanceof Linear ) return true;

        if ( value instanceof Radial ) return true;

        if ( value instanceof Conic  ) return true;


        return false;
    },

    /**
     * Returns whether the passed value is an element id within the DOM
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {string} value                              Element id
     * @return          {boolean}                                   True || False
     */
    isInDom ( value )
    {
        return ( document.getElementById ( value ) != null );
    },

    /**
     * Returns whether the passed value is a Number value
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {number} value                              Number value
     * @return          {boolean}                                   True || False
     */
    isNumber ( value )
    {
        return ( ( typeof value === 'number')  &&  !isNaN ( value ) );
    },

    /**
     * Returns whether the passed value is a Point
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {Object} value                              Point or object equivalent
     * @return          {boolean}                                   True || False
     */
    isPoint ( value )
    {
        if ( value instanceof Point ) return true;

        // // // // // // // // // // // // // // // // // // // // // // // //

        let _length = ( Object.keys ( value ).length == 2 );

        let _x      = ( value.hasOwnProperty ( 'x' ) ) ? ( typeof value.x === 'number' ) : false;

        let _y      = ( value.hasOwnProperty ( 'y' ) ) ? ( typeof value.y === 'number' ) : false;


        return ( _length && _x && _y );
    },

    /**
     * Returns whether the passed value is a radian; 0 - 6.28...
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {number} value                              Radian value; 0 - 6.28...
     * @return          {boolean}                                   True || False
     */
    isRadian ( value )
    {
        return ( ( typeof value === 'number' )  &&  ( value >= 0 && value <= 6.283185307179586 ) );
    },

    /**
     * Returns whether the passed value is a radius value
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {number} value                              Radius value
     * @return          {boolean}                                   True || False
     */
    isRadius ( value )
    {
        return ( ( typeof value === 'number' )  &&  ( value > 0 ) );
    },

    /**
     * Returns whether the passed value is an Array of segment values
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {Array.<number>} value                      Array of segment values
     * @return          {boolean}                                   True || False
     */
    isSegments ( value )
    {
        function isArrayNumeric ( value )
        {
            let _result = undefined;


            for ( let _element of value )
            {
                _result = ( typeof _element != 'number' ) ? false : true;


                if ( _result == false ) break;
            }


            return _result;
        }


        return ( Array.isArray ( value ) ) ? isArrayNumeric ( value ) : false;
    },

    /**
     * Returns whether the passed value is a Stop or object equivalent
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {Object} value                              Stop or object equivalent
     * @return          {boolean}                                   True || False
     */
    isStop ( value )
    {
        if ( value instanceof Stop ) return true;

        // // // // // // // // // // // // // // // // // // // // // // // //

        let _object = ( typeof value === 'object'  &&  ! Array.isArray ( value ) );

        let _offset = ( value.hasOwnProperty ( 'offset' ) ) ? VALIDATION.isNumber     ( value.offset ) : false;

        let _color  = ( value.hasOwnProperty ( 'color'  ) ) ? VALIDATION.isColorModel ( value.color  ) : false;


        return ( _object && _offset && _color );
    },

    /**
     * Returns whether the passed value is a stroke type
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {string} value                              Stroke type
     * @return          {boolean}                                   True || False
     */
    isStrokeType ( value )
    {
        return ( ( typeof value === 'string' )  &&  [ 'solid', 'dashed' ].includes ( value ) );
    },

    /**
     * Returns whether the passed value is a width value
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {number} value                              Width value
     * @return          {boolean}                                   True || False
     */
    isWidth ( value )
    {
        return ( ( typeof value === 'number' )  &&  ( value >= 0 ) );
    }
}
