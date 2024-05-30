/**
 * Call main module
 * @module                                                  devSuite
 * @param           {Object} window                         Window containing a DOM document
 */
( ( window ) =>
{
    let _classes     = [ 'Template', 'Page', 'Tool', 'Ui', 'Lab' ];

    /**
     * Object of demo cards
     * @type {Object.<Object>}
     * @example { type: { subType: [ { title: 'title', text: 'text', code: function } ] } }
     */
    let _cardObjects =
    {
        object:
        {
            line:
            [
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _line.draw ( );
                    }
                },
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _line.stroke.type = 'solid';

                        _line.draw ( );
                    }
                },
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _line.stroke.segments = [ 2, 7, 10 ];

                        _line.draw ( );
                    }
                },
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _line.stroke.color = new Rgb ( 0,  150,  200 );

                        _line.draw ( );
                    }
                },
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _line.stroke.color.alpha = 0.25;

                        _line.draw ( );
                    }
                },
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _line.stroke.width = 5;

                        _line.draw ( );
                    }
                },
                {
                    title:   'stroke cap',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _line.stroke.width = 5;

                        _line.lineCap = 'butt';

                        _line.draw ( );
                    }
                },
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'shadow' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.draw ( );
                    }
                },
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'shadow' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.blur = 10;

                        _line.draw ( );
                    }
                },
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'shadow' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.x = 5;

                        _line.shadow.y = 5;

                        _line.draw ( );
                    }
                },
                {
                    title:   'curve',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _line.curve ( 0, 75, 0, 0 );

                        _line.draw ( );
                    }
                },
                {
                    title:   'move',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _line.move ( 180, 100 );
                    }
                },
                {
                    title:   'rotate',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _line.rotate ( 45 );
                    }
                },
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _line.options.border = true;

                        _line.draw ( );
                    }
                },
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _line.options.axis = true;

                        _line.draw ( );
                    }
                },
                {
                    title:   'points',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _line.options.points = true;

                        _line.draw ( );
                    }
                },
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _line.options.coordinates = true;

                        _line.draw ( );
                    }
                },
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
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
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circle.draw ( );
                    }
                },
                {
                    title:   'radius',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circle.radius = 50;

                        _circle.draw ( );
                    }
                },
                {
                    title:   'angle start',
                    text:    'blah... blah... blah...',
                    children: [ 'angle' ],
                    code: ( ) =>
                    {
                        _circle.angle.start = 90;

                        _circle.draw ( );
                    }
                },
                {
                    title:   'angle end',
                    text:    'blah... blah... blah...',
                    children: [ 'angle' ],
                    code: ( ) =>
                    {
                        _circle.angle.start = 90;

                        _circle.angle.end   = 180;

                        _circle.draw ( );
                    }
                },
                {
                    title:   'angle clockwise',
                    text:    'blah... blah... blah...',
                    children: [ 'angle' ],
                    code: ( ) =>
                    {
                        _circle.angle.start = 90;

                        _circle.angle.end   = 180;

                        _circle.angle.clockwise = false;

                        _circle.draw ( );
                    }
                },
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _circle.stroke.type = 'solid';

                        _circle.draw ( );
                    }
                },
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _circle.stroke.segments = [ 2, 4 ];

                        _circle.draw ( );
                    }
                },
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.stroke.color = new Rgb ( 0,  150,  200 );

                        _circle.draw ( );
                    }
                },
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.stroke.color.alpha = 0.25;

                        _circle.draw ( );
                    }
                },
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _circle.stroke.width = 5;

                        _circle.draw ( );
                    }
                },
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.color = new Rgb ( 0,  150,  200 );

                        _circle.draw ( );
                    }
                },
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.color = new Rgb ( 0,  150,  200 );

                        _circle.fill.color.alpha = 0.25;

                        _circle.draw ( );
                    }
                },
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'linear', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'radial', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'conic', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.draw ( );
                    }
                },
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.shadow.blur = 10;

                        _circle.draw ( );
                    }
                },
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.shadow.x = 5;

                        _circle.shadow.y = 5;

                        _circle.draw ( );
                    }
                },
                {
                    title:   'move',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circle.move ( 180, 100 );
                    }
                },
                {
                    title:   'rotate',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circle.rotate ( 45 );
                    }
                },
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _circle.options.border = true;

                        _circle.draw ( );
                    }
                },
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _circle.options.axis = true;

                        _circle.draw ( );
                    }
                },
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
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
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'aspect' ],
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 200, height: 100 };

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.type = 'solid';

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.segments = [ 2, 4 ];

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.alpha = 0.25;

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.width = 5;

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.fill.color.alpha = 0.25;

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'linear', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'radial', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'conic', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.shadow.blur = 10;

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.shadow.x = 5;

                        _rectangle.shadow.y = 5;

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'move',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.move ( 180, 100 );
                    }
                },
                {
                    title:   'rotate',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.rotate ( 45 );
                    }
                },
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _rectangle.options.axis = true;

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
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
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _text.draw ( );
                    }
                },
                {
                    title:   'text',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _text.text = '!@#$%^&*'

                        _text.draw ( );
                    }
                },
                {
                    title:   'type',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _text.type = 'Courier New';

                        _text.draw ( );
                    }
                },
                {
                    title:   'size',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _text.size = 36;

                        _text.draw ( );
                    }
                },
                {
                    title:   'weight',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _text.weight = 'italic';

                        _text.draw ( );
                    }
                },
                {
                    title:   'maxWidth',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _text.maxWidth = 100;

                        _text.draw ( );
                    }
                },
                {
                    title:   'offset',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _text.offset = { x: 0, y: -25 }

                        _text.draw ( );
                    }
                },
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _text.stroke.type = 'solid';

                        _text.draw ( );
                    }
                },
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _text.stroke.type = 'solid';

                        _text.stroke.segments = [ 2, 7, 10 ];

                        _text.draw ( );
                    }
                },
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.stroke.color = new Rgb ( 0,  150,  200 );

                        _text.draw ( );
                    }
                },
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.stroke.alpha = 0.25;

                        _text.draw ( );
                    }
                },
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _text.stroke.width = 5;

                        _text.draw ( );
                    }
                },
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.fill.color = new Rgb ( 0,  150,  200 );

                        _text.draw ( );
                    }
                },
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.fill.alpha  = 0.25;

                        _text.draw ( );
                    }
                },
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.draw ( );
                    }
                },
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.draw ( );
                    }
                },
                {
                    title:   'shadow alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.draw ( );
                    }
                },
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.draw ( );
                    }
                },
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.draw ( );
                    }
                },
            ],
        },
        subject:
        {
            anchor:
            [
                {
                    title:   'Align',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'Align Top',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'top';

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'Align Top-Right',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'topRight';

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'Align Right',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'right';

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'Align Bottom-Right',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'bottomRight';

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'Align Bottom',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'bottom';

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'Align Bottom-Left',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'bottomLeft';

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'Align Left',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'left';

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'Align Top-Left',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'topLeft';

                        _rectangle.draw ( );
                    }
                },
            ],
            angle:
            [
                {
                    title:   'angle start',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circle.angle.start = 90;

                        _circle.draw ( );
                    }
                },
                {
                    title:   'angle end',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circle.angle.start = 90;

                        _circle.angle.end   = 180;

                        _circle.draw ( );
                    }
                },
                {
                    title:   'angle clockwise',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circle.angle.start = 90;

                        _circle.angle.end   = 180;

                        _circle.angle.clockwise = false;

                        _circle.draw ( );
                    }
                },
            ],
            aspect:
            [
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 200, height: 100 };

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 50, height: 100 };

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 50, height: 50 };

                        _rectangle.draw ( );
                    }
                },
            ],
            controlpoints:
            [
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _line.curve ( 0, 50, 0, 0 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _line.curve ( 0, 0, 0, -50 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _line.curve ( 0, 50, 0, -50 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _line.curve ( 90, 0, -90, 0 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _line.curve ( 90, -50, -90, 50 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _line.curve ( -90, 50, 90, -50 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _line.curve ( -45, 45, -45, 45 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _line.curve ( 45, -45, 45, -45 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
            ],
            fill:
            [
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circle.fill.color = new Rgb ( 0,  150,  200 );

                        _circle.draw ( );
                    }
                },
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Radial ( { x: 110, y: 90 }, 30, { x: 100, y: 100 }, 70 );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Conic ( 0, { x: 75, y: 155 } );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Radial ( { x: 110, y: 90 }, 30, { x: 100, y: 100 }, 70 );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Conic ( 0, { x: 75, y: 155 } );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _rectangle.draw ( );
                    },
                },
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _text.fill.color = new Rgb ( 0,   150, 200, 1 );

                        _text.draw ( );
                    }
                },
            ],
            shadow:
            [
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
            ],
        },
        animation:
        {
            object:
            {
                line:
                [
                    {
                        title: 'animation',
                        text: 'easeInSine',
                        code: ( ) =>
                        {
                            let _flow =
                            {
                                duration: 3000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _line.rotate ( progress * 500 );
                                }
                            }

                            canvaslab.animate ( _flow );
                        }
                    },
                ],
            },
            subject:
            {
                anchor:
                [
                    {
                        title:   'Align',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            _rectangle.options.anchor = true;

                            let _flow =
                            {
                                duration: 3000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _rectangle.rotate ( progress * 500 );
                                }
                            }

                            canvaslab.animate ( _flow );
                        }
                    },
                ],
                fill:
                [
                    {
                        title:   'fill color',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            _circle.fill.color = new Rgb ( 0,  0,  0 );

                            let _flow =
                            {
                                duration: 1000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _circle.fillColorCycle ( new Rgb ( 0, 150, 200 ), new Rgb ( 200, 50, 100 ), progress );
                                }
                            }

                            canvaslab.animate ( _flow );
                        }
                    },
                    {
                        title:   'fill linear',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _circle.fill.gradient.stops =
                            [
                                { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                                { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                            ];

                            let _flow =
                            {
                                duration: 1000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _circle.gradientColorCycle ( new Rgb ( 0, 150, 200 ), new Rgb ( 200, 50, 100 ), progress, 0 );
                                }
                            }

                            canvaslab.animate ( _flow );
                        }
                    },
                    {
                        title:   'fill radial',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Radial ( { x: 110, y: 90 }, 30, { x: 100, y: 100 }, 70 );

                            _circle.fill.gradient.stops =
                            [
                                { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                                { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                                { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                            ];

                            let _flow =
                            {
                                duration: 1000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _circle.gradientColorCycle ( new Rgb (   0, 150, 200 ), new Rgb ( 200,  50, 100 ), progress, 0 );
                                    _circle.gradientColorCycle ( new Rgb ( 100, 100, 150 ), new Rgb (   0, 150, 200 ), progress, 1 );
                                    _circle.gradientColorCycle ( new Rgb ( 200,  50, 100 ), new Rgb ( 100, 100, 150 ), progress, 2 );
                                }
                            }

                            canvaslab.animate ( _flow );
                        }
                    },
                    {
                        title:   'fill conic',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Conic ( 0, { x: 75, y: 155 } );

                            _circle.fill.gradient.stops =
                            [
                                { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                                { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                                { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                                { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                                { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                            ];

                            let _flow =
                            {
                                duration: 1000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _circle.gradientColorCycle ( new Rgb (   0, 150, 200 ), new Rgb ( 100, 100, 150 ), progress, 0 );
                                    _circle.gradientColorCycle ( new Rgb (  50, 125, 175 ), new Rgb ( 150,  75, 125 ), progress, 1 );
                                    _circle.gradientColorCycle ( new Rgb ( 100, 100, 150 ), new Rgb ( 200,  50, 100 ), progress, 2 );
                                    _circle.gradientColorCycle ( new Rgb ( 150,  75, 125 ), new Rgb (   0, 150, 200 ), progress, 3 );
                                    _circle.gradientColorCycle ( new Rgb ( 200,  50, 100 ), new Rgb (  50, 125, 175 ), progress, 4 );
                                }
                            }

                            canvaslab.animate ( _flow );
                        }
                    },
                    {
                        title:   'fill color',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            _rectangle.fill.color = new Rgb ( 0,  0,  0 );

                            let _flow =
                            {
                                duration: 1000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _rectangle.fillColorCycle ( new Rgb ( 0, 150, 200 ), new Rgb ( 200, 50, 100 ), progress );
                                }
                            }

                            canvaslab.animate ( _flow );
                        }
                    },
                    {
                        title:   'fill linear',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _rectangle.fill.gradient.stops =
                            [
                                { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                                { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                            ];

                            let _flow =
                            {
                                duration: 1000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _rectangle.gradientColorCycle ( new Rgb ( 0, 150, 200 ), new Rgb ( 200, 50, 100 ), progress, 0 );
                                }
                            }

                            canvaslab.animate ( _flow );
                        }
                    },
                    {
                        title:   'fill radial',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Radial ( { x: 110, y: 90 }, 30, { x: 100, y: 100 }, 70 );

                            _rectangle.fill.gradient.stops =
                            [
                                { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                                { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                                { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                            ];

                            let _flow =
                            {
                                duration: 1000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _rectangle.gradientColorCycle ( new Rgb (   0, 150, 200 ), new Rgb ( 200,  50, 100 ), progress, 0 );
                                    _rectangle.gradientColorCycle ( new Rgb ( 100, 100, 150 ), new Rgb (   0, 150, 200 ), progress, 1 );
                                    _rectangle.gradientColorCycle ( new Rgb ( 200,  50, 100 ), new Rgb ( 100, 100, 150 ), progress, 2 );
                                }
                            }

                            canvaslab.animate ( _flow );
                        }
                    },
                    {
                        title:   'fill conic',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Conic ( 0, { x: 75, y: 155 } );

                            _rectangle.fill.gradient.stops =
                            [
                                { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                                { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                                { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                                { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                                { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                            ];

                            let _flow =
                            {
                                duration: 1000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _rectangle.gradientColorCycle ( new Rgb (   0, 150, 200 ), new Rgb ( 100, 100, 150 ), progress, 0 );
                                    _rectangle.gradientColorCycle ( new Rgb (  50, 125, 175 ), new Rgb ( 150,  75, 125 ), progress, 1 );
                                    _rectangle.gradientColorCycle ( new Rgb ( 100, 100, 150 ), new Rgb ( 200,  50, 100 ), progress, 2 );
                                    _rectangle.gradientColorCycle ( new Rgb ( 150,  75, 125 ), new Rgb (   0, 150, 200 ), progress, 3 );
                                    _rectangle.gradientColorCycle ( new Rgb ( 200,  50, 100 ), new Rgb (  50, 125, 175 ), progress, 4 );
                                }
                            }

                            canvaslab.animate ( _flow );
                        }
                    },
                    {
                        title:   'stroke color',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            _line.stroke.color = new Rgb ( 0,  150,  200 );

                            let _flow =
                            {
                                duration: 1000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _line.strokeColorCycle ( new Rgb ( 0, 150, 200 ), new Rgb ( 200, 50, 100 ), progress );
                                }
                            }

                            canvaslab.animate ( _flow );
                        }
                    },
                    {
                        title:   'stroke color',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            _text.fill.color = new Rgb ( 0,  150,  200 );

                            let _flow =
                            {
                                duration: 1000,
                                timing: 'easeInSine',
                                draw ( progress )
                                {
                                    _text.fillColorCycle ( new Rgb ( 0, 150, 200 ), new Rgb ( 200, 50, 100 ), progress );
                                }
                            }

                            canvaslab.animate ( _flow );
                        }
                    },
                ],
            }
        }
    }

    /**
     * Array of navigation links
     * @type {Array.<Object>}
     * @example { title: 'Title', group: 'Icon folder', links: <Array.<Object>> | null }
     */
    let _navLinks =
    [
        {
            title: 'Objects',
            links:
            [
                {
                    title: 'Line',
                    group: 'Object'
                },
                {
                    title: 'Circle',
                    group: 'Object'
                },
                {
                    title: 'Rectangle',
                    group: 'Object'
                },
                {
                    title: 'Text',
                    group: 'Object'
                },
                {
                    title: 'Group',
                    group: 'Object'
                }
            ]
        },
        {
            title: 'Subjects',
            links:
            [
                {
                    title: 'Color',
                    links:
                    [
                        {
                            title: 'Model',
                            links:
                            [
                                {
                                    title: 'Rgb',
                                    group: 'Subject'
                                },
                                {
                                    title: 'Hsl',
                                    group: 'Subject'
                                },
                                {
                                    title: 'Hwb',
                                    group: 'Subject'
                                }
                            ]
                        },
                        {
                            title: 'Gradient',
                            links:
                            [
                                {
                                    title: 'Properties',
                                    links:
                                    [
                                        {
                                            title: 'Stop',
                                            group: 'Subject'
                                        }
                                    ]
                                },
                                {
                                    title: 'Linear',
                                    group: 'Subject'
                                },
                                {
                                    title: 'Radial',
                                    group: 'Subject'
                                },
                                {
                                    title: 'Conic',
                                    group: 'Subject'
                                },
                            ]
                        }
                    ]
                },
                {
                    title: 'Staging',
                    links:
                    [
                        {
                            title: 'Anchor',
                            group: 'Subject'
                        },
                        {
                            title: 'Angle',
                            group: 'Subject'
                        },
                        {
                            title: 'Aspect',
                            group: 'Subject'
                        },
                        {
                            title: 'ControlPoints',
                            group: 'Subject'
                        },
                        {
                            title: 'Font',
                            group: 'Subject'
                        },
                        {
                            title: 'Point',
                            group: 'Subject'
                        },
                        {
                            title: 'Stage',
                            group: 'Subject'
                        }
                    ]
                },
                {
                    title: 'Stroke',
                    group: 'Subject'
                },
                {
                    title: 'Fill',
                    group: 'Subject'
                },
                {
                    title: 'Shadow',
                    group: 'Subject'
                },
            ]
        },
        {
            title: 'Handlers',
            links:
            [
                {
                    title: 'Animation',
                    links:
                    [
                        {
                            title: 'Objects',
                            links:
                            [
                                {
                                    title:   'Line',
                                    group:   'Object',
                                    handler: 'Animation'
                                }
                            ]
                        },
                        {
                            title: 'Subjects',
                            links:
                            [
                                {
                                    title:   'Anchor',
                                    group:   'Subject',
                                    handler: 'Animation'
                                },
                                {
                                    title:   'Fill',
                                    group:   'Subject',
                                    handler: 'Animation'
                                }
                            ]
                        },
                    ]
                },
            ]
        }
    ]

    ////    SETTERS    /////////////////////////////////////////////////////////////////////////////

        /**
         * Initializes classes for application use
         * @private
         * @name _setClasses ( )
         * @function
         */
        function _setClasses ( )
        {
            for ( let _class of _classes )

                ( typeof ( window [ _class.toUpperCase ( ) ] ) === 'undefined' )

                    ? eval ( `window.${_class.toUpperCase ( )} = new ${_class};` )

                    : console.log ( `[ ERROR ]: window.${_class.toUpperCase ( )} already exists !` );
        }

        /**
         * Sets windows global variable space with this wrapper's declared classes
         * @private
         * @name _setWindowsGlobal
         * @function
         */
        function _setEnvironment ( )
        {
            let _navList = document.querySelector ( '#nav-links' );


            _setClasses ( );

            UI.setNavLinks ( _navList, _navLinks );


            if ( typeof ( window.cardObjects ) === 'undefined' )

                window.cardObjects = _cardObjects;
        }

    ////    LIBRARY WRAPPER    /////////////////////////////////////////////////////////////////////

        /**
         * Returns library object
         * @private
         * @name _library
         * @function
         * @return          {Object}                            Library object
         */
        function _library ( )
        {
            let _lib = { }

            ////    FUNCTIONS    ///////////////////////////////////////////////

                /**
                 * Toggles individual card buttons using their 'suite-data' attributes
                 * @public
                 * @name toggleCardButton
                 * @function
                 * @param           {string} easingFunction             Easing function; as a string
                 * @param           {number} index                      Index of animation card
                 */
                _lib.toggleCardButton      = ( event )                 => UI.toggle.cardButton ( event );

                /**
                 * Runs easing animation for an animation card
                 * @public
                 * @name runEasingAnimation
                 * @function
                 * @param           {string} easingFunction             Easing function; as a string
                 * @param           {number} index                      Index of animation card
                 */
                _lib.runEasingAnimation    = ( easingFunction, index ) => UI.runEasingAnimation ( easingFunction, index );

                /**
                 * Runs lab-station code from editor
                 * @public
                 * @name _runLabStationCode
                 * @function
                 */
                _lib.runLabStationCode     = ( )                       => LAB.runCode ( );


            return _lib;
        }

    ////    INITIALIZE    //////////////////////////////////////////////////////////////////////////

        /**
         * Initiates devSuite
         * @private
         * @name _init
         * @function
         */
        function _init ( )
        {
            window.devSuite = _library ( );


            _setEnvironment ( );


            if ( window.cardObjects )
            {
                UI.init  ( );

                LAB.init ( );
            }
            else

                console.error ( '[ ERROR ]: window.cardObjects is not available !' );
        }


        if ( typeof ( window.devSuite ) === 'undefined' )

            _init ( );

} ) ( window );
