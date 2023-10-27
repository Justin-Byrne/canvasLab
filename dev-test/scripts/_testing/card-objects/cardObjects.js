"use strict";

/**
 * cardObjects              {Object}                    Object literal variables
 */
( ( window ) =>
{
    let _objects =
    {
        line:
        [
            {
                title: 'draw',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _line.draw ( );
                }
            },
            {
                title: 'stroke type',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _line.stroke.type = 1;

                    _line.draw ( );
                }
            },
            {
                title: 'stroke segments',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _line.stroke.type = 1;

                    _line.stroke.segments = [ 2, 7, 10 ];

                    _line.draw ( );
                }
            },
            {
                title: 'stroke color',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _line.stroke.color = '255, 0, 0';

                    _line.draw ( );
                }
            },
            {
                title: 'stroke alpha',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _line.stroke.alpha = 0.25;

                    _line.draw ( );
                }
            },
            {
                title: 'stroke width',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _line.stroke.width = 5;

                    _line.draw ( );
                }
            },
            {
                title: 'stroke cap',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _line.stroke.width = 5;

                    _line.lineCap = 'butt';

                    _line.draw ( );
                }
            },
            {
                title: 'shadow',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _line.options.shadow = true;

                    _line.draw ( );
                }
            },
            {
                title: 'shadow blur',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _line.options.shadow = true;

                    _line.shadow.blur = 10;

                    _line.draw ( );
                }
            },
            {
                title: 'shadow offset',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _line.options.shadow = true;

                    _line.shadow.x = 5;

                    _line.shadow.y = 5;

                    _line.draw ( );
                }
            },
            {
                title: 'curve',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _line.curve ( 0, 50, 50, 0 );

                    _line.draw ( );
                }
            },
            {
                title: 'move',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _line.move ( 180, 100 );
                }
            },
            {
                title: 'rotate',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _line.rotate ( 45 );
                }
            },
            {
                title: 'border',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _line.options.border = true;

                    _line.draw ( );
                }
            },
            {
                title: 'axis',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _line.options.axis = true;

                    _line.draw ( );
                }
            },
            {
                title: 'points',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _line.options.points = true;

                    _line.draw ( );
                }
            },
            {
                title: 'coordinates',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _line.options.coordinates = true;

                    _line.draw ( );
                }
            },
            {
                title: 'control points',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _line.curve ( 0, -50, -50, 0 );

                    _line.options.controlPoints = true;

                    _line.draw ( );
                }
            },
        ],
        circle:
        [
            {
                title: 'draw',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _circle.draw ( );
                }
            },
            {
                title: 'radius',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _circle.radius = 50;

                    _circle.draw ( );
                }
            },
            {
                title: 'angle start',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _circle.angle.start = 90;

                    _circle.draw ( );
                }
            },
            {
                title: 'angle end',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _circle.angle.start = 90;

                    _circle.angle.end   = 180;

                    _circle.draw ( );
                }
            },
            {
                title: 'angle clockwise',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _circle.angle.start = 90;

                    _circle.angle.end   = 180;

                    _circle.angle.clockwise = false;

                    _circle.draw ( );
                }
            },
            {
                title: 'stroke type',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _circle.stroke.type = 1;

                    _circle.draw ( );
                }
            },
            {
                title: 'stroke segments',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _circle.stroke.type     = 1;

                    _circle.stroke.segments = [ 2, 4 ];

                    _circle.draw ( );
                }
            },
            {
                title: 'stroke color',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _circle.stroke.color = '255, 0, 0';

                    _circle.draw ( );
                }
            },
            {
                title: 'stroke alpha',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _circle.stroke.alpha = 0.25;

                    _circle.draw ( );
                }
            },
            {
                title: 'stroke width',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _circle.stroke.width = 5;

                    _circle.draw ( );
                }
            },
            {
                title: 'fill color',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _circle.fill.color = '255, 0, 0';

                    _circle.draw ( );
                }
            },
            {
                title: 'fill alpha',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _circle.fill.color = '255, 0, 0';

                    _circle.fill.alpha  = 0.25;

                    _circle.draw ( );
                }
            },
            {
                title: 'shadow',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _circle.options.shadow = true;

                    _circle.draw ( );
                }
            },
            {
                title: 'shadow blur',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _circle.options.shadow = true;

                    _circle.shadow.blur = 10;

                    _circle.draw ( );
                }
            },
            {
                title: 'shadow offset',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _circle.options.shadow = true;

                    _circle.shadow.x = 5;

                    _circle.shadow.y = 5;

                    _circle.draw ( );
                }
            },
            {
                title: 'move',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _circle.move ( 180, 100 );
                }
            },
            {
                title: 'rotate',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _circle.rotate ( 45 );
                }
            },
            {
                title: 'border',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _circle.options.border = true;

                    _circle.draw ( );
                }
            },
            {
                title: 'axis',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _circle.options.axis = true;

                    _circle.draw ( );
                }
            },
            {
                title: 'coordinates',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _circle.options.coordinates = true;

                    _circle.draw ( );
                }
            },
        ],
        rectangle:
        [
            {
                title: 'draw',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _rectangle.draw ( );
                }
            },
            {
                title: 'aspect',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _rectangle.aspect = { width: 200, height: 100 };

                    _rectangle.draw ( );
                }
            },
            {
                title: 'stroke type',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _rectangle.stroke.type = 1;

                    _rectangle.draw ( );
                }
            },
            {
                title: 'stroke segments',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _rectangle.stroke.type     = 1;

                    _rectangle.stroke.segments = [ 2, 4 ];

                    _rectangle.draw ( );
                }
            },
            {
                title: 'stroke color',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _rectangle.stroke.color = '255, 0, 0';

                    _rectangle.draw ( );
                }
            },
            {
                title: 'stroke alpha',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _rectangle.stroke.alpha = 0.25;

                    _rectangle.draw ( );
                }
            },
            {
                title: 'stroke width',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _rectangle.stroke.width = 5;

                    _rectangle.draw ( );
                }
            },
            {
                title: 'fill color',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _rectangle.fill.color = '255, 0, 0';

                    _rectangle.draw ( );
                }
            },
            {
                title: 'fill alpha',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _rectangle.fill.color = '255, 0, 0';

                    _rectangle.fill.alpha = 0.25;

                    _rectangle.draw ( );
                }
            },
            {
                title: 'shadow',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _rectangle.options.shadow = true;

                    _rectangle.draw ( );
                }
            },
            {
                title: 'shadow blur',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _rectangle.options.shadow = true;

                    _rectangle.shadow.blur = 10;

                    _rectangle.draw ( );
                }
            },
            {
                title: 'shadow offset',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _rectangle.options.shadow = true;

                    _rectangle.shadow.x = 5;

                    _rectangle.shadow.y = 5;

                    _rectangle.draw ( );
                }
            },
            {
                title: 'move',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _rectangle.move ( 180, 100 );
                }
            },
            {
                title: 'rotate',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _rectangle.rotate ( 45 );
                }
            },
            {
                title: 'axis',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _rectangle.options.axis = true;

                    _rectangle.draw ( );
                }
            },
            {
                title: 'border',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _rectangle.options.border = true;

                    _rectangle.draw ( );
                }
            },
        ],
        text:
        [
            {
                title: 'draw',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _text.draw ( );
                }
            },
            {
                title: 'text',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _text.text = '!@#$%^&*'

                    _text.draw ( );
                }
            },
            {
                title: 'type',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _text.type = 'Courier New';

                    _text.draw ( );
                }
            },
            {
                title: 'size',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _text.size = 36;

                    _text.draw ( );
                }
            },
            {
                title: 'weight',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _text.weight = 'italic';

                    _text.draw ( );
                }
            },
            {
                title: 'maxWidth',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _text.maxWidth = 100;

                    _text.draw ( );
                }
            },
            {
                title: 'offset',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _text.offset = { x: 0, y: -25 }

                    _text.draw ( );
                }
            },
            {
                title: 'stroke type',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _text.stroke.type = 1;

                    _text.draw ( );
                }
            },
            {
                title: 'stroke segments',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _text.stroke.type = 1;

                    _text.stroke.segments = [ 2, 7, 10 ];

                    _text.draw ( );
                }
            },
            {
                title: 'stroke color',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _text.stroke.color = '255, 0, 0';

                    _text.draw ( );
                }
            },
            {
                title: 'stroke alpha',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _text.stroke.alpha = 0.25;

                    _text.draw ( );
                }
            },
            {
                title: 'stroke width',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _text.stroke.width = 5;

                    _text.draw ( );
                }
            },
            {
                title: 'fill color',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _text.fill.color = '255, 0, 0';

                    _text.draw ( );
                }
            },
            {
                title: 'fill alpha',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _text.fill.color = '255, 0, 0';

                    _text.fill.alpha  = 0.25;

                    _text.draw ( );
                }
            },
            {
                title: 'shadow',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _text.options.shadow = true;

                    _text.draw ( );
                }
            },
            {
                title: 'shadow color',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _text.options.shadow = true;

                    _text.draw ( );
                }
            },
            {
                title: 'shadow alpha',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _text.options.shadow = true;

                    _text.draw ( );
                }
            },
            {
                title: 'shadow blur',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _text.options.shadow = true;

                    _text.draw ( );
                }
            },
            {
                title: 'shadow offset',
                text: 'blah... blah... blah...',
                image: undefined,
                code: ( ) =>
                {
                    _text.options.shadow = true;

                    _text.draw ( );
                }
            },
        ]
    }

    ////////////////////////////////////////////////////////////////////////////
    ////    LIBRARY WRAPPER    /////////////////////////////////////////////////

        function _library ( )
        {
            let _lib = _objects;

            return _lib;
        }

    ////////////////////////////////////////////////////////////////////////////
    ////    INITIALIZATION    //////////////////////////////////////////////////

        function _init ( cardObjects )
        {
            window.cardObjects = _library ( );
        }


        if ( typeof ( window.cardObjects ) === 'undefined' )

            _init ( );

} ) ( window );
