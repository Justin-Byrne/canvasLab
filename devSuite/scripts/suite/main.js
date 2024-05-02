/**
 * Call main module
 * @module                                                  devSuite
 * @param           {Object} window                         Window containing a DOM document
 */
( ( window ) =>
{
    let _classes     = [ 'Template', 'Page', 'Tool', 'Ui', 'Lab' ];

    let _cardObjects =
    {
        object:
        {
            line:
            [
                {
                    title: 'draw',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.draw ( );
                    }
                },
                {
                    title: 'stroke type',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.stroke.type = 'solid';

                        _line.draw ( );
                    }
                },
                {
                    title: 'stroke segments',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.stroke.segments = [ 2, 7, 10 ];

                        _line.draw ( );
                    }
                },
                {
                    title: 'stroke color',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.stroke.color = new Rgb ( 0,  150,  200 );

                        _line.draw ( );
                    }
                },
                {
                    title: 'stroke alpha',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.stroke.color.alpha = 0.25;

                        _line.draw ( );
                    }
                },
                {
                    title: 'stroke width',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.stroke.width = 5;

                        _line.draw ( );
                    }
                },
                {
                    title: 'stroke cap',
                    text: 'blah... blah... blah...',
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
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.draw ( );
                    }
                },
                {
                    title: 'shadow blur',
                    text: 'blah... blah... blah...',
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
                    code: ( ) =>
                    {
                        _line.curve ( 0, 75, 0, 0 );

                        _line.draw ( );
                    }
                },
                {
                    title: 'move',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.move ( 180, 100 );
                    }
                },
                {
                    title: 'rotate',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.rotate ( 45 );
                    }
                },
                {
                    title: 'border',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.options.border = true;

                        _line.draw ( );
                    }
                },
                {
                    title: 'axis',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.options.axis = true;

                        _line.draw ( );
                    }
                },
                {
                    title: 'points',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.options.points = true;

                        _line.draw ( );
                    }
                },
                {
                    title: 'coordinates',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.options.coordinates = true;

                        _line.draw ( );
                    }
                },
                {
                    title: 'control points',
                    text: 'blah... blah... blah...',
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
                    code: ( ) =>
                    {
                        _circle.draw ( );
                    }
                },
                {
                    title: 'radius',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.radius = 50;

                        _circle.draw ( );
                    }
                },
                {
                    title: 'angle start',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.angle.start = 90;

                        _circle.draw ( );
                    }
                },
                {
                    title: 'angle end',
                    text: 'blah... blah... blah...',
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
                    code: ( ) =>
                    {
                        _circle.stroke.type = 'solid';

                        _circle.draw ( );
                    }
                },
                {
                    title: 'stroke segments',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.stroke.segments = [ 2, 4 ];

                        _circle.draw ( );
                    }
                },
                {
                    title: 'stroke color',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.stroke.color = new Rgb ( 0,  150,  200 );

                        _circle.draw ( );
                    }
                },
                {
                    title: 'stroke alpha',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.stroke.color.alpha = 0.25;

                        _circle.draw ( );
                    }
                },
                {
                    title: 'stroke width',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.stroke.width = 5;

                        _circle.draw ( );
                    }
                },
                {
                    title: 'fill color',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.fill.color = new Rgb ( 0,  150,  200 );

                        _circle.draw ( );
                    }
                },
                {
                    title: 'fill alpha',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.fill.alpha  = 0.25;

                        _circle.draw ( );
                    }
                },
                {
                    title: 'shadow',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.draw ( );
                    }
                },
                {
                    title: 'shadow blur',
                    text: 'blah... blah... blah...',
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
                    code: ( ) =>
                    {
                        _circle.move ( 180, 100 );
                    }
                },
                {
                    title: 'rotate',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.rotate ( 45 );
                    }
                },
                {
                    title: 'border',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.options.border = true;

                        _circle.draw ( );
                    }
                },
                {
                    title: 'axis',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.options.axis = true;

                        _circle.draw ( );
                    }
                },
                {
                    title: 'coordinates',
                    text: 'blah... blah... blah...',
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
                    code: ( ) =>
                    {
                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'aspect',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 200, height: 100 };

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'stroke type',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.stroke.type = 'solid';

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'stroke segments',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.stroke.segments = [ 2, 4 ];

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'stroke color',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.stroke.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'stroke alpha',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.stroke.alpha = 0.25;

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'stroke width',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.stroke.width = 5;

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'fill color',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'fill alpha',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.fill.alpha = 0.25;

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'shadow',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'shadow blur',
                    text: 'blah... blah... blah...',
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
                    code: ( ) =>
                    {
                        _rectangle.move ( 180, 100 );
                    }
                },
                {
                    title: 'rotate',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.rotate ( 45 );
                    }
                },
                {
                    title: 'axis',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.options.axis = true;

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'border',
                    text: 'blah... blah... blah...',
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
                    code: ( ) =>
                    {
                        _text.draw ( );
                    }
                },
                {
                    title: 'text',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.text = '!@#$%^&*'

                        _text.draw ( );
                    }
                },
                {
                    title: 'type',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.type = 'Courier New';

                        _text.draw ( );
                    }
                },
                {
                    title: 'size',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.size = 36;

                        _text.draw ( );
                    }
                },
                {
                    title: 'weight',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.weight = 'italic';

                        _text.draw ( );
                    }
                },
                {
                    title: 'maxWidth',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.maxWidth = 100;

                        _text.draw ( );
                    }
                },
                {
                    title: 'offset',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.offset = { x: 0, y: -25 }

                        _text.draw ( );
                    }
                },
                {
                    title: 'stroke type',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.stroke.type = 'solid';

                        _text.draw ( );
                    }
                },
                {
                    title: 'stroke segments',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.stroke.type = 'solid';

                        _text.stroke.segments = [ 2, 7, 10 ];

                        _text.draw ( );
                    }
                },
                {
                    title: 'stroke color',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.stroke.color = new Rgb ( 0,  150,  200 );

                        _text.draw ( );
                    }
                },
                {
                    title: 'stroke alpha',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.stroke.alpha = 0.25;

                        _text.draw ( );
                    }
                },
                {
                    title: 'stroke width',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.stroke.width = 5;

                        _text.draw ( );
                    }
                },
                {
                    title: 'fill color',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.fill.color = new Rgb ( 0,  150,  200 );

                        _text.draw ( );
                    }
                },
                {
                    title: 'fill alpha',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.fill.alpha  = 0.25;

                        _text.draw ( );
                    }
                },
                {
                    title: 'shadow',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.draw ( );
                    }
                },
                {
                    title: 'shadow color',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.draw ( );
                    }
                },
                {
                    title: 'shadow alpha',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.draw ( );
                    }
                },
                {
                    title: 'shadow blur',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.draw ( );
                    }
                },
                {
                    title: 'shadow offset',
                    text: 'blah... blah... blah...',
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
                    title: 'Align',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'Align Top',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'top';

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'Align Top-Right',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'topRight';

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'Align Right',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'right';

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'Align Bottom-Right',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'bottomRight';

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'Align Bottom',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'bottom';

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'Align Bottom-Left',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'bottomLeft';

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'Align Left',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'left';

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'Align Top-Left',
                    text: 'blah... blah... blah...',
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
                    title: 'angle start',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.angle.start = 90;

                        _circle.draw ( );
                    }
                },
                {
                    title: 'angle end',
                    text: 'blah... blah... blah...',
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
                    title: 'aspect',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 200, height: 100 };

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'aspect',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 50, height: 100 };

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'aspect',
                    text: 'blah... blah... blah...',
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
                    title: 'control points',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.curve ( 0, 50, 0, 0 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
                {
                    title: 'control points',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.curve ( 0, 0, 0, -50 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
                {
                    title: 'control points',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.curve ( 0, 50, 0, -50 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
                {
                    title: 'control points',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.curve ( 90, 0, -90, 0 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
                {
                    title: 'control points',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.curve ( 90, -50, -90, 50 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
                {
                    title: 'control points',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.curve ( -90, 50, 90, -50 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
                {
                    title: 'control points',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _line.curve ( -45, 45, -45, 45 );

                        _line.options.controlPoints = true;

                        _line.draw ( );
                    }
                },
                {
                    title: 'control points',
                    text: 'blah... blah... blah...',
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
                    title: 'fill color',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _circle.fill.color = new Rgb ( 0,  150,  200 );

                        _circle.draw ( );
                    }
                },
                {
                    title: 'fill color',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
            ],
            shadow:
            [
                {
                    title: 'fill color',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'fill color',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'fill color',
                    text: 'blah... blah... blah...',
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                {
                    title: 'fill color',
                    text: 'blah... blah... blah...',
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
            anchor:
            [
                {
                    title: 'Align',
                    text: 'blah... blah... blah...',
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
        }
    }

    ////    SETTERS    /////////////////////////////////////////////////////////////////////////////

        /**
         * Sets windows global variable space with this wrapper's declared classes
         * @private
         * @name _setWindowsGlobal
         * @function
         */
        function _setEnvironment ( )
        {
            for ( let _class of _classes )

                ( typeof ( window [ _class.toUpperCase ( ) ] ) === 'undefined' )

                    ? eval ( `window.${_class.toUpperCase ( )} = new ${_class};` )

                    : console.log ( `[ ERROR ]: window.${_class.toUpperCase ( )} already exists !` );


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

                console.error ( '[ ERROR ]: window.cardObjects is not available !');
        }


        if ( typeof ( window.devSuite ) === 'undefined' )

            _init ( );

} ) ( window );
