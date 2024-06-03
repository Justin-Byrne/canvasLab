// @program: 		canvasLab 
// @brief: 			HTML5 canvas drawing framework 
// @author: 		Justin D. Byrne 
// @email: 			justin@byrne-systems.com 
// @version: 		0.3.59 
// @license: 		GPL-2.0

"use strict";
 
/**
 * Base object for shared accessors & mutators
 * @namespace       PROPERTY_BLOCKS
 */
const PROPERTY_BLOCKS =
{
    /**
     * Discrete property accessors & mutators
     * @function PROPERTY_BLOCKS.discrete
     */
    discrete:
    {
        /** @var            {Object} discrete.canvas                                                **/
        canvas:
        {
            set ( value )
            {
                this._canvas = ( value ) ? ( this._isInDom ( value ) )

                                               ? document.getElementById ( value ).getContext ( '2d' )

                                               : console.warn ( `"${value}" is not a valid DOM element !` )

                                         : ( window.canvaslab.canvas )

                                               ? document.getElementById ( window.canvaslab.canvas ).getContext ( '2d' )

                                               : this._canvas;
            },
            get ( )
            {
                return ( this._canvas != undefined ) ? this._canvas.canvas.id : undefined;
            }
        },
        /** @var            {Object} discrete.offset                                                **/
        offset:
        {
            set ( value )
            {
                this._offset = ( this._isPoint ( value ) ) ? value : this._offset;
            },
            get ( )
            {
                return this._offset;
            }
        },
        /** @var            {Object} discrete.offsetX                                               **/
        offsetX:
        {
            set ( value )
            {
                this._offset.x = value;
            },
            get ( )
            {
                return this._offset.x;
            }
        },
        /** @var            {Object} discrete.offsetY                                               **/
        offsetY:
        {
            set ( value )
            {
                this._offset.y = value;
            },
            get ( )
            {
                return this._offset.y;
            }
        },
        /** @var            {Object} discrete.point                                                 **/
        point:
        {
            set ( value )
            {
                this._point = ( this._isPoint ( value ) ) ? value : this._point;
            },
            get ( )
            {
                return this._point;
            }
        },
        /** @var            {Object} discrete.pointX                                                **/
        pointX:
        {
            set ( value )
            {
                this._point.x = value;
            },
            get ( )
            {
                return this._point.x;
            }
        },
        /** @var            {Object} discrete.pointY                                                **/
        pointY:
        {
            set ( value )
            {
                this._point.y = value;
            },
            get ( )
            {
                return this._point.y;
            }
        },
        alpha:
        {
            set ( value )
            {
                this._alpha = ( value <= 1  &&  value >= 0 ) ? value : this._alpha;
            },
            get ( )
            {
                return this._alpha;
            }
        },
    },

    /**
     * Combined property accessors & mutators
     * @function PROPERTY_BLOCKS.combined
     */
    combined:
    {
        /** @var            {Object} combined.canvas                                                **/
        canvas:
        {
            set ( value )
            {
                this._canvas = ( value ) ? ( this._isInDom ( value ) )

                                               ? document.getElementById ( value ).getContext ( '2d' )

                                               : console.warn ( `"${value}" is not a valid DOM element !` )

                                         : ( document.getElementById ( window.canvaslab.canvas ).getContext ( '2d' ) )

                                               ? document.getElementById ( window.canvaslab.canvas ).getContext ( '2d' )

                                               : this._canvas;


                for ( let _element of this )

                    _element.canvas = value;
            },
            get ( )
            {
                return ( this._canvas != undefined ) ? this._canvas.canvas.id : undefined;
            }
        },
        /** @var            {Object} combined.start                                                 **/
        start:
        {
            set ( value )
            {
                if ( this._isPoint ( value ) ) this._start = this.origin.start = value;
            },
            get ( )
            {
                return this._start;
            }
        },
        /** @var            {Object} combined.end                                                   **/
        end:
        {
            set ( value )
            {
                if ( this._isPoint ( value ) ) this._end = this.origin.end = value;
            },
            get ( )
            {
                return this._end;
            }
        }
    }
}
 
/**
 * Shared utility functions
 * @namespace       UTILITIES
 */
const UTILITIES =
{
    /**
     * Utility color functions
     * @function UTILITIES.color
     */
    color:
    {
        /**
         * Utility color cycling functions
         */
        cycle:
        {
            /**
             * Cycle colors for stroke
             * @public
             * @function
             * @param           {Rgb}    start                              Starting RGB value
             * @param           {Rgb}    end                                Ending RGB value
             * @param           {number} progress                           Progress time unit; 0.00 - 1.00
             * @param           {number} [max=1]                            Maximum increments
             */
            stroke ( start, end, progress, max = 1 )
            {
                let _clear = ( ) => this._clearCanvas ( true );

                let _draw  = ( ) => this.draw ( );


                this._stroke._color._cycle ( start, end, progress, max, _clear, _draw );
            },

            /**
             * Cycle colors for fill
             * @public
             * @function
             * @param           {Rgb}    start                              Starting RGB value
             * @param           {Rgb}    end                                Ending RGB value
             * @param           {number} progress                           Progress time unit between; 0.00 - 1.00
             * @param           {number} [max=1]                            Maximum increments
             */
            fill ( start, end, progress, max = 1 )
            {
                let _clear = ( ) => this._clearCanvas ( true );

                let _draw  = ( ) => this.draw ( );


                this._fill.color._cycle ( start, end, progress, max, _clear, _draw );
            },

            /**
             * Cycle colors for gradient
             * @public
             * @function
             * @param           {Rgb}    start                              Starting RGB value
             * @param           {Rgb}    end                                Ending RGB value
             * @param           {number} progress                           Progress time unit between; 0.00 - 1.00
             * @param           {number} stop                               Gradient color stop
             * @param           {number} [max=1]                            Maximum increments
             */
            gradient ( start, end, progress, stop, max = 1 )
            {
                let _clear = ( ) => this._clearCanvas ( true );

                let _draw  = ( ) => this.draw ( );


                this._fill.gradient._stopColorCycle ( start, end, progress, stop, max, _clear, _draw );
            },

            /**
             * Cycle colors for gradient stop(s)
             * @public
             * @function
             * @param           {Object}   start                    Color model & values
             * @param           {Object}   end                      Color model & values
             * @param           {number}   progress                 Progress time unit; 0.00 - 1.00
             * @param           {number}   stop                     Color stop to cycle
             * @param           {number}   max                      Maximum number of steps between interpolation
             * @param           {function} clear                    Clear callback from root object
             * @param           {function} draw                     Draw callback from root object
             */
            stop ( start, end, progress, stop, max, clear, draw )
            {
                this.stops [ stop ].color._cycle ( start, end, progress, max, clear, draw );
            },
        }
    },

    /**
     * Utility draw functions
     * @function UTILITIES.draw
     */
    draw:
    {
        /**
         * Draws an axis for the associated object
         * @public
         * @function
         * @param           {number} offset                             Offset of axis
         * @param           {Object} color                              Color model
         * @param           {number} stop                               Gradient color stop
         */
        axis ( edgeOffset = 20, color = new Rgb ( 245, 80, 50 ) )
        {
            let _lines = new Lines ( new Line, new Line );


                _lines.stroke.color = color;

                _lines.point        = this.center;

                _lines.canvas       = ( this instanceof Point ) ? this.options._master.canvas : this.canvas;


                [  _lines [ 0 ].start.x, _lines [ 0 ].end.x  ] = [  - ( edgeOffset ), + ( edgeOffset )  ];

                [  _lines [ 1 ].start.y, _lines [ 1 ].end.y  ] = [  - ( edgeOffset ), + ( edgeOffset )  ];


                _lines.draw ( );
        },

        /**
         * Draws an axis for the associated object
         * @public
         * @function
         * @param           {Aspect} aspect                             Aspect properties
         * @param           {Object} color                              Color model
         */
        border ( aspect, color = new Rgb ( 245, 80, 50 ) )
        {
            if ( this._isAspect ( aspect ) )
            {
                let _border = new Rectangle ( this.center, aspect );


                    _border.stroke.color     = color;

                    _border.fill.color.alpha = 0;

                    _border.canvas           = ( this instanceof Point ) ? this.options._master.canvas : this.canvas;


                    _border.draw ( );
            }
            else

                console.warn ( `"${value}" is not a valid aspect !` );
        },

        /**
         * Utility draw collection functions
         */
        collection:
        {

            /**
             * Typical draw function for collections; Circles, Rectangles, Texts
             * @public
             * @function
             * @param           {string} canvas                             Canvas Id
             */
            typical ( canvas )
            {
                if ( canvas != undefined ) this.canvas = canvas;


                if ( this._canvas instanceof CanvasRenderingContext2D )
                {
                    if ( this.length > 0 )

                        for ( let _object of this )
                        {
                            _object.point = new Point (  ( _object.origin.x + this.x ), ( _object.origin.y + this.y )  );

                            _object.draw ( );
                        }

                    else

                        console.warn ( `No ${this.constructor.name} exist to draw !` );
                }
                else

                    console.warn ( `'canvas' property is not set for ${this.constructor.name} !` );
            },

            /**
             * A-typical draw function for collections; Lines
             * @public
             * @function
             * @param           {string} canvas                             Canvas Id
             */
            aTypical ( canvas )
            {
                if ( canvas != undefined ) this.canvas = canvas;


                if ( this._canvas instanceof CanvasRenderingContext2D )
                {
                    if ( this.length > 0 )
                    {
                        for ( let _object of this )
                        {
                            this._setAspect      ( );

                            this._setAnchorPoint ( );


                            _object._start = new Point (  ( _object.origin.start.x + this.x ), ( _object.origin.start.y + this.y )  );

                            _object._end   = new Point (  ( _object.origin.end.x   + this.x ), ( _object.origin.end.y   + this.y )  );


                            _object.draw ( );
                        }


                        this._drawOptions ( );
                    }
                    else

                        console.warn ( `No ${this.constructor.name} exist to draw !` );
                }
                else

                    console.warn ( `'canvas' property is not set for ${this.constructor.name} !` );
            }
        }
    },

    /**
     * Utility draw collection functions
     * @function UTILITIES.misc
     */
    misc:
    {
        /**
         * Clears canvas
         * @public
         * @function
         * @param           {boolean} value                             Whether to redraw background
         */
        clearCanvas ( value )
        {
            let _canvas = document.getElementById ( this.canvas );


            if ( value ) this._canvas.clearRect ( 0, 0, _canvas.width, _canvas.height );
        },

        /**
         * Push or pops the passed object
         * @public
         * @function
         * @param           {Object} object                             Object; Circle, Rectangle, Text
         */
        pushPop ( object )
        {
            let _index = undefined;


            if ( object instanceof this._storage.type )
            {
                if ( this._canvas != undefined )

                    object.canvas = this.canvas;


                if ( this.length != 0 )
                {
                    for ( let _id in this )

                        if ( this [ _id ] instanceof this._storage.type )

                            if ( this [ _id ].isThere ( object ) )

                                _index = _id;

                        else

                            break;


                    ( _index != undefined )

                        ? this.splice ( _index, 1 )

                        : this.push   ( object );
                }
                else

                    this [ 0 ] = object;
            }
            else

                console.warn ( `${this.constructor.name} only accepts '${this._storage.type.name}' objects !`);
        },

        /**
         * Rotates the origin point by the degree & distance passed
         * @public
         * @function
         * @param           {Point}  origin                             Origin point
         * @param           {number} degree                             Degree to rotate
         * @param           {number} distance                           Distance from origin
         */
        rotatePoint ( origin = { x, y }, degree, distance )
        {
            let _point = new Point;

            let _angle = ( degree % 360 );


                _point.x = origin.x + Math.cos ( _angle * Math.PI / 180 ) * distance;

                _point.y = origin.y + Math.sin ( _angle * Math.PI / 180 ) * distance;


            return _point;
        },
    },

    /**
     * Utility draw collection functions
     * @function UTILITIES.draw
     */
    set:
    {
        /**
         * Sets all option values throughout a collection
         * @public
         * @function
         * @param           {string}  property                          Option property
         * @param           {boolean} value                             True || False
         */
        all ( property, value )
        {
            let _ancestor = this.constructor.name.replace ( 'Collection', '' ).toLowerCase ( );


            this [ `_${property}` ] = value;                    // Set: parent element


            if ( this._master.length > 0 )

                for ( let _item of this._master )

                    _item [ _ancestor ] [ property ] = value;   // Set: child elements
        },

        /**
         * Sets shadow properties
         * @public
         * @function
         */
        shadow ( )
        {
            this._canvas.shadowBlur    = this._shadow.blur;

            this._canvas.shadowOffsetX = this._shadow.x;

            this._canvas.shadowOffsetY = this._shadow.y;

            this._canvas.shadowColor   = this._shadow.color.toCss ( );
        },

        /**
         * Sets fill type of the associated object
         * @public
         * @function
         */
        fillType ( )
        {
            /**
             * Sets stops for gradient fill types
             * @public
             * @function
             * @param           {Object}        gradient                    [description]
             * @param           {Array.<Stops>} stops                       [description]
             */
            function _setStops ( gradient, stops )
            {
                for ( let _stop of stops )

                    gradient.addColorStop ( _stop.offset, _stop.color.toCss ( ) );


                return gradient;
            }

            switch ( this.fill.type )
            {
                case 'solid':   this._canvas.fillStyle = this.fill.color.toCss ( );                             break;

                case 'linear':  let _linear = this._canvas.createLinearGradient ( this.fill.gradient.start.x, this.fill.gradient.start.y, this.fill.gradient.end.x, this.fill.gradient.end.y );

                                this._canvas.fillStyle = _setStops ( _linear, this.fill.gradient.stops );       break;

                case 'radial':  let _radial = this._canvas.createRadialGradient ( this.fill.gradient.start.x, this.fill.gradient.start.y, this.fill.gradient.startRadius, this.fill.gradient.end.x, this.fill.gradient.end.y, this.fill.gradient.endRadius );

                                this._canvas.fillStyle = _setStops ( _radial, this.fill.gradient.stops );       break;

                case 'conic':   let _conic = this._canvas.createConicGradient ( this.fill.gradient.angle, this.fill.gradient.point.y, this.fill.gradient.point.x );

                                this._canvas.fillStyle = _setStops ( _conic, this.fill.gradient.stops );        break;
            }
        }
    },
}
 
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
 
/**
 * Shared utility functions
 * @namespace       DEBUG
 *
 */
const DEBUG =
{
    /**
     * Sets canvas's aspect ratio
     * @public
     * @memberof DEBUG
     * @function
     * @param           {string} canvasId                           Canvas identifier
     */
    setCanvasStyleToHTML ( canvasId )
    {
        let _canvas = document.getElementById ( canvasId );

            [ _canvas.style.width, _canvas.style.height ]  = [ `${_canvas.width}px`, `${_canvas.height}px` ];
    },

    /**
     * Sets canvas's max aspect ratio
     * @public
     * @memberof DEBUG
     * @function
     * @param           {string} canvasId                           Canvas identifier
     */
    setCanvasStyleToHTMLMAX ( canvasId )
    {
        let _canvas = document.getElementById ( canvasId );

            _canvas.style.width = _canvas.style.height = '100%';
    },

    /**
     * Fixes pixel blur
     * @public
     * @memberof DEBUG
     * @function
     * @param           {string} canvasId                           Canvas identifier
     */
    fixBlur ( canvasId )
    {
        let _dpi    = window.devicePixelRatio;

        let _canvas = document.getElementById ( canvasId );


        let style_height = +getComputedStyle ( _canvas ).getPropertyValue ( "height" ).slice ( 0, -2 );      //get CSS height, the + prefix casts it to an integer, the slice method gets rid of "px"

        let style_width  = +getComputedStyle ( _canvas ).getPropertyValue ( "width"  ).slice ( 0, -2 );


        _canvas.setAttribute ( 'height', style_height * _dpi );    //scale the canvas

        _canvas.setAttribute ( 'width',  style_width  * _dpi );
    }
}
 
/**
 * @class           {Object} canvasLab                          CanvasLab core application
 * @property        {Object} canvas                             Main canvas context
 * @property        {Array}  canvases                           Array of all canvas contexts
 * @property        {string} font                               Main font type
 */
class canvasLab
{
    _canvas   = undefined;
    _canvases = undefined;
    _font     = undefined;

    #application = new Application;

    /**
     * Create a canvasLab object
     * @property        {string} canvasId                           Canvas identifier
     */
    constructor ( canvas )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isInDom = VALIDATION.isInDom;

        this._init ( );

        this.canvas = canvas;
    }

        ////    [ CANVAS ]  ////////////////////////////////////

        /**
         * Set canvas value
         * @public
         * @function
         * @param           {string} value                              Canvas identifier
         */
        set canvas ( value )
        {
            this._canvas = ( this._isInDom ( value ) )

                                ? document.getElementById ( value ).getContext ( '2d' )

                                : this._canvas;
        }

        /**
         * Get canvas value
         * @readOnly
         * @function
         * @return          {string}                                    Canvas identifier
         * @see             {@link discrete.canvas}
         */
        get canvas ( )
        {
            return this._canvas.canvas.id;
        }

    ////    [ CANVASES ]    ////////////////////////////////

        /**
         * Set canvas value
         * @public
         * @function
         * @param           {string} canvasId                           Canvas identifier
         */
        set canvases ( canvasId )
        {
            let _canvas = ( this._isInDom ( canvasId ) )

                              ? document.getElementById ( canvasId ).getContext ( '2d' )

                              : undefined;


            if ( this._canvases == undefined )

                this._canvases = new Array;


            if ( _canvas != undefined )

                this._canvases.push ( _canvas );
        }

        /**
         * Set canvas value
         * @readOnly
         * @function
         * @return          {Array}                                     Array of canvas contexts
         */
        get canvases ( )
        {
            return this._canvases;
        }

    ////    [ FONT ]    ////////////////////////////////////

        /**
         * Set main font type
         * @public
         * @function
         * @param           {string} font                               Main font type
         */
        set font ( value )
        {
            this._font = ( typeof value === 'string' ) ? value : this._font;
        }

        /**
         * Get main font type
         * @readOnly
         * @function
         * @return          {string} font                               Main font type
         */
        get font ( )
        {
            return this._canvas.font;
        }

    ////    DOM    /////////////////////////////////////////

        get dom ( )
        {
            return this.#application.dom;
        }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isInDom}
         */
        _isInDom  ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Animates onscreen objects in accordance with passed param values
         * @param           {Object}   flow                     Contains timing, draw, & duration values & functions
         * @param           {number}   flow.duration            Duration of animation
         * @param           {Function} flow.timing              Timing function
         * @param           {Function} flow.draw                Draw function
         */
        animate ( flow = { duration, timing, draw } )
        {
            if ( flow )

                this.#application.animation = flow;
        }

    ////    INITIALIZE  ////////////////////////////////////

        /**
         * CanvasLab initializer
         * @private
         * @function
         */
        _init ( )
        {
            let _canvases = document.getElementsByTagName ( 'canvas' );


            if ( typeof _canvases === 'object' && this._canvases === undefined )

                for ( let _id in _canvases )

                    if ( _id == 0 )

                        this.canvas   = _canvases [ _id ].id;

                    else

                        this.canvases = _canvases [ _id ].id;
        }
}
 
/**
 * @class           {Object} Rgb 								RGB color model
 * @property        {number} [red=0] 							Red value; 0 - 255
 * @property        {number} [green=0] 							Green value; 0 - 255
 * @property        {number} [blue=0] 							Blue value; 0 - 255
 * @property        {number} [alpha=1] 							Alpha value; 0 - 1 (decimal)
 */
class Rgb
{
	_red   = 0;
	_green = 0;
	_blue  = 0;
	_alpha = 1;

	/**
	 * Create an RGB color model
	 * @param 			{number} red                               	Red value
	 * @param 			{number} green                             	Green value
	 * @param 			{number} blue 								Blue value
	 * @param 			{number} alpha 								Alpha value
	 */
	constructor ( red, green, blue, alpha )
	{
		////    COMPOSITION    /////////////////////////////

			this._is256 = VALIDATION.is256;

			Object.defineProperty ( this, 'alpha', PROPERTY_BLOCKS.discrete.alpha  );

		this.red   = red;
		this.green = green;
		this.blue  = blue;
		this.alpha = ( alpha === undefined ) ? 1 : alpha;
	}

	////    [ RED ]    /////////////////////////////////////

		/**
		 * Sets the red value
		 * @public
		 * @function
		 * @param           {number} red                        		Red value; 0 - 255
		 */
		set red ( value )
		{
			this._red = this._is256 ( value ) ? Math.round ( value ) : this._red;
		}

		/**
		 * Gets the red value
		 * @readOnly
		 * @function
		 * @return 			{number}									Red value; 0 - 255
		 */
		get red ( )
		{
			return this._red;
		}

	////    [ GREEN ]    ///////////////////////////////////

		/**
		 * Sets the green value
		 * @public
		 * @function
		 * @param 			{number} green 								Green value; 0 - 255
		 */
		set green ( value )
		{
			this._green = this._is256 ( value ) ? Math.round ( value ) : this._green;
		}

		/**
		 * Gets the green value
		 * @readOnly
		 * @function
		 * @return 			{number} 									Green value; 0 - 255
		 */
		get green ( )
		{
			return this._green;
		}

	////    [ BLUE ]    ////////////////////////////////////

		/**
		 * Sets the blue value
		 * @public
		 * @function
		 * @param 			{number} blue 								Blue value; 0 - 255
		 */
		set blue ( value )
		{
			this._blue = this._is256 ( value ) ? Math.round ( value ) : this._blue;
		}

		/**
		 * Gets the blue value
		 * @readOnly
		 * @function
		 * @return 			{number} 									Blue value; 0 - 255
		 */
		get blue ( )
		{
			return this._blue;
		}

	////    [ VALIDATION ]    //////////////////////////////

		/**
	     * Returns whether the passed value is a 256 color value; 0 - 255
	     * @private
	     * @function
	     * @param           {number} value 								256 color value; 0 - 255
	     * @return          {boolean} 									True || False
	     * @see             {@link Validation.is256}
	     */
		_is256 ( ) { }

	////    [ UTILITIES ]    ///////////////////////////////

		/**
		 * Color cycling
		 * @private
		 * @function
		 * @param  			{Object}   start							Color model & values
		 * @param  			{Object}   end 								Color model & values
		 * @param 			{number}   progress 						Progress time unit; 0.00 - 1.00
		 * @param 			{number}   max 								Maximum number of steps between interpolation
		 * @param 			{function} clear 							Clear callback from root object
		 * @param 			{function} draw 							Draw callback from root object
		 */
		_cycle ( start, end, progress, max, clear, draw )
	    {
	    	this._lerpRgb ( start, end, progress, max );

	    	clear ( );

	    	draw  ( );
		}

		/**
		 * Linear interpolation color transitions
		 * @private
		 * @function
		 * @param  			{Object} start 								Color model & values
		 * @param  			{Object} end 								Color model & values
		 * @param 			{number} progress 							Progress time unit; 0.00 - 1.00
		 * @param 			{number} max 								Maximum number of steps between interpolation
		 */
		_lerp ( start, end, progress, max )
		{
			return Math.round ( start + ( end - start ) * progress / max );
		}

		/**
		 * Linear interpolation of Rgb values
		 * @private
		 * @function
		 * @param  			{Object} start 								Color model & values
		 * @param  			{Object} end 								Color model & values
		 * @param 			{number} progress 							Progress time unit; 0.00 - 1.00
		 * @param 			{number} max 								Maximum number of steps between interpolation
		 */
		_lerpRgb ( start, end, progress, max )
	    {
	    	this._red   = this._lerp ( start.red,   end.red,   progress, max );

	    	this._green = this._lerp ( start.green, end.green, progress, max );

	    	this._blue  = this._lerp ( start.blue,  end.blue,  progress, max );
		}

		/**
		 * Returns a CSS compatible <color> string value
		 * @public
		 * @function
		 * @return 			{string} 									CSS <color> string
		 */
		toCss ( )
		{
			return `rgb(${this.red} ${this.green} ${this.blue} / ${this.alpha * 100}%)`;
		}
}
 
/**
 * @class           {Object}  Options                           Options for shapes, lines, and groups
 * @property        {boolean} [shadow=false]                    Show shadow
 * @property        {boolean} [border=false]                    Show border
 * @property        {boolean} [axis=false]                      Show axis
 * @property        {boolean} [points=false]                    Show points
 * @property        {boolean} [anchor=false]                    Show anchor
 * @property        {boolean} [coordinates=false]               Show coordinates
 * @property        {boolean} [controlPoints=false]             Show control points
 * @property        {Object}  master                            Master object to reference
 */
class Options
{
    _shadow        = false;
    _border        = false;
    _axis          = false;
    _points        = false;
    _anchor        = false;
    _coordinates   = false;
    _controlPoints = false;

    _master = undefined;

    /**
     * Create an options object
     * @param           {boolean} shadow                            Show shadow
     * @param           {boolean} border                            Show border
     * @param           {boolean} axis                              Show axis
     * @param           {boolean} points                            Show points
     * @param           {boolean} anchor                            Show anchor
     * @param           {boolean} coordinates                       Show coordinates
     * @param           {boolean} controlPoints                     Show control points
     */
    constructor ( shadow, border, axis, points, anchor, coordinates, controlPoints )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isCanvasLabObject = VALIDATION.isCanvasLabObject;

        this.shadow        = shadow;
        this.border        = border;
        this.axis          = axis;
        this.points        = points;
        this.anchor        = anchor;
        this.coordinates   = coordinates;
        this.controlPoints = controlPoints;
    }

    ////    [ SHADOW ]  ////////////////////////////////////

        /**
         * Set shadow value
         * @public
         * @function
         * @param           {boolean} value                             Shadow; true | false
         */
        set shadow ( value )
        {
            this._shadow = ( typeof value === 'boolean' ) ? value : this._shadow;
        }

        /**
         * Get shadow value
         * @public
         * @function
         * @return          {boolean}                                   Shadow; true | false
         */
        get shadow ( )
        {
            return this._shadow;
        }

    ////    [ BORDER ]  ////////////////////////////////////

        /**
         * Set border value
         * @public
         * @function
         * @param           {boolean} value                             Border; true | false
         */
        set border ( value )
        {
            this._border = ( typeof value === 'boolean' ) ? value : this._border;
        }

        /**
         * Get border value
         * @readOnly
         * @function
         * @return          {boolean}                                   Border; true | false
         */
        get border ( )
        {
            return this._border;
        }

    ////    [ AXIS ]    ////////////////////////////////////

        /**
         * Set axis value
         * @public
         * @function
         * @param           {boolean} value                             Axis; true | false
         */
        set axis ( value )
        {
            this._axis = ( typeof value === 'boolean' ) ? value : this._axis;
        }

        /**
         * Get axis value
         * @readOnly
         * @function
         * @return          {boolean}                                   Axis; true | false
         */
        get axis ( )
        {
            return this._axis;
        }

    ////    [ ANCHOR ]  ////////////////////////////////////

        /**
         * Set anchor value
         * @public
         * @function
         * @param           {boolean} value                             Anchor; true | false
         */
        set anchor ( value )
        {
            this._anchor = ( typeof value == 'boolean' ) ? value : this._anchor;
        }

        /**
         * Get anchor value
         * @readOnly
         * @function
         * @return          {boolean}                                   Anchor; true | false
         */
        get anchor ( )
        {
            return this._anchor;
        }

    ////    [ COORDINATES ]     ////////////////////////////

        /**
         * Set coordinates value
         * @public
         * @function
         * @param           {boolean} value                             Coordinates; true | false
         */
        set coordinates ( value )
        {
            this._coordinates = ( typeof value === 'boolean' ) ? value : this._coordinates;
        }

        /**
         * Get coordinates value
         * @readOnly
         * @function
         * @return          {boolean}                                   Coordinates; true | false
         */
        get coordinates ( )
        {
            return this._coordinates;
        }

    ////    [ CONTROL POINTS ]  ////////////////////////////

        /**
         * Set control points value
         * @public
         * @function
         * @param           {boolean} value                             Control points; true | false
         */
        set controlPoints ( value )
        {
            this._controlPoints = ( typeof value === 'boolean' ) ? value : this._controlPoints;
        }

        /**
         * Get control points value
         * @readOnly
         * @function
         * @return          {boolean}                                   Control points; true | false
         */
        get controlPoints ( )
        {
            return this._controlPoints;
        }

    ////    [ MASTER ]  ////////////////////////////////////

        /**
         * Set master object
         * @public
         * @function
         * @param           {Object} value                              CanvasLab Object
         */
        set master ( value )
        {
            this._master = ( this._isCanvasLabObject ( value ) ) ? value : this._master;
        }

        /**
         * Get master object
         * @public
         * @function
         * @return          {Object}                                    CanvasLab Object
         */
        get master ( )
        {
            return this._master;
        }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is a CanvasLab object; Line, Circle, Rectangle, Text
         * @private
         * @function
         * @param           {Object} value                              CanvasLab object; Line, Circle, Rectangle, Text
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isCanvasLabObject}
         */
        _isCanvasLabObject ( ) { }
}
 
/**
 * @class           {Object} Anchor                             Anchor object
 * @property        {Point}  point                              X & Y axis coordinates
 * @property        {string} align                              Anchor alignment
 */
class Anchor
{
	_point = new Point;

	_align = 'center';

	constructor ( )
	{
		//// 	COMPOSITION 	////////////////////////////

			this._isAlign = VALIDATION.isAlign;

            Object.defineProperty ( this, 'x', PROPERTY_BLOCKS.discrete.pointX );
            Object.defineProperty ( this, 'y', PROPERTY_BLOCKS.discrete.pointY );
	}

	////    [ POINT ]   ////////////////////////////////////

        /**
         * Set point
         * @public
         * @function
         * @param           {Point} point                               X & Y axis coordinates
         */
        set point ( value ) { }

        /**
         * Get point
         * @public
         * @function
         * @return          {Point}                                     X & Y axis coordinates
         */
        get point ( ) { }


		/**
         * Set x-axis value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         */
        set x ( value ) { }

        /**
         * Get x-axis value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         */
        get x ( ) {  }


        /**
         * Set y-axis value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         */
        set y ( value ) { }

        /**
         * Get y-axis value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         */
        get y ( ) { }

    ////    [ TYPE ]    ////////////////////////////////////

        /**
         * Set anchor alignment
         * @public
         * @function
         * @param           {string} value                              Anchor alignment
         */
        set align ( value )
        {
            this._align = ( this._isAlign ( value ) ) ? value : this._align;
        }

        /**
         * Get anchor alignment
         * @readOnly
         * @function
         * @return          {string}                                    Anchor alignment
         */
        get align ( )
        {
            return this._align;
        }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is an Anchor alignment
         * @private
         * @function
         * @param           {string} value                              Anchor alignment
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isAnchor}
         */
        _isAnchor ( ) { }
}
 
/**
 * @class           {Object}  Angle                             Angle properties of associated object
 * @property        {number}  [start=0]                         The start of the angle, in radians; measured from the positive x-axis
 * @property        {number}  [end=360]                         The end of the angle, in radians; measured from the positive x-axis
 * @property        {boolean} [clockwise=true]                  Path arc clockwise
 */
class Angle
{
    _start     = 0;
    _end       = 360;
    _clockwise = true;

    /**
     * Create an angle
     * @param           {number}  start                             The angle at which the arc starts in degrees, measured from the positive x-axis
     * @param           {number}  end                               The angle at which the arc ends in degrees, measured from the positive x-axis
     * @param           {boolean} clockwise                         Draws the arc clockwise between the start and end angles
     */
    constructor ( start, end, clockwise )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isDegree = VALIDATION.isDegree;
            this._isRadian = VALIDATION.isRadian;

        this.start     = start;
        this.end       = end;
        this.clockwise = clockwise;
    }

    ////    [ START ]   ////////////////////////////////////

        /**
         * Set start angle
         * @public
         * @function
         * @param           {number} value                              Start angle; in degrees
         */
        set start ( value )
        {
            this._start = ( this._isDegree ( value ) ) ? value : this._start;
        }

        /**
         * Get start angle
         * @readOnly
         * @function
         * @return          {number}                                    Start value; in degrees
         */
        get start ( )
        {
            return this._start;
        }

    ////    [ END ]     ////////////////////////////////////

        /**
         * Set end angle
         * @public
         * @function
         * @param           {number} value                              End angle; in degrees
         */
        set end ( value )
        {
            this._end = ( this._isDegree ( value ) ) ? value : this._end;
        }

        /**
         * Get end angle
         * @readOnly
         * @function
         * @return          {number}                                    End angle; in degrees
         */
        get end ( )
        {
            return this._end;
        }

    ////    [ CLOCKWISE ]   ////////////////////////////////

        /**
         * Set clockwise
         * @public
         * @function
         * @param           {boolean} value                             Clockwise; true | false
         */
        set clockwise ( value )
        {
            this._clockwise = ( typeof value === 'boolean' ) ? value : this._clockwise;
        }

        /**
         * Get clockwise
         * @readOnly
         * @function
         * @return          {boolean}                                   Clockwise; true | false
         */
        get clockwise ( )
        {
            return this._clockwise;
        }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is a degree
         * @private
         * @function
         * @param           {number} value                              Degree
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isDegree}
         */
        _isDegree ( ) { }

        /**
         * Returns whether the passed value is a radian; 0 - 6.28...
         * @private
         * @function
         * @param           {number} value                              Radian value; 0 - 6.28...
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isRadian}
         */
        _isRadian ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Convert radian to degree
         * @private
         * @function
         * @param           {number} value                              Radian
         * @return          {number}                                    Conversion in degrees
         */
        _convert2Degree ( value )
        {
            return ( this._isRadian ) ? ( value / ( Math.PI / 180 ) ) : console.warn ( `${value} is not a radian value !` );
        }

        /**
         * Convert degree to radian
         * @private
         * @function
         * @param           {number} value                              Degree
         * @return          {number}                                    Conversion in radians
         */
        _convert2Radian ( value )
        {
            return ( this._isDegree ) ? ( value * ( Math.PI / 180 ) ) : console.warn ( `${value} is not a degree value !` );
        }

        /**
         * Get start angle in radians
         * @readOnly
         * @function
         * @return          {number}                                    Start value; to radians
         */
        get startInRadians ( )
        {
            return this._convert2Radian ( this.start );
        }

        /**
         * Get end angle in radians
         * @readOnly
         * @function
         * @return          {number}                                    End value; in radians
         */
        get endInRadians ( )
        {
            return this._convert2Radian ( this.end );
        }
}
 
/**
 * @class           {Object} Aspect                             Aspect dimensions of associated object
 * @property        {number} [width=0]                          Width
 * @property        {number} [height=0]                         Height
 */
class Aspect
{
    _width  = 0;
    _height = 0;

    /**
     * Create an aspect
     * @param           {number} width                              Width of aspect
     * @param           {number} height                             Height of aspect
     */
    constructor ( width, height )
    {
        this.width  = width;
        this.height = height;
    }

    ////    [ WIDTH ]   ////////////////////////////////////

        /**
         * Set width
         * @public
         * @function
         * @param           {number} value                              Width value
         */
        set width ( value )
        {
            this._width = ( typeof value === 'number' && value > 0 ) ? value : this._width;
        }

        /**
         * Get width
         * @readOnly
         * @function
         * @return          {number}                                    Width value
         */
        get width ( )
        {
            return this._width;
        }

    ////    [ HEIGHT ]  ////////////////////////////////////

        /**
         * Set height
         * @public
         * @function
         * @param           {number} value                              Height value
         */
        set height ( value )
        {
            this._height = ( typeof value === 'number' && value > 0 ) ? value : this._height;
        }

        /**
         * Get height
         * @readOnly
         * @function
         * @return          {number}                                    Height value
         */
        get height ( )
        {
            return this._height;
        }

    ////    & EXTEND &   ///////////////////////////////////

        /**
         * Get center of aspect
         * @readOnly
         * @function
         * @return              {Point}                                 Center point of this aspect
         */
        get center ( )
        {
            return new Point ( this.widthCenter, this.heightCenter );
        }

        /**
         * Get center of height
         * @readOnly
         * @function
         * @return          {number}                                    Center of height
         */
        get heightCenter ( )
        {
            return this.height / 2;
        }

        /**
         * Get center of width
         * @readOnly
         * @function
         * @return          {number}                                    Center of with
         */
        get widthCenter ( )
        {
            return this.width / 2;
        }
}
 
/**
 * @class           {Object} ControlPoints                      Defines the shape of a bezier curve
 * @property        {number}  p0                                Control point one
 * @property        {number}  p1                                Control point two
 * @property        {number}  p2                                Control point three
 * @property        {number}  p3                                Control point four
 */
class ControlPoints
{
    _p0 = 0;
    _p1 = 0;
    _p2 = 0;
    _p3 = 0;

    /**
     * Create control points
     * @param           {number}  p0                                Control point one
     * @param           {number}  p1                                Control point two
     * @param           {number}  p2                                Control point three
     * @param           {number}  p3                                Control point four
     */
    constructor ( p0, p1, p2, p3 )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isNumber = VALIDATION.isNumber;

        this.p0 = p0;
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }

    ////    [ ONE ]     ////////////////////////////////////////

        /**
         * Set control point one
         * @public
         * @function
         * @param           {number} value                              Control point one
         */
        set p0 ( value )
        {
            this._p0 = ( this._isNumber ( value ) ) ? value : this._p0;
        }

        /**
         * Get control point one
         * @readOnly
         * @function
         * @return          {number}                                    Control point one
         */
        get p0 ( )
        {
            return this._p0;
        }

    ////    [ TWO ]     ////////////////////////////////////////

        /**
         * Set control point one
         * @public
         * @function
         * @param           {number} value                              Control point two
         */
        set p1 ( value )
        {
            this._p1 = ( this._isNumber ( value ) ) ? value : this._p1;
        }

        /**
         * Get control point one
         * @readOnly
         * @function
         * @return          {number}                                    Control point two
         */
        get p1 ( )
        {
            return this._p1;
        }

    ////    [ THREE ]     //////////////////////////////////////

        /**
         * Set control point one
         * @public
         * @function
         * @param           {number} value                              Control point three
         */
        set p2 ( value )
        {
            this._p2 = ( this._isNumber ( value ) ) ? value : this._p2;
        }

        /**
         * Get control point one
         * @readOnly
         * @function
         * @return          {number}                                    Control point three
         */
        get p2 ( )
        {
            return this._p2;
        }

    ////    [ FOUR ]     ////////////////////////////////////////

        /**
         * Set control point one
         * @public
         * @function
         * @param           {number} value                              Control point four
         */
        set p3 ( value )
        {
            this._p3 = ( this._isNumber ( value ) ) ? value : this._p3;
        }

        /**
         * Get control point one
         * @readOnly
         * @function
         * @return          {number}                                    Control point four
         */
        get p3 ( )
        {
            return this._p3;
        }

    ////    VALIDATION  ////////////////////////////////////////

        /**
         * Returns whether the passed value is a Number value
         * @private
         * @function
         * @param           {number} value                              Number value
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isNumber}
         */
        _isNumber ( ) { }
}
 
/**
 * @class           {Object} Font                               Font base class for text objects
 * @property        {string} type                               Font type or face; typography name
 * @property        {number} [size=24]                          Size of font; in pixels
 * @property        {string} [weight='normal']                  Weight of font
 * @property        {number} maxWidth                           Font's maximum width
 * @property        {Point}  offset                             Point offset coordinates
 */
class Font
{
    _type     = undefined;
    _size     = 24;
    _weight   = 'normal';
    _maxWidth = undefined;
    _offset   = new Point;

    #_options = {  weight: [ 'normal', 'bold', 'italic' ]  }

    ////    [ TYPE ]    ////////////////////////////////////

        /**
         * Set font type
         * @public
         * @function
         * @param           {string} value                              Type face; typography name
         */
        set type ( value )
        {
            this._type = ( typeof value === 'string' ) ? value : this._type;


            if ( value === undefined )

                if ( window.canvaslab instanceof canvasLab )
                {
                    let _regex = /(\w+(\s))?(?<size>\d+)px\s(?<type>\w.+)/;

                    let _font  = canvaslab.font;


                    this._type = ( _regex.test ( _font ) )

                                     ? _regex.exec ( _font ).groups [ 'type' ]

                                     : this._type;
                }
                else

                    console.warn ( 'canvaslab is not instantiated !' );
        }

        /**
         * Get type
         * @readOnly
         * @function
         * @return          {string}                                    Type face; typography name
         */
        get type ( )
        {
            return this._type;
        }

    ////    [ SIZE ]    ////////////////////////////////////

        /**
         * Set font size
         * @public
         * @function
         * @param           {number} value                              Font size
         */
        set size ( value )
        {
            this._size = ( typeof value === 'number'  ) ? value : this._size;
        }

        /**
         * Get font size
         * @readOnly
         * @function
         * @return          {number}                                    Font size
         */
        get size ( )
        {
            return this._size;
        }

    ////    [ WEIGHT ]  ////////////////////////////////////

        /**
         * Set font weight
         * @public
         * @function
         * @param           {number} value                              Font weight
         */
        set weight ( value )
        {
            let _currentValue = this._weight;


            for ( let _option of this.#_options.weight )
            {
                this._weight = ( value == _option ) ? value : this._weight;


                if ( this._weight != _currentValue ) break;
            }
        }

        /**
         * Get font weight
         * @readOnly
         * @function
         * @return          {number}                                    Font weight
         */
        get weight ( )
        {
            return this._weight;
        }

    ////    [ MAXWIDTH ]    ////////////////////////////////

        /**
         * Set font's max width
         * @public
         * @function
         * @param           {number} value                              Max width
         */
        set maxWidth ( value )
        {
            this._maxWidth = ( typeof value === 'number' ) ? value : this._maxWidth;
        }

        /**
         * Get font's max width
         * @readOnly
         * @function
         * @return          {number}                                    Max width
         */
        get maxWidth ( )
        {
            return this._maxWidth;
        }

    ////    [ OFFSET.(X)(Y) ]   ////////////////////////////

        /**
         * Get font's offset
         * @public
         * @function
         * @return          {Point}                                     Font's offset; ( x, y )
         */
        get offset ( )
        {
            return this._offset;
        }

    ////    & EXTEND &   ///////////////////////////////////

        /**
         * Set font
         * @public
         * @function
         * @param           {string} value                              CSS style font property syntax
         */
        set font ( value )
        {
            this.font = ( /(\w+(-\w+?)?|[1-9][0][0]?)(\s?)\d{1,3}px\s\w.+/.test ( value ) ) ? value : this.font;
        }

        /**
         * Get font
         * @readOnly
         * @function
         * @return          {string}                                    CSS style font property syntax
         */
        get font ( )
        {
            return `${this._weight} ${this._size}px ${this._type}`;
        }
}
 
/**
 * @class           {Object}  Point                             X & Y coordinates for an object
 * @property        {number}  [x=0]                             X - x-axis coordinate
 * @property        {number}  [y=0]                             Y - y-axis coordinate
 * @property        {Options} options                           Ancillary properties
 */
class Point
{
    _x = 0;
    _y = 0;

    _canvas = undefined;

    #_options = new Options;

    /**
     * Create a point
     * @param           {number} x                                  X coordinate value
     * @param           {number} y                                  Y coordinate value
     */
    constructor ( x, y )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isAspect = VALIDATION.isAspect;
            this._isInDom  = VALIDATION.isInDom;

            this._drawAxis   = UTILITIES.draw.axis;
            this._drawBorder = UTILITIES.draw.border;

            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.discrete.canvas );

            delete this.#_options._shadow;
            delete this.#_options._border;

        this.x = x;
        this.y = y;
    }

    ////    [ X ]   ////////////////////////////////////////

        /**
         * Set x-axis value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         */
        set x ( value )
        {
            this._x = (  ( typeof value === 'number' )  &&  !isNaN ( value )  ) ? value : this._x;
        }

        /**
         * Get x-axis value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         */
        get x ( )
        {
            return this._x;
        }

    ////    [ Y ]   ////////////////////////////////////////

        /**
         * Set the y-axis value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         */
        set y ( value )
        {
            this._y = (  ( typeof value === 'number' )  &&  !isNaN ( value )  ) ? value : this._y;
        }

        /**
         * Get y-axis value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         */
        get y ( )
        {
            return this._y;
        }

    ////    [ CANVAS ]  ////////////////////////////////////

        /**
         * Set canvas value
         * @public
         * @function
         * @param           {string} value                              Canvas id
         */
        set canvas ( value ) { }

        /**
         * Get canvas value
         * @readOnly
         * @function
         * @return          {string}                                     Canvas id
         */
        get canvas ( ) { }

    ////    [ OPTIONS ] ////////////////////////////////////

        /**
         * Get options
         * @public
         * @function
         * @return          {Options}                                   Options object
         */
        get options ( )
        {
            return this.#_options;
        }

    ////    & EXTEND &  ////////////////////////////////////

        /**
         * Get center of this object
         * @readOnly
         * @function
         * @return          {Point}                                     Center point coordinates
         */
        get center ( )
        {
            return new Point ( this.x, this.y );
        }

    ////    VALIDATION  ////////////////////////////////////

        _isAspect ( ) { }

        _isInDom  ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        _drawBorder ( ) { }

        _drawAxis   ( ) { }

        /**
         * Draws associated options
         * @public
         * @function
         * @param           {number} offset                             Offset of drawable options
         */
        drawOptions ( )
        {
            let _offset = 20;

            let _aspect = new Aspect ( _offset, _offset );

            ////////////////////////////////////////////////////////////////////

            this._drawBorder ( _aspect );

            this._drawAxis   ( );
        }

        /**
         * Invert x & y coordinate values
         * @public
         * @function
         */
        invert ( )
        {
            let _y = this.y;

            [ this.y, this.x ] = [ this.x, _y ];
        }
}
 
/**
 * @class           {Object} Stop                               Color stop properties for associated array(s)
 * @property        {number} offset                             Representation of the color stop position; 0 = start, & 1 = end
 * @property        {string} [color=<Rgb>]                      Color model & value
 */
class Stop
{
    _offset = undefined;
    _color  = new Rgb;

    /**
     * Create a color stop
     * @property        {number} offset                            Representation of the color stop position
     * @property        {string} color                             CSS color value
     */
    constructor ( offset, color )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isColorModel = VALIDATION.isColorModel;
            this._isDecimal    = VALIDATION.isDecimal;

        this.offset = offset;
        this.color  = color;
    }

    ////    [ OFFSET ]   ///////////////////////////////////

        /**
         * Set offset value
         * @public
         * @function
         * @param           {number} value                              Offset value
         */
        set offset ( value )
        {
            this._offset = ( this._isDecimal ( value ) ) ? value : this._offset;
        }

        /**
         * Get offset value
         * @readOnly
         * @function
         * @return          {number}                                    Offset value
         */
        get offset ( )
        {
            return this._offset;
        }

    ////    [ COLOR ]     //////////////////////////////////

        /**
         * Set color value
         * @public
         * @function
         * @param           {Object} value                              Color model; Rgb, Hsl, Hwb
         */
        set color ( value )
        {
            this._color = ( this._isColorModel ( value ) ) ? value : this._color;
        }

        /**
         * Get color value
         * @public
         * @function
         * @return          {Object}                                    Color model; Rgb, Hsl, Hwb
         */
        get color ( )
        {
            return this._color;
        }

    ////    VALIDATION  ////////////////////////////////////

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
         * Returns whether the passed value is a decimal value; 0.00 - 1
         * @private
         * @function
         * @param           {number} value                              Decimal value; 0.00 - 1
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isDecimal}
         */
        _isDecimal    ( ) { }
}
 
/**
 * @class           {Object} Conic                              Conic gradient object type and properties
 * @property        {Point}  point                              X & Y axis coordinates
 * @property        {number} angle                              Angle in radians
 * @property        {Array.<Stop>} stops                        Array of color stops
 */
class Conic
{
    _point = new Point;
    _angle = 0;
    _stops = new Array;

    /**
     * Create a Conic gradient object type
     * @property        {number} angle                              Angle in radians
     * @property        {Point}  point                              Starting point of linear gradient
     * @property        {Array.<Stop>} stops                        Array of color stops
     */
    constructor ( angle, point, stops )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isPoint  = VALIDATION.isPoint;
            this._isRadian = VALIDATION.isRadian;
            this._isStop   = VALIDATION.isStop;

            this._stopColorCycle = UTILITIES.color.cycle.stop;

        this.point = point;
        this.angle = angle;
        this.stops = stops;
    }

    ////    [ ANGLE ]     //////////////////////////////////

        /**
         * Set angle property
         * @public
         * @function
         * @param           {Angle} value                               Angle object
         */
        set angle ( value )
        {
            this._angle = ( this._isRadian ( value ) ) ? value : this._angle;
        }

        /**
         * Set angle property
         * @readOnly
         * @function
         * @return          {Angle}                                     Angle object
         */
        get angle ( )
        {
            return this._angle;
        }

    ////    [ START ]   ////////////////////////////////////

        /**
         * Set point
         * @public
         * @function
         * @param           {Point} value                               Point
         */
        set point ( value )
        {
            this._point = ( this._isPoint ( value ) ) ? value : this._point;
        }

        /**
         * Get point
         * @readOnly
         * @function
         * @return          {Point}                                     Point
         */
        get point ( )
        {
            return this._point;
        }

    ////    [ STOPS ]    ///////////////////////////////////

        /**
         * Set color stops
         * @public
         * @function
         * @param           {Array.<Stop>} values                       Color stops
         */
        set stops ( value )
        {
            if ( Array.isArray ( value ) )

                for ( let _stop of value )

                    if ( this._isStop ( _stop ) )

                        this._stops.push ( _stop );
            else

                console.warn ( '[ ERROR ]: value is not of type Array !' );
        }

        /**
         * Get color stops
         * @readOnly
         * @function
         * @return          {Array.<Stop>}                              Color stops
         */
        get stops ( )
        {
            return this._stops;
        }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isPoint}
         */
        _isPoint  ( ) { }

        /**
         * Returns whether the passed value is a radian; 0 - 6.28...
         * @private
         * @function
         * @param           {number} value                              Radian value; 0 - 6.28...
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isRadian}
         */
        _isRadian ( ) { }

        /**
         * Returns whether the passed value is a Stop or object equivalent
         * @private
         * @function
         * @param           {Object} value                              Stop or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isStop}
         */
        _isStop   ( ) { }

    ////    UTILITIES    ///////////////////////////////////

        /**
         * Cycle colors for gradient stop(s)
         * @private
         * @function
         * @param           {Object}   start                            Color model & values
         * @param           {Object}   end                              Color model & values
         * @param           {number}   progress                         Progress time unit; 0.00 - 1.00
         * @param           {number}   stop                             Color stop to cycle
         * @param           {number}   max                              Maximum number of steps between interpolation
         * @param           {function} clear                            Clear callback from root object
         * @param           {function} draw                             Draw callback from root object
         * @see             {@link Utilities.color.cycle.stop}
         */
        _stopColorCycle ( ) { }
}
 
/**
 * @class           {Object} Linear                             Linear gradient object type and properties
 * @property        {Point}  start                              X & Y axis coordinates (start)
 * @property        {Point}  end                                X & Y axis coordinates (end)
 * @property        {Array.<Stop>} stops                        Array of color stops
 */
class Linear
{
    _start = new Point;
    _end   = new Point;
    _stops = new Array;

    /**
     * Create a Linear gradient object type
     * @property        {Point} start                               Starting point of linear gradient
     * @property        {Point} end                                 Ending point of linear gradient
     * @property        {Array.<Stop>} stops                        Array of color stops
     */
    constructor ( start, end, stops )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isColorModel = VALIDATION.isColorModel;
            this._isPoint      = VALIDATION.isPoint;
            this._isStop       = VALIDATION.isStop;

            this._stopColorCycle = UTILITIES.color.cycle.stop;

        this.start = start;
        this.end   = end;
        this.stops = stops;
    }

    ////    [ START ]   ////////////////////////////////////

        /**
         * Set starting point
         * @public
         * @function
         * @param           {Point} value                               Starting point
         */
        set start ( value )
        {
            this._start = ( this._isPoint ( value ) ) ? value : this._start;
        }

        /**
         * Set starting point
         * @readOnly
         * @function
         * @return          {Point}                                     Starting point
         */
        get start ( )
        {
            return this._start;
        }

    ////    [ END ]     ////////////////////////////////////

        /**
         * Set ending point
         * @public
         * @function
         * @param           {Point} value                               Ending point
         */
        set end ( value )
        {
            this._end = ( this._isPoint ( value ) ) ? value : this._end;
        }

        /**
         * Set ending point
         * @readOnly
         * @function
         * @return          {Point}                                     Ending point
         */
        get end ( )
        {
            return this._end;
        }

    ////    [ STOPS ]    ///////////////////////////////////

        /**
         * Set color stops
         * @public
         * @function
         * @param           {Array.<Stop>} values                       Color stops
         */
        set stops ( value )
        {
            if ( Array.isArray ( value ) )

                for ( let _stop of value )

                    if ( this._isStop ( _stop ) )

                        this._stops.push ( _stop );
            else

                console.warn ( '[ ERROR ]: value is not of type Array !' );
        }

        /**
         * Get color stops
         * @readOnly
         * @function
         * @return          {Array.<Stop>}                              Color stops
         */
        get stops ( )
        {
            return this._stops;
        }

    ////    VALIDATION  ////////////////////////////////////

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
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isPoint}
         */
        _isPoint  ( ) { }

        /**
         * Returns whether the passed value is a Stop or object equivalent
         * @private
         * @function
         * @param           {Object} value                              Stop or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isStop}
         */
        _isStop   ( ) { }

    ////    UTILITIES    ///////////////////////////////////

        /**
         * Cycle colors for gradient stop(s)
         * @private
         * @function
         * @param           {Object}   start                            Color model & values
         * @param           {Object}   end                              Color model & values
         * @param           {number}   progress                         Progress time unit; 0.00 - 1.00
         * @param           {number}   stop                             Color stop to cycle
         * @param           {number}   max                              Maximum number of steps between interpolation
         * @param           {function} clear                            Clear callback from root object
         * @param           {function} draw                             Draw callback from root object
         * @see             {@link Utilities.color.cycle.stop}
         */
        _stopColorCycle ( ) { }
}
 
/**
 * @class           {Object} Radial                             Radial gradient object type and properties
 * @property        {Point}  start                              X & Y axis coordinates (start)
 * @property        {Number} startRadius                        Starting radius of linear gradient
 * @property        {Point}  end                                X & Y axis coordinates (end)
 * @property        {Number} endRadius                          Ending radius of linear gradient gradient
 * @property        {Array.<Stop>} stops                        Array of color stops
 */
class Radial
{
    _start       = new Point;
    _startRadius = 0;

    _end         = new Point;
    _endRadius   = 0;

    _stops       = new Array;

    /**
     * Create a Radial gradient object type and properties
     * @property        {Point}  start                              Starting point of linear gradient
     * @property        {Number} startRadius                        Starting radius of linear gradient gradient
     * @property        {Point}  end                                Ending point of linear gradient
     * @property        {Number} endRadius                          Ending radius of linear gradient gradient
     * @property        {Array.<Stop>} stops                        Array of color stops
     */
    constructor ( start, startRadius, end, endRadius, stops )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isPoint      = VALIDATION.isPoint;
            this._isStop       = VALIDATION.isStop;
            this._isColorModel = VALIDATION.isColorModel;
            this._isRadius     = VALIDATION.isRadius;

            this._stopColorCycle = UTILITIES.color.cycle.stop;

        this.start       = start;
        this.startRadius = startRadius;

        this.end         = end;
        this.endRadius   = endRadius;

        this.stops       = stops;
    }

    ////    [ START ]   ////////////////////////////////////

        /**
         * Set starting point
         * @public
         * @function
         * @param           {Point} value                               Starting point
         */
        set start ( value )
        {
            this._start = ( this._isPoint ( value ) ) ? value : this._start;
        }

        /**
         * Set starting point
         * @readOnly
         * @function
         * @return          {Point}                                     Starting point
         */
        get start ( )
        {
            return this._start;
        }

    ////    [ START RADIUS ]     ///////////////////////////

        /**
         * Set starting radius
         * @public
         * @function
         * @param           {Number} value                              Starting radius
         */
        set startRadius ( value )
        {
            this._startRadius = ( this._isRadius ( value ) ) ? value : this._startRadius;
        }

        /**
         * Set starting radius
         * @readOnly
         * @function
         * @return          {Number}                                    Starting radius
         */
        get startRadius ( )
        {
            return this._startRadius;
        }

    ////    [ END ]     ////////////////////////////////////

        /**
         * Set ending point
         * @public
         * @function
         * @param           {Point} value                               Ending point
         */
        set end ( value )
        {
            this._end = ( this._isPoint ( value ) ) ? value : this._end;
        }

        /**
         * Set ending point
         * @readOnly
         * @function
         * @return          {Point}                                     Ending point
         */
        get end ( )
        {
            return this._end;
        }

    ////    [ END RADIUS ]     /////////////////////////////

        /**
         * Set ending radius
         * @public
         * @function
         * @param           {Number} value                              Ending radius
         */
        set endRadius ( value )
        {
            this._endRadius = ( this._isRadius ( value ) ) ? value : this._endRadius;
        }

        /**
         * Set ending radius
         * @readOnly
         * @function
         * @return          {Number}                                    Ending radius
         */
        get endRadius ( )
        {
            return this._endRadius;
        }

    ////    [ STOPS ]    ///////////////////////////////////

        /**
         * Set color stops
         * @public
         * @function
         * @param           {Array.<Stop>} value                        Color stops
         */
        set stops ( value )
        {
            if ( Array.isArray ( value ) )

                for ( let _stop of value )

                    if ( this._isStop ( _stop ) )

                        this._stops.push ( _stop );
            else

                console.warn ( '[ ERROR ]: value is not of type Array !' );
        }

        /**
         * Get color stops
         * @readOnly
         * @function
         * @return          {Array.<Stop>}                              Color stops
         */
        get stops ( )
        {
            return this._stops;
        }

    ////    VALIDATION  ////////////////////////////////////

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
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isPoint}
         */
        _isPoint  ( ) { }

        /**
         * Returns whether the passed value is a radius value
         * @private
         * @function
         * @param           {number} value                              Radius value
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isRadius}
         */
        _isRadius ( ) { }

        /**
         * Returns whether the passed value is a Stop or object equivalent
         * @private
         * @function
         * @param           {Object} value                              Stop or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isStop}
         */
        _isStop   ( ) { }

    ////    UTILITIES    ///////////////////////////////////

        /**
         * Cycle colors for gradient stop(s)
         * @private
         * @function
         * @param           {Object}   start                            Color model & values
         * @param           {Object}   end                              Color model & values
         * @param           {number}   progress                         Progress time unit; 0.00 - 1.00
         * @param           {number}   stop                             Color stop to cycle
         * @param           {number}   max                              Maximum number of steps between interpolation
         * @param           {function} clear                            Clear callback from root object
         * @param           {function} draw                             Draw callback from root object
         * @see             {@link Utilities.color.cycle.stop}
         */
        _stopColorCycle ( ) { }
}
 
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
 
/**
 * @class           {Object} Shadow                             Shadow of associated object
 * @property        {Object} [color=<Rgb>]                      RGB color value; r, g, b
 * @property        {number} [blur=3]                           Blur strength
 * @property        {Point}  offset                             Point offset coordinates
 */
class Shadow
{
    _color  = new Rgb;
    _blur   = 3;
    _offset = new Point;

    /**
     * Create a shadow
     * @param           {Object} color                              RGB color value
     * @param           {number} blur                               Shadow blur value
     * @param           {Point}  offset                             Shadow offset
     */
    constructor ( color, blur, offset = { x: undefined, y: undefined } )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isColorModel = VALIDATION.isColorModel;
            this._isBlur       = VALIDATION.isBlur;
            this._isPoint      = VALIDATION.isPoint;

            Object.defineProperty ( this, 'offset', PROPERTY_BLOCKS.discrete.offset  );
            Object.defineProperty ( this, 'x',      PROPERTY_BLOCKS.discrete.offsetX );
            Object.defineProperty ( this, 'y',      PROPERTY_BLOCKS.discrete.offsetY );

        this.color  = color;
        this.blur   = blur;
        this.offset = offset;
    }

    ////    [ COLOR ]   ////////////////////////////////////

        /**
         * Set color value
         * @public
         * @function
         * @param           {Object} value                              Color model; Rgb, Hsl, Hwb
         */
        set color ( value )
        {
            this._color = ( this._isColorModel ( value ) ) ? value : this._color;
        }

        /**
         * Get color value
         * @public
         * @function
         * @return          {Object}                                    Color model; Rgb, Hsl, Hwb
         */
        get color ( )
        {
            return this._color;
        }

    ////    [ BLUR ]    ////////////////////////////////////

        /**
         * Set blur value
         * @public
         * @function
         * @param           {number} blur                               Blur value
         */
        set blur ( value )
        {
            this._blur = ( this._isBlur ( value ) ) ? value : this._blur;
        }

        /**
         * Get blur value
         * @readOnly
         * @function
         * @return          {number}                                    Blur value
         */
        get blur ( )
        {
            return this._blur;
        }

    ////    [ OFFSET.(X)(Y) ]   ////////////////////////////

        /**
         * Set offset
         * @public
         * @function
         * @param           {Point} value                               Shadow offset
         * @see             {@link discrete.offset}
         */
        set offset ( value ) { }

        /**
         * Get offset
         * @public
         * @function
         * @return          {Point}                                     Shadow offset
         * @see             {@link discrete.offset}
         */
        get offset ( ) { }


        /**
         * Set x-axis offset value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         * @see             {@link discrete.offsetX}
         */
        set x ( value ) { }

        /**
         * Get x-axis offset value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         * @see             {@link discrete.offsetX}
         */
        get x ( ) { }


        /**
         * Set the y-axis offset value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         * @see             {@link discrete.offsetY}
         */
        set y ( value ) { }

        /**
         * Get y-axis offset value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         * @see             {@link discrete.offsetY}
         */
        get y ( ) { }

    ////    VALIDATION  ////////////////////////////////////

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
         * Returns whether the passed value is a blur value
         * @private
         * @function
         * @param           {number} value                              Blur value
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isBlur}
         */
        _isBlur ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isPoint}
         */
        _isPoint ( ) { }
}
 
/**
 * @class           {Object}   Stroke                           Stroke properties of associated object
 * @property        {Object}   [color=<Rgb>]                    Color model & value
 * @property        {string}   [type='solid']                   Stroke type; solid | dashed
 * @property        {number[]} [segments=[5, 5]]                Dashed line segment distance(s)
 * @property        {number}   [width=2]                        Thickness of stroke
 * @property        {Shadow}   shadow                           Shadow properties
 */
class Stroke
{
    _color    = new Rgb;
    _type     = 'solid';
    _segments = [ 5, 5 ];
    _width    = 1;

    /**
     * Create a stroke
     * @param           {Object}   color                            RGB color value
     * @param           {number}   type                             Stroke type
     * @param           {number[]} segments                         Dashed line segment distance(s)
     * @param           {number}   alpha                            Alpha value; number/decimal
     * @param           {number}   width                            Thickness of stroke
     */
    constructor ( color, type, segments, width )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isColorModel = VALIDATION.isColorModel;
            this._isStrokeType = VALIDATION.isStrokeType;
            this._isSegments   = VALIDATION.isSegments;
            this._isWidth      = VALIDATION.isWidth;

        this.color    = color;
        this.type     = type;
        this.segments = segments;
        this.width    = width;
    }

    ////    [ TYPE ]    ////////////////////////////////////

        /**
         * Set type
         * @public
         * @function
         * @param           {number} value                              Type: (0) Solid or (1) Dashed
         */
        set type ( value )
        {
            this._type = ( this._isStrokeType ( value ) ) ? value : this._type;
        }

        /**
         * Get type
         * @readOnly
         * @function
         * @return          {number}                                    Type: (0) Solid or (1) Dashed
         */
        get type ( )
        {
            return this._type;
        }

    ////    [ SEGMENTS ]    ////////////////////////////////

        /**
         * Set segment value
         * @public
         * @function
         * @param           {Array} value                               Dashed line segment distance(s)
         */
        set segments ( value )
        {
            ( this._isSegments ( value ) ) ? [ this._segments, this._type ] = [ value,          'dashed' ]

                                           : [ this._segments, this._type ] = [ this._segments, 'solid'   ];
        }

        /**
         * Get segment value
         * @readOnly
         * @function
         * @return          {Array}                                     Dashed line segment distance(s)
         */
        get segments ( )
        {
            return this._segments;
        }

    ////    [ COLOR ]   ////////////////////////////////////

        /**
         * Set color value
         * @public
         * @function
         * @param           {Object} value                              Color model; Rgb
         */
        set color ( value )
        {
            this._color = ( this._isColorModel ( value ) ) ? value : this._color;
        }

        /**
         * Get color value
         * @public
         * @function
         * @return          {Object}                                    Color model; Rgb
         */
        get color ( )
        {
            return this._color;
        }

    ////    [ WIDTH ]   ////////////////////////////////////

        /**
         * Set width value
         * @public
         * @function
         * @param           {number} value                              Thickness of stroke
         */
        set width ( value )
        {
            this._width = ( this._isWidth ( value ) ) ? value : this._width;
        }

        /**
         * Get width value
         * @readOnly
         * @function
         * @return          {number}                                    Thickness of stroke
         */
        get width ( )
        {
            return this._width;
        }

    ////    VALIDATION  ////////////////////////////////////

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
         * Returns whether the passed value is an Array of segment values
         * @private
         * @function
         * @param           {Array.<number>} value                      Array of segment values
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isSegments}
         */
        _isSegments   ( ) { }

        /**
         * Returns whether the passed value is a stroke type
         * @private
         * @function
         * @param           {string} value                              Stroke type
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isStrokeType}
         */
        _isStrokeType ( ) { }

        /**
         * Returns whether the passed value is a width value
         * @private
         * @function
         * @param           {number} value                              Width value
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isWidth}
         */
        _isWidth      ( ) { }
}
 
/**
 * @class           {Object}  OptionsCollection                 Options for shapes, lines, and groups
 * @property        {boolean} [shadow=false]                    Display shadow
 * @property        {boolean} [border=false]                    Display border
 * @property        {boolean} [axis=false]                      Display axis
 * @property        {boolean} [points=false]                    Display points
 * @property        {boolean} [coordinates=false]               Display coordinates
 * @property        {boolean} [controlPoints=false]             Display control points
 * @property        {boolean} [shadow=false]                    Display shadow
 */
class OptionsCollection
{
    _shadow        = false;
    _border        = false;
    _axis          = false;
    _points        = false;
    _coordinates   = false;
    _controlPoints = false;

    // _master = undefined;

    /**
     * Create an options collection
     * @param           {boolean} shadow                            Show shadow
     * @param           {boolean} border                            Show border
     * @param           {boolean} axis                              Show axis
     * @param           {boolean} points                            Show points
     * @param           {boolean} coordinates                       Show coordinates
     */
    constructor ( shadow, border, axis, points, coordinates )
    {
        ////    COMPOSITION     ////////////////////////////

            this._setAll = UTILITIES.set.all;

        this.shadow      = shadow;
        this.border      = border;
        this.axis        = axis;
        this.points      = points;
        this.coordinates = coordinates;
    }

    ////    [ SHADOW ]  ////////////////////////////////////

        /**
         * Set shadow value
         * @public
         * @function
         * @param           {boolean} value                             Shadow; true | false
         */
        set shadow ( value )
        {
            if ( typeof value === 'boolean' )  this._setAll ( 'shadow', value );
        }

        /**
         * Get shadow value
         * @readOnly
         * @function
         * @return          {boolean}                                   Shadow; true | false
         */
        get shadow ( )
        {
            return this._shadow;
        }

    ////    [ BORDER ]  ////////////////////////////////////

        /**
         * Set border value
         * @public
         * @function
         * @param           {boolean} value                             Border; true | false
         */
        set border ( value )
        {
            if ( typeof value === 'boolean' )  this._setAll ( 'border', value );
        }

        /**
         * Get border value
         * @readOnly
         * @function
         * @return          {boolean}                                   Border; true | false
         */
        get border ( )
        {
            return this._border;
        }

    ////    [ AXIS ]    ////////////////////////////////////

        /**
         * Set axis value
         * @public
         * @function
         * @param           {boolean} value                             Axis; true | false
         */
        set axis ( value )
        {
            if ( typeof value === 'boolean' )  this._setAll ( 'axis', value );
        }

        /**
         * Get axis value
         * @readOnly
         * @function
         * @return          {boolean}                                   Axis; true | false
         */
        get axis ( )
        {
            return this._axis;
        }

    ////    [ COORDINATES ]     ////////////////////////////

        /**
         * Set coordinates value
         * @public
         * @function
         * @param           {boolean} value                             Coordinates; true | false
         */
        set coordinates ( value )
        {
            if ( typeof value === 'boolean' )  this._setAll ( 'coordinates', value );
        }

        /**
         * Get coordinates value
         * @readOnly
         * @function
         * @return          {boolean}                                   Coordinates; true | false
         */
        get coordinates ( )
        {
            return this._coordinates;
        }

    ////    [ CONTROL POINTS ]  ////////////////////////////

        /**
         * Set control points value
         * @public
         * @function
         * @param           {boolean} value                             Control points; true | false
         */
        set controlPoints ( value )
        {
            if ( typeof value === 'boolean' )  this._setAll ( 'controlPoints', value );
        }

        /**
         * Get control points value
         * @readOnly
         * @function
         * @return          {boolean}                                   Control points; true | false
         */
        get controlPoints ( )
        {
            return this._controlPoints;
        }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Sets all option values throughout a collection
         * @private
         * @function
         * @param           {string}  property                          Option property
         * @param           {boolean} value                             True || False
         * @see             {@link Utilities.set.all}
         */
        _setAll ( ) { }
}
 
/**
 * @class           {Object}  PointCollection                   X & Y coordinates for an object
 * @property        {number}  [x=0]                             X - x-axis coordinate
 * @property        {number}  [y=0]                             Y - y-axis coordinate
 * @property        {OptionsCollection} options                 Ancillary properties
 */
class PointCollection
{
    _x = 0;
    _y = 0;

    #_options = new OptionsCollection;

    /**
     * Create a point collection
     */
    constructor ( )
    {
        ////    COMPOSITION     ////////////////////////////

            this._setAll = UTILITIES.set.all;

            delete this.#_options._shadow;
            delete this.#_options._border;
    }

    ////    [ X ]   ////////////////////////////////////////

        /**
         * Set x-axis value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         */
        set x ( value )
        {
            if ( typeof value === 'number' )  this._setAll ( 'x', value );
        }

        /**
         * Get x-axis value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         */
        get x ( )
        {
            return this._x;
        }

    ////    [ Y ]   ////////////////////////////////////////

        /**
         * Set the y-axis value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         */
        set y ( value )
        {
            if ( typeof value === 'number' )  this._setAll ( 'y', value );
        }

        /**
         * Get y-axis value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         */
        get y ( )
        {
            return this._y;
        }

    ////    [ OPTIONS ] ////////////////////////////////////

        /**
         * Get options
         * @public
         * @function
         * @return          {OptionsCollection}                         Options collection object
         */
        get options ( )
        {
            return this.#_options;
        }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Sets all option values throughout a collection
         * @private
         * @function
         * @param           {string}  property                          Option property
         * @param           {boolean} value                             True || False
         * @see             {@link Utilities.set.all}
         */
        _setAll ( ) { }

        /**
         * Invert x & y coordinate values
         * @public
         * @function
         */
        invert ( )
        {
            let _y = this.y;

            [ this.y, this.x ] = [ this.x, _y ];
        }
}
 
/**
 * @class           {Object} ShadowCollection                   Shadow of associated object
 * @property        {Object} [color=<Rgb>]                      Color model & value
 * @property        {number} blur                               Blur strength
 * @property        {Point}  offset                             Point offset coordinates
 */
class ShadowCollection
{
    _color  = new Rgb;
    _blur   = 3;
    _offset = new Point;

    /**
     * Create a shadow collection
     */
    constructor ( )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isColorModel = VALIDATION.isColorModel;
            this._isBlur       = VALIDATION.isBlur;
            this._isPoint      = VALIDATION.isPoint;

            this._setAll = UTILITIES.set.all;
    }

    ////    [ COLOR ]   ////////////////////////////////////

        /**
         * Set color value
         * @public
         * @function
         * @param           {string} value                              RGB color value
         */
        set color ( value )
        {
            if ( this._isColorModel ( value ) )  this._setAll ( 'color', value );
        }

        /**
         * Get color value
         * @public
         * @function
         * @return          {string}                                    RGB color value
         */
        get color ( )
        {
            return this._color;
        }

    ////    [ BLUR ]    ////////////////////////////////////

        /**
         * Set blur value
         * @public
         * @function
         * @param           {number} blur                               Blur value
         */
        set blur ( value )
        {
            if ( this._isBlur ( value ) )  this._setAll ( 'blur', value );
        }

        /**
         * Get blur value
         * @readOnly
         * @function
         * @return          {number}                                    Blur value
         */
        get blur ( )
        {
            return this._blur;
        }

    ////    [ OFFSET.(X)(Y) ]   ////////////////////////////

        /**
         * Set offset
         * @public
         * @function
         * @param           {Point} value                               Shadow offset
         */
        set offset ( value )
        {
            if ( this._isPoint ( value ) )  this._setAll ( 'offset', value );
        }

        /**
         * Get offset
         * @public
         * @function
         * @return          {Point}                                     Shadow offset
         */
        get offset ( )
        {
            return this._offset;
        }


        /**
         * Set x-axis offset value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         */
        set x ( value ) { this._offset.x = value; }

        /**
         * Get x-axis offset value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         */
        get x ( )       { return this._offset.x;  }


        /**
         * Set the y-axis offset value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         */
        set y ( value ) { this._offset.y = value; }

        /**
         * Get y-axis offset value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         */
        get y ( )       { return this._offset.y;  }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is a blur value
         * @private
         * @function
         * @param           {number} value                              Blur value
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isBlur}
         */
        _isBlur  ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isPoint}
         */
        _isPoint ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Sets all option values throughout a collection
         * @private
         * @function
         * @param           {string}  property                          Option property
         * @param           {boolean} value                             True || False
         * @see             {@link Utilities.set.all}
         */
        _setAll ( ) { }
}
 
/**
 * @class           {Object}   StrokeCollection                 Stroke properties of associated object
 * @property        {Object}   [color=<Rgb>]                    Color model & value
 * @property        {string}   [type='solid']                   Stroke type; solid | dashed
 * @property        {number[]} [segments=[5, 5]]                Dashed line segment distance(s)
 * @property        {number}   [alpha=1]                        Alpha (transparency); number/decimal
 * @property        {number}   [width=2]                        Thickness of stroke
 * @property        {Shadow}   shadow                           Shadow properties
 */
class StrokeCollection
{
    _color    = new Rgb;
    _type     = 'solid';
    _segments = [ 5, 5 ];
    _width    = 2;

    _master   = undefined;

    /**
     * Create a stroke collection
     */
    constructor ( )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isColorModel = VALIDATION.isColorModel;
            this._isStrokeType = VALIDATION.isStrokeType;
            this._isSegments   = VALIDATION.isSegments;
            this._isWidth      = VALIDATION.isWidth;

            this._setAll = UTILITIES.set.all;
    }

    ////    [ COLOR ]   ////////////////////////////////////

        /**
         * Set color value
         * @public
         * @function
         * @param           {string} value                              RGB color value
         */
        set color ( value )
        {
            if ( this._isColorModel ( value ) ) this._setAll ( 'color', value );
        }

        /**
         * Get color value
         * @public
         * @function
         * @return          {string}                                    RGB color value
         */
        get color ( )
        {
            return this._color;
        }

    ////    [ TYPE ]    ////////////////////////////////////

        /**
         * Set type
         * @public
         * @function
         * @param           {number} value                              Type: (0) Solid or (1) Dashed
         */
        set type ( value )
        {
            if ( this._isStrokeType ( value ) ) this._setAll ( 'type', value );
        }

        /**
         * Get type
         * @readOnly
         * @function
         * @return          {number}                                    Type: (0) Solid or (1) Dashed
         */
        get type ( )
        {
            return this._type;
        }

    ////    [ SEGMENTS ]    ////////////////////////////////

        /**
         * Set segment value
         * @public
         * @function
         * @param           {Array} value                               Dashed line segment distance(s)
         */
        set segments ( value )
        {
            if ( this._isSegments ( value ) ) this._setAll ( 'segments', value );
        }

        /**
         * Get segment value
         * @readOnly
         * @function
         * @return          {Array}                                     Dashed line segment distance(s)
         */
        get segments ( )
        {
            return this._segments;
        }

    ////    [ WIDTH ]   ////////////////////////////////////

        /**
         * Set width value
         * @public
         * @function
         * @param           {number} value                              Thickness of stroke
         */
        set width ( value )
        {
            if ( this._isWidth ( value ) ) this._setAll ( 'width', value );
        }

        /**
         * Get width value
         * @readOnly
         * @function
         * @return          {number}                                    Thickness of stroke
         */
        get width ( )
        {
            return this._width;
        }

    ////    [ MASTER ]  ////////////////////////////////////

        /**
         * Set master object
         * @public
         * @function
         */
        set master ( value )
        {
            this._master = ( typeof value === 'object' ) ? value

                                                         : console.error ( `[ERROR] "${ value.constructor.name }", is not a valid type !` );
        }

    ////    VALIDATION  ////////////////////////////////////

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
         * Returns whether the passed value is an Array of segment values
         * @private
         * @function
         * @param           {Array.<number>} value                      Array of segment values
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isSegments}
         */
        _isSegments   ( ) { }

        /**
         * Returns whether the passed value is a stroke type
         * @private
         * @function
         * @param           {string} value                              Stroke type
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isStrokeType}
         */
        _isStrokeType ( ) { }

        /**
         * Returns whether the passed value is a width value
         * @private
         * @function
         * @param           {number} value                              Width value
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isWidth}
         */
        _isWidth      ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Sets all option values throughout a collection
         * @private
         * @function
         * @param           {string}  property                          Option property
         * @param           {boolean} value                             True || False
         * @see             {@link Utilities.set.all}
         */
        _setAll ( ) { }
}
 
/**
 * @class           {Object} Circle                             Circle object
 * @property        {Point}  point                              X & Y axis coordinates
 * @property        {number} [radius=25]                        Radius of circle
 * @property        {Angle}  angle                              Angle properties
 * @property        {Stroke} stroke                             Stroke properties
 * @property        {Fill}   fill                               Fill properties
 * @property        {Shadow} shadow                             Shadow properties
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 */
class Circle
{
    _point  = new Point;
    _radius = 25;
    _angle  = new Angle;
    _stroke = new Stroke;
    _fill   = new Fill;
    _shadow = new Shadow;

    _canvas = undefined;

    #_anchor  = new Anchor;
    #_options = new Options;

    /**
     * Create a Circle object
     * @property        {Point}  point                              X & Y axis coordinates
     * @property        {number} radius                             Radius of circle
     * @property        {Angle}  angle                              Angle properties
     * @property        {Stroke} stroke                             Stroke properties
     * @property        {Fill}   fill                               Fill properties
     * @property        {Shadow} shadow                             Shadow properties
     * @property        {HTMLCanvasElement} canvas                  Canvas Id
     */
    constructor (
                    point  = { x: undefined, y: undefined },
                    radius,
                    angle  = { start: undefined, end:   undefined, clockwise:   undefined },
                    stroke = { color: undefined, type:  undefined, segments:    undefined, width: undefined },
                    fill   = { color: undefined, type:  undefined },
                    shadow = { color: undefined, blur:  undefined, offset: { x: undefined, y:     undefined } },
                    canvas = undefined
                )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isAspect = VALIDATION.isAspect;
            this._isAnchor = VALIDATION.isAnchor;
            this._isDegree = VALIDATION.isDegree;
            this._isInDom  = VALIDATION.isInDom;
            this._isPoint  = VALIDATION.isPoint;

            this._clearCanvas       = UTILITIES.misc.clearCanvas;
            this._drawAxis          = UTILITIES.draw.axis;
            this._drawBorder        = UTILITIES.draw.border;
            this._rotatePoint       = UTILITIES.misc.rotatePoint;
            this._setFillType       = UTILITIES.set.fillType;
            this._setShadow         = UTILITIES.set.shadow;
            this.strokeColorCycle   = UTILITIES.color.cycle.stroke;
            this.fillColorCycle     = UTILITIES.color.cycle.fill;
            this.gradientColorCycle = UTILITIES.color.cycle.gradient;

            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.discrete.canvas );
            Object.defineProperty ( this, 'point',  PROPERTY_BLOCKS.discrete.point  );
            Object.defineProperty ( this, 'x',      PROPERTY_BLOCKS.discrete.pointX );
            Object.defineProperty ( this, 'y',      PROPERTY_BLOCKS.discrete.pointY );

            delete this.#_options._controlPoints;
            delete this.#_options._points;
            delete this.#_options._master;

        this.point  = point;
        this.radius = radius;

        ////    OBJECT INITIALIZER(S)   ////////////////////

            this._angle  = new Angle  ( angle.start, angle.end, angle.clockwise );

            this._stroke = new Stroke ( stroke.color, stroke.type, stroke.segments, stroke.width );

            this._fill   = new Fill   ( fill.color,   fill.type );

            this._shadow = new Shadow ( shadow.color, shadow.blur, { x: shadow.offset.x, y: shadow.offset.y } );

        this.canvas = canvas;

        ////    ANCILLARY   ////////////////////////////////

            this.#_options.shadow = ( shadow.offset.x != undefined && shadow.offset.y != undefined );
    }

    ////    [ POINT ]   ////////////////////////////////////

        /**
         * Set point
         * @public
         * @function
         * @param           {Point} value                               X & Y coordinates
         * @see             {@link discrete.point}
         */
        set point ( value ) { }

        /**
         * Get point
         * @public
         * @function
         * @return          {Point}                                     X & Y coordinates
         * @see             {@link discrete.point}
         */
        get point ( ) { }


        /**
         * Set x-axis value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         * @see             {@link discrete.pointX}
         */
        set x ( value ) { }

        /**
         * Get x-axis value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         * @see             {@link discrete.pointX}
         */
        get x ( ) { }


        /**
         * Set the y-axis value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         * @see             {@link discrete.pointY}
         */
        set y ( value ) { }

        /**
         * Get y-axis value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         * @see             {@link discrete.pointY}
         */
        get y ( ) { }

    ////    [ RADIUS ]  ////////////////////////////////////

        /**
         * Set radius value
         * @public
         * @function
         * @param           {number} value                              Radius of circle
         */
        set radius ( value )
        {
            this._radius = ( typeof value === 'number' && value > 0 ) ? value : this._radius;
        }

        /**
         * Get radius value
         * @readOnly
         * @function
         * @return          {number}                                    Radius of circle
         */
        get radius ( )
        {
            return this._radius;
        }

    ////    [ ANGLE ]   ////////////////////////////////////

        /**
         * Get angle properties
         * @public
         * @function
         * @return          {Angle}                                     Angle properties
         */
        get angle ( )
        {
            return this._angle;
        }

    ////    [ STROKE ]  ////////////////////////////////////

        /**
         * Get stroke properties
         * @public
         * @function
         * @return          {Stroke}                                    Stroke properties
         */
        get stroke ( )
        {
            return this._stroke;
        }

    ////    [ FILL ]    ////////////////////////////////////

        /**
         * Get fill properties
         * @public
         * @function
         * @return          {Fill}                                      Fill properties
         */
        get fill ( )
        {
            return this._fill;
        }

    ////    [ SHADOW ]  ////////////////////////////////////

        /**
         * Get shadow properties
         * @public
         * @function
         * @return          {Shadow}                                    Shadow properties
         */
        get shadow ( )
        {
            return this._shadow;
        }

    ////    [ CANVAS ]  ////////////////////////////////////

        /**
         * Set canvas value
         * @public
         * @function
         * @param           {string} value                              Canvas id
         * @see             {@link discrete.canvas}
         */
        set canvas ( value ) { }

        /**
         * Get canvas value
         * @readOnly
         * @function
         * @return          {string}                                    Canvas id
         * @see             {@link discrete.canvas}
         */
        get canvas ( ) { }

    ////    [ ANCHOR ]  ////////////////////////////////////

        /**
         * Get anchor
         * @public
         * @function
         * @return          {Anchor}                                    Anchor properties
         */
        get anchor ( )
        {
            return this.#_anchor;
        }

    ////    [ OPTIONS ] ////////////////////////////////////

        /**
         * Get options properties
         * @public
         * @function
         * @return          {Options}                                   Options properties
         */
        get options ( )
        {
            return this.#_options;
        }

    ////    & EXTEND &  ////////////////////////////////////

        /**
         * Get area of this object
         * @readOnly
         * @function
         * @return          {number}                                    Area of circle
         */
        get area ( )
        {
            return (  Math.PI * Math.pow ( this.radius, 2 )  );
        }

        /**
         * Get diameter of circle
         * @readOnly
         * @function
         * @return          {number}                                    Diameter of circle
         */
        get diameter ( )
        {
            return (  this.radius * 2  );
        }

        /**
         * Get center of this object
         * @readOnly
         * @function
         * @return          {Point}                                     Point coordinates
         */
        get center ( )
        {
            this._setAnchorPoint ( );


            let _x = this.x - ( this.x - this.anchor.x );

            let _y = this.y - ( this.y - this.anchor.y );


            return new Point ( _x, _y );
        }

        /**
         * Get circumference of circle
         * @readOnly
         * @function
         * @return          {number}                                    Circumference of circle
         */
        get circumference ( )
        {
            return (  Math.PI * this.diameter ( )  );
        }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is an Anchor alignment
         * @private
         * @function
         * @param           {string} value                              Anchor alignment
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isAnchor}
         */
        _isAnchor ( ) { }

        /**
         * Returns whether the passed value is an Aspect
         * @private
         * @function
         * @param           {Object} value                              Aspect or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isAspect}
         */
        _isAspect ( ) { }

        /**
         * Returns whether the passed value is a degree
         * @private
         * @function
         * @param           {number} value                              Degree
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isDegree}
         */
        _isDegree ( ) { }

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isInDom}
         */
        _isInDom  ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isPoint}
         */
        _isPoint  ( ) { }

        /**
         * Check whether the passed object is already present
         * @public
         * @function
         * @param           {Circle} circle                             Object to validate
         * @return          {boolean}                                   True || False
         */
        isThere ( circle )
        {
            if ( circle instanceof this.constructor )

                return (
                           ( this.point.x == circle.point.x ) &&                // Point X

                           ( this.point.y == circle.point.y ) &&                // Point Y

                           ( this.radius  == circle.radius  )                   // Radius

                       ) ? true : false;

            else

                console.warn ( `"${circle.constructor.name}" is not of type ${this.constructor.name}` );
        }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Clears canvas
         * @private
         * @function
         * @param           {boolean} value                             Whether to redraw background
         * @see             {@link Utilities.misc.clearCanvas}
         */
        _clearCanvas ( ) { }

        /**
         * Draws anchor point
         * @private
         * @function
         */
        _drawAnchor ( )
        {
            let _anchor = new Rectangle ( new Point ( this.x, this.y ), new Aspect ( 5, 5 ) );

                _anchor.fill.color = new Rgb ( 255, 0, 0 );

                _anchor.canvas     = this.canvas;


                _anchor.draw ( );
        }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {number} offset                             Offset of axis
         * @param           {Object} color                              Color model
         * @param           {number} stop                               Gradient color stop
         * @see             {@link Utilities.draw.axis}
         */
        _drawAxis    ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {Aspect} aspect                             Aspect properties
         * @param           {Object} color                              Color model
         * @see             {@link Utilities.draw.border}
         */
        _drawBorder  ( ) { }

        /**
         * Draws associated options
         * @private
         * @function
         */
        _drawOptions ( )
        {
            let _offset = this.radius + 20;

            let _aspect = new Aspect ( ( this.radius ) + ( _offset ), ( this.radius ) + ( _offset ) );

            ////////////////////////////////////////////////////////////////////

            if ( this.#_options.border      ) this._drawBorder     ( _aspect );

            if ( this.#_options.axis        ) this._drawAxis       ( _offset );

            if ( this.#_options.anchor      ) this._drawAnchor     ( );

            if ( this.#_options.coordinates ) this.showCoordinates ( );
        }

        /**
         * Rotates the origin point by the degree & distance passed
         * @private
         * @function
         * @param           {Point}  origin                             Origin point
         * @param           {number} degree                             Degree to rotate
         * @param           {number} distance                           Distance from origin
         * @see             {@link Utilities.misc.rotatePoint}
         */
        _rotatePoint ( ) { }

        /**
         * Sets anchor's point against this object's point location
         * @private
         * @function
         */
        _setAnchorPoint ( )
        {
            [ this.#_anchor.x, this.#_anchor.y ] = [ this.x, this.y ];


            switch ( this.anchor.type )
            {
                case 'center':      /*     ... do nothing      */   /*     ... do nothing      */   break;

                case 'top':         /*     ... do nothing      */   this.anchor.y += this.radius;   break;

                case 'topRight':    this.anchor.x -= this.radius;   this.anchor.y += this.radius;   break;

                case 'right':       this.anchor.x -= this.radius;   /*     ... do nothing      */   break;

                case 'bottomRight': this.anchor.x -= this.radius;   this.anchor.y -= this.radius;   break;

                case 'bottom':      /*     ... do nothing      */   this.anchor.y -= this.radius;   break;

                case 'bottomLeft':  this.anchor.x += this.radius;   this.anchor.y -= this.radius;   break;

                case 'left':        this.anchor.x += this.radius;   /*     ... do nothing      */   break;

                case 'topLeft':     this.anchor.x += this.radius;   this.anchor.y += this.radius;   break;
            }
        }

        /**
         * Sets fill type of the associated object
         * @private
         * @function
         * @see             {@link Utilities.set.fillType}
         */
        _setFillType ( ) { }

        /**
         * Sets shadow properties
         * @private
         * @function
         * @see             {@link Utilities.set.shadow}
         */
        _setShadow   ( ) { }

        /**
         * Cycle colors for fill
         * @public
         * @function
         * @param           {number} progress                           Progress time unit between; 0.00 - 1.00
         * @param           {Rgb}    start                              Starting RGB value
         * @param           {Rgb}    end                                Ending RGB value
         * @param           {number} [max=1]                            Maximum increments
         * @see             {@link Utilities.color.cycle.fill}
         */
        fillColorCycle     ( ) { }

        /**
         * Cycle colors for gradient
         * @public
         * @function
         * @param           {number} progress                           Progress time unit between; 0.00 - 1.00
         * @param           {Rgb}    start                              Starting RGB value
         * @param           {Rgb}    end                                Ending RGB value
         * @param           {number} stop                               Gradient color stop
         * @param           {number} [max=1]                            Maximum increments
         * @see             {@link Utilities.color.cycle.gradient}
         */
        gradientColorCycle ( ) { }

        /**
         * Move this object
         * @public
         * @function
         * @param           {number}  degree                            Direction to move; in degrees
         * @param           {number}  distance                          Distance to move
         * @param           {boolean} [clear=true]                      Clear canvas during each movement
         */
        move ( degree, distance, clear = false )
        {
            let _point = this._rotatePoint ( { x: this.x, y: this.y }, degree, distance );


                [ this.x, this.y ] = [ _point.x, _point.y ];


            this._clearCanvas ( clear );

            this.draw    ( );
        }

        /**
         * Rotate this object
         * @public
         * @function
         * @param           {number} degree                             Distance to rotate; in degrees
         * @param           {number} [clear=true]                       Clear canvas during each rotation
         */
        rotate ( degree, clear = true )
        {
            if ( this._isDegree ( degree ) )
            {
                let [ _x, _y ] = [ this.x, this.y ];


                this._canvas.save      ( );

                this._canvas.translate ( _x, _y );

                this._canvas.rotate    ( ( degree % 360 ) * Math.PI / 180 );

                this._canvas.translate ( -_x, -_y );


                this._clearCanvas ( clear );

                this.draw    ( );


                this._canvas.restore ( );
            }
        }

        /**
         * Shows coordinates of this object
         * @public
         * @function
         * @param           {number} [offset=10]                        Offset of coordinates y origin
         * @param           {number} [fontSize=16]                      Coordinates font size
         */
        showCoordinates ( offset = 10, fontSize = 16 )
        {
            let _text  = new Text ( this.point, `( ${this.x}, ${this.y} )` );

                _text.canvas         =  this.canvas;

                _text.size           =  fontSize;

                _text.options.shadow =  false;

                _text.offset.y       =  ( offset / 2 );


                _text.options.shadow = true;


                _text.shadow.color   = new Rgb ( 255, 255, 255 );

                _text.shadow.blur    = 1;

                _text.shadow.x       = _text.shadow.y    = 1;


                _text.draw ( );
        }

        /**
         * Cycle colors for stroke
         * @public
         * @function
         * @param           {Rgb}    start                              Starting RGB value
         * @param           {Rgb}    end                                Ending RGB value
         * @param           {number} progress                           Progress time unit; 0.00 - 1.00
         * @param           {number} [max=1]                            Maximum increments
         * @see             {@link Utilities.color.cycle.stroke}
         */
        strokeColorCycle ( ) { }

    ////    DRAW    ////////////////////////////////////////

        /**
         * Draw this object
         * @public
         * @function
         * @param           {string} canvas                             Canvas Id
         */
        draw ( canvas )
        {
            if ( canvas != undefined ) this.canvas = canvas;


            if ( this._canvas instanceof CanvasRenderingContext2D )
            {
                this._setAnchorPoint ( );


                if ( this.#_options.shadow ) this._setShadow ( );                                   // Set: shadow


                this._canvas.strokeStyle = this.stroke.color.toCss ( );

                this._setFillType ( );

                this._canvas.lineWidth   = this.stroke.width;

                ////////////////////////////////////////////////////////////////

                this._canvas.setLineDash ( ( this.stroke.type === 'solid' ) ? new Array : this.stroke.segments );

                this._canvas.beginPath   ( );

                this._canvas.arc         ( this.anchor.x, this.anchor.y, this.radius, this.angle.startInRadians, this.angle.endInRadians, ( this.angle.clockwise ) ? false : true );

                this._canvas.stroke      ( );

                this._canvas.fill        ( );


                if ( this.#_options.shadow ) this._canvas.shadowColor = new Rgb ( 0, 0, 0, 0 ).toCss ( );         // Reset: shadow


                this._drawOptions ( );
            }
            else

                console.warn ( `'canvas' property is not set for ${this.constructor.name} !` );
        }

        /**
         * Redraw this object
         * @public
         * @function
         * @param           {string}  canvas                            Canvas Id
         * @param           {Point}   point                             Point of new location
         * @param           {boolean} [clear=true]                      Clear canvas during each redraw
         */
        redraw ( canvas, point = { x: undefined, y: undefined }, clear = true )
        {
            [ this.x, this.y ] = [ point.x, point.y ]


            this._clearCanvas ( clear );


            this.draw ( canvas );
        }
}
 
/**
 * @class           {Object} Line                               Line object
 * @property        {Point}  start                              X & Y axis coordinates (start)
 * @property        {Point}  end                                X & Y axis coordinates (end)
 * @property        {Stroke} stroke                             Stroke properties
 * @property        {Shadow} shadow                             Shadow properties
 * @property        {string} [lineCap='round']                  Shape of end points
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 */
class Line
{
    _start   = new Point;
    _end     = new Point;
    _stroke  = new Stroke;
    _shadow  = new Shadow;

    _lineCap = 'round';

    _canvas  = undefined;

    #_options       = new Options;
    #_controlPoints = new ControlPoints;

    /**
     * Create a Line object
     * @property        {Point}  start                              Starting point of line
     * @property        {Point}  end                                Ending point of line
     * @property        {Stroke} stroke                             Stroke properties
     * @property        {Shadow} shadow                             Shadow properties
     * @property        {string} lineCap                            Shape of end points
     * @property        {string} canvas                             Canvas Id
     */
    constructor (
                    start   = { x:     undefined, y:    undefined },
                    end     = { x:     undefined, y:    undefined },
                    stroke  = { color: undefined, type: undefined, segments:    undefined, width: undefined },
                    shadow  = { color: undefined, blur: undefined, offset: { x: undefined, y:     undefined } },
                    lineCap = undefined,
                    canvas
                )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isAspect = VALIDATION.isAspect;
            this._isDegree = VALIDATION.isDegree;
            this._isInDom  = VALIDATION.isInDom;
            this._isNumber = VALIDATION.isNumber;
            this._isPoint  = VALIDATION.isPoint;

            this._drawAxis        = UTILITIES.draw.axis;
            this._drawBorder      = UTILITIES.draw.border;
            this._rotatePoint     = UTILITIES.misc.rotatePoint;
            this._clearCanvas     = UTILITIES.misc.clearCanvas;
            this._setShadow       = UTILITIES.set.shadow;
            this.strokeColorCycle = UTILITIES.color.cycle.stroke;

            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.discrete.canvas );

        ////    POINT OVERLOADING   ////////////////////////

            if ( start != undefined )                           // Start
            {
                if ( this._isPoint ( start ) )  [ this.start.x, this.end.x ] = [ start.x, end.x ];


                if ( this._isNumber ( start ) )
                {
                    let _height = ( start / 2 );

                    this.start.y = end.y - _height;
                    this.end.y   = end.y + _height;

                    this.start.x = this.end.x = end.x;
                }
            }


            if ( end != undefined )                             // End
            {
                if ( this._isPoint ( end ) )  [ this.start.y, this.end.y ] = [ start.y, end.y ];


                if ( this._isNumber ( end ) )
                {
                    let _width = ( end / 2 );

                    this.start.x = start.x - _width
                    this.end.x   = start.x + _width;

                    this.start.y = this.end.y = start.y;
                }
            }

        ////    OBJECT INITIALIZER(S)   ////////////////////

            this._stroke = new Stroke ( stroke.color, stroke.type, stroke.segments, stroke.width );

            this._shadow = new Shadow ( shadow.color, shadow.blur, { x: shadow.offset.x, y: shadow.offset.y } );

        this.lineCap = lineCap;
        this.canvas  = canvas;

        ////    ANCILLARY   ////////////////////////////////

            this.#_options.shadow      = ( shadow.offset.x != undefined && shadow.offset.y != undefined );
            this.#_options.master      = this;

            this._start.options.master = this;
              this._end.options.master = this;


            Object.defineProperty ( this.#_options, "points",
            {
                set ( value )
                {
                    this._points = ( typeof value === 'boolean' ) ? value : this.#_options.points;


                    this._master._start.options.points = value;

                      this._master._end.options.points = value;
                },
                get ( )
                {
                    return this._points;
                }
            } );
    }

    ////    [ START ]   ////////////////////////////////////

        /**
         * Set starting point
         * @public
         * @function
         * @param           {Point} value                               Starting point
         */
        set start ( value )
        {
            this._start = ( this._isPoint ( value ) ) ? value : this._start;
        }

        /**
         * Set starting point
         * @public
         * @function
         * @return          {Point}                                     Starting point
         */
        get start ( )
        {
            return this._start;
        }

    ////    [ END ]     ////////////////////////////////////

        /**
         * Set ending point
         * @public
         * @function
         * @param           {Point} value                               Ending point
         */
        set end ( value )
        {
            this._end = ( this._isPoint ( value ) ) ? value : this._end;
        }

        /**
         * Set ending point
         * @public
         * @function
         * @return          {Point}                                     Ending point
         */
        get end ( )
        {
            return this._end;
        }

    ////    [ STROKE ]  ////////////////////////////////////

        /**
         * Get stroke properties
         * @public
         * @function
         * @return          {Stroke}                                    Stroke properties
         */
        get stroke ( )
        {
            return this._stroke;
        }

    ////    [ SHADOW ]  ////////////////////////////////////

        /**
         * Get shadow properties
         * @public
         * @function
         * @return          {Shadow}                                    Shadow properties
         */
        get shadow ( )
        {
            return this._shadow;
        }

    ////    [ LINECAP ] ////////////////////////////////////

        /**
         * Set line cap
         * @public
         * @function
         * @param           {string} value                              Line cap
         */
        set lineCap ( value )
        {
            this._lineCap = ( value === 'butt' || value === 'round' || value === 'square' ) ? value : this._lineCap;
        }

        /**
         * Get line cap
         * @readOnly
         * @function
         * @return          {string}                                    Line cap
         */
        get lineCap ( )
        {
            return this._lineCap;
        }

    ////    [ CANVAS ]  ////////////////////////////////////

        /**
         * Set canvas value
         * @public
         * @function
         * @param           {string} value                              Canvas id
         * @see             {@link discrete.canvas}
         */
        set canvas ( value ) { }

        /**
         * Get canvas value
         * @readOnly
         * @function
         * @return          {string}                                    Canvas id
         * @see             {@link discrete.canvas}
         */
        get canvas ( ) { }

    ////    [ OPTIONS ] ////////////////////////////////////

        /**
         * Get options properties
         * @public
         * @function
         * @return          {Options}                                   Options properties
         */
        get options ( )
        {
            return this.#_options;
        }

    ////    [ CONTROL POINTS ]  ////////////////////////////

        /**
         * Get control point properties
         * @public
         * @function
         * @return          {ControlPoints}                             Control points properties
         */
        get controlPoints ( )
        {
            return this.#_controlPoints;
        }

    ////    & EXTEND &  ////////////////////////////////////

        /**
         * Get center of this object
         * @readOnly
         * @function
         * @return          {Point}                                     Center point coordinates
         */
        get center ( )
        {
            let _x = ( this.start.x > this.end.x )

                         ? this.end.x   + (  ( this.start.x - this.end.x   ) / 2  )

                         : this.start.x + (  ( this.end.x   - this.start.x ) / 2  );

            let _y = ( this.start.y > this.end.y )

                         ? this.end.y   + (  ( this.start.y - this.end.y   ) / 2  )

                         : this.start.y + (  ( this.end.y   - this.start.y ) / 2  );


            return new Point ( _x, _y );
        }

    ////    ( PRIVATE ) ////////////////////////////////////

        /**
         * Set line's path
         * @protected
         * @function
         */
        #_setPath ( )
        {
            if ( this.controlPoints.p0 != 0 || this.controlPoints.p1 != 0 || this.controlPoints.p2 != 0 || this.controlPoints.p3 != 0 )

                this._canvas.bezierCurveTo ( this.controlPoints.p0 + this.start.x, this.controlPoints.p1 + this.start.y,
                                             this.controlPoints.p2 + this.end.x,   this.controlPoints.p3 + this.end.y,
                                             this.end.x,                           this.end.y );

            else

                this._canvas.lineTo ( this.end.x, this.end.y );
        }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is an Aspect
         * @private
         * @function
         * @param           {Object} value                              Aspect or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isAspect}
         */
        _isAspect ( ) { }

        /**
         * Returns whether the passed value is a degree
         * @private
         * @function
         * @param           {number} value                              Degree
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isDegree}
         */
        _isDegree ( ) { }

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isInDom}
         */
        _isInDom  ( ) { }

        /**
         * Returns whether the passed value is a Number value
         * @private
         * @function
         * @param           {number} value                              Number value
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isNumber}
         */
        _isNumber ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isPoint}
         */
        _isPoint  ( ) { }

        /**
         * Check whether the passed object is already present
         * @public
         * @function
         * @param           {Line} line                                 Object to validate
         */
        isThere ( line )
        {
            if ( line instanceof this.constructor )
            {
                let _toString  = ( valueA, valueB ) => `${valueA} ${valueB}`;


                let _thisStart = _toString ( this.start.x, this.start.y ), _thisEnd = _toString ( this.end.x, this.end.y );

                let _lineStart = _toString ( line.start.x, line.start.y ), _lineEnd = _toString ( line.end.x, line.end.y );


                return (  ( _thisStart == _lineStart )  &&  ( _thisEnd == _lineEnd )  )

                           ? true

                           : (  ( _thisStart == _lineEnd )  &&  ( _thisEnd == _lineStart )  );
            }
            else

                console.warn ( `"${line.constructor.name}" is not of type ${this.constructor.name}` );
        }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Clears canvas
         * @private
         * @function
         * @param           {boolean} value                             Whether to redraw background
         * @see             {@link Utilities.misc.clearCanvas}
         */
        _clearCanvas ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {number} offset                             Offset of axis
         * @param           {Object} color                              Color model
         * @param           {number} stop                               Gradient color stop
         * @see             {@link Utilities.draw.axis}
         */
        _drawAxis    ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {Aspect} aspect                             Aspect properties
         * @param           {Object} color                              Color model
         * @see             {@link Utilities.draw.border}
         */
        _drawBorder  ( ) { }

        /**
         * Draws associated options
         * @private
         * @function
         */
        _drawOptions ( )
        {
            let _offset = 20;

            let _aspect = new Aspect ( ( this.end.x - this.start.x ) + ( _offset ),

                                       ( this.end.y - this.start.y ) + ( _offset ) );

            ////////////////////////////////////////////////////////////////////

            if ( this.#_options.border        ) this._drawBorder       ( _aspect );

            if ( this.#_options.axis          ) this._drawAxis         ( );

            if ( this.#_options.points        ) this.drawPoints        ( );

            if ( this.#_options.coordinates   ) this.showCoordinates   ( );

            if ( this.#_options.controlPoints ) this.showControlPoints ( );
        }

        /**
         * Rotates the origin point by the degree & distance passed
         * @private
         * @function
         * @param           {Point}  origin                             Origin point
         * @param           {number} degree                             Degree to rotate
         * @param           {number} distance                           Distance from origin
         * @see             {@link Utilities.misc.rotatePoint}
         */
        _rotatePoint ( ) { }

        /**
         * Sets shadow properties
         * @private
         * @function
         * @see             {@link Utilities.set.shadow}
         */
        _setShadow   ( ) { }

        /**
         * Set control points for bezier curve
         * @public
         * @function
         * @param           {number} p0                                 Control point 0
         * @param           {number} p1                                 Control point 1
         * @param           {number} p2                                 Control point 2
         * @param           {number} p3                                 Control point 3
         */
        curve ( p0, p1, p2, p3 )
        {
            this.controlPoints.p0 = p0;

            this.controlPoints.p1 = p1;

            this.controlPoints.p2 = p2;

            this.controlPoints.p3 = p3;
        }

        /**
         * Draws start & end points
         * @public
         * @function
         */
        drawPoints ( )
        {
            this._start.drawOptions ( );

              this._end.drawOptions ( );
        }

        /**
         * Cycle colors for fill
         * @public
         * @function
         * @param           {number} progress                           Progress time unit between; 0.00 - 1.00
         * @param           {Rgb}    start                              Starting RGB value
         * @param           {Rgb}    end                                Ending RGB value
         * @param           {number} [max=1]                            Maximum increments
         * @see             {@link Utilities.color.cycle.fill}
         */
        fillColorCycle ( ) { }

        /**
         * Move this object
         * @public
         * @function
         * @param           {number}  degree                            Direction to move; in degrees
         * @param           {number}  distance                          Distance to move
         * @param           {boolean} [clear=true]                      Clear canvas during each movement
         */
        move ( degree, distance, clear = true )
        {
            let _pointStart = this._rotatePoint ( { x: this.start.x, y: this.start.y }, degree, distance );

            let _pointEnd   = this._rotatePoint ( { x: this.end.x,   y: this.end.y   }, degree, distance );


                [ this.start.x, this.start.y ] = [ _pointStart.x, _pointStart.y ];

                [ this.end.x,   this.end.y   ] = [ _pointEnd.x,   _pointEnd.y   ];


            this._clearCanvas ( clear );


            this.draw ( );
        }

        /**
         * Rotate this object
         * @public
         * @function
         * @param           {number} degree                             Distance to rotate; in degrees
         * @param           {string} [anchor='center']                  Anchoring point during rotation
         * @param           {number} [clear=true]                       Clear canvas during each rotation
         */
        rotate ( degree, anchor = 'center', clear = true )
        {
            if ( this._isDegree ( degree ) )
            {
                let _point = new Point ( );


                switch ( anchor )
                {
                    case 'start':   [ _point.x, _point.y ] = [ this.start.x, this.start.y ];  break;

                    case 'end':     [ _point.x, _point.y ] = [ this.end.x,   this.end.y   ];  break;

                    case 'center':

                        [ _point.x, _point.y ] = [ ( ( this.start.x + this.end.x ) * 0.5 ), ( ( this.start.y + this.end.y ) * 0.5 ) ];

                        break;

                    default:

                        console.warn ( `"${anchor}" is not a valid 'anchor' variable !` );
                }


                this._canvas.save      ( );

                this._canvas.translate (   _point.x,   _point.y );

                this._canvas.rotate    ( ( degree % 360 ) * Math.PI / 180 );

                this._canvas.translate ( - _point.x, - _point.y );


                this._clearCanvas ( clear );


                this.draw ( );


                this._canvas.restore   ( );
            }
        }

        /**
         * Show control points for this object
         * @public
         * @function
         * @param           {number} [offset=10]                        Offset of control points y origin
         * @param           {number} [fontSize=16]                      Control points font size
         */
        showControlPoints ( offset = 10, fontSize = 16 )
        {
            let _point0 = new Point ( this.start.x,                         this.start.y                         );

            let _point1 = new Point ( this.controlPoints.p0 + this.start.x, this.controlPoints.p1 + this.start.y );

            let _point2 = new Point ( this.controlPoints.p2 + this.end.x,   this.controlPoints.p3 + this.end.y   );

            let _point3 = new Point ( this.end.x,                           this.end.y                           );


            let _textStart  = new Text ( _point1.x, _point1.y, `( ${this.#_controlPoints.p0}, ${this.#_controlPoints.p1} )` );

            let _textEnd    = new Text ( _point2.x, _point2.y, `( ${this.#_controlPoints.p3}, ${this.#_controlPoints.p4} )` );


                _textStart.canvas         = _textEnd.canvas         = this.canvas;

                _textStart.size           = _textEnd.size           = fontSize;

                _textStart.offset.y       = _textEnd.offset.y       = - ( offset * 2 );

                _textStart.stroke.color   = _textEnd.stroke.color   = new Rgb ( 255, 0, 0 );


                _textStart.options.shadow = _textEnd.options.shadow = true;


                _textStart.shadow.color   = _textEnd.shadow.color   = new Rgb ( 255, 255, 255 );

                _textStart.shadow.blur    = _textEnd.shadow.blur    = 1;

                _textStart.shadow.x       = _textEnd.shadow.x       = _textStart.shadow.y    = _textEnd.shadow.y    = 1;


                _textStart.draw ( );

                  _textEnd.draw ( );

            ////////////////////////////////////////////////////////////////////////////////////////

            let _red   = new Rgb ( 255, 0, 0 );

            let _blue  = new Rgb ( 0, 0, 255 );

            let _green = new Rgb ( 0, 255, 0 );


            let _lineSegments = [ 2, 4 ];


            let _lineA = new Line ( _point0, _point1 );

            let _lineB = new Line ( _point2, _point3 );

            let _lineC = new Line ( _point1, _point2 );


            let _lines = new Lines ( _lineA, _lineB, _lineC );


                _lineA.stroke.type     = _lineB.stroke.type     = _lineC.stroke.type     = 1;

                _lineA.stroke.segments = _lineB.stroke.segments = _lineC.stroke.segments = _lineSegments;

                _lineA.canvas          = _lineB.canvas          = _lineC.canvas          = this.canvas;


                [ _lineA.stroke.color, _lineB.stroke.color, _lineC.stroke.color ] = [ _red, _blue, _green ];


                _lineA.draw ( );

                _lineB.draw ( );

                _lineC.draw ( );


            let _circleA = new Circle ( _point1 );

            let _circleB = new Circle ( _point2 );


                _circleA.radius             = _circleB.radius             = 3;

                _circleA.stroke.color.alpha = _circleB.stroke.color.alpha = 0;

                _circleA.canvas             = _circleB.canvas             = this.canvas;


                [ _circleA.fill.color, _circleB.fill.color ]  = [ _red, _blue ];


                _circleA.draw ( );

                _circleB.draw ( );
        }

        /**
         * Shows coordinates of this object
         * @public
         * @function
         * @param           {number} [offset=10]                        Offset of coordinates y origin
         * @param           {number} [fontSize=16]                      Coordinates font size
         */
        showCoordinates ( offset = 10, fontSize = 16 )
        {
            let _textStart  = new Text ( this.start, `( ${this.start.x}, ${this.start.y} )` );

            let _textEnd    = new Text ( this.end,   `( ${this.end.x}, ${this.end.y} )`     );


                _textStart.canvas         = _textEnd.canvas         = this.canvas;

                _textStart.size           = _textEnd.size           = fontSize;

                _textStart.options.shadow = _textEnd.options.shadow = false;

                _textStart.offset.y       = _textEnd.offset.y       = - ( offset * 2 );


                _textStart.options.shadow = _textEnd.options.shadow = true;


                _textStart.shadow.color   = _textEnd.shadow.color   = new Rgb ( 255, 255, 255 );

                _textStart.shadow.blur    = _textEnd.shadow.blur    = 1;

                _textStart.shadow.x       = _textEnd.shadow.x       = _textStart.shadow.y    = _textEnd.shadow.y    = 1;


                _textStart.draw ( );

                  _textEnd.draw ( );
        }

        /**
         * Cycle colors for stroke
         * @public
         * @function
         * @param           {Rgb}    start                              Starting RGB value
         * @param           {Rgb}    end                                Ending RGB value
         * @param           {number} progress                           Progress time unit; 0.00 - 1.00
         * @param           {number} [max=1]                            Maximum increments
         * @see             {@link Utilities.color.cycle.stroke}
         */
        strokeColorCycle ( ) { }

    ////    DRAW    ////////////////////////////////////////

        /**
         * Draw this object
         * @public
         * @function
         * @param           {string} canvas                             Canvas Id
         */
        draw ( canvas )
        {
            if ( canvas != undefined ) this.canvas = canvas;


            if ( this._canvas instanceof CanvasRenderingContext2D )
            {
                let _straddle = 0.5;


                if ( this.#_options.shadow ) this._setShadow ( );                                   // Set: shadow


                this._canvas.strokeStyle = this.stroke.color.toCss ( );

                this._canvas.lineCap     = this.lineCap;

                this._canvas.lineWidth   = this.stroke.width;

                ////////////////////////////////////////////////////////////////

                this._canvas.setLineDash ( ( this.stroke.type === 'solid' ) ? new Array : this.stroke.segments );

                this._canvas.beginPath   ( );

                this._canvas.moveTo      ( this.start.x + _straddle, this.start.y + _straddle );


                this.#_setPath ( );


                this._canvas.stroke    ( );


                if ( this.#_options.shadow ) this._canvas.shadowColor = new Rgb ( 0, 0, 0, 0 ).toCss ( );   // Reset: shadow


                this._drawOptions ( );
            }
            else

                console.warn ( `'canvas' property is not set for ${this.constructor.name} !` );
        }

        /**
         * Redraw this object
         * @public
         * @function
         * @param           {string}  canvas                            Canvas Id
         * @param           {Point}   start                             Point of new start location
         * @param           {Point}   end                               Point of new end location
         * @param           {boolean} clear                             Clear canvas during each redraw
         */
        redraw ( canvas, start = { x: undefined, y: undefined }, end = { x: undefined, y: undefined }, clear = true )
        {
            [ this.start.x, this.start.y ] = [ start.x, start.y ];

            [ this.end.x,   this.end.y   ] = [ end.x,   end.y   ];


            this._clearCanvas ( clear );


            this.draw ( canvas );
        }
}
 
/**
 * @class           {Object} Rectangle                          Rectangle object
 * @property        {Point}  point                              X & Y axis coordinates
 * @property        {Aspect} aspect                             Aspect properties
 * @property        {Stroke} stroke                             Stroke properties
 * @property        {Fill}   fill                               Fill properties
 * @property        {Shadow} shadow                             Shadow properties
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 */
class Rectangle
{
    _point  = new Point;
    _aspect = new Aspect;
    _stroke = new Stroke;
    _fill   = new Fill;
    _shadow = new Shadow;

    _canvas = undefined;

    #_anchor  = new Anchor;
    #_options = new Options;

    /**
     * Create a Rectangle object
     * @property        {Point}  point                              X & Y axis coordinates
     * @property        {Aspect} aspect                             Aspect properties
     * @property        {Stroke} stroke                             Stroke properties
     * @property        {Fill}   fill                               Fill properties
     * @property        {Shadow} shadow                             Shadow properties
     * @property        {string} canvas                             Canvas Id
     */
    constructor (
                    point  = { x:     undefined, y:      undefined },
                    aspect = { width: undefined, height: undefined },
                    stroke = { color: undefined, type:   undefined, segments:    undefined, width: undefined },
                    fill   = { color: undefined, type:   undefined },
                    shadow = { color: undefined, blur:   undefined, offset: { x: undefined, y:     undefined } },
                    canvas
                )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isAspect = VALIDATION.isAspect;
            this._isDegree = VALIDATION.isDegree;
            this._isInDom  = VALIDATION.isInDom;
            this._isPoint  = VALIDATION.isPoint;

            this._clearCanvas       = UTILITIES.misc.clearCanvas;
            this._drawAxis          = UTILITIES.draw.axis;
            this._drawBorder        = UTILITIES.draw.border;
            this._rotatePoint       = UTILITIES.misc.rotatePoint;

            this._setFillType       = UTILITIES.set.fillType;
            this._setShadow         = UTILITIES.set.shadow;
            this.fillColorCycle     = UTILITIES.color.cycle.fill;
            this.gradientColorCycle = UTILITIES.color.cycle.gradient;
            this.strokeColorCycle   = UTILITIES.color.cycle.stroke;

            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.discrete.canvas );
            Object.defineProperty ( this, 'point',  PROPERTY_BLOCKS.discrete.point  );
            Object.defineProperty ( this, 'x',      PROPERTY_BLOCKS.discrete.pointX );
            Object.defineProperty ( this, 'y',      PROPERTY_BLOCKS.discrete.pointY );

            delete this.#_options._controlPoints;
            delete this.#_options._points;
            delete this.#_options._master;

        this.point  = point;

        this.width  = ( aspect.width  != undefined ) ? aspect.width  : 50;
        this.height = ( aspect.height != undefined ) ? aspect.height : 50;

        ////    OBJECT INITIALIZER(S)   ////////////////////

            this._stroke = new Stroke ( stroke.color, stroke.type,  stroke.segments, stroke.width );

            this._fill   = new Fill   ( fill.color,   fill.type );

            this._shadow = new Shadow ( shadow.color, shadow.blur, { x: shadow.offset.x, y: shadow.offset.y } );

        this.canvas = canvas;

        ////    ANCILLARY   ////////////////////////////////

            this.#_options.shadow = ( shadow.offset.x != undefined && shadow.offset.y != undefined );
    }

    ////    [ POINT ]   ////////////////////////////////////

        /**
         * Set point
         * @public
         * @function
         * @param           {Point} value                               X & Y coordinates
         * @see             {@link discrete.point}
         */
        set point ( value ) { }

        /**
         * Get point
         * @public
         * @function
         * @return          {Point}                                     X & Y coordinates
         * @see             {@link discrete.point}
         */
        get point ( ) { }


        /**
         * Set x-axis value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         * @see             {@link discrete.pointX}
         */
        set x ( value ) { }

        /**
         * Get x-axis value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         * @see             {@link discrete.pointX}
         */
        get x ( ) { }


        /**
         * Set the y-axis value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         * @see             {@link discrete.pointY}
         */
        set y ( value ) { }

        /**
         * Get y-axis value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         * @see             {@link discrete.pointY}
         */
        get y ( ) { }

    ////    [ ASPECT ]  ////////////////////////////////////

        /**
         * Set aspect properties
         * @public
         * @function
         * @param           {Aspect} value                              Aspect properties
         */
        set aspect ( value )
        {
            this._aspect = ( this._isAspect ( value ) ) ? value : this._aspect;
        }

        /**
         * Get aspect properties
         * @readOnly
         * @function
         * @return          {Aspect}                                    Aspect properties
         */
        get aspect ( )
        {
            return this._aspect;
        }


        /**
         * Set aspect width
         * @public
         * @function
         * @param           {number} value                              Width value
         */
        set width  ( value )
        {
            this._aspect.width = ( typeof value === 'number' && value > 0 ) ? value : this._aspect._width;
        }

        /**
         * Get aspect with
         * @readOnly
         * @function
         * @return          {number}                                    Width value
         */
        get width  ( )
        {
            return this._aspect.width;
        }


        /**
         * Set aspect height
         * @public
         * @function
         * @param           {number} value                              Height value
         */
        set height ( value )
        {
            this._aspect.height = ( typeof value === 'number' && value > 0 ) ? value : this._aspect._height;
        }

        /**
         * Get aspect height
         * @readOnly
         * @function
         * @return          {number}                                    Height value
         */
        get height ( )
        {
            return this._aspect.height;
        }

    ////    [ STROKE ]  ////////////////////////////////////

        /**
         * Get stroke properties
         * @public
         * @function
         * @return          {Stroke}                                    Stroke properties
         */
        get stroke ( )
        {
            return this._stroke;
        }

    ////    [ FILL ]    ////////////////////////////////////

        /**
         * Get fill properties
         * @public
         * @function
         * @return          {Fill}                                      Fill properties
         */
        get fill ( )
        {
            return this._fill;
        }

    ////    [ SHADOW ]  ////////////////////////////////////

        /**
         * Get shadow properties
         * @public
         * @function
         * @return          {Shadow}                                    Shadow properties
         */
        get shadow ( )
        {
            return this._shadow;
        }

    ////    [ CANVAS ]  ////////////////////////////////////

        /**
         * Set canvas value
         * @public
         * @function
         * @param           {string} value                              Canvas id
         * @see             {@link discrete.canvas}
         */
        set canvas ( value ) { }

        /**
         * Get canvas value
         * @readOnly
         * @function
         * @return          {string}                                    Canvas id
         * @see             {@link discrete.canvas}
         */
        get canvas ( ) { }

    ////    [ ANCHOR ]  ////////////////////////////////////

        /**
         * Get anchor
         * @public
         * @function
         * @return          {Anchor}                                    Anchor properties
         */
        get anchor ( )
        {
            return this.#_anchor;
        }

    ////    [ OPTIONS ] ////////////////////////////////////

        /**
         * Get options properties
         * @public
         * @function
         * @return          {Options}                                   Options properties
         */
        get options ( )
        {
            return this.#_options;
        }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is an Aspect
         * @private
         * @function
         * @param           {Object} value                              Aspect or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isAspect}
         */
        _isAspect ( ) { }

        /**
         * Returns whether the passed value is a degree
         * @private
         * @function
         * @param           {number} value                              Degree
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isDegree}
         */
        _isDegree ( ) { }

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isInDom}
         */
        _isInDom  ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isPoint}
         */
        _isPoint  ( ) { }

        /**
         * Check whether the passed object is already present
         * @public
         * @function
         * @param           {Rectangle} rectangle                       Object to validate
         */
        isThere ( rectangle )
        {
            if ( rectangle instanceof this.constructor )

                return (
                           ( this.x      == rectangle.x      ) &&               // Point X

                           ( this.y      == rectangle.y      ) &&               // Point Y

                           ( this.width  == rectangle.width  ) &&               // Width

                           ( this.height == rectangle.height )                  // Height

                       ) ? true : false;

            else

                console.warn ( `"${rectangle.constructor.name}" is not of type ${this.constructor.name}` );
        }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Clears canvas
         * @private
         * @function
         * @param           {boolean} value                             Whether to redraw background
         * @see             {@link Utilities.misc.clearCanvas}
         */
        _clearCanvas ( ) { }

        /**
         * Draws anchor point
         * @private
         * @function
         */
        _drawAnchor ( )
        {
            let _anchor = new Rectangle ( new Point ( this.x, this.y ), new Aspect ( 5, 5 ) );

                _anchor.fill.color = new Rgb ( 255, 0, 0 );

                _anchor.canvas     = this.canvas;


                _anchor.draw ( );
        }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {number} offset                             Offset of axis
         * @param           {Object} color                              Color model
         * @param           {number} stop                               Gradient color stop
         * @see             {@link Utilities.draw.axis}
         */
        _drawAxis    ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {Aspect} aspect                             Aspect properties
         * @param           {Object} color                              Color model
         * @see             {@link Utilities.draw.border}
         */
        _drawBorder  ( ) { }

        /**
         * Draws associated options
         * @private
         * @function
         */
        _drawOptions ( )
        {
            let _offset = 20;

            let _aspect = new Aspect ( this.width + _offset, this.height + _offset );

            ////////////////////////////////////////////////////////////////////

            if ( this.#_options.border ) this._drawBorder ( _aspect );

            if ( this.#_options.axis   ) this._drawAxis   ( );

            if ( this.#_options.anchor ) this._drawAnchor ( );
        }

        /**
         * Rotates the origin point by the degree & distance passed
         * @private
         * @function
         * @param           {Point}  origin                             Origin point
         * @param           {number} degree                             Degree to rotate
         * @param           {number} distance                           Distance from origin
         * @see             {@link Utilities.misc.rotatePoint}
         */
        _rotatePoint ( ) { }

        /**
         * Sets anchor's point against this object's point location
         * @private
         * @function
         */
        _setAnchorPoint ( )
        {
            [ this.#_anchor.x, this.#_anchor.y ] = [ this.x, this.y ];


            switch ( this.anchor.align )
            {
                case 'center':       this.anchor.x -= this.width  / 2;   this.anchor.y -= this.height / 2;  break;

                case 'top':          this.anchor.x -= this.width  / 2;   /*       ... do nothing        */  break;

                case 'topRight':     this.anchor.x -= this.width;        /*       ... do nothing        */  break;

                case 'right':        this.anchor.x -= this.width;        this.anchor.y -= this.height / 2;  break;

                case 'bottomRight':  this.anchor.x -= this.width;        this.anchor.y -= this.height;      break;

                case 'bottom':       this.anchor.x -= this.width  / 2;   this.anchor.y -= this.height;      break;

                case 'bottomLeft':   /*       ... do nothing        */   this.anchor.y -= this.height;      break;

                case 'left':         /*       ... do nothing        */   this.anchor.y -= this.height / 2;  break;

                case 'topLeft':      /*       ... do nothing        */   /*       ... do nothing        */  break;
            }
        }

        /**
         * Sets fill type of the associated object
         * @private
         * @function
         * @see             {@link Utilities.set.fillType}
         */
        _setFillType ( ) { }

        /**
         * Sets shadow properties
         * @private
         * @function
         * @see             {@link Utilities.set.shadow}
         */
        _setShadow   ( ) { }

        /**
         * Cycle colors for fill
         * @public
         * @function
         * @param           {number} progress                           Progress time unit between; 0.00 - 1.00
         * @param           {Rgb}    start                              Starting RGB value
         * @param           {Rgb}    end                                Ending RGB value
         * @param           {number} [max=1]                            Maximum increments
         * @see             {@link Utilities.color.cycle.fill}
         */
        fillColorCycle     ( ) { }

        /**
         * Cycle colors for gradient
         * @public
         * @function
         * @param           {number} progress                           Progress time unit between; 0.00 - 1.00
         * @param           {Rgb}    start                              Starting RGB value
         * @param           {Rgb}    end                                Ending RGB value
         * @param           {number} stop                               Gradient color stop
         * @param           {number} [max=1]                            Maximum increments
         * @see             {@link Utilities.color.cycle.gradient}
         */
        gradientColorCycle ( ) { }

        /**
         * Move this object
         * @public
         * @function
         * @param           {number}  degree                            Direction to move; in degrees
         * @param           {number}  distance                          Distance to move
         * @param           {boolean} [clear=true]                      Clear canvas during each movement
         */
        move ( degree, distance, clear = true )
        {
            let _point = this._rotatePoint ( { x: this.x, y: this.y }, degree, distance );


                [ this.x, this.y ] = [ _point.x, _point.y ];


            this._clearCanvas ( clear );

            this.draw ( );
        }

        /**
         * Rotate this object
         * @public
         * @function
         * @param           {number} degree                             Distance to rotate; in degrees
         * @param           {number} [clear=true]                       Clear canvas during each rotation
         */
        rotate ( degree, clear = true )
        {
            if ( this._isDegree ( degree ) )
            {
                let [ _x, _y ] = [ this.x, this.y ];


                this._canvas.save      ( );

                this._canvas.translate ( _x, _y );

                this._canvas.rotate    ( ( degree % 360 ) * Math.PI / 180 );

                this._canvas.translate ( -_x, -_y );


                this._clearCanvas ( clear );

                this.draw ( );


                this._canvas.restore ( );
            }
        }

        /**
         * Cycle colors for stroke
         * @public
         * @function
         * @param           {Rgb}    start                              Starting RGB value
         * @param           {Rgb}    end                                Ending RGB value
         * @param           {number} progress                           Progress time unit; 0.00 - 1.00
         * @param           {number} [max=1]                            Maximum increments
         * @see             {@link Utilities.color.cycle.stroke}
         */
        strokeColorCycle   ( ) { }

    ////    & EXTEND &  ////////////////////////////////////

        /**
         * Get area of this object
         * @readOnly
         * @function
         * @return          {number}                                    Area of rectangle
         */
        get area ( )
        {
            return ( this.width * this.height );
        }

        /**
         * Get center of this object
         * @readOnly
         * @function
         * @return          {Point}                                     Center point coordinates
         */
        get center ( )
        {
            let _x = this.x - ( this.x - this.anchor.x ) + ( this.width  / 2 );

            let _y = this.y - ( this.y - this.anchor.y ) + ( this.height / 2 );


            return new Point ( _x, _y );
        }

        /**
         * Get perimeter of this object
         * @readOnly
         * @function
         * @return          {number}                                    Perimeter of rectangle
         */
        get perimeter ( )
        {
            return ( this.area * 2 );
        }

    ////    DRAW    ////////////////////////////////////////

        /**
         * Draw this object
         * @public
         * @function
         * @param           {string} canvas                             Canvas Id
         */
        draw ( canvas )
        {
            if ( canvas != undefined ) this.canvas = canvas;


            if ( this._canvas instanceof CanvasRenderingContext2D )
            {
                this._setAnchorPoint ( );


                if ( this.#_options.shadow ) this._setShadow ( );                                   // Set: shadow


                this._canvas.strokeStyle = this.stroke.color.toCss ( );

                this._setFillType ( );

                this._canvas.lineWidth   = this.stroke.width;

                ////////////////////////////////////////////////////////////////

                this._canvas.setLineDash ( ( this.stroke.type === 'solid' ) ? new Array : this.stroke.segments );

                this._canvas.beginPath   ( );

                this._canvas.rect        ( this.anchor.x, this.anchor.y, this.width, this.height );

                this._canvas.stroke      ( );

                this._canvas.fill        ( );


                if ( this.#_options.shadow ) this._canvas.shadowColor = new Rgb ( 0, 0, 0, 0 ).toCss ( );   // Reset: shadow


                this._drawOptions ( );
            }
            else

                console.warn ( `'canvas' property is not set for ${this.constructor.name} !` );
        }
}
 
/**
 * @class           {Object} Text                               Text element to render within a canvas element
 * @property        {Point}  point                              X & Y axis coordinates
 * @property        {string} text                               Text to display
 * @property        {Stroke} stroke                             Stroke properties
 * @property        {Fill}   fill                               Fill properties
 * @property        {Shadow} shadow                             Shadow properties
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 */
class Text extends Font
{
    _point  = new Point;
    _text   = undefined;
    _stroke = new Stroke;
    _fill   = new Fill;
    _shadow = new Shadow;

    _canvas = undefined;

    #_options = new Options;

    /**
     * Create a Text object
     * @param           {Point}  point                              X & Y axis coordinates
     * @param           {string} text                               Text of text object
     * @param           {string} type                               Font type
     * @param           {number} size                               Font size
     * @param           {string} weight                             Font weight
     * @param           {number} maxWidth                           Font max width
     * @param           {Point}  offset                             Text offset
     * @param           {Stroke} stroke                             Stroke properties
     * @param           {Fill}   fill                               Fill Properties
     * @param           {Shadow} shadow                             Shadow properties
     * @param           {string} canvas                             Canvas Id
     */
    constructor (
                    point  = { x: undefined, y: undefined },
                    text, type, size, weight, maxWidth,
                    offset = { x:     undefined, y:    undefined },
                    stroke = { color: undefined, type: undefined, segments:    undefined, width: undefined },
                    fill   = { color: undefined, type: undefined },
                    shadow = { color: undefined, blur: undefined, offset: { x: undefined, y:     undefined } },
                    canvas
                )
    {
        super ( );

        ////    COMPOSITION     ////////////////////////////

            this._isDegree = VALIDATION.isDegree;
            this._isInDom  = VALIDATION.isInDom;
            this._isPoint  = VALIDATION.isPoint;

            this._clearCanvas     = UTILITIES.misc.clearCanvas;
            this._rotatePoint     = UTILITIES.misc.rotatePoint;
            this._setShadow       = UTILITIES.set.shadow;
            this.fillColorCycle   = UTILITIES.color.cycle.fill;
            this.strokeColorCycle = UTILITIES.color.cycle.stroke;

            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.discrete.canvas );
            Object.defineProperty ( this, 'offset', PROPERTY_BLOCKS.discrete.offset );
            Object.defineProperty ( this, 'point',  PROPERTY_BLOCKS.discrete.point  );
            Object.defineProperty ( this, 'x',      PROPERTY_BLOCKS.discrete.pointX );
            Object.defineProperty ( this, 'y',      PROPERTY_BLOCKS.discrete.pointY );

            stroke.width = ( stroke.width === undefined ) ? 0                   : stroke.width;
            fill.color   = ( fill.color   === undefined ) ? new Rgb ( 0, 0, 0 ) : fill.color;       // Set: default fill property as 'Black'

        this.point = point;
        this.text  = text;

        ////    SUPER CLASS PROPERTIES  ////////////////////

            super.type     = type;
            super.size     = size;
            super.weight   = weight;
            super.maxWidth = maxWidth;
            super.offset.x = offset.x;
            super.offset.y = offset.y;

        ////    OBJECT INITIALIZER(S)   ////////////////////

            this._stroke = new Stroke ( stroke.color, stroke.type,  stroke.segments, stroke.width );

            this._fill   = new Fill   ( fill.color,   fill.type );

            this._shadow = new Shadow ( shadow.color, shadow.blur, { x: shadow.offset.x, y: shadow.offset.y } );

        this.canvas = canvas;

        ////    ANCILLARY   ////////////////////////////////

            this.#_options.shadow = ( shadow.offset.x != undefined && shadow.offset.y != undefined );
    }

    ////    [ POINT ]   ////////////////////////////////////

        /**
         * Set point
         * @public
         * @function
         * @param           {Point} value                               X & Y coordinates
         * @see             {@link discrete.point}
         */
        set point ( value ) { }

        /**
         * Get point
         * @public
         * @function
         * @return          {Point}                                     X & Y coordinates
         * @see             {@link discrete.point}
         */
        get point ( ) { }


        /**
         * Set x-axis value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         * @see             {@link discrete.pointX}
         */
        set x ( value ) { }

        /**
         * Get x-axis value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         * @see             {@link discrete.pointX}
         */
        get x ( ) { }


        /**
         * Set the y-axis value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         * @see             {@link discrete.pointY}
         */
        set y ( value ) { }

        /**
         * Get y-axis value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         * @see             {@link discrete.pointY}
         */
        get y ( ) { }

    ////    [ TEXT ]    ////////////////////////////////////

        /**
         * Set text
         * @public
         * @function
         * @param           {string} value                              Text of object
         */
        set text ( value )
        {
            this._text = ( typeof value === 'string' ) ? value : undefined;
        }

        /**
         * Get text
         * @readOnly
         * @function
         * @return          {string}                                    Text of object
         */
        get text ( )
        {
            return this._text;
        }

    ////    [ STROKE ]  ////////////////////////////////////

        /**
         * Get stroke properties
         * @public
         * @function
         * @return          {Stroke}                                    Stroke properties
         */
        get stroke ( )
        {
            return this._stroke;
        }

    ////    [ FILL ]    ////////////////////////////////////

        /**
         * Get fill properties
         * @public
         * @function
         * @return          {Fill}                                      Fill properties
         */
        get fill ( )
        {
            return this._fill;
        }

    ////    [ SHADOW ]  ////////////////////////////////////

        /**
         * Get shadow properties
         * @public
         * @function
         * @return          {Shadow}                                    Shadow properties
         */
        get shadow ( )
        {
            return this._shadow;
        }

    ////    [ CANVAS ]  ////////////////////////////////////

        /**
         * Set canvas value
         * @public
         * @function
         * @param           {string} value                              Canvas id
         * @see             {@link discrete.canvas}
         */
        set canvas ( value ) { }

        /**
         * Get canvas value
         * @readOnly
         * @function
         * @return          {string}                                    Canvas id
         * @see             {@link discrete.canvas}
         */
        get canvas ( ) { }

    ////    [ OPTIONS ] ////////////////////////////////////

        /**
         * Get options properties
         * @public
         * @function
         * @return          {Options}                                   Options properties
         */
        get options ( )
        {
            return this.#_options;
        }

    ////    ( PRIVATE ) ////////////////////////////////////

        /**
         * Draws associated options
         * @protected
         * @function
         */
        #_drawOptions ( )
        {
            if ( this.#_options.border ) this.drawBorder ( );

            if ( this.#_options.axis   ) this.drawAxis   ( );
        }

    ////    * SUPER *   ////////////////////////////////////

        ////    [ type ]    ////////

            /**
             * Set font's type
             * @public
             * @function
             * @param           {string} value                              Font's type
             */
            set type ( value ) { super.type = value; }

            /**
             * Get font's type
             * @readOnly
             * @function
             * @return          {string}                                    Font's type
             */
            get type ( )       { return super.type;  }

        ////    [ size ]    ////////

            /**
             * Set font's size
             * @public
             * @function
             * @param           {number} value                              Font's size
             */
            set size ( value ) { super.size = value; }

            /**
             * Get font's size
             * @readOnly
             * @function
             * @return          {number}                                    Font's size
             */
            get size ( )       { return super.size;  }

        ////    [ weight ]  ////////

            /**
             * Set font's weight
             * @public
             * @function
             * @param           {string} value                              Font's weight
             */
            set weight ( value ) { super.weight = value; }

            /**
             * Get font's weight
             * @readOnly
             * @function
             * @return          {string}                                    Font's weight
             */
            get weight ( )       { return super.weight;  }

        ////    [ maxWidth ]    ////

            /**
             * Set font's max width
             * @public
             * @function
             * @param           {number} value                              Font's max width
             */
            set maxWidth ( value )
            {
                super.maxWidth = ( value == undefined )

                                     ? ( this._canvas != undefined )

                                           ? this._canvas.measureText ( value )

                                           : value

                                     : value;
            }

            /**
             * Get font's max width
             * @readOnly
             * @function
             * @return          {number}                                    Font's max width
             */
            get maxWidth ( ) { return super.maxWidth; }

        ////    [ offset ]  ////////

            /**
             * Set offset
             * @public
             * @function
             * @param           {Point} value                               Shadow offset
             * @see             {@link discrete.offset}
             */
            set offset ( value ) { }

            /**
             * Get offset
             * @readOnly
             * @function
             * @return          {Point}                                     Shadow offset
             * @see             {@link discrete.offset}
             */
            get offset ( ) { }

        ////    [ font ]    ////////

            /**
             * Get font
             * @public
             * @function
             * @return          {string}                                    CSS style font property syntax
             */
            get font ( )
            {
                return super.font;
            }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is a degree
         * @private
         * @function
         * @param           {number} value                              Degree
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isDegree}
         */
        _isDegree ( ) { }

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isInDom}
         */
        _isInDom  ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isPoint}
         */
        _isPoint  ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Clears canvas
         * @private
         * @function
         * @param           {boolean} value                             Whether to redraw background
         * @see             {@link Utilities.misc.clearCanvas}
         */
        _clearCanvas ( ) { }

        /**
         * Rotates the origin point by the degree & distance passed
         * @private
         * @function
         * @param           {Point}  origin                             Origin point
         * @param           {number} degree                             Degree to rotate
         * @param           {number} distance                           Distance from origin
         * @see             {@link Utilities.misc.rotatePoint}
         */
        _rotatePoint ( ) { }

        /**
         * Sets shadow properties
         * @private
         * @function
         * @see             {@link Utilities.set.shadow}
         */
        _setShadow   ( ) { }

        /**
         * Draws border around this object
         * @public
         * @function
         * @param           {number} [offset=10]                        Offset of border's perimeter
         */
        drawBorder ( offset = 10 )
        {
            let _red    = new Rgb ( 245, 80, 50, 1 );

            let _aspect = new Aspect ( this._canvas.measureText ( this.text ).width, super.size );

            let _point  = new Point  ( this.x - ( aspect.width / 2 ) - offset, this.y - ( aspect.height / 2 ) - ( offset * 2 ) );


            let _border = new Rectangle ( _point, aspect.width + ( offset * 2 ), aspect.height + ( offset * 2 ),    /* Point, Aspect */
                /* Stroke */            { color: _red,      type: 'solid', segments: undefined,  width: 1 },
                /* Fill   */            { color: undefined, type: 'solid' },
                /* Shadow */              undefined,
                /* Canvas */              this.canvas );

                _border.draw ( );
        }

        /**
         * Draws axis through center of this object
         * @public
         * @function
         * @param           {number} [offset=10]                        Offset of axis's edges
         */
        drawAxis ( offset = 10 )
        {
            let _red        = new Rgb ( 245, 80, 50, 1 );

            let _aspect     = new Aspect ( this._canvas.measureText ( this.text ).width, super.size );

            let _xAxisStart = new Point  ( this.x - ( aspect.width / 2 ) - ( offset * 2 ), this.y - ( aspect.height / 4 ) );
            let _xAxisEnd   = new Point  ( this.x + ( aspect.width / 2 ) + ( offset * 2 ), this.y - ( aspect.height / 4 ) );

            let _yAxisStart = new Point  ( aspect.width, this.y - ( aspect.height     ) - offset );
            let _yAxisEnd   = new Point  ( aspect.width, this.y + ( aspect.height / 2 ) + offset );


            let _xAxis = new Line ( _xAxisStart, _xAxisEnd,     /* Point */
                /* Stroke     */    { color: _red, type: 'solid', segments: undefined, width: 1 },
                /* Shadow     */      undefined,
                /* LineCap    */      undefined,
                /* Canvas     */      this.canvas );

            let _yAxis = new Line ( _yAxisStart, _yAxisEnd,     /* Point */
                /* Stroke     */    { color: _red, type: 'solid', segments: undefined, width: 1 },
                /* Shadow     */      undefined,
                /* LineCap    */      undefined,
                /* Canvas     */      this.canvas );


                _xAxis.draw ( );

                _yAxis.draw ( );
        }

        /**
         * Cycle colors for fill
         * @public
         * @function
         * @param           {number} progress                           Progress time unit between; 0.00 - 1.00
         * @param           {Rgb}    start                              Starting RGB value
         * @param           {Rgb}    end                                Ending RGB value
         * @param           {number} [max=1]                            Maximum increments
         * @see             {@link Utilities.color.cycle.fill}
         */
        fillColorCycle ( ) { }

        /**
         * Move this object
         * @public
         * @function
         * @param           {number}  degree                            Direction to move; in degrees
         * @param           {number}  distance                          Distance to move
         * @param           {boolean} [clear=true]                      Clear canvas during each movement
         */
        move ( degree, distance, clear = true )
        {
            let _point = this._rotatePoint ( { x: this.x, y: this.y }, degree, distance );


                [ this.x, this.y ] = [ _point.x, _point.y ];


            this._clearCanvas ( clear );

            this.draw    ( );
        }

        /**
         * Rotate this object
         * @public
         * @function
         * @param           {number} degree                             Distance to rotate; in degrees
         * @param           {string} [anchor='center']                  Anchoring point during rotation
         * @param           {number} [clear=true]                       Clear canvas during each rotation
         */
        rotate ( degree, anchor = 'center', clear = true )
        {
            if ( this._isDegree ( degree ) )
            {
                let _point = new Point;


                let _width  = this._canvas.measureText ( this.text ).width / 2;

                let _height = this.size / 2;


                switch ( anchor )
                {
                    case 'topLeft':      [ _point.x, _point.y ] = [ _point.x - _width, _point.y - _height ];  break;

                    case 'topRight':     [ _point.x, _point.y ] = [ _point.x + _width, _point.y - _height ];  break;

                    case 'bottomRight':  [ _point.x, _point.y ] = [ _point.x + _width, _point.y + _height ];  break;

                    case 'bottomLeft':   [ _point.x, _point.y ] = [ _point.x - _width, _point.y + _height ];  break;

                    case 'center':       [ _point.x, _point.y ] = [ _point.x,          _point.y - _height ];  break;

                    default:

                        console.warn ( `"${anchor}" is not a valid 'anchor' variable !` );
                }


                this._canvas.save      ( );

                this._canvas.translate (   _point.x,   _point.y );

                this._canvas.rotate    ( ( degree % 360 ) * Math.PI / 180 );

                this._canvas.translate ( - _point.x, - _point.y );


                this._clearCanvas ( clear );

                this.draw    ( );


                this._canvas.restore ( );
            }
        }

        /**
         * Cycle colors for stroke
         * @public
         * @function
         * @param           {Rgb}    start                              Starting RGB value
         * @param           {Rgb}    end                                Ending RGB value
         * @param           {number} progress                           Progress time unit; 0.00 - 1.00
         * @param           {number} [max=1]                            Maximum increments
         * @see             {@link Utilities.color.cycle.stroke}
         */
        strokeColorCycle ( ) { }

    ////    DRAW    ////////////////////////////////////////

        /**
         * Draw this object
         * @public
         * @function
         * @param           {string} canvas                             Canvas Id
         */
        draw ( canvas, shadow = false )
        {
            if ( canvas != undefined ) this.canvas = canvas;


            if ( this._canvas instanceof CanvasRenderingContext2D )
            {
                if ( this.#_options.shadow ) this._setShadow ( );                                   // Set: shadow


                [ this.x, this.y ] = [  ( this.x + this.offset.x ), ( this.y + this.offset.y )  ];  // Incorporate offset from super class


                this._canvas.font      = this.font;

                this._canvas.textAlign = 'center';

                this._canvas.fillStyle = this.fill.color.toCss ( );

                this._canvas.fillText ( this.text, this.x, this.y, this.maxWidth );                 // TODO: maxWidth is showing NaN !


                if ( this.stroke.width > 0 )
                {
                    this._canvas.strokeStyle = this.stroke.color.toCss ( );

                    this._canvas.strokeText ( this.text, this.x, this.y, this.maxWidth );
                }


                if ( this.#_options.shadow ) this._canvas.shadowColor = new Rgb ( 0, 0, 0, 0 ).toCss ( );   // Reset: shadow


                this.#_drawOptions ( );
            }
            else

                console.warn ( `'canvas' property is not set for ${this.constructor.name} !` );
        }
}
 
/**
 * @class           {Array} Circles                             Collection of circle elements within an array
 * @property        {Point} point                               X & Y axis coordinates
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 */
class Circles extends Array
{
    _point   = new Point;
    _canvas  = undefined;

    _storage = { type: Circle }

    /**
     * Create Circles object
     * @property        {Point}             point                   X & Y axis coordinates
     * @property        {HTMLCanvasElement} canvas                  Canvas Id
     */
    constructor ( point = { x: undefined, y: undefined }, canvas )
    {
        super ( );

        ////    COMPOSITION     ////////////////////////////

            this._isInDom = VALIDATION.isInDom;
            this._isPoint = VALIDATION.isPoint;

            this.draw               = UTILITIES.draw.collection.typical;
            this.fillColorCycle     = UTILITIES.color.cycle.fill;
            this.gradientColorCycle = UTILITIES.color.cycle.gradient;
            this.strokeColorCycle   = UTILITIES.color.cycle.stroke;
            this.pushPop            = UTILITIES.misc.pushPop;

            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.combined.canvas );
            Object.defineProperty ( this, 'point',  PROPERTY_BLOCKS.discrete.point  );
            Object.defineProperty ( this, 'x',      PROPERTY_BLOCKS.discrete.pointX );
            Object.defineProperty ( this, 'y',      PROPERTY_BLOCKS.discrete.pointY );

        this.point = point;
        this.canvas = canvas;
    }

    ////    [ POINT ]   ////////////////////////////////////

        /**
         * Set point
         * @public
         * @function
         * @param           {Point} point                               X & Y axis coordinates
         */
        set point ( value ) { }

        /**
         * Get point
         * @public
         * @function
         * @return          {Point}                                     X & Y axis coordinates
         */
        get point ( ) { }


        /**
         * Set x-axis value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         */
        set x ( value ) { }

        /**
         * Get x-axis value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         */
        get x ( ) {  }

        /**
         * Set y-axis value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         */
        set y ( value ) { }

        /**
         * Get y-axis value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         */
        get y ( ) { }

    ////    [ CANVAS ]  ////////////////////////////////////

        /**
         * Set canvas value
         * @public
         * @function
         * @param           {string} value                              Canvas id
         * @see             {@link combined.canvas}
         */
        set canvas ( value ) { }

        /**
         * Get canvas value
         * @readOnly
         * @function
         * @return          {string}                                    Canvas id
         * @see             {@link combined.canvas}
         */
        get canvas ( ) { }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isInDom}
         */
        _isInDom  ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isPoint}
         */
        _isPoint  ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Push or pops the passed object
         * @public
         * @function
         * @param           {Object} object                             Object; Circle, Rectangle, Text
         * @see             {@link Utilities.misc.pushPop}
         */
        pushPop ( ) { }

    ////    DRAW    ////////////////////////////////////////

        /**
         * Typical draw function for collections; Circles, Texts
         * @public
         * @function
         * @param           {string} canvas                             Canvas Id
         * @see             {@link UTILITIES.draw.collection.typical}
         */
        draw ( ) { }
}
 
/**
 * @class           {Array} Group                               Collection of Line, Circle, Rectangle & Text objects
 * @property        {Point} point                               X & Y axis coordinates
 * @property        {Array} lines                               Collection of Line objects
 * @property        {Array} circles                             Collection of Circle objects
 * @property        {Array} rectangles                          Collection of Rectangle objects
 * @property        {Array} text                                Collection of Text objects
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 */
class Group extends Array
{
    _point      = new Point;

    _lines      = new Lines;
    _circles    = new Circles;
    _rectangles = new Rectangles;
    _text       = new Texts;

    _canvas     = undefined;

    /**
     * Create Group object
     * @property        {Point}             point                   X & Y axis coordinates
     * @property        {HTMLCanvasElement} canvas                  Canvas Id
     */
    constructor ( point = { x: undefined, y: undefined }, canvas )
    {
        super ( );

        ////    COMPOSITION     ////////////////////////////

            this._isInDom = VALIDATION.isInDom;
            this._isPoint = VALIDATION.isPoint;

            this.drawLines  = UTILITIES.draw.aTypicalCollection;
            this.drawShapes = UTILITIES.draw.typicalCollection;

            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.combined.canvas );

        this.point  = point;
        this.canvas = canvas;
    }

    ////    [ POINT ]   ////////////////////////////////////

        /**
         * Set point
         * @public
         * @function
         * @param           {Point} value                               X & Y coordinates
         */
        set point ( value )
        {
            this._point = ( this._isPoint ( value ) ) ? value : this._point;
        }

        /**
         * Get point
         * @public
         * @function
         * @return          {Point}                                     X & Y coordinates
         */
        get point ( )
        {
            return this._point;
        }

        /**
         * Set x-axis value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         */
        set x ( value ) { this._point.x = value; }

        /**
         * Get x-axis value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         */
        get x ( )       { return this._point.x;  }

        /**
         * Set the y-axis value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         */
        set y ( value ) { this._point.y = value; }

        /**
         * Get y-axis value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         */
        get y ( )       { return this._point.y;  }

    ////    [ CANVAS ]  ////////////////////////////////////

        /**
         * Set canvas value
         * @public
         * @function
         * @param           {string} value                              Canvas id
         * @see             {@link combined.canvas}
         */
        set canvas ( value ) { }

        /**
         * Get canvas value
         * @readOnly
         * @function
         * @return          {string}                                    Canvas id
         * @see             {@link combined.canvas}
         */
        get canvas ( ) { }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isInDom}
         */
        _isInDom  ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isPoint}
         */
        _isPoint  ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Pushes an object into this group
         * @public
         * @function
         * @param           {Object} object                             Object; Line(s), Circle(s), Rectangle(S)
         */
        push ( object )
        {
            for ( let _value of arguments )

                switch ( _value.constructor.name )
                {
                    ////    OBJECTS     ////////////////////

                        case 'Line':        this._lines.push ( _value );       break;

                        case 'Circle':      this._circles.push ( _value );     break;

                        case 'Rectangle':   this._rectangles.push ( _value );  break;

                    ////    COLLECTIONS     ////////////////

                        case 'Lines':       for ( let _line of _value ) this._lines.push ( _line );                 break;

                        case 'Circles':     for ( let _circle of _value ) this._circles.push ( _circle );           break;

                        case 'Rectangles':  for ( let _rectangle of _value ) this._rectangles.push ( _rectangle );  break;

                    default:

                        console.warn ( `"${_value}" is not a supported type to be pushed into ${this.constructor.name}` );

                        break;
                }
        }

        /**
         * Pops an object out of this group
         * @public
         * @function
         * @param           {Object} object                             Object; Line(s), Circle(s), Rectangle(S)
         */
        pop ( object )
        {
            for ( let _value of arguments )

                switch ( _value.constructor.name )
                {
                    ////    OBJECTS     ////////////////////

                        case 'Line':        this._lines.push ( _value );       break;

                        case 'Circle':      this._circles.push ( _value );     break;

                        case 'Rectangle':   this._rectangles.push ( _value );  break;

                    ////    COLLECTIONS     ////////////////

                        case 'Lines':       for ( let _line of _value ) this._lines.push ( _line );                 break;

                        case 'Circles':     for ( let _circle of _value ) this._circles.push ( _circle );           break;

                        case 'Rectangles':  for ( let _rectangle of _value ) this._rectangles.push ( _rectangle );  break;

                    default:

                        console.warn ( `"${_value}" is not a supported type to be popped into ${this.constructor.name}` );

                        break;
                }
        }

    ////    DRAW    ////////////////////////////////////////

        /**
         * A-typical draw function for collections; Lines
         * @public
         * @function
         * @param           {string} canvas                             Canvas Id
         * @see             {@link Utilities.draw.aTypical}
         */
        drawLines  ( ) { }

        /**
         * Typical draw function for collections; Circles, Rectangles, Texts
         * @public
         * @function
         * @param           {string} canvas                             Canvas Id
         * @see             {@link Utilities.draw.typical}
         */
        drawShapes ( ) { }

        /**
         * Draw this group
         * @public
         * @function
         * @param           {string} canvas                             Canvas Id
         */
        draw ( canvas )
        {
            if ( canvas != undefined ) this.canvas = canvas;


            ( this.lines.length      > 0 ) ? this.drawLines  ( canvas ) : console.warn ( `No ${this.constructor.name} exist to draw !` );

            ( this.circles.length    > 0 ) ? this.drawShapes ( canvas ) : console.warn ( `No ${this.constructor.name} exist to draw !` );

            ( this.rectangles.length > 0 ) ? this.drawShapes ( canvas ) : console.warn ( `No ${this.constructor.name} exist to draw !` );

            ( this.texts.length      > 0 ) ? this.drawShapes ( canvas ) : console.warn ( `No ${this.constructor.name} exist to draw !` );
        }
}
 
/**
 * @class           {Array} Lines                               Collection of Line objects
 * @property        {Point} point                               X & Y axis coordinates
 * @property        {StrokeCollection} stroke                   Stroke collection properties
 * @property        {ShadowCollection} shadow                   Shadow collection properties
 * @property        {string} lineCap                            Shape of end points
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 */
class Lines extends Array
{
    _point   = new Point;
    _stroke  = new StrokeCollection;
    _shadow  = new ShadowCollection;
    _lineCap = 'round';

    _canvas  = undefined;

    #_aspect  = new Aspect;
    #_anchor  = new Anchor;
    #_options = new Options;

    #_origin  = new Point;
    // #_coordinates =
    // {
    //     origin:
    //     {
    //         x: undefined,
    //         y: undefined
    //     }
    // }

    _storage  = { type: Line }

    /**
     * Create a lines array
     */
    constructor ( )
    {
        super ( );

        ////    COMPOSITION     ////////////////////////////

            this._isAspect = VALIDATION.isAspect;
            this._isInDom  = VALIDATION.isInDom;
            this._isPoint  = VALIDATION.isPoint;

            this._drawAxis   = UTILITIES.draw.axis;
            this._drawBorder = UTILITIES.draw.border;
            this.draw        = UTILITIES.draw.collection.aTypical;

            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.combined.canvas );
            Object.defineProperty ( this, 'point',  PROPERTY_BLOCKS.discrete.point  );
            Object.defineProperty ( this, 'x',      PROPERTY_BLOCKS.discrete.pointX );
            Object.defineProperty ( this, 'y',      PROPERTY_BLOCKS.discrete.pointY );

        this.stroke.master = this;

        ////    POPULATE COLLECTION     ////////////////////

            if ( arguments.length > 0 ) this.push.apply ( this, arguments );
    }

    ////    [ POINT ]   ////////////////////////////////////

        /**
         * Set point
         * @public
         * @function
         * @param           {Point} value                               X & Y coordinates
         * @see             {@link discrete.point}
         */
        set point ( value ) { }

        /**
         * Get point
         * @public
         * @function
         * @return          {Point}                                     X & Y coordinates
         * @see             {@link discrete.point}
         */
        get point ( ) { }


        /**
         * Set x-axis value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         * @see             {@link discrete.pointX}
         */
        set x ( value ) { }

        /**
         * Get x-axis value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         * @see             {@link discrete.pointX}
         */
        get x ( ) { }

        /**
         * Set the y-axis value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         * @see             {@link discrete.pointY}
         */
        set y ( value ) { }

        /**
         * Get y-axis value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         * @see             {@link discrete.pointY}
         */
        get y ( ) { }

    ////    [ STROKE ]  ////////////////////////////////////

        /**
         * Get stroke properties
         * @public
         * @function
         * @return          {Stroke}                                    Stroke properties
         */
        get stroke ( )
        {
            return this._stroke;
        }

    ////    [ SHADOW ]  ////////////////////////////////////

        /**
         * Get shadow properties
         * @public
         * @function
         * @return          {Shadow}                                    Shadow properties
         */
        get shadow ( )
        {
            return this._shadow;
        }

    ////    [ OPTIONS ] ////////////////////////////////////

        /**
         * Get options
         * @public
         * @function
         * @return          {Object}                                    Options object
         */
        get options ( )
        {
            return this.#_options;
        }

    ////    [ LINECAP ]  ///////////////////////////////////

        /**
         * Set line cap
         * @public
         * @function
         * @param           {string} value                              Line cap
         */
        set lineCap ( value )
        {
            this._lineCap = ( value === 'butt' || value === 'round' || value === 'square' ) ? value : this._lineCap;
        }

        /**
         * Get line cap
         * @readOnly
         * @function
         * @return          {string}                                    Line cap
         */
        get lineCap ( )
        {
            return this._lineCap;
        }

    ////    [ CANVAS ]  ////////////////////////////////////

        /**
         * Set canvas value
         * @public
         * @function
         * @param           {string} value                              Canvas id
         * @see             {@link combined.canvas}
         */
        set canvas ( value ) { }

        /**
         * Get canvas value
         * @readOnly
         * @function
         * @return          {string}                                    Canvas id
         * @see             {@link combined.canvas}
         */
        get canvas ( ) { }

    ////    [ ASPECT ]  ////////////////////////////////////

        /**
         * Get aspect properties
         * @public
         * @function
         * @return          {Aspect}                                    Aspect properties
         */
        get aspect ( )
        {
            this._setAspect ( );


            return this.#_aspect;
        }

        /**
         * Get aspect with
         * @readOnly
         * @function
         * @return          {number}                                    Width value
         */
        get width  ( )
        {
            return this.#_aspect.width;
        }

        /**
         * Get aspect height
         * @readOnly
         * @function
         * @return          {number}                                    Height value
         */
        get height ( )
        {
            return this.#_aspect.height;
        }

    ////    [ ANCHOR ]  ////////////////////////////////////

        /**
         * Set anchor type
         * @public
         * @function
         * @param           {string} value                              Anchor type
         */
        set anchor ( value )
        {
            this.#_anchor.type = ( this._isAnchor ( value ) ) ? value : this.#_anchor.type;


            this._setAnchorPoint ( );
        }

        /**
         * Get anchor
         * @public
         * @function
         * @return          {Anchor}                                    Anchor properties
         */
        get anchor ( )
        {
            return this.#_anchor;
        }

    ////    & EXTEND &  ////////////////////////////////////

        /**
         * Get area of this object
         * @readOnly
         * @function
         * @return          {number}                                    Area of rectangle
         */
        get area ( )
        {
            return ( this.width * this.height );
        }

        /**
         * Get perimeter of this object
         * @readOnly
         * @function
         * @return          {number}                                    Perimeter of rectangle
         */
        get perimeter ( )
        {
            return ( this.area * 2 );
        }

        /**
         * Get center of this object
         * @readOnly
         * @function
         * @return          {Point}                                     Center point coordinates
         */
        get center ( )
        {
            const getMin = ( value, start, end ) => ( value === undefined ) ? start : ( start < end ) ? ( start < value ) ? start : value : ( end < value ) ? end : value;

            let _x = undefined;
            let _y = undefined;

            for ( let _object of this )
            {
                _x = getMin ( _x, _object.start.x, _object.end.x );

                _y = getMin ( _y, _object.start.y, _object.end.y );


                this.#_origin = new Point ( _x, _y );
            }


            [ _x, _y ] = [ _x + ( this.width  / 2 ), _y + ( this.height / 2 ) ];


            return new Point ( _x, _y );
        }

    ////    ( PRIVATE ) ////////////////////////////////////

        /**
         * Appends property values
         * @protected
         * @function
         * @param           {Line} line                                 Line object
         */
        #_appendProperties ( Line )
        {
            Object.defineProperty ( Line, 'origin',
                {
                    value:
                    {
                        start: new Point ( Line.start.x, Line.start.y ),
                        end:   new Point ( Line.end.x,   Line.end.y   )
                    },
                    writable: false,
                }
            );

            Object.defineProperty ( Line, 'start', PROPERTY_BLOCKS.combined.start );

            Object.defineProperty ( Line, 'end',   PROPERTY_BLOCKS.combined.end   );
        }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is an Aspect
         * @public
         * @function
         * @param           {Object} value                              Aspect or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isAspect}
         */
        _isAspect ( ) { }

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isInDom}
         */
        _isInDom  ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isPoint}
         */
        _isPoint  ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {number} offset                             Offset of axis
         * @param           {Object} color                              Color model
         * @param           {number} stop                               Gradient color stop
         * @see             {@link Utilities.draw.axis}
         */
        _drawAxis   ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {Aspect} aspect                             Aspect properties
         * @param           {Object} color                              Color model
         * @see             {@link Utilities.draw.border}
         */
        _drawBorder  ( ) { }

        /**
         * Draws associated options
         * @private
         * @function
         */
        _drawOptions ( )
        {
            let _offset = 20;

            let _aspect = new Aspect ( this.width + _offset, this.height + _offset );

            ////////////////////////////////////////////////////////////////////

            if ( this.options.border ) this._drawBorder ( _aspect );

            if ( this.options.axis   ) this._drawAxis   ( );

            if ( this.options.anchor ) this._drawAnchor ( );
        }

        /**
         * Draws anchor point
         * @private
         * @function
         */
        _drawAnchor ( )
        {
            let _anchor = new Rectangle ( new Point ( this.x, this.y ), new Aspect ( 5, 5 ) );

                _anchor.fill.color = '255, 0, 0';

                _anchor.canvas     = this.canvas;


                _anchor.draw ( );
        }

        /**
         * Sets anchor's point against this object's point location
         * @private
         * @function
         */
        _setAnchorPoint ( )
        {
            this._setAspect ( );


            this.#_anchor = this.center;


            switch ( this.anchor.type )
            {
                case 'center':       this.anchor.x -= this.width / 2;   this.anchor.y -= this.height / 2;  break;

                case 'top':          this.anchor.x -= this.width / 2;   /*       ... do nothing        */  break;

                case 'topRight':     this.anchor.x -= this.width;       /*       ... do nothing        */  break;

                case 'right':        this.anchor.x -= this.width;       this.anchor.y -= this.height / 2;  break;

                case 'bottomRight':  this.anchor.x -= this.width;       this.anchor.y -= this.height;      break;

                case 'bottom':       this.anchor.x -= this.width / 2;   this.anchor.y -= this.height;      break;

                case 'bottomLeft':   /*       ... do nothing       */   this.anchor.y -= this.height;      break;

                case 'left':         /*       ... do nothing       */   this.anchor.y -= this.height / 2;  break;

                case 'topLeft':      /*       ... do nothing       */   /*       ... do nothing        */  break;
            }
        }

        /**
         * Sets aspect
         * @private
         * @function
         */
        _setAspect ( )
        {
            const getSpan = ( start, end ) => ( start < end ) ? end - start : start - end;


            if ( this.length > 0 )

                for ( let _object of this )
                {
                    let _width  = getSpan ( _object.start.x, _object.end.x );

                    let _height = getSpan ( _object.start.y, _object.end.y );


                    if ( _width  > this.#_aspect.width  ) this.#_aspect.width  = _width;

                    if ( _height > this.#_aspect.height ) this.#_aspect.height = _height;
                }

            else

                console.warn ( `No ${this.constructor.name} exist to draw !` );
        }

        /**
         * Pushes Line(s) into this collection
         * @public
         * @function
         */
        push ( )
        {
            for ( let _i = 0; _i < arguments.length; _i++ )

                ( arguments [ _i ] instanceof Line )

                    ? this.#_appendProperties ( arguments [ _i ] )

                    : console.error ( `[ERROR] Argument ${ ( _i + 1 ) }, of type "${ arguments [ _i ].constructor.name }", is not a valid type !` );


            return Array.prototype.push.apply ( this, arguments );
        }

    ////    DRAW    ////////////////////////////////////////

        /**
         * A-typical draw function for collections; Lines
         * @public
         * @function
         * @param           {string} canvas                             Canvas Id
         * @see             {@link Utilities.draw.collection.aTypical}
         */
        draw ( ) { }
}
 
/**
 * @class           {Array} Rectangles                          Collection of Rectangle objects
 * @property        {Point} point                               X & Y axis coordinates
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 */
class Rectangles extends Array
{
    _point   = new Point;

    _canvas  = undefined;

    _storage = { type: Rectangle }

    /**
     * Create Rectangles object
     * @property        {Point}             point                   X & Y axis coordinates
     * @property        {HTMLCanvasElement} canvas                  Canvas Id
     */
    constructor ( point = { x: undefined, y: undefined }, canvas )
    {
        super ( );

        ////    COMPOSITION     ////////////////////////////

            this._isInDom = VALIDATION.isInDom;
            this._isPoint = VALIDATION.isPoint;

            this.strokeColorCycle   = UTILITIES.color.cycle.stroke;
            this.fillColorCycle     = UTILITIES.color.cycle.fill;
            this.gradientColorCycle = UTILITIES.color.cycle.gradient;
            this.pushPop            = UTILITIES.pushPop;

            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.combined.canvas );
            Object.defineProperty ( this, 'point',  PROPERTY_BLOCKS.discrete.point  );
            Object.defineProperty ( this, 'x',      PROPERTY_BLOCKS.discrete.pointX );
            Object.defineProperty ( this, 'y',      PROPERTY_BLOCKS.discrete.pointY );

        this.x = point.x;
        this.y = point.y;

        this.canvas = canvas;
    }

    ////    [ POINT ]   ////////////////////////////////////

        /**
         * Set point
         * @public
         * @function
         * @param           {Point} value                               X & Y coordinates
         * @see             {@link discrete.point}
         */
        set point ( value ) { }

        /**
         * Get point
         * @public
         * @function
         * @return          {Point}                                     X & Y coordinates
         * @see             {@link discrete.point}
         */
        get point ( ) { }


        /**
         * Set x-axis value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         * @see             {@link discrete.pointX}
         */
        set x ( value ) { }

        /**
         * Get x-axis value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         * @see             {@link discrete.pointX}
         */
        get x ( ) { }


        /**
         * Set the y-axis value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         * @see             {@link discrete.pointY}
         */
        set y ( value ) { }

        /**
         * Get y-axis value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         * @see             {@link discrete.pointY}
         */
        get y ( ) { }

    ////    [ CANVAS ]  ////////////////////////////////////

        /**
         * Set canvas value
         * @param           {string} value                              Canvas id
         * @see             {@link combined.canvas}
         */
        set canvas ( value ) { }

        /**
         * Get canvas value
         * @return          {string}                                    Canvas id
         * @see             {@link combined.canvas}
         */
        get canvas ( ) { }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isInDom}
         */
        _isInDom  ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Push or pops the passed object
         * @public
         * @function
         * @param           {Object} object                             Object; Circle, Rectangle, Text
         * @see             {@link Utilities.misc.pushPop}
         */
        pushPop ( ) { }

    ////    DRAW    ////////////////////////////////////////

        /**
         * Draw this object
         * @public
         * @function
         * @param           {string} canvas                             Canvas Id
         */
        draw ( canvas )
        {
            if ( canvas != undefined ) this.canvas = canvas;


            if ( this.length > 0 )

                for ( let _rectangle of this )
                {
                    _rectangle.x += this.x;
                    _rectangle.y += this.y;

                    _rectangle.draw ( );
                }

            else

                console.warn ( `No ${this.constructor.name} exist to draw !` );
        }
}
 
/**
 * @class           {Array} Texts                               Collection of Text objects
 * @property        {Point} point                               X & Y axis coordinates
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 */
class Texts extends Array
{
    _point   = new Point;

    _canvas  = undefined;

    _storage = { type: Text }

    constructor ( point = { x: undefined, y: undefined }, canvas )
    {
        super ( );

        ////    COMPOSITION     ////////////////////////////

            this._isInDom = VALIDATION.isInDom;
            this._isPoint = VALIDATION.isPoint;

            this.draw             = UTILITIES.draw.typicalCollection;
            this.strokeColorCycle = UTILITIES.color.cycle.stroke;
            this.fillColorCycle   = UTILITIES.color.cycle.fill;
            this.pushPop          = UTILITIES.misc.pushPop;

            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.combined.canvas );
            Object.defineProperty ( this, 'point',  PROPERTY_BLOCKS.discrete.point  );
            Object.defineProperty ( this, 'x',      PROPERTY_BLOCKS.discrete.pointX );
            Object.defineProperty ( this, 'y',      PROPERTY_BLOCKS.discrete.pointY );

        this.point  = point;
        this.canvas = canvas;
    }

    ////    [ POINT ]   ////////////////////////////////////

        /**
         * Set point
         * @public
         * @function
         * @param           {Point} point                               X & Y axis coordinates
         */
        set point ( value ) { }

        /**
         * Get point
         * @public
         * @function
         * @return          {Point}                                     X & Y axis coordinates
         */
        get point ( ) { }


        /**
         * Set x-axis value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         */
        set x ( value ) { }

        /**
         * Get x-axis value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         */
        get x ( ) {  }

        /**
         * Set y-axis value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         */
        set y ( value ) { }

        /**
         * Get y-axis value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         */
        get y ( ) { }

    ////    [ CANVAS ]  ////////////////////////////////////

        /**
         * Set canvas value
         * @public
         * @function
         * @param           {string} value                              Canvas id
         * @see             {@link combined.canvas}
         */
        set canvas ( value ) { }

        /**
         * Get canvas value
         * @readOnly
         * @function
         * @return          {string}                                    Canvas id
         * @see             {@link combined.canvas}
         */
        get canvas ( ) { }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isInDom}
         */
        _isInDom  ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isPoint}
         */
        _isPoint  ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Push or pops the passed object
         * @public
         * @function
         * @param           {Object} object                             Object; Circle, Rectangle, Text
         * @see             {@link Utilities.misc.pushPop}
         */
        pushPop ( ) { }

    ////    DRAW    ////////////////////////////////////////

        /**
         * Typical draw function for collections; Circles, Texts
         * @public
         * @function
         * @param           {string} canvas                             Canvas Id
         * @see             {@link UTILITIES.draw.collection.typical}
         */
        draw ( ) { }
}
 
/**
 * @class           {Object}   Animation                        Animation handler
 * @property        {function} timing                           Timing function
 * @property        {function} draw                             Draw function
 * @property        {number}   duration                         Duration of animation
 */
class Animation
{
    _timing   = undefined;
    _draw     = undefined;
    _duration = 2000;

    #timings =
    {
        ////    EASE-IN    /////////////////////////////////////

            'easeInSine':       ( timeFraction ) => 1 - Math.cos ( ( timeFraction * Math.PI ) / 2 ),
            'easeInCubic':      ( timeFraction ) => timeFraction * timeFraction * timeFraction,
            'easeInQuint':      ( timeFraction ) => timeFraction * timeFraction * timeFraction * timeFraction * timeFraction,
            'easeInCirc':       ( timeFraction ) => 1 - Math.sqrt ( 1 - Math.pow ( timeFraction, 2 ) ),
            'easeInElastic':    ( timeFraction ) => ( timeFraction === 0 ) ? 0 : ( timeFraction === 1 ) ? 1 : - Math.pow ( 2, 10 * timeFraction - 10 ) * Math.sin ( ( timeFraction * 10 - 10.75 ) * ( ( 2 * Math.PI ) / 3 ) ),
            'easeInQuad':       ( timeFraction ) => timeFraction * timeFraction,
            'easeInQuart':      ( timeFraction ) => timeFraction * timeFraction * timeFraction * timeFraction,
            'easeInExpo':       ( timeFraction ) => ( timeFraction === 0 ) ? 0 : Math.pow ( 2, 10 * timeFraction - 10 ),
            'easeInBack':       ( timeFraction ) => ( 1.70158 + 1 ) * timeFraction * timeFraction * timeFraction - 1.70158 * timeFraction * timeFraction,

        ////    EASE-OUT    ////////////////////////////////////

            'easeOutSine':      ( timeFraction ) => Math.sin ( ( timeFraction * Math.PI ) / 2 ),
            'easeOutCubic':     ( timeFraction ) => 1 - Math.pow ( 1 - timeFraction, 3 ),
            'easeOutQuint':     ( timeFraction ) => 1 - Math.pow ( 1 - timeFraction, 5 ),
            'easeOutCirc':      ( timeFraction ) => Math.sqrt ( 1 - Math.pow ( timeFraction - 1, 2 ) ),
            'easeOutElastic':   ( timeFraction ) => ( timeFraction === 0 ) ? 0 : ( timeFraction === 1 ) ? 1 : Math.pow ( 2, -10 * timeFraction ) * Math.sin ( ( timeFraction * 10 - 0.75 ) * ( ( 2 * Math.PI ) / 3 ) ) + 1,
            'easeOutQuad':      ( timeFraction ) => 1 - ( 1 - timeFraction ) * ( 1 - timeFraction ),
            'easeOutQuart':     ( timeFraction ) => 1 - Math.pow ( 1 - timeFraction, 4 ),
            'easeOutExpo':      ( timeFraction ) => ( timeFraction === 1 ) ? 1 : 1 - Math.pow ( 2, -10 * timeFraction ),
            'easeOutBack':      ( timeFraction ) => 1 + ( 1.70158 + 1 ) * Math.pow ( timeFraction - 1, 3 ) + 1.70158 * Math.pow ( timeFraction - 1, 2 ),

        ////    EASE-IN-OUT    /////////////////////////////////

            'easeInOutSine':    ( timeFraction ) => - ( Math.cos ( Math.PI * timeFraction ) - 1 ) / 2,
            'easeInOutCubic':   ( timeFraction ) => ( timeFraction < 0.5 ) ? 4 * timeFraction * timeFraction * timeFraction : 1 - Math.pow ( -2 * timeFraction + 2, 3 ) / 2,
            'easeInOutQuint':   ( timeFraction ) => ( timeFraction < 0.5 ) ? 16 * timeFraction * timeFraction * timeFraction * timeFraction * timeFraction : 1 - Math.pow ( -2 * timeFraction + 2, 5 ) / 2,
            'easeInOutCirc':    ( timeFraction ) => ( timeFraction < 0.5 ) ? ( 1 - Math.sqrt ( 1 - Math.pow ( 2 * timeFraction, 2 ) ) ) / 2 : ( Math.sqrt ( 1 - Math.pow ( -2 * timeFraction + 2, 2 ) ) + 1 ) / 2,
            'easeInOutElastic': ( timeFraction ) => ( timeFraction === 0 ) ? 0 : ( timeFraction === 1 ) ? 1 : ( timeFraction < 0.5 ) ? - ( Math.pow ( 2, 20 * timeFraction - 10 ) * Math.sin ( ( 20 * timeFraction - 11.125 ) * ( ( 2 * Math.PI ) / 4.5 ) ) ) / 2 : ( Math.pow ( 2, -20 * timeFraction + 10 ) * Math.sin ( ( 20 * timeFraction - 11.125 ) * ( 2 * Math.PI ) / 4.5 ) ) / 2 + 1,
            'easeInOutQuad':    ( timeFraction ) => ( timeFraction < 0.5 ) ? 2 * timeFraction * timeFraction : 1 - Math.pow ( -2 * timeFraction + 2, 2 ) / 2,
            'easeInOutQuart':   ( timeFraction ) => ( timeFraction < 0.5 ) ? 8 * timeFraction * timeFraction * timeFraction * timeFraction : 1 - Math.pow ( -2 * timeFraction + 2, 4 ) / 2,
            'easeInOutExpo':    ( timeFraction ) => ( timeFraction === 0 ) ? 0 : ( timeFraction === 1 ) ? 1 : ( timeFraction < 0.5 ) ? Math.pow ( 2, 20 * timeFraction - 10 ) / 2 : ( 2 - Math.pow ( 2, -20 * timeFraction + 10 ) ) / 2,
            'easeInOutBack':    ( timeFraction ) => ( timeFraction < 0.5 ) ? ( Math.pow ( 2 * timeFraction, 2 ) * ( ( ( 1.70158 * 1.525 ) + 1 ) * 2 * timeFraction - ( 1.70158 * 1.525 ) ) ) / 2 : ( Math.pow ( 2 * timeFraction - 2, 2 ) * ( ( ( 1.70158 * 1.525 ) + 1 ) * ( timeFraction * 2 - 2 ) + ( 1.70158 * 1.525 ) ) + 2 ) / 2
    }

    /**
     * Creates an animation instance
     * @param           {number}   duration                         Duration of animation
     * @param           {Function} timing                           Timing function
     * @param           {Function} draw                             Draw function
     */
    constructor ( duration, timing, draw )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isNumber = VALIDATION.isNumber;

        this.duration = duration;
        this.timing   = timing;
        this.draw     = draw;
    }

    ////    [ TIMING ]    //////////////////////////////////

        /**
         * Set timing
         * @public
         * @function
         * @param           {function} value                            Timing function
         */
        set timing ( value )
        {
            switch ( typeof value )
            {
                case 'string':

                    this._timing = ( this.#timings [ value ] != undefined ) ? this.#timings [ value ] : this._timing;

                    break;

                case 'function':

                    this._timing = value;

                    break;

                default:

                    console.warn ( `"${value}" is not a valid timing type !` );
            }
        }

        /**
         * Get timing
         * @readOnly
         * @function
         * @return          {function}                                  Timing function
         */
        get timing ( )
        {
            return this._timing;
        }

    ////    [ DRAW ]    ////////////////////////////////////

        /**
         * Set draw function
         * @public
         * @function
         * @param           {function}                                  Draw function
         */
        set draw ( value )
        {
            this._draw = ( typeof value === 'function' ) ? value : this._draw;
        }

        /**
         * Get draw function
         * @readOnly
         * @function
         * @return          {function}                                  Draw function
         */
        get draw ( )
        {
            return this._draw;
        }

    ////    [ DURATION ]    ////////////////////////////////

        /**
         * Set duration
         * @public
         * @function
         * @param           {number} value                              Duration
         */
        set duration ( value )
        {
            this._duration = ( this._isNumber ( value ) ) ? value : this._duration;
        }

        /**
         * Get duration
         * @readOnly
         * @function
         * @return          {number}                                    Duration
         */
        get duration ( )
        {
            return this._duration;
        }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is a Number value
         * @private
         * @function
         * @param           {number} value                              Number value
         * @return          {boolean}                                   True || False
         * @see             {Validation.isNumber}
         */
        _isNumber ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Initiates animation
         * @public
         * @function
         */
        animate ( )
        {
            // @TODO: Check to make sure that _timing, _draw, and _duration are properly set, prior to 'animating' !
            // could be set with a single internal variable, like #valid
            let [ _duration, _timing, _draw ] = [ this._duration, this._timing, this._draw ]


            if ( this._timing && this._draw )
            {
                let _start = performance.now ( );


                requestAnimationFrame (

                    function animate ( time )
                    {
                        let _timeFraction =  ( time - _start ) / _duration;     // timeFraction goes from 0 to 1

                        let _progress     = _timing ( _timeFraction );          // calculate the current animation state


                        _draw ( _progress );                                    // draw it


                        if ( _timeFraction < 1 )

                            requestAnimationFrame ( animate );
                    }
                );
            }
            else

                console.warn ( '[ Animation ] :: The "timing" and/or "draw" function(s) are presently invalid !' );
        }
}
 
/**
 * @class           {Object}   Application                      Application handler
 */
class Application
{
    /**
     * Application configurations & details
     * @type            {Object}
     * @property        {boolean} debug                             Whether to debug application
     * @property        {Object}  about                             About properties
     * @property        {Object}  about.Author                      Author of application
     * @property        {Object}  about.Created                     Date originally created
     * @property        {Object}  about.Library                     Library name
     * @property        {Object}  about.Updated                     Date last updated
     * @property        {Object}  about.Version                     Current versions
     * @property        {Object}  about.Copyright                   Copyright
     */
    #config =
    {
        debug: false,
        about:
        {
            Author:    'Justin Don Byrne',
            Created:   'October, 2 2023',
            Library:   'Canvas Lab',
            Updated:   'Jun, 03 2024',
            Version:   '0.3.59',
            Copyright: 'Copyright (c) 2023 Justin Don Byrne'
        }
    }

    /**
     * Document object model data
     * @type            {Object}
     * @property        {Object} canvases                           List of canvases
     * @property        {Object} contexts                           List of canvas contexts
     * @property        {Object} window                             Window properties
     * @property        {number} window.width                       Window's width
     * @property        {number} window.height                      Window's height
     * @property        {Object} window.center                      Window's center X & Y coordinates
     * @property        {number} window.center.x                    X-axis coordinate
     * @property        {number} window.center.y                    Y-axis coordinate
     * @property        {Object} mouse                              Mouse properties
     */
    #dom =
    {
        canvases:  undefined,
        contexts:  { },
        window:
        {
            width:     window.innerWidth  - 18,
            height:    window.innerHeight -  4,
            center:
            {
                x: ( ( window.innerWidth  - 18 ) /  4 ),
                y: ( ( window.innerHeight - 4  ) /  2 )
            }
        },
        mouse:
        {
            start:  undefined,
            end:    undefined,
            down:   false,
            extant: -1,
            offset: { x: 0, y: 0 }
        }
    }

    /**
     * Creates an application handler
     */
    constructor ( )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isInDom = VALIDATION.isInDom;
    }

    ////    [ CANVAS ]  ////////////////////////////////////

        /**
         * Set canvas element
         * @public
         * @function
         * @param           {string} value                              Element Id
         */
        set canvas ( value )
        {
            let _canvases = document.getElementsByTagName ( 'canvas' );


            if ( this.#dom.canvases === undefined )
            {
                this.#dom.canvases = new Object ( );

                for ( let _canvas of _canvases )
                {
                    this.#dom.canvases [ _canvas.id ] = document.getElementById ( _canvas.id );

                    this.#dom.contexts [ _canvas.id ] = document.getElementById ( _canvas.id ).getContext ( "2d" );
                }
            }

            if ( this._isInDom ( value ) )
            {
                this.#dom.main.canvas  = this.#dom.canvases [ value ];

                this.#dom.main.context = this.#dom.contexts [ value ];
            }
            else

                console.warn ( `"${value}" does not exist !` );
        }

        /**
         * Get canvas element
         * @public
         * @function
         * @return          {HTMLCanvasElement}                         Canvas context
         */
        get canvas ( )
        {
            return this.#dom.main.context;
        }

    ////    [ ABOUT ]   ////////////////////////////////////

        /**
         * Get application details
         * @readOnly
         * @function
         * @return          {Object}                                    Application details
         */
        get about ( )
        {
            return this.#config.about;
        }

    ////    DOM    /////////////////////////////////////////

        get dom ( )
        {
            return this.#dom;
        }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isInDom}
         */
        _isInDom ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Creates a new animation instance
         * @param           {Object}   flow                             Contains timing, draw, & duration values & functions
         * @param           {number}   flow.duration                    Duration of animation
         * @param           {Function} flow.timing                      Timing function
         * @param           {Function} flow.draw                        Draw function
         */
        set animation ( flow = { duration, timing, draw } )
        {
            let _animation = new Animation ( flow.duration, flow.timing, flow.draw );

                _animation.animate ( );
        }
}

////    INITIALIZATION  ////////////////////////////////////////////////////////

/**
 * Initiates canvasLab
 * @param           {string} [canvas]                   Canvas identifier
 */
let initCanvasLab = ( canvas ) =>
{
    if ( typeof canvasLab === 'function' && typeof window.canvaslab  === 'undefined' )

        window.canvaslab = new canvasLab ( canvas );
}
 
class Processing
{
    #config =
    {
        processing:
        {
            pre: undefined,
            post:
            {
                canvas:
                {
                    state: undefined
                },
                line:
                {
                    prior: { },
                    cache: { }
                },
                redraw: { }
            }
        }
    }

    ////    UTILITIES   ////////////////////////////////////

        // setState ( canvasId ) { }
}
