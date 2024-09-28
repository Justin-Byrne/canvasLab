/**
 * Call main module
 * @module                                                  devSuite
 * @param           {Object} window                         Window containing a DOM document
 */
( ( window ) =>
{
    let _config =
    {
        labMode: false
    }

    let _classes = [ 'Template', 'Page', 'Tool', 'Ui', 'Lab' ];

    /**
     * Array of navigation links
     * @type {Array.<Object>}
     * @example { title: 'Title', group: 'Icon folder', links: <Array.<Object>> | null }
     */
    let _navLinks =
    [
        // core
        {
            title: 'Core',
            links:
            [
                // objects
                {
                    title: 'Objects',
                    links:
                    [
                        {
                            title: 'Collections',
                            links:
                            [
                                {
                                    title: 'Lines',
                                    group: 'Object'
                                },
                                {
                                    title: 'Circles',
                                    group: 'Object'
                                },
                                {
                                    title: 'Ellipses',
                                    group: 'Object'
                                },
                                {
                                    title: 'Rectangles',
                                    group: 'Object'
                                },
                                {
                                    title: 'RoundedRectangles',
                                    group: 'Object'
                                },
                                {
                                    title: 'Texts',
                                    group: 'Object'
                                },
                                {
                                    title: 'Group',
                                    group: 'Object'
                                },
                            ]
                        },
                        {
                            title: 'Line',
                            group: 'Object'
                        },
                        {
                            title: 'Circle',
                            group: 'Object'
                        },
                        {
                            title: 'Ellipse',
                            group: 'Object'
                        },
                        {
                            title: 'Rectangle',
                            group: 'Object'
                        },
                        {
                            title: 'RoundedRectangle',
                            group: 'Object'
                        },
                        {
                            title: 'Text',
                            group: 'Object'
                        },
                        {
                            title: 'cImage',
                            group: 'Object'
                        },
                    ]
                },
                // subjects
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
                        // {
                        //     title: 'Templates',
                        //     links:
                        //     [
                        //         {
                        //             title: 'SacredCircles',
                        //             group: 'Subject'
                        //         },
                        //     ]
                        // },
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
            ]
        },
        // templates
        {
            title: 'Templates',
            links:
            [
                {
                    title: 'SacredCircles',
                    group: 'Template'
                },
            ]
        },
        // Animations
        {
            title: 'Animations',
            links:
            [
                // objects
                {
                    title: 'Objects',
                    links:
                    [
                        {
                            title:   'Line',
                            group:   'Object',
                            handler: 'Animation'
                        },
                        {
                            title:   'Circle',
                            group:   'Object',
                            handler: 'Animation'
                        },
                        {
                            title:   'Ellipse',
                            group:   'Object',
                            handler: 'Animation'
                        },
                        {
                            title:   'Rectangle',
                            group:   'Object',
                            handler: 'Animation'
                        },
                        {
                            title:   'RoundedRectangle',
                            group:   'Object',
                            handler: 'Animation'
                        },
                        {
                            title:   'Text',
                            group:   'Object',
                            handler: 'Animation'
                        },
                        {
                            title:   'cImage',
                            group:   'Object',
                            handler: 'Animation'
                        }
                    ]
                },
                // subjects
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
                                            title:   'Rgb',
                                            group:   'Subject',
                                            handler: 'Animation'
                                        },
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
                                                    title:   'Stop',
                                                    group:   'Subject',
                                                    handler: 'Animation'
                                                }
                                            ]
                                        },
                                        {
                                            title:   'Linear',
                                            group:   'Subject',
                                            handler: 'Animation'
                                        },
                                        {
                                            title:   'Radial',
                                            group:   'Subject',
                                            handler: 'Animation'
                                        },
                                        {
                                            title:   'Conic',
                                            group:   'Subject',
                                            handler: 'Animation'
                                        },
                                    ]
                                }
                            ]
                        },
                        // {
                        //     title: 'Templates',
                        //     links:
                        //     [
                        //         {
                        //             title: 'SacredCircles',
                        //             group: 'Subject',
                        //             handler: 'Animation'
                        //         },
                        //     ]
                        // },
                        {
                            title: 'Staging',
                            links:
                            [
                                {
                                    title:   'Anchor',
                                    group:   'Subject',
                                    handler: 'Animation'
                                },
                                {
                                    title:   'Angle',
                                    group:   'Subject',
                                    handler: 'Animation'
                                },
                                {
                                    title:   'Aspect',
                                    group:   'Subject',
                                    handler: 'Animation'
                                },
                                {
                                    title:   'ControlPoints',
                                    group:   'Subject',
                                    handler: 'Animation'
                                },
                                {
                                    title:   'Font',
                                    group:   'Subject',
                                    handler: 'Animation'
                                },
                                {
                                    title:   'Point',
                                    group:   'Subject',
                                    handler: 'Animation'
                                },
                            ]
                        },
                        {
                            title:   'Stroke',
                            group:   'Subject',
                            handler: 'Animation'
                        },
                        {
                            title:   'Fill',
                            group:   'Subject',
                            handler: 'Animation'
                        },
                        {
                            title:   'Shadow',
                            group:   'Subject',
                            handler: 'Animation'
                        },
                    ]
                },
                // templates
                // {
                //     title: 'Templates',
                //     links:
                //     [
                //         {
                //             title:   'SacredCircles',
                //             group:   'Template',
                //             handler: 'Animation'
                //         },
                //     ]
                // },
            ]
        },
    ]

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
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _line.draw ( );
                    }
                },
                // stroke type
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
                // stroke segments
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
                // stroke color
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
                // stroke alpha
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
                // stroke width
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
                // stroke cap
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
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.draw ( );
                    }
                },
                // shadow color
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow', 'rgb' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.color = new Rgb ( 0, 150, 200 );

                        _line.draw ( );
                    }
                },
                // shadow blur
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.blur = 10;

                        _line.draw ( );
                    }
                },
                // shadow offset
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow', 'point' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.x = 5;

                        _line.shadow.y = 5;

                        _line.draw ( );
                    }
                },
                // curve
                {
                    title:   'curve',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _line.curve ( 50, 0, 0, 0 );

                        _line.draw ( );
                    }
                },
                // move
                {
                    title:   'move',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _line.move ( 90, 25 );

                        _line.draw ( );
                    }
                },
                // rotate
                {
                    title:   'rotate',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _line.rotate ( 45 );

                        _line.draw ( );
                    }
                },
                // anchor
                {
                    title:   'anchor',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _line.options.anchor = true;

                        _line.draw ( );
                    }
                },
                // anchor align
                {
                    title:   'anchor align',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _line.options.anchor = true;

                        _line.anchor.align   = 'start';

                        _line.draw ( );
                    }
                },
                // border
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
                // axis
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
                // points
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
                // coordinates
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
                // control points
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'controlpoints' ],
                    code: ( ) =>
                    {
                        _line.options.controlPoints = true;  // [ Optional ]

                        _line.controlPoints.points  = [ 50, 0, 0, -50 ];

                        _line.draw ( );
                    }
                },
            ],
            lines:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _lines.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _lines.options.shadow = true;

                        _lines.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _lines.options.border = true;

                        _lines.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _lines.options.axis = true;

                        _lines.draw ( );
                    }
                },
                // anchor
                // {
                //     title:   'anchor',
                //     text:    'blah... blah... blah...',
                //     children: [ 'line' ],
                //     code: ( ) =>
                //     {
                //         _lines.options.anchor   = true;

                //         _lines.draw ( );
                //     }
                // },
                // points
                {
                    title:   'points',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _lines.options.points = true;

                        _lines.draw ( );
                    }
                },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _lines.options.coordinates = true;

                        _lines.draw ( );
                    }
                },
                // controlPoints
                {
                    title:   'controlPoints',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _lines.options.controlPoints = true;

                        _lines.draw ( );
                    }
                },
            ],
            circle:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circle.draw ( );
                    }
                },
                // radius
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
                // radius ellipse
                {
                    title:   'radius ellipse',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circle.radius = { x: 25, y: 50 };

                        _circle.draw ( );
                    }
                },
                // angle start
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
                // angle end
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
                // angle clockwise
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
                // stroke type
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
                // stroke segments
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
                // stroke color
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
                // stroke alpha
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
                // stroke width
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
                // fill color
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
                // fill alpha
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
                // fill linear
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
                // fill radial
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
                // fill conic
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
                // fill pattern
                {
                    title:   'fill pattern',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _circle.radius = 50;    // [ Optional ]

                        _circle.fill.pattern = 'images/png/sun.png';

                        _circle.draw ( );
                    }
                },
                // fill pattern no-repeat
                {
                    title:   'fill pattern no-repeat',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _circle.radius = 50;    // [ Optional ]

                        _circle.fill.pattern    = 'images/png/sun.png';

                        _circle.fill.repetition = 'no-repeat';

                        _circle.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.draw ( );
                    }
                },
                // shadow color
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.shadow.color = new Rgb ( 0, 150, 200 );

                        _circle.draw ( );
                    }
                },
                // shadow blur
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
                // shadow offset
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
                // move
                {
                    title:   'move',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circle.move ( 90, 25 );

                        _circle.draw ( );
                    }
                },
                // rotate
                {
                    title:   'rotate',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circle.rotate ( 45 );

                        _circle.draw ( );
                    }
                },
                // anchor
                {
                    title:   'anchor',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.draw ( );
                    }
                },
                // anchor align
                {
                    title:   'anchor align',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.anchor.align   = 'topLeft';

                        _circle.draw ( );
                    }
                },
                // border
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
                // axis
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
                // coordinates
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
            circles:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circles.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circles.options.shadow = true;

                        _circles.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circles.options.border = true;

                        _circles.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circles.options.axis = true;

                        _circles.draw ( );
                    }
                },
                // anchor
                // {
                //     title:   'anchor',
                //     text:    'blah... blah... blah...',
                //     children: [ 'circle' ],
                //     code: ( ) =>
                //     {
                //         _circles.options.anchor   = true;

                //         _circles.draw ( );
                //     }
                // },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circles.options.coordinates = true;

                        _circles.draw ( );
                    }
                },
            ],
            ellipse:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _ellipse.draw ( );
                    }
                },
                // radius
                {
                    title:   'radius',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _ellipse.radius = new Point ( 50, 30 );

                        _ellipse.draw ( );
                    }
                },
                // radius ellipse
                // {
                //     title:   'radius ellipse',
                //     text:    'blah... blah... blah...',
                //     children: undefined,
                //     code: ( ) =>
                //     {
                //         _ellipse.radius = { x: 25, y: 50 };

                //         _ellipse.draw ( );
                //     }
                // },
                // angle start
                {
                    title:   'angle start',
                    text:    'blah... blah... blah...',
                    children: [ 'angle' ],
                    code: ( ) =>
                    {
                        _ellipse.angle.start = 90;

                        _ellipse.draw ( );
                    }
                },
                // angle end
                {
                    title:   'angle end',
                    text:    'blah... blah... blah...',
                    children: [ 'angle' ],
                    code: ( ) =>
                    {
                        _ellipse.angle.start = 90;

                        _ellipse.angle.end   = 180;

                        _ellipse.draw ( );
                    }
                },
                // angle clockwise
                {
                    title:   'angle clockwise',
                    text:    'blah... blah... blah...',
                    children: [ 'angle' ],
                    code: ( ) =>
                    {
                        _ellipse.angle.start = 90;

                        _ellipse.angle.end   = 180;

                        _ellipse.angle.clockwise = false;

                        _ellipse.draw ( );
                    }
                },
                // stroke type
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.type = 'solid';

                        _ellipse.draw ( );
                    }
                },
                // stroke segments
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.segments = [ 2, 4 ];

                        _ellipse.draw ( );
                    }
                },
                // stroke color
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.color = new Rgb ( 0,  150,  200 );

                        _ellipse.draw ( );
                    }
                },
                // stroke alpha
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.color.alpha = 0.25;

                        _ellipse.draw ( );
                    }
                },
                // stroke width
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.width = 5;

                        _ellipse.draw ( );
                    }
                },
                // fill color
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.color = new Rgb ( 0,  150,  200 );

                        _ellipse.draw ( );
                    }
                },
                // fill alpha
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.color = new Rgb ( 0,  150,  200 );

                        _ellipse.fill.color.alpha = 0.25;

                        _ellipse.draw ( );
                    }
                },
                // fill linear
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'linear', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill radial
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'radial', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill conic
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'conic', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill pattern
                {
                    title:   'fill pattern',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _ellipse.radius = new Point ( 70, 50 );    // [ Optional ]

                        _ellipse.fill.pattern = 'images/png/sun.png';

                        _ellipse.draw ( );
                    }
                },
                // fill pattern no-repeat
                {
                    title:   'fill pattern no-repeat',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _ellipse.radius = new Point ( 70, 50 );    // [ Optional ]

                        _ellipse.fill.pattern    = 'images/png/sun.png';

                        _ellipse.fill.repetition = 'no-repeat';

                        _ellipse.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.draw ( );
                    }
                },
                // shadow color
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.shadow.color = new Rgb ( 0, 150, 200 );

                        _ellipse.draw ( );
                    }
                },
                // shadow blur
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.shadow.blur = 10;

                        _ellipse.draw ( );
                    }
                },
                // shadow offset
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.shadow.x = 5;

                        _ellipse.shadow.y = 5;

                        _ellipse.draw ( );
                    }
                },
                // move
                {
                    title:   'move',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _ellipse.move ( 90, 25 );

                        _ellipse.draw ( );
                    }
                },
                // rotate
                {
                    title:   'rotate',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _ellipse.rotate ( 45 );

                        _ellipse.draw ( );
                    }
                },
                // anchor
                {
                    title:   'anchor',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.draw ( );
                    }
                },
                // anchor align
                {
                    title:   'anchor align',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.anchor.align   = 'topLeft';

                        _ellipse.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _ellipse.options.border = true;

                        _ellipse.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _ellipse.options.axis = true;

                        _ellipse.draw ( );
                    }
                },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _ellipse.options.coordinates = true;

                        _ellipse.draw ( );
                    }
                },
            ],
            ellipses:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipses.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipses.options.shadow = true;

                        _ellipses.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipses.options.border = true;

                        _ellipses.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipses.options.axis = true;

                        _ellipses.draw ( );
                    }
                },
                // anchor
                // {
                //     title:   'anchor',
                //     text:    'blah... blah... blah...',
                //     children: [ 'ellipse' ],
                //     code: ( ) =>
                //     {
                //         _ellipses.options.anchor   = true;

                //         _ellipses.draw ( );
                //     }
                // },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipses.options.coordinates = true;

                        _ellipses.draw ( );
                    }
                },
            ],
            rectangle:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.draw ( );
                    }
                },
                // aspect
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
                // radii general
                {
                    title:   'rounded general',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.round = [ 10 ];

                        _rectangle.draw ( );
                    }
                },
                // radii specific
                {
                    title:   'rounded specific',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.round = [ 0, 10, 0, 20 ];

                        _rectangle.draw ( );
                    }
                },
                // stroke type
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
                // stroke segments
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
                // stroke color
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
                // stroke alpha
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
                // stroke width
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
                // fill color
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
                // fill alpha
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
                // fill linear
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
                // fill radial
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
                // fill conic
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
                // fill pattern
                {
                    title:   'fill pattern',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 200, height: 100 };    // [ Optional ]

                        _rectangle.fill.pattern = 'images/png/sun.png';

                        _rectangle.draw ( );
                    }
                },
                // fill pattern no-repeat
                {
                    title:   'fill pattern no-repeat',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 200, height: 100 };    // [ Optional ]

                        _rectangle.fill.pattern    = 'images/png/sun.png';

                        _rectangle.fill.repetition = 'no-repeat';

                        _rectangle.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.draw ( );
                    }
                },
                // shadow color
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.shadow.color = new Rgb ( 0, 150, 200 );

                        _rectangle.draw ( );
                    }
                },
                // shadow blur
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
                // shadow offset
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
                // move
                {
                    title:   'move',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.move ( 90, 25 );

                        _rectangle.draw ( );
                    }
                },
                // rotate
                {
                    title:   'rotate',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.rotate ( 45 );

                        _rectangle.draw ( );
                    }
                },
                // anchor
                {
                    title:   'anchor',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.draw ( );
                    }
                },
                // anchor align
                {
                    title:   'anchor align',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align   = 'topLeft';

                        _rectangle.draw ( );
                    }
                },
                // border
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
                // axis
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
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _rectangle.options.coordinates = true;

                        _rectangle.draw ( );
                    }
                },
            ],
            rectangles:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangles.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangles.options.shadow = true;

                        _rectangles.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangles.options.border = true;

                        _rectangles.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangles.options.axis = true;

                        _rectangles.draw ( );
                    }
                },
                // anchor
                // {
                //     title:   'anchor',
                //     text:    'blah... blah... blah...',
                //     children: [ 'rectangle' ],
                //     code: ( ) =>
                //     {
                //         _rectangles.options.anchor   = true;

                //         _rectangles.draw ( );
                //     }
                // },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangles.options.coordinates = true;

                        _rectangles.draw ( );
                    }
                },
            ],
            roundedRectangle:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _roundedRectangle.draw ( );
                    }
                },
                // aspect
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'aspect' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.aspect = { width: 200, height: 100 };

                        _roundedRectangle.draw ( );
                    }
                },
                // round general
                // {
                //     title:   'round general',
                //     text:    'blah... blah... blah...',
                //     children: undefined,
                //     code: ( ) =>
                //     {
                //         _roundedRectangle.round = [ 10 ];

                //         _roundedRectangle.draw ( );
                //     }
                // },
                // round specific
                // {
                //     title:   'round specific',
                //     text:    'blah... blah... blah...',
                //     children: undefined,
                //     code: ( ) =>
                //     {
                //         _roundedRectangle.round = [ 0, 10, 0, 20 ];

                //         _roundedRectangle.draw ( );
                //     }
                // },
                // stroke type
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.type = 'solid';

                        _roundedRectangle.draw ( );
                    }
                },
                // stroke segments
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.segments = [ 2, 4 ];

                        _roundedRectangle.draw ( );
                    }
                },
                // stroke color
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.color = new Rgb ( 0,  150,  200 );

                        _roundedRectangle.draw ( );
                    }
                },
                // stroke alpha
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.alpha = 0.25;

                        _roundedRectangle.draw ( );
                    }
                },
                // stroke width
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.width = 5;

                        _roundedRectangle.draw ( );
                    }
                },
                // fill color
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _roundedRectangle.draw ( );
                    }
                },
                // fill alpha
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _roundedRectangle.fill.color.alpha = 0.25;

                        _roundedRectangle.draw ( );
                    }
                },
                // fill linear
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'linear', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
                // fill radial
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'radial', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
                // fill conic
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'conic', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
                // fill pattern
                {
                    title:   'fill pattern',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.aspect = { width: 200, height: 100 };    // [ Optional ]

                        _roundedRectangle.fill.pattern = 'images/png/sun.png';

                        _roundedRectangle.draw ( );
                    }
                },
                // fill pattern no-repeat
                {
                    title:   'fill pattern no-repeat',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.aspect = { width: 200, height: 100 };    // [ Optional ]

                        _roundedRectangle.fill.pattern    = 'images/png/sun.png';

                        _roundedRectangle.fill.repetition = 'no-repeat';

                        _roundedRectangle.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.draw ( );
                    }
                },
                // shadow color
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.shadow.color = new Rgb ( 0, 150, 200 );

                        _roundedRectangle.draw ( );
                    }
                },
                // shadow blur
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.shadow.blur = 10;

                        _roundedRectangle.draw ( );
                    }
                },
                // shadow offset
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.shadow.x = 5;

                        _roundedRectangle.shadow.y = 5;

                        _roundedRectangle.draw ( );
                    }
                },
                // move
                {
                    title:   'move',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _roundedRectangle.move ( 90, 25 );

                        _roundedRectangle.draw ( );
                    }
                },
                // rotate
                {
                    title:   'rotate',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _roundedRectangle.rotate ( 45 );

                        _roundedRectangle.draw ( );
                    }
                },
                // anchor
                {
                    title:   'anchor',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.draw ( );
                    }
                },
                // anchor align
                {
                    title:   'anchor align',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.anchor.align   = 'topLeft';

                        _roundedRectangle.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.border = true;

                        _roundedRectangle.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.axis = true;

                        _roundedRectangle.draw ( );
                    }
                },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.coordinates = true;

                        _roundedRectangle.draw ( );
                    }
                },
            ],
            roundedRectangles:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangles.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangles.options.shadow = true;

                        _roundedRectangles.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangles.options.border = true;

                        _roundedRectangles.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangles.options.axis = true;

                        _roundedRectangles.draw ( );
                    }
                },
                // anchor
                // {
                //     title:   'anchor',
                //     text:    'blah... blah... blah...',
                //     children: [ 'roundedrectangle' ],
                //     code: ( ) =>
                //     {
                //         _roundedRectangles.options.anchor   = true;

                //         _roundedRectangles.draw ( );
                //     }
                // },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangles.options.coordinates = true;

                        _roundedRectangles.draw ( );
                    }
                },
            ],
            text:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _text.draw ( );
                    }
                },
                // text
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
                // type
                {
                    title:   'type',
                    text:    'blah... blah... blah...',
                    children: [ 'font' ],
                    code: ( ) =>
                    {
                        _text.type = 'Courier New';

                        _text.draw ( );
                    }
                },
                // size
                {
                    title:   'size',
                    text:    'blah... blah... blah...',
                    children: [ 'font' ],
                    code: ( ) =>
                    {
                        _text.size = 36;

                        _text.draw ( );
                    }
                },
                // weight
                {
                    title:   'weight',
                    text:    'blah... blah... blah...',
                    children: [ 'font' ],
                    code: ( ) =>
                    {
                        _text.weight = 'italic';

                        _text.draw ( );
                    }
                },
                // maxWidth
                {
                    title:   'maxWidth',
                    text:    'blah... blah... blah...',
                    children: [ 'font' ],
                    code: ( ) =>
                    {
                        _text.maxWidth = 100;

                        _text.draw ( );
                    }
                },
                // offset
                {
                    title:   'offset',
                    text:    'blah... blah... blah...',
                    children: [ 'font' ],
                    code: ( ) =>
                    {
                        _text.offset = { x: 0, y: -25 }

                        _text.draw ( );
                    }
                },
                // stroke type
                // {
                //     title:   'stroke type',
                //     text:    'blah... blah... blah...',
                //     children: [ 'stroke' ],
                //     code: ( ) =>
                //     {
                //         _text.stroke.type = 'solid';

                //         _text.draw ( );
                //     }
                // },
                // stroke segments
                // {
                //     title:   'stroke segments',
                //     text:    'blah... blah... blah...',
                //     children: [ 'stroke' ],
                //     code: ( ) =>
                //     {
                //         _text.stroke.segments  = [ 2, 7, 10 ];

                //         _text.fill.color.alpha = 0;         // [ Optional ]

                //         _text.draw ( );
                //     }
                // },
                // stroke color
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.stroke.width = 2;

                        _text.stroke.color = new Rgb ( 0,  150,  200 );

                        _text.draw ( );
                    }
                },
                // stroke alpha
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.stroke.width       = 1;

                        _text.stroke.color.alpha = 0.25;

                        _text.fill.color.alpha   = 0;       // [ Optional ]

                        _text.draw ( );
                    }
                },
                // stroke width
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _text.stroke.width     = 2;

                        _text.stroke.color     = new Rgb ( 0,  150,  200 ); // [ Optional ]

                        _text.fill.color.alpha = 0; // [ Optional ]

                        _text.draw ( );
                    }
                },
                // fill color
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
                // fill alpha
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.fill.color.alpha   = 0.25;

                        _text.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.draw ( );
                    }
                },
                // shadow color
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.shadow.color = new Rgb ( 0, 150, 200 );

                        _text.draw ( );
                    }
                },
                // shadow blur
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.shadow.blur    = 10;

                        _text.draw ( );
                    }
                },
                // shadow offset
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.shadow.x = 5;

                        _text.shadow.y = 5;

                        _text.draw ( );
                    }
                },
                // move
                {
                    title:   'move',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _text.move ( 90, 25 );

                        _text.draw ( );
                    }
                },
                // rotate
                {
                    title:   'rotate',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _text.rotate ( 45 );

                        _text.draw ( );
                    }
                },
                // anchor
                {
                    title:   'anchor',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _text.options.anchor = true;

                        _text.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _text.options.border = true;

                        _text.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _text.options.axis = true;

                        _text.draw ( );
                    }
                },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _text.options.coordinates = true;

                        _text.draw ( );
                    }
                },
            ],
            texts:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _texts.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _texts.options.shadow = true;

                        _texts.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _texts.options.border = true;

                        _texts.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _texts.options.axis = true;

                        _texts.draw ( );
                    }
                },
                // anchor
                // {
                //     title:   'anchor',
                //     text:    'blah... blah... blah...',
                //     children: [ 'text' ],
                //     code: ( ) =>
                //     {
                //         _texts.options.anchor   = true;

                //         _texts.draw ( );
                //     }
                // },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _texts.options.coordinates = true;

                        _texts.draw ( );
                    }
                },
            ],
            cImage:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.draw ( );
                    }
                },
                // primary point
                {
                    title:   'primary point',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.primary.point  = new Point  ( 154,  85 );

                        _image.primary.aspect = new Aspect (  91, 101 );     // [ Optional ]

                        _image.draw ( );
                    }
                },
                // secondary point
                {
                    title:   'secondary point',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.primary.point    = new Point  ( 154,  85 );  // [ Optional ]

                        _image.primary.aspect   = new Aspect (  91, 101 );

                        _image.secondary.point  = new Point  ( -10, -40 );

                        _image.secondary.aspect = new Aspect (  91, 101 );

                        _image.draw ( );
                    }
                },
                // primary aspect
                {
                    title:   'primary aspect',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.primary.point    = new Point  ( 100,  60 );  // [ Optional ]

                        _image.primary.aspect   = new Aspect ( 182, 202 );

                        _image.secondary.point  = new Point  (   0,   0 );

                        _image.secondary.aspect = new Aspect (  91, 101 );

                        _image.draw ( );
                    }
                },
                // secondary aspect
                {
                    title:   'secondary aspect',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.primary.point    = new Point  ( 100,  60 );  // [ Optional ]

                        _image.primary.aspect   = new Aspect (  91, 101 );

                        _image.secondary.point  = new Point  (   0,   0 );

                        _image.secondary.aspect = new Aspect ( 182, 202 );

                        _image.draw ( );
                    }
                },
                // move
                {
                    title:   'move',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.move ( 90, 25 );

                        _image.draw ( );
                    }
                },
                // rotate
                {
                    title:   'rotate',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.rotate ( 45 );

                        _image.draw ( );
                    }
                },
                // anchor
                {
                    title:   'anchor',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.draw ( );
                    }
                },
                // anchor align
                {
                    title:   'anchor align',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.anchor.align   = 'topLeft';

                        _image.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.options.axis = true;

                        _image.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.options.border = true;

                        _image.draw ( );
                    }
                },
                // coordinates
                // {
                //     title:   'coordinates',
                //     text:    'blah... blah... blah...',
                //     children: [ 'options' ],
                //     code: ( ) =>
                //     {
                //         _image.options.coordinates = true;

                //         _image.draw ( );
                //     }
                // },
            ],
            group:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'circle', 'ellipse', 'rectangle', 'roundedrectangle' ],
                    code: ( ) =>
                    {
                        _group.draw ( );
                    }
                },
            ]
        },
        subject:
        {
            anchor:
            [
                // Align : circle
                {
                    title:   'Align',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.draw ( );
                    }
                },
                // Align Top : circle
                {
                    title:   'Align Top',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.anchor.align = 'top';

                        _circle.draw ( );
                    }
                },
                // Align Top-Right : circle
                {
                    title:   'Align Top-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.anchor.align = 'topRight';

                        _circle.draw ( );
                    }
                },
                // Align Right : circle
                {
                    title:   'Align Right',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.anchor.align = 'right';

                        _circle.draw ( );
                    }
                },
                // Align Bottom-Right : circle
                {
                    title:   'Align Bottom-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.anchor.align = 'bottomRight';

                        _circle.draw ( );
                    }
                },
                // Align Bottom : circle
                {
                    title:   'Align Bottom',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.anchor.align = 'bottom';

                        _circle.draw ( );
                    }
                },
                // Align Bottom-Left : circle
                {
                    title:   'Align Bottom-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.anchor.align = 'bottomLeft';

                        _circle.draw ( );
                    }
                },
                // Align Left : circle
                {
                    title:   'Align Left',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.anchor.align = 'left';

                        _circle.draw ( );
                    }
                },
                // Align Top-Left : circle
                {
                    title:   'Align Top-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.anchor.align = 'topLeft';

                        _circle.draw ( );
                    }
                },

                // Align : ellipse
                {
                    title:   'Align',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.draw ( );
                    }
                },
                // Align Top : ellipse
                {
                    title:   'Align Top',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.anchor.align = 'top';

                        _ellipse.draw ( );
                    }
                },
                // Align Top-Right : ellipse
                {
                    title:   'Align Top-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.anchor.align = 'topRight';

                        _ellipse.draw ( );
                    }
                },
                // Align Right : ellipse
                {
                    title:   'Align Right',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.anchor.align = 'right';

                        _ellipse.draw ( );
                    }
                },
                // Align Bottom-Right : ellipse
                {
                    title:   'Align Bottom-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.anchor.align = 'bottomRight';

                        _ellipse.draw ( );
                    }
                },
                // Align Bottom : ellipse
                {
                    title:   'Align Bottom',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.anchor.align = 'bottom';

                        _ellipse.draw ( );
                    }
                },
                // Align Bottom-Left : ellipse
                {
                    title:   'Align Bottom-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.anchor.align = 'bottomLeft';

                        _ellipse.draw ( );
                    }
                },
                // Align Left : ellipse
                {
                    title:   'Align Left',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.anchor.align = 'left';

                        _ellipse.draw ( );
                    }
                },
                // Align Top-Left : ellipse
                {
                    title:   'Align Top-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.anchor.align = 'topLeft';

                        _ellipse.draw ( );
                    }
                },

                // Align : rectangle
                {
                    title:   'Align',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.draw ( );
                    }
                },
                // Align Top : rectangle
                {
                    title:   'Align Top',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'top';

                        _rectangle.draw ( );
                    }
                },
                // Align Top-Right : rectangle
                {
                    title:   'Align Top-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'topRight';

                        _rectangle.draw ( );
                    }
                },
                // Align Right : rectangle
                {
                    title:   'Align Right',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'right';

                        _rectangle.draw ( );
                    }
                },
                // Align Bottom-Right : rectangle
                {
                    title:   'Align Bottom-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'bottomRight';

                        _rectangle.draw ( );
                    }
                },
                // Align Bottom : rectangle
                {
                    title:   'Align Bottom',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'bottom';

                        _rectangle.draw ( );
                    }
                },
                // Align Bottom-Left : rectangle
                {
                    title:   'Align Bottom-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'bottomLeft';

                        _rectangle.draw ( );
                    }
                },
                // Align Left : rectangle
                {
                    title:   'Align Left',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'left';

                        _rectangle.draw ( );
                    }
                },
                // Align Top-Left : rectangle
                {
                    title:   'Align Top-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'topLeft';

                        _rectangle.draw ( );
                    }
                },

                // Align : roundedRectangle
                {
                    title:   'Align',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.draw ( );
                    }
                },
                // Align Top : roundedRectangle
                {
                    title:   'Align Top',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.anchor.align = 'top';

                        _roundedRectangle.draw ( );
                    }
                },
                // Align Top-Right : roundedRectangle
                {
                    title:   'Align Top-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.anchor.align = 'topRight';

                        _roundedRectangle.draw ( );
                    }
                },
                // Align Right : roundedRectangle
                {
                    title:   'Align Right',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.anchor.align = 'right';

                        _roundedRectangle.draw ( );
                    }
                },
                // Align Bottom-Right : roundedRectangle
                {
                    title:   'Align Bottom-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.anchor.align = 'bottomRight';

                        _roundedRectangle.draw ( );
                    }
                },
                // Align Bottom : roundedRectangle
                {
                    title:   'Align Bottom',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.anchor.align = 'bottom';

                        _roundedRectangle.draw ( );
                    }
                },
                // Align Bottom-Left : roundedRectangle
                {
                    title:   'Align Bottom-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.anchor.align = 'bottomLeft';

                        _roundedRectangle.draw ( );
                    }
                },
                // Align Left : roundedRectangle
                {
                    title:   'Align Left',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.anchor.align = 'left';

                        _roundedRectangle.draw ( );
                    }
                },
                // Align Top-Left : roundedRectangle
                {
                    title:   'Align Top-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.anchor.align = 'topLeft';

                        _roundedRectangle.draw ( );
                    }
                },

                // Align : image
                {
                    title:   'Align',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.draw ( );
                    }
                },
                // Align Top : image
                {
                    title:   'Align Top',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.anchor.align = 'top';

                        _image.draw ( );
                    }
                },
                // Align Top-Right : image
                {
                    title:   'Align Top-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.anchor.align = 'topRight';

                        _image.draw ( );
                    }
                },
                // Align Right : image
                {
                    title:   'Align Right',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.anchor.align = 'right';

                        _image.draw ( );
                    }
                },
                // Align Bottom-Right : image
                {
                    title:   'Align Bottom-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.anchor.align = 'bottomRight';

                        _image.draw ( );
                    }
                },
                // Align Bottom : image
                {
                    title:   'Align Bottom',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.anchor.align = 'bottom';

                        _image.draw ( );
                    }
                },
                // Align Bottom-Left : image
                {
                    title:   'Align Bottom-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.anchor.align = 'bottomLeft';

                        _image.draw ( );
                    }
                },
                // Align Left : image
                {
                    title:   'Align Left',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.anchor.align = 'left';

                        _image.draw ( );
                    }
                },
                // Align Top-Left : image
                {
                    title:   'Align Top-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.anchor.align = 'topLeft';

                        _image.draw ( );
                    }
                },
            ],
            angle:
            [
                // angle start : circle
                {
                    title:   'angle start',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.angle.start = 90;

                        _circle.draw ( );
                    }
                },
                // angle end : circle
                {
                    title:   'angle end',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.angle.start = 90;

                        _circle.angle.end   = 180;

                        _circle.draw ( );
                    }
                },
                // angle clockwise : circle
                {
                    title:   'angle clockwise',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.angle.start = 90;

                        _circle.angle.end   = 180;

                        _circle.angle.clockwise = false;

                        _circle.draw ( );
                    }
                },
                // angle clockwise : circle
                {
                    title:   'angle clockwise',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.angle.start = 180;

                        _circle.angle.end   = 360;

                        _circle.angle.clockwise = false;

                        _circle.draw ( );
                    }
                },

                // angle start : ellipse
                {
                    title:   'angle start',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.angle.start = 90;

                        _ellipse.draw ( );
                    }
                },
                // angle end : ellipse
                {
                    title:   'angle end',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.angle.start = 90;

                        _ellipse.angle.end   = 180;

                        _ellipse.draw ( );
                    }
                },
                // angle clockwise : ellipse
                {
                    title:   'angle clockwise',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.angle.start = 90;

                        _ellipse.angle.end   = 180;

                        _ellipse.angle.clockwise = false;

                        _ellipse.draw ( );
                    }
                },
                // angle clockwise : ellipse
                {
                    title:   'angle clockwise',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.angle.start = 180;

                        _ellipse.angle.end   = 360;

                        _ellipse.angle.clockwise = false;

                        _ellipse.draw ( );
                    }
                },
            ],
            aspect:
            [
                // aspect : rectangle
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 100, height: 100 };

                        _rectangle.draw ( );
                    }
                },
                // aspect : rectangle
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 25, height: 25 };

                        _rectangle.draw ( );
                    }
                },
                // aspect : rectangle
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 100, height: 50 };

                        _rectangle.draw ( );
                    }
                },
                // aspect : rectangle
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 50, height: 100 };

                        _rectangle.draw ( );
                    }
                },

                // aspect : roundedRectangle
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.aspect = { width: 100, height: 100 };

                        _roundedRectangle.draw ( );
                    }
                },
                // aspect : roundedRectangle
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.aspect = { width: 25, height: 25 };

                        _roundedRectangle.draw ( );
                    }
                },
                // aspect : roundedRectangle
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.aspect = { width: 100, height: 50 };

                        _roundedRectangle.draw ( );
                    }
                },
                // aspect : roundedRectangle
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.aspect = { width: 50, height: 100 };

                        _roundedRectangle.draw ( );
                    }
                },
            ],
            controlpoints:
            [
                // control points p0
                {
                    title:   'control points p0',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.options.controlPoints = true;  // [ Optional ]

                        _line.controlPoints.p0      = 50;

                        _line.draw ( );
                    }
                },
                // control points p1
                {
                    title:   'control points p1',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.options.controlPoints = true;  // [ Optional ]

                        _line.controlPoints.p1      = 50;

                        _line.draw ( );
                    }
                },
                // control points p2
                {
                    title:   'control points p2',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.options.controlPoints = true;  // [ Optional ]

                        _line.controlPoints.p2      = 50;

                        _line.draw ( );
                    }
                },
                // control points p3
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.options.controlPoints = true;

                        _line.controlPoints.p3      = 50;

                        _line.draw ( );
                    }
                },
                // control points
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.options.controlPoints = true;  // [ Optional ]

                        _line.controlPoints.points  = [ 50, 50, 50, 50 ];

                        _line.draw ( );
                    }
                },
                // control points
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.options.controlPoints = true;  // [ Optional ]

                        _line.controlPoints.points  = [ -50, 50, -50, 50 ];

                        _line.draw ( );
                    }
                },
                // control points
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.options.controlPoints = true;  // [ Optional ]

                        _line.controlPoints.points  = [ 50, -50, 50, -50 ];

                        _line.draw ( );
                    }
                },
                // control points
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.options.controlPoints = true;

                        _line.controlPoints.points  = [ -50, -50, -50, -50 ];

                        _line.draw ( );
                    }
                },
                // curve
                {
                    title:   'curve',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.options.controlPoints = true;  // [ Optional ]

                        _line.curve ( 50, 50, 50, 50 );

                        _line.draw ( );
                    }
                },
            ],
            fill:
            [
                // fill color : circle
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.color = new Rgb ( 0,  150,  200 );

                        _circle.draw ( );
                    }
                },
                // fill linear : circle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'linear', 'stop', 'rgb' ],
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
                // fill radial : circle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'radial', 'stop', 'rgb' ],
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
                // fill conic : circle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'conic', 'stop', 'rgb' ],
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
                // fill pattern : circle
                {
                    title:   'fill pattern',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.radius = 50;    // [ Optional ]

                        _circle.fill.pattern = 'images/png/sun.png';

                        _circle.draw ( );
                    }
                },
                // fill pattern no-repeat : circle
                // {
                //     title:   'fill pattern no-repeat',
                //     text:    'blah... blah... blah...',
                //     children: [ 'circle' ],
                //     code: ( ) =>
                //     {
                //         _circle.radius = 50;    // [ Optional ]

                //         _circle.fill.pattern    = 'images/png/sun.png';

                //         _circle.fill.repetition = 'no-repeat';

                //         _circle.draw ( );
                //     }
                // },

                // fill color : ellipse
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.color = new Rgb ( 0,  150,  200 );

                        _ellipse.draw ( );
                    }
                },
                // fill linear : ellipse
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'linear', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill radial : ellipse
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'radial', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Radial ( { x: 110, y: 90 }, 30, { x: 100, y: 100 }, 70 );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill conic : ellipse
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'conic', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Conic ( 0, { x: 75, y: 155 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill pattern : ellipse
                {
                    title:   'fill pattern',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.radius = new Point ( 70, 50 );  // [ Optional ]

                        _ellipse.fill.pattern = 'images/png/sun.png';

                        _ellipse.draw ( );
                    }
                },
                // fill pattern no-repeat : ellipse
                // {
                //     title:   'fill pattern no-repeat',
                //     text:    'blah... blah... blah...',
                //     children: [ 'ellipse' ],
                //     code: ( ) =>
                //     {
                //         _ellipse.radius = 50;    // [ Optional ]

                //         _ellipse.fill.pattern    = 'images/png/sun.png';

                //         _ellipse.fill.repetition = 'no-repeat';

                //         _ellipse.draw ( );
                //     }
                // },

                // fill color : rectangle
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                // fill linear : rectangle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'linear', 'stop', 'rgb' ],
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
                // fill radial : rectangle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'linear', 'stop', 'rgb' ],
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
                // fill conic : rectangle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'conic', 'stop', 'rgb' ],
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
                // fill pattern : rectangle
                {
                    title:   'fill pattern',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.aspect = new Aspect ( 200, 100 );  // [ Optional ]

                        _rectangle.fill.pattern = 'images/png/sun.png';

                        _rectangle.draw ( );
                    }
                },
                // fill pattern no-repeat : rectangle
                // {
                //     title:   'fill pattern no-repeat',
                //     text:    'blah... blah... blah...',
                //     children: [ 'rectangle' ],
                //     code: ( ) =>
                //     {
                //         _rectangle.radius = 50;    // [ Optional ]

                //         _rectangle.fill.pattern    = 'images/png/sun.png';

                //         _rectangle.fill.repetition = 'no-repeat';

                //         _rectangle.draw ( );
                //     }
                // },

                // fill color : roundedRectangle
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _roundedRectangle.draw ( );
                    }
                },
                // fill linear : roundedRectangle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle', 'linear', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
                // fill radial : roundedRectangle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle', 'linear', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Radial ( { x: 110, y: 90 }, 30, { x: 100, y: 100 }, 70 );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
                // fill conic : roundedRectangle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle', 'conic', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Conic ( 0, { x: 75, y: 155 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    },
                },
                // fill pattern : roundedrectangle
                {
                    title:   'fill pattern',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.aspect = new Aspect ( 200, 100 );  // [ Optional ]

                        _roundedRectangle.fill.pattern = 'images/png/sun.png';

                        _roundedRectangle.draw ( );
                    }
                },
                // // fill pattern no-repeat : roundedRectangle
                // {
                //     title:   'fill pattern no-repeat',
                //     text:    'blah... blah... blah...',
                //     children: [ 'roundedrectangle' ],
                //     code: ( ) =>
                //     {
                //         _roundedRectangle.radius = 50;    // [ Optional ]

                //         _roundedRectangle.fill.pattern    = 'images/png/sun.png';

                //         _roundedRectangle.fill.repetition = 'no-repeat';

                //         _roundedRectangle.draw ( );
                //     }
                // },

                // fill color : text
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _text.fill.color = new Rgb ( 0,   150, 200, 1 );

                        _text.draw ( );
                    }
                },
                // fill linear : text
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _text.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _text.draw ( );
                    }
                },
                // fill radial : text
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _text.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _text.draw ( );
                    }
                },
                // fill conic : text
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _text.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _text.draw ( );
                    }
                },
            ],
            font:
            [
                // type
                {
                    title:   'type',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _text.type = 'Courier New';

                        _text.draw ( );
                    }
                },
                // size
                {
                    title:   'size',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _text.size = 36;

                        _text.draw ( );
                    }
                },
                // weight
                {
                    title:   'weight',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _text.weight = 'italic';

                        _text.draw ( );
                    }
                },
                // maxWidth
                {
                    title:   'maxWidth',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _text.maxWidth = 100;

                        _text.draw ( );
                    }
                },
                // offset
                {
                    title:   'offset',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _text.offset = { x: 0, y: -25 }

                        _text.draw ( );
                    }
                },
            ],
            point:
            [
                // draw : line
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.draw ( );
                    }
                },
                // shadow offset : line
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.x = 5;

                        _line.shadow.y = 5;

                        _line.draw ( );
                    }
                },
                // points : line
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
                // coordinates : line
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

                // draw : circle
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.draw ( );
                    }
                },
                // shadow offset : circle
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.shadow.x = 5;

                        _circle.shadow.y = 5;

                        _circle.draw ( );
                    }
                },
                // coordinates : circle
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

                // draw : ellipse
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.draw ( );
                    }
                },
                // shadow offset : ellipse
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.shadow.x = 5;

                        _ellipse.shadow.y = 5;

                        _ellipse.draw ( );
                    }
                },
                // coordinates : ellipse
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _ellipse.options.coordinates = true;

                        _ellipse.draw ( );
                    }
                },

                // draw : rectangle
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.draw ( );
                    }
                },
                // shadow offset : rectangle
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.shadow.x = 5;

                        _rectangle.shadow.y = 5;

                        _rectangle.draw ( );
                    }
                },
                // coordinates : rectangle
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _rectangle.options.coordinates = true;

                        _rectangle.draw ( );
                    }
                },

                // draw : roundedRectangle
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.draw ( );
                    }
                },
                // shadow offset : roundedRectangle
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.shadow.x = 5;

                        _roundedRectangle.shadow.y = 5;

                        _roundedRectangle.draw ( );
                    }
                },
                // coordinates : roundedRectangle
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.coordinates = true;

                        _roundedRectangle.draw ( );
                    }
                },

                // draw : text
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _text.draw ( );
                    }
                },
                // offset : text
                {
                    title:   'offset',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'font' ],
                    code: ( ) =>
                    {
                        _text.offset = { x: 0, y: -25 }

                        _text.draw ( );
                    }
                },
                // shadow offset : text
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.shadow.x = 5;

                        _text.shadow.y = 5;

                        _text.draw ( );
                    }
                },
                // coordinates : text
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _text.options.coordinates = true;

                        _text.draw ( );
                    }
                },

                // draw : cImage
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.draw ( );
                    }
                },
            ],
            linear:
            [
                // fill linear : circle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill', 'stop', 'rgb' ],
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

                // fill linear : ellipse
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },

                // fill linear : rectangle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill', 'stop', 'rgb' ],
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

                // fill linear : roundedRectangle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },

                // fill linear : text
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _text.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _text.draw ( );
                    }
                },
            ],
            radial:
            [
                // fill radial : circle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill', 'stop', 'rgb' ],
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

                // fill radial : ellipse
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },

                // fill radial : rectangle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill', 'stop', 'rgb' ],
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

                // fill radial : roundedRectangle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },

                // fill radial : text
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _text.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _text.draw ( );
                    }
                },
            ],
            conic:
            [
                // fill conic : circle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill', 'stop', 'rgb' ],
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

                // fill conic : ellipse
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },

                // fill conic : rectangle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill', 'stop', 'rgb' ],
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

                // fill conic : roundedRectangle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },

                // fill conic : text
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _text.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _text.draw ( );
                    }
                },
            ],
            rgb:
            [
                // stroke color : line
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'stroke' ],
                    code: ( ) =>
                    {
                        _line.stroke.color = new Rgb ( 0,  150,  200 );

                        _line.draw ( );
                    }
                },
                // stroke alpha : line
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'stroke' ],
                    code: ( ) =>
                    {
                        _line.stroke.color.alpha = 0.25;

                        _line.draw ( );
                    }
                },

                // stroke color : circle
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'stroke' ],
                    code: ( ) =>
                    {
                        _circle.stroke.color = new Rgb ( 0,  150,  200 );

                        _circle.draw ( );
                    }
                },
                // stroke alpha : circle
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'stroke' ],
                    code: ( ) =>
                    {
                        _circle.stroke.color.alpha = 0.25;

                        _circle.draw ( );
                    }
                },
                // fill color : circle
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill' ],
                    code: ( ) =>
                    {
                        _circle.fill.color = new Rgb ( 0,  150,  200 );

                        _circle.draw ( );
                    }
                },
                // fill alpha : circle
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill' ],
                    code: ( ) =>
                    {
                        _circle.fill.color = new Rgb ( 0,  150,  200 );

                        _circle.fill.color.alpha = 0.25;

                        _circle.draw ( );
                    }
                },
                // fill linear : circle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill', 'linear', 'stop' ],
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
                // fill radial : circle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill', 'radial', 'stop' ],
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
                // fill conic : circle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill', 'conic', 'stop' ],
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

                // stroke color : ellipse
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'stroke' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.color = new Rgb ( 0,  150,  200 );

                        _ellipse.draw ( );
                    }
                },
                // stroke alpha : ellipse
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'stroke' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.color.alpha = 0.25;

                        _ellipse.draw ( );
                    }
                },
                // fill color : ellipse
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.color = new Rgb ( 0,  150,  200 );

                        _ellipse.draw ( );
                    }
                },
                // fill alpha : ellipse
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.color = new Rgb ( 0,  150,  200 );

                        _ellipse.fill.color.alpha = 0.25;

                        _ellipse.draw ( );
                    }
                },
                // fill linear : ellipse
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill', 'linear', 'stop' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill radial : ellipse
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill', 'radial', 'stop' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill conic : ellipse
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill', 'conic', 'stop' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },

                // stroke color : rectangle
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'stroke' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                // stroke alpha : rectangle
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'stroke' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.alpha = 0.25;

                        _rectangle.draw ( );
                    }
                },
                // fill color : rectangle
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                // fill alpha : rectangle
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.fill.color.alpha = 0.25;

                        _rectangle.draw ( );
                    }
                },
                // fill linear : rectangle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill', 'linear', 'stop' ],
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
                // fill radial : rectangle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill', 'radial', 'stop' ],
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
                // fill conic : rectangle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill', 'conic', 'stop' ],
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

                // stroke color : roundedRectangle
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'stroke' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.color = new Rgb ( 0,  150,  200 );

                        _roundedRectangle.draw ( );
                    }
                },
                // stroke alpha : roundedRectangle
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'stroke' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.alpha = 0.25;

                        _roundedRectangle.draw ( );
                    }
                },
                // fill color : roundedRectangle
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _roundedRectangle.draw ( );
                    }
                },
                // fill alpha : roundedRectangle
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _roundedRectangle.fill.color.alpha = 0.25;

                        _roundedRectangle.draw ( );
                    }
                },
                // fill linear : roundedRectangle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill', 'linear', 'stop' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
                // fill radial : roundedRectangle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill', 'radial', 'stop' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
                // fill conic : roundedRectangle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill', 'conic', 'stop' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },

                // stroke color : text
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'stroke' ],
                    code: ( ) =>
                    {
                        _text.stroke.width = 1;

                        _text.stroke.color = new Rgb ( 0,  150,  200 );

                        _text.draw ( );
                    }
                },
                // stroke alpha : text
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'stroke' ],
                    code: ( ) =>
                    {
                        _text.stroke.width       = 1;

                        _text.stroke.color.alpha = 0.5;

                        _text.fill.color.alpha   = 0;       // [ Optional ]

                        _text.draw ( );
                    }
                },
                // fill color : text
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'fill' ],
                    code: ( ) =>
                    {
                        _text.fill.color = new Rgb ( 0,  150,  200 );

                        _text.draw ( );
                    }
                },
                // fill alpha : text
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'fill' ],
                    code: ( ) =>
                    {
                        _text.fill.color.alpha = 0.25;

                        _text.draw ( );
                    }
                },
            ],
            shadow:
            [
                // shadow : line
                {
                    title:   'line',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'options' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.draw ( );
                    }
                },
                // shadow color : line
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.color = new Rgb ( 0, 150, 200 );

                        _line.draw ( );
                    }
                },
                // shadow alpha : line
                {
                    title:   'shadow alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.color.alpha = 0.5;

                        _line.draw ( );
                    }
                },
                // shadow blur : line
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'options' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.blur = 10;

                        _line.draw ( );
                    }
                },
                // shadow offset : line
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'options' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.x = 5;

                        _line.shadow.y = 5;

                        _line.draw ( );
                    }
                },

                // shadow : circle
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'options' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.draw ( );
                    }
                },
                // shadow color : circle
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.shadow.color = new Rgb ( 0, 150, 200 );

                        _circle.draw ( );
                    }
                },
                // shadow alpha : circle
                {
                    title:   'shadow alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.shadow.color.alpha = 0.5;

                        _circle.draw ( );
                    }
                },
                // shadow blur : circle
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'options' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.shadow.blur = 10;

                        _circle.draw ( );
                    }
                },
                // shadow offset : circle
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'options' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.shadow.x = 5;

                        _circle.shadow.y = 5;

                        _circle.draw ( );
                    }
                },

                // shadow : ellipse
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'options' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.draw ( );
                    }
                },
                // shadow color : ellipse
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.shadow.color = new Rgb ( 0, 150, 200 );

                        _ellipse.draw ( );
                    }
                },
                // shadow alpha : ellipse
                {
                    title:   'shadow alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.shadow.color.alpha = 0.5;

                        _ellipse.draw ( );
                    }
                },
                // shadow blur : ellipse
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'options' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.shadow.blur = 10;

                        _ellipse.draw ( );
                    }
                },
                // shadow offset : ellipse
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'options' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.shadow.x = 5;

                        _ellipse.shadow.y = 5;

                        _ellipse.draw ( );
                    }
                },

                // shadow : rectangle
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'options' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.draw ( );
                    }
                },
                // shadow color : rectangle
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.shadow.color = new Rgb ( 0, 150, 200 );

                        _rectangle.draw ( );
                    }
                },
                // shadow alpha : rectangle
                {
                    title:   'shadow alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.shadow.color.alpha = 0.5;

                        _rectangle.draw ( );
                    }
                },
                // shadow blur : rectangle
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'options' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.shadow.blur = 10;

                        _rectangle.draw ( );
                    }
                },
                // shadow offset : rectangle
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'options' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.shadow.x = 5;

                        _rectangle.shadow.y = 5;

                        _rectangle.draw ( );
                    }
                },

                // shadow : roundedRectangle
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'options' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.draw ( );
                    }
                },
                // shadow color : roundedRectangle
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.shadow.color = new Rgb ( 0, 150, 200 );

                        _roundedRectangle.draw ( );
                    }
                },
                // shadow alpha : roundedRectangle
                {
                    title:   'shadow alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.shadow.color.alpha = 0.5;

                        _roundedRectangle.draw ( );
                    }
                },
                // shadow blur : roundedRectangle
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'options' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.shadow.blur = 10;

                        _roundedRectangle.draw ( );
                    }
                },
                // shadow offset : roundedRectangle
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'options' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.shadow.x = 5;

                        _roundedRectangle.shadow.y = 5;

                        _roundedRectangle.draw ( );
                    }
                },

                // shadow : text
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'options' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.draw ( );
                    }
                },
                // shadow color : text
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.shadow.color = new Rgb ( 0, 150, 200 );

                        _text.draw ( );
                    }
                },
                // shadow alpha : text
                {
                    title:   'shadow alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.shadow.color.alpha = 0.5;

                        _text.draw ( );
                    }
                },
                // shadow blur : text
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'options' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.shadow.blur = 10;

                        _text.draw ( );
                    }
                },
                // shadow offset : text
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.shadow.x = 5;

                        _text.shadow.y = 5;

                        _text.draw ( );
                    }
                },
            ],
            stop:
            [
                // fill linear : circle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill', 'linear', 'rgb' ],
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
                // fill radial : circle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill', 'gradient', 'rgb' ],
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
                // fill conic : circle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill', 'conic', 'rgb' ],
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

                // fill linear : ellipse
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill', 'linear', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill radial : ellipse
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill', 'radial', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill conic : ellipse
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill', 'conic', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },

                // fill linear : rectangle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill', 'linear', 'rgb' ],
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
                // fill radial : rectangle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill', 'radial', 'rgb' ],
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
                // fill conic : rectangle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill', 'conic', 'rgb' ],
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

                // fill linear : roundedRectangle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill', 'linear', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
                // fill radial : roundedRectangle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill', 'radial', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
                // fill conic : roundedRectangle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill', 'conic', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
            ],
            stroke:
            [
                // stroke type : line
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.stroke.type = 'solid';

                        _line.draw ( );
                    }
                },
                // stroke segments : line
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.stroke.segments = [ 2, 7, 10 ];

                        _line.draw ( );
                    }
                },
                // stroke color : line
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'rgb' ],
                    code: ( ) =>
                    {
                        _line.stroke.color = new Rgb ( 0,  150,  200 );

                        _line.draw ( );
                    }
                },
                // stroke alpha : line
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'rgb' ],
                    code: ( ) =>
                    {
                        _line.stroke.color.alpha = 0.25;

                        _line.draw ( );
                    }
                },
                // stroke width : line
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.stroke.width = 5;

                        _line.draw ( );
                    }
                },
                // stroke cap : line
                {
                    title:   'stroke cap',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.stroke.width = 5;

                        _line.lineCap = 'butt';

                        _line.draw ( );
                    }
                },

                // stroke type : circle
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.stroke.type = 'solid';

                        _circle.draw ( );
                    }
                },
                // stroke segments : circle
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.stroke.segments = [ 2, 4 ];

                        _circle.draw ( );
                    }
                },
                // stroke color : circle
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.stroke.color = new Rgb ( 0,  150,  200 );

                        _circle.draw ( );
                    }
                },
                // stroke alpha : circle
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.stroke.color.alpha = 0.25;

                        _circle.draw ( );
                    }
                },
                // stroke width : circle
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.stroke.width = 5;

                        _circle.draw ( );
                    }
                },

                // stroke type : ellipse
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.type = 'solid';

                        _ellipse.draw ( );
                    }
                },
                // stroke segments : ellipse
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.segments = [ 2, 4 ];

                        _ellipse.draw ( );
                    }
                },
                // stroke color : ellipse
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.color = new Rgb ( 0,  150,  200 );

                        _ellipse.draw ( );
                    }
                },
                // stroke alpha : ellipse
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.color.alpha = 0.25;

                        _ellipse.draw ( );
                    }
                },
                // stroke width : ellipse
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.width = 5;

                        _ellipse.draw ( );
                    }
                },

                // stroke type : rectangle
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.type = 'solid';

                        _rectangle.draw ( );
                    }
                },
                // stroke segments : rectangle
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.segments = [ 2, 4 ];

                        _rectangle.draw ( );
                    }
                },
                // stroke color : rectangle
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                // stroke alpha : rectangle
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.alpha = 0.25;

                        _rectangle.draw ( );
                    }
                },
                // stroke width : rectangle
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.width = 5;

                        _rectangle.draw ( );
                    }
                },

                // stroke type : roundedRectangle
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.type = 'solid';

                        _roundedRectangle.draw ( );
                    }
                },
                // stroke segments : roundedRectangle
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.segments = [ 2, 4 ];

                        _roundedRectangle.draw ( );
                    }
                },
                // stroke color : roundedRectangle
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.color = new Rgb ( 0,  150,  200 );

                        _roundedRectangle.draw ( );
                    }
                },
                // stroke alpha : roundedRectangle
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.alpha = 0.25;

                        _roundedRectangle.draw ( );
                    }
                },
                // stroke width : roundedRectangle
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.width = 5;

                        _roundedRectangle.draw ( );
                    }
                },

                // stroke type
                // {
                //     title:   'stroke type',
                //     text:    'blah... blah... blah...',
                //     children: [ 'stroke' ],
                //     code: ( ) =>
                //     {
                //         _text.stroke.type = 'solid';

                //         _text.draw ( );
                //     }
                // },
                // stroke segments
                // {
                //     title:   'stroke segments',
                //     text:    'blah... blah... blah...',
                //     children: [ 'stroke' ],
                //     code: ( ) =>
                //     {
                //         _text.stroke.type = 'solid';

                //         _text.stroke.segments = [ 2, 7, 10 ];

                //         _text.draw ( );
                //     }
                // },
                // stroke color : text
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.stroke.color = new Rgb ( 0,  150,  200 );

                        _text.stroke.width = 1;

                        _text.draw ( );
                    }
                },
                // stroke alpha : text
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.stroke.width       = 1;

                        _text.stroke.color.alpha = 0.5;

                        _text.fill.color.alpha   = 0;       // [ Optional ]

                        _text.draw ( );
                    }
                },
                // stroke width : text
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _text.stroke.color = new Rgb ( 0,  150,  200 );  // [ Optional]

                        _text.stroke.width = 5;

                        _text.draw ( );
                    }
                },
            ]
        },
        template:
        {
            sacredcircles:
            [
                // draw everything
                {
                    title:   'Draw All',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'lines', 'circles', 'rectangles', 'texts', 'rgb' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 15;

                        let _degrees    = [ 90, 330, 270, 210, 150, 90, 30 ];

                        let _alpha      = 0.40;

                        let _colors     =
                        [
                            new Rgb ( 255,  0,  255, _alpha ),      // Magenta
                            new Rgb (   0,  0,  255, _alpha ),      // Blue
                            new Rgb (   0, 255, 255, _alpha ),      // Cyan
                            new Rgb (   0, 255,   0, _alpha ),      // Green
                            new Rgb ( 255, 255,   0, _alpha ),      // Yellow
                            new Rgb ( 255, 125,   0, _alpha ),      // Orange
                            new Rgb ( 255,   0,   0, _alpha ),      // Red
                            new Rgb (   0,   0,   0, _alpha ),      // Black
                        ]

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas = 'canvas';

                            _group.template   = new SacredCircles ( _center, _radius, _iterations, _degrees, _colors );

                            _group.draw ( );
                    }
                },
                // draw circles
                {
                    title:   'Circles',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'circles', 'circle' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 15;

                        let _degrees    = [ 90, 330, 270, 210, 150, 90, 30 ];

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas = 'canvas';

                            _group.template   = new SacredCircles ( _center, _radius, _iterations, _degrees, undefined );

                            _group.circles.draw ( );
                    }
                },
                // draw circles & color
                {
                    title:   'Circles & Colors',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'circles', 'circle', 'rgb' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 15;

                        let _degrees    = [ 90, 330, 270, 210, 150, 90, 30 ];

                        let _alpha      = 0.40;

                        let _colors     =
                        [
                            new Rgb ( 255,  0,  255, _alpha ),      // Magenta
                            new Rgb (   0,  0,  255, _alpha ),      // Blue
                            new Rgb (   0, 255, 255, _alpha ),      // Cyan
                            new Rgb (   0, 255,   0, _alpha ),      // Green
                            new Rgb ( 255, 255,   0, _alpha ),      // Yellow
                            new Rgb ( 255, 125,   0, _alpha ),      // Orange
                            new Rgb ( 255,   0,   0, _alpha ),      // Red
                            new Rgb (   0,   0,   0, _alpha ),      // Black
                        ]

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas = 'canvas';

                            _group.template   = new SacredCircles ( _center, _radius, _iterations, _degrees, _colors );

                            _group.circles.draw ( );
                    }
                },
                // draw ellipses
                {
                    title:   'Ellipses',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'ellipses', 'ellipse' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 15;

                        let _degrees    = [ 90, 330, 270, 210, 150, 90, 30 ];

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas = 'canvas';

                            _group.template   = new SacredCircles ( _center, _radius, _iterations, _degrees, undefined );

                            _group.ellipses.draw ( );
                    }
                },
                // draw ellipses & color
                {
                    title:   'Ellipses & Colors',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'ellipses', 'ellipse', 'rgb' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 15;

                        let _degrees    = [ 90, 330, 270, 210, 150, 90, 30 ];

                        let _alpha      = 0.40;

                        let _colors     =
                        [
                            new Rgb ( 255,  0,  255, _alpha ),      // Magenta
                            new Rgb (   0,  0,  255, _alpha ),      // Blue
                            new Rgb (   0, 255, 255, _alpha ),      // Cyan
                            new Rgb (   0, 255,   0, _alpha ),      // Green
                            new Rgb ( 255, 255,   0, _alpha ),      // Yellow
                            new Rgb ( 255, 125,   0, _alpha ),      // Orange
                            new Rgb ( 255,   0,   0, _alpha ),      // Red
                            new Rgb (   0,   0,   0, _alpha ),      // Black
                        ]

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas = 'canvas';

                            _group.template   = new SacredCircles ( _center, _radius, _iterations, _degrees, _colors );

                            _group.ellipses.draw ( );
                    }
                },
                // draw rectangles
                {
                    title:   'Rectangles',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'rectangles', 'rectangle' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 15;

                        let _degrees    = [ 90, 330, 270, 210, 150, 90, 30 ];

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas = 'canvas';

                            _group.template   = new SacredCircles ( _center, _radius, _iterations, _degrees, undefined );

                            _group.rectangles.draw ( );
                    }
                },
                // draw rectangles & colors
                {
                    title:   'Rectangles & Colors',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'rectangles', 'rectangle', 'rgb' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 15;

                        let _degrees    = [ 90, 330, 270, 210, 150, 90, 30 ];

                        let _alpha      = 0.40;

                        let _colors     =
                        [
                            new Rgb ( 255,  0,  255, _alpha ),      // Magenta
                            new Rgb (   0,  0,  255, _alpha ),      // Blue
                            new Rgb (   0, 255, 255, _alpha ),      // Cyan
                            new Rgb (   0, 255,   0, _alpha ),      // Green
                            new Rgb ( 255, 255,   0, _alpha ),      // Yellow
                            new Rgb ( 255, 125,   0, _alpha ),      // Orange
                            new Rgb ( 255,   0,   0, _alpha ),      // Red
                            new Rgb (   0,   0,   0, _alpha ),      // Black
                        ]

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas = 'canvas';

                            _group.template   = new SacredCircles ( _center, _radius, _iterations, _degrees, _colors );

                            _group.rectangles.draw ( );
                    }
                },
                // draw rounded rectangles
                {
                    title:   'Rounded Rectangles',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'roundedrectangles', 'roundedrectangle' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 15;

                        let _degrees    = [ 90, 330, 270, 210, 150, 90, 30 ];

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas = 'canvas';

                            _group.template   = new SacredCircles ( _center, _radius, _iterations, _degrees, undefined );

                            _group.roundedRectangles.draw ( );
                    }
                },
                // draw rectangles & colors
                {
                    title:   'Rounded Rectangles & Colors',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'roundedrectangles', 'roundedrectangle', 'rgb' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 15;

                        let _degrees    = [ 90, 330, 270, 210, 150, 90, 30 ];

                        let _alpha      = 0.40;

                        let _colors     =
                        [
                            new Rgb ( 255,  0,  255, _alpha ),      // Magenta
                            new Rgb (   0,  0,  255, _alpha ),      // Blue
                            new Rgb (   0, 255, 255, _alpha ),      // Cyan
                            new Rgb (   0, 255,   0, _alpha ),      // Green
                            new Rgb ( 255, 255,   0, _alpha ),      // Yellow
                            new Rgb ( 255, 125,   0, _alpha ),      // Orange
                            new Rgb ( 255,   0,   0, _alpha ),      // Red
                            new Rgb (   0,   0,   0, _alpha ),      // Black
                        ]

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas = 'canvas';

                            _group.template   = new SacredCircles ( _center, _radius, _iterations, _degrees, _colors );

                            _group.roundedRectangles.draw ( );
                    }
                },
                // draw lines
                // {
                //     title:   'Lines',
                //     text:    'blah... blah... blah...',
                //     children: [ 'group', 'lines', 'line' ],
                //     code: ( ) =>
                //     {
                //         ////    INPUTS    //////////////////////////////

                //         let _center     = canvaslab.center;

                //         let _radius     = 25;

                //         let _iterations = 15;

                //         let _degrees    = [ 90, 330, 270, 210, 150, 90, 30 ];

                //         ////    POPULATION    //////////////////////////

                //         let _group = new Group;

                //             _group.canvas = 'canvas';

                //             _group.template   = new SacredCircles ( _center, _radius, _iterations, _degrees, undefined );

                //             _group.lines.draw ( );
                //     }
                // },
                // draw texts
                {
                    title:   'Texts',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'texts', 'text' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 15;

                        let _degrees    = [ 90, 330, 270, 210, 150, 90, 30 ];

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas = 'canvas';

                            _group.template   = new SacredCircles ( _center, _radius, _iterations, _degrees, undefined );

                            _group.texts.draw ( );
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
                    // point -x
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _line.x - 25, _line.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _line.x, _line.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _line.x + 25, _line.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _line.x, _line.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 0°
                    {
                        title:   'Move 0°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 0, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 90°
                    {
                        title:   'Move 90°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 90, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 180°
                    {
                        title:   'Move 180°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 180, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 270°
                    {
                        title:   'Move 270°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 270, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // startPoint
                    {
                        title: 'Start Point',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    startPoint: new Point ( 100, 50 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // endPoint
                    {
                        title: 'End Point',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    endPoint: new Point ( 100, 50 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInSine',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                                _line.options.anchor = true;  // [ Optional ]

                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // // rotate anchor align
                    // {
                    //     title: 'rotate anchor align',
                    //     text: 'easeInSine',
                    //     code: ( ) =>
                    //     {
                    //         _line.options.anchor = true;  // [ Optional ]

                    //         _line.anchor.align   = 'start';

                    //         let _transition =
                    //         {
                    //             object: _line,
                    //             timing: 'easeInSine',
                    //             period: 2000,
                    //             change:
                    //             {
                    //                 rotate: 180,
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },
                    // stroke color
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow color
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.options.shadow = true;

                            _line.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.options.shadow     = true;

                            _line.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow' ],
                        code: ( ) =>
                        {
                            _line.options.shadow = true;


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'point' ],
                        code: ( ) =>
                        {
                            _line.options.shadow = true;


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // control points
                    {
                        title:   'control points',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'controlpoints' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;     // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    controlPoints: [ 50, 0, 0, 50 ]
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                circle:
                [
                    // point -x
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _circle.x - 25, _circle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _circle.x, _circle.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _circle.x + 25, _circle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _circle.x, _circle.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 0°
                    {
                        title:   'Move 0°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 0, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 90°
                    {
                        title:   'Move 90°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 90, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 180°
                    {
                        title:   'Move 180°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 180, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 270°
                    {
                        title:   'Move 270°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 270, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _circle.options.anchor = true;  // [ Optional ]

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _circle.options.anchor = true;  // [ Optional ]

                            _circle.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // radius
                    {
                        title: 'Radius',
                        text: 'easeInOutElastic',
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    radius: 50
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke color
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow color
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.options.shadow = true;

                            _circle.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.options.shadow     = true;

                            _circle.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.options.shadow = true;


                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'point' ],
                        code: ( ) =>
                        {
                            _circle.options.shadow = true;


                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'fill', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'fill', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'fill', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'fill', 'radial', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'fill', 'conic', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                ellipse:
                [
                    // point -x
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _ellipse.x - 25, _ellipse.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _ellipse.x, _ellipse.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _ellipse.x + 25, _ellipse.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _ellipse.x, _ellipse.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 0°
                    {
                        title:   'Move 0°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 0, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 90°
                    {
                        title:   'Move 90°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 90, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 180°
                    {
                        title:   'Move 180°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 180, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 270°
                    {
                        title:   'Move 270°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 270, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _ellipse.options.anchor = true;

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _ellipse.options.anchor = true;

                            _ellipse.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke color
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow color
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.options.shadow = true;

                            _ellipse.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.options.shadow     = true;

                            _ellipse.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.options.shadow     = true;


                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.options.shadow     = true;


                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'fill', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'fill', 'radial', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'fill', 'conic', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                rectangle:
                [
                    // point -x
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _rectangle.x - 25, _rectangle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _rectangle.x, _rectangle.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _rectangle.x + 25, _rectangle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _rectangle.x, _rectangle.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 0°
                    {
                        title:   'Move 0°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 0, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 90°
                    {
                        title:   'Move 90°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 90, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 180°
                    {
                        title:   'Move 180°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 180, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 270°
                    {
                        title:   'Move 270°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 270, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // aspect
                    {
                        title:   'aspect',
                        text:    'blah... blah... blah...',
                        children: [ 'aspect' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    aspect: new Aspect ( 100, 100 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // aspect
                    {
                        title:   'aspect',
                        text:    'blah... blah... blah...',
                        children: [ 'aspect' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    aspect: new Aspect ( 25, 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _rectangle.options.anchor = true;

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _rectangle.options.anchor = true;

                            _rectangle.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke color
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow color
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.options.shadow = true;

                            _rectangle.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.options.shadow     = true;

                            _rectangle.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow' ],
                        code: ( ) =>
                        {
                            _rectangle.options.shadow     = true;


                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'point' ],
                        code: ( ) =>
                        {
                            _rectangle.options.shadow     = true;


                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'fill', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'fill', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'fill', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'fill', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'fill', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                roundedRectangle:
                [
                    // point -x
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _roundedRectangle.x - 25, _roundedRectangle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _roundedRectangle.x, _roundedRectangle.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _roundedRectangle.x + 25, _roundedRectangle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _roundedRectangle.x, _roundedRectangle.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 0°
                    {
                        title:   'Move 0°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 0, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 90°
                    {
                        title:   'Move 90°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 90, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 180°
                    {
                        title:   'Move 180°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 180, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 270°
                    {
                        title:   'Move 270°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 270, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // aspect
                    {
                        title:   'aspect',
                        text:    'blah... blah... blah...',
                        children: [ 'aspect' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    aspect: new Aspect ( 100, 100 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // aspect
                    {
                        title:   'aspect',
                        text:    'blah... blah... blah...',
                        children: [ 'aspect' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    aspect: new Aspect ( 25, 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.anchor = true;

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.anchor = true;

                            _roundedRectangle.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke color
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow color
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.shadow = true;

                            _roundedRectangle.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.shadow     = true;

                            _roundedRectangle.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.shadow     = true;


                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'point' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.shadow     = true;


                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'fill', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'fill', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'fill', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'fill', 'radial', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'fill', 'conic', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                text:
                [
                    // point -x
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _text.x - 25, _text.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _text.x, _text.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _text.x + 25, _text.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _text.x, _text.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 0°
                    {
                        title:   'Move 0°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 0, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 90°
                    {
                        title:   'Move 90°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 90, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 180°
                    {
                        title:   'Move 180°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 180, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 270°
                    {
                        title:   'Move 270°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 270, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _text.options.anchor = true;

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke color
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.stroke.width = 2;

                            _text.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.stroke.width = 2;

                            _text.stroke.color.alpha = 0;

                            _text.fill.color.alpha   = 0;   // [ Optional ]

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'fill', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'fill', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'fill', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'fill', 'radial', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'fill', 'conic', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                cImage:
                [
                    // point -x
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _image.x - 25, _image.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _image.x, _image.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _image.x + 25, _image.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _image.x, _image.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 0°
                    {
                        title:   'Move 0°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 0, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 90°
                    {
                        title:   'Move 90°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 90, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 180°
                    {
                        title:   'Move 180°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 180, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 270°
                    {
                        title:   'Move 270°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 270, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _image.options.anchor = true;

                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _image.options.anchor = true;

                            _image.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ]
            },
            subject:
            {
                anchor:
                [
                    // rotate anchor : line
                    {
                        title: 'rotate anchor',
                        text: 'easeInSine',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                                _line.options.anchor = true;  // [ Optional ]

                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // rotate anchor : circle
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            _circle.options.anchor = true;  // [ Optional ]

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align : circle
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            _circle.options.anchor = true;  // [ Optional ]

                            _circle.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // rotate anchor : ellipse
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            _ellipse.options.anchor = true;

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align : ellipse
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            _ellipse.options.anchor = true;

                            _ellipse.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // rotate anchor : rectangle
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            _rectangle.options.anchor = true;

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align : rectangle
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            _rectangle.options.anchor = true;

                            _rectangle.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // rotate anchor : roundedRectangle
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'roundedrectangle' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.anchor = true;

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align : roundedRectangle
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'roundedrectangle' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.anchor = true;

                            _roundedRectangle.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // rotate anchor : text
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'text' ],
                        code: ( ) =>
                        {
                            _text.options.anchor = true;

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // rotate anchor : cImage
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'cimage' ],
                        code: ( ) =>
                        {
                            _image.options.anchor = true;

                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align : cImage
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'cimage' ],
                        code: ( ) =>
                        {
                            _image.options.anchor = true;

                            _image.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                angle:
                [
                    // angle start : circle
                    {
                        title:   'angle start',
                        text:    'blah... blah... blah...',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    angleStart: 360,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // angle end : circle
                    {
                        title:   'angle end',
                        text:    'blah... blah... blah...',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    angleEnd: 360,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // angle start & end : circle
                    {
                        title:   'angle start & end',
                        text:    'blah... blah... blah...',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    angleStart: 270,
                                    angleEnd: 90
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // angle start & end : circle
                    {
                        title:   'angle start & end',
                        text:    'blah... blah... blah...',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    angleStart: 90,
                                    angleEnd: 270
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // angle start : ellipse
                    {
                        title:   'angle start',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    angleStart: 360,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // angle end : ellipse
                    {
                        title:   'angle end',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    angleEnd: 360,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // angle start & end : ellipse
                    {
                        title:   'angle start & end',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    angleStart: 270,
                                    angleEnd: 90
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // angle start & end : ellipse
                    {
                        title:   'angle start & end',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    angleStart: 90,
                                    angleEnd: 270
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                aspect:
                [
                    // aspect : rectangle
                    {
                        title:   'aspect',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    aspect: new Aspect ( 100, 100 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // aspect : rectangle
                    {
                        title:   'aspect',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    aspect: new Aspect ( 25, 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // // aspect : rectangle
                    // {
                    //     title:   'aspect',
                    //     text:    'blah... blah... blah...',
                    //     children: [ 'rectangle' ],
                    //     code: ( ) =>
                    //     {
                    //         let _transition =
                    //         {
                    //             object: _rectangle,
                    //             timing: 'easeInSine',
                    //             period: 2000,
                    //             change:
                    //             {
                    //                 aspect: new Aspect ( 100, 25 )
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },
                    // // aspect : rectangle
                    // {
                    //     title:   'aspect',
                    //     text:    'blah... blah... blah...',
                    //     children: [ 'rectangle' ],
                    //     code: ( ) =>
                    //     {
                    //         let _transition =
                    //         {
                    //             object: _rectangle,
                    //             timing: 'easeInSine',
                    //             period: 2000,
                    //             change:
                    //             {
                    //                 aspect: new Aspect ( 25, 100 )
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },
                    // aspect width : rectangle
                    {
                        title:   'aspect width',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    width: 100
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // // aspect width : rectangle
                    // {
                    //     title:   'aspect width',
                    //     text:    'blah... blah... blah...',
                    //     children: [ 'rectangle' ],
                    //     code: ( ) =>
                    //     {
                    //         let _transition =
                    //         {
                    //             object: _rectangle,
                    //             timing: 'easeInSine',
                    //             period: 2000,
                    //             change:
                    //             {
                    //                 width: 25
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },
                    // aspect height : rectangle
                    {
                        title:   'aspect height',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    height: 100
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // // aspect height : rectangle
                    // {
                    //     title:   'aspect height',
                    //     text:    'blah... blah... blah...',
                    //     children: [ 'rectangle' ],
                    //     code: ( ) =>
                    //     {
                    //         let _transition =
                    //         {
                    //             object: _rectangle,
                    //             timing: 'easeInSine',
                    //             period: 2000,
                    //             change:
                    //             {
                    //                 height: 25
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },

                    // aspect : roundedRectangle
                    {
                        title:   'aspect',
                        text:    'blah... blah... blah...',
                        children: [ 'roundedRectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    aspect: new Aspect ( 100, 100 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // aspect : roundedRectangle
                    {
                        title:   'aspect',
                        text:    'blah... blah... blah...',
                        children: [ 'roundedRectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    aspect: new Aspect ( 25, 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // // aspect : roundedRectangle
                    // {
                    //     title:   'aspect',
                    //     text:    'blah... blah... blah...',
                    //     children: [ 'roundedRectangle' ],
                    //     code: ( ) =>
                    //     {
                    //         let _transition =
                    //         {
                    //             object: _roundedRectangle,
                    //             timing: 'easeInSine',
                    //             period: 2000,
                    //             change:
                    //             {
                    //                 aspect: new Aspect ( 100, 25 )
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },
                    // // aspect : roundedRectangle
                    // {
                    //     title:   'aspect',
                    //     text:    'blah... blah... blah...',
                    //     children: [ 'roundedRectangle' ],
                    //     code: ( ) =>
                    //     {
                    //         let _transition =
                    //         {
                    //             object: _roundedRectangle,
                    //             timing: 'easeInSine',
                    //             period: 2000,
                    //             change:
                    //             {
                    //                 aspect: new Aspect ( 25, 100 )
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },
                    // aspect width : roundedRectangle
                    {
                        title:   'aspect width',
                        text:    'blah... blah... blah...',
                        children: [ 'roundedRectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    width: 100
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // // aspect width : roundedRectangle
                    // {
                    //     title:   'aspect width',
                    //     text:    'blah... blah... blah...',
                    //     children: [ 'roundedRectangle' ],
                    //     code: ( ) =>
                    //     {
                    //         let _transition =
                    //         {
                    //             object: _roundedRectangle,
                    //             timing: 'easeInSine',
                    //             period: 2000,
                    //             change:
                    //             {
                    //                 width: 25
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },
                    // aspect height : roundedRectangle
                    {
                        title:   'aspect height',
                        text:    'blah... blah... blah...',
                        children: [ 'roundedRectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    height: 100
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // // aspect height : roundedRectangle
                    // {
                    //     title:   'aspect height',
                    //     text:    'blah... blah... blah...',
                    //     children: [ 'roundedRectangle' ],
                    //     code: ( ) =>
                    //     {
                    //         let _transition =
                    //         {
                    //             object: _roundedRectangle,
                    //             timing: 'easeInSine',
                    //             period: 2000,
                    //             change:
                    //             {
                    //                 height: 25
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },
                ],
                controlpoints:
                [
                    // control points p0
                    {
                        title:   'control points p0',
                        text:    'blah... blah... blah...',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;  // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 1000,
                                change:
                                {
                                    p0: 50
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // control points p1
                    {
                        title:   'control points p1',
                        text:    'blah... blah... blah...',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;  // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 1000,
                                change:
                                {
                                    p1: 50
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // control points p2
                    {
                        title:   'control points p2',
                        text:    'blah... blah... blah...',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;  // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 1000,
                                change:
                                {
                                    p2: 50
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // control points p3
                    {
                        title:   'control points p3',
                        text:    'blah... blah... blah...',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;  // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 1000,
                                change:
                                {
                                    p3: 50
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // control points p[0]
                    {
                        title:   'control points p[0]',
                        text:    'blah... blah... blah...',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;  // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 1000,
                                change:
                                {
                                    controlPoints: [ 50, 0, 0, 0 ]
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // control points p[1]
                    {
                        title:   'control points p[1]',
                        text:    'blah... blah... blah...',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;  // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 1000,
                                change:
                                {
                                    controlPoints: [ 0, 50, 0, 0 ]
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // control points p[2]
                    {
                        title:   'control points p[2]',
                        text:    'blah... blah... blah...',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;  // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 1000,
                                change:
                                {
                                    controlPoints: [ 0, 0, 50, 0 ]
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // control points p[3]
                    {
                        title:   'control points p[3]',
                        text:    'blah... blah... blah...',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;  // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 1000,
                                change:
                                {
                                    controlPoints: [ 0, 0, 0, 50 ]
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // curve
                    {
                        title:   'curve',
                        text:    'blah... blah... blah...',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;  // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 1000,
                                change:
                                {
                                    curve: [ 50, 50, 50, 50 ]
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                fill:
                [
                    // fill color : circle
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'circle', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : circle
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'circle', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : circle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'circle', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : circle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'circle', 'radial', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : circle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'circle', 'conic', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // fill color : ellipse
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : ellipse
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : ellipse
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : ellipse
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'radial', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : ellipse
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'conic', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // fill color : rectangle
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : rectangle
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : rectangle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : rectangle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'radial', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : rectangle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'conic', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // fill color : roundedRectangle
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : roundedRectangle
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : roundedRectangle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : roundedRectangle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'radial', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : roundedRectangle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'conic', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // fill color : text
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'text', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : text
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'text', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : text
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'text', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : text
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'text', 'radial', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : text
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'text', 'conic', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                font:
                [
                    // font size
                    {
                        title: 'font size',
                        text: 'easeInSine',
                        children: [ 'text' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fontSize: 36,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                point:
                [
                    // point -x : line
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _line.x - 25, _line.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y : line
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _line.x, _line.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x : line
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _line.x + 25, _line.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y : line
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _line.x, _line.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // point -x : circle
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _circle.x - 25, _circle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y : circle
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _circle.x, _circle.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x : circle
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _circle.x + 25, _circle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y : circle
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _circle.x, _circle.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // point -x : ellipse
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _ellipse.x - 25, _ellipse.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y : ellipse
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _ellipse.x, _ellipse.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x : ellipse
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _ellipse.x + 25, _ellipse.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y : ellipse
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _ellipse.x, _ellipse.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // point -x : rectangle
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _rectangle.x - 25, _rectangle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y : rectangle
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _rectangle.x, _rectangle.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x : rectangle
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _rectangle.x + 25, _rectangle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y : rectangle
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _rectangle.x, _rectangle.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // point -x : roundedRectangle
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'roundedrectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _roundedRectangle.x - 25, _roundedRectangle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y : roundedRectangle
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'roundedrectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _roundedRectangle.x, _roundedRectangle.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x : roundedRectangle
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'roundedrectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _roundedRectangle.x + 25, _roundedRectangle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y : roundedRectangle
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'roundedrectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _roundedRectangle.x, _roundedRectangle.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // point -x : text
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'text' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _text.x - 25, _text.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y : text
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'text' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _text.x, _text.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x : text
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'text' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _text.x + 25, _text.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y : text
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'text' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _text.x, _text.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // point -x : cImage
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'cimage' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _image.x - 25, _image.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y : cImage
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'cimage' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _image.x, _image.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x : cImage
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'cimage' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _image.x + 25, _image.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y : cImage
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'cimage' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _image.x, _image.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                linear:
                [
                    // gradient linear : circle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient linear : ellipse
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient linear : rectangle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient linear : roundedRectangle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient linear : text
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'text', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                radial:
                [
                    // gradient radial : circle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient radial : ellipse
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient radial : rectangle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient radial : roundedRectangle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient radial : text
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'text', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                conic:
                [
                    // gradient conic : circle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient conic : ellipse
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient conic : rectangle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient conic : roundedRectangle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient conic : text
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'text', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                rgb:
                [
                    // stroke color : line
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'line', 'stroke' ],
                        code: ( ) =>
                        {
                            _line.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : line
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'line', 'stroke' ],
                        code: ( ) =>
                        {
                            _line.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : circle
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'circle', 'stroke' ],
                        code: ( ) =>
                        {
                            _circle.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : circle
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'circle', 'stroke' ],
                        code: ( ) =>
                        {
                            _circle.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color : circle
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill' ],
                        code: ( ) =>
                        {
                            _circle.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : circle
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill' ],
                        code: ( ) =>
                        {
                            _circle.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : circle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill', 'linear', 'stop' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : circle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill', 'radial', 'stop' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : circle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill', 'conic', 'stop' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : ellipse
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'stroke' ],
                        code: ( ) =>
                        {
                            _ellipse.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : ellipse
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'stroke' ],
                        code: ( ) =>
                        {
                            _ellipse.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color : ellipse
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : ellipse
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : ellipse
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill', 'linear', 'stop' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : ellipse
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill', 'radial', 'stop' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : ellipse
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill', 'conic', 'stop' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : rectangle
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'stroke' ],
                        code: ( ) =>
                        {
                            _rectangle.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : rectangle
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'stroke' ],
                        code: ( ) =>
                        {
                            _rectangle.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color : rectangle
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : rectangle
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : rectangle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill', 'linear', 'stop' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : rectangle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill', 'radial', 'stop' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : rectangle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill', 'conic', 'stop' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : roundedRectangle
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'roundedRectangle', 'stroke' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : roundedRectangle
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'roundedRectangle', 'stroke' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color : roundedRectangle
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'roundedRectangle', 'fill' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : roundedRectangle
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'roundedRectangle', 'fill' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : roundedRectangle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'roundedRectangle', 'fill', 'linear', 'stop' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : roundedRectangle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'roundedRectangle', 'fill', 'radial', 'stop' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : roundedRectangle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'roundedRectangle', 'fill', 'conic', 'stop' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : text
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'text', 'stroke' ],
                        code: ( ) =>
                        {
                            _text.stroke.width = 2;

                            _text.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : text
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'text', 'stroke' ],
                        code: ( ) =>
                        {
                            _text.stroke.width = 2;

                            _text.stroke.color.alpha = 0;

                            _text.fill.color.alpha   = 0;   // [ Optional ]

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color : text
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'text', 'fill' ],
                        code: ( ) =>
                        {
                            _text.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : text
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'text', 'fill' ],
                        code: ( ) =>
                        {
                            _text.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : text
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'text', 'fill', 'linear', 'stop' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : text
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'text', 'fill', 'radial', 'stop' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : text
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'text', 'fill', 'conic', 'stop' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                shadow:
                [
                    // shadow color : line
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'line', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.options.shadow = true;

                            _line.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha : line
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'line', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.options.shadow     = true;

                            _line.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur : line
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'line', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.options.shadow     = true;


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset : line
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'line', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.options.shadow     = true;


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // shadow color : circle
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.options.shadow = true;

                            _circle.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha : circle
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.options.shadow     = true;

                            _circle.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur : circle
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.options.shadow     = true;


                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset : circle
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.options.shadow     = true;


                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // shadow color : ellipse
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.options.shadow = true;

                            _ellipse.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha : ellipse
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.options.shadow     = true;

                            _ellipse.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur : ellipse
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.options.shadow     = true;


                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset : ellipse
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.options.shadow     = true;


                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // shadow color : rectangle
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.options.shadow = true;

                            _rectangle.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha : rectangle
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.options.shadow     = true;

                            _rectangle.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur : rectangle
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.options.shadow     = true;


                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset : rectangle
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.options.shadow     = true;


                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // shadow color : roundedRectangle
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'roundedRectangle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.shadow = true;

                            _roundedRectangle.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha : roundedRectangle
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'roundedRectangle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.shadow     = true;

                            _roundedRectangle.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur : roundedRectangle
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'roundedRectangle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.shadow     = true;


                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset : roundedRectangle
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'roundedRectangle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.shadow     = true;


                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                stop:
                [
                    // gradient linear : circle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill', 'linear' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : circle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill', 'radial' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : circle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill', 'conic' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient linear : ellipse
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill', 'linear' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : ellipse
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill', 'radial' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : ellipse
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill', 'conic' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient linear : rectangle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill', 'linear' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : rectangle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill', 'radial' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : rectangle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill', 'conic' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient linear : roundedRectangle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'fill', 'linear' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : roundedRectangle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'fill', 'radial' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : roundedRectangle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'fill', 'conic' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient linear : text
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'text', 'fill', 'linear' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : text
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'text', 'fill', 'linear' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : text
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'text', 'fill', 'linear' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                stroke:
                [
                    // stroke color : line
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'line', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : line
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'line', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : circle
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'circle', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : circle
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'circle', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : ellipse
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : ellipse
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : rectangle
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : rectangle
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : roundedRectangle
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : roundedRectangle
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : text
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'text', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.stroke.width = 2;

                            _text.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : text
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'text', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.stroke.width = 2;

                            _text.stroke.color.alpha = 0;

                            _text.fill.color.alpha   = 0;   // [ Optional ]

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
            },
            template:
            {
                sacredcircles:
                [
                    // get transitions
                    {
                        title:   'Get Transitions',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'template' ],
                        code: ( ) =>
                        {
                            ////    OBJECT    //////////////////////////////

                            let _center       = canvaslab.center;

                            let _object       = new Circle ( _center );

                                _object.alpha = 0;

                            ////    PROPERTIES    //////////////////////////

                            let _iterations   = 25;

                            let _timing       = 'easeOutSine';

                            let _period       = 300;

                            let _radius       = 25;

                            ////    ANIMATION    ///////////////////////////

                            let _transitions  = new SacredCircles ( ).getTransitions ( _object, _timing, _period, _radius, _iterations );


                            canvaslab.animate ( _transitions );
                        }
                    },
                ]
            }
        }
    }

    /**
     * Object of lab scripts
     * @type {Object.<Object<Function>>}
     * @example { <title>: <Function> }
     */
    let _scripts =
    {
        seedOfLife: ( ) =>
        {
            ////    INPUTS    //////////////////////////////

            let _center     = canvaslab.center;

            let _radius     = 25;

            let _iterations = 2;

            let _degrees    = [ 90, 330, 270, 210, 150, 90, 30 ];

            ////    POPULATION    //////////////////////////

            let _group      = new Group;

                _group.template = new SacredCircles ( _center, _radius, _iterations, _degrees, undefined );

                _group.circles.draw ( );
        },
        // seedOfLife2: ( ) =>
        // {
        //     ////    INPUTS    //////////////////////////////

        //     let _center     = canvaslab.center;

        //     let _radius     = 25;

        //     let _iterations = 10;

        //     let _degrees    = [ 90, 330, 270, 210, 150, 90, 30 ];

        //     ////    POPULATION    //////////////////////////

        //     let _group      = new Group;

        //         _group.template = new SacredCircles ( _center, _radius, _iterations, _degrees, undefined );



        //     let _items = [ 37, 39, 59, 9, 0, 17, 11, 15, 13, 49 ]

        //     for ( let _item of _items )
        //     {
        //         _group.circles [ _item ].fill.color = new Rgb ( 0, 0, 0, 1 );

        //         console.log ( 'x:', _group.circles [ _item ].point.x, 'y:', _group.circles [ _item ].point.y );
        //     }

        //     _group.circles.draw ( );
        // },
        seedOfLifeAnimation: ( ) =>
        {
            ////    OBJECT    //////////////////////////////

            let _center       = canvaslab.center;

            let _object       = new Circle ( _center );

                _object.alpha = 0;

            ////    PROPERTIES    //////////////////////////

            let _iterations   = 25;

            let _timing       = 'easeOutSine';

            let _period       = 300;

            let _radius       = 25;

            ////    ANIMATION    ///////////////////////////

            let _transitions  = new SacredCircles ( ).getTransitions ( _object, _timing, _period, _radius, _iterations );


            canvaslab.animate ( _transitions );
        },
        multipleAnimations: ( ) =>
        {
            let _center = canvaslab.center;

            let _objectA = new Circle ( new Point ( _center.x - 50, _center.y ) );

            let _objectB = new Rectangle ( new Point ( _center.x + 50, _center.y ) );

            let _objectC = new Circle ( new Point ( _center.x, _center.y  - 50 ) );

            let _objectD = new Rectangle ( new Point ( _center.x, _center.y + 50 ) );

            let _transition =
            {
                object: [ _objectA, _objectB, _objectC, _objectD ],
                timing: [ 'easeOutElastic', 'easeOutExpo', 'easeOutElastic', 'easeOutExpo' ],
                period: 1750,
                change:
                [
                    {
                        move: { degree: 270, distance: 100 }
                    },
                    {
                        move: { degree: 90, distance: 100 }
                    },
                    {
                        move: { degree: 0, distance: 100 }
                    },
                    {
                        move: { degree: 180, distance: 100 }
                    }
                ]
            }

            canvaslab.animate ( _transition );
        },
        multipleAnimationsQueue: ( ) =>
        {
            let _center = canvaslab.center;

            ////    OBJECTS    //////////////////////////////////////////////////////////////

            let _objectA = new Circle ( new Point ( _center.x - 50, _center.y ) );

            let _objectB = new Rectangle ( new Point ( _center.x + 50, _center.y ) );

            let _objectC = new Circle ( new Point ( _center.x, _center.y  - 50 ) );

            let _objectD = new Rectangle ( new Point ( _center.x, _center.y + 50 ) );

            ////    ANIMATION    ///////////////////////////////////////////////////////////

            let _transitions =
            [
                {
                    object: [ _objectA, _objectB, _objectC, _objectD ],
                    timing: [ 'easeOutElastic', 'easeOutExpo', 'easeOutElastic', 'easeOutExpo' ],
                    period: 1750,
                    change:
                    [
                        {
                            move: { degree: 270, distance: 100 }
                        },
                        {
                            move: { degree:  90, distance: 100 }
                        },
                        {
                            move: { degree:   0, distance: 100 }
                        },
                        {
                            move: { degree: 180, distance: 100 }
                        }
                    ]
                },
                {
                    object: [ _objectA, _objectB, _objectC, _objectD ],
                    timing: [ 'easeOutExpo', 'easeOutElastic', 'easeOutExpo', 'easeOutElastic' ],
                    period: 1750,
                    change:
                    [
                        {
                            move: { degree:  90, distance: 100 }
                        },
                        {
                            move: { degree: 270, distance: 100 }
                        },
                        {
                            move: { degree: 180, distance: 100 }
                        },
                        {
                            move: { degree:   0, distance: 100 }
                        }
                    ]
                }
            ]


            canvaslab.animate ( _transitions );
        },
        multipleAnimationsQueue2: ( ) =>
        {
            let _center = canvaslab.center;

            ////    OBJECTS    //////////////////////////////////////////////////////////////

            let _objectA = new Circle ( new Point ( _center.x - 50, _center.y ) );

            let _objectB = new Rectangle ( new Point ( _center.x + 50, _center.y ) );

            let _objectC = new Circle ( new Point ( _center.x, _center.y  - 50 ) );

            let _objectD = new Rectangle ( new Point ( _center.x, _center.y + 50 ) );

            ////    ANIMATION    ///////////////////////////////////////////////////////////

            let _transitions =
            [
                {
                    object: [ _objectA, _objectB, _objectC, _objectD ],
                    timing: [ 'easeOutElastic', 'easeOutExpo', 'easeOutElastic', 'easeOutExpo' ],
                    period: 350,
                    change:
                    [
                        {
                            move: { degree: 270, distance: 100 },
                            cache: true
                        },
                        {
                            move: { degree:  90, distance: 100 },
                            cache: true
                        },
                        {
                            move: { degree:   0, distance: 100 },
                            cache: true
                        },
                        {
                            move: { degree: 180, distance: 100 },
                            cache: true
                        }
                    ]
                },
                {
                    object: [ _objectA, _objectB, _objectC, _objectD ],
                    timing: [ 'easeOutSine', 'easeOutSine', 'easeOutSine', 'easeOutSine' ],
                    period: 700,
                    change:
                    [
                        {
                            move: { degree:   0, distance: 100 },
                            cache: true
                        },
                        {
                            move: { degree: 180, distance: 100 },
                            cache: true
                        },
                        {
                            move: { degree:   0, distance: 100 },
                            cache: true
                        },
                        {
                            move: { degree: 180, distance: 100 },
                            cache: true
                        }
                    ]
                },
                {
                    object: [ _objectA, _objectB, _objectC, _objectD ],
                    timing: [ 'easeOutElastic', 'easeOutExpo', 'easeOutElastic', 'easeOutExpo' ],
                    period: 950,
                    change:
                    [
                        {
                            move: { degree:  90, distance: 100 },
                            cache: true
                        },
                        {
                            move: { degree: 270, distance: 100 },
                            cache: true
                        },
                        {
                            move: { degree:  90, distance: 100 },
                            cache: true
                        },
                        {
                            move: { degree: 270, distance: 100 },
                            cache: true
                        }
                    ]
                },
                {
                    object: [ _objectA, _objectB, _objectC, _objectD ],
                    timing: [ 'easeOutSine', 'easeOutSine', 'easeOutSine', 'easeOutSine' ],
                    period: 1400,
                    change:
                    [
                        {
                            move: { degree: 180, distance: 100 },
                            cache: true
                        },
                        {
                            move: { degree:   0, distance: 100 },
                            cache: true
                        },
                        {
                            move: { degree: 180, distance: 100 },
                            cache: true
                        },
                        {
                            move: { degree:   0, distance: 100 },
                            cache: true
                        }
                    ]
                },
                {
                    object: [ _objectA, _objectB, _objectC, _objectD ],
                    timing: [ 'easeOutExpo', 'easeOutElastic', 'easeOutExpo', 'easeOutElastic' ],
                    period: 1750,
                    change:
                    [
                        {
                            move: { degree: 270, distance: 100 },
                            cache: true
                        },
                        {
                            move: { degree:  90, distance: 100 },
                            cache: true
                        },
                        {
                            move: { degree: 270, distance: 100 },
                            cache: true
                        },
                        {
                            move: { degree:  90, distance: 100 },
                            cache: true
                        }
                    ]
                }
            ]


            canvaslab.animate ( _transitions );
        },
        multipleAnimationsShape: ( ) =>
        {
            ////    OBJECTS    //////////////////////////////////////////////////////////////

            let _center  = canvaslab.center;

            let _amount  = 10;

            let _objects = new Circles;

            for ( let _i = 0; _i < _amount; _i++ )

                _objects.push ( new Circle ( _center ) );

            ////    ANIMATION    ///////////////////////////////////////////////////////////

            let _transitions =
            [
                {
                    object: _objects,
                    timing: 'easeOutElastic',
                    period: 1750,
                    change:
                    [
                        { move: { degree:  90, distance: 100 }, cache: true },  //  1
                        { move: { degree:  60, distance:  87 }, cache: true },  //  2
                        { move: { degree: 120, distance:  87 }, cache: true },  //  3
                        { move: { degree:  30, distance:  50 }, cache: true },  //  4
                        { move: { degree: 150, distance:  50 }, cache: true },  //  5
                        { move: { degree: 180, distance:   0 }, cache: true },  //  6 - 0
                        { move: { degree: 330, distance:  50 }, cache: true },  //  7
                        { move: { degree: 210, distance:  50 }, cache: true },  //  8
                        { move: { degree: 270, distance:  50 }, cache: true },  //  9
                        { move: { degree: 270, distance: 100 }, cache: true },  // 10
                    ]
                }
            ]


            canvaslab.animate ( _transitions );
        },
        multipleAnimationsShape2: ( ) =>
        {
            ////    FUNCTIONS    ////////////////////////////////////////////////////////////

            let _getInvertedAngle = ( angle ) => ( angle + 180 ) % 360;

            ////    OBJECTS    //////////////////////////////////////////////////////////////

            let _center  = canvaslab.center;

            let _amount  = 10;

            let _multiA  = 0.5;

            let _multiB  = 0.1;

            let _radius  = 10;

            let _objects = new Circles;

            for ( let _i = 0; _i < _amount; _i++ )

                _objects.push ( new Circle ( _center, _radius ) );

            ////    ANIMATION    ///////////////////////////////////////////////////////////

            let _transitions =
            [
                {
                    object: _objects,
                    timing: 'easeOutSine',
                    period: 300,
                    change:
                    [
                        { move: { degree:  90, distance: 100 }, cache: true },  //  1
                        { move: { degree:  60, distance:  87 }, cache: true },  //  2
                        { move: { degree: 120, distance:  87 }, cache: true },  //  3
                        { move: { degree:  30, distance:  50 }, cache: true },  //  4
                        { move: { degree: 150, distance:  50 }, cache: true },  //  5
                        { move: { degree: 180, distance:   0 }, cache: true },  //  6 - 0
                        { move: { degree: 330, distance:  50 }, cache: true },  //  7
                        { move: { degree: 210, distance:  50 }, cache: true },  //  8
                        { move: { degree: 270, distance:  50 }, cache: true },  //  9
                        { move: { degree: 270, distance: 100 }, cache: true },  // 10
                    ]
                },  // Out - Normal
                {
                    object: _objects,
                    timing: 'easeOutSine',
                    period: 1750,
                    change:
                    [
                        { move: { degree:  90, distance: 100 }, cache: true },  //  1
                        { move: { degree:  60, distance:  87 }, cache: true },  //  2
                        { move: { degree: 120, distance:  87 }, cache: true },  //  3
                        { move: { degree:  30, distance:  50 }, cache: true },  //  4
                        { move: { degree: 150, distance:  50 }, cache: true },  //  5
                        { move: { degree: 180, distance:   0 }, cache: true },  //  6 - 0
                        { move: { degree: 330, distance:  50 }, cache: true },  //  7
                        { move: { degree: 210, distance:  50 }, cache: true },  //  8
                        { move: { degree: 270, distance:  50 }, cache: true },  //  9
                        { move: { degree: 270, distance: 100 }, cache: true },  // 10
                    ]
                },  // Out - Fast
                {
                    object: _objects,
                    timing: 'easeOutSine',
                    period: 300,
                    change:
                    [
                        { move: { degree:  90, invert: true, distance: 100 * _multiA }, cache: true },  //  1
                        { move: { degree:  60, invert: true, distance:  87 * _multiA }, cache: true },  //  2
                        { move: { degree: 120, invert: true, distance:  87 * _multiA }, cache: true },  //  3
                        { move: { degree:  30, invert: true, distance:  50 * _multiA }, cache: true },  //  4
                        { move: { degree: 150, invert: true, distance:  50 * _multiA }, cache: true },  //  5
                        { move: { degree: 180, invert: true, distance:   0 * _multiA }, cache: true },  //  6 - 0
                        { move: { degree: 330, invert: true, distance:  50 * _multiA }, cache: true },  //  7
                        { move: { degree: 210, invert: true, distance:  50 * _multiA }, cache: true },  //  8
                        { move: { degree: 270, invert: true, distance:  50 * _multiA }, cache: true },  //  9
                        { move: { degree: 270, invert: true, distance: 100 * _multiA }, cache: true },  // 10
                    ]
                },  // Out - Normal
                {
                    object: _objects,
                    timing: 'easeInSine',
                    period: 1000,
                    change:
                    [
                        { move: { degree:  90, distance: 100 }, cache: true },  //  1
                        { move: { degree:  60, distance:  87 }, cache: true },  //  2
                        { move: { degree: 120, distance:  87 }, cache: true },  //  3
                        { move: { degree:  30, distance:  50 }, cache: true },  //  4
                        { move: { degree: 150, distance:  50 }, cache: true },  //  5
                        { move: { degree: 180, distance:   0 }, cache: true },  //  6 - 0
                        { move: { degree: 330, distance:  50 }, cache: true },  //  7
                        { move: { degree: 210, distance:  50 }, cache: true },  //  8
                        { move: { degree: 270, distance:  50 }, cache: true },  //  9
                        { move: { degree: 270, distance: 100 }, cache: true },  // 10
                    ]
                },  // Out - Normal
                {
                    object: _objects,
                    timing: 'easeInOutQuart',
                    period: 60,
                    change:
                    [
                        { move: { degree:  90, distance: 100 }, cache: true },  //  1
                        { move: { degree:  60, distance:  87 }, cache: true },  //  2
                        { move: { degree: 120, distance:  87 }, cache: true },  //  3
                        { move: { degree:  30, distance:  50 }, cache: true },  //  4
                        { move: { degree: 150, distance:  50 }, cache: true },  //  5
                        { move: { degree: 180, distance:   0 }, cache: true },  //  6 - 0
                        { move: { degree: 330, distance:  50 }, cache: true },  //  7
                        { move: { degree: 210, distance:  50 }, cache: true },  //  8
                        { move: { degree: 270, distance:  50 }, cache: true },  //  9
                        { move: { degree: 270, distance: 100 }, cache: true },  // 10
                    ]
                },  // Out Trail - Fast
            ]

            ////    TRAIL    ///////////////////////////////////////////////////////////////

            let _location = 5;

            let _repeat   = 10;

            for ( let _i = _location; _i < _location + _repeat; _i++ )

                _transitions [ _i ] = _transitions [ _location - 1 ];


            canvaslab.animate ( _transitions );
        },
        multipleAnimationsShape3: ( ) =>
        {
            ////    OBJECTS    //////////////////////////////////////////////////////////////

            let _center  = canvaslab.center;

            let _amount  = 10;

            let _multiA  = 0.5;

            let _multiB  = 0.1;

            let _radius  = 10;

            let _objects = new Circles;

            for ( let _i = 0; _i < _amount; _i++ )

                _objects.push ( new Circle ( _center, _radius, undefined, undefined, new Fill ( new Rgb ( 255, 255, 255, 1 ) ) ) );

            ////    ANIMATION    ///////////////////////////////////////////////////////////

            let _transitions =
            [
                {
                    object: _objects,
                    timing: 'easeOutSine',
                    period: 1750,
                    change:
                    [
                        { move: { degree:  90, distance: 100 }, lineTo: [ _objects [ 1 ], _objects [ 2 ], _objects [ 5 ] ] },  //  1
                        { move: { degree:  60, distance:  87 }, lineTo: [ _objects [ 3 ], _objects [ 2 ], _objects [ 5 ] ] },  //  2
                        { move: { degree: 120, distance:  87 }, lineTo: [ _objects [ 4 ], _objects [ 5 ] ] },  //  3
                        { move: { degree:  30, distance:  50 }, lineTo: _objects [ 4 ], },  //  4
                        { move: { degree: 150, distance:  50 }, lineTo: _objects [ 7 ] },  //  5
                        { move: { degree: 180, distance:   0 }, lineTo: [ _objects [ 6 ], _objects [ 4 ], _objects [ 7 ], _objects [ 3 ] ] },  //  6 - 0
                        { move: { degree: 330, distance:  50 }, lineTo: [ _objects [ 3 ], _objects [ 8 ], _objects [ 9 ] ] },  //  7
                        { move: { degree: 210, distance:  50 }, lineTo: [ _objects [ 6 ], _objects [ 8 ], _objects [ 9 ] ] },  //  8
                        { move: { degree: 270, distance:  50 }, lineTo: _objects [ 5 ] },  //  9
                        { move: { degree: 270, distance: 100 }, lineTo: _objects [ 5 ] },  // 10
                    ]
                },  // Out
                {
                    object: _objects,
                    timing: 'easeOutElastic',
                    period: 1750,
                    change:
                    [
                        { move: { degree:  90, distance: 100 }, radius: 25, lineTo: [ _objects [ 1 ], _objects [ 2 ], _objects [ 5 ] ] },  //  1
                        { move: { degree:  60, distance:  87 }, radius: 25, lineTo: [ _objects [ 3 ], _objects [ 2 ], _objects [ 5 ] ] },  //  2
                        { move: { degree: 120, distance:  87 }, radius: 25, lineTo: [ _objects [ 4 ], _objects [ 5 ] ] },  //  3
                        { move: { degree:  30, distance:  50 }, radius: 25, lineTo: _objects [ 4 ], },  //  4
                        { move: { degree: 150, distance:  50 }, radius: 25, lineTo: _objects [ 7 ] },  //  5
                        { move: { degree: 180, distance:   0 }, radius: 25, lineTo: [ _objects [ 6 ], _objects [ 4 ], _objects [ 7 ], _objects [ 3 ] ] },  //  6 - 0
                        { move: { degree: 330, distance:  50 }, radius: 25, lineTo: [ _objects [ 3 ], _objects [ 8 ], _objects [ 9 ] ] },  //  7
                        { move: { degree: 210, distance:  50 }, radius: 25, lineTo: [ _objects [ 6 ], _objects [ 8 ], _objects [ 9 ] ] },  //  8
                        { move: { degree: 270, distance:  50 }, radius: 25, lineTo: _objects [ 5 ] },  //  9
                        { move: { degree: 270, distance: 100 }, radius: 25, lineTo: _objects [ 5 ] },  // 10
                    ]
                },  // Out
                {
                    object: _objects,
                    timing: 'easeOutExpo',
                    period: 1750,
                    change:
                    [
                        { move: { degree:  90, distance: 100 }, radius: 75, lineTo: [ _objects [ 1 ], _objects [ 2 ], _objects [ 5 ] ] },  //  1
                        { move: { degree:  60, distance:  87 }, radius: 75, lineTo: [ _objects [ 3 ], _objects [ 2 ], _objects [ 5 ] ] },  //  2
                        { move: { degree: 120, distance:  87 }, radius: 75, lineTo: [ _objects [ 4 ], _objects [ 5 ] ] },  //  3
                        { move: { degree:  30, distance:  50 }, radius: 75, lineTo: _objects [ 4 ], },  //  4
                        { move: { degree: 150, distance:  50 }, radius: 75, lineTo: _objects [ 7 ] },  //  5
                        { move: { degree: 180, distance:   0 }, radius: 75, lineTo: [ _objects [ 6 ], _objects [ 4 ], _objects [ 7 ], _objects [ 3 ] ] },  //  6 - 0
                        { move: { degree: 330, distance:  50 }, radius: 75, lineTo: [ _objects [ 3 ], _objects [ 8 ], _objects [ 9 ] ] },  //  7
                        { move: { degree: 210, distance:  50 }, radius: 75, lineTo: [ _objects [ 6 ], _objects [ 8 ], _objects [ 9 ] ] },  //  8
                        { move: { degree: 270, distance:  50 }, radius: 75, lineTo: _objects [ 5 ] },  //  9
                        { move: { degree: 270, distance: 100 }, radius: 75, lineTo: _objects [ 5 ] },  // 10
                    ]
                },  // Out
                {
                    object: _objects,
                    timing: 'easeInSine',
                    period: 1750,
                    change:
                    [
                        { move: { degree:  90, invert: true, distance: 100 }, radius: 25, lineTo: [ _objects [ 1 ], _objects [ 2 ], _objects [ 5 ] ] },  //  1
                        { move: { degree:  60, invert: true, distance:  87 }, radius: 25, lineTo: [ _objects [ 3 ], _objects [ 2 ], _objects [ 5 ] ] },  //  2
                        { move: { degree: 120, invert: true, distance:  87 }, radius: 25, lineTo: [ _objects [ 4 ], _objects [ 5 ] ] },  //  3
                        { move: { degree:  30, invert: true, distance:  50 }, radius: 25, lineTo: _objects [ 4 ], },  //  4
                        { move: { degree: 150, invert: true, distance:  50 }, radius: 25, lineTo: _objects [ 7 ] },  //  5
                        { move: { degree: 180, invert: true, distance:   0 }, radius: 25, lineTo: [ _objects [ 6 ], _objects [ 4 ], _objects [ 7 ], _objects [ 3 ] ] },  //  6 - 0
                        { move: { degree: 330, invert: true, distance:  50 }, radius: 25, lineTo: [ _objects [ 3 ], _objects [ 8 ], _objects [ 9 ] ] },  //  7
                        { move: { degree: 210, invert: true, distance:  50 }, radius: 25, lineTo: [ _objects [ 6 ], _objects [ 8 ], _objects [ 9 ] ] },  //  8
                        { move: { degree: 270, invert: true, distance:  50 }, radius: 25, lineTo: _objects [ 5 ] },  //  9
                        { move: { degree: 270, invert: true, distance: 100 }, radius: 25, lineTo: _objects [ 5 ] },  // 10
                    ]
                },  // In
                {
                    object: _objects,
                    timing: 'easeOutElastic',
                    period: 1750,
                    change:
                    [
                        { move: { degree:  90, invert: true, distance: 100 }, lineTo: [ _objects [ 1 ], _objects [ 2 ], _objects [ 5 ] ] },  //  1
                        { move: { degree:  60, invert: true, distance:  87 }, lineTo: [ _objects [ 3 ], _objects [ 2 ], _objects [ 5 ] ] },  //  2
                        { move: { degree: 120, invert: true, distance:  87 }, lineTo: [ _objects [ 4 ], _objects [ 5 ] ] },  //  3
                        { move: { degree:  30, invert: true, distance:  50 }, lineTo: _objects [ 4 ], },  //  4
                        { move: { degree: 150, invert: true, distance:  50 }, lineTo: _objects [ 7 ] },  //  5
                        { move: { degree: 180, invert: true, distance:   0 }, lineTo: [ _objects [ 6 ], _objects [ 4 ], _objects [ 7 ], _objects [ 3 ] ] },  //  6 - 0
                        { move: { degree: 330, invert: true, distance:  50 }, lineTo: [ _objects [ 3 ], _objects [ 8 ], _objects [ 9 ] ] },  //  7
                        { move: { degree: 210, invert: true, distance:  50 }, lineTo: [ _objects [ 6 ], _objects [ 8 ], _objects [ 9 ] ] },  //  8
                        { move: { degree: 270, invert: true, distance:  50 }, lineTo: _objects [ 5 ] },  //  9
                        { move: { degree: 270, invert: true, distance: 100 }, lineTo: _objects [ 5 ] },  // 10
                    ]
                },  // In
                {
                    object: _objects,
                    timing: 'easeInExpo',
                    period: 1750,
                    change:
                    [
                        { move: { degree:  90, invert: true, distance: 100 }, radius: 10, lineTo: [ _objects [ 1 ], _objects [ 2 ], _objects [ 5 ] ] },  //  1
                        { move: { degree:  60, invert: true, distance:  87 }, radius: 10, lineTo: [ _objects [ 3 ], _objects [ 2 ], _objects [ 5 ] ] },  //  2
                        { move: { degree: 120, invert: true, distance:  87 }, radius: 10, lineTo: [ _objects [ 4 ], _objects [ 5 ] ] },  //  3
                        { move: { degree:  30, invert: true, distance:  50 }, radius: 10, lineTo: _objects [ 4 ], },  //  4
                        { move: { degree: 150, invert: true, distance:  50 }, radius: 10, lineTo: _objects [ 7 ] },  //  5
                        { move: { degree: 180, invert: true, distance:   0 }, radius: 10, lineTo: [ _objects [ 6 ], _objects [ 4 ], _objects [ 7 ], _objects [ 3 ] ] },  //  6 - 0
                        { move: { degree: 330, invert: true, distance:  50 }, radius: 10, lineTo: [ _objects [ 3 ], _objects [ 8 ], _objects [ 9 ] ] },  //  7
                        { move: { degree: 210, invert: true, distance:  50 }, radius: 10, lineTo: [ _objects [ 6 ], _objects [ 8 ], _objects [ 9 ] ] },  //  8
                        { move: { degree: 270, invert: true, distance:  50 }, radius: 10, lineTo: _objects [ 5 ] },  //  9
                        { move: { degree: 270, invert: true, distance: 100 }, radius: 10, lineTo: _objects [ 5 ] },  // 10
                    ]
                },  // In
            ]

            ////    REPEAT    //////////////////////////////////////////////////////////////

            let _repeat = 4;

            let _items  = [ 0, 1, 2, 3, 4, 5 ]

            let _start  = 6;

            for ( let _i = 0; _i < _repeat; _i++ )

                for ( let _item of _items )

                    [ _transitions [ _start ], _start ] = [ _transitions [ _item ], _start + 1 ];


            canvaslab.animate ( _transitions );
        },
    }

    ////    SETTERS    /////////////////////////////////////////////////////////////////////////////

        /**
         * Initializes classes for application use
         * @private
         * @function
         */
        function _setClasses ( )
        {
            for ( let _class of _classes )

                ( typeof ( window [ _class.toUpperCase ( ) ] ) === 'undefined' )

                    ? eval ( `window.${_class.toUpperCase ( )} = new ${_class};` )

                    : console.error ( `[ ERROR ]: window.${_class.toUpperCase ( )} already exists !` );
        }

        /**
         * Sets windows global variable space with this wrapper's declared classes
         * @private
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

        /***
         * Sets lab mode as the startup mode
         * @private
         * @function
         */
        function _setLabMode ( )
        {
            UI.clearScreen ( false, true );


            LAB.setCanvasSize ( );

            LAB.setLabDefaults ( [ 'clear', 'grid', 'sidebar' ] );


            window.addEventListener ( 'resize', LAB.setCanvasSize );
        }

    ////    LIBRARY WRAPPER    /////////////////////////////////////////////////////////////////////

        /**
         * Returns library object
         * @private
         * @function
         * @return          {Object}                            Library object
         */
        function _library ( )
        {
            let _lib = { }

            ////    FUNCTIONS    ///////////////////////////////////////////////

                /**
                 * Returns internal scripts object
                 * @public
                 * @function
                 * @return          {Object}                            Scripts object
                 */
                _lib.getScripts            = ( )                       => _scripts;

                /**
                 * Runs easing animation for an animation card
                 * @public
                 * @function
                 * @param           {string} easingFunction             Easing function; as a string
                 * @param           {number} index                      Index of animation card
                 */
                _lib.runEasingAnimation    = ( easingFunction, index ) => UI.runEasingAnimation ( easingFunction, index );

                /**
                 * Runs lab-station code from editor
                 * @public
                 * @function
                 */
                _lib.runLabStationCode     = ( )                       => LAB.runCode ( );

                /**
                 * Toggles individual card buttons using their 'suite-data' attributes
                 * @public
                 * @function
                 * @param           {HTMLElement} element               HTML DOM Element
                 */
                _lib.toggleCardButton      = ( element )                => UI.toggle.cardButton ( element );

                /**
                 * Toggles lab from each card-object
                 * @public
                 * @function
                 * @param           {HTMLElement} element               HTML DOM Element
                 */
                _lib.toggleLab             = ( element )                => UI.toggle.lab ( element );


            return _lib;
        }

    ////    INITIALIZE    //////////////////////////////////////////////////////////////////////////

        /**
         * Initiates devSuite
         * @private
         * @function
         */
        function _init ( )
        {
            window.devSuite = _library ( );


            _setEnvironment ( );


            if ( window.cardObjects )
            {
                UI.init  ( );

                LAB.init ( _scripts.seedOfLife );


                if ( _config.labMode )

                    _setLabMode ( );
            }
            else

                console.error ( '[ ERROR ]: window.cardObjects is not available !' );
        }


        if ( typeof ( window.devSuite ) === 'undefined' )

            _init ( );

} ) ( window );
