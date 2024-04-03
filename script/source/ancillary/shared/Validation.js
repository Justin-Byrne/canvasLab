/**
 * Shared validation functions
 * @namespace       VALIDATION
 */
const VALIDATION =
{
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
        let _aspect  = ( value instanceof Aspect );

        let _length = ( Object.keys ( value ).length == 2 );

        let _width  = ( value.hasOwnProperty ( 'width' ) )  ? ( typeof value.width === 'number' )  : false;

        let _height = ( value.hasOwnProperty ( 'height' ) ) ? ( typeof value.height === 'number' ) : false;


        return ( _aspect || _width && _height && _length );
    },
    isBlur ( value )
    {
        return (  ( typeof value === 'number' )  &&  ( value >= 0 )  );
    },
    isCanvasLabObject ( value )
    {
        return (  ( value instanceof Line )  ||  ( value instanceof Circle )  ||  ( value instanceof Rectangle )  ||  ( value instanceof Text )  );
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
    isDegree ( value )
    {
        return (  ( typeof value === 'number' )  &&  ( value <= 360 )  );
    },
    isInDom ( elementId )
    {
        return ( document.getElementById ( elementId ) != null );
    },
    isNumber ( value )
    {
        return (  ( typeof value === 'number')  &&  !isNaN ( value )  );
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
        return (  ( typeof value === 'number' )  &&  ( value >= 0 && value <= 6.283185307179586 )  );
    },
    isRadius ( value )
    {
        return (  ( typeof value === 'number' )  &&  ( value > 0 )  );
    },
    isRgb ( value )
    {
        return ( /\b([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5]),(\s*)?([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5]),(\s*)?([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])\b/.test ( value ) );
    },
    isSegments ( value )
    {
        function isArrayNumberic ( value )
        {
            let _result = undefined;

            for ( let _element of value )
            {
                _result = ( typeof _element != 'number' ) ? false : true;

                if ( _result == false ) break;
            }


            return _result;
        }


        return ( Array.isArray ( value ) ) ? isArrayNumberic ( value ) : false;
    },
    isType ( value )
    {
        return (  ( typeof value === 'number' )  &&  ( value >= 0 && value <= 1 )  );
    },
    isWidth ( value )
    {
        return (  ( typeof value === 'number' )  &&  ( value >= 0 )  );
    }
}
