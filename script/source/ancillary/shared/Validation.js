/**
 * Shared validation functions
 * @namespace       VALIDATION
 */
const VALIDATION =
{
    is256 ( value )
    {
        return (  ( typeof value === 'number' )  &&  ( value >= 0 && value <= 255 )  );
    },
    isAnchor ( value )
    {
        let _options = [ 'center', 'top', 'topRight', 'right', 'bottomRight', 'bottom', 'bottomLeft', 'left', 'topLeft' ];


        for ( let _option of _options ) if ( value === _option )  return true;


        return false;
    },
    isAlpha ( value )
    {
        return (  ( typeof value === 'number' )  &&  ( value >= 0 && value <= 1  )  );
    },
    isAspect ( value )
    {
        let _aspect = ( value instanceof Aspect );

        let _length = ( Object.keys ( value ).length == 2 );

        let _width  = ( value.hasOwnProperty ( 'width'  ) ) ? ( typeof value.width === 'number' )  : false;

        let _height = ( value.hasOwnProperty ( 'height' ) ) ? ( typeof value.height === 'number' ) : false;


        return ( _aspect || _width && _height && _length );
    },
    isBlur ( value )
    {
        return ( ( typeof value === 'number' )  &&  ( value >= 0 ) );
    },
    isCanvasLabObject ( value )
    {
        if ( value instanceof Line      ) return true;

        if ( value instanceof Circle    ) return true;

        if ( value instanceof Rectangle ) return true

        if ( value instanceof Text      ) return true;


        return false;
    },
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
    isColorModel ( value )
    {
        if ( value instanceof Rgb ) return true;

        if ( value instanceof Hsl ) return true;

        if ( value instanceof Hwb ) return true;


        return false;
    },
    isColorStop ( value )
    {
        // @TODO: a more robust & informative checking system should be put into place here, while considering performance !

        let _array = ( Array.isArray ( value )          &&  ( value.length === 2 ) );

        let _stop  = ( typeof value [ 0 ] === 'number'  &&  ( value [ 0 ] >= 0 &&  value [ 0 ] <= 1 ) );

        let _color = ( typeof value [ 1 ] === 'string' );


        return ( _array  &&  _stop  &&  _color );
    },
    isDecimal ( value )
    {
        return ( ( typeof value === 'number' )  &&  ( value >= 0 && value <= 1  ) );
    },
    isDegree ( value )
    {
        return ( ( typeof value === 'number' )  &&  ( value <= 360 ) );
    },
    isFillType ( value )
    {
        return [ 'solid', 'linear', 'radial', 'conic', 'pattern' ].includes ( value );
    },
    isInDom ( elementId )
    {
        return ( document.getElementById ( elementId ) != null );
    },
    isNumber ( value )
    {
        return ( ( typeof value === 'number')  &&  !isNaN ( value ) );
    },
    isPoint ( value )
    {
        let _point  = ( value instanceof Point );

        let _length = ( Object.keys ( value ).length == 2 );

        let _x      = ( value.hasOwnProperty ( 'x' ) ) ? ( typeof value.x === 'number' ) : false;

        let _y      = ( value.hasOwnProperty ( 'y' ) ) ? ( typeof value.y === 'number' ) : false;


        return ( _point || _length && _x && _y );
    },
    isRadian ( value )
    {
        return ( ( typeof value === 'number' )  &&  ( value >= 0 && value <= 6.283185307179586 ) );
    },
    isRadius ( value )
    {
        return ( ( typeof value === 'number' )  &&  ( value > 0 ) );
    },
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
    isStrokeType ( value )
    {
        return ( ( typeof value === 'string' )  &&  [ 'solid', 'dashed' ].includes ( value ) );
    },
    isWidth ( value )
    {
        return ( ( typeof value === 'number' )  &&  ( value >= 0 ) );
    }
}
