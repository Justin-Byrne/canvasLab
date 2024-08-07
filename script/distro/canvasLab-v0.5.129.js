// @program: 		canvasLab 
// @brief: 			HTML5 canvas drawing framework 
// @author: 		Justin D. Byrne 
// @email: 			justin@byrne-systems.com 
// @version: 		0.5.129 
// @license: 		GPL-2.0

"use strict";

////    COMPONENTS    //////////////////////////////////////
 
/**
 * Base object for shared accessors & mutators
 * @namespace       PROPERTY_BLOCKS
 */
const PROPERTY_BLOCKS =
{
    /**
     * Discrete property accessors & mutators
     * @var             {Object} PROPERTY_BLOCKS.discrete
     */
    discrete:
    {
        /** @function PROPERTY_BLOCKS.discrete.alpha                                                **/
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
        /** @function PROPERTY_BLOCKS.discrete.area                                                 **/
        /** @notes for <Rectangle>, <cImage>                                                        **/
        area:
        {
            get ( )
            {
                return ( this.width * this.height );
            }
        },
        /** @function PROPERTY_BLOCKS.discrete.canvas                                               **/
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
        /** @function PROPERTY_BLOCKS.discrete.center                                               **/
        /** @notes for <Rectangle>, <cImage>                                                        **/
        center:
        {
            get ( )
            {
                let _x = this.x - ( this.x - this.anchor.x ) + ( this.width  / 2 );

                let _y = this.y - ( this.y - this.anchor.y ) + ( this.height / 2 );


                return new Point ( _x, _y );
            }
        },
        /** @function PROPERTY_BLOCKS.discrete.offset                                               **/
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
        /** @function PROPERTY_BLOCKS.discrete.offsetX                                              **/
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
        /** @function PROPERTY_BLOCKS.discrete.offsetY                                              **/
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
        /** @function PROPERTY_BLOCKS.discrete.point                                                **/
        point:
        {
            set ( value )
            {
                this._point = ( this._isPoint ( value ) ) ? new Point ( value.x, value.y ) : this._point;
            },
            get ( )
            {
                return this._point;
            }
        },
        /** @function PROPERTY_BLOCKS.discrete.pointX                                               **/
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
        /** @function PROPERTY_BLOCKS.discrete.pointY                                               **/
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
        /** @function PROPERTY_BLOCKS.discrete.perimeter                                            **/
        perimeter:
        {
            get ( )
            {
                return ( this.area * 2 );
            }
        },
        /** @function PROPERTY_BLOCKS.discrete.radius                                               **/
        radius:
        {
            set ( value )
            {
                this._radius = ( typeof value === 'number' && value > 0 ) ? value : this._radius;
            },
            get ( )
            {
                return this._radius;
            }
        },
    },

    /**
     * Combined property accessors & mutators
     * @var             {Object} PROPERTY_BLOCKS.combined
     */
    combined:
    {
        /** @function PROPERTY_BLOCKS.combined.anchor                                               **/
        anchor:
        {
            set ( value )
            {
                this._anchor.type = ( this._isAnchor ( value ) ) ? value : this._anchor.type;


                this._setAnchorPoint ( );
            },
            get ( )
            {
                return this._anchor;
            }
        },
        /** @function PROPERTY_BLOCKS.combined.area                                                 **/
        area:
        {
            get ( )
            {
                return ( this.width * this.height );
            }
        },
        /** @function PROPERTY_BLOCKS.combined.aspect                                               **/
        aspect:
        {
            get ( )
            {
                this._setAspect ( );


                return this._aspect;
            }
        },
        /** @function PROPERTY_BLOCKS.combined.aspectWidth                                          **/
        aspectWidth:
        {
            get ( )
            {
                return this._aspect.width;
            }
        },
        /** @function PROPERTY_BLOCKS.combined.aspectHeight                                         **/
        aspectHeight:
        {
            get ( )
            {
                return this._aspect.height;
            }
        },
        /** @function PROPERTY_BLOCKS.combined.canvas                                               **/
        canvas:
        {
            set ( value )
            {
                this._canvas = ( value ) ? ( this._isInDom ( value ) )

                                               ? document.getElementById ( value ).getContext ( '2d' )

                                               : ( this._isCanvasLabObject ( value ) )

                                                     ? null

                                                     : console.warn ( `"${value}" is not a valid DOM element !` )

                                         : ( document.getElementById ( window.canvaslab.canvas ).getContext ( '2d' ) )

                                               ? document.getElementById ( window.canvaslab.canvas ).getContext ( '2d' )

                                               : this._canvas;


                if ( ( this.length > 0 )  &&  ( this._canvas instanceof CanvasRenderingContext2D ) )

                    for ( let _object of this )

                        _object.canvas = this.canvas;
            },
            get ( )
            {
                return ( this._canvas != undefined ) ? this._canvas.canvas.id : undefined;
            }
        },
        /** @function PROPERTY_BLOCKS.combined.center                                               **/
        center:
        {
            get ( )
            {
                let [ _x, _y ] = [ this.width / 2, this.height / 2 ];


                return new Point ( _x, _y );
            }
        },
        /** @function PROPERTY_BLOCKS.combined.endPoint                                             **/
        endPoint:
        {
            get ( )
            {
                return this [ this.length - 1 ].point;
            }
        },
        /** @function PROPERTY_BLOCKS.combined.perimeter                                            **/
        perimeter:
        {
            get ( )
            {
                return ( this.area * 2 );
            }
        },
        /** @function PROPERTY_BLOCKS.combined.start                                                **/
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
        /** @function PROPERTY_BLOCKS.combined.end                                                  **/
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

    collection:
    {
        /**
         * Draw function
         * @public
         * @function
         * @param           {string} canvas                             Canvas Id
         */
        draw ( canvas )
        {
            if ( canvas != undefined ) this.canvas = canvas;


                if ( this._canvas instanceof CanvasRenderingContext2D )

                    if ( this.length > 0 )
                    {
                        this._setAnchorPoint ( );


                        for ( let _object of this )
                        {
                            this._setPointOffset ( _object );

                            this._drawOptionsPre ( _object, this.options );


                            _object.draw ( );
                        }


                        this._drawOptionsPost ( );
                    }
                    else

                        console.warn ( `No ${this.constructor.name} exist to draw !` );

                else

                    console.warn ( `'canvas' property is not set for ${this.constructor.name} !` );
        },

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
        },

        /**
         * Draws anchor point
         * @public
         * @function
         */
        drawAnchor ( )
        {
            let _anchor = new Rectangle ( new Point ( this.x, this.y ), new Aspect ( 5, 5 ) );

                _anchor.fill.color = new Rgb ( 255, 0, 0 );

                _anchor.canvas     = this.canvas;


                _anchor.draw ( );
        },

        /**
         * Draws associated options
         * @public
         * @function
         */
        drawOptionsPost ( )
        {
            let _offset = 20;

            let _aspect = new Aspect ( this.width + _offset, this.height + _offset );

            ////////////////////////////////////////////////////////////////////

            if ( this.options.border ) this._drawBorder ( _aspect );

            if ( this.options.axis   ) this._drawAxis   ( );

            if ( this.options.anchor ) this._drawAnchor ( );
        },

        /**
         * Pushes child object(s) into this collection
         * @public
         * @function
         */
        push ( )
        {
            for ( let _i = 0; _i < arguments.length; _i++ )

                if ( arguments [ _i ] instanceof this._storage.type )

                    Array.prototype.push.apply ( this, [ arguments [ _i ] ] );

                else

                    if ( ! this._isPoint ( arguments [ _i ] ) )

                        console.error ( `[ERROR] Argument ${ ( _i + 1 ) }, of type "${ arguments [ _i ].constructor.name }", is not a valid type !` );
        },

        /**
         * Sets anchor's point against this object's point location
         * @public
         * @function
         */
        setAnchorPoint ( )
        {
            this._setAspect ( );


            this._anchor = this.center;


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
        },

        /**
         * Sets offset of child object against this constructor's point
         * @public
         * @function
         * @param           {Object} Object                             CanvasLab Object
         */
        setPointOffset ( Object )
        {
            Object.x += this.x;

            Object.y += this.y;
        },
    },

    /**
     * Utility draw functions
     * @function UTILITIES.draw
     */
    draw:
    {
        /**
         * Draws anchor point
         * @public
         * @function
         */
        anchor ( color = new Rgb ( 255, 0, 0 ) )
        {
            let _anchor = new Rectangle ( new Point ( this.x, this.y ), new Aspect ( 5, 5 ) );

                _anchor.fill.color = color;

                _anchor.canvas     = this.canvas;


                _anchor.draw ( );
        },

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
            let _collections = [ 'Circles', 'Rectangles', 'Texts' ];


            let _lines = new Lines;

                _lines.push ( new Line, new Line );

                _lines.stroke.color = color;

                _lines.point        = this.center;


            if ( _collections.includes ( this.constructor.name ) )              // Fix offset issue(s)

                [ _lines.point.x, _lines.point.y ] = [ _lines.point.x + this.aspect.offset.x, _lines.point.y + this.aspect.offset.y ];


                _lines.canvas       = ( this instanceof Point ) ? this.options._master.canvas : this.canvas;


                _lines [ 0 ].start  = new Point ( - edgeOffset, 0 );

                _lines [ 0 ].end    = new Point (   edgeOffset, 0 );


                _lines [ 1 ].start  = new Point ( 0, - edgeOffset );

                _lines [ 1 ].end    = new Point ( 0,   edgeOffset );


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
            let _collections = [ 'Circles', 'Rectangles', 'Texts' ];


            if ( this._isAspect ( aspect ) )
            {
                let _border = new Rectangle ( this.center, aspect );


                if ( _collections.includes ( this.constructor.name ) )          // Fix offset issue(s)

                    [ _border.x, _border.y ] = [ _border.x + this.aspect.offset.x, _border.y + this.aspect.offset.y ]


                    _border.stroke.color     = color;

                    _border.fill.color.alpha = 0;

                    _border.canvas           = ( this instanceof Point ) ? this.options._master.canvas : this.canvas;


                    _border.draw ( );
            }
            else

                console.warn ( `"${value}" is not a valid aspect !` );
        },
    },

    /**
     * Utility misc functions
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
        },
    },

    /**
     * Utility draw collection functions
     * @function UTILITIES.set
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
         * Sets anchor's point against this object's point location
         * @public
         * @function
         * @notes for Rectangle & cImage only
         */
        anchorPoint ( )
        {
            [ this._anchor.x, this._anchor.y ] = [ this.x, this.y ];


            switch ( this.anchor.align )
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
                case 'solid':


                    this._canvas.fillStyle = this.fill.color.toCss ( );


                    break;

                case 'linear':


                    let _linear = this._canvas.createLinearGradient ( this.fill.gradient.start.x, this.fill.gradient.start.y, this.fill.gradient.end.x, this.fill.gradient.end.y );

                    this._canvas.fillStyle = _setStops ( _linear, this.fill.gradient.stops );


                    break;

                case 'radial':


                    let _radial = this._canvas.createRadialGradient ( this.fill.gradient.start.x, this.fill.gradient.start.y, this.fill.gradient.startRadius, this.fill.gradient.end.x, this.fill.gradient.end.y, this.fill.gradient.endRadius );

                    this._canvas.fillStyle = _setStops ( _radial, this.fill.gradient.stops );


                    break;

                case 'conic':


                    let _conic = this._canvas.createConicGradient ( this.fill.gradient.angle, this.fill.gradient.point.y, this.fill.gradient.point.x );

                    this._canvas.fillStyle = _setStops ( _conic, this.fill.gradient.stops );


                    break;

                case 'pattern':


                    this.fill._pattern.onload = ( ) =>
                        {
                            this._canvas.fillStyle = this._canvas.createPattern ( this.fill.pattern, this.fill.repetition );

                            this._canvas.fill ( );
                        }


                    break;
            }
        },
    },

    /**
     * Utility draw collection functions
     * @function UTILITIES.transition
     */
    transition:
    {
        /**
         * Move this object
         * @public
         * @function
         * @param           {number}  degree                            Direction to move; in degrees
         * @param           {number}  distance                          Distance to move
         * @param           {boolean} [draw=false]                      Draw post movement
         * @param           {boolean} [clear=false]                     Clear canvas during each movement
         */
        move ( degree, distance, draw = false, clear = false )
        {
            let _point = this._rotatePoint ( { x: this.x, y: this.y }, degree, distance );


                [ this.x, this.y ] = [ _point.x, _point.y ];


            this._clearCanvas ( clear );


            if ( draw )

                this.draw ( );
        },

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
        },
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

        let _width  = ( value.hasOwnProperty ( 'width'  ) ) ? ( typeof value.width  === 'number' ) : false;

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

        if ( value instanceof Rectangle ) return true;

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
     * Returns whether the passed value is a Plan
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {Object} value                              Plan object
     * @return          {boolean}                                   True || False
     */
    isPlan ( value )
    {
        /**
         * Returns classes functions
         * @private
         * @memberof VALIDATION
         * @function
         * @param           {Object} object                             Plan object
         * @return          {Array}                                     Array of functions
         */
        function _getClassFunctions ( object )
        {
            let _results = new Array;

            let _object  = object;

            do
            {
                _results.push ( ... Object.getOwnPropertyNames ( _object ) );
            }
            while ( _object = Object.getPrototypeOf ( _object ) );


                _results = _results.sort ( ).filter ( ( element, i, array ) =>
                           {
                               if ( element != array [ i + 1 ] && typeof object [ element ] == 'function' )

                                    return true;
                           } );


            return _results;
        }

        if ( value != undefined )
        {
            let _instance  = eval ( `new ${value.constructor.name};` );

            let _functions = _getClassFunctions ( value );


            let _point     = ( Object.hasOwn ( _instance, '_point'  ) );

            let _master    = ( Object.hasOwn ( _instance, '_master' ) );

            let _init      = _functions.includes ( 'init' );


            return ( _point && _master && _init );
        }
        else

            return false;
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
     * Returns whether the passed value is a Point & Aspect
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {Object} value                              Object
     * @param           {Point}  value.point                        Point object
     * @param           {Aspect} value.aspect                       Aspect object
     * @return          {boolean}                                   True || False
     */
    isPointNAspect ( value )
    {
        let _point  = undefined;

        let _aspect = undefined;


        if ( typeof value === 'object' )

            if ( ( Object.keys ( value ).length == 2 ) )
            {
                _point  = ( value.hasOwnProperty ( 'point'  ) ) ? this._isPoint ( value.point )

                                                                : false;

                _aspect = ( value.hasOwnProperty ( 'aspect' ) ) ? this._isAspect ( value.aspect )

                                                                : false;
            }


        return ( _point  &&  _aspect );
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
     * Returns whether the passed value is a repetition value
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {string} value                              Repetition value
     * @return          {boolean}                                   True || False
     */
    isRepetition ( value )
    {
        return [ 'repeat', 'repeat-x', 'repeat-y', 'no-repeat' ].includes ( value );
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

////    CANVASLAB    ///////////////////////////////////////
 
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
            this._canvas = ( this._isInDom ( value ) ) ? document.getElementById ( value ).getContext ( '2d' )

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
            let _canvas = ( this._isInDom ( canvasId ) ) ? document.getElementById ( canvasId ).getContext ( '2d' )

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

        /**
         * Get dom details
         * @readOnly
         * @function
         * @return          {Object}                                    DOM details
         */
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
         * @see             {@link VALIDATION.isInDom}
         */
        _isInDom  ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Returns the center X & Y coordinates of the present canvas
         * @public
         * @function
         * @return          {Point}                                     Center X & Y coordinates
         */
        get center ( )
        {
            return new Point (

                           this._canvas.canvas.clientWidth  / 2,                // X coordinate

                           this._canvas.canvas.clientHeight / 2                 // Y coordinate
                       );
        }

        /**
         * Animates onscreen objects in accordance with passed param values
         * @param           {Object}   sequence                         Contains timing, draw, & duration values & functions
         * @param           {number}   sequence.duration                Duration of animation
         * @param           {Function} sequence.timing                  Timing function
         * @param           {Function} sequence.draw                    Draw function
         */
        animate ( sequence = { duration, timing, draw } )
        {
            if ( sequence )

                this.#application.animation = sequence;
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

////    SUBJECTS    ////////////////////////////////////////
 
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
	     * @see             {@link VALIDATION.is256}
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

		fade ( start, end, progress, max )
	    {
	    	this._cycle ( start, end, progress, max );

	    	return this;
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
 * @class           {Object}  Options                           Options for collections
 * @property        {boolean} [anchor=false]                    Show anchor
 * @property        {boolean} [axis=false]                      Show axis
 * @property        {boolean} [border=false]                    Show border
 * @property        {boolean} [coordinates=false]               Show coordinates
 * @property        {boolean} [controlPoints=false]             Show control points
 * @property        {boolean} [points=false]                    Show points
 * @property        {boolean} [shadow=false]                    Show shadow
 * @property        {Object}  master                            Master object to reference
 */
class Options
{
    _anchor        = false;
    _axis          = false;
    _border        = false;
    _coordinates   = false;
    _controlPoints = false;
    _points        = false;
    _shadow        = false;

    _master = undefined;

    /**
     * Create an options object
     * @param           {boolean} anchor                            Show anchor
     * @param           {boolean} axis                              Show axis
     * @param           {boolean} border                            Show border
     * @param           {boolean} coordinates                       Show coordinates
     * @param           {boolean} controlPoints                     Show control points
     * @param           {boolean} points                            Show points
     * @param           {boolean} shadow                            Show shadow
     */
    constructor ( anchor, axis, border, coordinates, controlPoints, points, shadow )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isCanvasLabObject = VALIDATION.isCanvasLabObject;

        this.axis          = axis;
        this.anchor        = anchor;
        this.border        = border;
        this.coordinates   = coordinates;
        this.controlPoints = controlPoints;
        this.points        = points;
        this.shadow        = shadow;
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
         * @see             {@link VALIDATION.isCanvasLabObject}
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

            Object.defineProperty ( this, 'point', PROPERTY_BLOCKS.discrete.point  );
            Object.defineProperty ( this, 'x',     PROPERTY_BLOCKS.discrete.pointX );
            Object.defineProperty ( this, 'y',     PROPERTY_BLOCKS.discrete.pointY );
	}

	////    [ POINT ]   ////////////////////////////////////

        /**
         * Set point
         * @public
         * @function
         * @param           {Point} point                               X & Y axis coordinates
         * @see             {@link PROPERTY_BLOCKS.discrete.point}
         */
        set point ( value ) { }

        /**
         * Get point
         * @public
         * @function
         * @return          {Point}                                     X & Y axis coordinates
         * @see             {@link PROPERTY_BLOCKS.discrete.point}
         */
        get point ( ) { }


		/**
         * Set x-axis value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         * @see             {@link PROPERTY_BLOCKS.discrete.pointX}
         */
        set x ( value ) { }

        /**
         * Get x-axis value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         * @see             {@link PROPERTY_BLOCKS.discrete.pointX}
         */
        get x ( ) { }


        /**
         * Set y-axis value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         * @see             {@link PROPERTY_BLOCKS.discrete.pointY}
         */
        set y ( value ) { }

        /**
         * Get y-axis value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         * @see             {@link PROPERTY_BLOCKS.discrete.pointY}
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
         * @see             {@link VALIDATION.isAnchor}
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
         * @see             {@link VALIDATION.isDegree}
         */
        _isDegree ( ) { }

        /**
         * Returns whether the passed value is a radian; 0 - 6.28...
         * @private
         * @function
         * @param           {number} value                              Radian value; 0 - 6.28...
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isRadian}
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

    #offset = new Point;

    /**
     * Create an aspect
     * @param           {number} width                              Width of aspect
     * @param           {number} height                             Height of aspect
     */
    constructor ( width, height )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isPoint  = VALIDATION.isPoint;

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

    ////    [ OFFSET ]  ////////////////////////////////////

        /**
         * Get offset
         * @readOnly
         * @function
         * @return          {Point}                                     Aspect offset
         */
        get offset ( )
        {
            return this.#offset;
        }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isPoint}
         */
        _isPoint  ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Get center of aspect
         * @readOnly
         * @function
         * @return              {Point}                                 Center point of this aspect
         */
        get center ( )
        {
            let _point = new Point ( this.widthCenter, this.heightCenter );

            return _point;
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
         * @see             {@link VALIDATION.isNumber}
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

    ////    [ OFFSET ]   ///////////////////////////////////

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

            this._drawAxis    = UTILITIES.draw.axis;
            this._drawBorder  = UTILITIES.draw.border;
            this._rotatePoint = UTILITIES.misc.rotatePoint;

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

        /**
         * Returns whether the passed value is an Aspect
         * @private
         * @function
         * @param           {Object} value                              Aspect or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isAspect}
         */
        _isAspect ( ) { }

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isInDom}
         */
        _isInDom  ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {number} offset                             Offset of axis
         * @param           {Object} color                              Color model
         * @param           {number} stop                               Gradient color stop
         * @see             {@link UTILITIES.draw.axis}
         */
        _drawAxis   ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {Aspect} aspect                             Aspect properties
         * @param           {Object} color                              Color model
         * @see             {@link UTILITIES.draw.border}
         */
        _drawBorder ( ) { }

        /**
         * Rotates the origin point by the degree & distance passed
         * @private
         * @function
         * @param           {Point}  origin                             Origin point
         * @param           {number} degree                             Degree to rotate
         * @param           {number} distance                           Distance from origin
         * @see             {@link UTILITIES.misc.rotatePoint}
         */
        _rotatePoint ( ) { }

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

        /**
         * Move this object
         * @public
         * @function
         * @param           {number}  degree                            Direction to move; in degrees
         * @param           {number}  distance                          Distance to move
         */
        move ( degree, distance )
        {
            let _point = this._rotatePoint ( { x: this.x, y: this.y }, degree, distance );


            [ this.x, this.y ] = [ _point.x, _point.y ];
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
         * @see             {@link VALIDATION.isColorModel}
         */
        _isColorModel ( ) { }

        /**
         * Returns whether the passed value is a decimal value; 0.00 - 1
         * @private
         * @function
         * @param           {number} value                              Decimal value; 0.00 - 1
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isDecimal}
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
         * @see             {@link VALIDATION.isPoint}
         */
        _isPoint  ( ) { }

        /**
         * Returns whether the passed value is a radian; 0 - 6.28...
         * @private
         * @function
         * @param           {number} value                              Radian value; 0 - 6.28...
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isRadian}
         */
        _isRadian ( ) { }

        /**
         * Returns whether the passed value is a Stop or object equivalent
         * @private
         * @function
         * @param           {Object} value                              Stop or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isStop}
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
         * @see             {@link UTILITIES.color.cycle.stop}
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
         * @see             {@link VALIDATION.isColorModel}
         */
        _isColorModel ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isPoint}
         */
        _isPoint  ( ) { }

        /**
         * Returns whether the passed value is a Stop or object equivalent
         * @private
         * @function
         * @param           {Object} value                              Stop or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isStop}
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
         * @see             {@link UTILITIES.color.cycle.stop}
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
         * @see             {@link VALIDATION.isColorModel}
         */
        _isColorModel ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isPoint}
         */
        _isPoint  ( ) { }

        /**
         * Returns whether the passed value is a radius value
         * @private
         * @function
         * @param           {number} value                              Radius value
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isRadius}
         */
        _isRadius ( ) { }

        /**
         * Returns whether the passed value is a Stop or object equivalent
         * @private
         * @function
         * @param           {Object} value                              Stop or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isStop}
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
         * @see             {@link UTILITIES.color.cycle.stop}
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
    _color      = new Rgb ( 0, 0, 0, 0 );
    _type       = 'solid';
    _gradient   = undefined;
    _pattern    = undefined;
    _repetition = 'repeat';

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
            this._isRepetition = VALIDATION.isRepetition;

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
         * Sets pattern property value
         * @public
         * @function
         * @param           {string} value                              Path of image to pattern
         */
        set pattern ( value )
        {
            if ( typeof value === 'string' )
            {
                let _image = new Image;

                    _image.src = value;


                this._pattern = _image;

                this.type     = 'pattern';
            }
        }

        /**
         * Gets pattern property value
         * @readOnly
         * @function
         * @return          {Pattern}                                   Pattern fill object
         */
        get pattern ( )
        {
            return this._pattern;
        }

    ////    [ REPITION ]    ////////////////////////////////

        /**
         * Sets repetition property value
         * @public
         * @function
         * @param           {string} value                              Repetition property value
         */
        set repetition ( value )
        {
            this._repetition = ( this._isRepetition ( value ) ) ? value : this._repetition;
        }

        /**
         * Gets repetition property value
         * @readOnly
         * @function
         * @return          {string}                                    Repetition property value
         */
        get repetition ( )
        {
            return this._repetition;
        }

    ////    VALIDATION    //////////////////////////////////

        /**
         * Returns whether the passed value is a color model
         * @private
         * @function
         * @param           {Object} value                              Color model or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isColorModel}
         */
        _isColorModel ( ) { }

        /**
         * Returns whether the passed value is a gradient object
         * @private
         * @function
         * @param           {Object} value                              Gradient object
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isGradient}
         */
        _isGradient ( ) { }

        /**
         * Returns whether the passed value is a fill type
         * @private
         * @function
         * @param           {string} value                              Fill type
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isFillType}
         */
        _isFillType ( ) { }

        /**
         * Returns whether the passed value is a repetition value
         * @public
         * @memberof VALIDATION
         * @function
         * @param           {string} value                              Repetition value
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isRepetition}
         */
        _isRepetition ( ) { }
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
         * @see             {@link PROPERTY_BLOCKS.discrete.offset}
         */
        set offset ( value ) { }

        /**
         * Get offset
         * @public
         * @function
         * @return          {Point}                                     Shadow offset
         * @see             {@link PROPERTY_BLOCKS.discrete.offset}
         */
        get offset ( ) { }


        /**
         * Set x-axis offset value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         * @see             {@link PROPERTY_BLOCKS.discrete.offsetX}
         */
        set x ( value ) { }

        /**
         * Get x-axis offset value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         * @see             {@link PROPERTY_BLOCKS.discrete.offsetX}
         */
        get x ( ) { }


        /**
         * Set the y-axis offset value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         * @see             {@link PROPERTY_BLOCKS.discrete.offsetY}
         */
        set y ( value ) { }

        /**
         * Get y-axis offset value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         * @see             {@link PROPERTY_BLOCKS.discrete.offsetY}
         */
        get y ( ) { }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is a color model
         * @private
         * @function
         * @param           {Object} value                              Color model or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isColorModel}
         */
        _isColorModel ( ) { }

        /**
         * Returns whether the passed value is a blur value
         * @private
         * @function
         * @param           {number} value                              Blur value
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isBlur}
         */
        _isBlur ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isPoint}
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
         * @see             {@link VALIDATION.isColorModel}
         */
        _isColorModel ( ) { }

        /**
         * Returns whether the passed value is an Array of segment values
         * @private
         * @function
         * @param           {Array.<number>} value                      Array of segment values
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isSegments}
         */
        _isSegments   ( ) { }

        /**
         * Returns whether the passed value is a stroke type
         * @private
         * @function
         * @param           {string} value                              Stroke type
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isStrokeType}
         */
        _isStrokeType ( ) { }

        /**
         * Returns whether the passed value is a width value
         * @private
         * @function
         * @param           {number} value                              Width value
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isWidth}
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
         * @see             {@link UTILITIES.set.all}
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
         * @see             {@link UTILITIES.set.all}
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
         * @see             {@link VALIDATION.isBlur}
         */
        _isBlur  ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isPoint}
         */
        _isPoint ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Sets all option values throughout a collection
         * @private
         * @function
         * @param           {string}  property                          Option property
         * @param           {boolean} value                             True || False
         * @see             {@link UTILITIES.set.all}
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
         * @see             {@link VALIDATION.isColorModel}
         */
        _isColorModel ( ) { }

        /**
         * Returns whether the passed value is an Array of segment values
         * @private
         * @function
         * @param           {Array.<number>} value                      Array of segment values
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isSegments}
         */
        _isSegments   ( ) { }

        /**
         * Returns whether the passed value is a stroke type
         * @private
         * @function
         * @param           {string} value                              Stroke type
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isStrokeType}
         */
        _isStrokeType ( ) { }

        /**
         * Returns whether the passed value is a width value
         * @private
         * @function
         * @param           {number} value                              Width value
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isWidth}
         */
        _isWidth      ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Sets all option values throughout a collection
         * @private
         * @function
         * @param           {string}  property                          Option property
         * @param           {boolean} value                             True || False
         * @see             {@link UTILITIES.set.all}
         */
        _setAll ( ) { }
}

////    OBJECTS    /////////////////////////////////////////
 
/**
 * @class           {Object} Circle                             Circle object
 * @property        {Point}  point                              X & Y axis coordinates
 * @property        {number|Point} [radius=25]                  Radius of circle
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

    _anchor  = new Anchor;
    #options = new Options;

    /**
     * Create a Circle object
     * @property        {Point}  point                              X & Y axis coordinates
     * @property        {number|Point} radius                       Radius of circle
     * @property        {Angle}  angle                              Angle properties
     * @property        {Stroke} stroke                             Stroke properties
     * @property        {Fill}   fill                               Fill properties
     * @property        {Shadow} shadow                             Shadow properties
     * @property        {HTMLCanvasElement} canvas                  Canvas Id
     */
    constructor (
                    point  = { x: undefined, y: undefined },
                    radius,
                    angle  = { start: undefined, end:  undefined, clockwise:   undefined },
                    stroke = { color: undefined, type: undefined, segments:    undefined, width: undefined },
                    fill   = { color: undefined, type: undefined },
                    shadow = { color: undefined, blur: undefined, offset: { x: undefined, y:     undefined } },
                    canvas = undefined
                )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isAspect = VALIDATION.isAspect;
            this._isAnchor = VALIDATION.isAnchor;
            this._isDegree = VALIDATION.isDegree;
            this._isInDom  = VALIDATION.isInDom;
            this._isNumber = VALIDATION.isNumber;
            this._isPoint  = VALIDATION.isPoint;

            this._clearCanvas       = UTILITIES.misc.clearCanvas;
            this._drawAnchor        = UTILITIES.draw.anchor;
            this._drawAxis          = UTILITIES.draw.axis;
            this._drawBorder        = UTILITIES.draw.border;
            this._rotatePoint       = UTILITIES.misc.rotatePoint;
            this._setFillType       = UTILITIES.set.fillType;
            this._setShadow         = UTILITIES.set.shadow;

            this.fillColorCycle     = UTILITIES.color.cycle.fill;
            this.gradientColorCycle = UTILITIES.color.cycle.gradient;
            this.move               = UTILITIES.transition.move;
            this.redraw             = UTILITIES.draw.redraw;
            this.rotate             = UTILITIES.transition.rotate;
            this.showCoordinates    = UTILITIES.misc.showCoordinates;
            this.strokeColorCycle   = UTILITIES.color.cycle.stroke;

            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.discrete.canvas );
            Object.defineProperty ( this, 'point',  PROPERTY_BLOCKS.discrete.point  );
            Object.defineProperty ( this, 'x',      PROPERTY_BLOCKS.discrete.pointX );
            Object.defineProperty ( this, 'y',      PROPERTY_BLOCKS.discrete.pointY );

            delete this.#options._controlPoints;
            delete this.#options._points;
            delete this.#options._master;

        this.point  = point;
        this.radius = radius;

        ////    OBJECT INITIALIZER(S)   ////////////////////

            this._angle  = new Angle  ( angle.start, angle.end, angle.clockwise );

            this._stroke = new Stroke ( stroke.color, stroke.type, stroke.segments, stroke.width );

            this._fill   = new Fill   ( fill.color,   fill.type );

            this._shadow = new Shadow ( shadow.color, shadow.blur, { x: shadow.offset.x, y: shadow.offset.y } );

        this.canvas = canvas;

        ////    ANCILLARY   ////////////////////////////////

            this.#options.shadow = ( shadow.offset.x != undefined && shadow.offset.y != undefined );
    }

    ////    [ POINT ]   ////////////////////////////////////

        /**
         * Set point
         * @public
         * @function
         * @param           {Point} value                               X & Y coordinates
         * @see             {@link PROPERTY_BLOCKS.discrete.point}
         */
        set point ( value ) { }

        /**
         * Get point
         * @public
         * @function
         * @return          {Point}                                     X & Y coordinates
         * @see             {@link PROPERTY_BLOCKS.discrete.point}
         */
        get point ( ) { }


        /**
         * Set x-axis value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         * @see             {@link PROPERTY_BLOCKS.discrete.pointX}
         */
        set x ( value ) { }

        /**
         * Get x-axis value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         * @see             {@link PROPERTY_BLOCKS.discrete.pointX}
         */
        get x ( ) { }


        /**
         * Set y-axis value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         * @see             {@link PROPERTY_BLOCKS.discrete.pointY}
         */
        set y ( value ) { }

        /**
         * Get y-axis value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         * @see             {@link PROPERTY_BLOCKS.discrete.pointY}
         */
        get y ( ) { }

    ////    [ RADIUS ]  ////////////////////////////////////

        /**
         * Set radius value
         * @public
         * @function
         * @param           {number|Point} value                        Radius of circle
         */
        set radius ( value )
        {
            if ( value )
            {
                this._radius = ( this._isNumber ( value ) ) ? value : this._radius;

                this._radius = ( this._isPoint  ( value ) ) ? value : this._radius;
            }
        }

        /**
         * Get radius value
         * @readOnly
         * @function
         * @return          {number|Point}                              Radius of circle
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
            return this._anchor;
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
            return this.#options;
        }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is an Anchor alignment
         * @private
         * @function
         * @param           {string} value                              Anchor alignment
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isAnchor}
         */
        _isAnchor ( ) { }

        /**
         * Returns whether the passed value is an Aspect
         * @private
         * @function
         * @param           {Object} value                              Aspect or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isAspect}
         */
        _isAspect ( ) { }

        /**
         * Returns whether the passed value is a degree
         * @private
         * @function
         * @param           {number} value                              Degree
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isDegree}
         */
        _isDegree ( ) { }

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isInDom}
         */
        _isInDom  ( ) { }

        /**
         * Returns whether the passed value is a Number value
         * @private
         * @function
         * @param           {number} value                              Number value
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isNumber}
         */
        _isNumber ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isPoint}
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
         * @see             {@link UTILITIES.misc.clearCanvas}
         */
        _clearCanvas ( ) { }

        /**
         * Draws anchor point
         * @private
         * @function
         * @see             {@link UTILITIES.draw.anchor}
         */
        _drawAnchor ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {number} offset                             Offset of axis
         * @param           {Object} color                              Color model
         * @param           {number} stop                               Gradient color stop
         * @see             {@link UTILITIES.draw.axis}
         */
        _drawAxis ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {Aspect} aspect                             Aspect properties
         * @param           {Object} color                              Color model
         * @see             {@link UTILITIES.draw.border}
         */
        _drawBorder ( ) { }

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

            if ( this.#options.border      ) this._drawBorder     ( _aspect );

            if ( this.#options.axis        ) this._drawAxis       ( _offset );

            if ( this.#options.anchor      ) this._drawAnchor     ( );

            if ( this.#options.coordinates ) this.showCoordinates ( );
        }

        /**
         * Rotates the origin point by the degree & distance passed
         * @private
         * @function
         * @param           {Point}  origin                             Origin point
         * @param           {number} degree                             Degree to rotate
         * @param           {number} distance                           Distance from origin
         * @see             {@link UTILITIES.misc.rotatePoint}
         */
        _rotatePoint ( ) { }

        /**
         * Sets anchor's point against this object's point location
         * @private
         * @function
         */
        _setAnchorPoint ( )
        {
            [ this._anchor.x, this._anchor.y ] = [ this.x, this.y ];


            switch ( this.anchor.align )
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
         * @see             {@link UTILITIES.set.fillType}
         */
        _setFillType ( ) { }

        /**
         * Sets shadow properties
         * @private
         * @function
         * @see             {@link UTILITIES.set.shadow}
         */
        _setShadow ( ) { }

        /**
         * Get area of this object
         * @readOnly
         * @function
         * @return          {number}                                    Area of this object
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

        /**
         * Cycle colors for fill
         * @public
         * @function
         * @param           {number} progress                           Progress time unit between; 0.00 - 1.00
         * @param           {Rgb}    start                              Starting RGB value
         * @param           {Rgb}    end                                Ending RGB value
         * @param           {number} [max=1]                            Maximum increments
         * @see             {@link UTILITIES.color.cycle.fill}
         */
        fillColorCycle ( ) { }

        /**
         * Cycle colors for gradient
         * @public
         * @function
         * @param           {number} progress                           Progress time unit between; 0.00 - 1.00
         * @param           {Rgb}    start                              Starting RGB value
         * @param           {Rgb}    end                                Ending RGB value
         * @param           {number} stop                               Gradient color stop
         * @param           {number} [max=1]                            Maximum increments
         * @see             {@link UTILITIES.color.cycle.gradient}
         */
        gradientColorCycle ( ) { }

        /**
         * Rotate this object
         * @public
         * @function
         * @param           {number} degree                             Distance to rotate; in degrees
         * @param           {string} [anchor='center']                  Anchoring point during rotation
         * @param           {number} [clear=true]                       Clear canvas during each rotation
         * @see             {@link UTILITIES.transition.rotate}
         */
        rotate ( ) { }

        /**
         * Shows coordinates of this object
         * @public
         * @function
         * @param           {number} [offset=10]                        Offset of coordinates y origin
         * @param           {number} [fontSize=16]                      Coordinates font size
         * @see             {@link UTILITIES.misc.showCoordinates}
         */
        showCoordinates ( ) { }

        /**
         * Cycle colors for stroke
         * @public
         * @function
         * @param           {Rgb}    start                              Starting RGB value
         * @param           {Rgb}    end                                Ending RGB value
         * @param           {number} progress                           Progress time unit; 0.00 - 1.00
         * @param           {number} [max=1]                            Maximum increments
         * @see             {@link UTILITIES.color.cycle.stroke}
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


                if ( this.#options.shadow ) this._setShadow ( );                                   // Set: shadow


                this._canvas.strokeStyle = this.stroke.color.toCss ( );

                this._setFillType ( );

                this._canvas.lineWidth   = this.stroke.width;

                ////////////////////////////////////////////////////////////////

                this._canvas.setLineDash ( ( this.stroke.type === 'solid' ) ? new Array : this.stroke.segments );

                this._canvas.beginPath   ( );


                ( this._isPoint ( this.radius ) )

                    ? this._canvas.ellipse ( this.anchor.x, this.anchor.y, this.radius.x, this.radius.y, 0, this.angle.startInRadians, this.angle.endInRadians, ( this.angle.clockwise ) ? false : true )

                    : this._canvas.arc     ( this.anchor.x, this.anchor.y, this.radius, this.angle.startInRadians, this.angle.endInRadians, ( this.angle.clockwise ) ? false : true );


                this._canvas.stroke ( );


                if ( this.fill.type != 'pattern' )

                    this._canvas.fill ( );


                if ( this.#options.shadow ) this._canvas.shadowColor = new Rgb ( 0, 0, 0, 0 ).toCss ( );         // Reset: shadow


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
         * @see             {@link UTILITIES.draw.redraw}
         */
        redraw ( ) { }
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

    #options       = new Options;
    #controlPoints = new ControlPoints;

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

            this._clearCanvas     = UTILITIES.misc.clearCanvas;
            this._drawAxis        = UTILITIES.draw.axis;
            this._drawBorder      = UTILITIES.draw.border;
            this._rotatePoint     = UTILITIES.misc.rotatePoint;
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

            this.#options.shadow      = ( shadow.offset.x != undefined && shadow.offset.y != undefined );
            this.#options.master      = this;

            this._start.options.master = this;
              this._end.options.master = this;


            Object.defineProperty ( this.#options, "points",
            {
                set ( value )
                {
                    this._points = ( typeof value === 'boolean' ) ? value : this.#options.points;


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
            return this.#options;
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
            return this.#controlPoints;
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
         * @see             {@link VALIDATION.isAspect}
         */
        _isAspect ( ) { }

        /**
         * Returns whether the passed value is a degree
         * @private
         * @function
         * @param           {number} value                              Degree
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isDegree}
         */
        _isDegree ( ) { }

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isInDom}
         */
        _isInDom  ( ) { }

        /**
         * Returns whether the passed value is a Number value
         * @private
         * @function
         * @param           {number} value                              Number value
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isNumber}
         */
        _isNumber ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isPoint}
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
         * @see             {@link UTILITIES.misc.clearCanvas}
         */
        _clearCanvas ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {number} offset                             Offset of axis
         * @param           {Object} color                              Color model
         * @param           {number} stop                               Gradient color stop
         * @see             {@link UTILITIES.draw.axis}
         */
        _drawAxis    ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {Aspect} aspect                             Aspect properties
         * @param           {Object} color                              Color model
         * @see             {@link UTILITIES.draw.border}
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

            if ( this.#options.border        ) this._drawBorder       ( _aspect );

            if ( this.#options.axis          ) this._drawAxis         ( );

            if ( this.#options.points        ) this.drawPoints        ( );

            if ( this.#options.coordinates   ) this.showCoordinates   ( );

            if ( this.#options.controlPoints ) this.showControlPoints ( );
        }

        /**
         * Rotates the origin point by the degree & distance passed
         * @private
         * @function
         * @param           {Point}  origin                             Origin point
         * @param           {number} degree                             Degree to rotate
         * @param           {number} distance                           Distance from origin
         * @see             {@link UTILITIES.misc.rotatePoint}
         */
        _rotatePoint ( ) { }

        /**
         * Sets shadow properties
         * @private
         * @function
         * @see             {@link UTILITIES.set.shadow}
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
         * Move this object
         * @public
         * @function
         * @param           {number}  degree                            Direction to move; in degrees
         * @param           {number}  distance                          Distance to move
         * @param           {boolean} [draw=false]                      Draw post movement
         * @param           {boolean} [clear=false]                     Clear canvas during each movement
         */
        move ( degree, distance, draw = false, clear = false )
        {
            let _pointStart = this._rotatePoint ( { x: this.start.x, y: this.start.y }, degree, distance );

            let _pointEnd   = this._rotatePoint ( { x: this.end.x,   y: this.end.y   }, degree, distance );


                [ this.start.x, this.start.y ] = [ _pointStart.x, _pointStart.y ];

                [ this.end.x,   this.end.y   ] = [ _pointEnd.x,   _pointEnd.y   ];


            this._clearCanvas ( clear );


            if ( draw )

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


            let _textStart  = new Text ( _point1.x, _point1.y, `( ${this.#controlPoints.p0}, ${this.#controlPoints.p1} )` );

            let _textEnd    = new Text ( _point2.x, _point2.y, `( ${this.#controlPoints.p3}, ${this.#controlPoints.p4} )` );


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
         * @see             {@link UTILITIES.color.cycle.stroke}
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


                if ( this.#options.shadow ) this._setShadow ( );                                   // Set: shadow


                this._canvas.strokeStyle = this.stroke.color.toCss ( );

                this._canvas.lineCap     = this.lineCap;

                this._canvas.lineWidth   = this.stroke.width;

                ////////////////////////////////////////////////////////////////

                this._canvas.setLineDash ( ( this.stroke.type === 'solid' ) ? new Array : this.stroke.segments );

                this._canvas.beginPath   ( );

                this._canvas.moveTo      ( this.start.x + _straddle, this.start.y + _straddle );


                this.#_setPath ( );


                this._canvas.stroke ( );


                if ( this.#options.shadow ) this._canvas.shadowColor = new Rgb ( 0, 0, 0, 0 ).toCss ( );   // Reset: shadow


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
 * @property        {Array}  round                              Rounding properties
 * @property        {Stroke} stroke                             Stroke properties
 * @property        {Fill}   fill                               Fill properties
 * @property        {Shadow} shadow                             Shadow properties
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 */
class Rectangle
{
    _point  = new Point;
    _aspect = new Aspect;
    _round  = new Array;
    _stroke = new Stroke;
    _fill   = new Fill;
    _shadow = new Shadow;

    _canvas = undefined;

    _anchor  = new Anchor;
    #options = new Options;

    /**
     * Create a Rectangle object
     * @property        {Point}  point                              X & Y axis coordinates
     * @property        {Aspect} aspect                             Aspect properties
     * @property        {Array}  round                              Rounding properties
     * @property        {Stroke} stroke                             Stroke properties
     * @property        {Fill}   fill                               Fill properties
     * @property        {Shadow} shadow                             Shadow properties
     * @property        {string} canvas                             Canvas Id
     */
    constructor (
                    point  = { x:     undefined, y:      undefined },
                    aspect = { width: undefined, height: undefined },
                    round  = [ 0, 0, 0, 0 ],
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

            this._clearCanvas    = UTILITIES.misc.clearCanvas;
            this._drawAnchor     = UTILITIES.draw.anchor;
            this._drawAxis       = UTILITIES.draw.axis;
            this._drawBorder     = UTILITIES.draw.border;
            this._rotatePoint    = UTILITIES.misc.rotatePoint;
            this._setAnchorPoint = UTILITIES.set.anchorPoint;
            this._setFillType    = UTILITIES.set.fillType;
            this._setShadow      = UTILITIES.set.shadow;

            this.fillColorCycle     = UTILITIES.color.cycle.fill;
            this.gradientColorCycle = UTILITIES.color.cycle.gradient;
            this.move               = UTILITIES.transition.move;
            this.redraw             = UTILITIES.draw.redraw;
            this.rotate             = UTILITIES.transition.rotate;
            this.showCoordinates    = UTILITIES.misc.showCoordinates;
            this.strokeColorCycle   = UTILITIES.color.cycle.stroke;

            Object.defineProperty ( this, 'area',      PROPERTY_BLOCKS.discrete.area   );
            Object.defineProperty ( this, 'canvas',    PROPERTY_BLOCKS.discrete.canvas );
            Object.defineProperty ( this, 'center',    PROPERTY_BLOCKS.discrete.center );
            Object.defineProperty ( this, 'perimeter', PROPERTY_BLOCKS.discrete.perimeter );
            Object.defineProperty ( this, 'point',     PROPERTY_BLOCKS.discrete.point  );
            Object.defineProperty ( this, 'x',         PROPERTY_BLOCKS.discrete.pointX );
            Object.defineProperty ( this, 'y',         PROPERTY_BLOCKS.discrete.pointY );

            delete this.#options._controlPoints;
            delete this.#options._points;
            delete this.#options._master;

        this.point  = point;

        this.width  = ( aspect.width  != undefined ) ? aspect.width  : 50;
        this.height = ( aspect.height != undefined ) ? aspect.height : 50;

        this.round  = round;

        ////    OBJECT INITIALIZER(S)   ////////////////////

            this._stroke = new Stroke ( stroke.color, stroke.type,  stroke.segments, stroke.width );

            this._fill   = new Fill   ( fill.color,   fill.type );

            this._shadow = new Shadow ( shadow.color, shadow.blur, shadow.offset );

        this.canvas = canvas;

        ////    ANCILLARY   ////////////////////////////////

            this.#options.shadow = ( shadow.offset.x != undefined && shadow.offset.y != undefined );
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
         * Set y-axis value
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

    ////    [ ROUND ]    ///////////////////////////////////

        /**
         * Set round properties
         * @public
         * @function
         * @param           {Array} value                               Radii properties
         */
        set round ( value )
        {
            this._round = Array.isArray ( value ) ? value : this._round;
        }

        /**
         * Get round properties
         * @readOnly
         * @function
         * @return          {Array}                                     Radii properties
         */
        get round ( )
        {
            return this._round;
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
            return this._anchor;
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
            return this.#options;
        }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is an Aspect
         * @private
         * @function
         * @param           {Object} value                              Aspect or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isAspect}
         */
        _isAspect ( ) { }

        /**
         * Returns whether the passed value is a degree
         * @private
         * @function
         * @param           {number} value                              Degree
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isDegree}
         */
        _isDegree ( ) { }

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isInDom}
         */
        _isInDom  ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isPoint}
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
         * @see             {@link UTILITIES.misc.clearCanvas}
         */
        _clearCanvas ( ) { }

        /**
         * Draws anchor point
         * @private
         * @function
         * @see             {@link UTILITIES.draw.anchor}
         */
        _drawAnchor ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {number} offset                             Offset of axis
         * @param           {Object} color                              Color model
         * @param           {number} stop                               Gradient color stop
         * @see             {@link UTILITIES.draw.axis}
         */
        _drawAxis ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {Aspect} aspect                             Aspect properties
         * @param           {Object} color                              Color model
         * @see             {@link UTILITIES.draw.border}
         */
        _drawBorder ( ) { }

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

            if ( this.#options.border      ) this._drawBorder     ( _aspect );

            if ( this.#options.axis        ) this._drawAxis       ( );

            if ( this.#options.anchor      ) this._drawAnchor     ( );

            if ( this.#options.coordinates ) this.showCoordinates ( );
        }

        /**
         * Rotates the origin point by the degree & distance passed
         * @private
         * @function
         * @param           {Point}  origin                             Origin point
         * @param           {number} degree                             Degree to rotate
         * @param           {number} distance                           Distance from origin
         * @see             {@link UTILITIES.misc.rotatePoint}
         */
        _rotatePoint ( ) { }

        /**
         * Sets anchor's point against this object's point location
         * @private
         * @function
         * @see             {@link UTILITIES.set.anchorPoint}
         */
        _setAnchorPoint ( ) { }

        /**
         * Sets fill type of the associated object
         * @private
         * @function
         * @see             {@link UTILITIES.set.fillType}
         */
        _setFillType ( ) { }

        /**
         * Sets shadow properties
         * @private
         * @function
         * @see             {@link UTILITIES.set.shadow}
         */
        _setShadow ( ) { }

        /**
         * Get area of this object
         * @readOnly
         * @function
         * @return          {number}                                    Area of this object
         * @see             {@link PROPERTY_BLOCKS.discrete.area}
         */
        get area ( ) { }

        /**
         * Get center of this object
         * @readOnly
         * @function
         * @return          {Point}                                     Center point coordinates
         * @see             {@link PROPERTY_BLOCKS.discrete.center}
         */
        get center ( ) { }

        /**
         * Cycle colors for fill
         * @public
         * @function
         * @param           {number} progress                           Progress time unit between; 0.00 - 1.00
         * @param           {Rgb}    start                              Starting RGB value
         * @param           {Rgb}    end                                Ending RGB value
         * @param           {number} [max=1]                            Maximum increments
         * @see             {@link UTILITIES.color.cycle.fill}
         */
        fillColorCycle ( ) { }

        /**
         * Cycle colors for gradient
         * @public
         * @function
         * @param           {number} progress                           Progress time unit between; 0.00 - 1.00
         * @param           {Rgb}    start                              Starting RGB value
         * @param           {Rgb}    end                                Ending RGB value
         * @param           {number} stop                               Gradient color stop
         * @param           {number} [max=1]                            Maximum increments
         * @see             {@link UTILITIES.color.cycle.gradient}
         */
        gradientColorCycle ( ) { }

        /**
         * Move this object
         * @public
         * @function
         * @param           {number}  degree                            Direction to move; in degrees
         * @param           {number}  distance                          Distance to move
         * @param           {boolean} [draw=false]                      Draw post movement
         * @param           {boolean} [clear=false]                     Clear canvas during each movement
         * @see             {@link UTILITIES.transition.move}
         */
        move ( ) { }

        /**
         * Get perimeter of this object
         * @readOnly
         * @function
         * @return          {number}                                    Perimeter of rectangle
         * @see             {@link PROPERTY_BLOCKS.discrete.center}
         */
        get perimeter ( ) { }

        /**
         * Rotate this object
         * @public
         * @function
         * @param           {number} degree                             Distance to rotate; in degrees
         * @param           {string} [anchor='center']                  Anchoring point during rotation
         * @param           {number} [clear=true]                       Clear canvas during each rotation
         * @see             {@link UTILITIES.transition.rotate}
         */
        rotate ( ) { }

        /**
         * Shows coordinates of this object
         * @public
         * @function
         * @param           {number} [offset=10]                        Offset of coordinates y origin
         * @param           {number} [fontSize=16]                      Coordinates font size
         * @see             {@link UTILITIES.misc.showCoordinates}
         */
        showCoordinates ( ) { }

        /**
         * Cycle colors for stroke
         * @public
         * @function
         * @param           {Rgb}    start                              Starting RGB value
         * @param           {Rgb}    end                                Ending RGB value
         * @param           {number} progress                           Progress time unit; 0.00 - 1.00
         * @param           {number} [max=1]                            Maximum increments
         * @see             {@link UTILITIES.color.cycle.stroke}
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


                if ( this.#options.shadow ) this._setShadow ( );                                   // Set: shadow


                this._canvas.strokeStyle = this.stroke.color.toCss ( );

                this._setFillType ( );

                this._canvas.lineWidth   = this.stroke.width;

                ////////////////////////////////////////////////////////////////

                this._canvas.setLineDash ( ( this.stroke.type === 'solid' ) ? new Array : this.stroke.segments );

                this._canvas.beginPath   ( );

                this._canvas.roundRect   ( this.anchor.x, this.anchor.y, this.width, this.height, this.round );

                this._canvas.stroke      ( );


                if ( this.fill.type != 'pattern' )

                    this._canvas.fill ( );


                if ( this.#options.shadow ) this._canvas.shadowColor = new Rgb ( 0, 0, 0, 0 ).toCss ( );   // Reset: shadow


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
         * @see             {@link UTILITIES.draw.redraw}
         */
        redraw ( ) { }
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

    #options = new Options;

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
            this._drawAnchor      = UTILITIES.draw.anchor;
            this._rotatePoint     = UTILITIES.misc.rotatePoint;
            this._setShadow       = UTILITIES.set.shadow;

            this.fillColorCycle   = UTILITIES.color.cycle.fill;
            this.move             = UTILITIES.transition.move;
            this.redraw           = UTILITIES.draw.redraw;
            this.rotate           = UTILITIES.transition.rotate;
            this.showCoordinates  = UTILITIES.misc.showCoordinates;
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

            this._stroke = new Stroke ( stroke.color, stroke.type, stroke.segments, stroke.width );

            this._fill   = new Fill   ( fill.color,   fill.type );

            this._shadow = new Shadow ( shadow.color, shadow.blur, { x: shadow.offset.x, y: shadow.offset.y } );

        this.canvas = canvas;

        ////    ANCILLARY   ////////////////////////////////

            this.#options.shadow = ( shadow.offset.x != undefined && shadow.offset.y != undefined );
    }

    ////    [ POINT ]   ////////////////////////////////////

        /**
         * Set point
         * @public
         * @function
         * @param           {Point} value                               X & Y coordinates
         * @see             {@link Property_Blocks.discrete.point}
         */
        set point ( value ) { }

        /**
         * Get point
         * @public
         * @function
         * @return          {Point}                                     X & Y coordinates
         * @see             {@link Property_Blocks.discrete.point}
         */
        get point ( ) { }


        /**
         * Set x-axis value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         * @see             {@link Property_Blocks.discrete.pointX}
         */
        set x ( value ) { }

        /**
         * Get x-axis value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         * @see             {@link Property_Blocks.discrete.pointX}
         */
        get x ( ) { }


        /**
         * Set the y-axis value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         * @see             {@link Property_Blocks.discrete.pointY}
         */
        set y ( value ) { }

        /**
         * Get y-axis value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         * @see             {@link Property_Blocks.discrete.pointY}
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
         * @see             {@link Property_Blocks.discrete.canvas}
         */
        set canvas ( value ) { }

        /**
         * Get canvas value
         * @readOnly
         * @function
         * @return          {string}                                    Canvas id
         * @see             {@link Property_Blocks.discrete.canvas}
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
            return this.#options;
        }

    ////    * SUPER *   ////////////////////////////////////

        ////    [ type ]    ////////////////////

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

        ////    [ size ]    ////////////////////

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

        ////    [ weight ]    //////////////////

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

        ////    [ maxWidth ]    ////////////////

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

        ////    [ offset ]    //////////////////

            /**
             * Set offset
             * @public
             * @function
             * @param           {Point} value                               Shadow offset
             * @see             {@link Property_Blocks.discrete.offset}
             */
            set offset ( value ) { }

            /**
             * Get offset
             * @readOnly
             * @function
             * @return          {Point}                                     Shadow offset
             * @see             {@link Property_Blocks.discrete.offset}
             */
            get offset ( ) { }

        ////    [ font ]    ////////////////////

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
         * @see             {@link VALIDATION.isDegree}
         */
        _isDegree ( ) { }

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isInDom}
         */
        _isInDom  ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isPoint}
         */
        _isPoint  ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Clears canvas
         * @private
         * @function
         * @param           {boolean} value                             Whether to redraw background
         * @see             {@link UTILITIES.misc.clearCanvas}
         */
        _clearCanvas ( ) { }

        /**
         * Rotates the origin point by the degree & distance passed
         * @private
         * @function
         * @param           {Point}  origin                             Origin point
         * @param           {number} degree                             Degree to rotate
         * @param           {number} distance                           Distance from origin
         * @see             {@link UTILITIES.misc.rotatePoint}
         */
        _rotatePoint ( ) { }

        /**
         * Sets shadow properties
         * @private
         * @function
         * @see             {@link UTILITIES.set.shadow}
         */
        _setShadow   ( ) { }

        /**
         * Draws anchor point
         * @private
         * @function
         * @see             {@link UTILITIES.draw.anchor}
         */
        _drawAnchor ( ) { }

        /**
         * Draws axis through center of this object
         * @private
         * @function
         * @param           {number} [offset=10]                        Offset of axis's edges
         */
        _drawAxis ( offset = 10 )
        {
            let _red        = new Rgb ( 245, 80, 50, 1 );

            let _size       = super.size;


            let _width      = this._canvas.measureText ( this.text ).width;

            let _height     = _size - ( offset / 2 );


            let _aspect     = new Aspect ( _width + offset, _height );


            let _xAxisStart = new Point ( this.x - ( _aspect.width / 2 ) - ( offset * 2 ), this.y - ( _aspect.height / 2.5 ) );

            let _xAxisEnd   = new Point ( this.x + ( _aspect.width / 2 ) + ( offset * 2 ), this.y - ( _aspect.height / 2.5 ) );


            let _yAxisStart = new Point ( this.x, this.y - _aspect.height - offset );

            let _yAxisEnd   = new Point ( this.x, this.y + _aspect.height - ( _size / 2 ) );


            let _xAxis = new Line ( _xAxisStart, _xAxisEnd,     /* Point ( Start, End ) */
                /* Stroke     */    { color: _red, type: 'solid', segments: undefined, width: 1 },
                /* Shadow     */      undefined,
                /* LineCap    */      undefined,
                /* Canvas     */      this.canvas );

            let _yAxis = new Line ( _yAxisStart, _yAxisEnd,     /* Point ( Start, End ) */
                /* Stroke     */    { color: _red, type: 'solid', segments: undefined, width: 1 },
                /* Shadow     */      undefined,
                /* LineCap    */      undefined,
                /* Canvas     */      this.canvas );


                _xAxis.draw ( );

                _yAxis.draw ( );
        }

        /**
         * Draws border around this object
         * @private
         * @function
         * @param           {number} [offset=10]                        Offset of border's perimeter
         */
        _drawBorder ( offset = 10 )
        {
            let _red    = new Rgb ( 245, 80, 50, 1 );

            let _clear  = new Rgb ( 0, 0, 0, 0 );


            let _size   = super.size;


            let _width  = this._canvas.measureText ( this.text ).width;

            let _height = _size - ( offset / 2 );


            let _aspect = new Aspect ( _width + offset, _height );


            let _scaler = ( _size > 60 ) ? 3 : ( _size > 30 ) ? 3.5 : 4.5;

            let _y      = this.y  - ( _height / _scaler ) - ( offset / 2 );


            let _point  = new Point  ( this.x, _y );


            let _border = new Rectangle (
                /* Point  */  _point,
                /* Aspect */  _aspect,
                /* Round  */  undefined,
                /* Stroke */  { color: _red,   type: 'solid', segments: undefined,  width: 1 },
                /* Fill   */  { color: _clear, type: 'solid' },
                /* Shadow */  undefined,
                /* Canvas */  this.canvas
                           );


                _border.draw ( );
        }

        /**
         * Draws associated options
         * @private
         * @function
         */
        _drawOptions ( )
        {
            if ( this.#options.border      ) this._drawBorder      ( );

            if ( this.#options.axis        ) this._drawAxis        ( );

            if ( this.#options.anchor      ) this._drawAnchor      ( );

            if ( this.#options.coordinates ) this.showCoordinates  ( );
        }

        /**
         * Cycle colors for fill
         * @public
         * @function
         * @param           {number} progress                           Progress time unit between; 0.00 - 1.00
         * @param           {Rgb}    start                              Starting RGB value
         * @param           {Rgb}    end                                Ending RGB value
         * @param           {number} [max=1]                            Maximum increments
         * @see             {@link UTILITIES.color.cycle.fill}
         */
        fillColorCycle ( ) { }

        /**
         * Move this object
         * @public
         * @function
         * @param           {number}  degree                            Direction to move; in degrees
         * @param           {number}  distance                          Distance to move
         * @param           {boolean} [draw=false]                      Draw post movement
         * @param           {boolean} [clear=false]                     Clear canvas during each movement
         * @see             {@link UTILITIES.transition.move}
         */
        move ( ) { }

        /**
         * Rotate this object
         * @public
         * @function
         * @param           {number} degree                             Distance to rotate; in degrees
         * @param           {string} [anchor='center']                  Anchoring point during rotation
         * @param           {number} [clear=true]                       Clear canvas during each rotation
         * @see             {@link UTILITIES.transition.rotate}
         */
        rotate ( ) { }

        /**
         * Shows coordinates of this object
         * @public
         * @function
         * @param           {number} [offset=10]                        Offset of coordinates y origin
         * @param           {number} [fontSize=16]                      Coordinates font size
         * @see             {@link UTILITIES.misc.showCoordinates}
         */
        showCoordinates ( ) { }

        /**
         * Cycle colors for stroke
         * @public
         * @function
         * @param           {Rgb}    start                              Starting RGB value
         * @param           {Rgb}    end                                Ending RGB value
         * @param           {number} progress                           Progress time unit; 0.00 - 1.00
         * @param           {number} [max=1]                            Maximum increments
         * @see             {@link UTILITIES.color.cycle.stroke}
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
                if ( this.#options.shadow ) this._setShadow ( );                                   // Set: shadow


                [ this.x, this.y ] = [  ( this.x + this.offset.x ), ( this.y + this.offset.y )  ];  // Incorporate offset from super class


                this._canvas.font      = this.font;

                this._canvas.textAlign = 'center';

                this._canvas.fillStyle = this.fill.color.toCss ( );

                this._canvas.fillText ( this.text, this.x, this.y, this.maxWidth );                 // TODO: maxWidth is showing NaN !


                if ( this.stroke.width > 0 )
                {
                    let _width = this._canvas.lineWidth;

                    this._canvas.lineWidth = this.stroke.width;


                    this._canvas.strokeStyle = this.stroke.color.toCss ( );

                    this._canvas.strokeText ( this.text, this.x, this.y, this.maxWidth );


                    this._canvas.lineWidth = _width;
                }


                if ( this.#options.shadow ) this._canvas.shadowColor = new Rgb ( 0, 0, 0, 0 ).toCss ( );   // Reset: shadow


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
         * @see             {@link UTILITIES.draw.redraw}
         */
        redraw ( ) { }
}
 
/**
 * @class           {Object} cImage                             cImage object
 * @property        {string} source 							Source path of image file
 * @property        {Object} primary  							Primary set of coordinates
 * @property        {Object} secondary 							[description]
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 */
class cImage
{
	_source    = new Image;

	_primary   =
	{
		point:  new Point,
		aspect: new Aspect
	}

	_secondary =
	{
		point:  undefined,
		aspect: undefined
	}

	_canvas  = undefined;

    _anchor  = new Anchor;
	#options = new Options;

	/**
     * Create a cImage object
     * @class           {Object} cImage                             cImage object
 	 * @property        {Image}  source 							Source path of image file
 	 * @property        {Object} primary  							[description]
 	 * @property        {Object} secondary 							[description]
     * @property        {HTMLCanvasElement} canvas                  Canvas Id
     */
	constructor (
				    source,
				    primary   = { point: { x: undefined, y: undefined }, aspect: { width: undefined, height: undefined } },
				    secondary = { point: { x: undefined, y: undefined }, aspect: { width: undefined, height: undefined } },
				    canvas
				)
	{
		////    COMPOSITION     ////////////////////////////

			this._isAspect       = VALIDATION.isAspect;
            this._isDegree       = VALIDATION.isDegree;
            this._isInDom        = VALIDATION.isInDom;
            this._isPoint        = VALIDATION.isPoint;
            this._isPointNAspect = VALIDATION.isPointNAspect;

            this._clearCanvas    = UTILITIES.misc.clearCanvas;
            this._drawAnchor     = UTILITIES.draw.anchor;
            this._drawAxis       = UTILITIES.draw.axis;
            this._drawBorder     = UTILITIES.draw.border;
            this._setAnchorPoint = UTILITIES.set.anchorPoint;

            this.move   = UTILITIES.transition.move;
            this.rotate = UTILITIES.transition.rotate;

            Object.defineProperty ( this, 'area',      PROPERTY_BLOCKS.discrete.area      );
            Object.defineProperty ( this, 'canvas',    PROPERTY_BLOCKS.discrete.canvas    );
            Object.defineProperty ( this, 'center',    PROPERTY_BLOCKS.discrete.center    );
            Object.defineProperty ( this, 'perimeter', PROPERTY_BLOCKS.discrete.perimeter );

            delete this.#options._controlPoints;
            delete this.#options._points;
            delete this.#options._master;

        this.source    = source;
	    this.primary   = primary;
	    this.secondary = secondary;
	    this.canvas    = canvas;
	}

	////    [ SOURCE ]    //////////////////////////////////

		/**
         * Sets source property value
         * @public
         * @function
         * @param           {string} value                              Path of image source
         */
        set source ( value )
        {
            if ( typeof value === 'string' )
            {
                let _image = new Image;

                    _image.src = value;


                this._source = _image;

                this.type     = 'source';
            }
        }

        /**
         * Gets source property value
         * @readOnly
         * @function
         * @return          {Image}                                   	Image source
         */
        get source ( )
        {
            return this._source;
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
            this._primary.point = ( this._isPoint ( value ) ) ? value : this._primary.point;
        }

        /**
         * Get point
         * @public
         * @function
         * @return          {Point}                                     X & Y coordinates
         */
        get point ( )
        {
            return this._primary.point;
        }


        /**
         * Set primary x-axis value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         */
        set x ( value )
        {
            this._primary.point.x = value;
        }

        /**
         * Get primary x-axis value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         */
        get x ( )
        {
            return this._primary.point.x;
        }


        /**
         * Set primary y-axis value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         */
        set y ( value )
        {
            this._primary.point.y = value;
        }

        /**
         * Get primary y-axis value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         */
        get y ( )
        {
            return this._primary.point.y;
        }

    ////    [ ASPECT ]  ////////////////////////////////////

        /**
         * Set aspect properties
         * @public
         * @function
         * @param           {Aspect} value                              Aspect properties
         */
        set aspect ( value )
        {
            this._primary.aspect = ( this._isAspect ( value ) ) ? value : this._primary.aspect;
        }

        /**
         * Get aspect properties
         * @readOnly
         * @function
         * @return          {Aspect}                                    Aspect properties
         */
        get aspect ( )
        {
            return this._primary.aspect;
        }


        /**
         * Get aspect with
         * @readOnly
         * @function
         * @return          {number}                                    Width value
         */
        get width ( )
        {
            return this.source.width;
        }

        /**
         * Get aspect height
         * @readOnly
         * @function
         * @return          {number}                                    Height value
         */
        get height ( )
        {
            return this.source.height;
        }

	////    [ PRIMARY ]    /////////////////////////////////

		/**
         * Sets primary property value
         * @public
         * @function
         * @param           {string} value                              Path of image
         */
        set primary ( value )
        {
        	if ( this._isPointNAspect ( value ) )

        		[ this._primary.point, this._primary.aspect ] = [ value.point, value.aspect ];
        }

        /**
         * Gets primary property value
         * @readOnly
         * @function
         * @return          {Image}										Image object
         */
        get primary ( )
        {
            return this._primary;
        }

    ////    [ SECONDARY ]    ///////////////////////////////

		/**
         * Sets secondary property value
         * @public
         * @function
         * @param           {string} value                              Path of image
         */
        set secondary ( value )
        {
        	if ( this._isPointNAspect ( value ) )

        		[ this._secondary.point, this._secondary.aspect ] = [ value.point, value.aspect ];
        }

        /**
         * Gets secondary property value
         * @readOnly
         * @function
         * @return          {Image}										Image object
         */
        get secondary ( )
        {
            return this._secondary;
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
            return this._anchor;
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
            return this.#options;
        }

    ////    VALIDATION    //////////////////////////////////

    	/**
         * Returns whether the passed value is an Aspect
         * @private
         * @function
         * @param           {Object} value                              Aspect or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isAspect}
         */
        _isAspect ( ) { }

    	/**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isInDom}
         */
        _isInDom ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isPoint}
         */
        _isPoint ( ) { }

	    /**
	     * Returns whether the passed value is a Point & Aspect
	     * @private
	     * @memberof VALIDATION
	     * @function
	     * @param           {Object} value                              Object of a Point & Aspect
	     * @param           {Point}  value.point                        Point object
	     * @param           {Aspect} value.aspect                       Aspect object
	     * @return          {boolean}                                   True || False
	     * @see             {@link VALIDATION.isPointNAspect}
	     */
	    _isPointNAspect ( ) { }

	////    UTILITIES    ///////////////////////////////////

	    /**
         * Clears canvas
         * @private
         * @function
         * @param           {boolean} value                             Whether to redraw background
         * @see             {@link UTILITIES.misc.clearCanvas}
         */
        _clearCanvas ( ) { }

        /**
         * Draws anchor point
         * @private
         * @function
         */
        _drawAnchor ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {number} offset                             Offset of axis
         * @param           {Object} color                              Color model
         * @param           {number} stop                               Gradient color stop
         * @see             {@link UTILITIES.draw.axis}
         */
        _drawAxis ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {Aspect} aspect                             Aspect properties
         * @param           {Object} color                              Color model
         * @see             {@link UTILITIES.draw.border}
         */
        _drawBorder ( ) { }

        /**
         * Draws associated options
         * @private
         * @function
         */
        _drawOptions ( )
        {
            let _offset = 20;

            let _aspect = new Aspect ( this.source.width + _offset, this.source.height + _offset );

            ////////////////////////////////////////////////////////////////////

            if ( this.#options.border      ) this._drawBorder     ( _aspect );

            if ( this.#options.axis        ) this._drawAxis       ( );

            if ( this.#options.anchor      ) this._drawAnchor     ( );

            if ( this.#options.coordinates ) this.showCoordinates ( );
        }

        /**
         * Rotates the origin point by the degree & distance passed
         * @private
         * @function
         * @param           {Point}  origin                             Origin point
         * @param           {number} degree                             Degree to rotate
         * @param           {number} distance                           Distance from origin
         * @see             {@link UTILITIES.misc.rotatePoint}
         */
        _rotatePoint ( ) { }

        /**
         * Sets anchor's point against this object's point location
         * @private
         * @function
         * @see             {@link UTILITIES.set.anchorPoint}
         */
        _setAnchorPoint ( ) { }

        /**
         * Get area of this object
         * @readOnly
         * @function
         * @return          {number}                                    Area of this object
         * @see             {@link PROPERTY_BLOCKS.discrete.area}
         */
        get area ( ) { }

        /**
         * Get center of this object
         * @readOnly
         * @function
         * @return          {Point}                                     Center point coordinates
         * @see             {@link PROPERTY_BLOCKS.discrete.center}
         */
        get center ( ) { }

        /**
         * Move this object
         * @public
         * @function
         * @param           {number}  degree                            Direction to move; in degrees
         * @param           {number}  distance                          Distance to move
         * @param           {boolean} [draw=false]                      Draw post movement
         * @param           {boolean} [clear=false]                     Clear canvas during each movement
         * @see             {@link UTILITIES.transition.move}
         */
        move ( ) { }

        /**
         * Get perimeter of this object
         * @readOnly
         * @function
         * @return          {number}                                    Perimeter of rectangle
         * @see             {@link PROPERTY_BLOCKS.discrete.center}
         */
        get perimeter ( ) { }

        /**
         * Rotate this object
         * @public
         * @function
         * @param           {number} degree                             Distance to rotate; in degrees
         * @param           {string} [anchor='center']                  Anchoring point during rotation
         * @param           {number} [clear=true]                       Clear canvas during each rotation
         * @see             {@link UTILITIES.transition.rotate}
         */
        rotate ( ) { }

        /**
         * Shows coordinates of this object
         * @public
         * @function
         * @param           {number} [offset=10]                        Offset of coordinates y origin
         * @param           {number} [fontSize=16]                      Coordinates font size
         * @see             {@link UTILITIES.misc.showCoordinates}
         */
        showCoordinates ( ) { }

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
                let _drawImage = ( this.secondary.point ) ? ( ) => this._canvas.drawImage ( this._source, this.secondary.point.x, this.secondary.point.y, this.secondary.aspect.width, this.secondary.aspect.height, this.anchor.x, this.anchor.y, this.primary.aspect.width, this.primary.aspect.height )

                                                          : ( ) => this._canvas.drawImage ( this._source, this.anchor.x,          this.anchor.y,          this._source.width,          this._source.height );


                this._source.onload = ( ) =>
                    {
                        this._setAnchorPoint ( );

                        _drawImage ( );

                        this._drawOptions ( );
                    }
            }
	    }

        /**
         * Redraw this object
         * @public
         * @function
         * @param           {string}  canvas                            Canvas Id
         * @param           {Point}   point                             Point of new location
         * @param           {boolean} [clear=true]                      Clear canvas during each redraw
         * @see             {@link UTILITIES.draw.redraw}
         */
        redraw ( ) { }
}
 
/**
 * @class           {Array} Circles                             Collection of circle elements within an array
 * @property        {Point} point                               X & Y axis coordinates
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 */
class Circles extends Array
{
    _point   = new Point;
    _stroke  = new StrokeCollection;
    _shadow  = new ShadowCollection;

    _canvas  = undefined;

    _aspect  = new Aspect;
    _anchor  = new Anchor;
    #options = new Options;

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

            this._isAspect          = VALIDATION.isAspect;
            this._isCanvasLabObject = VALIDATION.isCanvasLabObject;
            this._isInDom           = VALIDATION.isInDom;
            this._isPoint           = VALIDATION.isPoint;

            this._clearCanvas     = UTILITIES.misc.clearCanvas;
            this._drawAnchor      = UTILITIES.collection.drawAnchor;
            this._drawAxis        = UTILITIES.draw.axis;
            this._drawBorder      = UTILITIES.draw.border;
            this._drawOptionsPost = UTILITIES.collection.drawOptionsPost;
            this._setAnchorPoint  = UTILITIES.collection.setAnchorPoint;
            this._setPointOffset  = UTILITIES.collection.setPointOffset;

            this.draw             = UTILITIES.collection.draw;
            this.push             = UTILITIES.collection.push;
            this.redraw           = UTILITIES.collection.redraw;

            Object.defineProperty ( this, 'anchor',    PROPERTY_BLOCKS.combined.anchor       );
            Object.defineProperty ( this, 'area',      PROPERTY_BLOCKS.combined.area         );
            Object.defineProperty ( this, 'aspect',    PROPERTY_BLOCKS.combined.aspect       );
            Object.defineProperty ( this, 'canvas',    PROPERTY_BLOCKS.combined.canvas       );
            Object.defineProperty ( this, 'center',    PROPERTY_BLOCKS.combined.center       );
            Object.defineProperty ( this, 'endPoint',  PROPERTY_BLOCKS.combined.endPoint     );
            Object.defineProperty ( this, 'perimeter', PROPERTY_BLOCKS.combined.perimeter    );
            Object.defineProperty ( this, 'point',     PROPERTY_BLOCKS.discrete.point        );
            Object.defineProperty ( this, 'width',     PROPERTY_BLOCKS.combined.aspectWidth  );
            Object.defineProperty ( this, 'height',    PROPERTY_BLOCKS.combined.aspectHeight );
            Object.defineProperty ( this, 'x',         PROPERTY_BLOCKS.discrete.pointX       );
            Object.defineProperty ( this, 'y',         PROPERTY_BLOCKS.discrete.pointY       );

        this.point  = point;
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
            return this.#options;
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
         * @see             {@link PROPERTY_BLOCKS.combined.aspect}
         */
        get aspect ( ) { }

        /**
         * Get aspect with
         * @readOnly
         * @function
         * @return          {number}                                    Width value
         * @see             {@link PROPERTY_BLOCKS.combined.aspectWidth}
         */
        get width ( ) { }

        /**
         * Get aspect height
         * @readOnly
         * @function
         * @return          {number}                                    Height value
         * @see             {@link PROPERTY_BLOCKS.combined.aspectHeight}
         */
        get height ( ) { }

    ////    [ ANCHOR ]  ////////////////////////////////////

        /**
         * Set anchor type
         * @public
         * @function
         * @param           {string} value                              Anchor type
         * @see             {@link PROPERTY_BLOCKS.combined.anchor}
         */
        set anchor ( value ) { }

        /**
         * Get anchor
         * @public
         * @function
         * @return          {Anchor}                                    Anchor properties
         * @see             {@link PROPERTY_BLOCKS.combined.anchor}
         */
        get anchor ( ) { }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is an Aspect
         * @private
         * @function
         * @param           {Object} value                              Aspect or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isAspect}
         */
        _isAspect ( ) { }

        /**
         * Returns whether the passed value is a CanvasLab object; Line, Circle, Rectangle, Text
         * @private
         * @function
         * @param           {Object} value                              CanvasLab object; Line, Circle, Rectangle, Text
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isCanvasLabObject}
         */
        _isCanvasLabObject ( ) { }

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isInDom}
         */
        _isInDom ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isPoint}
         */
        _isPoint ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Draws anchor point
         * @private
         * @function
         * @see             {@link UTILITIES.collection.drawAnchor;}
         */
        _drawAnchor ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {number} offset                             Offset of axis
         * @param           {Object} color                              Color model
         * @param           {number} stop                               Gradient color stop
         * @see             {@link UTILITIES.draw.axis}
         */
        _drawAxis ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {Aspect} aspect                             Aspect properties
         * @param           {Object} color                              Color model
         * @see             {@link UTILITIES.draw.border}
         */
        _drawBorder ( ) { }

        /**
         * Draws associated options
         * @private
         * @function
         * @see             {@link UTILITIES.collection.drawOptionsPost;}
         */
        _drawOptionsPost ( ) { }

        /**
         * Triggers associated pre-draw options
         * @private
         * @function
         * @param           {Object}  object                            CanvasLab Object
         * @param           {Options} options                           Options for collections
         */
        _drawOptionsPre ( object, options )
        {
            let _types = [ 'shadow', 'points', 'controlPoints', 'coordinates' ];


            for ( let _type of _types )

                if ( options [ _type ] )

                    object.options [ _type ] = true;
        }

        /**
         * Sets anchor's point against this object's point location
         * @private
         * @function
         * @see             {@link UTILITIES.collection.setAnchorPoint;}
         */
        _setAnchorPoint ( ) { }

        /**
         * Sets aspect
         * @private
         * @function
         */
        _setAspect ( )
        {
            let [ _width, _height ] = [ this._canvas.canvas.clientWidth  * 2, this._canvas.canvas.clientHeight * 2 ]

            let [ _left,  _top    ] = [   _width,   _height ];

            let [ _right, _bottom ] = [ - _width, - _height ];


            if ( this.length > 0 )

                for ( let _object of this )
                {
                    _left   = ( _object.x - _object.radius < _left   ) ? _object.x - _object.radius : _left;

                    _right  = ( _object.x + _object.radius > _right  ) ? _object.x + _object.radius : _right;

                    _top    = ( _object.y - _object.radius < _top    ) ? _object.y - _object.radius : _top;

                    _bottom = ( _object.y + _object.radius > _bottom ) ? _object.y + _object.radius : _bottom;
                }

            else

                console.warn ( `No ${this.constructor.name} exist to draw !` );


            [ this._aspect.width,    this._aspect.height   ] = [ _right - _left, _bottom - _top ];

            [ this._aspect.offset.x, this._aspect.offset.y ] = [ _left,          _top           ];
        }

        /**
         * Sets offset of child object against this constructor's point
         * @private
         * @function
         * @param           {Object} Object                             CanvasLab Object
         * @see             {@link UTILITIES.collection.setAnchorPoint;}
         */
        _setPointOffset ( ) { }

        /**
         * Get area of this object
         * @readOnly
         * @function
         * @return          {number}                                    Area of rectangle
         * @see             {@link PROPERTY_BLOCKS.combined.area;}
         */
        get area ( ) { }

        /**
         * Get center of this object
         * @readOnly
         * @function
         * @return          {Point}                                     Center point coordinates
         * @see             {@link PROPERTY_BLOCKS.combined.center;}
         */
        get center ( ) { }

        /**
         * Returns the last Point within this Array
         * @public
         * @function
         * @return          {Point}                                     Last Array element's X & Y Coordinates
         * @see             {@link PROPERTY_BLOCKS.combined.endPoint;}
         */
        get endPoint ( ) { }

        /**
         * Get perimeter of this object
         * @readOnly
         * @function
         * @return          {number}                                    Perimeter of rectangle
         * @see             {@link PROPERTY_BLOCKS.combined.perimeter;}
         */
        get perimeter ( ) { }

        /**
         * Pushes child object(s) into this collection
         * @public
         * @function
         * @see             {@link UTILITIES.collection.push;}
         */
        push ( ) { }

    ////    DRAW    ////////////////////////////////////////

        /**
         * Draw function for collections
         * @public
         * @function
         * @param           {string} canvas                             Canvas Id
         * @see             {@link UTILITIES.collection.draw}
         */
        draw ( ) { }

        /**
         * Redraw this object
         * @public
         * @function
         * @param           {string}  canvas                            Canvas Id
         * @param           {Point}   point                             Point of new location
         * @param           {boolean} [clear=true]                      Clear canvas during each redraw
         * @see             {@link UTILITIES.collection.redraw}
         */
        redraw ( ) { }
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
    _canvas     = undefined;
    _plan       = undefined;

    _lines      = new Lines;
    _circles    = new Circles;
    _rectangles = new Rectangles;
    _texts      = new Texts;

    #storage    = { types: [ 'lines', 'circles', 'rectangles', 'texts' ] }

    /**
     * Create Group object
     * @property        {Point}             point                   X & Y axis coordinates
     * @property        {HTMLCanvasElement} canvas                  Canvas Id
     */
    constructor ( point = { x: undefined, y: undefined }, canvas, plan )
    {
        super ( );

        ////    COMPOSITION     ////////////////////////////

            this._isCanvasLabObject = VALIDATION.isCanvasLabObject;
            this._isInDom           = VALIDATION.isInDom;
            this._isPlan            = VALIDATION.isPlan;
            this._isPoint           = VALIDATION.isPoint;

        this.point  = point;
        this.canvas = canvas;
        this.plan   = plan;
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
         * @see             {@link PROPERTY_BLOCKS.combined.canvas}
         */
        set canvas ( value )
        {
            this._canvas = ( value ) ? ( this._isInDom ( value ) )

                                               ? document.getElementById ( value ).getContext ( '2d' )

                                               : ( this._isCanvasLabObject ( value ) )

                                                     ? null

                                                     : console.warn ( `"${value}" is not a valid DOM element !` )

                                         : ( document.getElementById ( window.canvaslab.canvas ).getContext ( '2d' ) )

                                               ? document.getElementById ( window.canvaslab.canvas ).getContext ( '2d' )

                                               : this._canvas;


            for ( let _type of this.#storage.types )

                if ( ( this [ _type ].length > 0 )  &&  ( this._canvas instanceof CanvasRenderingContext2D ) )

                    for ( let _object of this [ _type ] )

                        _object.canvas = this.canvas;
        }

        /**
         * Get canvas value
         * @readOnly
         * @function
         * @return          {string}                                    Canvas id
         * @see             {@link PROPERTY_BLOCKS.combined.canvas}
         */
        get canvas ( )
        {
            return ( this._canvas != undefined ) ? this._canvas.canvas.id : undefined;
        }

    ////    [ PLAN ]  //////////////////////////////////////

        /**
         * Set's plan
         * @public
         * @function
         * @param           {Object} value                              Plan object
         */
        set plan ( value )
        {
            if ( this._isPlan ( value ) )
            {
                [ this._plan, this._plan._master ] = [ value, this ];


                this._plan.init ( );

                this._setAllCanvases ( );
            }
        }

        /**
         * Get's plan
         * @readOnly
         * @function
         * @return          {Object}                                    Plan object
         */
        get plan ( )
        {
            return this._plan;
        }

    ////    [ LINES ]    ///////////////////////////////////

        /**
         * Get's lines
         * @readOnly
         * @function
         * @return          {Lines}                                     Lines collection
         */
        get lines ( )
        {
            return this._lines;
        }

    ////    [ CIRCLES ]    /////////////////////////////////

        /**
         * Get's circles
         * @readOnly
         * @function
         * @return          {Circles}                                   Circles collection
         */
        get circles ( )
        {
            return this._circles;
        }

    ////    [ RECTANGLES ]    //////////////////////////////

        /**
         * Get's rectangles
         * @readOnly
         * @function
         * @return          {Rectangles}                                Rectangles collection
         */
        get rectangles ( )
        {
            return this._rectangles;
        }

    ////    [ TEXTS ]    ///////////////////////////////////

        /**
         * Get's texts
         * @readOnly
         * @function
         * @return          {Texts}                                     Texts collection
         */
        get texts ( )
        {
            return this._texts;
        }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is a CanvasLab object; Line, Circle, Rectangle, Text
         * @public
         * @memberof VALIDATION
         * @function
         * @param           {Object} value                              CanvasLab object; Line, Circle, Rectangle, Text
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isCanvasLabObject}
         */
        _isCanvasLabObject ( ) { }

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isInDom}
         */
        _isInDom ( ) { }

        /**
         * Returns whether the passed value is a Plan
         * @private
         * @memberof VALIDATION
         * @function
         * @param           {Object} value                              Plan object
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isPlan}
         */
        _isPlan   ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isPoint}
         */
        _isPoint ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Sets all canvases throughout each internal collection of objects
         * @private
         * @function
         */
        _setAllCanvases ( )
        {
            if ( this._canvas )

                for ( let _type of this.#storage.types )

                    if ( this [ _type ].length )

                        this [ _type ].canvas = this.canvas;
        }

        /**
         * Sets offset of child Rectangle against this constructor's point
         * @private
         * @function
         * @param           {Rectangle} Object                          Rectangle object
         */
        _setPointOffset ( Object )
        {
            Object.x += this.x;

            Object.y += this.y;
        }

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
         * Draw this group
         * @public
         * @function
         * @param           {string} canvas                             Canvas Id
         */
        draw ( canvas )
        {
            if ( canvas != undefined ) this.canvas = canvas;


            for ( let _type of this.#storage.types )

                if ( this [ _type ].length > 0 )
                {
                    this._setPointOffset ( this [ _type ] );


                    this [ _type ].draw ( );
                }
                else

                    console.warn ( `No ${_type} exist to draw !` );
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

    _aspect  = new Aspect;
    _anchor  = new Anchor;
    #options = new Options;

    _storage = { type: Line }

    /**
     * Create a Lines object
     * @property        {Point}             point                   X & Y axis coordinates
     * @property        {HTMLCanvasElement} canvas                  Canvas Id
     */
    constructor ( point = { x: undefined, y: undefined }, canvas )
    {
        super ( );

        ////    COMPOSITION     ////////////////////////////

            this._isAspect          = VALIDATION.isAspect;
            this._isCanvasLabObject = VALIDATION.isCanvasLabObject;
            this._isInDom           = VALIDATION.isInDom;
            this._isPoint           = VALIDATION.isPoint;

            this._clearCanvas     = UTILITIES.misc.clearCanvas;
            this._drawAnchor      = UTILITIES.collection.drawAnchor;
            this._drawAxis        = UTILITIES.draw.axis;
            this._drawBorder      = UTILITIES.draw.border;
            this._drawOptionsPost = UTILITIES.collection.drawOptionsPost;
            this._setAnchorPoint  = UTILITIES.collection.setAnchorPoint;

            this.draw             = UTILITIES.collection.draw;
            this.push             = UTILITIES.collection.push;
            this.redraw           = UTILITIES.collection.redraw;

            Object.defineProperty ( this, 'anchor',    PROPERTY_BLOCKS.combined.anchor       );
            Object.defineProperty ( this, 'area',      PROPERTY_BLOCKS.combined.area         );
            Object.defineProperty ( this, 'canvas',    PROPERTY_BLOCKS.combined.canvas       );
            Object.defineProperty ( this, 'endPoint',  PROPERTY_BLOCKS.combined.endPoint     );
            Object.defineProperty ( this, 'perimeter', PROPERTY_BLOCKS.combined.perimeter    );
            Object.defineProperty ( this, 'point',     PROPERTY_BLOCKS.discrete.point        );
            Object.defineProperty ( this, 'width',     PROPERTY_BLOCKS.combined.aspectWidth  );
            Object.defineProperty ( this, 'height',    PROPERTY_BLOCKS.combined.aspectHeight );
            Object.defineProperty ( this, 'x',         PROPERTY_BLOCKS.discrete.pointX       );
            Object.defineProperty ( this, 'y',         PROPERTY_BLOCKS.discrete.pointY       );

        this.point  = point;
        this.canvas = canvas;

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
         * @see             {@link PROPERTY_BLOCKS.discrete.point}
         */
        set point ( value ) { }

        /**
         * Get point
         * @public
         * @function
         * @return          {Point}                                     X & Y coordinates
         * @see             {@link PROPERTY_BLOCKS.discrete.point}
         */
        get point ( ) { }


        /**
         * Set x-axis value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         * @see             {@link PROPERTY_BLOCKS.discrete.pointX}
         */
        set x ( value ) { }

        /**
         * Get x-axis value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         * @see             {@link PROPERTY_BLOCKS.discrete.pointX}
         */
        get x ( ) { }

        /**
         * Set the y-axis value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         * @see             {@link PROPERTY_BLOCKS.discrete.pointY}
         */
        set y ( value ) { }

        /**
         * Get y-axis value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         * @see             {@link PROPERTY_BLOCKS.discrete.pointY}
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
            return this.#options;
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
         * @see             {@link PROPERTY_BLOCKS.combined.aspect}
         */
        get aspect ( ) { }

        /**
         * Get aspect with
         * @readOnly
         * @function
         * @return          {number}                                    Width value
         * @see             {@link PROPERTY_BLOCKS.combined.aspectWidth}
         */
        get width ( ) { }

        /**
         * Get aspect height
         * @readOnly
         * @function
         * @return          {number}                                    Height value
         * @see             {@link PROPERTY_BLOCKS.combined.aspectHeight}
         */
        get height ( ) { }

    ////    [ ANCHOR ]  ////////////////////////////////////

        /**
         * Set anchor type
         * @public
         * @function
         * @param           {string} value                              Anchor type
         * @see             {@link PROPERTY_BLOCKS.combined.anchor}
         */
        set anchor ( value ) { }

        /**
         * Get anchor
         * @public
         * @function
         * @return          {Anchor}                                    Anchor properties
         * @see             {@link PROPERTY_BLOCKS.combined.anchor}
         */
        get anchor ( ) { }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is an Aspect
         * @private
         * @function
         * @param           {Object} value                              Aspect or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isAspect}
         */
        _isAspect ( ) { }

        /**
         * Returns whether the passed value is a CanvasLab object; Line, Circle, Rectangle, Text
         * @private
         * @function
         * @param           {Object} value                              CanvasLab object; Line, Circle, Rectangle, Text
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isCanvasLabObject}
         */
        _isCanvasLabObject ( value ) { }

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isInDom}
         */
        _isInDom ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isPoint}
         */
        _isPoint ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Draws anchor point
         * @private
         * @function
         * @see             {@link UTILITIES.collection.drawAnchor;}
         */
        _drawAnchor ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {number} offset                             Offset of axis
         * @param           {Object} color                              Color model
         * @param           {number} stop                               Gradient color stop
         * @see             {@link UTILITIES.draw.axis}
         */
        _drawAxis   ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {Aspect} aspect                             Aspect properties
         * @param           {Object} color                              Color model
         * @see             {@link UTILITIES.draw.border}
         */
        _drawBorder  ( ) { }

        /**
         * Draws associated options
         * @private
         * @function
         * @see             {@link UTILITIES.collection.drawOptionsPost;}
         */
        _drawOptionsPost ( ) { }

        /**
         * Triggers associated pre-draw options
         * @private
         * @function
         * @param           {Object}  object                            CanvasLab Object
         * @param           {Options} options                           Options for collections
         */
        _drawOptionsPre ( object, options )
        {
            let _types = [ 'shadow', 'points', 'controlPoints', 'coordinates' ];


            for ( let _type of _types )

                if ( options [ _type ] )

                    object.options [ _type ] = true;
        }

        /**
         * Sets anchor's point against this object's point location
         * @private
         * @function
         * @see             {@link UTILITIES.collection.setAnchorPoint;}
         */
        _setAnchorPoint ( ) { }

        /**
         * Sets aspect
         * @private
         * @function
         */
        _setAspect ( )
        {
            let [ _width, _height ] = [ this._canvas.canvas.clientWidth  * 2, this._canvas.canvas.clientHeight * 2 ]

            let [ _left,  _top    ] = [   _width,   _height ];

            let [ _right, _bottom ] = [ - _width, - _height ];


            if ( this.length > 0 )

                for ( let _object of this )
                {
                    _left   = ( _object.start.x < _left   ) ? _object.start.x : _left;

                    _left   = ( _object.end.x   < _left   ) ? _object.end.x   : _left;


                    _right  = ( _object.start.x > _right  ) ? _object.start.x : _right;

                    _right  = ( _object.end.x   > _right  ) ? _object.end.x   : _right;


                    _top    = ( _object.start.y < _top    ) ? _object.start.y : _top;

                    _top    = ( _object.end.y   < _top    ) ? _object.end.y   : _top;


                    _bottom = ( _object.start.y > _bottom ) ? _object.start.y : _bottom;

                    _bottom = ( _object.end.y   > _bottom ) ? _object.end.y   : _bottom;
                }

            else

                console.warn ( `No ${this.constructor.name} exist to draw !` );


            [ this._aspect.width, this._aspect.height ] = [ _right - _left, _bottom - _top ];
        }

        /**
         * Sets offset of child Line against this constructor's point
         * @private
         * @function
         * @param           {Line} Line                                 Line object
         */
        _setPointOffset ( Line )
        {
            Line.start.x += this.x;

            Line.end.x   += this.x;


            Line.start.y += this.y;

            Line.end.y   += this.y;
        }

        /**
         * Get area of this object
         * @readOnly
         * @function
         * @return          {number}                                    Area of rectangle
         * @see             {@link PROPERTY_BLOCKS.combined.area;}
         */
        get area ( ) { }

        /**
         * Get center of this object
         * @readOnly
         * @function
         * @return          {Point}                                     Center point coordinates
         */
        get center ( )
        {
            const getMin = ( value, start, end ) => ( value === undefined ) ? start : ( start < end ) ? ( start < value ) ? start : value : ( end < value ) ? end : value;

            let _x, _y = undefined;


            for ( let _object of this )
            {
                _x = getMin ( _x, _object.start.x, _object.end.x );

                _y = getMin ( _y, _object.start.y, _object.end.y );
            }


            [ _x, _y ] = [ _x + ( this.width / 2 ), _y + ( this.height / 2 ) ];


            return new Point ( _x, _y );
        }

        /**
         * Returns the last Point within this Array
         * @public
         * @function
         * @return          {Point}                                     Last Array element's X & Y Coordinates
         * @see             {@link PROPERTY_BLOCKS.combined.endPoint;}
         */
        get endPoint ( ) { }

        /**
         * Get perimeter of this object
         * @readOnly
         * @function
         * @return          {number}                                    Perimeter of rectangle
         * @see             {@link PROPERTY_BLOCKS.combined.perimeter;}
         */
        get perimeter ( ) { }

        /**
         * Pushes child object(s) into this collection
         * @public
         * @function
         * @see             {@link UTILITIES.collection.push;}
         */
        push ( ) { }

    ////    DRAW    ////////////////////////////////////////

        /**
         * Draw function for collections
         * @public
         * @function
         * @param           {string} canvas                             Canvas Id
         * @see             {@link UTILITIES.collection.draw}
         */
        draw ( ) { }

        /**
         * Redraw this object
         * @public
         * @function
         * @param           {string}  canvas                            Canvas Id
         * @param           {Point}   point                             Point of new location
         * @param           {boolean} [clear=true]                      Clear canvas during each redraw
         * @see             {@link UTILITIES.collection.redraw}
         */
        redraw ( ) { }
}
 
/**
 * @class           {Array} Rectangles                          Collection of Rectangle objects
 * @property        {Point} point                               X & Y axis coordinates
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 */
class Rectangles extends Array
{
    _point   = new Point;
    _stroke  = new StrokeCollection;
    _shadow  = new ShadowCollection;

    _canvas  = undefined;

    _aspect  = new Aspect;
    _anchor  = new Anchor;
    #options = new Options;

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

            this._isAspect          = VALIDATION.isAspect;
            this._isCanvasLabObject = VALIDATION.isCanvasLabObject;
            this._isInDom           = VALIDATION.isInDom;
            this._isPoint           = VALIDATION.isPoint;

            this._clearCanvas     = UTILITIES.misc.clearCanvas;
            this._drawAnchor      = UTILITIES.collection.drawAnchor;
            this._drawAxis        = UTILITIES.draw.axis;
            this._drawBorder      = UTILITIES.draw.border;
            this._drawOptionsPost = UTILITIES.collection.drawOptionsPost;
            this._setAnchorPoint  = UTILITIES.collection.setAnchorPoint;
            this._setPointOffset  = UTILITIES.collection.setPointOffset;

            this.draw             = UTILITIES.collection.draw;
            this.push             = UTILITIES.collection.push;
            this.redraw           = UTILITIES.collection.redraw;

            Object.defineProperty ( this, 'anchor',    PROPERTY_BLOCKS.combined.anchor       );
            Object.defineProperty ( this, 'area',      PROPERTY_BLOCKS.combined.area         );
            Object.defineProperty ( this, 'aspect',    PROPERTY_BLOCKS.combined.aspect       );
            Object.defineProperty ( this, 'canvas',    PROPERTY_BLOCKS.combined.canvas       );
            Object.defineProperty ( this, 'center',    PROPERTY_BLOCKS.combined.center       );
            Object.defineProperty ( this, 'endPoint',  PROPERTY_BLOCKS.combined.endPoint     );
            Object.defineProperty ( this, 'perimeter', PROPERTY_BLOCKS.combined.perimeter    );
            Object.defineProperty ( this, 'point',     PROPERTY_BLOCKS.discrete.point        );
            Object.defineProperty ( this, 'width',     PROPERTY_BLOCKS.combined.aspectWidth  );
            Object.defineProperty ( this, 'height',    PROPERTY_BLOCKS.combined.aspectHeight );
            Object.defineProperty ( this, 'x',         PROPERTY_BLOCKS.discrete.pointX       );
            Object.defineProperty ( this, 'y',         PROPERTY_BLOCKS.discrete.pointY       );

        this.point  = point;
        this.canvas = canvas;
    }

    ////    [ POINT ]   ////////////////////////////////////

        /**
         * Set point
         * @public
         * @function
         * @param           {Point} value                               X & Y coordinates
         * @see             {@link PROPERTY_BLOCKS.discrete.point}
         */
        set point ( value ) { }

        /**
         * Get point
         * @public
         * @function
         * @return          {Point}                                     X & Y coordinates
         * @see             {@link PROPERTY_BLOCKS.discrete.point}
         */
        get point ( ) { }


        /**
         * Set x-axis value
         * @public
         * @function
         * @param           {number} value                              X coordinate value
         * @see             {@link PROPERTY_BLOCKS.discrete.pointX}
         */
        set x ( value ) { }

        /**
         * Get x-axis value
         * @readOnly
         * @function
         * @return          {number}                                    X coordinate value
         * @see             {@link PROPERTY_BLOCKS.discrete.pointX}
         */
        get x ( ) { }


        /**
         * Set the y-axis value
         * @public
         * @function
         * @param           {number} value                              Y coordinate value
         * @see             {@link PROPERTY_BLOCKS.discrete.pointY}
         */
        set y ( value ) { }

        /**
         * Get y-axis value
         * @readOnly
         * @function
         * @return          {number}                                    Y coordinate value
         * @see             {@link PROPERTY_BLOCKS.discrete.pointY}
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
            return this.#options;
        }

    ////    [ CANVAS ]  ////////////////////////////////////

        /**
         * Set canvas value
         * @public
         * @function
         * @param           {string} value                              Canvas id
         * @see             {@link PROPERTY_BLOCKS.combined.canvas}
         */
        set canvas ( value ) { }

        /**
         * Get canvas value
         * @readOnly
         * @function
         * @return          {string}                                    Canvas id
         * @see             {@link PROPERTY_BLOCKS.combined.canvas}
         */
        get canvas ( ) { }

    ////    [ ASPECT ]  ////////////////////////////////////

        /**
         * Get aspect properties
         * @public
         * @function
         * @return          {Aspect}                                    Aspect properties
         * @see             {@link PROPERTY_BLOCKS.combined.aspect}
         */
        get aspect ( ) { }

        /**
         * Get aspect with
         * @readOnly
         * @function
         * @return          {number}                                    Width value
         * @see             {@link PROPERTY_BLOCKS.combined.aspectWidth}
         */
        get width ( ) { }

        /**
         * Get aspect height
         * @readOnly
         * @function
         * @return          {number}                                    Height value
         * @see             {@link PROPERTY_BLOCKS.combined.aspectHeight}
         */
        get height ( ) { }

    ////    [ ANCHOR ]  ////////////////////////////////////

        /**
         * Set anchor type
         * @public
         * @function
         * @param           {string} value                              Anchor type
         * @see             {@link PROPERTY_BLOCKS.combined.anchor}
         */
        set anchor ( value ) { }

        /**
         * Get anchor
         * @public
         * @function
         * @return          {Anchor}                                    Anchor properties
         * @see             {@link PROPERTY_BLOCKS.combined.anchor}
         */
        get anchor ( ) { }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is an Aspect
         * @private
         * @function
         * @param           {Object} value                              Aspect or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isAspect}
         */
        _isAspect ( ) { }

        /**
         * Returns whether the passed value is a CanvasLab object; Line, Circle, Rectangle, Text
         * @private
         * @function
         * @param           {Object} value                              CanvasLab object; Line, Circle, Rectangle, Text
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isCanvasLabObject}
         */
        _isCanvasLabObject ( ) { }

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isInDom}
         */
        _isInDom ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isPoint}
         */
        _isPoint ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Draws anchor point
         * @private
         * @function
         * @see             {@link UTILITIES.collection.drawAnchor;}
         */
        _drawAnchor ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {number} offset                             Offset of axis
         * @param           {Object} color                              Color model
         * @param           {number} stop                               Gradient color stop
         * @see             {@link UTILITIES.draw.axis}
         */
        _drawAxis   ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {Aspect} aspect                             Aspect properties
         * @param           {Object} color                              Color model
         * @see             {@link UTILITIES.draw.border}
         */
        _drawBorder  ( ) { }

        /**
         * Draws associated options
         * @private
         * @function
         * @see             {@link UTILITIES.collection.drawOptionsPost;}
         */
        _drawOptionsPost ( ) { }

        /**
         * Triggers associated pre-draw options
         * @private
         * @function
         * @param           {Object}  object                            CanvasLab Object
         * @param           {Options} options                           Options for collections
         */
        _drawOptionsPre ( object, options )
        {
            let _types = [ 'shadow', 'points', 'controlPoints', 'coordinates' ];


            for ( let _type of _types )

                if ( options [ _type ] )

                    object.options [ _type ] = true;
        }

        /**
         * Sets anchor's point against this object's point location
         * @private
         * @function
         * @see             {@link UTILITIES.collection.setAnchorPoint;}
         */
        _setAnchorPoint ( ) { }

        /**
         * Sets aspect
         * @private
         * @function
         */
        _setAspect ( )
        {
            let [ _width, _height ] = [ this._canvas.canvas.clientWidth  * 2, this._canvas.canvas.clientHeight * 2 ]

            let [ _left,  _top    ] = [   _width,   _height ];

            let [ _right, _bottom ] = [ - _width, - _height ];


            if ( this.length > 0 )

                for ( let _object of this )
                {
                    _left   = ( _object.x < _left                    ) ? _object.x                  : _left;

                    _right  = ( _object.x + _object.width > _right   ) ? _object.x + _object.width  : _right;

                    _top    = ( _object.y < _top                     ) ? _object.y                  : _top;

                    _bottom = ( _object.y + _object.height > _bottom ) ? _object.y + _object.height : _bottom;
                }

            else

                console.warn ( `No ${this.constructor.name} exist to draw !` );


            [ this._aspect.width,    this._aspect.height   ] = [ _right - _left, _bottom - _top ];

            [ this._aspect.offset.x, this._aspect.offset.y ] = [ _left - 25,     _top - 25      ];
        }

        /**
         * Sets offset of child object against this constructor's point
         * @private
         * @function
         * @param           {Object} Object                             CanvasLab Object
         * @see             {@link UTILITIES.collection.setAnchorPoint;}
         */
        _setPointOffset ( ) { }

        /**
         * Get area of this object
         * @readOnly
         * @function
         * @return          {number}                                    Area of rectangle
         * @see             {@link PROPERTY_BLOCKS.combined.area;}
         */
        get area ( ) { }

        /**
         * Get center of this object
         * @readOnly
         * @function
         * @return          {Point}                                     Center point coordinates
         * @see             {@link PROPERTY_BLOCKS.combined.center;}
         */
        get center ( ) { }

        /**
         * Returns the last Point within this Array
         * @public
         * @function
         * @return          {Point}                                     Last Array element's X & Y Coordinates
         * @see             {@link PROPERTY_BLOCKS.combined.endPoint;}
         */
        get endPoint ( ) { }

        /**
         * Get perimeter of this object
         * @readOnly
         * @function
         * @return          {number}                                    Perimeter of rectangle
         * @see             {@link PROPERTY_BLOCKS.combined.perimeter;}
         */
        get perimeter ( ) { }

        /**
         * Pushes child object(s) into this collection
         * @public
         * @function
         * @see             {@link UTILITIES.collection.push;}
         */
        push ( ) { }

    ////    DRAW    ////////////////////////////////////////

        /**
         * Draw function for collections
         * @public
         * @function
         * @param           {string} canvas                             Canvas Id
         * @see             {@link UTILITIES.collection.draw}
         */
        draw ( ) { }

        /**
         * Redraw this object
         * @public
         * @function
         * @param           {string}  canvas                            Canvas Id
         * @param           {Point}   point                             Point of new location
         * @param           {boolean} [clear=true]                      Clear canvas during each redraw
         * @see             {@link UTILITIES.collection.redraw}
         */
        redraw ( ) { }
}
 
/**
 * @class           {Array} Texts                               Collection of Text objects
 * @property        {Point} point                               X & Y axis coordinates
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 */
class Texts extends Array
{
    _point   = new Point;
    _stroke  = new StrokeCollection;
    _shadow  = new ShadowCollection;

    _canvas  = undefined;

    _aspect  = new Aspect;
    _anchor  = new Anchor;
    #options = new Options;

    _storage = { type: Text }

    /**
     * Create Texts object
     * @property        {Point}             point                   X & Y axis coordinates
     * @property        {HTMLCanvasElement} canvas                  Canvas Id
     */
    constructor ( point = { x: undefined, y: undefined }, canvas )
    {
        super ( );

        ////    COMPOSITION     ////////////////////////////

            this._isAspect          = VALIDATION.isAspect;
            this._isCanvasLabObject = VALIDATION.isCanvasLabObject;
            this._isInDom           = VALIDATION.isInDom;
            this._isPoint           = VALIDATION.isPoint;

            this._clearCanvas     = UTILITIES.misc.clearCanvas;
            this._drawAnchor      = UTILITIES.collection.drawAnchor;
            this._drawAxis        = UTILITIES.draw.axis;
            this._drawBorder      = UTILITIES.draw.border;
            this._drawOptionsPost = UTILITIES.collection.drawOptionsPost;
            this._setAnchorPoint  = UTILITIES.collection.setAnchorPoint;
            this._setPointOffset  = UTILITIES.collection.setPointOffset;

            this.draw             = UTILITIES.collection.draw;
            this.push             = UTILITIES.collection.push;
            this.redraw           = UTILITIES.collection.redraw;

            Object.defineProperty ( this, 'anchor',    PROPERTY_BLOCKS.combined.anchor       );
            Object.defineProperty ( this, 'area',      PROPERTY_BLOCKS.combined.area         );
            Object.defineProperty ( this, 'aspect',    PROPERTY_BLOCKS.combined.aspect       );
            Object.defineProperty ( this, 'canvas',    PROPERTY_BLOCKS.combined.canvas       );
            Object.defineProperty ( this, 'center',    PROPERTY_BLOCKS.combined.center       );
            Object.defineProperty ( this, 'endPoint',  PROPERTY_BLOCKS.combined.endPoint     );
            Object.defineProperty ( this, 'perimeter', PROPERTY_BLOCKS.combined.perimeter    );
            Object.defineProperty ( this, 'point',     PROPERTY_BLOCKS.discrete.point        );
            Object.defineProperty ( this, 'width',     PROPERTY_BLOCKS.combined.aspectWidth  );
            Object.defineProperty ( this, 'height',    PROPERTY_BLOCKS.combined.aspectHeight );
            Object.defineProperty ( this, 'x',         PROPERTY_BLOCKS.discrete.pointX       );
            Object.defineProperty ( this, 'y',         PROPERTY_BLOCKS.discrete.pointY       );

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
            return this.#options;
        }

    ////    [ CANVAS ]  ////////////////////////////////////

        /**
         * Set canvas value
         * @public
         * @function
         * @param           {string} value                              Canvas id
         * @see             {@link PROPERTY_BLOCKS.combined.canvas}
         */
        set canvas ( value ) { }

        /**
         * Get canvas value
         * @readOnly
         * @function
         * @return          {string}                                    Canvas id
         * @see             {@link PROPERTY_BLOCKS.combined.canvas}
         */
        get canvas ( ) { }

    ////    [ ASPECT ]  ////////////////////////////////////

        /**
         * Get aspect properties
         * @public
         * @function
         * @return          {Aspect}                                    Aspect properties
         * @see             {@link PROPERTY_BLOCKS.combined.aspect}
         */
        get aspect ( ) { }

        /**
         * Get aspect with
         * @readOnly
         * @function
         * @return          {number}                                    Width value
         * @see             {@link PROPERTY_BLOCKS.combined.aspectWidth}
         */
        get width ( ) { }

        /**
         * Get aspect height
         * @readOnly
         * @function
         * @return          {number}                                    Height value
         * @see             {@link PROPERTY_BLOCKS.combined.aspectHeight}
         */
        get height ( ) { }

    ////    [ ANCHOR ]  ////////////////////////////////////

        /**
         * Set anchor type
         * @public
         * @function
         * @param           {string} value                              Anchor type
         * @see             {@link PROPERTY_BLOCKS.combined.anchor}
         */
        set anchor ( value ) { }

        /**
         * Get anchor
         * @public
         * @function
         * @return          {Anchor}                                    Anchor properties
         * @see             {@link PROPERTY_BLOCKS.combined.anchor}
         */
        get anchor ( ) { }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is an Aspect
         * @private
         * @function
         * @param           {Object} value                              Aspect or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isAspect}
         */
        _isAspect ( ) { }

        /**
         * Returns whether the passed value is a CanvasLab object; Line, Circle, Rectangle, Text
         * @private
         * @function
         * @param           {Object} value                              CanvasLab object; Line, Circle, Rectangle, Text
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isCanvasLabObject}
         */
        _isCanvasLabObject ( ) { }

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isInDom}
         */
        _isInDom ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isPoint}
         */
        _isPoint ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Draws anchor point
         * @private
         * @function
         * @see             {@link UTILITIES.collection.drawAnchor;}
         */
        _drawAnchor ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {number} offset                             Offset of axis
         * @param           {Object} color                              Color model
         * @param           {number} stop                               Gradient color stop
         * @see             {@link UTILITIES.draw.axis}
         */
        _drawAxis ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {Aspect} aspect                             Aspect properties
         * @param           {Object} color                              Color model
         * @see             {@link UTILITIES.draw.border}
         */
        _drawBorder ( ) { }

        /**
         * Draws associated options
         * @private
         * @function
         * @see             {@link UTILITIES.collection.drawOptionsPost;}
         */
        _drawOptionsPost ( ) { }

        /**
         * Triggers associated pre-draw options
         * @private
         * @function
         * @param           {Object}  object                            CanvasLab Object
         * @param           {Options} options                           Options for collections
         */
        _drawOptionsPre ( object, options )
        {
            let _types = [ 'shadow', 'points', 'controlPoints', 'coordinates' ];


            for ( let _type of _types )

                if ( options [ _type ] )

                    object.options [ _type ] = true;
        }

        /**
         * Sets anchor's point against this object's point location
         * @private
         * @function
         * @see             {@link UTILITIES.collection.setAnchorPoint;}
         */
        _setAnchorPoint ( ) { }

        /**
         * Sets aspect
         * @private
         * @function
         */
        _setAspect ( )
        {
            let [ _width, _height ] = [ this._canvas.canvas.clientWidth  * 2, this._canvas.canvas.clientHeight * 2 ]

            let [ _left,  _top    ] = [   _width,   _height ];

            let [ _right, _bottom ] = [ - _width, - _height ];

            let _padding            = { left: 14, top: 9 }


            if ( this.length > 0 )

                for ( let _object of this )
                {
                    let _width  = this._canvas.measureText ( this.text ).width;

                    let _height = this._canvas.fontBoundingBoxAscent + this._canvas.fontBoundingBoxDescent;


                    _left   = ( _object.x < _left             ) ? _object.x           : _left;

                    _right  = ( _object.x + _width > _right   ) ? _object.x + _width  : _right;

                    _top    = ( _object.y < _top              ) ? _object.y           : _top;

                    _bottom = ( _object.y + _height > _bottom ) ? _object.y + _height : _bottom;
                }

            else

                console.warn ( `No ${this.constructor.name} exist to draw !` );


            [ this._aspect.width,    this._aspect.height   ] = [ _right - _left, _bottom - _top ];

            [ this._aspect.offset.x, this._aspect.offset.y ] = [ _left - _padding.left, _top - _padding.top ];
        }

        /**
         * Sets offset of child object against this constructor's point
         * @private
         * @function
         * @param           {Object} Object                             CanvasLab Object
         * @see             {@link UTILITIES.collection.setAnchorPoint;}
         */
        _setPointOffset ( ) { }

        /**
         * Get area of this object
         * @readOnly
         * @function
         * @return          {number}                                    Area of rectangle
         * @see             {@link PROPERTY_BLOCKS.combined.area;}
         */
        get area ( ) { }

        /**
         * Get center of this object
         * @readOnly
         * @function
         * @return          {Point}                                     Center point coordinates
         * @see             {@link PROPERTY_BLOCKS.combined.center;}
         */
        get center ( ) { }

        /**
         * Returns the last Point within this Array
         * @public
         * @function
         * @return          {Point}                                     Last Array element's X & Y Coordinates
         * @see             {@link PROPERTY_BLOCKS.combined.endPoint;}
         */
        get endPoint ( ) { }

        /**
         * Get perimeter of this object
         * @readOnly
         * @function
         * @return          {number}                                    Perimeter of rectangle
         * @see             {@link PROPERTY_BLOCKS.combined.perimeter;}
         */
        get perimeter ( ) { }

        /**
         * Pushes child object(s) into this collection
         * @public
         * @function
         * @see             {@link UTILITIES.collection.push;}
         */
        push ( ) { }

    ////    DRAW    ////////////////////////////////////////

        /**
         * Draw function for collections
         * @public
         * @function
         * @param           {string} canvas                             Canvas Id
         * @see             {@link UTILITIES.collection.draw}
         */
        draw ( ) { }

        /**
         * Redraw this object
         * @public
         * @function
         * @param           {string}  canvas                            Canvas Id
         * @param           {Point}   point                             Point of new location
         * @param           {boolean} [clear=true]                      Clear canvas during each redraw
         * @see             {@link UTILITIES.collection.redraw}
         */
        redraw ( ) { }
}

////    DATA_STRUCTURES    /////////////////////////////////
 
/**
 * @class           {Object} Queue                              Queue object
 * @property        {Array}  entries                            Array of entries
 * @property        {number} [index=0]                          Current index
 * @property        {Object} entry                              Current entry
 */
class Queue
{
    _entries = new Array;
    _index   = 0;
    _entry   = undefined;
    
    #touched = false;

    /**
     * Create a Queue object
     * @property        {Array} entries                             Array of entries
     */
    constructor ( entries )
    {
        if ( Array.isArray ( entries ) )

            this.entries = entries;

        else

            for ( let _value of arguments )

                this.entry = _value;
    }

    ////    [ ENTRIES ]    /////////////////////////////////

        /**
         * Set entries
         * @public
         * @function
         * @param           {Array} value                               Array of entries
         */
        set entries ( value )
        {
            this._entries = Array.isArray ( value ) ? value : this._entries;
        }

        /**
         * Get entries
         * @public
         * @function
         * @return          {Array}                                     Array of entries
         */
        get entries ( )
        {
            return this._entries;
        }
    
    ////    [ INDEX ]    ///////////////////////////////////

        /**
         * Get index
         * @readOnly
         * @function
         * @return          {number}                                    Current index value
         */
        get index ( )
        {
            return this._index;
        }

    ////    [ ENTRY ]    ///////////////////////////////////

        /**
         * Pushes in an entry
         * @public
         * @function
         */
        set entry ( value )
        {
            if ( typeof value === 'object' || typeof value === 'function' )

                this._entries.push ( value );
        }

        /**
         * Get current entry
         * @public
         * @function
         * @return          {Object}                                    Current entry
         */
        get entry ( )
        {
            return this._entry;
        }

    ////    VALIDATION    //////////////////////////////////

        /**
         * Returns whether this queue is at its end
         * @public
         * @function
         * @return          {boolean}                                   True || False
         */
        get isEnd ( )
        {
            return ( this.#touched  &&  this._index === 0 );
        }

        /**
         * Returns whether this queue is on its last element
         * @public
         * @function
         * @return          {boolean}                                   True || False
         */
        get isLast ( )
        {
            return ( ( this._entries.length - 1 ) === this._index );
        }

        /**
         * Returns whether this queue is set, or populated
         * @public
         * @function
         * @return          {boolean}                                   True || False
         */
        get isSet ( )
        {
            return ( this._entries.length > 0 );
        }

    ////    UTILITIES    ///////////////////////////////////

        /**
         * Returns next entry; begins with [ 0 ], or first entry
         * @public
         * @function
         * @return          {Object}                                    Next entry
         */
        get next ( )
        {
            this.#touched = true;


            let _entry = this._entries [ this._index ];


            if ( this._index === this._entries.length - 1 )

                this._index = 0;

            else

                this._index = this._index + 1;


            return _entry;
        }

        /**
         * Resets index to 0
         * @public
         * @function
         */
        get reset ( )
        {
            [ this._index, this.#touched ] = [ 0, false ];
        }
}

////    HANDLERS    ////////////////////////////////////////
 
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

    #queue = new Queue;

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

    ////    [ QUEUE ]    ///////////////////////////////////

        /**
         * Set queue
         * @public
         * @function
         * @param           {Queue} value                               Queue object
         */
        set queue ( value )
        {
            this.#queue = ( value instanceof Queue ) ? value : this.#queue;
        }

        /**
         * Get queue
         * @readOnly
         * @function
         * @return          {Queue}                                     Queue object
         */
        get queue ( )
        {
            return this.#queue;
        }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is a Number value
         * @private
         * @function
         * @param           {number} value                              Number value
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isNumber}
         */
        _isNumber ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Checks whether queue property is set, and sets duration, timing, and draw properties respectively
         * @private
         * @function
         */
        _checkQueue ( )
        {
            if ( this.queue.isSet )
            {
                let _animate  = this.queue.next;


                this.duration = _animate.duration;

                this.timing   = _animate.timing;

                this.draw     = _animate.draw;
            }
        }

        /**
         * Returns properties animation properties for execution
         * @private
         * @function
         * @return          {Object}                                    Animation properties
         */
        _getAnimationProperties ( )
        {
            this._checkQueue ( );


            let _results =
            {
                duration:   this._duration,                 // {number}
                timing:     this._timing,                   // {function}
                draw:       this._draw,                     // {function}
                queue:      this.queue,                     // {Queue}
                callback:   ( ) => this.animate ( )         // {function}
            }


            return _results;
        }

        /**
         * Initiates animation
         * @public
         * @function
         */
        animate ( )
        {
            let _props = this._getAnimationProperties ( );


            if ( this._timing  &&  this._draw )
            {
                let _start = performance.now ( );


                requestAnimationFrame (

                    function animate ( time )
                    {
                        let _timeFraction =  ( time - _start ) / _props.duration;                   // timeFraction goes from 0 to 1

                        let _progress     = _props.timing ( _timeFraction );                        // calculate the current animation state


                        _props.draw ( _progress );                                                  // draw it


                        if ( _timeFraction < 1 )

                            requestAnimationFrame ( animate );

                        else

                            if ( _props.queue.isSet  &&  ! _props.queue.isEnd )

                                _props.callback ( );

                            else

                                console.log ( 'animation complete !' );
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
            Updated:   'Aug, 07 2024',
            Version:   '0.5.129',
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

        /**
         * Get dom details
         * @readOnly
         * @function
         * @return          {Object}                                    DOM details
         */
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
         * @see             {@link VALIDATION.isInDom}
         */
        _isInDom ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Returns center ( x & y coordinates ) for the present window
         * @private
         * @function
         * @return          {Object}                                    X & Y Coordinates
         */
        get _center ( )
        {
            let _center =
            {
                x: ( ( window.innerWidth  - 18 ) /  4 ),

                y: ( ( window.innerHeight - 4  ) /  2 )
            }


            return _center;
        }

        /**
         * Creates a new animation instance
         * @param           {Queue|Object} sequence                     Contains timing, draw, & duration values & functions
         * @param           {number}       sequence.duration            Duration of animation
         * @param           {Function}     sequence.timing              Timing function
         * @param           {Function}     sequence.draw                Draw function
         */
        set animation ( sequence = { duration, timing, draw } )
        {
            if ( sequence instanceof Queue )
            {
                let _animation       = new Animation;

                    _animation.queue = sequence;

                    _animation.animate ( );
            }
            else
            {
                let _animation = new Animation ( sequence.duration, sequence.timing, sequence.draw );

                    _animation.animate ( );
            }
        }
}

////    INITIALIZATION  ////////////////////////////////////

/**
 * Initiates canvasLab
 * @param           {string} [canvas]                   Canvas identifier
 */
let initCanvasLab = ( canvas ) =>
{
    if ( typeof canvasLab === 'function' && typeof window.canvaslab  === 'undefined' )

        window.canvaslab = new canvasLab ( canvas );
}

////    PLANS    ///////////////////////////////////////////
 
/**
 * @class           {Object} SacredCircles                      SacredCircles plan
 * @property        {Point}  point                              X & Y axis coordinates
 * @property        {number} [radius=25]                        Radius of circle
 * @property        {number} iterations                         Amount of iterations
 * @property        {Queue}  degrees                            Degrees for generation
 * @property        {Queue}  colors                             Colors for generation
 * @property        {Object} master                             Master collection
 */
class SacredCircles
{
    _point      = new Point;
    _radius     = 25;
    _iterations = undefined;
    _degrees    = undefined;
    _colors     = new Queue ( [ new Rgb ( 255, 255, 255, 0 ) ] );

    _master     = undefined;

    #numbers    = undefined;
    #tangents   = undefined;
    #counter    = -1;                                       /* Counter to define the gaps between each circle: @see this.create ( ) */

    /**
     * Create a SacredCircles plan
     * @property        {Point}  point                              X & Y axis coordinates
     * @property        {number} [radius=25]                        Radius of circle
     * @property        {number} iterations                         Amount of iterations
     * @property        {Queue}  degrees                            Degrees for generation
     * @property        {Queue}  colors                             Colors for generation
     */
    constructor ( point = { x: undefined, y: undefined }, radius, iterations, degrees, colors )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isNumber = VALIDATION.isNumber;
            this._isPoint  = VALIDATION.isPoint;

            Object.defineProperty ( this, 'point',  PROPERTY_BLOCKS.discrete.point  );
            Object.defineProperty ( this, 'radius', PROPERTY_BLOCKS.discrete.radius );

        this.point      = point;
        this.radius     = radius;
        this.iterations = iterations;
        this.degrees    = degrees;
        this.colors     = colors;

        this._tangents  = iterations;
    }

    ////    [ POINT ]    ///////////////////////////////////

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

    ////    [ RADIUS ]  ////////////////////////////////////

        /**
         * Set radius value
         * @public
         * @function
         * @param           {number} value                              Radius of circle
         */
        set radius ( value ) { }

        /**
         * Get radius value
         * @readOnly
         * @function
         * @return          {number}                                    Radius of circle
         */
        get radius ( ) { }

    ////    [ ITERATIONS ]    //////////////////////////////

        /**
         * Set iterations value
         * @public
         * @function
         * @param           {number} value                              Number of iterations
         */
        set iterations ( value )
        {
            this._iterations = ( this._isNumber ( value ) ) ? value : this._iterations;
        }

        /**
         * Get iterations value
         * @readOnly
         * @function
         * @return          {number}                                    Number of iterations
         */
        get iterations ( )
        {
            return this._iterations;
        }

    ////    [ DEGREES ]    /////////////////////////////////

        /**
         * Set degrees value
         * @public
         * @function
         * @param           {Array} value                               Array of degrees
         */
        set degrees ( value )
        {
            this._degrees = ( Array.isArray ( value ) ) ? new Queue ( value ) : this._degrees;
        }

        /**
         * Get degrees value
         * @readOnly
         * @function
         * @return          {Queue}                                     Queue of degrees
         */
        get degrees ( )
        {
            return this._degrees;
        }

    ////    [ COLORS ]    //////////////////////////////////

        /**
         * Set colors value
         * @public
         * @function
         * @param           {Array} value                               Array of colors
         */
        set colors ( value )
        {
            this._colors = ( Array.isArray ( value ) ) ? new Queue ( value ) : this._colors;
        }

        /**
         * Get colors value
         * @readOnly
         * @function
         * @return          {Queue}                                     Queue of colors
         */
        get colors ( )
        {
            return this._colors;
        }

    ////    [ MASTER ]    //////////////////////////////////

        /**
         * Get master collection
         * @public
         * @function
         * @return          {Object}                                    Master collection
         */
        get master ( )
        {
            return this._master;
        }

    ////    [ NUMBERS ]    /////////////////////////////////

        /**
         * Set numbers value
         * @private
         * @function
         * @param           {Array} value                               Array of numbers
         */
        set _numbers ( value )
        {
            this.#numbers = ( Array.isArray ( value ) ) ? new Queue ( value ) : this.#numbers;
        }

    ////    [ TANGENTS ]    ////////////////////////////////

        /**
         * Set tangents value
         * @private
         * @function
         * @param           {number} value                              Number of tangents
         */
        set _tangents ( value )
        {
            this.#tangents = ( Number.isInteger ( value ) ) ? this._getTangents ( value ) : this.#tangents;
        }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is a Number value
         * @private
         * @function
         * @param           {number} value                              Number value
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isNumber}
         */
        _isNumber ( ) { }

        /**
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isPoint}
         */
        _isPoint  ( ) { }

    ////    UTILITIES    ///////////////////////////////////

        /**
         * Returns an array of all tangents for each iteration
         * @private
         * @function
         * @return          {Array}                                     Tangents for each iteration
         */
        _getTangents ( )
        {
            let _results = new Array;

            let _count   = 0;


            for ( let _i = 1; _i <= this.iterations; _i++ )
            {
                _results.push ( _count * 6 );

                _count = _i + _count;
            }


            if ( this.iterations > 1 )

                _results.shift ( );


            return _results;
        }

        /**
         * Get total objects
         * @public
         * @function
         * @return          {number}                                    Total objects
         */
        get totalObjects ( )
        {
            if ( this.#tangents === undefined )

                this.#tangents = this._getTangents ( );


            return this.#tangents [ this.#tangents.length - 1 ];
        }

        _insertShapeA ( point, degree, color, iterator )
        {
            let _distance  = this.radius * iterator;

            let _circle    = new Circle (
                                 point,                     /* Point  */
                                 this.radius,               /* Radius */
                                 undefined,                 /* Angle  */
                                 undefined,                 /* Stroke */
                                 new Fill ( color ),        /* Fill   */
                                 undefined,                 /* Shadow */
                                 undefined                  /* Canvas */
                             );


                _circle.move ( degree, _distance );


            let _rectangle = new Rectangle (
                                 point,                     /* Point  */
                                 undefined,                 /* Aspect */
                                 undefined,                 /* Round  */
                                 undefined,                 /* Stroke */
                                 new Fill ( color ),        /* Fill   */
                                 undefined,                 /* Shadow */
                                 undefined                  /* Canvas */
                             );


                _rectangle.move ( degree, _distance );


            let _text      = new Text (
                                 _circle.point,
                                 this.#numbers.next,
                                 undefined,                 /* Type     */
                                 undefined,                 /* Size     */
                                 undefined,                 /* Weight   */
                                 undefined,                 /* maxWidth */
                                 undefined,                 /* Stroke   */
                                 undefined,                 /* Fill     */
                                 undefined,                 /* Shadow   */
                                 undefined                  /* Canvas   */
                             );


            this.master.circles.push    ( _circle    );

            this.master.rectangles.push ( _rectangle );

            this.master.texts.push      ( _text      );
        }

        _insertShapeB ( degree, color )
        {
            let _point     = this.master.circles.endPoint;

            let _distance  = this.radius;

            let _circle    = new Circle (
                                 _point,                    /* Point  */
                                 this.radius,               /* Radius */
                                 undefined,                 /* Angle  */
                                 undefined,                 /* Stroke */
                                 new Fill ( color ),        /* Fill   */
                                 undefined,                 /* Shadow */
                                 undefined                  /* Canvas */
                             );


                _circle.move ( degree, _distance );


            let _rectangle = new Rectangle (
                                 _point,                    /* Point  */
                                 undefined,                 /* Aspect */
                                 undefined,                 /* Round  */
                                 undefined,                 /* Stroke */
                                 new Fill ( color ),        /* Fill   */
                                 undefined,                 /* Shadow */
                                 undefined                  /* Canvas */
                             );

                _rectangle.move ( degree, _distance );

            let _line      = new Line (
                                 _point,                    /* Start   */
                                 _circle.point,             /* End     */
                                 undefined,                 /* Stroke  */
                                 undefined,                 /* Shadow  */
                                 undefined,                 /* lineCap */
                                 undefined                  /* Canvas  */
                             );

            let _text      = new Text (
                                 _circle.point,
                                 this.#numbers.next,
                                 undefined,                 /* Type     */
                                 undefined,                 /* Size     */
                                 undefined,                 /* Weight   */
                                 undefined,                 /* maxWidth */
                                 undefined,                 /* Stroke   */
                                 undefined,                 /* Fill     */
                                 undefined,                 /* Shadow   */
                                 undefined                  /* Canvas   */
                             );


            this.master.circles.push    ( _circle    );

            this.master.rectangles.push ( _rectangle );

            this.master.lines.push      ( _line      );

            this.master.texts.push      ( _text      );
        }

        _insertCouplingLines ( )
        {
            let _lastIndex  = this.master.circles.length - 1;


            if ( this.#tangents.includes ( _lastIndex ) )
            {
                this.#counter += 6;


                let _firstIndex = _lastIndex - this.#counter;

                let _firstPoint = this.master.circles [ _firstIndex ].point;

                let _lastPoint  = this.master.circles [ _lastIndex  ].point;


                this.master.lines.push ( new Line ( _lastPoint, _firstPoint ) );
            }
        }

    ////    INITIALIZER    /////////////////////////////////

        /**
         * Sets this plan
         * @public
         * @function
         */
        init ( )
        {
            this._numbers = Array.from ( { length: this.totalObjects }, ( element, index ) => index.toString ( ) );


            let _alpha = 0.1;


            for ( let _i = 0; _i < this.iterations; _i++ )
            {
                this.degrees.reset;

                ////    FOUNDATION STONE    ////////////////////////////////////

                let [ _degree, _color ] = [ this.degrees.next, this.colors.next ];                  // Number: 00, Degree: 270


                for ( let _stone = 0; _stone < 1; _stone++ )

                     this._insertShapeA ( this.point, _degree, _color, _i );

                ////    FILLER STONE(S)    /////////////////////////////////////

                    [ _degree, _color ] = [ this.degrees.next, this.colors.next ];                  // Number: 01, Degree: 150


                for ( let _stone = 0; _stone <= ( _i - 1 ); _stone++ )

                     this._insertShapeB ( _degree, _color );

                    [ _degree, _color ] = [ this.degrees.next, this.colors.next ];                  // Number: 02,  Degree: 90


                for ( let _stone = 0; _stone <= ( _i - 1 ); _stone++ )

                    this._insertShapeB ( _degree, _color );

                    [ _degree, _color ] = [ this.degrees.next, this.colors.next ];                  // Number: 03,  Degree: 30


                for ( let _stone = 0; _stone <= ( _i - 1 ); _stone++ )

                  this._insertShapeB ( _degree, _color );

                    [ _degree, _color ] = [ this.degrees.next, this.colors.next ];                  // Number: 04, Degree: 330


                for ( let _stone = 0; _stone <= ( _i - 1 ); _stone++ )

                  this._insertShapeB ( _degree, _color );

                    [ _degree, _color ] = [ this.degrees.next, this.colors.next ];                  // Number: 05, Degree: 270


                for ( let _stone = 0; _stone <= ( _i - 1 ); _stone++ )

                  this._insertShapeB ( _degree, _color );

                ////    KEYSTONE    ////////////////////////////////////////////

                    [ _degree, _color ] = [ this.degrees.next, this.colors.next ];                  // Number: 06, Degree: 210


                for ( let _stone = 0; _stone <= ( _i - 2 ); _stone++ )

                  this._insertShapeB ( _degree, _color );


                this._insertCouplingLines ( );
            }


            this.master.circles.reverse ( );

            this.master.rectangles.reverse ( );
        }
}
