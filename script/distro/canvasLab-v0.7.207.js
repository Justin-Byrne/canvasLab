// @program: 		canvasLab 
// @brief: 			HTML5 canvas illustration & animation framework 
// @author: 		Justin D. Byrne 
// @email: 			justin@byrne-systems.com 
// @version: 		0.7.207 
// @license: 		GPL-2.0

"use strict";

////    TYPEDEFS    ////////////////////////////////////////
 
/**
 * Canvas Lab object
 * @typedef 		{Object} clObject
 */

/**
 * Canvas Lab collection
 * @typedef 		{Object} clCollection
 */

/**
 * Canvas Lab Template, for the creation of objects through a collection
 * @typedef 		{Object}   Template
 * @property 		{Point}    point 							X & Y coordinates
 * @property 		{clObject} master 							Master Canvas Lab object
 * @property 		{Function} init 							Initialization of Template
 */

/**
 * Change, for animation changes through a transition
 * @typedef 		{Object} clChange
 */

/**
 * Transition, for animation transition instances
 * @typedef 		{Object}   Transition
 * @param           {clObject} transition.object            	CanvasLab Object
 * @param           {Function} transition.timing            	Timing function
 * @param           {number}   transition.period            	Period of time
 * @param           {clChange} transition.change            	Changes to object
 */

////    COMPONENTS    //////////////////////////////////////
 
/**
 * Base module for shared accessors & mutators
 * @namespace       PROPERTY_BLOCKS
 */
const PROPERTY_BLOCKS =
{
    /**
     * Individual property accessors & mutators
     * @var             {Object} PROPERTY_BLOCKS.individual
     */
    individual:
    {
        /** @function PROPERTY_BLOCKS.individual.alpha                                           **/
        alpha:
        {
            /**
             * Set alpha value
             * @public
             * @function
             * @param           {number} value                              Alpha value; 0 - 1
             */
            set ( value )
            {
                this._alpha = ( value <= 1  &&  value >= 0 ) ? value : this._alpha;
            },

            /**
             * Set alpha value
             * @public
             * @function
             * @return          {number}                                    Alpha value; 0 - 1
             */
            get ( )
            {
                return this._alpha;
            }
        },
        /** @function PROPERTY_BLOCKS.individual.area                                            **/
        /** @notes for <Rectangle>, <cImage>                                                     **/
        area:
        {
            /**
             * Get area of this object
             * @readOnly
             * @function
             * @return          {number}                                    Area of this object
             */
            get ( )
            {
                return ( this.width * this.height );
            }
        },
        /** @function PROPERTY_BLOCKS.individual.canvas                                          **/
        canvas:
        {
            /**
             * Set canvas value
             * @public
             * @function
             * @param           {string} value                              Canvas id
             */
            set ( value )
            {
                this._canvas = ( value ) ? ( this._isInDom ( value ) )

                                               ? document.getElementById ( value ).getContext ( '2d' )

                                               : console.warn ( `"${value}" is not a valid DOM element !` )

                                         : ( window.canvaslab.canvas )

                                               ? document.getElementById ( window.canvaslab.canvas ).getContext ( '2d' )

                                               : this._canvas;
            },

            /**
             * Get canvas value
             * @readOnly
             * @function
             * @return          {string}                                    Canvas id
             */
            get ( )
            {
                return ( this._canvas != undefined ) ? this._canvas.canvas.id : undefined;
            }
        },
        /** @function PROPERTY_BLOCKS.individual.center                                          **/
        /** @notes for <Rectangle>, <cImage>                                                     **/
        center:
        {
            /**
             * Get center of this object
             * @readOnly
             * @function
             * @return          {Point}                                     Center point coordinates
             */
            get ( )
            {
                let _x = this.x - ( this.x - this.anchor.x ) + ( this.width  / 2 );

                let _y = this.y - ( this.y - this.anchor.y ) + ( this.height / 2 );


                return new Point ( _x, _y );
            }
        },
        /** @function PROPERTY_BLOCKS.individual.master                                          **/
        master:
        {
            /**
             * Set master object
             * @public
             * @function
             * @param           {clObject} value                            Canvas Lab object
             */
            set ( value )
            {
                this._master = ( this._isCanvasLabObject ( value ) ) ? value : this._master;
            },

            /**
             * Get master object
             * @public
             * @function
             * @return          {clObject}                                  Master Canvas Lab object
             */
            get ( )
            {
                return this._master;
            }
        },
        /** @function PROPERTY_BLOCKS.individual.offset                                          **/
        offset:
        {
            /**
             * Set offset
             * @public
             * @function
             * @param           {Point} value                               Shadow offset
             */
            set ( value )
            {
                this._offset = ( this._isPoint ( value ) ) ? value : this._offset;
            },

            /**
             * Get offset
             * @public
             * @function
             * @return          {Point}                                     Shadow offset
             */
            get ( )
            {
                return this._offset;
            }
        },
        /** @function PROPERTY_BLOCKS.individual.offsetX                                         **/
        offsetX:
        {
            /**
             * Set x-axis offset value
             * @public
             * @function
             * @param           {number} value                              X coordinate value
             */
            set ( value )
            {
                this._offset.x = value;
            },

            /**
             * Get x-axis offset value
             * @readOnly
             * @function
             * @return          {number}                                    X coordinate value
             */
            get ( )
            {
                return this._offset.x;
            }
        },
        /** @function PROPERTY_BLOCKS.individual.offsetY                                         **/
        offsetY:
        {
            /**
             * Set the y-axis offset value
             * @public
             * @function
             * @param           {number} value                              Y coordinate value
             */
            set ( value )
            {
                this._offset.y = value;
            },

            /**
             * Get y-axis offset value
             * @readOnly
             * @function
             * @return          {number}                                    Y coordinate value
             */
            get ( )
            {
                return this._offset.y;
            }
        },
        /** @function PROPERTY_BLOCKS.individual.point                                           **/
        point:
        {
            /**
             * Set point
             * @public
             * @function
             * @param           {Point} value                               X & Y coordinates
             */
            set ( value )
            {
                this._point = ( this._isPoint ( value ) ) ? new Point ( value.x, value.y ) : this._point;
            },

            /**
             * Get point
             * @public
             * @function
             * @return          {Point}                                     X & Y coordinates
             */
            get ( )
            {
                return this._point;
            }
        },
        /** @function PROPERTY_BLOCKS.individual.pointX                                          **/
        pointX:
        {
            /**
             * Set x-axis value
             * @public
             * @function
             * @param           {number} value                              X coordinate value
             */
            set ( value )
            {
                this._point.x = value;
            },

            /**
             * Get x-axis value
             * @readOnly
             * @function
             * @return          {number}                                    X coordinate value
             */
            get ( )
            {
                return this._point.x;
            }
        },
        /** @function PROPERTY_BLOCKS.individual.pointY                                          **/
        pointY:
        {
            /**
             * Set the y-axis value
             * @public
             * @function
             * @param           {number} value                              Y coordinate value
             */
            set ( value )
            {
                this._point.y = value;
            },

            /**
             * Get y-axis value
             * @readOnly
             * @function
             * @return          {number}                                    Y coordinate value
             */
            get ( )
            {
                return this._point.y;
            }
        },
        /** @function PROPERTY_BLOCKS.individual.perimeter                                       **/
        perimeter:
        {
            /**
             * Get perimeter
             * @readOnly
             * @function
             * @return          {number}                                    Perimeter of rectangle
             */
            get ( )
            {
                return ( this.area * 2 );
            }
        },
        /** @function PROPERTY_BLOCKS.individual.radius                                          **/
        radius:
        {
            /**
             * Set radius
             * @public
             * @function
             * @param           {number} value                              Radius of circle
             */
            set ( value )
            {
                this._radius = ( typeof value === 'number' && value > 0 ) ? value : this._radius;
            },

            /**
             * Get radius
             * @readOnly
             * @function
             * @return          {number}                                    Radius of circle
             */
            get ( )
            {
                return this._radius;
            }
        },
        /** @function PROPERTY_BLOCKS.individual.template                                        **/
        template:
        {
            /**
             * Set template
             * @public
             * @function
             * @param           {Template} value                            Template object
             */
            set ( value )
            {
                this._template = ( this._isTemplate ( value ) ) ? value : this._template;
            },

            /**
             * Get template
             * @public
             * @function
             * @return          {Template}                                  Template object
             */
            get ( )
            {
                return this._template;
            }
        },
        /** @function PROPERTY_BLOCKS.individual.transitions                                     **/
        transitions:
        {
            /**
             * Set transitions
             * @public
             * @function
             * @param           {Template} value                            Template object
             */
            set ( value )
            {
                if ( this._isTransition ( value ) )

                    [ this._transitions, value.template ] = [ value, this ];
            },

            /**
             * Get transitions
             * @public
             * @function
             * @return          {Template}                                  Template object
             */
            get ( )
            {
                return this._transitions;
            }
        },
    },

    /**
     * Collection property accessors & mutators
     * @var             {Object} PROPERTY_BLOCKS.collection
     */
    collection:
    {
        /** @function PROPERTY_BLOCKS.collection.anchor                                          **/
        anchor:
        {
            /**
             * Set anchor type
             * @public
             * @function
             * @param           {string} value                              Anchor type
             */
            set ( value )
            {
                this._anchor.type = ( this._isAnchor ( value ) ) ? value : this._anchor.type;


                this._setAnchorPoint ( );
            },

            /**
             * Get anchor
             * @public
             * @function
             * @return          {Anchor}                                    Anchor properties
             */
            get ( )
            {
                return this._anchor;
            }
        },
        /** @function PROPERTY_BLOCKS.collection.area                                            **/
        area:
        {
            /**
             * Get area of this object
             * @readOnly
             * @function
             * @return          {number}                                    Area of rectangle
             */
            get ( )
            {
                return ( this.width * this.height );
            }
        },
        /** @function PROPERTY_BLOCKS.collection.aspect                                          **/
        aspect:
        {
            /**
             * Get aspect properties
             * @public
             * @function
             * @return          {Aspect}                                    Aspect properties
             */
            get ( )
            {
                this._setAspect ( );


                return this._aspect;
            }
        },
        /** @function PROPERTY_BLOCKS.collection.aspectWidth                                     **/
        aspectWidth:
        {
            /**
             * Get aspect with
             * @readOnly
             * @function
             * @return          {number}                                    Width value
             */
            get ( )
            {
                return this._aspect.width;
            }
        },
        /** @function PROPERTY_BLOCKS.collection.aspectHeight                                    **/
        aspectHeight:
        {
            /**
             * Get aspect height
             * @readOnly
             * @function
             * @return          {number}                                    Height value
             * @see             {@link PROPERTY_BLOCKS.collection.aspectHeight}
             */
            get ( )
            {
                return this._aspect.height;
            }
        },
        /** @function PROPERTY_BLOCKS.collection.canvas                                          **/
        canvas:
        {
            /**
             * Set canvas value
             * @public
             * @function
             * @param           {string} value                              Canvas id
             */
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

                        if ( _object )

                            _object.canvas = this.canvas;
            },

            /**
             * Get canvas value
             * @readOnly
             * @function
             * @return          {string}                                    Canvas id
             */
            get ( )
            {
                return ( this._canvas != undefined ) ? this._canvas.canvas.id : undefined;
            }
        },
        /** @function PROPERTY_BLOCKS.collection.center                                          **/
        center:
        {
            /**
             * Get center of this object
             * @readOnly
             * @function
             * @return          {Point}                                     Center point coordinates
             */
            get ( )
            {
                let [ _x, _y ] = [ this.width / 2, this.height / 2 ];


                return new Point ( _x, _y );
            }
        },
        /** @function PROPERTY_BLOCKS.collection.endPoint                                        **/
        endPoint:
        {
            /**
             * Returns the last Point within this Array
             * @public
             * @function
             * @return          {Point}                                     Last Array element's X & Y Coordinates
             */
            get ( )
            {
                return this [ this.length - 1 ].point;
            }
        },
        /** @function PROPERTY_BLOCKS.collection.perimeter                                       **/
        perimeter:
        {
            /**
             * Get perimeter of this object
             * @readOnly
             * @function
             * @return          {number}                                    Perimeter of rectangle
             */
            get ( )
            {
                return ( this.area * 2 );
            }
        },
        /** @function PROPERTY_BLOCKS.collection.template                                        **/
        template:
        {
            /**
             * Set template
             * @public
             * @function
             * @param           {Object} value                              Template object
             */
            set ( value )
            {
                if ( this._isTemplate ( value ) )
                {
                    [ this._template, this._template._master ] = [ value, this ];


                    this._template.init ( );

                    this._setAllCanvases ( );
                }
            },

            /**
             * Get template
             * @readOnly
             * @function
             * @return          {Object}                                    Template object
             */
            get ( )
            {
                return this._template;
            }
        },
    },

    /**
     * Animation property accessors & mutators
     * @var             {Object} PROPERTY_BLOCKS.animation
     */
    animation:
    {
        /** @function PROPERTY_BLOCKS.animation.cache                                            **/
        cache:
        {
            /**
             * Set cache
             * @public
             * @function
             * @param           {boolean} value                             True || False
             */
            set ( value )
            {
                this._options.cache = ( typeof value == 'boolean' ) ? value : this._options.cache;
            },

            /**
             * Get cache
             * @readOnly
             * @function
             * @return          {boolean}                                   True || False
             */
            get ( )
            {
                return this._options.cache;
            }
        },
        /** @function PROPERTY_BLOCKS.animation.cancel                                           **/
        cancel:
        {
            /**
             * Cancels animation
             * @readOnly
             * @function
             */
            get ( )
            {
                this._options.active = false;
            }
        },
        /** @function PROPERTY_BLOCKS.animation.period                                           **/
        period:
        {
            /**
             * Set period of animation
             * @public
             * @function
             * @param           {number} value                              Period of animation-time
             */
            set ( value )
            {
                this._period = ( this._isNumber ( value ) ) ? value : this._period;
            },

            /**
             * Get period of animation
             * @readOnly
             * @function
             * @return          {number}                                    Period of animation-time
             */
            get ( )
            {
                return this._period;
            }
        },
        /** @function PROPERTY_BLOCKS.animation.queue                                            **/
        queue:
        {
            /**
             * Set queue
             * @public
             * @function
             * @param           {Queue} value                               Queue object
             */
            set ( value )
            {
                this._queue = ( value instanceof Queue ) ? value : this._queue;
            },

            /**
             * Get queue
             * @readOnly
             * @function
             * @return          {Queue}                                     Queue object
             */
            get ( )
            {
                return this._queue;
            }
        }
    },
}
 
/**
 * Shared utility functions
 * @namespace       UTILITIES
 */
const UTILITIES =
{
    /**
     * Utilities for collection functions
     * @function UTILITIES.collection
     */
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
         * Get all or specific points throughout this collection
         * @public
         * @function
         * @param           {Array.<number>} indexes                    Indexes of points
         * @param           {Rgb}            color                      Color to colorize objects selected points
         */
        getPoints ( indexes, color = new Rgb ( 200, 20, 20, 1 ) )
        {
            let _results = new Array;


            if ( Array.isArray ( indexes ) )

                for ( let _index of indexes )
                {
                    this [ _index ].stroke.color = color;

                    this [ _index ].stroke.width = 5;

                    this [ _index ].draw ( );

                    _results.push ( this [ _index ].point );
                }

            else

                for ( let _index of this )

                    _results.push ( _index.point );


            return _results;
        },

        /**
         * Pushes child object(s) into this collection
         * @public
         * @function
         */
        push ( )
        {
            for ( let _i = 0; _i < arguments.length; _i++ )

                if ( arguments [ _i ] instanceof this.storageType )

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


            this.anchor.point = this.center;


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
     * Utilities for individual functions
     * @function UTILITIES.individual
     */
    individual:
    {
        /**
         * Utility color functions
         * @function UTILITIES.individual.color
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
                    this._stroke._color._cycle ( start, end, progress, max );
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
                    this._fill.color._cycle ( start, end, progress, max );
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
                    this._fill.gradient.stopColorCycle ( start, end, progress, stop, max );
                },

                /**
                 * Cycle colors for gradient stop(s)
                 * @public
                 * @function
                 * @param           {Rgb}      start                            Color model & values
                 * @param           {Rgb}      end                              Color model & values
                 * @param           {number}   progress                         Progress time unit; 0.00 - 1.00
                 * @param           {number}   stop                             Color stop to cycle
                 * @param           {number}   max                              Maximum number of steps between interpolation
                 */
                stop ( start, end, progress, stop, max )
                {
                    this.stops [ stop ].color._cycle ( start, end, progress, max );
                },
            }
        },

        /**
         * Utility draw functions
         * @function UTILITIES.individual.draw
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
            axis ( offset = 20, color = new Rgb ( 245, 80, 50 ) )
            {
                let _collections = [ 'Circles', 'Ellipses', 'Rectangles', 'RoundedRectangles', 'Texts' ];


                let _lines = new Lines;

                    _lines.push ( new Line, new Line );

                    _lines.stroke.color = color;

                    _lines.point        = this.center;


                if ( _collections.includes ( this.constructor.name ) )              // Fix offset issue(s)

                    [ _lines.point.x, _lines.point.y ] = [ _lines.point.x + this.aspect.offset.x, _lines.point.y + this.aspect.offset.y ];


                    _lines.canvas       = ( this instanceof Point ) ? this.options._master.canvas : this.canvas;


                    _lines [ 0 ].start  = new Point ( - offset, 0 );

                    _lines [ 0 ].end    = new Point (   offset, 0 );


                    _lines [ 1 ].start  = new Point ( 0, - offset );

                    _lines [ 1 ].end    = new Point ( 0,   offset );


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
                let _collections = [ 'Circles', 'Ellipses', 'Rectangles', 'RoundedRectangles', 'Texts' ];


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
         * @function UTILITIES.individual.misc
         */
        misc:
        {
            /**
             * Push or pops the passed object
             * @public
             * @function
             * @param           {Object} object                             Object; Circle, Rectangle, Text
             */
            pushPop ( object )
            {
                let _index = undefined;


                if ( object instanceof this.storageType )
                {
                    if ( this._canvas != undefined )

                        object.canvas = this.canvas;


                    if ( this.length != 0 )
                    {
                        for ( let _id in this )

                            if ( this [ _id ] instanceof this.storageType )

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

                    console.warn ( `${this.constructor.name} only accepts '${this.storageType.name}' objects !`);
            },

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
            },

            /**
             * Rotate this object
             * @public
             * @function
             * @param           {number} degree                             Distance to rotate; in degrees
             */
            rotate ( value )
            {
                if ( this._isDegree ( value ) )
                {
                    let [ _x, _y ] = [ this.x, this.y ];


                    this._canvas.save      ( );

                    this._canvas.translate ( _x, _y );

                    this._canvas.rotate    ( value * Math.PI / 180 );

                    this._canvas.translate ( -_x, -_y );
                }
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


                    _point.x = origin.x - Math.cos ( _angle * Math.PI / 180 ) * distance;

                    _point.y = origin.y - Math.sin ( _angle * Math.PI / 180 ) * distance;


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
                let _x = Math.round ( this.x );

                let _y = Math.round ( this.y );


                let _text  = new Text;

                    _text.text           = `( ${_x}, ${_y} )`;

                    _text.point          = this.point;

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
         * @function UTILITIES.individual.set
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
                [ this.anchor.x, this.anchor.y ] = [ this.x, this.y ];


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
    },

    /**
     * Utilities for animation functions
     * @function UTILITIES.animation
     */
    animation:
    {
        /**
         * End animation
         * @private
         * @function
         */
        end ( )
        {
            let _frame = requestAnimationFrame ( this.animate );


            cancelAnimationFrame ( _frame );


            return;
        },

        /**
         * Returns an inverted angle; of 360 degrees
         * @private
         * @function
         * @param           {number} angle                              Angle to convert
         * @return          {number}                                    Inverted angle
         */
        getInvertedAngle ( angle )
        {
            return ( angle + 180 ) % 360;
        }
    }
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
        let _options = [ 'center', 'top', 'topRight', 'right', 'bottomRight', 'bottom', 'bottomLeft', 'left', 'topLeft', 'start', 'end' ];


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
        let _clObjects = [ Group, Line, Lines, Circle, Circles, Ellipse, Ellipses, Rectangle, Rectangles, RoundedRectangle, Text, Texts, cImage ]


        for ( let _object of _clObjects )

            if ( value instanceof _object )

                return true;


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
     * Returns whether the passed value is an array of Control Point values
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {Array.<number>} value                      Array of Control Points
     * @return          {boolean}                                   True || False
     */
    isControlPoint ( value )
    {
        let _result = false;


        if ( Array.isArray ( value ) )

            if ( value.length === 4 )
            {
                for ( let _entry of value )

                    if ( typeof _entry != 'number' ) return _result;


                _result = true;
            }


        return _result;
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
     * Returns whether the passed value is a Fill property object
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {Object} value                              Fill
     * @return          {boolean}                                   True || False
     */
    isFill ( value )
    {
        if ( value instanceof Fill ) return true;


        let _length = Object.keys ( value ).length;

            _length = ( _length > 1 && _length < 6 );


        let _color  = ( value.hasOwnProperty ( 'color' ) ) ? ( value.color instanceof Rgb ) : false;

        let _type   = ( value.hasOwnProperty ( 'type'  ) ) ? ( typeof value.type === 'string' ) : false;


        return ( _length && _color && _type );
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
     * Returns whether the passed value is a Stroke property object
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {Object} value                              Stroke
     * @return          {boolean}                                   True || False
     */
    isStroke ( value )
    {
        if ( value instanceof Stroke ) return true;


        let _length = Object.keys ( value ).length;

            _length = ( _length > 1 && _length < 5 );


        let _color  = ( value.hasOwnProperty ( 'color' ) ) ? ( value.color instanceof Rgb ) : false;

        let _type   = ( value.hasOwnProperty ( 'type'  ) ) ? ( typeof value.type  === 'string' ) : false;

        let _width  = ( value.hasOwnProperty ( 'width' ) ) ? ( typeof value.width === 'number' ) : false;


        return ( _length && _color && _type && _width );
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
     * Returns whether the passed value is a Template
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {Template} value                            Template object
     * @return          {boolean}                                   True || False
     */
    isTemplate ( value )
    {
        /**
         * Returns classes functions
         * @private
         * @memberof VALIDATION
         * @function
         * @param           {Object} object                             Template object
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


            let _point  = ( Object.hasOwn ( _instance, '_point'  ) );

            let _master = ( Object.hasOwn ( _instance, '_master' ) );

            let _init   = _functions.includes ( 'init' );


            return ( _point && _master && _init );
        }
        else

            return false;
    },

    /**
     * Returns whether the passed value is a Transition
     * @public
     * @memberof VALIDATION
     * @function
     * @param           {Transition} value                          Transition object
     * @return          {boolean}                                   True || False
     */
    isTransition ( value )
    {
        if ( value != undefined )
        {
            let _instance    = eval ( `new ${value.constructor.name};` );


            let _transitions = ( Object.hasOwn ( _instance, '_transitions' ) );

            let _template    = ( Object.hasOwn ( _instance, '_template' ) );


            return ( _transitions && _template );
        }
        else

            return false;
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

    _rotation = 0;

    #application = new Application;

    #inputEvents = undefined;

    #get =
    {
        /**
         * Returns a Circle object
         * @protected
         * @function
         * @param           {Point}  point                              X & Y Coordinates
         * @param           {Stroke} stroke                             Stroke properties
         * @param           {Fill}   fill                               Fill properties
         * @return          {Circle}                                    Circle object
         */
        circle ( point, stroke, fill )
        {
            return new Circle ( point, this.radius, undefined, new Stroke ( stroke.color, stroke.type, stroke.segments, stroke.width ), new Fill ( fill.color, fill.type ), undefined, undefined );
        },

        /**
         * Returns a Ellipse object
         * @protected
         * @function
         * @param           {Point}  point                              X & Y Coordinates
         * @param           {Stroke} stroke                             Stroke properties
         * @param           {Fill}   fill                               Fill properties
         * @return          {Ellipse}                                   Ellipse object
         */
        ellipse ( point, stroke, fill )
        {
            return new Ellipse ( point, new Point ( this.radius, this.radius * 0.5 ), undefined, new Stroke ( stroke.color, stroke.type, stroke.segments, stroke.width ), new Fill ( fill.color, fill.type ), undefined, undefined );
        },

        /**
         * Returns a Rectangle object
         * @protected
         * @function
         * @param           {Point}  point                              X & Y Coordinates
         * @param           {Stroke} stroke                             Stroke properties
         * @param           {Fill}   fill                               Fill properties
         * @return          {Rectangle}                                 Rectangle object
         */
        rectangle ( point, stroke, fill )
        {
            return new Rectangle ( point, undefined, undefined, new Stroke ( stroke.color, stroke.type, stroke.segments, stroke.width ), new Fill ( fill.color, fill.type ), undefined, undefined );
        },

        /**
         * Returns a RoundedRectangle object
         * @protected
         * @function
         * @param           {Point}  point                              X & Y Coordinates
         * @param           {Stroke} stroke                             Stroke properties
         * @param           {Fill}   fill                               Fill properties
         * @return          {RoundedRectangle}                          Rounded rectangle object
         */
        roundedRectangle ( point, stroke, fill )
        {
            return new RoundedRectangle ( point, undefined, undefined, new Stroke ( stroke.color, stroke.type, stroke.segments, stroke.width ), new Fill ( fill.color, fill.type ), undefined, undefined );
        },

        /**
         * Returns a Text object
         * @protected
         * @function
         * @param           {Point}  point                              X & Y Coordinates
         * @param           {Stroke} stroke                             Stroke properties
         * @param           {Fill}   fill                               Fill properties
         * @return          {Text}                                      Text object
         */
        text ( point, text, stroke, fill )
        {
            return new Text ( point, text, undefined, undefined, undefined, undefined, undefined, new Stroke ( stroke.color, stroke.type, stroke.segments, stroke.width ), new Fill ( fill.color, fill.type ), undefined );
        },

        /**
         * Returns a Line object
         * @protected
         * @function
         * @param           {Point} startPoint                          Starting point of line
         * @param           {Point} endPoint                            Ending point of line
         * @return          {Line}                                      Line object
         */
        line ( startPoint, endPoint )
        {
            return new Line ( startPoint, endPoint, undefined, undefined, undefined, undefined );
        }
    }

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

    ////    PROPERTIES    //////////////////////////////////

        ////    [ CANVAS ]  //////////////////////

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

        ////    [ CANVASES ]    //////////////////

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

        ////    [ FONT ]    //////////////////////

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

        ////    [ ROTATION ]    //////////////////

            /**
             * Sets rotation property value
             * @public
             * @function
             * @param           {number} value                              Rotation value
             */
            set rotation ( value )
            {
                this._rotation = value;
            }

            /**
             * Get rotation property value
             * @public
             * @function
             * @return          {number}                                    Rotation value
             */
            get rotation ( )
            {
                return this._rotation;
            }

        ////    [ APPLICATION ]    ///////////////

            /**
             * Returns this application
             * @readOnly
             * @function
             * @return          {Application}                               Canvas Lab application
             */
            get application ( )
            {
                return this.#application;
            }

        ////    [ GET ]    ///////////////////////

            /**
             * Get getters
             * @public
             * @function
             * @return             {Object}                                    Get getters
             */
            get get ( )
            {
                return this.#get;
            }

        ////    DOM    ///////////////////////////

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

        ////    PRIVATE    ///////////////////////

            /**
             * Sets the canvas and canvases properties
             * @private
             * @function
             */
            _setCanvases ( )
            {
                let _canvases = document.getElementsByTagName ( 'canvas' );


                if ( typeof _canvases === 'object' && this._canvases === undefined )

                    for ( let _id in _canvases )

                        if ( _id == 0 )

                            this.canvas   = _canvases [ _id ].id;

                        else

                            this.canvases = _canvases [ _id ].id;
            }

        ////    PUBLIC    ////////////////////////

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
             * Clears canvas
             * @private
             * @function
             */
            clearCanvas ( )
            {
                let _canvas = document.getElementById ( this.canvas );


                if ( _canvas )  // @TODO: identify why this check has to take place periodically !

                    this._canvas.clearRect ( 0, 0, _canvas.width, _canvas.height );
            }

            /**
             * Animate the transition passed
             * @property        {Transition} transition                     Transition animation
             */
            animate ( transition = { object, timing, period, change } )
            {
                if ( transition )

                    this.#application.animation = transition;
            }

    ////    INITIALIZE  ////////////////////////////////////

        /**
         * CanvasLab initializer
         * @private
         * @function
         */
        _init ( )
        {
            this._setCanvases ( );
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

			Object.defineProperty ( this, 'alpha', PROPERTY_BLOCKS.individual.alpha );

		this.red   = red;
		this.green = green;
		this.blue  = blue;
		this.alpha = ( alpha === undefined ) ? 1 : alpha;
	}

	////    PROPERTIES    //////////////////////////////////

		////    [ RED ]    ///////////////////////////

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

		////    [ GREEN ]    /////////////////////////

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

		////    [ BLUE ]    //////////////////////////

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

		////    [ ALPHA ]    /////////////////////////

			/**
			 * Set alpha value
			 * @public
			 * @function
			 * @param  			{number} value 								Alpha value; 0 - 1
			 * @see             {@link PROPERTY_BLOCKS.individual.alpha}
			 */
			set alpha ( value ) { }

			/**
			 * Set alpha value
			 * @public
			 * @function
			 * @return  		{number} 									Alpha value; 0 - 1
			 * @see             {@link PROPERTY_BLOCKS.individual.alpha}
			 */
			get alpha ( ) { }

	////    VALIDATION    //////////////////////////////////

		/**
	     * Returns whether the passed value is a 256 color value; 0 - 255
	     * @private
	     * @function
	     * @param           {number} value 								256 color value; 0 - 255
	     * @return          {boolean} 									True || False
	     * @see             {@link VALIDATION.is256}
	     */
		_is256 ( ) { }

	////    UTILITIES    ///////////////////////////////////

		////    - PRIVATE    /////////////////////

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

		////    + PUBLIC    //////////////////////

			/**
			 * Color cycling
			 * @public
			 * @function
			 * @param  			{Rgb}    start								Color model & values
			 * @param  			{Rgb}    end 								Color model & values
			 * @param 			{number} progress 							Progress time unit; 0.00 - 1.00
			 * @param 			{number} max 								Maximum number of steps between interpolation
			 */
			cycle ( start, end, progress, max )
		    {
		    	this._lerpRgb ( start, end, progress, max );
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
 * @property        {Object}  master                            Master object
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

            Object.defineProperty ( this, 'master', PROPERTY_BLOCKS.individual.master );

        this.axis          = axis;
        this.anchor        = anchor;
        this.border        = border;
        this.coordinates   = coordinates;
        this.controlPoints = controlPoints;
        this.points        = points;
        this.shadow        = shadow;
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ ANCHOR ]    ////////////////////

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

        ////    [ AXIS ]    //////////////////////

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

        ////    [ BORDER ]    ////////////////////

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

        ////    [ COORDINATES ]    //////////////

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

        ////    [ CONTROL POINTS ]    ////////////

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

        ////    [ SHADOW ]    ////////////////////

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

        ////    [ MASTER ]    ////////////////////

            /**
             * Set master object
             * @public
             * @function
             * @param           {clObject} value                            Canvas Lab object
             * @see             {@link PROPERTY_BLOCKS.individual.master}
             */
            set master ( value ) { }

            /**
             * Get master object
             * @public
             * @function
             * @return          {clObject}                                  Master Canvas Lab object
             * @see             {@link PROPERTY_BLOCKS.individual.master}
             */
            get master ( ) { }

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
            this._isPoint = VALIDATION.isPoint;

            Object.defineProperty ( this, 'point', PROPERTY_BLOCKS.individual.point  );
            Object.defineProperty ( this, 'x',     PROPERTY_BLOCKS.individual.pointX );
            Object.defineProperty ( this, 'y',     PROPERTY_BLOCKS.individual.pointY );
	}

    ////    PROPERTIES    //////////////////////////////////

    	////    [ POINT ]    /////////////////////

            /**
             * Set point
             * @public
             * @function
             * @param           {Point} point                               X & Y axis coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            set point ( value ) { }

            /**
             * Get point
             * @public
             * @function
             * @return          {Point}                                     X & Y axis coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            get point ( ) { }


    		/**
             * Set x-axis value
             * @public
             * @function
             * @param           {number} value                              X coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointX}
             */
            set x ( value ) { }

            /**
             * Get x-axis value
             * @readOnly
             * @function
             * @return          {number}                                    X coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointX}
             */
            get x ( ) { }


            /**
             * Set y-axis value
             * @public
             * @function
             * @param           {number} value                              Y coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointY}
             */
            set y ( value ) { }

            /**
             * Get y-axis value
             * @readOnly
             * @function
             * @return          {number}                                    Y coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointY}
             */
            get y ( ) { }

        ////    [ ALIGN ]    /////////////////////

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

    ////    PROPERTIES    //////////////////////////////////

        ////    [ START ]    /////////////////////

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

        ////    [ END ]    ///////////////////////

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

        ////    [ CLOCKWISE ]    /////////////////

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

        ////    - PRIVATE    /////////////////////

            /**
             * Convert radian to degree
             * @private
             * @function
             * @param           {number} value                              Radian
             * @return          {number}                                    Conversion in degrees
             */
            _convert2Degree ( value )
            {
                return ( this._isRadian ) ? ( value * ( Math.PI / 180 ) ) : console.warn ( `${value} is not a radian value !` );
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

        ////    + PUBLIC    //////////////////////

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

            this._isPoint = VALIDATION.isPoint;

        this.width  = width;
        this.height = height;
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ WIDTH ]    /////////////////////

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

        ////    [ HEIGHT ]    ////////////////////

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

        ////    [ OFFSET ]    ////////////////////

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

    ////    VALIDATION    //////////////////////////////////

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
 * @property        {number} p0                                 Control point one
 * @property        {number} p1                                 Control point two
 * @property        {number} p2                                 Control point three
 * @property        {number} p3                                 Control point four
 */
class ControlPoints
{
    _p0 = 0;
    _p1 = 0;
    _p2 = 0;
    _p3 = 0;

    /**
     * Create control points
     * @param           {number} p0                                 Control point one
     * @param           {number} p1                                 Control point two
     * @param           {number} p2                                 Control point three
     * @param           {number} p3                                 Control point four
     */
    constructor ( p0, p1, p2, p3 )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isNumber       = VALIDATION.isNumber;
            this._isControlPoint = VALIDATION.isControlPoint;

        this.p0 = p0;
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ ONE ]    ///////////////////////

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

        ////    [ TWO ]    ///////////////////////

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

        ////    [ THREE ]    /////////////////////

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

        ////    [ FOUR ]    //////////////////////

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

        ////    [ POINTS ]    ////////////////////

            /**
             * Set points
             * @public
             * @function
             * @param             {number} value                            Points of object
             */
            set points ( value )
            {
                if ( this._isControlPoint ( value ) )

                    [ this.p0, this.p1, this.p2, this.p3 ] = [ value [ 0 ], value [ 1 ], value [ 2 ], value [ 3 ] ];
            }

            /**
             * Get points
             * @public
             * @function
             * @return             {number}                                 Points of object
             */
            get points ( )
            {
                return [ this.p0, this.p1, this.p2, this.p3 ];
            }

    ////    VALIDATION    //////////////////////////////////

        /**
         * Returns whether the passed value is an array of Control Point values
         * @private
         * @memberof VALIDATION
         * @function
         * @param           {Array.<number>} value                      Array of Control Points
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isControlPoint}
         */
        _isControlPoint ( ) { }

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

    ////    PROPERTIES    //////////////////////////////////

        ////    [ TYPE ]    //////////////////////

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

        ////    [ SIZE ]    //////////////////////

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

        ////    [ WEIGHT ]    ////////////////////

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

        ////    [ MAXWIDTH ]    //////////////////

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

        ////    [ OFFSET ]    ////////////////////

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

    ////    UTILITIES   ////////////////////////////////////

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

            this._drawAxis    = UTILITIES.individual.draw.axis;
            this._drawBorder  = UTILITIES.individual.draw.border;
            this._rotatePoint = UTILITIES.individual.misc.rotatePoint;

            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.individual.canvas );

            delete this.#_options._shadow;
            delete this.#_options._border;

        this.x = x;
        this.y = y;
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ X ]    /////////////////////////

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

        ////    [ Y ]    /////////////////////////

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

        ////    [ CANVAS ]    ////////////////////

            /**
             * Set canvas value
             * @public
             * @function
             * @param           {string} value                              Canvas id
             * @see             {@link PROPERTY_BLOCKS.individual.canvas}
             */
            set canvas ( value ) { }

            /**
             * Get canvas value
             * @readOnly
             * @function
             * @return          {string}                                     Canvas id
             * @see             {@link PROPERTY_BLOCKS.individual.canvas}
             */
            get canvas ( ) { }

        ////    [ OPTIONS ]    ///////////////////

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

        ////    - PRIVATE    /////////////////////

            /**
             * Draws an axis for the associated object
             * @private
             * @function
             * @param           {number} offset                             Offset of axis
             * @param           {Object} color                              Color model
             * @param           {number} stop                               Gradient color stop
             * @see             {@link UTILITIES.individual.draw.axis}
             */
            _drawAxis ( ) { }

            /**
             * Draws an axis for the associated object
             * @private
             * @function
             * @param           {Aspect} aspect                             Aspect properties
             * @param           {Object} color                              Color model
             * @see             {@link UTILITIES.individual.draw.border}
             */
            _drawBorder ( ) { }

            /**
             * Rotates the origin point by the degree & distance passed
             * @private
             * @function
             * @param           {Point}  origin                             Origin point
             * @param           {number} degree                             Degree to rotate
             * @param           {number} distance                           Distance from origin
             * @see             {@link UTILITIES.individual.misc.rotatePoint}
             */
            _rotatePoint ( ) { }

        ////    + PUBLIC    //////////////////////

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

            /**
             * Draws associated options
             * @public
             * @function
             * @param           {number} offset                             Offset of drawable options
             */
            drawOptions ( offset = 20 )
            {
                let _aspect = new Aspect ( offset, offset );

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
 * @property        {string} [color=<Rgb>]                      Color model & value
 * @property        {number} offset                             Representation of the color stop position; 0 = start, & 1 = end
 */
class Stop
{
    _color  = new Rgb;
    _offset = undefined;

    /**
     * Create a color stop
     * @property        {string} color                             CSS color value
     * @property        {number} offset                            Representation of the color stop position
     */
    constructor ( color, offset )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isColorModel = VALIDATION.isColorModel;
            this._isDecimal    = VALIDATION.isDecimal;

        this.color  = color;
        this.offset = offset;
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ COLOR ]     ////////////////////

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

        ////    [ OFFSET ]    ////////////////////

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
        _isDecimal ( ) { }
}
 
/**
 * @class           {Object}       Conic                        Conic gradient object type and properties
 * @property        {Point}        point                        X & Y axis coordinates
 * @property        {number}       angle                        Angle in radians
 * @property        {Array.<Stop>} stops                        Array of color stops
 */
class Conic
{
    _point = new Point;
    _angle = 0;
    _stops = new Array;

    /**
     * Create a Conic gradient object type
     * @property        {number}       angle                        Angle in radians
     * @property        {Point}        point                        Starting point of linear gradient
     * @property        {Array.<Stop>} stops                        Array of color stops
     */
    constructor ( angle, point, stops )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isPoint  = VALIDATION.isPoint;
            this._isRadian = VALIDATION.isRadian;
            this._isStop   = VALIDATION.isStop;

            this._stopColorCycle = UTILITIES.individual.color.cycle.stop;

        this.point = point;
        this.angle = angle;
        this.stops = stops;
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ ANGLE ]    /////////////////////

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

        ////    [ START ]    /////////////////////

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

        ////    [ STOPS ]    /////////////////////

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
         * @see             {@link UTILITIES.individual.color.cycle.stop}
         */
        _stopColorCycle ( ) { }
}
 
/**
 * @class           {Object}       Linear                       Linear gradient object type and properties
 * @property        {Point}        start                        Start X & Y axis coordinates
 * @property        {Point}        end                          End X & Y axis coordinates
 * @property        {Array.<Stop>} stops                        Array of color stops
 */
class Linear
{
    _start = new Point;
    _end   = new Point;
    _stops = new Array;

    /**
     * Create a Linear gradient object type
     * @property        {Point}        start                        Starting point of linear gradient
     * @property        {Point}        end                          Ending point of linear gradient
     * @property        {Array.<Stop>} stops                        Array of color stops
     */
    constructor ( start, end, stops )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isColorModel = VALIDATION.isColorModel;
            this._isPoint      = VALIDATION.isPoint;
            this._isStop       = VALIDATION.isStop;

            this.__stopColorCycle = UTILITIES.individual.color.cycle.stop;

        this.start = start;
        this.end   = end;
        this.stops = stops;
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ START ]    /////////////////////

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

        ////    [ END ]    ///////////////////////

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

        ////    [ STOPS ]    /////////////////////

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
         * @see             {@link UTILITIES.individual.color.cycle.stop}
         */
        _stopColorCycle ( ) { }
}
 
/**
 * @class           {Object}       Radial                       Radial gradient object type and properties
 * @property        {Point}        start                        Start X & Y axis coordinates
 * @property        {Number}       startRadius                  Starting radius of linear gradient
 * @property        {Point}        end                          End X & Y axis coordinates
 * @property        {Number}       endRadius                    Ending radius of linear gradient gradient
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
     * @property        {Point}        start                        Starting point of linear gradient
     * @property        {Number}       startRadius                  Starting radius of linear gradient gradient
     * @property        {Point}        end                          Ending point of linear gradient
     * @property        {Number}       endRadius                    Ending radius of linear gradient gradient
     * @property        {Array.<Stop>} stops                        Array of color stops
     */
    constructor ( start, startRadius, end, endRadius, stops )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isPoint      = VALIDATION.isPoint;
            this._isStop       = VALIDATION.isStop;
            this._isColorModel = VALIDATION.isColorModel;
            this._isRadius     = VALIDATION.isRadius;

            this._stopColorCycle = UTILITIES.individual.color.cycle.stop;

        this.start       = start;
        this.startRadius = startRadius;

        this.end         = end;
        this.endRadius   = endRadius;

        this.stops       = stops;
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ START ]    /////////////////////

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

        ////    [ START RADIUS ]    //////////////

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

        ////    [ END ]    ///////////////////////

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

        ////    [ END RADIUS ]    ////////////////

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

        ////    [ STOPS ]    /////////////////////

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
         * @see             {@link UTILITIES.individual.color.cycle.stop}
         */
        _stopColorCycle ( ) { }
}
 
/**
 * @class           {Object}  Fill                              Fill container for various fill types
 * @property        {Object} [color=<Rgb>]                      Color model & value
 * @property        {string} [type='solid']                     Fill type; solid | linear | radial | conic | pattern
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
     * @param           {Object}  gradient                          Gradient object
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

    ////    PROPERTIES    //////////////////////////////////

        ////    [ COLOR ]    /////////////////////

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

        ////    [ TYPE ]    //////////////////////

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

        ////    [ GRADIENT ]   ///////////////////

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

        ////    [ PATTERN ]   ////////////////////

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

        ////    [ REPITION ]    //////////////////

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

            Object.defineProperty ( this, 'offset', PROPERTY_BLOCKS.individual.offset  );
            Object.defineProperty ( this, 'x',      PROPERTY_BLOCKS.individual.offsetX );
            Object.defineProperty ( this, 'y',      PROPERTY_BLOCKS.individual.offsetY );

        this.color  = color;
        this.blur   = blur;
        this.offset = offset;
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ COLOR ]    /////////////////////

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

        ////    [ BLUR ]    //////////////////////

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

        ////    [ OFFSET.(X)(Y) ]    /////////////

            /**
             * Set offset
             * @public
             * @function
             * @param           {Point} value                               Shadow offset
             * @see             {@link PROPERTY_BLOCKS.individual.offset}
             */
            set offset ( value ) { }

            /**
             * Get offset
             * @public
             * @function
             * @return          {Point}                                     Shadow offset
             * @see             {@link PROPERTY_BLOCKS.individual.offset}
             */
            get offset ( ) { }


            /**
             * Set x-axis offset value
             * @public
             * @function
             * @param           {number} value                              X coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.offsetX}
             */
            set x ( value ) { }

            /**
             * Get x-axis offset value
             * @readOnly
             * @function
             * @return          {number}                                    X coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.offsetX}
             */
            get x ( ) { }


            /**
             * Set the y-axis offset value
             * @public
             * @function
             * @param           {number} value                              Y coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.offsetY}
             */
            set y ( value ) { }

            /**
             * Get y-axis offset value
             * @readOnly
             * @function
             * @return          {number}                                    Y coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.offsetY}
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
 * @property        {string}   [type='solid']                   Stroke type; 'solid' || 'dashed'
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
     * @param           {string}   type                             Stroke type
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

    ////    PROPERTIES    //////////////////////////////////

        ////    [ TYPE ]    //////////////////////

            /**
             * Set type
             * @public
             * @function
             * @param           {string} value                              Stroke type: 'solid' || 'dashed'
             */
            set type ( value )
            {
                this._type = ( this._isStrokeType ( value ) ) ? value : this._type;
            }

            /**
             * Get type
             * @readOnly
             * @function
             * @return          {string}                                    Stroke type: 'solid' || 'dashed'
             */
            get type ( )
            {
                return this._type;
            }

        ////    [ SEGMENTS ]    //////////////////

            /**
             * Set segment value
             * @public
             * @function
             * @param           {Array.<number>} value                      Dashed line segment distance(s)
             */
            set segments ( value )
            {
                this._segments = ( this._isSegments ( value ) ) ? value : this._segments;
            }

            /**
             * Get segment value
             * @readOnly
             * @function
             * @return          {Array.<number>}                            Dashed line segment distance(s)
             */
            get segments ( )
            {
                return this._segments;
            }

        ////    [ COLOR ]    /////////////////////

            /**
             * Set color value
             * @public
             * @function
             * @param           {Rgb} value                                 Color model
             */
            set color ( value )
            {
                this._color = ( this._isColorModel ( value ) ) ? value : this._color;
            }

            /**
             * Get color value
             * @public
             * @function
             * @return          {Rgb}                                       Color model
             */
            get color ( )
            {
                return this._color;
            }

        ////    [ WIDTH ]    /////////////////////

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

            this._setAll = UTILITIES.individual.set.all;

        this.shadow      = shadow;
        this.border      = border;
        this.axis        = axis;
        this.points      = points;
        this.coordinates = coordinates;
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ SHADOW ]    ////////////////////

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

        ////    [ BORDER ]    ////////////////////

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

        ////    [ AXIS ]    //////////////////////

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

        ////    [ POINTS ]    ////////////////////

            /**
             * Set points value
             * @public
             * @function
             * @param           {boolean} value                             Points; true | false
             */
            set points ( value )
            {
                if ( typeof value === 'boolean' )  this._setAll ( 'points', value );
            }

            /**
             * Get points value
             * @readOnly
             * @function
             * @return          {boolean}                                   Points; true | false
             */
            get points ( )
            {
                return this._coordinates;
            }

        ////    [ COORDINATES ]    ///////////////

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

        ////    [ CONTROL POINTS ]    ////////////

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
         * @see             {@link UTILITIES.individual.set.all}
         */
        _setAll ( ) { }
}
 
/**
 * @class           {Object}            PointCollection         X & Y coordinates for an object
 * @property        {number}            [x=0]                   X - x-axis coordinate
 * @property        {number}            [y=0]                   Y - y-axis coordinate
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

            this._setAll = UTILITIES.individual.set.all;

            delete this.#_options._shadow;
            delete this.#_options._border;
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ X ]    /////////////////////////

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

        ////    [ Y ]    /////////////////////////

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

        ////    [ OPTIONS ]    ///////////////////

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

        ////    - PRIVATE    /////////////////////

            /**
             * Sets all option values throughout a collection
             * @private
             * @function
             * @param           {string}  property                          Option property
             * @param           {boolean} value                             True || False
             * @see             {@link UTILITIES.individual.set.all}
             */
            _setAll ( ) { }

        ////    + PUBLIC    //////////////////////

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

            this._setAll = UTILITIES.individual.set.all;
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ COLOR ]   //////////////////////////

            /**
             * Set color value
             * @public
             * @function
             * @param           {string} value                              RGB color value
             */
            set color ( value )
            {
                if ( this._isColorModel ( value ) )

                    this._setAll ( 'color', value );
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

        ////    [ BLUR ]    //////////////////////////

            /**
             * Set blur value
             * @public
             * @function
             * @param           {number} blur                               Blur value
             */
            set blur ( value )
            {
                if ( this._isBlur ( value ) )

                    this._setAll ( 'blur', value );
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

        ////    [ OFFSET.(X)(Y) ]    /////////////////

            /**
             * Set offset
             * @public
             * @function
             * @param           {Point} value                               Shadow offset
             */
            set offset ( value )
            {
                if ( this._isPoint ( value ) )

                    this._setAll ( 'offset', value );
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
            set x ( value )
            {
                this._offset.x = value;
            }

            /**
             * Get x-axis offset value
             * @readOnly
             * @function
             * @return          {number}                                    X coordinate value
             */
            get x ( )
            {
                return this._offset.x;
            }


            /**
             * Set the y-axis offset value
             * @public
             * @function
             * @param           {number} value                              Y coordinate value
             */
            set y ( value )
            {
                this._offset.y = value;
            }

            /**
             * Get y-axis offset value
             * @readOnly
             * @function
             * @return          {number}                                    Y coordinate value
             */
            get y ( )
            {
                return this._offset.y;
            }

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
         * @see             {@link UTILITIES.individual.set.all}
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

            this._isCanvasLabObject = VALIDATION.isCanvasLabObject;
            this._isColorModel      = VALIDATION.isColorModel;
            this._isStrokeType      = VALIDATION.isStrokeType;
            this._isSegments        = VALIDATION.isSegments;
            this._isWidth           = VALIDATION.isWidth;

            this._setAll = UTILITIES.individual.set.all;

            Object.defineProperty ( this, 'master', PROPERTY_BLOCKS.individual.master );
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ COLOR ]    /////////////////////

            /**
             * Set color value
             * @public
             * @function
             * @param           {string} value                              RGB color value
             */
            set color ( value )
            {
                if ( this._isColorModel ( value ) )

                    this._setAll ( 'color', value );
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

        ////    [ TYPE ]    //////////////////////

            /**
             * Set type
             * @public
             * @function
             * @param           {number} value                              Type: (0) Solid or (1) Dashed
             */
            set type ( value )
            {
                if ( this._isStrokeType ( value ) )

                    this._setAll ( 'type', value );
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

        ////    [ SEGMENTS ]    //////////////////

            /**
             * Set segment value
             * @public
             * @function
             * @param           {Array} value                               Dashed line segment distance(s)
             */
            set segments ( value )
            {
                if ( this._isSegments ( value ) )

                    this._setAll ( 'segments', value );
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

        ////    [ WIDTH ]    /////////////////////

            /**
             * Set width value
             * @public
             * @function
             * @param           {number} value                              Thickness of stroke
             */
            set width ( value )
            {
                if ( this._isWidth ( value ) )

                    this._setAll ( 'width', value );
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

        ////    [ MASTER ]    ////////////////////

            /**
             * Set master object
             * @public
             * @function
             * @param           {clObject} value                            Canvas Lab object
             * @see             {@link PROPERTY_BLOCKS.individual.master}
             */
            set master ( value ) { }

            /**
             * Get master object
             * @public
             * @function
             * @return          {clObject}                                  Master Canvas Lab object
             * @see             {@link PROPERTY_BLOCKS.individual.master}
             */
            get master ( ) { }

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
         * @see             {@link UTILITIES.individual.set.all}
         */
        _setAll ( ) { }
}

////    OBJECTS    /////////////////////////////////////////
 
/**
 * @class           {Object}            Position 				Position object
 * @property        {Point}             origin 					Origin X & Y coordinates for an object's position
 * @property        {Point}             start 					Origin start X & Y coordinates for a Line object's position
 * @property        {Point}             end 					Origin end X & Y coordinates for a Line object's position
 * @property        {number}            distance 				Distance from origin to destination
 * @property        {number}            direction 				Direction to move towards destination; in degrees
 * @property        {number}            rotation 				Amount object (including canvas) has been rotated
 * @property        {Aspect}            aspect 					Original aspect value(s) for a rectangular object
 * @property        {ControlPoints}     controlPoints 			Original control point values for a Line object
 * @property        {number}            fontSize 				Original fontSize value for a Text object
 * @property        {clObject} 			master 					Master object
 */
class Position
{
	_origin        = undefined;

	_start         = undefined;
	_end           = undefined;

	_distance      = undefined;

	_startDistance = undefined;
	_endDistance   = undefined;

	_direction     = undefined;

	_startDirection = undefined;
	_endDirection   = undefined;

	_rotation      = 0;

	_aspect        = new Aspect;

	_controlPoints = new ControlPoints;

	_fontSize      = 0;

	_stroke        = undefined;

	_fill          = undefined;

	_master        = undefined;

	/**
	 * Create a Position object
	 */
	constructor ( )
	{
		////    COMPOSITION    /////////////////////////////

			this._isAspect  		= VALIDATION.isAspect;
			this._isBlur            = VALIDATION.isBlur;
			this._isCanvasLabObject = VALIDATION.isCanvasLabObject;
			this._isControlPoint    = VALIDATION.isControlPoint;
			this._isNumber 			= VALIDATION.isNumber;
			this._isPoint 			= VALIDATION.isPoint;
			this._isWidth 			= VALIDATION.isWidth
			this._isHeight 			= VALIDATION.isHeight

			Object.defineProperty ( this, 'master', PROPERTY_BLOCKS.individual.master  );
	}

	////    PROPERTIES    //////////////////////////////////

		////    [ ORIGIN ]    ////////////////////////

			/**
			 * Set origin
			 * @public
			 * @function
			 * @param 			{Point} value 								X & Y coordinates
			 */
			set origin ( value )
			{
				this._origin = value;
			}

			/**
	         * Get origin
	         * @public
	         * @function
	         * @return          {Point}                                     X & Y coordinates
	         */
			get origin ( )
			{
				return this._origin;
			}

		////    [ START ]    /////////////////////////

		    /**
		     * Set start
		     * @public
		     * @function
		     * @param 			{number} value 								Start of object
		     */
		    set start ( value )
		    {
		        this._start = value;
		    }

		    /**
		     * Get start
		     * @public
		     * @function
		     * @return 			{number}									Start of object
		     */
		    get start ( )
		    {
		        return this._start;
		    }

		////    [ END ]    ///////////////////////////////////

		    /**
		     * Set end
		     * @public
		     * @function
		     * @param 			{number} value 								End of object
		     */
		    set end ( value )
		    {
		        this._end = value;
		    }

		    /**
		     * Get end
		     * @public
		     * @function
		     * @return 			{number}									End of object
		     */
		    get end ( )
		    {
		        return this._end;
		    }

		////    [ DISTANCE ]    //////////////////////

			/**
			 * Set distance
			 * @public
			 * @function
			 * @param 			{number} value 								Distance from origin to destination
			 */
			set distance ( value )
			{
				if ( value != undefined  &&  this._isPoint ( value ) )

	                this._distance = Math.sqrt (
	                                               ( Math.pow ( value.x - this.master.x, 2 ) ) +

	                                               ( Math.pow ( value.y - this.master.y, 2 ) )
	                                           );
			}

			/**
			 * Get distance
			 * @public
			 * @function
			 * @return 			{number} 									Distance from origin to destination
			 */
			get distance ( )
			{
				return this._distance;
			}

		////    [ START DISTANCE ]    ////////////////

		    /**
		     * Set startDistance
		     * @public
		     * @function
		     * @param 			{number} value 								StartDistance of object
		     */
		    set startDistance ( value )
		    {
		        if ( value != undefined  &&  this._isPoint ( value ) )

	                this._startDistance = Math.sqrt (
	                                               ( Math.pow ( value.x - this.master.x, 2 ) ) +

	                                               ( Math.pow ( value.y - this.master.y, 2 ) )
	                                           );
		    }

		    /**
		     * Get startDistance
		     * @public
		     * @function
		     * @return 			{number}									StartDistance of object
		     */
		    get startDistance ( )
		    {
		        return this._startDistance;
		    }

		////    [ END DISTANCE ]    //////////////////

		    /**
		     * Set endDistance
		     * @public
		     * @function
		     * @param 			{number} value 								EndDistance of object
		     */
		    set endDistance ( value )
		    {
		        if ( value != undefined  &&  this._isPoint ( value ) )

	                this._endDistance = Math.sqrt (
	                                               ( Math.pow ( value.x - this.master.x, 2 ) ) +

	                                               ( Math.pow ( value.y - this.master.y, 2 ) )
	                                           );
		    }

		    /**
		     * Get endDistance
		     * @public
		     * @function
		     * @return 			{number}									EndDistance of object
		     */
		    get endDistance ( )
		    {
		        return this._endDistance;
		    }

		////    [ DIRECTION ]    /////////////////////

			/**
			 * Set direction
			 * @public
			 * @function
			 * @param 			{number} value 								Direction in degrees
			 */
			set direction ( value )
			{
				if ( value != undefined  &&  this._isPoint ( value ) )

					this._direction = Math.atan2 ( value.y - this.master.y, value.x - this.master.x );
			}

			/**
			 * Get direction
			 * @public
			 * @function
			 * @return 			{number}									Direction in degrees
			 */
			get direction ( )
			{
				return this._direction;
			}

		////    [ START DIRECTION ]    ///////////////

		    /**
		     * Set startDirection
		     * @public
		     * @function
		     * @param 			{number} value 								StartDirection of object
		     */
		    set startDirection ( value )
		    {
		        if ( value != undefined  &&  this._isPoint ( value ) )

					this._startDirection = Math.atan2 ( value.y - this.master.y, value.x - this.master.x );
		    }

		    /**
		     * Get startDirection
		     * @public
		     * @function
		     * @return 			{number}									StartDirection of object
		     */
		    get startDirection ( )
		    {
		        return this._startDirection;
		    }

		////    [ END DIRECTION ]    /////////////////

		    /**
		     * Set endDirection
		     * @public
		     * @function
		     * @param 			{number} value 								EndDirection of object
		     */
		    set endDirection ( value )
		    {
		        if ( value != undefined  &&  this._isPoint ( value ) )

					this._endDirection = Math.atan2 ( value.y - this.master.y, value.x - this.master.x );
		    }

		    /**
		     * Get endDirection
		     * @public
		     * @function
		     * @return 			{number}									EndDirection of object
		     */
		    get endDirection ( )
		    {
		        return this._endDirection;
		    }

		////    [ ROTATION ]    //////////////////////

			/**
			 * Set rotation
			 * @public
			 * @function
			 * @param 			{number} value 								Direction in degrees
			 */
			set rotation ( value )
			{
				this._rotation = value;
			}

			/**
			 * Get rotation
			 * @public
			 * @function
			 * @return 			{number}									Direction in degrees
			 */
			get rotation ( )
			{
				return this._rotation;
			}

		////    [ ASPECT ]    ////////////////////////

		    /**
		     * Set aspect
		     * @public
		     * @function
		     * @param 			{number} value 								Aspect of object
		     */
		    set aspect ( value )
		    {
		        this._aspect = ( this._isAspect ( value ) ) ? value : this._aspect;
		    }

		    /**
		     * Get aspect
		     * @public
		     * @function
		     * @return 			{number} 									Aspect of object
		     */
		    get aspect ( )
		    {
		        return this._aspect;
		    }

		////    [ WIDTH ]    /////////////////////////

			/**
			 * Set width
			 * @public
			 * @function
			 * @param 			{number} value 								Width of object
			 */
			set width ( value )
			{
				this._aspect.width = value;
			}

			/**
			 * Get width
			 * @public
			 * @function
			 * @return 			{number}									Width of object
			 */
			get width ( )
			{
				return this._aspect.width;
			}

		////    [ HEIGHT ]    ////////////////////////

		    /**
		     * Set height
		     * @public
		     * @function
		     * @param 			{number} value 								Height of object
		     */
		    set height ( value )
		    {
		        this._aspect.height = value;
		    }

		    /**
		     * Get height
		     * @public
		     * @function
		     * @return 			{number}									Height of object
		     */
		    get height ( )
		    {
		        return this._aspect.height;
		    }

		////    [ CONTROLPOINTS ]    /////////////////

		    /**
		     * Set controlPoints
		     * @public
		     * @function
		     * @param 			{Array.<number>} value 						ControlPoints of object
		     */
		    set controlPoints ( value )
		    {
		        this._controlPoints = ( this._isControlPoint ( value ) ) ? value : this._controlPoints;
		    }

		    /**
		     * Get controlPoints
		     * @public
		     * @function
		     * @return 			{Array.<number>} 							ControlPoints of object
		     */
		    get controlPoints ( )
		    {
		        return this._controlPoints;
		    }

		////    [ FONTSIZE ]    //////////////////////

		    /**
		     * Set fontSize
		     * @public
		     * @function
		     * @param 			{number} value 								FontSize of object
		     */
		    set fontSize ( value )
		    {
		        this._fontSize = this._isNumber ( value ) ? value : this._fontSize;
		    }

		    /**
		     * Get fontSize
		     * @public
		     * @function
		     * @return 			{number}									FontSize of object
		     */
		    get fontSize ( )
		    {
		        return this._fontSize;
		    }

		////    [ MASTER ]    ////////////////////////

			/**
			 * Set master object
			 * @public
			 * @function
			 * @param 			{clObject} value 							Canvas Lab object
			 * @see             {@link PROPERTY_BLOCKS.individual.master}
			 */
			set master ( value ) { }

			/**
	         * Get master object
	         * @public
	         * @function
	         * @return          {clObject} 									Master Canvas Lab object
	         * @see             {@link PROPERTY_BLOCKS.individual.master}
	         */
			get master ( ) { }

		////    [ STROKE ]    ////////////////////////

		    /**
		     * Set stroke
		     * @public
		     * @function
		     * @param 			{number} value 								Stroke of object
		     */
		    set stroke ( value )
		    {
		        this._stroke = value;
		    }

		    /**
		     * Get stroke
		     * @public
		     * @function
		     * @return 			{number}									Stroke of object
		     */
		    get stroke ( )
		    {
		        return this._stroke;
		    }

		////    [ FILL ]    /////////////////////////

		    /**
		     * Set fill
		     * @public
		     * @function
		     * @param 			{number} value 								Fill of object
		     */
		    set fill ( value )
		    {
		        this._fill = value;
		    }

		    /**
		     * Get fill
		     * @public
		     * @function
		     * @return 			{number}									Fill of object
		     */
		    get fill ( )
		    {
		        return this._fill;
		    }

	////    VALIDATION    //////////////////////////////////

		/**
	     * Returns whether the passed value is an Aspect
	     * @private
	     * @memberof VALIDATION
	     * @function
	     * @param           {Object} value                              Aspect or object equivalent
	     * @return          {boolean}                                   True || False
	     * @see             {@link VALIDATION.isAspect}
	     */
	    _isAspect ( ) { }

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
         * Returns whether the passed value is a CanvasLab object; Line, Circle, Rectangle, Text
         * @private
         * @function
         * @param           {Object} value                              CanvasLab object; Line, Circle, Rectangle, Text
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isCanvasLabObject}
         */
        _isCanvasLabObject ( ) { }

        /**
	     * Returns whether the passed value is an array of Control Point values
	     * @private
	     * @memberof VALIDATION
	     * @function
	     * @param           {Array.<number>} value                      Array of Control Points
	     * @return          {boolean}                                   True || False
	     * @see             {@link VALIDATION.isControlPoint}
	     */
	    _isControlPoint ( ) { }

	    /**
	     * Returns whether the passed value is a Number value
	     * @public
	     * @memberof VALIDATION
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
        _isPoint ( ) { }

        /**
	     * Returns whether the passed value is a width value
	     * @private
	     * @memberof VALIDATION
	     * @function
	     * @param           {number} value                              Width value
	     * @return          {boolean}                                   True || False
	     * @see             {@link VALIDATION.isWidth}
	     */
	    _isWidth ( ) { }

	    /**
	     * Returns whether the passed value is a height value
	     * @private
	     * @memberof VALIDATION
	     * @function
	     * @param           {number} value                              Height value
	     * @return          {boolean}                                   True || False
	     * @see             {@link VALIDATION.isHeight}
	     */
	    _isHeight ( ) { }
}
 
/**
 * @class           {Object}            Circle                  Circle object
 * @property        {Point}             point                   X & Y axis coordinates
 * @property        {number|Point}     [radius=25]              Radius of circle
 * @property        {Angle}             angle                   Angle properties
 * @property        {Stroke}            stroke                  Stroke properties
 * @property        {Fill}              fill                    Fill properties
 * @property        {Shadow}            shadow                  Shadow properties
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 * @property        {Anchor}            anchor                  Anchor properties
 * @property        {Options}           options                 Options for this object
 * @property        {Position}          position                Position properties
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

    #anchor   = new Anchor;
    #options  = new Options;
    #position = new Position;
    #velocity = new Point;

    /**
     * Create a Circle object
     * @property        {Point}             point                   X & Y axis coordinates
     * @property        {number|Point}      radius                  Radius of circle
     * @property        {Angle}             angle                   Angle properties
     * @property        {Stroke}            stroke                  Stroke properties
     * @property        {Fill}              fill                    Fill properties
     * @property        {Shadow}            shadow                  Shadow properties
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
            this._isFill   = VALIDATION.isFill;
            this._isInDom  = VALIDATION.isInDom;
            this._isNumber = VALIDATION.isNumber;
            this._isPoint  = VALIDATION.isPoint;
            this._isStroke = VALIDATION.isStroke;

            this._drawAnchor  = UTILITIES.individual.draw.anchor;
            this._drawAxis    = UTILITIES.individual.draw.axis;
            this._drawBorder  = UTILITIES.individual.draw.border;
            this._rotatePoint = UTILITIES.individual.misc.rotatePoint;
            this._setFillType = UTILITIES.individual.set.fillType;
            this._setShadow   = UTILITIES.individual.set.shadow;

            this.move            = UTILITIES.individual.misc.move;
            this.rotate          = UTILITIES.individual.misc.rotate;
            this.showCoordinates = UTILITIES.individual.misc.showCoordinates;

            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.individual.canvas );
            Object.defineProperty ( this, 'point',  PROPERTY_BLOCKS.individual.point  );
            Object.defineProperty ( this, 'x',      PROPERTY_BLOCKS.individual.pointX );
            Object.defineProperty ( this, 'y',      PROPERTY_BLOCKS.individual.pointY );

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

            this.#options.shadow  = ( shadow.offset.x != undefined && shadow.offset.y != undefined );

            this.#position.master = this;
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ POINT ]   /////////////////////

            /**
             * Set point
             * @public
             * @function
             * @param           {Point} value                               X & Y coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            set point ( value ) { }

            /**
             * Get point
             * @public
             * @function
             * @return          {Point}                                     X & Y coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            get point ( ) { }


            /**
             * Set x-axis value
             * @public
             * @function
             * @param           {number} value                              X coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointX}
             */
            set x ( value ) { }

            /**
             * Get x-axis value
             * @readOnly
             * @function
             * @return          {number}                                    X coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointX}
             */
            get x ( ) { }


            /**
             * Set y-axis value
             * @public
             * @function
             * @param           {number} value                              Y coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointY}
             */
            set y ( value ) { }

            /**
             * Get y-axis value
             * @readOnly
             * @function
             * @return          {number}                                    Y coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointY}
             */
            get y ( ) { }

        ////    [ RADIUS ]    ////////////////////

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

        ////    [ ANGLE ]    /////////////////////

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

        ////    [ STROKE ]    ////////////////////

            /**
             * Set stroke properties
             * @public
             * @function
             * @param             {Stroke} value                            Stroke properties
             */
            set stroke ( value )
            {
                this._stroke = ( this._isStroke ( value ) ) ? value : this._stroke;
            }

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

        ////    [ FILL ]    //////////////////////

            /**
             * Set fill properties
             * @public
             * @function
             * @param             {Fill} value                              Fill properties
             */
            set fill ( value )
            {
                this._fill = (this._isFill ( value ) ) ? value : this._fill;
            }

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

        ////    [ SHADOW ]    ////////////////////

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

        ////    [ CANVAS ]    ////////////////////

            /**
             * Set canvas value
             * @public
             * @function
             * @param           {string} value                              Canvas id
             * @see             {@link individual.canvas}
             */
            set canvas ( value ) { }

            /**
             * Get canvas value
             * @readOnly
             * @function
             * @return          {string}                                    Canvas id
             * @see             {@link individual.canvas}
             */
            get canvas ( ) { }

        ////    [ ANCHOR ]    ////////////////////

            /**
             * Get anchor
             * @public
             * @function
             * @return          {Anchor}                                    Anchor properties
             */
            get anchor ( )
            {
                return this.#anchor;
            }

        ////    [ OPTIONS ]    ///////////////////

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

        ////    [ POSITION ]    //////////////////

            /**
             * Get position properties
             * @public
             * @function
             * @return          {Position}                                  Position properties
             */
            get position ( )
            {
                return this.#position;
            }

        ////    [ VELOCITY ]    //////////////////

            /**
             * Set velocity
             * @public
             * @function
             * @param             {number} value                                Velocity of object
             */
            set velocity ( value )
            {
                this.#velocity = ( this._isPoint ( value ) ) ? value : this.#velocity;
            }

            /**
             * Get velocity
             * @public
             * @function
             * @return             {number}                                     Velocity of object
             */
            get velocity ( )
            {
                return this.#velocity;
            }

    ////    VALIDATION  ////////////////////////////////////

        ////    - PRIVATE    /////////////////////

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
             * Returns whether the passed value is a Fill property object
             * @private
             * @function
             * @param           {Object} value                              Fill
             * @return          {boolean}                                   True || False
             * @see             {@link VALIDATION.isFill}
             */
            _isFill ( ) { }

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
            _isPoint ( ) { }

            /**
             * Returns whether the passed value is a Stroke property object
             * @private
             * @function
             * @param           {Object} value                              Stroke
             * @return          {boolean}                                   True || False
             * @see             {@link VALIDATION.isStroke}
             */
            _isStroke ( ) { }

        ////    + PUBLIC    //////////////////////

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

        ////    - PRIVATE    /////////////////////

            /**
             * Draws anchor point
             * @private
             * @function
             * @see             {@link UTILITIES.individual.draw.anchor}
             */
            _drawAnchor ( ) { }

            /**
             * Draws an axis for the associated object
             * @private
             * @function
             * @param           {number} offset                             Offset of axis
             * @param           {Object} color                              Color model
             * @param           {number} stop                               Gradient color stop
             * @see             {@link UTILITIES.individual.draw.axis}
             */
            _drawAxis ( ) { }

            /**
             * Draws an axis for the associated object
             * @private
             * @function
             * @param           {Aspect} aspect                             Aspect properties
             * @param           {Object} color                              Color model
             * @see             {@link UTILITIES.individual.draw.border}
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

                let _aspect = ( this._isPoint ( this.radius ) ) ? new Aspect ( ( this.radius.x * 2 ) + _offset, ( this.radius.y * 2 ) + _offset )

                                                                : new Aspect ( ( this.radius   * 2 ) + _offset, ( this.radius   * 2 ) + _offset );

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
             * @see             {@link UTILITIES.individual.misc.rotatePoint}
             */
            _rotatePoint ( ) { }

            /**
             * Sets anchor's point against this object's point position
             * @private
             * @function
             */
            _setAnchorPoint ( )
            {
                [ this.#anchor.x, this.#anchor.y ] = [ this.x, this.y ];


                if ( this._isPoint ( this.radius ) )

                    switch ( this.anchor.align )
                    {
                        case 'center':      /*     ... do nothing        */   /*     ... do nothing        */   break;

                        case 'top':         /*     ... do nothing        */   this.anchor.y += this.radius.y;   break;

                        case 'topRight':    this.anchor.x -= this.radius.x;   this.anchor.y += this.radius.y;   break;

                        case 'right':       this.anchor.x -= this.radius.x;   /*     ... do nothing        */   break;

                        case 'bottomRight': this.anchor.x -= this.radius.x;   this.anchor.y -= this.radius.y;   break;

                        case 'bottom':      /*     ... do nothing        */   this.anchor.y -= this.radius.y;   break;

                        case 'bottomLeft':  this.anchor.x += this.radius.x;   this.anchor.y -= this.radius.y;   break;

                        case 'left':        this.anchor.x += this.radius.x;   /*     ... do nothing        */   break;

                        case 'topLeft':     this.anchor.x += this.radius.x;   this.anchor.y += this.radius.y;   break;
                    }

                else

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
             * @see             {@link UTILITIES.individual.set.fillType}
             */
            _setFillType ( ) { }

            /**
             * Sets shadow properties
             * @private
             * @function
             * @see             {@link UTILITIES.individual.set.shadow}
             */
            _setShadow ( ) { }

        ////    + PUBLIC    //////////////////////

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
             * Get bounds of object
             * @readOnly
             * @function
             * @return          {Object}                                    Bounds of object
             */
            get bounds ( )
            {
                return {
                           x: this.x - this.radius,
                           y: this.y - this.radius,
                           width:  this.diameter,
                           height: this.diameter
                       };
            }

            /**
             * Get diameter of circle
             * @readOnly
             * @function
             * @return          {number}                                    Diameter of circle
             */
            get diameter ( )
            {
                return ( this.radius * 2 );
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
             * Move this object
             * @public
             * @function
             * @param           {number}  degree                            Direction to move; in degrees
             * @param           {number}  distance                          Distance to move
             * @see             {@link UTILITIES.individual.misc.move}
             */
            move ( ) { }

            /**
             * Rotate this object
             * @public
             * @function
             * @param           {number} degree                             Distance to rotate; in degrees
             * @param           {string} [anchor='center']                  Anchoring point during rotation
             * @param           {number} [clear=true]                       Clear canvas during each rotation
             * @see             {@link UTILITIES.individual.misc.rotate}
             */
            rotate ( ) { }

            /**
             * Shows coordinates of this object
             * @public
             * @function
             * @param           {number} [offset=10]                        Offset of coordinates y origin
             * @param           {number} [fontSize=16]                      Coordinates font size
             * @see             {@link UTILITIES.individual.misc.showCoordinates}
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
                this._setAnchorPoint ( );


                if ( this.#options.shadow ) this._setShadow ( );                                    // Set: shadow


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
}
 
/**
 * @class           {Object}            Ellipse                 Ellipse object
 * @property        {Point}             point                   X & Y axis coordinates
 * @property        {Point}            [radius=<Point<20, 30>]  Radius of ellipse
 * @property        {Angle}             angle                   Angle properties
 * @property        {Stroke}            stroke                  Stroke properties
 * @property        {Fill}              fill                    Fill properties
 * @property        {Shadow}            shadow                  Shadow properties
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 * @property        {Anchor}            anchor                  Anchor properties
 * @property        {Options}           options                 Options for this object
 * @property        {Position}          position                Position properties
 * @extends 		{Circle}
 */
class Ellipse extends Circle
{
	_radius  = new Point ( 20, 30 );

	_anchor  = new Anchor;

	////    [ RADIUS ]  ////////////////////////////////////

        /**
         * Set radius value
         * @public
         * @function
         * @param           {Point} value 								Radius of circle
         */
        set radius ( value )
        {
            this._radius = ( value  &&  this._isPoint  ( value ) ) ? value : this._radius;
        }

        /**
         * Get radius value
         * @readOnly
         * @function
         * @return          {Point} 									Radius of circle
         */
        get radius ( )
        {
            return this._radius;
        }
}
 
/**
 * @class           {Object}            Line                    Line object
 * @property        {Point}             start                   Start X & Y axis coordinates
 * @property        {Point}             end                     End X & Y axis coordinates
 * @property        {Stroke}            stroke                  Stroke properties
 * @property        {Shadow}            shadow                  Shadow properties
 * @property        {string}           [lineCap='round']        Line cap's end points shape
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 * @property        {ControlPoints}     controlPoints           Control point properties
 * @property        {Options}           options                 Options for this object
 * @property        {Position}          position                Position properties
 */
class Line
{
    _point   = new Point;
    _start   = new Point;
    _end     = new Point;
    _stroke  = new Stroke;
    _shadow  = new Shadow;

    _lineCap = 'round';

    _canvas  = undefined;

    _anchor        = new Anchor;
    #options       = new Options;
    #position      = new Position;
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
            this._isStroke = VALIDATION.isStroke;

            this._drawAxis    = UTILITIES.individual.draw.axis;
            this._drawBorder  = UTILITIES.individual.draw.border;
            this._rotatePoint = UTILITIES.individual.misc.rotatePoint;
            this._setShadow   = UTILITIES.individual.set.shadow;

            this.rotate       = UTILITIES.individual.misc.rotate;

            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.individual.canvas );
            Object.defineProperty ( this, 'point',  PROPERTY_BLOCKS.individual.point  );
            Object.defineProperty ( this, 'x',      PROPERTY_BLOCKS.individual.pointX );
            Object.defineProperty ( this, 'y',      PROPERTY_BLOCKS.individual.pointY );

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


                    this.start.x = start.x - _width;

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

            this.#options.shadow = ( shadow.offset.x != undefined && shadow.offset.y != undefined );

            this.#options.master = this;


            this._start.options.master = this;

            this._end.options.master   = this;


            Object.defineProperty ( this.#options, "points",
            {
                set ( value )
                {
                    this._points = ( typeof value === 'boolean' ) ? value : this.#options.points;


                    this._master._start.options.points = value;

                    this._master._end.options.points   = value;
                },
                get ( )
                {
                    return this._points;
                }
            } );

            this.#position.master = this;
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ POINT ]   //////////////////////////

            /**
             * Set point
             * @public
             * @function
             * @param           {Point} value                               X & Y coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            set point ( value ) { }

            /**
             * Get point
             * @public
             * @function
             * @return          {Point}                                     X & Y coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            get point ( ) { }


            /**
             * Set x-axis value
             * @public
             * @function
             * @param           {number} value                              X coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointX}
             */
            set x ( value ) { }

            /**
             * Get x-axis value
             * @readOnly
             * @function
             * @return          {number}                                    X coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointX}
             */
            get x ( ) { }


            /**
             * Set y-axis value
             * @public
             * @function
             * @param           {number} value                              Y coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointY}
             */
            set y ( value ) { }

            /**
             * Get y-axis value
             * @readOnly
             * @function
             * @return          {number}                                    Y coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointY}
             */
            get y ( ) { }

        ////    [ START ]    /////////////////////

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

        ////    [ END ]    ///////////////////////

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

        ////    [ STROKE ]    ////////////////////

            /**
             * Set stroke properties
             * @public
             * @function
             * @param             {Stroke} value                            Stroke properties
             */
            set stroke ( value )
            {
                this._stroke = ( this._isStroke ( value ) ) ? value : this._stroke;
            }

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

        ////    [ SHADOW ]    ////////////////////

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

        ////    [ LINECAP ]    ///////////////////

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

        ////    [ CANVAS ]    ////////////////////

            /**
             * Set canvas value
             * @public
             * @function
             * @param           {string} value                              Canvas id
             * @see             {@link PROPERTY_BLOCKS.individual.canvas}
             */
            set canvas ( value ) { }

            /**
             * Get canvas value
             * @readOnly
             * @function
             * @return          {string}                                    Canvas id
             * @see             {@link PROPERTY_BLOCKS.individual.canvas}
             */
            get canvas ( ) { }

        ////    [ ANCHOR ]    ////////////////////

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

        ////    [ OPTIONS ]    ///////////////////

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

        ////    [ POSITION ]    //////////////////

            /**
             * Get position properties
             * @public
             * @function
             * @return          {Position}                                  Position properties
             */
            get position ( )
            {
                return this.#position;
            }

        ////    [ CONTROL POINTS ]    ////////////

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

        ////    [ POINT ]    /////////////////////          [ VIRTUAL ]

            /**
             * Set point
             * @public
             * @function
             * @param           {Point} value                               X & Y coordinates
             */
            set point ( value )
            {
                let _xCheck = ( this.center.x > value.x );

                let _yCheck = ( this.center.y > value.y );


                let _x      = ( _xCheck ) ? this.center.x - value.x : value.x - this.center.x;

                let _y      = ( _yCheck ) ? this.center.y - value.y : value.y - this.center.y;


                ( _xCheck ) ? [ this.start.x, this.end.x ] = [ this.start.x - _x, this.end.x - _x ]

                            : [ this.start.x, this.end.x ] = [ this.start.x + _x, this.end.x + _x ];



                ( _yCheck ) ? [ this.start.y, this.end.y ] = [ this.start.y - _y, this.end.y - _y ]

                            : [ this.start.y, this.end.y ] = [ this.start.y + _y, this.end.y + _y ];
            }

            /**
             * Get point
             * @public
             * @function
             * @return          {Point}                                     X & Y coordinates
             */
            get point ( )
            {
                return this.center;
            }


            /**
             * Set x-axis value
             * @public
             * @function
             * @param           {number} value                              X coordinate value
             */
            set x ( value )
            {
                let _xCheck = ( this.center.x > value );

                let _x      = ( _xCheck ) ? this.center.x - value : value - this.center.x;


                ( _xCheck ) ? [ this.start.x, this.end.x ] = [ this.start.x - _x, this.end.x - _x ]

                            : [ this.start.x, this.end.x ] = [ this.start.x + _x, this.end.x + _x ];
            }

            /**
             * Get x-axis value
             * @readOnly
             * @function
             * @return          {number}                                    X coordinate value
             */
            get x ( )
            {
                return this.center.x;
            }


            /**
             * Set y-axis value
             * @public
             * @function
             * @param           {number} value                              Y coordinate value
             */
            set y ( value )
            {
                let _yCheck = ( this.center.y > value );

                let _y      = ( _yCheck ) ? this.center.y - value : value - this.center.y;


                ( _yCheck ) ? [ this.start.y, this.end.y ] = [ this.start.y - _y, this.end.y - _y ]

                            : [ this.start.y, this.end.y ] = [ this.start.y + _y, this.end.y + _y ];
            }

            /**
             * Get y-axis value
             * @readOnly
             * @function
             * @return          {number}                                    Y coordinate value
             */
            get y ( )
            {
                return this.center.y;
            }

    ////    VALIDATION  ////////////////////////////////////

        ////    - PRIVATE    /////////////////////

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
            _isInDom ( ) { }

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
            _isPoint ( ) { }

            /**
             * Returns whether the passed value is a Stroke property object
             * @private
             * @function
             * @param           {Object} value                              Stroke
             * @return          {boolean}                                   True || False
             * @see             {@link VALIDATION.isStroke}
             */
            _isStroke ( ) { }

        ////    + PUBLIC    //////////////////////

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

        ////    - PRIVATE    /////////////////////

            /**
             * Draws anchor point
             * @private
             * @function
             */
            _drawAnchor ( )
            {
                let _point  = undefined;

                let _aspect = new Aspect ( 5, 5 );


                switch ( this.anchor.align )
                {
                    case 'center':       _point = new Point ( this.x,       this.y       );      break;

                    case 'start':        _point = new Point ( this.start.x, this.start.y );      break;

                    case 'end':          _point = new Point ( this.end.x,   this.end.y   );      break;
                }


                let _anchor = new Rectangle ( _point, _aspect );

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
             * @see             {@link UTILITIES.individual.draw.axis}
             */
            _drawAxis ( ) { }

            /**
             * Draws an axis for the associated object
             * @private
             * @function
             * @param           {Aspect} aspect                             Aspect properties
             * @param           {Object} color                              Color model
             * @see             {@link UTILITIES.individual.draw.border}
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

                let _aspect = new Aspect ( ( this.end.x - this.start.x ) + ( _offset ),

                                           ( this.end.y - this.start.y ) + ( _offset ) );

                ////////////////////////////////////////////////////////////////////

                if ( this.#options.border        ) this._drawBorder       ( _aspect );

                if ( this.#options.axis          ) this._drawAxis         ( );

                if ( this.#options.anchor        ) this._drawAnchor       ( );

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
             * @see             {@link UTILITIES.individual.misc.rotatePoint}
             */
            _rotatePoint ( ) { }

            /**
             * Sets anchor's point
             * @private
             * @function
             */
            _setAnchorPoint ( )
            {
                let _point = new Point ( );


                switch ( this.anchor.align )
                {
                    case 'start':   [ _point.x, _point.y ] = [ this.start.x, this.start.y ];  break;

                    case 'end':     [ _point.x, _point.y ] = [ this.end.x,   this.end.y   ];  break;

                    case 'center':

                        [ _point.x, _point.y ] = [ ( ( this.start.x + this.end.x ) * 0.5 ), ( ( this.start.y + this.end.y ) * 0.5 ) ];

                        break;

                    default:

                        console.warn ( `"${anchor}" is not a valid 'anchor' variable !` );
                }
            }

            /**
             * Set line's path
             * @private
             * @function
             */
            _setPath ( )
            {
                if ( this.controlPoints.p0 != 0 || this.controlPoints.p1 != 0 || this.controlPoints.p2 != 0 || this.controlPoints.p3 != 0 )

                    this._canvas.bezierCurveTo ( this.controlPoints.p0 + this.start.x, this.controlPoints.p1 + this.start.y,
                                                 this.controlPoints.p2 + this.end.x,   this.controlPoints.p3 + this.end.y,
                                                 this.end.x,                           this.end.y );

                else

                    this._canvas.lineTo ( this.end.x, this.end.y );
            }

            /**
             * Sets shadow properties
             * @private
             * @function
             * @see             {@link UTILITIES.individual.set.shadow}
             */
            _setShadow ( ) { }

        ////    + PUBLIC    //////////////////////

            /**
             * Get center of this object
             * @readOnly
             * @function
             * @return          {Point}                                     Center point coordinates
             */
            get center ( )
            {
                let _x = ( this.start.x > this.end.x ) ? this.end.x   + (  ( this.start.x - this.end.x   ) / 2  )

                                                       : this.start.x + (  ( this.end.x   - this.start.x ) / 2  );

                let _y = ( this.start.y > this.end.y ) ? this.end.y   + (  ( this.start.y - this.end.y   ) / 2  )

                                                       : this.start.y + (  ( this.end.y   - this.start.y ) / 2  );


                return new Point ( _x, _y );
            }

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
             */
            move ( degree, distance )
            {
                let _pointStart = this._rotatePoint ( { x: this.start.x, y: this.start.y }, degree, distance );

                let _pointEnd   = this._rotatePoint ( { x: this.end.x,   y: this.end.y   }, degree, distance );


                    [ this.start.x, this.start.y ] = [ _pointStart.x, _pointStart.y ];

                    [ this.end.x,   this.end.y   ] = [ _pointEnd.x,   _pointEnd.y   ];
            }

            /**
             * Rotate this object
             * @public
             * @function
             * @param           {number} degree                             Distance to rotate; in degrees
             * @param           {string} [anchor='center']                  Anchoring point during rotation
             * @param           {number} [clear=true]                       Clear canvas during each rotation
             * @see             {@link UTILITIES.individual.misc.rotate}
             */
            rotate ( ) { }

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


                this._canvas.save ( );

                this._canvas.translate ( this.x, this.y );

                this._canvas.rotate ( this.position.rotation );


                if ( this.#options.shadow ) this._setShadow ( );                                   // Set: shadow


                this._canvas.strokeStyle = this.stroke.color.toCss ( );

                this._canvas.lineCap     = this.lineCap;

                this._canvas.lineWidth   = this.stroke.width;

                ////////////////////////////////////////////////////////////////

                this._canvas.setLineDash ( ( this.stroke.type === 'solid' ) ? new Array : this.stroke.segments );


                this._canvas.beginPath ( );


                this._canvas.moveTo ( this.start.x, this.start.y );

                this._setPath ( );


                this._canvas.closePath ( );

                this._canvas.stroke ( );


                if ( this.#options.shadow ) this._canvas.shadowColor = new Rgb ( 0, 0, 0, 0 ).toCss ( );   // Reset: shadow


                this._drawOptions ( );

                this._canvas.restore ( );
            }
            else

                console.warn ( `'canvas' property is not set for ${this.constructor.name} !` );
        }
}
 
/**
 * @class           {Object}            Rectangle               Rectangle object
 * @property        {Point}             point                   X & Y axis coordinates
 * @property        {Aspect}            aspect                  Aspect properties
 * @property        {Array}             round                   Rounding properties
 * @property        {Stroke}            stroke                  Stroke properties
 * @property        {Fill}              fill                    Fill properties
 * @property        {Shadow}            shadow                  Shadow properties
 * @property        {Anchor}            anchor                  Anchor properties
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 * @property        {Options}           options                 Options for this object
 * @property        {Position}          position                Position properties
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

    #anchor   = new Anchor;
    #options  = new Options;
    #position = new Position;
    #velocity = new Point;

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
            this._isFill   = VALIDATION.isFill;
            this._isInDom  = VALIDATION.isInDom;
            this._isPoint  = VALIDATION.isPoint;
            this._isStroke = VALIDATION.isStroke;

            this._drawAnchor     = UTILITIES.individual.draw.anchor;
            this._drawAxis       = UTILITIES.individual.draw.axis;
            this._drawBorder     = UTILITIES.individual.draw.border;
            this._rotatePoint    = UTILITIES.individual.misc.rotatePoint;
            this._setAnchorPoint = UTILITIES.individual.set.anchorPoint;
            this._setFillType    = UTILITIES.individual.set.fillType;
            this._setShadow      = UTILITIES.individual.set.shadow;

            this.move            = UTILITIES.individual.misc.move;
            this.rotate          = UTILITIES.individual.misc.rotate;
            this.showCoordinates = UTILITIES.individual.misc.showCoordinates;

            Object.defineProperty ( this, 'area',      PROPERTY_BLOCKS.individual.area   );
            Object.defineProperty ( this, 'canvas',    PROPERTY_BLOCKS.individual.canvas );
            Object.defineProperty ( this, 'center',    PROPERTY_BLOCKS.individual.center );
            Object.defineProperty ( this, 'perimeter', PROPERTY_BLOCKS.individual.perimeter );
            Object.defineProperty ( this, 'point',     PROPERTY_BLOCKS.individual.point  );
            Object.defineProperty ( this, 'x',         PROPERTY_BLOCKS.individual.pointX );
            Object.defineProperty ( this, 'y',         PROPERTY_BLOCKS.individual.pointY );

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

            this.#options.shadow  = ( shadow.offset.x != undefined && shadow.offset.y != undefined );

            this.#position.master = this;
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ POINT ]    /////////////////////

            /**
             * Set point
             * @public
             * @function
             * @param           {Point} value                               X & Y coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            set point ( value ) { }

            /**
             * Get point
             * @public
             * @function
             * @return          {Point}                                     X & Y coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            get point ( ) { }


            /**
             * Set x-axis value
             * @public
             * @function
             * @param           {number} value                              X coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointX}
             */
            set x ( value ) { }

            /**
             * Get x-axis value
             * @readOnly
             * @function
             * @return          {number}                                    X coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointX}
             */
            get x ( ) { }


            /**
             * Set y-axis value
             * @public
             * @function
             * @param           {number} value                              Y coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointY}
             */
            set y ( value ) { }

            /**
             * Get y-axis value
             * @readOnly
             * @function
             * @return          {number}                                    Y coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointY}
             */
            get y ( ) { }

        ////    [ ASPECT ]    ////////////////////

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

        ////    [ ROUND ]    /////////////////////

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

        ////    [ STROKE ]    ////////////////////

            /**
             * Set stroke properties
             * @public
             * @function
             * @param           {Stroke} value                              Stroke properties
             */
            set stroke ( value )
            {
                this._stroke = ( this._isStroke ( value ) ) ? value : this._stroke;
            }

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

        ////    [ FILL ]    //////////////////////

            /**
             * Get fill properties
             * @public
             * @function
             * @param           {Fill} value                                Fill properties
             */
            set fill ( value )
            {
                this._fill = ( this._isFill ( value ) ) ? value : this._fill;
            }

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

        ////    [ SHADOW ]    ////////////////////

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

        ////    [ CANVAS ]    ////////////////////

            /**
             * Set canvas value
             * @public
             * @function
             * @param           {string} value                              Canvas id
             * @see             {@link PROPERTY_BLOCKS.individual.canvas}
             */
            set canvas ( value ) { }

            /**
             * Get canvas value
             * @readOnly
             * @function
             * @return          {string}                                    Canvas id
             * @see             {@link PROPERTY_BLOCKS.individual.canvas}
             */
            get canvas ( ) { }

        ////    [ ANCHOR ]    ////////////////////

            /**
             * Get anchor
             * @public
             * @function
             * @return          {Anchor}                                    Anchor properties
             */
            get anchor ( )
            {
                return this.#anchor;
            }

        ////    [ OPTIONS ]    ///////////////////

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

        ////    [ POSITION ]    //////////////////

            get position ( )
            {
                return this.#position;
            }

        ////    [ VELOCITY ]    //////////////////

            /**
             * Set velocity
             * @public
             * @function
             * @param             {number} value                                Velocity of object
             */
            set velocity ( value )
            {
                this.#velocity = ( this._isPoint ( value ) ) ? value : this.#velocity;
            }

            /**
             * Get velocity
             * @public
             * @function
             * @return             {number}                                     Velocity of object
             */
            get velocity ( )
            {
                return this.#velocity;
            }

    ////    VALIDATION  ////////////////////////////////////

        ////    - PRIVATE    /////////////////////

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
             * Returns whether the passed value is a Fill property object
             * @private
             * @function
             * @param           {Object} value                              Fill
             * @return          {boolean}                                   True || False
             * @see             {@link VALIDATION.isFill}
             */
            _isFill ( ) { }

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
             * Returns whether the passed value is a Stroke property object
             * @private
             * @function
             * @param           {Object} value                              Stroke
             * @return          {boolean}                                   True || False
             * @see             {@link VALIDATION.isStroke}
             */
            _isStroke ( ) { }

        ////    + PUBLIC    //////////////////////

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

        ////    - PRIVATE    /////////////////////

            /**
             * Draws anchor point
             * @private
             * @function
             * @see             {@link UTILITIES.individual.draw.anchor}
             */
            _drawAnchor ( ) { }

            /**
             * Draws an axis for the associated object
             * @private
             * @function
             * @param           {number} offset                             Offset of axis
             * @param           {Object} color                              Color model
             * @param           {number} stop                               Gradient color stop
             * @see             {@link UTILITIES.individual.draw.axis}
             */
            _drawAxis ( ) { }

            /**
             * Draws an axis for the associated object
             * @private
             * @function
             * @param           {Aspect} aspect                             Aspect properties
             * @param           {Object} color                              Color model
             * @see             {@link UTILITIES.individual.draw.border}
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
             * @see             {@link UTILITIES.individual.misc.rotatePoint}
             */
            _rotatePoint ( ) { }

            /**
             * Sets anchor's point against this object's point position
             * @private
             * @function
             * @see             {@link UTILITIES.individual.set.anchorPoint}
             */
            _setAnchorPoint ( ) { }

            /**
             * Sets fill type of the associated object
             * @private
             * @function
             * @see             {@link UTILITIES.individual.set.fillType}
             */
            _setFillType ( ) { }

            /**
             * Sets shadow properties
             * @private
             * @function
             * @see             {@link UTILITIES.individual.set.shadow}
             */
            _setShadow ( ) { }

        ////    + PUBLIC    //////////////////////

            /**
             * Get area of this object
             * @readOnly
             * @function
             * @return          {number}                                    Area of this object
             * @see             {@link PROPERTY_BLOCKS.individual.area}
             */
            get area ( ) { }

            /**
             * Get center of this object
             * @readOnly
             * @function
             * @return          {Point}                                     Center point coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.center}
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
             * @see             {@link UTILITIES.individual.color.cycle.fill}
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
             * @see             {@link UTILITIES.individual.color.cycle.gradient}
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
             * @see             {@link UTILITIES.individual.misc.move}
             */
            move ( ) { }

            /**
             * Get perimeter
             * @readOnly
             * @function
             * @return          {number}                                    Perimeter of rectangle
             * @see             {@link PROPERTY_BLOCKS.individual.center}
             */
            get perimeter ( ) { }

            /**
             * Rotate this object
             * @public
             * @function
             * @param           {number} degree                             Distance to rotate; in degrees
             * @param           {string} [anchor='center']                  Anchoring point during rotation
             * @param           {number} [clear=true]                       Clear canvas during each rotation
             * @see             {@link UTILITIES.individual.misc.rotate}
             */
            rotate ( ) { }

            /**
             * Shows coordinates of this object
             * @public
             * @function
             * @param           {number} [offset=10]                        Offset of coordinates y origin
             * @param           {number} [fontSize=16]                      Coordinates font size
             * @see             {@link UTILITIES.individual.misc.showCoordinates}
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
}
 
/**
 * @class           {Object}            RoundingRectangle 		RoundingRectangle object
 * @property        {Point}             point 					X & Y axis coordinates
 * @property        {Aspect}            aspect 					Aspect properties
 * @property        {Array}             [round=[5, 5, 5, 5]] 	Rounding properties
 * @property        {Stroke}            stroke 					Stroke properties
 * @property        {Fill}              fill 					Fill properties
 * @property        {Shadow}            shadow 					Shadow properties
 * @property        {Anchor}            anchor 					Anchor properties
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 * @property        {Options}  			options 				Options for this object
 * @property        {Position} 			position 				Position properties
 * @extends 		{Rectangle}
 */
class RoundedRectangle extends Rectangle
{
	_round  = [ 5, 5, 5, 5 ];
}
 
/**
 * @class           {Object}            Ship                    Ship object
 * @property        {Point}             point                   X & Y axis coordinates
 * @property        {number|Point}     [radius=25]              Radius of circle
 * @property        {Angle}             angle                   Angle properties
 * @property        {Stroke}            stroke                  Stroke properties
 * @property        {Fill}              fill                    Fill properties
 * @property        {Shadow}            shadow                  Shadow properties
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 * @property        {Anchor}            anchor                  Anchor properties
 * @property        {Options}           options                 Options for this object
 * @property        {Position}          position                Position properties
 */
class Ship
{
    _point  = new Point;
    _aspect = new Aspect;
    _stroke = new Stroke;
    _fill   = new Fill;
    _shadow = new Shadow;

    _canvas = undefined;

    #flame    = false;
    #options  = new Options;
    #position = new Position;
    #velocity = new Point;

    /**
     * Create a Ship object
     * @property        {Point}             point                   X & Y axis coordinates
     * @property        {number|Point}      radius                  Radius of circle
     * @property        {Angle}             angle                   Angle properties
     * @property        {Stroke}            stroke                  Stroke properties
     * @property        {Fill}              fill                    Fill properties
     * @property        {Shadow}            shadow                  Shadow properties
     * @property        {HTMLCanvasElement} canvas                  Canvas Id
     */
    constructor (
                    point  = { x:     undefined, y:      undefined },
                    aspect = { width: undefined, height: undefined },
                    stroke = { color: undefined, type:   undefined, segments:    undefined, width: undefined },
                    fill   = { color: undefined, type:   undefined },
                    shadow = { color: undefined, blur:   undefined, offset: { x: undefined, y:     undefined } },
                    canvas = undefined
                )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isAspect = VALIDATION.isAspect;
            this._isDegree = VALIDATION.isDegree;
            this._isFill   = VALIDATION.isFill;
            this._isInDom  = VALIDATION.isInDom;
            this._isPoint  = VALIDATION.isPoint;
            this._isStroke = VALIDATION.isStroke;

            this._drawAnchor  = UTILITIES.individual.draw.anchor;
            this._drawAxis    = UTILITIES.individual.draw.axis;
            this._drawBorder  = UTILITIES.individual.draw.border;
            this._rotatePoint = UTILITIES.individual.misc.rotatePoint;
            this._setFillType = UTILITIES.individual.set.fillType;
            this._setShadow   = UTILITIES.individual.set.shadow;

            // this.move            = UTILITIES.individual.misc.move;
            // this.rotate          = UTILITIES.individual.misc.rotate;
            this.showCoordinates = UTILITIES.individual.misc.showCoordinates;

            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.individual.canvas );
            Object.defineProperty ( this, 'point',  PROPERTY_BLOCKS.individual.point  );
            Object.defineProperty ( this, 'x',      PROPERTY_BLOCKS.individual.pointX );
            Object.defineProperty ( this, 'y',      PROPERTY_BLOCKS.individual.pointY );

            delete this.#options._controlPoints;
            delete this.#options._points;
            delete this.#options._master;

        this.point  = point;

        this.width  = ( aspect.width  != undefined ) ? aspect.width  : 25;
        this.height = ( aspect.height != undefined ) ? aspect.height : 20;

        ////    OBJECT INITIALIZER(S)   ////////////////////

            this._stroke = new Stroke ( stroke.color, stroke.type, stroke.segments, stroke.width );

            this._fill   = new Fill   ( fill.color,   fill.type );

            this._shadow = new Shadow ( shadow.color, shadow.blur, { x: shadow.offset.x, y: shadow.offset.y } );

        this.canvas = canvas;

        ////    ANCILLARY   ////////////////////////////////

            this.#options.shadow  = ( shadow.offset.x != undefined && shadow.offset.y != undefined );

            this.#position.master = this;
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ POINT ]   //////////////////////////

            /**
             * Set point
             * @public
             * @function
             * @param           {Point} value                               X & Y coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            set point ( value ) { }

            /**
             * Get point
             * @public
             * @function
             * @return          {Point}                                     X & Y coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            get point ( ) { }


            /**
             * Set x-axis value
             * @public
             * @function
             * @param           {number} value                              X coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointX}
             */
            set x ( value ) { }

            /**
             * Get x-axis value
             * @readOnly
             * @function
             * @return          {number}                                    X coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointX}
             */
            get x ( ) { }


            /**
             * Set y-axis value
             * @public
             * @function
             * @param           {number} value                              Y coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointY}
             */
            set y ( value ) { }

            /**
             * Get y-axis value
             * @readOnly
             * @function
             * @return          {number}                                    Y coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointY}
             */
            get y ( ) { }

        ////    [ RADIUS ]    ////////////////////////

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

        ////    [ ANGLE ]    /////////////////////////

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

        ////    [ STROKE ]    ////////////////////////

            /**
             * Set stroke properties
             * @public
             * @function
             * @param             {Stroke} value                            Stroke properties
             */
            set stroke ( value )
            {
                this._stroke = ( this._isStroke ( value ) ) ? value : this._stroke;
            }

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

        ////    [ FILL ]    //////////////////////////

            /**
             * Set fill properties
             * @public
             * @function
             * @param             {Fill} value                              Fill properties
             */
            set fill ( value )
            {
                this._fill = (this._isFill ( value ) ) ? value : this._fill;
            }

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

        ////    [ SHADOW ]    ////////////////////////

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

        ////    [ CANVAS ]    ////////////////////////

            /**
             * Set canvas value
             * @public
             * @function
             * @param           {string} value                              Canvas id
             * @see             {@link individual.canvas}
             */
            set canvas ( value ) { }

            /**
             * Get canvas value
             * @readOnly
             * @function
             * @return          {string}                                    Canvas id
             * @see             {@link individual.canvas}
             */
            get canvas ( ) { }

        ////    [ FLAME ]    /////////////////////////

            /**
             * Set flame
             * @public
             * @function
             * @param             {boolean} value                               True || False
             */
            set flame ( value )
            {
                this.#flame = value;
            }

            /**
             * Get flame
             * @public
             * @function
             * @return             {boolean}                                    True || False
             */
            get flame ( )
            {
                return this.#flame;
            }

        ////    [ ANCHOR ]    ////////////////////////

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

        ////    [ OPTIONS ]    ///////////////////////

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

        ////    [ POSITION ]    //////////////////////

            /**
             * Get position properties
             * @public
             * @function
             * @return          {Position}                                  Position properties
             */
            get position ( )
            {
                return this.#position;
            }

        ////    [ VELOCITY ]    //////////////////////

            /**
             * Set velocity
             * @public
             * @function
             * @param             {number} value                                Velocity of object
             */
            set velocity ( value )
            {
                this.#velocity = value;
            }

            /**
             * Get velocity
             * @public
             * @function
             * @return             {number}                                     Velocity of object
             */
            get velocity ( )
            {
                return this.#velocity;
            }

    ////    VALIDATION  ////////////////////////////////////

        ////    - PRIVATE    /////////////////////

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
             * Returns whether the passed value is a Fill property object
             * @private
             * @function
             * @param           {Object} value                              Fill
             * @return          {boolean}                                   True || False
             * @see             {@link VALIDATION.isFill}
             */
            _isFill ( ) { }

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
            _isPoint ( ) { }

            /**
             * Returns whether the passed value is a Stroke property object
             * @private
             * @function
             * @param           {Object} value                              Stroke
             * @return          {boolean}                                   True || False
             * @see             {@link VALIDATION.isStroke}
             */
            _isStroke ( ) { }

        ////    + PUBLIC    //////////////////////

            /**
             * Check whether the passed object is already present
             * @public
             * @function
             * @param           {Ship} circle                             Object to validate
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

        ////    - PRIVATE    /////////////////////

            /**
             * Draws anchor point
             * @private
             * @function
             * @see             {@link UTILITIES.individual.draw.anchor}
             */
            _drawAnchor ( ) { }

            /**
             * Draws an axis for the associated object
             * @private
             * @function
             * @param           {number} offset                             Offset of axis
             * @param           {Object} color                              Color model
             * @param           {number} stop                               Gradient color stop
             * @see             {@link UTILITIES.individual.draw.axis}
             */
            _drawAxis ( ) { }

            /**
             * Draws an axis for the associated object
             * @private
             * @function
             * @param           {Aspect} aspect                             Aspect properties
             * @param           {Object} color                              Color model
             * @see             {@link UTILITIES.individual.draw.border}
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

                let _aspect = ( this._isPoint ( this.radius ) ) ? new Aspect ( ( this.radius.x * 2 ) + _offset, ( this.radius.y * 2 ) + _offset )

                                                                : new Aspect ( ( this.radius   * 2 ) + _offset, ( this.radius   * 2 ) + _offset );

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
             * @see             {@link UTILITIES.individual.misc.rotatePoint}
             */
            _rotatePoint ( ) { }

            /**
             * Sets anchor's point against this object's point position
             * @private
             * @function
             */
            _setAnchorPoint ( )
            {
                [ this._anchor.x, this._anchor.y ] = [ this.x, this.y ];


                if ( this._isPoint ( this.radius ) )

                    switch ( this.anchor.align )
                    {
                        case 'center':      /*     ... do nothing        */   /*     ... do nothing        */   break;

                        case 'top':         /*     ... do nothing        */   this.anchor.y += this.radius.y;   break;

                        case 'topRight':    this.anchor.x -= this.radius.x;   this.anchor.y += this.radius.y;   break;

                        case 'right':       this.anchor.x -= this.radius.x;   /*     ... do nothing        */   break;

                        case 'bottomRight': this.anchor.x -= this.radius.x;   this.anchor.y -= this.radius.y;   break;

                        case 'bottom':      /*     ... do nothing        */   this.anchor.y -= this.radius.y;   break;

                        case 'bottomLeft':  this.anchor.x += this.radius.x;   this.anchor.y -= this.radius.y;   break;

                        case 'left':        this.anchor.x += this.radius.x;   /*     ... do nothing        */   break;

                        case 'topLeft':     this.anchor.x += this.radius.x;   this.anchor.y += this.radius.y;   break;
                    }

                else

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
             * @see             {@link UTILITIES.individual.set.fillType}
             */
            _setFillType ( ) { }

            /**
             * Sets shadow properties
             * @private
             * @function
             * @see             {@link UTILITIES.individual.set.shadow}
             */
            _setShadow ( ) { }

        ////    + PUBLIC    //////////////////////

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
             * Get bounds of this object
             * @readOnly
             * @function
             * @return          {Object}                                    Bounds of this object
             */
            get bounds ( )
            {
                return {
                           x: this.x - this.radius,
                           y: this.y - this.radius,
                           width:  this.diameter,
                           height: this.diameter
                       };
            }

            /**
             * Get diameter of circle
             * @readOnly
             * @function
             * @return          {number}                                    Diameter of circle
             */
            get diameter ( )
            {
                return ( this.radius * 2 );
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
             * Move this object
             * @public
             * @function
             * @param           {number}  degree                            Direction to move; in degrees
             * @param           {number}  distance                          Distance to move
             * @see             {@link UTILITIES.individual.misc.move}
             */
            move ( ) { }

            /**
             * Rotate this object
             * @public
             * @function
             * @param           {number} degree                             Distance to rotate; in degrees
             * @param           {string} [anchor='center']                  Anchoring point during rotation
             * @param           {number} [clear=true]                       Clear canvas during each rotation
             * @see             {@link UTILITIES.individual.misc.rotate}
             */
            rotate ( ) { }

            /**
             * Shows coordinates of this object
             * @public
             * @function
             * @param           {number} [offset=10]                        Offset of coordinates y origin
             * @param           {number} [fontSize=16]                      Coordinates font size
             * @see             {@link UTILITIES.individual.misc.showCoordinates}
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
                this._canvas.save ( );

                this._canvas.translate ( this.x, this.y );

                this._canvas.rotate ( this.position.rotation );


                if ( this.#options.shadow ) this._setShadow ( );                                    // Set: shadow


                this._canvas.strokeStyle = this.stroke.color.toCss ( );

                this._setFillType ( );

                this._canvas.lineWidth   = this.stroke.width;

                ////////////////////////////////////////////////////////////////

                this._canvas.setLineDash ( ( this.stroke.type === 'solid' ) ? new Array : this.stroke.segments );

                this._canvas.beginPath ( );

                this._canvas.moveTo ( 10, 0 );
                this._canvas.lineTo ( -10, 10 );
                this._canvas.lineTo ( -5, 0 );
                this._canvas.lineTo ( -10, -10 );
                this._canvas.lineTo ( 10, 0 );
                this._canvas.stroke (  );

                if ( this.flame )
                {
                    this._canvas.beginPath ( );
                    this._canvas.moveTo ( -7.5, -5 );
                    this._canvas.lineTo ( -15, 0 );
                    this._canvas.lineTo ( -7.5, 5 );
                    this._canvas.stroke ( );
                }

                this._canvas.stroke ( );


                if ( this.fill.type != 'pattern' )

                    this._canvas.fill ( );


                if ( this.#options.shadow ) this._canvas.shadowColor = new Rgb ( 0, 0, 0, 0 ).toCss ( );         // Reset: shadow


                // this._drawOptions ( );

                this._canvas.restore ( );
            }
            else

                console.warn ( `'canvas' property is not set for ${this.constructor.name} !` );
        }
}
 
/**
 * @class           {Object}            Text                    Text element to render within a canvas element
 * @property        {Point}             point                   X & Y axis coordinates
 * @property        {string}            text                    Text to display
 * @property        {Stroke}            stroke                  Stroke properties
 * @property        {Fill}              fill                    Fill properties
 * @property        {Shadow}            shadow                  Shadow properties
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 * @property        {Options}           options                 Options for this object
 * @property        {Position}          position                Position properties
 */
class Text extends Font
{
    _point  = new Point;
    _text   = undefined;
    _stroke = new Stroke;
    _fill   = new Fill;
    _shadow = new Shadow;

    _canvas = undefined;

    #options  = new Options;
    #position = new Position;
    #velocity = new Point;

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
            this._isFill   = VALIDATION.isFill;
            this._isInDom  = VALIDATION.isInDom;
            this._isPoint  = VALIDATION.isPoint;
            this._isStroke = VALIDATION.isStroke;

            this._drawAnchor  = UTILITIES.individual.draw.anchor;
            this._rotatePoint = UTILITIES.individual.misc.rotatePoint;
            this._setFillType = UTILITIES.individual.set.fillType;
            this._setShadow   = UTILITIES.individual.set.shadow;

            this.move            = UTILITIES.individual.misc.move;
            this.rotate          = UTILITIES.individual.misc.rotate;
            this.showCoordinates = UTILITIES.individual.misc.showCoordinates;

            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.individual.canvas );
            Object.defineProperty ( this, 'offset', PROPERTY_BLOCKS.individual.offset );
            Object.defineProperty ( this, 'point',  PROPERTY_BLOCKS.individual.point  );
            Object.defineProperty ( this, 'x',      PROPERTY_BLOCKS.individual.pointX );
            Object.defineProperty ( this, 'y',      PROPERTY_BLOCKS.individual.pointY );

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

            this.#options.shadow  = ( shadow.offset.x != undefined && shadow.offset.y != undefined );

            this.#position.master = this;
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ POINT ]   //////////////////////

            /**
             * Set point
             * @public
             * @function
             * @param           {Point} value                               X & Y coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            set point ( value ) { }

            /**
             * Get point
             * @public
             * @function
             * @return          {Point}                                     X & Y coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            get point ( ) { }


            /**
             * Set x-axis value
             * @public
             * @function
             * @param           {number} value                              X coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointX}
             */
            set x ( value ) { }

            /**
             * Get x-axis value
             * @readOnly
             * @function
             * @return          {number}                                    X coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointX}
             */
            get x ( ) { }


            /**
             * Set the y-axis value
             * @public
             * @function
             * @param           {number} value                              Y coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointY}
             */
            set y ( value ) { }

            /**
             * Get y-axis value
             * @readOnly
             * @function
             * @return          {number}                                    Y coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointY}
             */
            get y ( ) { }

        ////    [ TEXT ]    //////////////////////

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

        ////    [ STROKE ]  //////////////////////

            /**
             * Set stroke properties
             * @public
             * @function
             * @return          {Stroke} value                              Stroke properties
             */
            set stroke ( value )
            {
                this._stroke = ( this._isStroke ( value ) ) ? value : this._stroke;
            }

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

        ////    [ FILL ]    //////////////////////

            /**
             * Set fill properties
             * @public
             * @function
             * @return          {Fill} value                                Fill properties
             */
            set fill ( value )
            {
                this._fill = ( this._isFill ( value ) ) ? value : this._isFill;
            }

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

        ////    [ SHADOW ]  //////////////////////

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

        ////    [ CANVAS ]  //////////////////////

            /**
             * Set canvas value
             * @public
             * @function
             * @param           {string} value                              Canvas id
             * @see             {@link PROPERTY_BLOCKS.individual.canvas}
             */
            set canvas ( value ) { }

            /**
             * Get canvas value
             * @readOnly
             * @function
             * @return          {string}                                    Canvas id
             * @see             {@link PROPERTY_BLOCKS.individual.canvas}
             */
            get canvas ( ) { }

        ////    [ OPTIONS ] //////////////////////

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

        ////    [ POSITION ]    //////////////////

            /**
             * Get position properties
             * @public
             * @function
             * @return          {Position}                                  Position properties
             */
            get position ( )
            {
                return this.#position;
            }

        ////    [ VELOCITY ]    //////////////////

            /**
             * Set velocity
             * @public
             * @function
             * @param             {number} value                                Velocity of object
             */
            set velocity ( value )
            {
                this.#velocity = ( this._isPoint ( value ) ) ? value : this.#velocity;
            }

            /**
             * Get velocity
             * @public
             * @function
             * @return             {number}                                     Velocity of object
             */
            get velocity ( )
            {
                return this.#velocity;
            }

        ////    * SUPER *   //////////////////////

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

            ////    [ weight ]    //////

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

            ////    [ offset ]    //////

                /**
                 * Set offset
                 * @public
                 * @function
                 * @param           {Point} value                               Shadow offset
                 * @see             {@link PROPERTY_BLOCKS.individual.offset}
                 */
                set offset ( value ) { }

                /**
                 * Get offset
                 * @readOnly
                 * @function
                 * @return          {Point}                                     Shadow offset
                 * @see             {@link PROPERTY_BLOCKS.individual.offset}
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

    ////    VALIDATION    //////////////////////////////////

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
         * Returns whether the passed value is a Fill property object
         * @private
         * @function
         * @param           {Object} value                              Fill
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isFill}
         */
        _isFill ( ) { }

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
         * Returns whether the passed value is a Stroke property object
         * @private
         * @function
         * @param           {Object} value                              Stroke
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isStroke}
         */
        _isStroke ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        ////    - PRIVATE    /////////////////////

            /**
             * Rotates the origin point by the degree & distance passed
             * @private
             * @function
             * @param           {Point}  origin                             Origin point
             * @param           {number} degree                             Degree to rotate
             * @param           {number} distance                           Distance from origin
             * @see             {@link UTILITIES.individual.misc.rotatePoint}
             */
            _rotatePoint ( ) { }

            /**
             * Sets fill type of the associated object
             * @private
             * @function
             * @see             {@link UTILITIES.individual.set.fillType}
             */
            _setFillType ( ) { }

            /**
             * Sets shadow properties
             * @private
             * @function
             * @see             {@link UTILITIES.individual.set.shadow}
             */
            _setShadow ( ) { }

            /**
             * Draws anchor point
             * @private
             * @function
             * @see             {@link UTILITIES.individual.draw.anchor}
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

        ////    + PUBLIC    //////////////////////

            /**
             * Move this object
             * @public
             * @function
             * @param           {number}  degree                            Direction to move; in degrees
             * @param           {number}  distance                          Distance to move
             * @param           {boolean} [draw=false]                      Draw post movement
             * @param           {boolean} [clear=false]                     Clear canvas during each movement
             * @see             {@link UTILITIES.individual.misc.move}
             */
            move ( ) { }

            /**
             * Rotate this object
             * @public
             * @function
             * @param           {number} degree                             Distance to rotate; in degrees
             * @param           {string} [anchor='center']                  Anchoring point during rotation
             * @param           {number} [clear=true]                       Clear canvas during each rotation
             * @see             {@link UTILITIES.individual.misc.rotate}
             */
            rotate ( ) { }

            /**
             * Shows coordinates of this object
             * @public
             * @function
             * @param           {number} [offset=10]                        Offset of coordinates y origin
             * @param           {number} [fontSize=16]                      Coordinates font size
             * @see             {@link UTILITIES.individual.misc.showCoordinates}
             */
            showCoordinates ( ) { }

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


                this._canvas.font         = this.font;

                this._canvas.textAlign    = 'center';

                this._canvas.textBaseline = 'middle';

                this._setFillType ( );

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
}
 
/**
 * @class           {Object}            cImage                  cImage object
 * @property        {string}            source 				    Source path of image file
 * @property        {Object}            primary  			    Primary set of coordinates
 * @property        {Object}            secondary 			    Secondary set of coordinates
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 * @property        {Anchor}            anchor                  Anchor properties
 * @property        {Options}           options                 Options for this object
 * @property        {Position}          position                Position properties
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

	_canvas = undefined;

    #anchor   = new Anchor;
	#options  = new Options;
    #position = new Position;
    #velocity = new Point;

	/**
     * Create a cImage object
     * @class           {Object}            cImage                  cImage object
 	 * @property        {string}            source                  Source path of image file
 	 * @property        {Object}            primary                 Primary set of coordinates
     * @property        {Object}            secondary               Secondary set of coordinates
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

            this._drawAnchor     = UTILITIES.individual.draw.anchor;
            this._drawAxis       = UTILITIES.individual.draw.axis;
            this._drawBorder     = UTILITIES.individual.draw.border;
            this._rotatePoint    = UTILITIES.individual.misc.rotatePoint
            this._setAnchorPoint = UTILITIES.individual.set.anchorPoint;

            this.move   = UTILITIES.individual.misc.move;
            this.rotate = UTILITIES.individual.misc.rotate;

            Object.defineProperty ( this, 'area',      PROPERTY_BLOCKS.individual.area      );
            Object.defineProperty ( this, 'canvas',    PROPERTY_BLOCKS.individual.canvas    );
            Object.defineProperty ( this, 'center',    PROPERTY_BLOCKS.individual.center    );
            Object.defineProperty ( this, 'perimeter', PROPERTY_BLOCKS.individual.perimeter );

            delete this.#options._controlPoints;
            delete this.#options._points;
            delete this.#options._master;

        this.source    = source;
	    this.primary   = primary;
	    this.secondary = secondary;
	    this.canvas    = canvas;

        ////    ANCILLARY   ////////////////////////////////

            this.#position.master = this;
	}

    ////    PROPERTIES    //////////////////////////////////

    	////    [ SOURCE ]    ////////////////////////

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

                    this.type    = 'source';
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

        ////    [ POINT ]   //////////////////////////

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

        ////    [ ASPECT ]  //////////////////////////

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

    	////    [ PRIMARY ]    ///////////////////////

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

        ////    [ SECONDARY ]    /////////////////////

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

        ////    [ CANVAS ]  //////////////////////////

            /**
             * Set canvas value
             * @public
             * @function
             * @param           {string} value                              Canvas id
             * @see             {@link individual.canvas}
             */
            set canvas ( value ) { }

            /**
             * Get canvas value
             * @readOnly
             * @function
             * @return          {string}                                    Canvas id
             * @see             {@link individual.canvas}
             */
            get canvas ( ) { }

        ////    [ ANCHOR ]  //////////////////////////

            /**
             * Get anchor
             * @public
             * @function
             * @return          {Anchor}                                    Anchor properties
             */
            get anchor ( )
            {
                return this.#anchor;
            }

        ////    [ OPTIONS ] //////////////////////////

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

        ////    [ POSITION ]    //////////////////////

            /**
             * Get position properties
             * @public
             * @function
             * @return          {Position}                                  Position properties
             */
            get position ( )
            {
                return this.#position;
            }

        ////    [ VELOCITY ]    //////////////////////

            /**
             * Set velocity
             * @public
             * @function
             * @param             {number} value                                Velocity of object
             */
            set velocity ( value )
            {
                this.#velocity = ( this._isPoint ( value ) ) ? value : this.#velocity;
            }

            /**
             * Get velocity
             * @public
             * @function
             * @return             {number}                                     Velocity of object
             */
            get velocity ( )
            {
                return this.#velocity;
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

        ////    - PRIVATE    /////////////////////

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
             * @see             {@link UTILITIES.individual.draw.axis}
             */
            _drawAxis ( ) { }

            /**
             * Draws an axis for the associated object
             * @private
             * @function
             * @param           {Aspect} aspect                             Aspect properties
             * @param           {Object} color                              Color model
             * @see             {@link UTILITIES.individual.draw.border}
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
             * @see             {@link UTILITIES.individual.misc.rotatePoint}
             */
            _rotatePoint ( ) { }

            /**
             * Sets anchor's point against this object's point position
             * @private
             * @function
             * @see             {@link UTILITIES.individual.set.anchorPoint}
             */
            _setAnchorPoint ( ) { }

        ////    + PUBLIC    //////////////////////

            /**
             * Get area of this object
             * @readOnly
             * @function
             * @return          {number}                                    Area of this object
             * @see             {@link PROPERTY_BLOCKS.individual.area}
             */
            get area ( ) { }

            /**
             * Get center of this object
             * @readOnly
             * @function
             * @return          {Point}                                     Center point coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.center}
             */
            get center ( ) { }

            /**
             * Get perimeter of this object
             * @readOnly
             * @function
             * @return          {number}                                    Perimeter of rectangle
             * @see             {@link PROPERTY_BLOCKS.individual.center}
             */
            get perimeter ( ) { }

            /**
             * Move this object
             * @public
             * @function
             * @param           {number}  degree                            Direction to move; in degrees
             * @param           {number}  distance                          Distance to move
             * @param           {boolean} [draw=false]                      Draw post movement
             * @param           {boolean} [clear=false]                     Clear canvas during each movement
             * @see             {@link UTILITIES.individual.misc.move}
             */
            move ( ) { }

            /**
             * Rotate this object
             * @public
             * @function
             * @param           {number} degree                             Distance to rotate; in degrees
             * @param           {string} [anchor='center']                  Anchoring point during rotation
             * @param           {number} [clear=true]                       Clear canvas during each rotation
             * @see             {@link UTILITIES.individual.misc.rotate}
             */
            rotate ( ) { }

            /**
             * Shows coordinates of this object
             * @public
             * @function
             * @param           {number} [offset=10]                        Offset of coordinates y origin
             * @param           {number} [fontSize=16]                      Coordinates font size
             * @see             {@link UTILITIES.individual.misc.showCoordinates}
             */
            showCoordinates ( ) { }

	////    DRAW    ////////////////////////////////////////

        /**
         * Draws image depending on primary & secondary property settings
         * @private
         * @function
         */
        _drawImage ( )
        {
            if ( this.secondary.point )

                this._canvas.drawImage ( this._source, this.secondary.point.x, this.secondary.point.y, this.secondary.aspect.width, this.secondary.aspect.height, this.anchor.x, this.anchor.y, this.primary.aspect.width, this.primary.aspect.height );

            else

                this._canvas.drawImage ( this._source, this.anchor.x,          this.anchor.y,          this._source.width,          this._source.height );
        }

	    /**
         * Draw this object
         * @public
         * @function
         * @param           {string} canvas                             Canvas Id
         */
	    draw ( canvas )
	    {
            if ( canvas != undefined ) this.canvas = canvas;


            if ( this.source.onload === null  &&  this._canvas instanceof CanvasRenderingContext2D )

                this.source.onload = ( ) =>
                {
                    this._setAnchorPoint ( );

                    this._drawImage ( );

                    this._drawOptions ( );
                }

            else
            {
                this._setAnchorPoint ( );

                this._drawImage ( );

                this._drawOptions ( );
            }
	    }
}
 
/**
 * @class           {Array}             Circles                 Collection of circle elements within an array
 * @property        {Point}             point                   X & Y axis coordinates
 * @property        {StrokeCollection}  stroke                  Stroke collection properties
 * @property        {ShadowCollection}  shadow                  Shadow collection properties
 * @property        {Aspect}            aspect                  Aspect properties
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 * @property        {Template}          template                Canvas Lab Template object
 * @property        {Anchor}            anchor                  Anchor properties
 * @property        {Options}           options                 Options for this object
 */
class Circles extends Array
{
    _point   = new Point;
    _stroke  = new StrokeCollection;
    _shadow  = new ShadowCollection;
    _aspect  = new Aspect;

    _canvas   = undefined;
    _template = undefined;

    _anchor   = new Anchor;
    #options  = new Options;
    #storage  = { type: Circle }

    /**
     * Create Circles object
     * @property        {Point}             point                   X & Y axis coordinates
     * @property        {HTMLCanvasElement} canvas                  Canvas Id
     * @property        {Template}          template                Canvas Lab Template object
     */
    constructor ( point = { x: undefined, y: undefined }, canvas, template )
    {
        super ( );

        ////    COMPOSITION     ////////////////////////////

            this._isAspect          = VALIDATION.isAspect;
            this._isCanvasLabObject = VALIDATION.isCanvasLabObject;
            this._isDegree          = VALIDATION.isDegree;
            this._isInDom           = VALIDATION.isInDom;
            this._isPoint           = VALIDATION.isPoint;
            this._isTemplate        = VALIDATION.isTemplate;

            this._clearCanvas     = UTILITIES.individual.misc.clearCanvas;
            this._drawAnchor      = UTILITIES.collection.drawAnchor;
            this._drawAxis        = UTILITIES.individual.draw.axis;
            this._drawBorder      = UTILITIES.individual.draw.border;
            this._drawOptionsPost = UTILITIES.collection.drawOptionsPost;
            this._setAnchorPoint  = UTILITIES.collection.setAnchorPoint;
            this._setPointOffset  = UTILITIES.collection.setPointOffset;

            this.draw      = UTILITIES.collection.draw;
            this.getPoints = UTILITIES.collection.getPoints;
            this.push      = UTILITIES.collection.push;

            Object.defineProperty ( this, 'anchor',    PROPERTY_BLOCKS.collection.anchor       );
            Object.defineProperty ( this, 'area',      PROPERTY_BLOCKS.collection.area         );
            Object.defineProperty ( this, 'aspect',    PROPERTY_BLOCKS.collection.aspect       );
            Object.defineProperty ( this, 'width',     PROPERTY_BLOCKS.collection.aspectWidth  );
            Object.defineProperty ( this, 'height',    PROPERTY_BLOCKS.collection.aspectHeight );
            Object.defineProperty ( this, 'canvas',    PROPERTY_BLOCKS.collection.canvas       );
            Object.defineProperty ( this, 'center',    PROPERTY_BLOCKS.collection.center       );
            Object.defineProperty ( this, 'endPoint',  PROPERTY_BLOCKS.collection.endPoint     );
            Object.defineProperty ( this, 'perimeter', PROPERTY_BLOCKS.collection.perimeter    );
            Object.defineProperty ( this, 'template',  PROPERTY_BLOCKS.collection.template     );

            Object.defineProperty ( this, 'point', PROPERTY_BLOCKS.individual.point  );
            Object.defineProperty ( this, 'x',     PROPERTY_BLOCKS.individual.pointX );
            Object.defineProperty ( this, 'y',     PROPERTY_BLOCKS.individual.pointY );


        this.point    = point;
        this.canvas   = canvas;
        this.template = template;
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ POINT ]   //////////////////////

            /**
             * Set point
             * @public
             * @function
             * @param           {Point} value                               X & Y coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            set point ( value ) { }

            /**
             * Get point
             * @public
             * @function
             * @return          {Point}                                     X & Y coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            get point ( ) { }


            /**
             * Set x-axis value
             * @public
             * @function
             * @param           {number} value                              X coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointX}
             */
            set x ( value ) { }

            /**
             * Get x-axis value
             * @readOnly
             * @function
             * @return          {number}                                    X coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointX}
             */
            get x ( ) { }


            /**
             * Set the y-axis value
             * @public
             * @function
             * @param           {number} value                              Y coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointY}
             */
            set y ( value ) { }

            /**
             * Get y-axis value
             * @readOnly
             * @function
             * @return          {number}                                    Y coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointY}
             */
            get y ( ) { }

        ////    [ STROKE ]  //////////////////////

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

        ////    [ SHADOW ]  //////////////////////

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

        ////    [ ASPECT ]  //////////////////////

            /**
             * Get aspect properties
             * @public
             * @function
             * @return          {Aspect}                                    Aspect properties
             * @see             {@link PROPERTY_BLOCKS.collection.aspect}
             */
            get aspect ( ) { }


            /**
             * Get aspect with
             * @readOnly
             * @function
             * @return          {number}                                    Width value
             * @see             {@link PROPERTY_BLOCKS.collection.aspectWidth}
             */
            get width ( ) { }

            /**
             * Get aspect height
             * @readOnly
             * @function
             * @return          {number}                                    Height value
             * @see             {@link PROPERTY_BLOCKS.collection.aspectHeight}
             */
            get height ( ) { }

        ////    [ CANVAS ]  //////////////////////

            /**
             * Set canvas value
             * @public
             * @function
             * @param           {string} value                              Canvas id
             * @see             {@link PROPERTY_BLOCKS.collection.canvas}
             */
            set canvas ( value ) { }

            /**
             * Get canvas value
             * @readOnly
             * @function
             * @return          {string}                                    Canvas id
             * @see             {@link PROPERTY_BLOCKS.collection.canvas}
             */
            get canvas ( ) { }

        ////    [ TEMPLATE ]  ////////////////////

            /**
             * Set template
             * @public
             * @function
             * @param           {Template} value                            Template object
             * @see             {@link PROPERTY_BLOCKS.collection.template}
             */
            set template ( value ) { }

            /**
             * Get template
             * @readOnly
             * @function
             * @return          {Template}                                  Template object
             * @see             {@link PROPERTY_BLOCKS.collection.template}
             */
            get template ( ) { }

        ////    [ ANCHOR ]  //////////////////////

            /**
             * Set anchor type
             * @public
             * @function
             * @param           {string} value                              Anchor type
             * @see             {@link PROPERTY_BLOCKS.collection.anchor}
             */
            set anchor ( value ) { }

            /**
             * Get anchor
             * @public
             * @function
             * @return          {Anchor}                                    Anchor properties
             * @see             {@link PROPERTY_BLOCKS.collection.anchor}
             */
            get anchor ( ) { }

        ////    [ OPTIONS ] //////////////////////

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

        ////    [ STORAGE TYPE ]  ////////////////

            /**
             * Returns this collection's storage type
             * @public
             * @function
             * @return          {clObject}                                  Canvas Lab object
             */
            get storageType ( )
            {
                return this.#storage.type;
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
         * Returns whether the passed value is a CanvasLab object; Line, Circle, Rectangle, Text
         * @private
         * @function
         * @param           {Object} value                              CanvasLab object; Line, Circle, Rectangle, Text
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isCanvasLabObject}
         */
        _isCanvasLabObject ( ) { }

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
         * Returns whether the passed value is a Template
         * @private
         * @memberof VALIDATION
         * @function
         * @param           {Object} value                              Template object
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isTemplate}
         */
        _isTemplate ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        ////    - PRIVATE    /////////////////////

            /**
             * Draws anchor point
             * @private
             * @function
             * @see             {@link UTILITIES.collection.drawAnchor}
             */
            _drawAnchor ( ) { }

            /**
             * Draws an axis for the associated object
             * @private
             * @function
             * @param           {number} offset                             Offset of axis
             * @param           {Object} color                              Color model
             * @param           {number} stop                               Gradient color stop
             * @see             {@link UTILITIES.individual.draw.axis}
             */
            _drawAxis ( ) { }

            /**
             * Draws an axis for the associated object
             * @private
             * @function
             * @param           {Aspect} aspect                             Aspect properties
             * @param           {Object} color                              Color model
             * @see             {@link UTILITIES.individual.draw.border}
             */
            _drawBorder ( ) { }

            /**
             * Draws associated options
             * @private
             * @function
             * @see             {@link UTILITIES.collection.drawOptionsPost}
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
             * @see             {@link UTILITIES.collection.setAnchorPoint}
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

                    if ( this.constructor.name === 'Ellipses' )

                        for ( let _object of this )
                        {
                            _left   = ( _object.x - _object.radius.x < _left   ) ? _object.x - _object.radius.x : _left;

                            _right  = ( _object.x + _object.radius.x > _right  ) ? _object.x + _object.radius.x : _right;

                            _top    = ( _object.y - _object.radius.y < _top    ) ? _object.y - _object.radius.y : _top;

                            _bottom = ( _object.y + _object.radius.y > _bottom ) ? _object.y + _object.radius.y : _bottom;
                        }

                    else

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
             * @see             {@link UTILITIES.collection.setAnchorPoint}
             */
            _setPointOffset ( ) { }

        ////    + PUBLIC    //////////////////////

            /**
             * Get area of this object
             * @readOnly
             * @function
             * @return          {number}                                    Area of rectangle
             * @see             {@link PROPERTY_BLOCKS.collection.area}
             */
            get area ( ) { }

            /**
             * Get center of this object
             * @readOnly
             * @function
             * @return          {Point}                                     Center point coordinates
             * @see             {@link PROPERTY_BLOCKS.collection.center}
             */
            get center ( ) { }

            /**
             * Returns the last Point within this Array
             * @public
             * @function
             * @return          {Point}                                     Last Array element's X & Y Coordinates
             * @see             {@link PROPERTY_BLOCKS.collection.endPoint}
             */
            get endPoint ( ) { }

            /**
             * Get perimeter of this object
             * @readOnly
             * @function
             * @return          {number}                                    Perimeter of rectangle
             * @see             {@link PROPERTY_BLOCKS.collection.perimeter}
             */
            get perimeter ( ) { }

            /**
             * Get all or specific points throughout this collection
             * @public
             * @function
             * @param           {Array.<number>} indexes                    Indexes of points
             * @param           {Rgb}            color                      Color to colorize objects selected points
             * @see             {@link UTILITIES.collection.getPoints}
             */
            getPoints ( ) { }

            /**
             * Pushes child object(s) into this collection
             * @public
             * @function
             * @see             {@link UTILITIES.collection.push}
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
}
 
/**
 * @class           {Array}             Ellipses                Collection of circle elements within an array
 * @property        {Point}             point                   X & Y axis coordinates
 * @property        {StrokeCollection}  stroke                  Stroke collection properties
 * @property        {ShadowCollection}  shadow                  Shadow collection properties
 * @property        {Aspect}            aspect                  Aspect properties
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 * @property        {Template}          template                Canvas Lab Template object
 * @property        {Anchor}            anchor                  Anchor properties
 * @property        {Options}           options                 Options for this object
 * @extends 		{Circles}
 */
class Ellipses extends Circles
{
	#options = new Options;

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
}
 
/**
 * @class           {Array}             Group                   Collection of Line, Circle, Rectangle & Text objects
 * @property        {Point}             point                   X & Y axis coordinates
 * @property        {Array}             lines                   Collection of Line objects
 * @property        {Array}             circles                 Collection of Circle objects
 * @property        {Array}             ellipses                Collection of Ellipse objects
 * @property        {Array}             rectangles              Collection of Rectangle objects
 * @property        {Array}             roundedRectangles       Collection of Rounded Rectangle objects
 * @property        {Array}             text                    Collection of Text objects
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 * @property        {Template}          template                Canvas Lab Template object
 */
class Group extends Array
{
    _point = new Point;

    _lines             = new Lines;
    _circles           = new Circles;
    _ellipses          = new Ellipses;
    _rectangles        = new Rectangles;
    _roundedRectangles = new RoundedRectangles;
    _texts             = new Texts;

    _canvas   = undefined;
    _template = undefined;

    #storage  = { types: [ 'lines', 'circles', 'ellipses', 'rectangles', 'roundedRectangles', 'texts' ] }

    /**
     * Create Group object
     * @property        {Point}             point                   X & Y axis coordinates
     * @property        {HTMLCanvasElement} canvas                  Canvas Id
     * @property        {Template}          template                Canvas Lab Template object
     */
    constructor ( point = { x: undefined, y: undefined }, canvas, template )
    {
        super ( );

        ////    COMPOSITION     ////////////////////////////

            this._isCanvasLabObject = VALIDATION.isCanvasLabObject;
            this._isInDom           = VALIDATION.isInDom;
            this._isTemplate        = VALIDATION.isTemplate;
            this._isPoint           = VALIDATION.isPoint;

            Object.defineProperty ( this, 'template', PROPERTY_BLOCKS.collection.template );

            Object.defineProperty ( this, 'point', PROPERTY_BLOCKS.individual.point  );
            Object.defineProperty ( this, 'x',     PROPERTY_BLOCKS.individual.pointX );
            Object.defineProperty ( this, 'y',     PROPERTY_BLOCKS.individual.pointY );

        this.point    = point;
        this.canvas   = canvas;
        this.template = template;
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ POINT ]   //////////////////////

            /**
             * Set point
             * @public
             * @function
             * @param           {Point} value                               X & Y coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            set point ( value ) { }

            /**
             * Get point
             * @public
             * @function
             * @return          {Point}                                     X & Y coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            get point ( ) { }


            /**
             * Set x-axis value
             * @public
             * @function
             * @param           {number} value                              X coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointX}
             */
            set x ( value ) { }

            /**
             * Get x-axis value
             * @readOnly
             * @function
             * @return          {number}                                    X coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointX}
             */
            get x ( ) { }


            /**
             * Set the y-axis value
             * @public
             * @function
             * @param           {number} value                              Y coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointY}
             */
            set y ( value ) { }

            /**
             * Get y-axis value
             * @readOnly
             * @function
             * @return          {number}                                    Y coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointY}
             */
            get y ( ) { }

        ////    [ LINES ]    /////////////////////

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

        ////    [ CIRCLES ]    ///////////////////

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

        ////    [ ELLIPSES ]    //////////////////

            /**
             * Get's ellipses
             * @readOnly
             * @function
             * @return          {Ellipses}                                  Ellipses collection
             */
            get ellipses ( )
            {
                return this._ellipses;
            }

        ////    [ RECTANGLES ]    ////////////////

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

        ////    [ ROUNDED RECTANGLES ]    ////////

            /**
             * Get's rounded rectangles
             * @readOnly
             * @function
             * @return          {RoundedRectangles}                         Rectangles collection
             */
            get roundedRectangles ( )
            {
                return this._roundedRectangles;
            }

        ////    [ TEXTS ]    /////////////////////

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

        ////    [ CANVAS ]  //////////////////////

            /**
             * Set canvas value
             * @public
             * @function
             * @param           {string} value                              Canvas id
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

                            _object.canvas = value;
            }

            /**
             * Get canvas value
             * @readOnly
             * @function
             * @return          {string}                                    Canvas id
             */
            get canvas ( )
            {
                return ( this._canvas != undefined ) ? this._canvas.canvas.id : undefined;
            }

        ////    [ TEMPLATE ]  ////////////////////

            /**
             * Set template
             * @public
             * @function
             * @param           {Template} value                            Template object
             * @see             {@link PROPERTY_BLOCKS.collection.template}
             */
            set template ( value ) { }

            /**
             * Get template
             * @readOnly
             * @function
             * @return          {Template}                                  Template object
             * @see             {@link PROPERTY_BLOCKS.collection.template}
             */
            get template ( ) { }

    ////    VALIDATION    //////////////////////////////////

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
         * Returns whether the passed value is a Point
         * @private
         * @function
         * @param           {Object} value                              Point or object equivalent
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isPoint}
         */
        _isPoint ( ) { }

        /**
         * Returns whether the passed value is a Template
         * @private
         * @memberof VALIDATION
         * @function
         * @param           {Object} value                              Template object
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isTemplate}
         */
        _isTemplate ( ) { }

    ////    UTILITIES    ///////////////////////////////////

        ////    - PRIVATE    /////////////////////

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

        ////    + PUBLIC    //////////////////////

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

                            case 'Line':                this._lines.push ( _value );                break;

                            case 'Circle':              this._circles.push ( _value );              break;

                            case 'Ellipse':             this._ellipse.push ( _value );              break;

                            case 'Rectangle':           this._rectangles.push ( _value );           break;

                            case 'RoundedRectangle':    this._roundedRectangles.push ( _value );    break;

                        ////    COLLECTIONS     ////////////////

                            case 'Lines':               for ( let _line of _value ) this._lines.push ( _line );                                         break;

                            case 'Circles':             for ( let _circle of _value ) this._circles.push ( _circle );                                   break;

                            case 'Ellipses':            for ( let _ellipse of _value ) this._ellipses.push ( _ellipse );                                break;

                            case 'Rectangles':          for ( let _rectangle of _value ) this._rectangles.push ( _rectangle );                          break;

                            case 'RoundedRectangles':   for ( let _roundedRectangle of _value ) this._roundedRectangles.push ( _roundedRectangle );     break;
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

                            case 'Line':                this._lines.pop ( _value );                break;

                            case 'Circle':              this._circles.pop ( _value );              break;

                            case 'Ellipse':             this._ellipse.pop ( _value );              break;

                            case 'Rectangle':           this._rectangles.pop ( _value );           break;

                            case 'RoundedRectangle':    this._roundedRectangles.pop ( _value );    break;

                        ////    COLLECTIONS     ////////////////

                            case 'Lines':               for ( let _line of _value ) this._lines.pop ( _line );                                         break;

                            case 'Circles':             for ( let _circle of _value ) this._circles.pop ( _circle );                                   break;

                            case 'Ellipses':            for ( let _ellipse of _value ) this._ellipses.pop ( _ellipse );                                break;

                            case 'Rectangles':          for ( let _rectangle of _value ) this._rectangles.pop ( _rectangle );                          break;

                            case 'RoundedRectangles':   for ( let _roundedRectangle of _value ) this._roundedRectangles.pop ( _roundedRectangle );     break;

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
 * @class           {Array}             Lines                   Collection of Line objects
 * @property        {Point}             point                   X & Y axis coordinates
 * @property        {StrokeCollection}  stroke                  Stroke collection properties
 * @property        {ShadowCollection}  shadow                  Shadow collection properties
 * @property        {string}            lineCap                 Shape of end points
 * @property        {Aspect}            aspect                  Aspect properties
 * @property        {Anchor}            anchor                  Anchor properties
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 * @property        {Template}          template                Canvas Lab Template object
 */
class Lines extends Array
{
    _point   = new Point;
    _stroke  = new StrokeCollection;
    _shadow  = new ShadowCollection;
    _lineCap = 'round';
    _aspect  = new Aspect;
    _anchor  = new Anchor;

    _canvas   = undefined;
    _template = undefined;

    #options = new Options;
    #storage = { type: Line }

    /**
     * Create a Lines object
     * @property        {Point}             point                   X & Y axis coordinates
     * @property        {HTMLCanvasElement} canvas                  Canvas Id
     * @property        {Template}          template                Canvas Lab Template object
     */
    constructor ( point = { x: undefined, y: undefined }, canvas, template )
    {
        super ( );

        ////    COMPOSITION     ////////////////////////////

            this._isAspect          = VALIDATION.isAspect;
            this._isCanvasLabObject = VALIDATION.isCanvasLabObject;
            this._isInDom           = VALIDATION.isInDom;
            this._isPoint           = VALIDATION.isPoint;
            this._isTemplate        = VALIDATION.isTemplate;

            this._clearCanvas     = UTILITIES.individual.misc.clearCanvas;
            this._drawAnchor      = UTILITIES.collection.drawAnchor;
            this._drawAxis        = UTILITIES.individual.draw.axis;
            this._drawBorder      = UTILITIES.individual.draw.border;
            this._drawOptionsPost = UTILITIES.collection.drawOptionsPost;
            this._setAnchorPoint  = UTILITIES.collection.setAnchorPoint;

            this.draw      = UTILITIES.collection.draw;
            this.getPoints = UTILITIES.collection.getPoints;
            this.push      = UTILITIES.collection.push;

            Object.defineProperty ( this, 'anchor',    PROPERTY_BLOCKS.collection.anchor       );
            Object.defineProperty ( this, 'area',      PROPERTY_BLOCKS.collection.area         );
            Object.defineProperty ( this, 'aspect',    PROPERTY_BLOCKS.collection.aspect       );
            Object.defineProperty ( this, 'width',     PROPERTY_BLOCKS.collection.aspectWidth  );
            Object.defineProperty ( this, 'height',    PROPERTY_BLOCKS.collection.aspectHeight );
            Object.defineProperty ( this, 'canvas',    PROPERTY_BLOCKS.collection.canvas       );
            Object.defineProperty ( this, 'endPoint',  PROPERTY_BLOCKS.collection.endPoint     );
            Object.defineProperty ( this, 'perimeter', PROPERTY_BLOCKS.collection.perimeter    );
            Object.defineProperty ( this, 'template',  PROPERTY_BLOCKS.collection.template     );

            Object.defineProperty ( this, 'point', PROPERTY_BLOCKS.individual.point  );
            Object.defineProperty ( this, 'x',     PROPERTY_BLOCKS.individual.pointX );
            Object.defineProperty ( this, 'y',     PROPERTY_BLOCKS.individual.pointY );

        this.point    = point;
        this.canvas   = canvas;
        this.template = template;

        this.stroke.master = this;

        ////    POPULATE COLLECTION     ////////////////////

            if ( arguments.length > 0 )

                this.push.apply ( this, arguments );
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ POINT ]    /////////////////////

            /**
             * Set point
             * @public
             * @function
             * @param           {Point} value                               X & Y coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            set point ( value ) { }

            /**
             * Get point
             * @public
             * @function
             * @return          {Point}                                     X & Y coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            get point ( ) { }


            /**
             * Set x-axis value
             * @public
             * @function
             * @param           {number} value                              X coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointX}
             */
            set x ( value ) { }

            /**
             * Get x-axis value
             * @readOnly
             * @function
             * @return          {number}                                    X coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointX}
             */
            get x ( ) { }

            /**
             * Set the y-axis value
             * @public
             * @function
             * @param           {number} value                              Y coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointY}
             */
            set y ( value ) { }

            /**
             * Get y-axis value
             * @readOnly
             * @function
             * @return          {number}                                    Y coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointY}
             */
            get y ( ) { }

        ////    [ STROKE ]    ////////////////////

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

        ////    [ SHADOW ]    ////////////////////

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

        ////    [ LINECAP ]    ///////////////////

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

        ////    [ ASPECT ]    ////////////////////

            /**
             * Get aspect properties
             * @public
             * @function
             * @return          {Aspect}                                    Aspect properties
             * @see             {@link PROPERTY_BLOCKS.collection.aspect}
             */
            get aspect ( ) { }

            /**
             * Get aspect with
             * @readOnly
             * @function
             * @return          {number}                                    Width value
             * @see             {@link PROPERTY_BLOCKS.collection.aspectWidth}
             */
            get width ( ) { }

            /**
             * Get aspect height
             * @readOnly
             * @function
             * @return          {number}                                    Height value
             * @see             {@link PROPERTY_BLOCKS.collection.aspectHeight}
             */
            get height ( ) { }

        ////    [ ANCHOR ]    ////////////////////

            /**
             * Set anchor type
             * @public
             * @function
             * @param           {string} value                              Anchor type
             * @see             {@link PROPERTY_BLOCKS.collection.anchor}
             */
            set anchor ( value ) { }

            /**
             * Get anchor
             * @public
             * @function
             * @return          {Anchor}                                    Anchor properties
             * @see             {@link PROPERTY_BLOCKS.collection.anchor}
             */
            get anchor ( ) { }

        ////    [ CANVAS ]    ////////////////////

            /**
             * Set canvas value
             * @public
             * @function
             * @param           {string} value                              Canvas id
             * @see             {@link PROPERTY_BLOCKS.collection.canvas}
             */
            set canvas ( value ) { }

            /**
             * Get canvas value
             * @readOnly
             * @function
             * @return          {string}                                    Canvas id
             * @see             {@link PROPERTY_BLOCKS.collection.canvas}
             */
            get canvas ( ) { }

        ////    [ TEMPLATE ]    //////////////////

            /**
             * Set template
             * @public
             * @function
             * @param           {Template} value                            Template object
             * @see             {@link PROPERTY_BLOCKS.collection.template}
             */
            set template ( value ) { }

            /**
             * Get template
             * @readOnly
             * @function
             * @return          {Template}                                  Template object
             * @see             {@link PROPERTY_BLOCKS.collection.template}
             */
            get template ( ) { }

        ////    [ OPTIONS ]    ///////////////////

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

        ////    [ STORAGE TYPE ]    //////////////

            /**
             * Returns this collection's storage type
             * @public
             * @function
             * @return          {clObject}                                  Canvas Lab object
             */
            get storageType ( )
            {
                return this.#storage.type;
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

        /**
         * Returns whether the passed value is a Template
         * @private
         * @memberof VALIDATION
         * @function
         * @param           {Object} value                              Template object
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isTemplate}
         */
        _isTemplate ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        ////    - PRIVATE    /////////////////////

            /**
             * Draws anchor point
             * @private
             * @function
             * @see             {@link UTILITIES.individual.collection.drawAnchor}
             */
            _drawAnchor ( ) { }

            /**
             * Draws an axis for the associated object
             * @private
             * @function
             * @param           {number} offset                             Offset of axis
             * @param           {Object} color                              Color model
             * @param           {number} stop                               Gradient color stop
             * @see             {@link UTILITIES.individual.draw.axis}
             */
            _drawAxis   ( ) { }

            /**
             * Draws an axis for the associated object
             * @private
             * @function
             * @param           {Aspect} aspect                             Aspect properties
             * @param           {Object} color                              Color model
             * @see             {@link UTILITIES.individual.draw.border}
             */
            _drawBorder  ( ) { }

            /**
             * Draws associated options
             * @private
             * @function
             * @see             {@link UTILITIES.collection.drawOptionsPost}
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
             * @see             {@link UTILITIES.collection.setAnchorPoint}
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

        ////    + PUBLIC    //////////////////////

            /**
             * Get area of this object
             * @readOnly
             * @function
             * @return          {number}                                    Area of rectangle
             * @see             {@link PROPERTY_BLOCKS.collection.area}
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
             * @see             {@link PROPERTY_BLOCKS.collection.endPoint}
             */
            get endPoint ( ) { }

            /**
             * Get perimeter of this object
             * @readOnly
             * @function
             * @return          {number}                                    Perimeter of rectangle
             * @see             {@link PROPERTY_BLOCKS.collection.perimeter}
             */
            get perimeter ( ) { }

            /**
             * Get all or specific points throughout this collection
             * @public
             * @function
             * @param           {Array.<number>} indexes                    Indexes of points
             * @param           {Rgb}            color                      Color to colorize objects selected points
             * @see             {@link UTILITIES.collection.getPoints}
             */
            getPoints ( ) { }

            /**
             * Pushes child object(s) into this collection
             * @public
             * @function
             * @see             {@link UTILITIES.collection.push}
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
}
 
/**
 * @class           {Array}             Rectangles              Collection of Rectangle objects
 * @property        {Point}             point                   X & Y axis coordinates
 * @property        {StrokeCollection}  stroke                  Stroke collection properties
 * @property        {ShadowCollection}  shadow                  Shadow collection properties
 * @property        {Aspect}            aspect                  Aspect properties
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 * @property        {Template}          template                Canvas Lab Template object
 * @property        {Anchor}            anchor                  Anchor properties
 * @property        {Options}           options                 Options for this object
 */
class Rectangles extends Array
{
    _point   = new Point;
    _stroke  = new StrokeCollection;
    _shadow  = new ShadowCollection;
    _aspect  = new Aspect;

    _canvas   = undefined;
    _template = undefined;

    _anchor  = new Anchor;
    #options = new Options;
    #storage = { type: Rectangle }

    /**
     * Create Rectangles object
     * @property        {Point}             point                   X & Y axis coordinates
     * @property        {HTMLCanvasElement} canvas                  Canvas Id
     * @property        {Template}          template                Canvas Lab Template object
     */
    constructor ( point = { x: undefined, y: undefined }, canvas, template )
    {
        super ( );

        ////    COMPOSITION     ////////////////////////////

            this._isAspect          = VALIDATION.isAspect;
            this._isCanvasLabObject = VALIDATION.isCanvasLabObject;
            this._isInDom           = VALIDATION.isInDom;
            this._isPoint           = VALIDATION.isPoint;
            this._isTemplate        = VALIDATION.isTemplate;

            this._clearCanvas     = UTILITIES.individual.misc.clearCanvas;
            this._drawAnchor      = UTILITIES.collection.drawAnchor;
            this._drawAxis        = UTILITIES.individual.draw.axis;
            this._drawBorder      = UTILITIES.individual.draw.border;
            this._drawOptionsPost = UTILITIES.collection.drawOptionsPost;
            this._setAnchorPoint  = UTILITIES.collection.setAnchorPoint;
            this._setPointOffset  = UTILITIES.collection.setPointOffset;

            this.draw      = UTILITIES.collection.draw;
            this.getPoints = UTILITIES.collection.getPoints;
            this.push      = UTILITIES.collection.push;

            Object.defineProperty ( this, 'anchor',    PROPERTY_BLOCKS.collection.anchor       );
            Object.defineProperty ( this, 'area',      PROPERTY_BLOCKS.collection.area         );
            Object.defineProperty ( this, 'aspect',    PROPERTY_BLOCKS.collection.aspect       );
            Object.defineProperty ( this, 'width',     PROPERTY_BLOCKS.collection.aspectWidth  );
            Object.defineProperty ( this, 'height',    PROPERTY_BLOCKS.collection.aspectHeight );
            Object.defineProperty ( this, 'canvas',    PROPERTY_BLOCKS.collection.canvas       );
            Object.defineProperty ( this, 'center',    PROPERTY_BLOCKS.collection.center       );
            Object.defineProperty ( this, 'endPoint',  PROPERTY_BLOCKS.collection.endPoint     );
            Object.defineProperty ( this, 'perimeter', PROPERTY_BLOCKS.collection.perimeter    );
            Object.defineProperty ( this, 'template',  PROPERTY_BLOCKS.collection.template     );

            Object.defineProperty ( this, 'point', PROPERTY_BLOCKS.individual.point  );
            Object.defineProperty ( this, 'x',     PROPERTY_BLOCKS.individual.pointX );
            Object.defineProperty ( this, 'y',     PROPERTY_BLOCKS.individual.pointY );

        this.point    = point;
        this.canvas   = canvas;
        this.template = template;
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ POINT ]   //////////////////////

            /**
             * Set point
             * @public
             * @function
             * @param           {Point} value                               X & Y coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            set point ( value ) { }

            /**
             * Get point
             * @public
             * @function
             * @return          {Point}                                     X & Y coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            get point ( ) { }


            /**
             * Set x-axis value
             * @public
             * @function
             * @param           {number} value                              X coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointX}
             */
            set x ( value ) { }

            /**
             * Get x-axis value
             * @readOnly
             * @function
             * @return          {number}                                    X coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointX}
             */
            get x ( ) { }


            /**
             * Set the y-axis value
             * @public
             * @function
             * @param           {number} value                              Y coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointY}
             */
            set y ( value ) { }

            /**
             * Get y-axis value
             * @readOnly
             * @function
             * @return          {number}                                    Y coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointY}
             */
            get y ( ) { }

        ////    [ STROKE ]  //////////////////////

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

        ////    [ SHADOW ]  //////////////////////

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

        ////    [ ASPECT ]  //////////////////////

            /**
             * Get aspect properties
             * @public
             * @function
             * @return          {Aspect}                                    Aspect properties
             * @see             {@link PROPERTY_BLOCKS.collection.aspect}
             */
            get aspect ( ) { }


            /**
             * Get aspect with
             * @readOnly
             * @function
             * @return          {number}                                    Width value
             * @see             {@link PROPERTY_BLOCKS.collection.aspectWidth}
             */
            get width ( ) { }

            /**
             * Get aspect height
             * @readOnly
             * @function
             * @return          {number}                                    Height value
             * @see             {@link PROPERTY_BLOCKS.collection.aspectHeight}
             */
            get height ( ) { }

        ////    [ CANVAS ]  //////////////////////

            /**
             * Set canvas value
             * @public
             * @function
             * @param           {string} value                              Canvas id
             * @see             {@link PROPERTY_BLOCKS.collection.canvas}
             */
            set canvas ( value ) { }

            /**
             * Get canvas value
             * @readOnly
             * @function
             * @return          {string}                                    Canvas id
             * @see             {@link PROPERTY_BLOCKS.collection.canvas}
             */
            get canvas ( ) { }

        ////    [ TEMPLATE ]  ////////////////////

            /**
             * Set template
             * @public
             * @function
             * @param           {Template} value                            Template object
             * @see             {@link PROPERTY_BLOCKS.collection.template}
             */
            set template ( value ) { }

            /**
             * Get template
             * @readOnly
             * @function
             * @return          {Template}                                  Template object
             * @see             {@link PROPERTY_BLOCKS.collection.template}
             */
            get template ( ) { }

        ////    [ ANCHOR ]  //////////////////////

            /**
             * Set anchor type
             * @public
             * @function
             * @param           {string} value                              Anchor type
             * @see             {@link PROPERTY_BLOCKS.collection.anchor}
             */
            set anchor ( value ) { }

            /**
             * Get anchor
             * @public
             * @function
             * @return          {Anchor}                                    Anchor properties
             * @see             {@link PROPERTY_BLOCKS.collection.anchor}
             */
            get anchor ( ) { }

        ////    [ OPTIONS ] //////////////////////

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

        ////    [ STORAGE TYPE ]  ////////////////

            /**
             * Returns this collection's storage type
             * @public
             * @function
             * @return          {clObject}                                  Canvas Lab object
             */
            get storageType ( )
            {
                return this.#storage.type;
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

        /**
         * Returns whether the passed value is a Template
         * @private
         * @memberof VALIDATION
         * @function
         * @param           {Object} value                              Template object
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isTemplate}
         */
        _isTemplate ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        ////    - PRIVATE    /////////////////////

            /**
             * Draws anchor point
             * @private
             * @function
             * @see             {@link UTILITIES.collection.drawAnchor}
             */
            _drawAnchor ( ) { }

            /**
             * Draws an axis for the associated object
             * @private
             * @function
             * @param           {number} offset                             Offset of axis
             * @param           {Object} color                              Color model
             * @param           {number} stop                               Gradient color stop
             * @see             {@link UTILITIES.individual.draw.axis}
             */
            _drawAxis ( ) { }

            /**
             * Draws an axis for the associated object
             * @private
             * @function
             * @param           {Aspect} aspect                             Aspect properties
             * @param           {Object} color                              Color model
             * @see             {@link UTILITIES.individual.draw.border}
             */
            _drawBorder ( ) { }

            /**
             * Draws associated options
             * @private
             * @function
             * @see             {@link UTILITIES.collection.drawOptionsPost}
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
             * @see             {@link UTILITIES.collection.setAnchorPoint}
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
             * @see             {@link UTILITIES.collection.setAnchorPoint}
             */
            _setPointOffset ( ) { }

        ////    + PUBLIC    //////////////////////

            /**
             * Get area of this object
             * @readOnly
             * @function
             * @return          {number}                                    Area of rectangle
             * @see             {@link PROPERTY_BLOCKS.collection.area}
             */
            get area ( ) { }

            /**
             * Get center of this object
             * @readOnly
             * @function
             * @return          {Point}                                     Center point coordinates
             * @see             {@link PROPERTY_BLOCKS.collection.center}
             */
            get center ( ) { }

            /**
             * Returns the last Point within this Array
             * @public
             * @function
             * @return          {Point}                                     Last Array element's X & Y Coordinates
             * @see             {@link PROPERTY_BLOCKS.collection.endPoint}
             */
            get endPoint ( ) { }

            /**
             * Get perimeter of this object
             * @readOnly
             * @function
             * @return          {number}                                    Perimeter of rectangle
             * @see             {@link PROPERTY_BLOCKS.collection.perimeter}
             */
            get perimeter ( ) { }

            /**
             * Get all or specific points throughout this collection
             * @public
             * @function
             * @param           {Array.<number>} indexes                    Indexes of points
             * @param           {Rgb}            color                      Color to colorize objects selected points
             * @see             {@link UTILITIES.collection.getPoints}
             */
            getPoints ( ) { }

            /**
             * Pushes child object(s) into this collection
             * @public
             * @function
             * @see             {@link UTILITIES.collection.push}
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
}
 
/**
 * @class           {Array}             RoundedRectangles       Collection of Rounded Rectangle objects
 * @property        {Point}             point                   X & Y axis coordinates
 * @property        {StrokeCollection}  stroke                  Stroke collection properties
 * @property        {ShadowCollection}  shadow                  Shadow collection properties
 * @property        {Aspect}            aspect                  Aspect properties
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 * @property        {Template}          template                Canvas Lab Template object
 * @property        {Anchor}            anchor                  Anchor properties
 * @property        {Options}           options                 Options for this object
 * @extends 		{Rectangles}
 */
class RoundedRectangles extends Rectangles
{
	#options = new Options;

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
}
 
/**
 * @class           {Array}             Texts                   Collection of Text objects
 * @property        {Point}             point                   X & Y axis coordinates
 * @property        {StrokeCollection}  stroke                  Stroke collection properties
 * @property        {ShadowCollection}  shadow                  Shadow collection properties
 * @property        {Aspect}            aspect                  Aspect properties
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 * @property        {Template}          template                Canvas Lab Template object
 * @property        {Anchor}            anchor                  Anchor properties
 * @property        {Options}           options                 Options for this object
 */
class Texts extends Array
{
    _point   = new Point;
    _stroke  = new StrokeCollection;
    _shadow  = new ShadowCollection;
    _aspect  = new Aspect;

    _canvas   = undefined;
    _template = undefined;

    _anchor  = new Anchor;
    #options = new Options;
    #storage = { type: Text }

    /**
     * Create Texts object
     * @property        {Point}             point                   X & Y axis coordinates
     * @property        {HTMLCanvasElement} canvas                  Canvas Id
     * @property        {Template}          template                Canvas Lab Template object
     */
    constructor ( point = { x: undefined, y: undefined }, canvas, template )
    {
        super ( );

        ////    COMPOSITION     ////////////////////////////

            this._isAspect          = VALIDATION.isAspect;
            this._isCanvasLabObject = VALIDATION.isCanvasLabObject;
            this._isInDom           = VALIDATION.isInDom;
            this._isPoint           = VALIDATION.isPoint;
            this._isTemplate        = VALIDATION.isTemplate;

            this._clearCanvas     = UTILITIES.individual.misc.clearCanvas;
            this._drawAnchor      = UTILITIES.collection.drawAnchor;
            this._drawAxis        = UTILITIES.individual.draw.axis;
            this._drawBorder      = UTILITIES.individual.draw.border;
            this._drawOptionsPost = UTILITIES.collection.drawOptionsPost;
            this._setAnchorPoint  = UTILITIES.collection.setAnchorPoint;
            this._setPointOffset  = UTILITIES.collection.setPointOffset;

            this.draw      = UTILITIES.collection.draw;
            this.getPoints = UTILITIES.collection.getPoints;
            this.push      = UTILITIES.collection.push;

            Object.defineProperty ( this, 'anchor',    PROPERTY_BLOCKS.collection.anchor       );
            Object.defineProperty ( this, 'area',      PROPERTY_BLOCKS.collection.area         );
            Object.defineProperty ( this, 'aspect',    PROPERTY_BLOCKS.collection.aspect       );
            Object.defineProperty ( this, 'width',     PROPERTY_BLOCKS.collection.aspectWidth  );
            Object.defineProperty ( this, 'height',    PROPERTY_BLOCKS.collection.aspectHeight );
            Object.defineProperty ( this, 'canvas',    PROPERTY_BLOCKS.collection.canvas       );
            Object.defineProperty ( this, 'center',    PROPERTY_BLOCKS.collection.center       );
            Object.defineProperty ( this, 'endPoint',  PROPERTY_BLOCKS.collection.endPoint     );
            Object.defineProperty ( this, 'perimeter', PROPERTY_BLOCKS.collection.perimeter    );
            Object.defineProperty ( this, 'template',  PROPERTY_BLOCKS.collection.template     );

            Object.defineProperty ( this, 'point', PROPERTY_BLOCKS.individual.point  );
            Object.defineProperty ( this, 'x',     PROPERTY_BLOCKS.individual.pointX );
            Object.defineProperty ( this, 'y',     PROPERTY_BLOCKS.individual.pointY );

        this.point    = point;
        this.canvas   = canvas;
        this.template = template;
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ POINT ]   //////////////////////

            /**
             * Set point
             * @public
             * @function
             * @param           {Point} value                               X & Y coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            set point ( value ) { }

            /**
             * Get point
             * @public
             * @function
             * @return          {Point}                                     X & Y coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            get point ( ) { }


            /**
             * Set x-axis value
             * @public
             * @function
             * @param           {number} value                              X coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointX}
             */
            set x ( value ) { }

            /**
             * Get x-axis value
             * @readOnly
             * @function
             * @return          {number}                                    X coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointX}
             */
            get x ( ) { }


            /**
             * Set the y-axis value
             * @public
             * @function
             * @param           {number} value                              Y coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointY}
             */
            set y ( value ) { }

            /**
             * Get y-axis value
             * @readOnly
             * @function
             * @return          {number}                                    Y coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointY}
             */
            get y ( ) { }

        ////    [ STROKE ]  //////////////////////

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

        ////    [ SHADOW ]  //////////////////////

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

        ////    [ ASPECT ]  //////////////////////

            /**
             * Get aspect properties
             * @public
             * @function
             * @return          {Aspect}                                    Aspect properties
             * @see             {@link PROPERTY_BLOCKS.collection.aspect}
             */
            get aspect ( ) { }

            /**
             * Get aspect with
             * @readOnly
             * @function
             * @return          {number}                                    Width value
             * @see             {@link PROPERTY_BLOCKS.collection.aspectWidth}
             */
            get width ( ) { }

            /**
             * Get aspect height
             * @readOnly
             * @function
             * @return          {number}                                    Height value
             * @see             {@link PROPERTY_BLOCKS.collection.aspectHeight}
             */
            get height ( ) { }

        ////    [ CANVAS ]  //////////////////////

            /**
             * Set canvas value
             * @public
             * @function
             * @param           {string} value                              Canvas id
             * @see             {@link PROPERTY_BLOCKS.collection.canvas}
             */
            set canvas ( value ) { }

            /**
             * Get canvas value
             * @readOnly
             * @function
             * @return          {string}                                    Canvas id
             * @see             {@link PROPERTY_BLOCKS.collection.canvas}
             */
            get canvas ( ) { }

        ////    [ TEMPLATE ]  ////////////////////

            /**
             * Set template
             * @public
             * @function
             * @param           {Template} value                            Template object
             * @see             {@link PROPERTY_BLOCKS.collection.template}
             */
            set template ( value ) { }

            /**
             * Get template
             * @readOnly
             * @function
             * @return          {Template}                                  Template object
             * @see             {@link PROPERTY_BLOCKS.collection.template}
             */
            get template ( ) { }

        ////    [ ANCHOR ]  //////////////////////

            /**
             * Set anchor type
             * @public
             * @function
             * @param           {string} value                              Anchor type
             * @see             {@link PROPERTY_BLOCKS.collection.anchor}
             */
            set anchor ( value ) { }

            /**
             * Get anchor
             * @public
             * @function
             * @return          {Anchor}                                    Anchor properties
             * @see             {@link PROPERTY_BLOCKS.collection.anchor}
             */
            get anchor ( ) { }

        ////    [ OPTIONS ] //////////////////////

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

        ////    [ STORAGE TYPE ]  ////////////////

            /**
             * Returns this collection's storage type
             * @public
             * @function
             * @return          {clObject}                                  Canvas Lab object
             */
            get storageType ( )
            {
                return this.#storage.type;
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

        ////    - PRIVATE    /////////////////////

            /**
             * Draws anchor point
             * @private
             * @function
             * @see             {@link UTILITIES.collection.drawAnchor}
             */
            _drawAnchor ( ) { }

            /**
             * Draws an axis for the associated object
             * @private
             * @function
             * @param           {number} offset                             Offset of axis
             * @param           {Object} color                              Color model
             * @param           {number} stop                               Gradient color stop
             * @see             {@link UTILITIES.individual.draw.axis}
             */
            _drawAxis ( ) { }

            /**
             * Draws an axis for the associated object
             * @private
             * @function
             * @param           {Aspect} aspect                             Aspect properties
             * @param           {Object} color                              Color model
             * @see             {@link UTILITIES.individual.draw.border}
             */
            _drawBorder ( ) { }

            /**
             * Draws associated options
             * @private
             * @function
             * @see             {@link UTILITIES.collection.drawOptionsPost}
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
             * @see             {@link UTILITIES.collection.setAnchorPoint}
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
             * @see             {@link UTILITIES.collection.setAnchorPoint}
             */
            _setPointOffset ( ) { }

        ////    + PUBLIC    //////////////////////

            /**
             * Get area of this object
             * @readOnly
             * @function
             * @return          {number}                                    Area of rectangle
             * @see             {@link PROPERTY_BLOCKS.collection.area}
             */
            get area ( ) { }

            /**
             * Get center of this object
             * @readOnly
             * @function
             * @return          {Point}                                     Center point coordinates
             * @see             {@link PROPERTY_BLOCKS.collection.center}
             */
            get center ( ) { }

            /**
             * Returns the last Point within this Array
             * @public
             * @function
             * @return          {Point}                                     Last Array element's X & Y Coordinates
             * @see             {@link PROPERTY_BLOCKS.collection.endPoint}
             */
            get endPoint ( ) { }

            /**
             * Get perimeter of this object
             * @readOnly
             * @function
             * @return          {number}                                    Perimeter of rectangle
             * @see             {@link PROPERTY_BLOCKS.collection.perimeter}
             */
            get perimeter ( ) { }

            /**
             * Get all or specific points throughout this collection
             * @public
             * @function
             * @param           {Array.<number>} indexes                    Indexes of points
             * @param           {Rgb}            color                      Color to colorize objects selected points
             * @see             {@link UTILITIES.collection.getPoints}
             */
            getPoints ( ) { }

            /**
             * Pushes child object(s) into this collection
             * @public
             * @function
             * @see             {@link UTILITIES.collection.push}
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
 * @class           {Object}          Animation                 Animation handler; for drawing a single object in one instance
 * @property        {clObject}        object                    CanvasLab object
 * @property        {string|Function} timing                    Timing function
 * @property        {number}          period                    Period of time
 * @property        {Object}          change                    Change to object
 * @property        {Object}          options                   Options for this object
 */
class Animation
{
    _object = undefined;
    _timing = undefined;
    _period = undefined;
    _change = undefined;

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

    _options =
    {
        cache:     false,
        active:    false,
        normalize: false
    }

    _queue = new Queue;
    #cache = new Array;

    /**
     * Creates an animation instance
     * @param           {clObject}        object                    Canvas Lab object
     * @param           {string|Function} timing                    Timing function
     * @param           {number}          period                    Period of time
     * @param           {Object}          change                    Change to object
     */
    constructor ( object, timing, period, change )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isNumber = VALIDATION.isNumber;

            this._end              = UTILITIES.animation.end;
            this._getInvertedAngle = UTILITIES.animation.getInvertedAngle;

            Object.defineProperty ( this, 'cache',  PROPERTY_BLOCKS.animation.cache  );
            Object.defineProperty ( this, 'cancel', PROPERTY_BLOCKS.animation.cancel );
            Object.defineProperty ( this, 'period', PROPERTY_BLOCKS.animation.period );
            Object.defineProperty ( this, 'queue',  PROPERTY_BLOCKS.animation.queue  );

        this.object = object;
        this.timing = timing;
        this.period = period;
        this.change = change;

        this._options.active = true;
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ OBJECT ]    ////////////////////

            /**
             * Set object to animate
             * @public
             * @function
             * @param           {clObject} value                            Canvas Lab object
             */
            set object ( value )
            {
                this._object = value;
            }

            /**
             * Get object
             * @readOnly
             * @function
             * @return          {clObject}                                  Canvas Lab object
             */
            get object ( )
            {
                return this._object;
            }

        ////    [ TIMING ]    ////////////////////

            /**
             * Set timing
             * @public
             * @function
             * @param           {string|Function} value                     Timing function
             */
            set timing ( value )
            {
                if ( value != undefined )

                    switch ( typeof value )
                    {
                        case 'string':

                            this._timing = this.#timings [ value ];

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
             * @return          {Function}                                  Timing function
             */
            get timing ( )
            {
                return this._timing;
            }

        ////    [ PERIOD ]    ////////////////////

            /**
             * Set period of animation
             * @public
             * @function
             * @param           {number} value                              Period of animation-time
             * @see             {@link PROPERTY_BLOCKS.animation.period}
             */
            set period ( value ) { }

            /**
             * Get period of animation
             * @readOnly
             * @function
             * @return          {number}                                    Period of animation-time
             * @see             {@link PROPERTY_BLOCKS.animation.period}
             */
            get period ( ) { }

        ////    [ CHANGE ]    ////////////////////

            /**
             * Set change
             * @public
             * @function
             * @param           {clChange} value                            Canvas Lab change object
             */
            set change ( value )
            {
                this._change = value;
            }

            /**
             * Get change
             * @readOnly
             * @function
             * @return          {clChange}                                  Canvas Lab change object
             */
            get change ( )
            {
                return this._change;
            }

        ////    [ CACHE ]    /////////////////////

            /**
             * Set cache
             * @public
             * @function
             * @param           {boolean} value                             True || False
             * @see             {@link PROPERTY_BLOCKS.animation.cache}
             */
            set cache ( value ) { }

            /**
             * Get cache
             * @readOnly
             * @function
             * @return          {boolean}                                   True || False
             * @see             {@link PROPERTY_BLOCKS.animation.cache}
             */
            get cache ( ) { }

        ////    [ QUEUE ]    /////////////////////

            /**
             * Set queue
             * @public
             * @function
             * @param           {Queue} value                               Queue object
             * @see             {@link PROPERTY_BLOCKS.animation.queue}
             */
            set queue ( value ) { }

            /**
             * Get queue
             * @readOnly
             * @function
             * @return          {Queue}                                     Queue object
             * @see             {@link PROPERTY_BLOCKS.animation.queue}
             */
            get queue ( ) { }

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

        ////    - PRIVATE    /////////////////////

            /**
             * Cache object
             * @private
             * @function
             * @param           {clObject} object                           Canvas Lab object
             */
            _cacheObject ( )
            {
                let _object = undefined;


                switch ( this.object.constructor.name )
                {
                    case 'Circle':

                        _object = new Circle;

                        // point  = {Point}

                        _object.point  = new Point ( this.object.x, this.object.y );

                        // radius = {number}

                        _object.radius = this.object.radius;

                        // angle  = start: {number}, end: {number}, clockwise: {boolean}

                        _object.angle.start     = this.object.angle.start;

                        _object.angle.end       = this.object.angle.end;

                        _object.angle.clockwise = this.object.angle.clockwise;

                        // stroke = color: {Rgb}, type: {string}, segments: {Array.<number>}, width: {number}

                        _object.stroke.color    = new Rgb (
                                                      this.object.stroke.color.red,
                                                      this.object.stroke.color.green,
                                                      this.object.stroke.color.blue,
                                                      this.object.stroke.color.alpha
                                                  );

                        _object.stroke.type     = this.object.stroke.type;

                        _object.stroke.segments = this.object.segments;

                        _object.stroke.width    = this.object.stroke.width;

                        // fill   = color: {Rgb}, type: {string}

                        _object.fill.color = new Rgb (
                                                 this.object.fill.color.red,
                                                 this.object.fill.color.green,
                                                 this.object.fill.color.blue,
                                                 this.object.fill.color.alpha
                                             );

                        _object.fill.type  = this.object.fill.type;

                        // shadow = color: {Rgb}, blur: {number}, offset: {Point}

                        _object.shadow.color  = new Rgb (
                                                    this.object.shadow.color.red,
                                                    this.object.shadow.color.green,
                                                    this.object.shadow.color.blue,
                                                    this.object.shadow.color.alpha
                                                );

                        _object.shadow.blur   = this.object.shadow.blur;

                        _object.shadow.offset = new Point ( this.object.shadow.offset.x, this.object.shadow.offset.y );

                        // canvas = {string}

                        _object.canvas = this.object.canvas;

                        break;

                    case 'Ellipse':

                        _object = new Ellipse;

                        // point  = {Point}

                        _object.point  = new Point ( this.object.x, this.object.y );

                        // radius = {number}

                        _object.radius = this.object.radius;

                        // angle  = start: {number}, end: {number}, clockwise: {boolean}

                        _object.angle.start     = this.object.angle.start;

                        _object.angle.end       = this.object.angle.end;

                        _object.angle.clockwise = this.object.angle.clockwise;

                        // stroke = color: {Rgb}, type: {string}, segments: {Array.<number>}, width: {number}

                        _object.stroke.color    = new Rgb (
                                                      this.object.stroke.color.red,
                                                      this.object.stroke.color.green,
                                                      this.object.stroke.color.blue,
                                                      this.object.stroke.color.alpha
                                                  );

                        _object.stroke.type     = this.object.stroke.type;

                        _object.stroke.segments = this.object.segments;

                        _object.stroke.width    = this.object.stroke.width;

                        // fill   = color: {Rgb}, type: {string}

                        _object.fill.color = new Rgb (
                                                 this.object.fill.color.red,
                                                 this.object.fill.color.green,
                                                 this.object.fill.color.blue,
                                                 this.object.fill.color.alpha
                                             );

                        _object.fill.type  = this.object.fill.type;

                        // shadow = color: {Rgb}, blur: {number}, offset: {Point}

                        _object.shadow.color  = new Rgb (
                                                    this.object.shadow.color.red,
                                                    this.object.shadow.color.green,
                                                    this.object.shadow.color.blue,
                                                    this.object.shadow.color.alpha
                                                );

                        _object.shadow.blur   = this.object.shadow.blur;

                        _object.shadow.offset = new Point ( this.object.shadow.offset.x, this.object.shadow.offset.y );

                        // canvas = {string}

                        _object.canvas = this.object.canvas;

                        break;

                    case 'Rectangle':

                        _object = new Rectangle;

                        // point  = {Point}

                        _object.point  = new Point ( this.object.x, this.object.y );

                        // radius = {number}

                        _object.radius = this.object.radius;

                        // stroke = color: {Rgb}, type: {string}, segments: {Array.<number>}, width: {number}

                        _object.stroke.color    = new Rgb (
                                                      this.object.stroke.color.red,
                                                      this.object.stroke.color.green,
                                                      this.object.stroke.color.blue,
                                                      this.object.stroke.color.alpha
                                                  );

                        _object.stroke.type     = this.object.stroke.type;

                        _object.stroke.segments = this.object.segments;

                        _object.stroke.width    = this.object.stroke.width;

                        // fill   = color: {Rgb}, type: {string}

                        _object.fill.color = new Rgb (
                                                 this.object.fill.color.red,
                                                 this.object.fill.color.green,
                                                 this.object.fill.color.blue,
                                                 this.object.fill.color.alpha
                                             );

                        _object.fill.type  = this.object.fill.type;

                        // shadow = color: {Rgb}, blur: {number}, offset: {Point}

                        _object.shadow.color  = new Rgb (
                                                    this.object.shadow.color.red,
                                                    this.object.shadow.color.green,
                                                    this.object.shadow.color.blue,
                                                    this.object.shadow.color.alpha
                                                );

                        _object.shadow.blur   = this.object.shadow.blur;

                        _object.shadow.offset = new Point ( this.object.shadow.offset.x, this.object.shadow.offset.y );

                        // canvas = {string}

                        _object.canvas = this.object.canvas;

                        break;

                    case 'RoundedRectangle':

                        _object = new RoundedRectangle;

                        // point  = {Point}

                        _object.point  = new Point ( this.object.x, this.object.y );

                        // radius = {number}

                        _object.radius = this.object.radius;

                        // stroke = color: {Rgb}, type: {string}, segments: {Array.<number>}, width: {number}

                        _object.stroke.color    = new Rgb (
                                                      this.object.stroke.color.red,
                                                      this.object.stroke.color.green,
                                                      this.object.stroke.color.blue,
                                                      this.object.stroke.color.alpha
                                                  );

                        _object.stroke.type     = this.object.stroke.type;

                        _object.stroke.segments = this.object.segments;

                        _object.stroke.width    = this.object.stroke.width;

                        // fill   = color: {Rgb}, type: {string}

                        _object.fill.color = new Rgb (
                                                 this.object.fill.color.red,
                                                 this.object.fill.color.green,
                                                 this.object.fill.color.blue,
                                                 this.object.fill.color.alpha
                                             );

                        _object.fill.type  = this.object.fill.type;

                        // shadow = color: {Rgb}, blur: {number}, offset: {Point}

                        _object.shadow.color  = new Rgb (
                                                    this.object.shadow.color.red,
                                                    this.object.shadow.color.green,
                                                    this.object.shadow.color.blue,
                                                    this.object.shadow.color.alpha
                                                );

                        _object.shadow.blur   = this.object.shadow.blur;

                        _object.shadow.offset = new Point ( this.object.shadow.offset.x, this.object.shadow.offset.y );

                        // canvas = {string}

                        _object.canvas = this.object.canvas;

                        break;

                    case 'Text':

                        _object = new Text (
                                      this.object.point,
                                      this.object.text,
                                      this.object.type,
                                      this.object.size,
                                      this.object.weight,
                                      this.object.maxWidth,
                                      this.object.offset,
                                      this.object.stroke,
                                      this.object.fill,
                                      this.object.shadow,
                                      this.object.canvas
                                  );

                        break;
                }


                this.#cache.push ( _object );
            }

            /**
             * Checks whether queue is set
             * @private
             * @function
             */
            _checkQueue ( )
            {
                if ( this.queue.isSet )
                {
                    let _animate = this.queue.next;             // Get initial ( and subsequent ) queue entries


                    this.object = _animate.object;

                    this.timing = _animate.timing;

                    this.period = _animate.period;

                    this.change = _animate.change;
                }
            }

            /**
             * Clears canvas
             * @private
             * @function
             * @param           {clObject} object                           Canvas Lab object
             */
            _clearCanvas ( object )
            {
                let _canvas = document.getElementById ( object.canvas );


                if ( _canvas )  // @TODO: identify why this check has to take place periodically !

                    object._canvas.clearRect ( 0, 0, _canvas.width, _canvas.height );
            }

            /**
             * Draw cached object(s)
             * @private
             * @function
             */
            _drawCache ( )
            {
                if ( this.#cache.length > 0 )

                    for ( let _entry of this.#cache )

                        _entry.draw ( );
            }

            /**
             * End animation
             * @private
             * @function
             * @see             {@link UTILITIES.animation.end}
             */
            _end ( ) { }

            /**
             * Returns an inverted angle; of 360 degrees
             * @private
             * @function
             * @param           {number} angle                              Angle to convert
             * @return          {number}                                    Inverted angle
             * @see             {@link UTILITIES.animation.getInvertedAngle}
             */
            _getInvertedAngle ( angle ) { }

            /**
             * Returns a point based off of the direction & distance passed
             * @private
             * @function
             * @param           {number} direction                          Direction to point; in degrees
             * @param           {number} distance                           Distance to point
             * @return          {Point}                                     X & Y coordinates
             */
            _getPointByDegreeNDistance ( direction, distance )
            {
                let _point = new Point;

                let _angle = ( direction % 360 );


                    _point.x = this.object.position.origin.x - Math.cos ( _angle * Math.PI / 180 ) * distance;

                    _point.y = this.object.position.origin.y - Math.sin ( _angle * Math.PI / 180 ) * distance;


                return _point;
            }

            /**
             * Resets the canvas transform; from rotational transforms
             * @private
             * @function
             */
            _resetCanvasTransform ( )
            {
                if ( canvaslab.rotation > 0 )
                {
                    this.object.rotate ( - ( canvaslab.rotation ) );

                    canvaslab.rotation = 0;
                }
            }

            /**
             * Caches current object
             * @private
             * @function
             */
            _setCache ( )
            {
                if ( this.queue.isSet  &&  ! this.queue.isEnd )
                {
                    if ( this.change.cache )

                        this._cacheObject ( );


                    this.animate ( );
                }
                else

                    this._resetCanvasTransform ( );


                console.info ( '. animation complete !' );
            }

            /**
             * Set Position data
             * @private
             * @function
             */
            _setPositionData ( )
            {
                for ( let _type in this.change )
                {
                    let _amount = this.change [ _type ];


                    switch ( _type )
                    {
                        case 'point':

                            this.object.position.origin    = this.object.point;

                            this.object.position.distance  = _amount;

                            this.object.position.direction = _amount;

                            break;

                        case 'startPoint':

                            this.object.position.origin    = this.object.start;

                            this.object.position.distance  = _amount;

                            this.object.position.direction = _amount;

                            break;

                        case 'endPoint':

                            this.object.position.origin    = this.object.end;

                            this.object.position.distance  = _amount;

                            this.object.position.direction = _amount;

                            break;

                        case 'move':

                            this.object.position.origin = this.object.point;


                            _amount.degree = ( this.change.rotatePoint ) ? _amount.degree + this.change.rotatePoint

                                                                         : _amount.degree;


                            let _point = this._getPointByDegreeNDistance ( _amount.degree, _amount.distance );


                            this.object.position.distance  = _point;

                            this.object.position.direction = _point;

                            break;

                        case 'radius':

                            // code . . .

                            break;

                        case 'aspect':

                            this.object.position.aspect = this.object.aspect;

                            break;

                        case 'width':

                            this.object.position.aspect.width = this.object.width;

                            break;

                        case 'height':

                            this.object.position.aspect.height = this.object.height;

                            break;

                        case 'rotate':

                            // code . . .

                            break;

                        case 'strokeColor':

                            // code . . .

                            break;

                        case 'strokeAlpha':

                            // code . . .

                            break;

                        case 'fillColor':

                            // code . . .

                            break;

                        case 'fillAlpha':

                            // code . . .

                            break;

                        case 'fillLinear':
                        case 'fillRadial':
                        case 'fillConic':

                            // code . . .

                            break;

                        case 'curve':
                        case 'controlPoints':

                            this.object.position.controlPoints = this.object.controlPoints.points;

                            break;

                        case 'p0':

                            this.object.position.controlPoints.p0 = this.object.controlPoints.p0;

                            break;

                        case 'p1':

                            this.object.position.controlPoints.p1 = this.object.controlPoints.p1;

                            break;

                        case 'p2':

                            this.object.position.controlPoints.p2 = this.object.controlPoints.p2;

                            break;

                        case 'p3':

                            this.object.position.controlPoints.p3 = this.object.controlPoints.p3;

                            break;

                        case 'fontSize':

                            this.object.position.fontSize = this.object.size;

                            break;

                        case 'cache':

                            this.cache = _amount;

                            break;
                    }
                }
            }

            /**
             * Calculates an animation transition
             * @private
             * @async
             * @function
             * @param           {clObject} object                           Canvas Lab object
             * @param           {number}   progress                         Progress of transition; 0 - 1
             */
            async _transition ( object, progress )
            {
                for ( let _type in this.change )
                {
                    let _amount = this.change [ _type ];


                    switch ( _type )
                    {
                        case 'point':
                        case 'move':

                            object.point =
                            {
                                x: object.position.origin.x + ( object.position.distance * progress ) * Math.cos ( object.position.direction ),

                                y: object.position.origin.y + ( object.position.distance * progress ) * Math.sin ( object.position.direction )
                            }

                            break;

                        case 'startPoint':

                            object.start =
                            {
                                x: ( object.position.origin.x ) + ( object.position.distance * progress ) * Math.cos ( object.position.direction ),

                                y: ( object.position.origin.y ) + ( object.position.distance * progress ) * Math.sin ( object.position.direction )
                            }

                            break;

                        case 'endPoint':

                            object.end =
                            {
                                x: object.position.origin.x + ( object.position.distance * progress ) * Math.cos ( object.position.direction ),

                                y: object.position.origin.y + ( object.position.distance * progress ) * Math.sin ( object.position.direction )
                            }

                            break;

                        case 'radius':

                            let _progress = ( progress < 0 ) ? 0 : progress;


                            object.radius = _amount * _progress;

                            break;

                        case 'angleStart':

                            object.angle.start = _amount * progress;

                            break;

                        case 'angleEnd':

                            object.angle.end = _amount * progress;

                            break

                        case 'aspect':

                            object.position.aspect.width  += ( _amount.width - object.position.aspect.width ) * progress;

                            object.aspect.width            = object.position.aspect.width;


                            object.position.aspect.height += ( _amount.height - object.position.aspect.height ) * progress;

                            object.aspect.height           = object.position.aspect.height;

                            break;

                        case 'width':

                            object.position.aspect.width  += ( _amount - object.position.aspect.width ) * progress;

                            object.aspect.width            = object.position.aspect.width;

                            break;

                        case 'height':

                            object.position.aspect.height += ( _amount - object.position.aspect.height ) * progress;

                            object.aspect.height           = object.position.aspect.height;

                            break;

                        case 'rotate':

                            let _rotate   = progress * ( _amount - object.position.rotation );


                            object.rotate ( _rotate );


                            object.position.rotation += _rotate;

                            canvaslab.rotation       += _rotate;

                            break;

                        case 'strokeColor':

                            object.stroke.color.cycle ( object.stroke.color, _amount, progress, 1 );

                            break;

                        case 'strokeAlpha':

                            object.stroke.color.alpha = _amount * progress;

                            break;

                        case 'fillColor':

                            object.fill.color.cycle ( object.fill.color, _amount, progress, 1 );

                            break;

                        case 'fillAlpha':

                            object.fill.color.alpha = _amount * progress;

                            break;

                        case 'fillLinear':
                        case 'fillRadial':
                        case 'fillConic':

                            for ( let _entry in _amount )
                            {
                                let _start = object.fill.gradient.stops [ _entry ];

                                let _end   = _amount [ _entry ];


                                object.fill.gradient.stops [ _entry ].color.cycle ( _start.color, _end.color, progress, 1 );
                            }

                            break;

                        case 'shadowColor':

                            object.shadow.color.cycle ( object.shadow.color, _amount, progress, 1 );

                            break;

                        case 'shadowAlpha':

                            object.shadow.color.alpha = _amount * progress;

                            break;

                        case 'shadowBlur':

                            object.shadow.blur = _amount * progress;

                            break;

                        case 'shadowOffset':

                            object.shadow.offset = new Point ( _amount.x * progress, _amount.y * progress );

                            break;

                        case 'curve':
                        case 'controlPoints':

                            for ( let _id in _amount )
                            {
                                let _oldControlPoint = object.position.controlPoints [ _id ];

                                let _newControlPoint = _amount [ _id ];


                                if ( _oldControlPoint != _newControlPoint )
                                {
                                    let _change = ( _newControlPoint - _oldControlPoint ) * progress;


                                    switch ( _id )
                                    {
                                        case '0':       object.controlPoints.p0 = _change;         break;

                                        case '1':       object.controlPoints.p1 = _change;         break;

                                        case '2':       object.controlPoints.p2 = _change;         break;

                                        case '3':       object.controlPoints.p3 = _change;         break;
                                    }
                                }
                            }

                            break;

                        case 'p0':

                            object.controlPoints.p0 = ( _amount - object.position.controlPoints.p0 ) * progress;

                            break;

                        case 'p1':

                            object.controlPoints.p1 = ( _amount - object.position.controlPoints.p1 ) * progress;

                            break;

                        case 'p2':

                            object.controlPoints.p2 = ( _amount - object.position.controlPoints.p2 ) * progress;

                            break;

                        case 'p3':

                            object.controlPoints.p3 = ( _amount - object.position.controlPoints.p3 ) * progress;

                            break;

                        case 'fontSize':

                            object.size = ( ( _amount - object.position.fontSize ) * progress ) + object.position.fontSize;

                            break;
                    }
                }
            }

        ////    + PUBLIC    //////////////////////

            /**
             * Cancels animation
             * @readOnly
             * @function
             * @see             {@link PROPERTY_BLOCKS.animation.cancel}
             */
            get cancel ( ) { }

    ////    ANIMATE    /////////////////////////////////////

        /**
         * Initiates animation
         * @public
         * @function
         */
        animate ( )
        {
            ////    PREPARATORY    /////////////////////////

                this._checkQueue ( );

                this._resetCanvasTransform ( );

                this._setPositionData ( );

            ////    PROPERTIES    //////////////////////////

                let _object  = this._object;

                let _timing  = this._timing;

                let _period  = this._period;

                let _options = this._options;

            ////    FUNCTIONS    ///////////////////////////

                let _transition   = ( object, progress ) => this._transition ( object, progress );

                let _clearCanvas  = ( object )           => this._clearCanvas ( object );

                let _drawCache    = ( )                  => this._drawCache ( );

                let _setCache     = ( )                  => this._setCache ( );

                let _end          = ( )                  => this._end ( );

            ////////////////////////////////////////////////
            ////    ANIMATE    /////////////////////////////

                function _animate ( )
                {
                    let _start = performance.now ( );


                    requestAnimationFrame (

                        function animate ( time )
                        {
                            _clearCanvas ( _object );


                            let _timeFraction =  ( time - _start ) / _period;   // timeFraction goes from 0 to 1

                            let _progress     = _timing ( _timeFraction );      // calculate the current animation state


                            if ( _options.normalize )

                                _progress = ( _progress < 0 ) ? 0 : _progress;


                            _transition ( _object, _progress );

                            _drawCache ( );

                            _object.draw ( );


                            ( _options.active ) ? ( _timeFraction < 1 )                 // Resolve

                                                      ? requestAnimationFrame ( animate )

                                                      : _setCache ( )

                                                  : _end ( );
                        }
                    );
                }

            ////////////////////////////////////////////////
            ////    INITIALIZE    //////////////////////////

                if ( this._object  &&  this._period )

                    _animate ( );

                else

                    console.warn ( '[ Animation ] :: The "object" and/or "period" properties are invalid !' );
        }
}
 
/**
 * @class           {Object}                  Animations        Animations handler; for drawing multiple objects in one instance
 * @property        {Array.<clObject>}        objects           CanvasLab objects
 * @property        {Array.<string|Function>} timings           Timing functions
 * @property        {number}                  periods           Period of time
 * @property        {Array.<Object>}          changes           Changes an object
 * @property        {Object}                  options           Options for this object
 */
class Animations
{
    _objects = undefined;
    _timings = undefined;
    _periods = undefined;
    _changes = undefined;

    #timings =
    {
        ////    EASE-IN    /////////////////////////////////

            'easeInSine':       ( timeFraction ) => 1 - Math.cos ( ( timeFraction * Math.PI ) / 2 ),
            'easeInCubic':      ( timeFraction ) => timeFraction * timeFraction * timeFraction,
            'easeInQuint':      ( timeFraction ) => timeFraction * timeFraction * timeFraction * timeFraction * timeFraction,
            'easeInCirc':       ( timeFraction ) => 1 - Math.sqrt ( 1 - Math.pow ( timeFraction, 2 ) ),
            'easeInElastic':    ( timeFraction ) => ( timeFraction === 0 ) ? 0 : ( timeFraction === 1 ) ? 1 : - Math.pow ( 2, 10 * timeFraction - 10 ) * Math.sin ( ( timeFraction * 10 - 10.75 ) * ( ( 2 * Math.PI ) / 3 ) ),
            'easeInQuad':       ( timeFraction ) => timeFraction * timeFraction,
            'easeInQuart':      ( timeFraction ) => timeFraction * timeFraction * timeFraction * timeFraction,
            'easeInExpo':       ( timeFraction ) => ( timeFraction === 0 ) ? 0 : Math.pow ( 2, 10 * timeFraction - 10 ),
            'easeInBack':       ( timeFraction ) => ( 1.70158 + 1 ) * timeFraction * timeFraction * timeFraction - 1.70158 * timeFraction * timeFraction,

        ////    EASE-OUT    ////////////////////////////////

            'easeOutSine':      ( timeFraction ) => Math.sin ( ( timeFraction * Math.PI ) / 2 ),
            'easeOutCubic':     ( timeFraction ) => 1 - Math.pow ( 1 - timeFraction, 3 ),
            'easeOutQuint':     ( timeFraction ) => 1 - Math.pow ( 1 - timeFraction, 5 ),
            'easeOutCirc':      ( timeFraction ) => Math.sqrt ( 1 - Math.pow ( timeFraction - 1, 2 ) ),
            'easeOutElastic':   ( timeFraction ) => ( timeFraction === 0 ) ? 0 : ( timeFraction === 1 ) ? 1 : Math.pow ( 2, -10 * timeFraction ) * Math.sin ( ( timeFraction * 10 - 0.75 ) * ( ( 2 * Math.PI ) / 3 ) ) + 1,
            'easeOutQuad':      ( timeFraction ) => 1 - ( 1 - timeFraction ) * ( 1 - timeFraction ),
            'easeOutQuart':     ( timeFraction ) => 1 - Math.pow ( 1 - timeFraction, 4 ),
            'easeOutExpo':      ( timeFraction ) => ( timeFraction === 1 ) ? 1 : 1 - Math.pow ( 2, -10 * timeFraction ),
            'easeOutBack':      ( timeFraction ) => 1 + ( 1.70158 + 1 ) * Math.pow ( timeFraction - 1, 3 ) + 1.70158 * Math.pow ( timeFraction - 1, 2 ),

        ////    EASE-IN-OUT    /////////////////////////////

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

    _options =
    {
        cache:     false,
        active:    false,
        normalize: false
    }

    _queue = new Queue;
    #cache = new Array;

    /**
     * Creates an animation instance
     * @property        {Array.<clObject>}        objects           CanvasLab objects
     * @property        {Array.<string|Function>} timings           Timing functions
     * @property        {number}                  period            Period of time
     * @property        {Array.<Object>}          changes           Changes an objects
     */
    constructor ( objects, timings, period, changes )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isNumber = VALIDATION.isNumber;

            this._end              = UTILITIES.animation.end;
            this._getInvertedAngle = UTILITIES.animation.getInvertedAngle;

            Object.defineProperty ( this, 'cache',  PROPERTY_BLOCKS.animation.cache  );
            Object.defineProperty ( this, 'cancel', PROPERTY_BLOCKS.animation.cancel );
            Object.defineProperty ( this, 'period', PROPERTY_BLOCKS.animation.period );
            Object.defineProperty ( this, 'queue',  PROPERTY_BLOCKS.animation.queue  );

        this.objects = objects;
        this.timings = timings;
        this.period  = period;
        this.changes = changes;

        this._options.active = true;
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ OBJECT ]    ////////////////////

            /**
             * Set objects to animate
             * @public
             * @function
             * @param           {clObject} value                            Canvas Lab objects
             */
            set objects ( value )
            {
                this._objects = value;
            }

            /**
             * Get objects
             * @readOnly
             * @function
             * @return          {clObject}                                  Canvas Lab objects
             */
            get objects ( )
            {
                return this._objects;
            }

        ////    [ TIMING ]    ////////////////////

            /**
             * Set timings
             * @public
             * @function
             * @param           {string|Function} value                     Timing function
             */
            set timings ( value )
            {
                if ( Array.isArray ( value ) )
                {
                    let _results = new Array;


                    for ( let _entry of value )

                        ( typeof _entry === 'string' )

                            ? _results.push ( this.#timings [ _entry ] )

                            : _results.push ( _entry );


                    this._timings = _results;
                }
                else

                    this._timings = ( value != undefined )

                                        ? ( typeof value === 'string' )

                                              ? this.#timings [ value ]

                                              : value

                                        : this._timings;
            }

            /**
             * Get timing
             * @readOnly
             * @function
             * @return          {Function}                                  Timing function
             */
            get timings ( )
            {
                return this._timings;
            }

        ////    [ PERIOD ]    ////////////////////

            /**
             * Set period of animation
             * @public
             * @function
             * @param           {number} value                              Period of animation-time
             * @see             {@link PROPERTY_BLOCKS.animation.period}
             */
            set period ( value ) { }

            /**
             * Get period of animation
             * @readOnly
             * @function
             * @return          {number}                                    Period of animation-time
             * @see             {@link PROPERTY_BLOCKS.animation.period}
             */
            get period ( ) { }

        ////    [ CHANGE ]    ////////////////////

            /**
             * Set changes
             * @public
             * @function
             * @param           {clChange} value                            Canvas Lab changes object
             */
            set changes ( value )
            {
                this._changes = value;
            }

            /**
             * Get changes
             * @readOnly
             * @function
             * @return          {clChange}                                  Canvas Lab changes object
             */
            get changes ( )
            {
                return this._changes;
            }

        ////    [ CACHE ]    /////////////////////

            /**
             * Set cache
             * @public
             * @function
             * @param           {boolean} value                             True || False
             * @see             {@link PROPERTY_BLOCKS.animation.cache}
             */
            set cache ( value ) { }

            /**
             * Get cache
             * @readOnly
             * @function
             * @return          {boolean}                                   True || False
             * @see             {@link PROPERTY_BLOCKS.animation.cache}
             */
            get cache ( ) { }

        ////    [ QUEUE ]    /////////////////////

            /**
             * Set queue
             * @public
             * @function
             * @param           {Queue} value                               Queue object
             * @see             {@link PROPERTY_BLOCKS.animation.queue}
             */
            set queue ( value ) { }

            /**
             * Get queue
             * @readOnly
             * @function
             * @return          {Queue}                                     Queue object
             * @see             {@link PROPERTY_BLOCKS.animation.queue}
             */
            get queue ( ) { }

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

        ////    - PRIVATE    /////////////////////

            /**
             * Cache object
             * @private
             * @function
             * @param           {clObject} object                           Canvas Lab object
             */
            _cacheObjects ( id )
            {
                let _object = this.objects [ id ];

                let _point  = new Point ( _object.x, _object.y );

                let _stroke = new Stroke ( _object.stroke.color );

                let _fill   = new Fill ( _object.fill.color );


                switch ( _object.constructor.name )
                {
                    case 'Circle':

                        _object = new Circle ( _point, _object.radius, undefined, _stroke, _fill );

                        break;

                    case 'Ellipse':

                        _object = new Ellipse ( _point, undefined, undefined, _stroke, _fill );

                        break;

                    case 'Rectangle':

                        _object = new Rectangle ( _point, undefined, undefined, _stroke, _fill );

                        break;

                    case 'RoundedRectangle':

                        _object = new RoundedRectangle ( _point, undefined, undefined, _stroke, _fill );

                        break;

                    case 'Text':

                        _object = new Text (
                                      _object.point,
                                      _object.text,
                                      _object.type,
                                      _object.size,
                                      _object.weight,
                                      _object.maxWidth,
                                      _object.offset,
                                      _object.stroke,
                                      _object.fill,
                                      _object.shadow,
                                      _object.canvas
                                  );

                        break;
                }


                this.#cache.push ( _object );
            }

            /**
             * Checks whether queue is set
             * @private
             * @function
             */
            _checkQueue ( )
            {
                if ( this.queue.isSet )
                {
                    let _transition = this.queue.next;          // Get initial ( and subsequent ) queue entries


                    this.objects = this._getObjects ( _transition );

                    this.timings = this._getTimings ( _transition );

                    this.period  = _transition.period;

                    this.changes = _transition.change;
                }
            }

            /**
             * Clears canvas
             * @private
             * @function
             * @param           {clObject} object                           Canvas Lab object
             */
            _clearCanvas ( )
            {
                let _object = this.objects [ 0 ];

                let _canvas = document.getElementById ( _object.canvas );


                if ( _canvas )  // @TODO: identify why this check has to take place periodically !

                    _object._canvas.clearRect ( 0, 0, _canvas.width, _canvas.height );
            }

            /**
             * Draw cached object(s)
             * @private
             * @function
             */
            _drawCache ( )
            {
                if ( this.#cache.length > 0 )

                    for ( let _entry of this.#cache )
                    {
                        _entry.stroke.color.alpha = 0.35;

                        _entry.draw ( );

                        _entry.stroke.color.alpha = 1;
                    }
            }

            /**
             * End animation
             * @private
             * @function
             * @see             {@link UTILITIES.animation.end}
             */
            _end ( ) { }

            /**
             * Returns an inverted angle; of 360 degrees
             * @private
             * @function
             * @param           {number} angle                              Angle to convert
             * @return          {number}                                    Inverted angle
             * @see             {@link UTILITIES.animation.getInvertedAngle}
             */
            _getInvertedAngle ( angle ) { }

            /**
             * Returns an array of objects based on the transitions object type
             * @private
             * @function
             * @param           {Transition} transition                     Animation transition instance
             * @return          {Array}                                     Array of objects
             */
            _getObjects ( transition )
            {
                let _collections = [ 'Circles', 'Ellipses', 'Rectangles', 'RoundedRectangles', 'Texts' ]

                let _array       = new Array;

                let _type        = transition.object.constructor.name;


                return ( _collections.includes ( _type ) ) ? _array.concat ( transition.object )

                                                           : transition.object;
            }

            /**
             * Returns an array of timings based on the transition timing type
             * @private
             * @function
             * @param           {Transition} transition                     Animation transition instance
             * @return          {Array}                                     Array of timings
             */
            _getTimings ( transition )
            {
                let _results = undefined;


                if ( Array.isArray ( transition.timing ) )

                    _results = transition.timing;

                else
                {
                    let _length  = this.objects.length;

                        _results = new Array;


                    for ( let _i = 0; _i < _length; _i++ )

                        _results.push ( transition.timing );
                }


                return _results;
            }

            /**
             * Returns a point based off of the direction & distance passed
             * @private
             * @function
             * @param           {number} direction                          Direction to point; in degrees
             * @param           {number} distance                           Distance to point
             * @return          {Point}                                     X & Y coordinates
             */
            _getPointByDegreeNDistance ( id, direction, distance )
            {
                let _point = new Point;

                let _angle = ( direction % 360 );


                    _point.x = this.objects [ id ].position.origin.x - Math.cos ( _angle * Math.PI / 180 ) * distance;

                    _point.y = this.objects [ id ].position.origin.y - Math.sin ( _angle * Math.PI / 180 ) * distance;


                return _point;
            }

            /**
             * Caches current objects
             * @private
             * @function
             */
            _setCache ( )
            {
                if ( this.queue.isSet  &&  ! this.queue.isEnd )
                {
                    for ( let _id in this.changes )

                        if ( this.changes [ _id ].cache )

                            this._cacheObjects ( _id );


                    this.animate ( );
                }
                else

                    console.info ( '. animations complete !' );
            }

            /**
             * Set Position data
             * @private
             * @function
             */
            _setPositionData ( )
            {
                for ( let _id in this.objects )
                {
                    let _object = this.objects [ _id ];

                    let _change = this.changes [ _id ];


                    for ( let _type in _change )
                    {
                        let _amount = _change [ _type ];


                        switch ( _type )
                        {
                            case 'point':

                                _object.position.origin    = _object.point;

                                _object.position.distance  = _amount;

                                _object.position.direction = _amount;

                                break;

                            case 'pointFrom':

                                _object.position.origin    = _amount;

                                _object.position.distance  = _amount;

                                _object.position.direction = _amount;

                                break;

                            case 'startPoint':

                                _object.position.start          = _object.start;

                                _object.position.startDistance  = _amount;

                                _object.position.startDirection = _amount;

                                break;

                            case 'endPoint':

                                _object.position.end          = _object.end;

                                _object.position.endDistance  = _amount;

                                _object.position.endDirection = _amount;

                                break;

                            case 'move':

                                _object.position.origin = _object.point;


                                // Whether to invert degree
                                let _point = ( _amount.invert ) ? this._getPointByDegreeNDistance ( _id, this._getInvertedAngle ( _amount.degree ), _amount.distance )

                                                                    : this._getPointByDegreeNDistance ( _id, _amount.degree, _amount.distance );


                                _object.position.distance  = _point;

                                _object.position.direction = _point;

                                break;

                            case 'radius':

                                // code . . .

                                break;

                            case 'rotate':

                                // code . . .

                                break;

                            case 'strokeColor':

                                // code . . .

                                break;

                            case 'strokeAlpha':

                                // code . . .

                                break;

                            case 'fillColor':

                                // code . . .

                                break;

                            case 'fillAlpha':

                                // code . . .

                                break;

                            case 'fillLinear':
                            case 'fillRadial':
                            case 'fillConic':

                                // code . . .

                                break;

                            case 'cache':

                                this.cache = _amount;

                                break;
                        }
                    }
                }
            }

            /**
             * Calculates an animation transition
             * @private
             * @async
             * @function
             * @param           {clObject} object                           Canvas Lab object
             * @param           {number}   progress                         Progress of transition; 0 - 1
             */
            async _transition ( id, progress )
            {
                let _object = this._objects [ id ];

                let _change = this._changes [ id ];


                for ( let _type in _change )
                {
                    let _amount = _change [ _type ];


                    switch ( _type )
                    {
                        case 'point':
                        case 'move':

                            _object.point =
                            {
                                x: _object.position.origin.x + ( _object.position.distance * progress ) * Math.cos ( _object.position.direction ),

                                y: _object.position.origin.y + ( _object.position.distance * progress ) * Math.sin ( _object.position.direction )
                            }

                            break;

                        case 'startPoint':

                            _object.start =
                            {
                                x: _object.position.start.x + ( _object.position.startDistance * progress ) * Math.cos ( _object.position.startDirection ),

                                y: _object.position.start.y + ( _object.position.startDistance * progress ) * Math.sin ( _object.position.startDirection )
                            }

                            break;

                        case 'startPointLink':

                            _object.start = _amount.point;

                            break;

                        case 'endPoint':

                            _object.end =
                            {
                                x: _object.position.end.x + ( _object.position.endDistance * progress ) * Math.cos ( _object.position.endDirection ),

                                y: _object.position.end.y + ( _object.position.endDistance * progress ) * Math.sin ( _object.position.endDirection )
                            }

                            break;

                        case 'endPointLink':

                            _object.end = _amount.point;

                            break;

                        case 'pointFrom':

                            _object.point =
                            {
                                x: _amount.x + ( _object.position.distance * progress ) * Math.cos ( _object.position.direction ),

                                y: _amount.y + ( _object.position.distance * progress ) * Math.sin ( _object.position.direction )
                            }

                            break;

                        case 'radius':

                            let _progress = ( progress < 0 ) ? 0 : progress;


                            _object.radius = _amount * _progress;

                            break;

                        case 'rotate':

                            _object.rotate ( _amount );

                            break;

                        case 'strokeColor':

                            _object.stroke.color.cycle ( _object.stroke.color, _amount, progress, 1 );

                            break;

                        case 'strokeAlpha':

                            _object.stroke.color.alpha = _amount * progress;

                            break;

                        case 'fillColor':

                            _object.fill.color.cycle ( _object.fill.color, _amount, progress, 1 );

                            break;

                        case 'fillAlpha':

                            _object.fill.color.alpha = _amount * progress;

                            break;

                        case 'fillLinear':
                        case 'fillRadial':
                        case 'fillConic':

                            for ( let _entry in _amount )
                            {
                                let _start = _object.fill.gradient.stops [ _entry ];

                                let _end   = _amount [ _entry ];


                                _object.fill.gradient.stops [ _entry ].color.cycle ( _start.color, _end.color, progress, 1 );
                            }

                            break;

                        case 'rotate':

                            // code . . .

                            break;
                    }
                }
            }

        ////    + PUBLIC    //////////////////////

            /**
             * Cancels animation
             * @readOnly
             * @function
             * @see             {@link PROPERTY_BLOCKS.animation.cancel}
             */
            get cancel ( ) { }

    ////    ANIMATE    /////////////////////////////////////

        /**
         * Initiates animation
         * @public
         * @function
         */
        animate ( )
        {
            ////    PREPARATORY    /////////////////////////

                this._checkQueue ( );

                this._setPositionData ( );

                // this._setBriefChanges ( );

            ////    PROPERTIES    //////////////////////////

                let _objects = this._objects;

                let _timings = this._timings;

                let _period  = this._period;

                let _changes = this._changes;

                let _options = this._options;

            ////    FUNCTIONS    ///////////////////////////

                let _transition   = ( id, progress ) => this._transition ( id, progress );

                let _clearCanvas  = ( )              => this._clearCanvas ( );

                let _drawCache    = ( )              => this._drawCache ( );

                let _setCache     = ( )              => this._setCache ( );

                let _end          = ( )              => this._end ( );

            ////////////////////////////////////////////////
            ////    ANIMATE    /////////////////////////////

                let _timeFraction = undefined;

                let _progress     = undefined;


                function _animate ( )
                {
                    let _start = performance.now ( );


                    requestAnimationFrame (

                        function animate ( time )
                        {
                            _clearCanvas ( );


                            for ( let _id in _objects )
                            {
                                let _object = _objects [ _id ];

                                let _timing = _timings [ _id ];

                                let _change = _changes [ _id ];


                                _timeFraction =  ( time - _start ) / _period;   // timeFraction goes from 0 to 1

                                _progress     = _timing ( _timeFraction );      // calculate the current animation state


                                if ( _options.normalize )

                                    _progress = ( _progress < 0 ) ? 0 : _progress;


                                _transition ( _id, _progress );

                                _drawCache ( );

                                _object.draw ( );
                            }


                            ( _options.active ) ? ( _timeFraction < 1 )         // Resolve

                                                      ? requestAnimationFrame ( animate )

                                                      : _setCache ( )

                                                  : _end ( );
                        }
                    );
                }

            ////////////////////////////////////////////////
            ////    INITIALIZE    //////////////////////////

                if ( this._objects  &&  this._period )

                    _animate ( );

                else

                    console.warn ( '[ Animations ] :: The "objects" and/or "period" properties are invalid !' );
        }
}
 
/**
 * @class           {Object}   Application                      Application handler
 */
class Application
{
    _animation  = undefined;

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
            Updated:   'Nov, 15 2024',
            Version:   '0.7.207',
            Copyright: 'Copyright (c) 2024 Justin Don Byrne'
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

    ////    [ ANIMATION ]    ///////////////////////////////

        /**
         * Get animation
         * @readOnly
         * @function
         * @return          {Animation}                                 Animation object
         */
        get animation ( )
        {
            return this._animation;
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
         * @param           {Transition|Queue} transition                   Contains timing, draw, & duration values & functions
         * @param           {number}           transition.object            CanvasLab Object
         * @param           {Function}         transition.timing            Timing function
         * @param           {number}           transition.period            Period of time
         * @param           {clChange}         transition.change            Changes to object
         */
        set animation ( transition = { object, timing, period, change } )
        {
            if ( Array.isArray ( transition ) )             // Transition(s)

                if ( Array.isArray ( transition [ 0 ].object ) )                // Animation(s) #3
                {
                    this._animation       = new Animations;

                    this._animation.queue = new Queue ( transition );

                    this._animation.animate ( );
                }
                else                                                            // Animation    #1
                {
                    this._animation       = new Animation;

                    this._animation.queue = new Queue ( transition );

                    this._animation.animate ( );
                }

            else                                            // Transition

                if ( Array.isArray ( transition.object ) )                      // Animation(s) #2
                {
                    this._animation = new Animations ( transition.object, transition.timing, transition.period, transition.change );

                    this._animation.animate ( );
                }
                else                                                            // Animation        # One-Shot
                {
                    this._animation = new Animation ( transition.object, transition.timing, transition.period, transition.change );

                    this._animation.animate ( );
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

////    TEMPLATES    ///////////////////////////////////////
 
class myTransitions
{
	_transitions = undefined;

	_template    = undefined;


	_numbers = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
	_symbols = [ '𓆗', '𓁳', '𓅓', '𓃠', '𓃶', '𓆣', '𓁈', '𓆃', '𓂀', '𓋹'  ]
	_clocks  =
	{
		one: [ '🕛', '🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚' ],
		two: [ '🕧', '🕜', '🕝', '🕞', '🕟', '🕠', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦' ]
	}

	_characters = new Queue ( this._symbols );

	_config =
	{
		optimal: false
	}

	/**
	 * Create myTransitions object
	 */
	constructor ( )
	{
		////    COMPOSITION     ////////////////////////////

            this._isTemplate = VALIDATION.isTemplate;

            Object.defineProperty ( this, 'template', PROPERTY_BLOCKS.individual.template );
	}

	////    PROPERTIES    //////////////////////////////////

		////    [ TRANSITIONS ]    ///////////////

		    /**
		     * Get transitions
		     * @public
		     * @function
		     * @return 			{number}									Transitions of object
		     */
		    get transitions ( )
		    {
		        return this._transitions;
		    }

		////    [ TEMPLATE ]    //////////////////

		    /**
		     * Set template
		     * @public
		     * @function
		     * @param 			{Template} value 							Template object
		     * @see             {@link PROPERTY_BLOCKS.individual.template}
		     */
		    set template ( value ) { }

		    /**
		     * Get template
		     * @public
		     * @function
		     * @return 			{Template}									Template object
		     * @see             {@link PROPERTY_BLOCKS.individual.template}
		     */
		    get template ( ) { }

	////    VALIDATION    //////////////////////////////////

        /**
         * Returns whether the passed value is a Template
         * @private
         * @memberof VALIDATION
         * @function
         * @param           {Object} value                              Template object
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isTemplate}
         */
        _isTemplate ( ) { }

	////    UTILITIES    ///////////////////////////////////

		////    [ PRIVATE ]    ///////////////////

       		/**
       		 * Returns a new object based on the passed clClass, mirroring properties from the passed object
       		 * @private
       		 * @function
       		 * @param 			{object}   clClass 							Canvas Lab object class
       		 * @param 			{clObject} object 							Canvas Lab object
       		 */
        	_getNewObjectFromType ( clClass, object )
        	{
        		let _result = undefined;

        		let _class  = new clClass;

        		let _type   = _class.constructor.name;


				switch ( _type )
        		{
	        		case 'Circle':

        				_result        = new Circle;

		        		_result.point  = this.template.point;

		        		_result.radius = this.template.radius;

		        		_result.stroke = this.template.strokes.next;

		        		_result.fill   = this.template.fills.next;

		        		_result.canvas = object.canvas;

	        			break;

	        		case 'Ellipse':

	        			_result        = new Ellipse;

		        		_result.point  = this.template.point;

		        		_result.radius = new Point ( this.template.radius * 0.75, this.template.radius );

		        		_result.stroke = this.template.strokes.next;

		        		_result.fill   = this.template.fills.next;

		        		_result.canvas = object.canvas;

	        			break;

	        		case 'Rectangle':

	        			_result        = new Rectangle;

		        		_result.point  = this.template.point;

		        		_result.aspect = new Aspect ( this.template.radius * 2, this.template.radius * 2 );

		        		_result.stroke = this.template.strokes.next;

		        		_result.fill   = this.template.fills.next;

		        		_result.canvas = object.canvas;

	        			break;

	        		case 'RoundedRectangle':

	        			_result        = new RoundedRectangle;

		        		_result.point  = this.template.point;

		        		_result.aspect = new Aspect ( this.template.radius * 2, this.template.radius * 2 );

		        		_result.stroke = this.template.strokes.next;

		        		_result.fill   = this.template.fills.next;

		        		_result.canvas = object.canvas;

	        			break;

	        		case 'Text':

	        			_result        = new Text;

		        		_result.point  = this.template.point;

		        		_result.text   = this._characters.next;

		        		_result.size   = this.template.radius;

		        		_result.stroke = this.template.strokes.next;

		        		_result.fill   = this.template.fills.next;

		        		_result.canvas = object.canvas;

	        			break;
        		}


        		return _result;
        	}

        	/**
        	 * Returns an array of new objects & changes created from the collection
        	 * @private
        	 * @function
			 * @param           {Array} 		  shape                     Array of collection indexes
			 * @param           {clCollection}    collection                Canvas Lab collection
			 * @param           {object} 		  clClass 					Canvas Lab object class
			 * @return 		    {Object} 		  		 					Objects & changes for the shape passed
        	 */
        	_getShapeObjectData ( shape, collection, clClass )
        	{
        		let _results =
        		{
        			objects: new Array,
        			changes: new Array
        		}


    			for ( let _i = 0; _i < shape.length; _i++ )
		        {
			        let _index  = shape [ _i ];

					let _object = collection [ _index ];


				    let _newObject = this._getNewObjectFromType ( clClass, _object );

				    let _change    = { point: _object.point, cache: true };


				    _results.objects.push ( _newObject );

				    _results.changes.push ( _change );
		        }


		        return _results;
        	}

        	/**
        	 * Returns an array of lines & changes linking the objects & collections together
        	 */
        	_getShapeLineData ( shape, objects, collection )
        	{
        		let _results =
        		{
        			objects: new Array,
        			changes: new Array
        		}


        		for ( let _i = 0; _i < objects.length; _i++ )

        			for ( let _j = 0; _j < objects.length; _j++ )
        			{
        				if ( this._config.optimal )
        				{
        					if ( _i === _j ) continue;

	        				if (  _i > _j  ) continue;
        				}


        				let _start  = collection [ shape [ _i ] ];

        				let _end    = objects [ _j ];


        				let _object = new Line;

        					_object.start  = _start.point;

        					_object.end    = _end.point;

        					_object.canvas = objects [ 0 ].canvas;

        					_object.stroke = this.template.strokes.next;


        				let _change = { endPointLink: _end };


        				_results.objects.push ( _object );

        				_results.changes.push ( _change );
        			}


        		return _results;
        	}

			/**
		     * Creates shape from array of numbers
		     * @private
		     * @function
		     * @param           {Array} 		  shape                     Array of collection indexes
		     * @param           {clCollection}    collection                Canvas Lab collection
		     * @param           {string|Function} timing                    Timing function
		     * @param           {number}          period                    Period of timer
		     * @param           {object} 		  clClass 					Canvas Lab object class
		     */
		    _shape ( shape, collection, timing, period, clClass )
		    {
		    	this.template.strokes.reset;


		    	this._transitions = new Array;


		        let _objects = new Array;

		        let _changes = new Array;


		        ////    SHAPE    ///////////////////////////

		        let _shapeData = this._getShapeObjectData ( shape, collection, clClass );


		        	_objects.push.apply ( _objects, _shapeData.objects );

		        	_changes.push.apply ( _changes, _shapeData.changes );

		        ////    LINES    ///////////////////////////

	        	let _lineData = this._getShapeLineData ( shape, _objects, collection );


	        		_objects.push.apply ( _objects, _lineData.objects );

	        		_changes.push.apply ( _changes, _lineData.changes );


	            let _result =
	            {
	                object: _objects,
	                timing: timing,
	                period: period,
	                change: _changes
	            }


	            this._transitions.push ( _result );


		        return this._transitions;
		    }

		////    [ PUBLIC ]    ////////////////////

			/**
		     * Returns transitions for skip animation
		     * @public
		     * @function
		     * @param           {clObject}        object                    Canvas Lab object
		     * @param           {ClCollection}    collection                Canvas Lab collection
		     * @param           {string|Function} timing                    Timing function
		     * @param           {number}          period                    Period of timer
		     */
		    skip ( object, collection, timing, period )
		    {
		        this._transitions = new Array;


		        for ( let _i = 0; _i < collection.length; _i++ )
		        {
		            let _result =
		            {
		                object: object,
		                timing: timing,
		                period: period,
		                change:
		                {
		                    point: new Point ( collection [ _i ].point.x, collection [ _i ].point.y ),
		                    cache: true,
		                    fillColor: collection [ _i ].fill.color
		                }
		            }


		            this._transitions.push ( _result );
		        }


		        return this._transitions;
		    }

		    /**
		     * Returns transitions for hop animation
		     * @public
		     * @function
		     * @param           {clObject}        object                    Canvas Lab object
		     * @param           {ClCollection}    collection                Canvas Lab collection
		     * @param           {string|Function} timing                    Timing function
		     * @param           {number}          period                    Period of timer
		     */
		    hop ( object, collection, timing, period )
		    {
		        this._transitions = new Array;


		        for ( let _i = 0; _i < collection.length; _i++ )
		        {
		            let _object = new Circle (
		            				  object.point,
									  collection [ _i ].radius,
									  collection [ _i ].angle,
									  new Stroke ( collection [ _i ].stroke.color ),
									  new Fill   ( collection [ _i ].fill.color   ),
									  undefined,
									  object.canvas
								  );

		            let _result =
		            {
		                object: _object,
		                timing: timing,
		                period: period,
		                change:
		                {
		                    point: new Point ( collection [ _i ].point.x, collection [ _i ].point.y ),
		                    cache: true
		                }
		            }


		            this._transitions.push ( _result );
		        }


		        return this._transitions;
		    }

			/**
		     * Returns transitions for bloom animation
		     * @public
		     * @function
		     * @param           {ClCollection}    collection                Canvas Lab collection
		     * @param           {string|Function} timing                    Timing function
		     * @param           {number}          period                    Period of timer
		     * @param 			{boolean} 		  out 						Whether to bloom out, or in
		     */
		    bloom ( collection, timing, period, out = true )
		    {
		        this._transitions = new Array;


		        let _result =
	            {
	                object: collection,
	                timing: timing,
	                period: period,
	                change: new Array
	            }


		        if ( out )

		        	for ( let _i = 0; _i < collection.length; _i++ )

		            		_result.change.push ( { pointFrom: collection [ 0 ].point } );

		        else

		        	for ( let _i = 0; _i < collection.length; _i++ )

		            		_result.change.push ( { point: collection [ 0 ].point } );


		        this._transitions.push ( _result );


		        return this._transitions;
		    }

		    /**
		     * Creates shape from array of numbers
		     * @public
		     * @function
		     * @param           {Array}    		  shape                     Array of collection indexes
		     * @param           {ClCollection}    collection                Canvas Lab collection
		     * @param           {string|Function} timing                    Timing function
		     * @param           {number}          period                    Period of timer
		     * @param           {object} 		  clClass 					Canvas Lab object class
		     */
		    shape ( shape, collection, timing, period, clClass )
		    {
		        let _shapeArray = new Array;


		        if ( ! shape ) 	// @NOTE: If no shape, generate shape based off of it's length
		        {
		        	for ( let _i = 0; _i < collection.length; _i++ )

	    				_shapeArray.push ( Array.from ( { length: _i }, ( _, i ) => i + 1 ) );


	    			_shapeArray = _shapeArray [ collection.length - 1 ];
	    		}
	    		else

	    			_shapeArray = shape;


				return this._shape ( _shapeArray, collection, timing, period, clClass );
		    }
}
 
/**
 * @class           {Object}           SacredCircles            SacredCircles template
 * @property        {Point}            point                    X & Y axis coordinates
 * @property        {number}           [radius=25]              Radius of circle
 * @property        {number}           iterations               Amount of iterations
 * @property        {Rgb|Stroke|Queue} strokes                  Stroke colors
 * @property        {Rgb|Fill|Queue}   fills                    Fill colors
 * @property        {Queue}            degrees                  Degrees for generation
 * @property        {Object}           master                   Master object
 */
class SacredCircles
{
    _point       = new Point;
    _radius      = 25;
    _iterations  = undefined;
    _degrees     = new Queue ( [ 90, 330, 270, 210, 150, 90, 30 ] );

    _strokes     = new Rgb (   0,   0,   0, 1 );
    _fills       = new Rgb ( 255, 255, 255, 0 );

    _transitions = undefined;

    _master      = undefined;

    #numbers     = undefined;
    #tangents    = undefined;
    #counter     = -1;              /* Counter to define the gaps between each circle: @see this.create ( ) */

    #config =
    {
        reverse: false
    }

    /**
     * Create a SacredCircles template
     * @property        {Point}            point                    X & Y axis coordinates
     * @property        {number}           [radius=25]              Radius of circle
     * @property        {number}           iterations               Amount of iterations
     * @property        {Rgb|Stroke|Queue} strokes                  Stroke colors
     * @property        {Rgb|Fill|Queue}   fills                    Fill colors
     * @property        {Queue}            degrees                  Degrees for generation
     */
    constructor ( point = { x: undefined, y: undefined }, radius, iterations, strokes, fills, degrees, transitions )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isCanvasLabObject = VALIDATION.isCanvasLabObject;
            this._isNumber          = VALIDATION.isNumber;
            this._isPoint           = VALIDATION.isPoint;
            this._isTransition      = VALIDATION.isTransition;

            Object.defineProperty ( this, 'master',      PROPERTY_BLOCKS.individual.master      );
            Object.defineProperty ( this, 'point',       PROPERTY_BLOCKS.individual.point       );
            Object.defineProperty ( this, 'radius',      PROPERTY_BLOCKS.individual.radius      );
            Object.defineProperty ( this, 'transitions', PROPERTY_BLOCKS.individual.transitions );

        this.point       = point;
        this.radius      = radius;
        this.iterations  = iterations;
        this.strokes     = strokes;
        this.fills       = fills;
        this.degrees     = degrees;
        this.transitions = transitions;

        this._tangents   = iterations;
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ POINT ]    /////////////////////

            /**
             * Set point
             * @public
             * @function
             * @param           {Point} value                               X & Y coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            set point ( value ) { }

            /**
             * Get point
             * @public
             * @function
             * @return          {Point}                                     X & Y coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            get point ( ) { }

        ////    [ RADIUS ]    ////////////////////

            /**
             * Set radius
             * @public
             * @function
             * @param           {number} value                              Radius of circle
             * @see             {@link PROPERTY_BLOCKS.individual.radius}
             */
            set radius ( value ) { }

            /**
             * Get radius
             * @readOnly
             * @function
             * @return          {number}                                    Radius of circle
             * @see             {@link PROPERTY_BLOCKS.individual.radius}
             */
            get radius ( ) { }

        ////    [ ITERATIONS ]    ////////////////

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

        ////    [ DEGREES ]    ///////////////////

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

        ////    [ STROKES ]    ///////////////////

            /**
             * Set strokes value
             * @public
             * @function
             * @param           {Array} value                               Array of strokes
             */
            set strokes ( value )
            {
                if ( value != undefined )
                {
                    switch ( value.constructor.name )
                    {
                        case 'Rgb':     this._strokes = new Queue ( new Array ( new Stroke ( value ) ) );   break;

                        case 'Stroke':  this._strokes = new Queue ( new Array ( value ) );                  break;

                        case 'Queue':   this._strokes = value;                                              break;

                        default:

                            Array.isArray ( value )
                            {
                                let _result = new Array;


                                for ( let _entry of value )

                                    switch ( _entry.constructor.name )
                                    {
                                        case 'Rgb':         _result.push ( new Stroke ( _entry ) );         break;

                                        case 'Stroke':      _result.push ( _entry );                        break;
                                    }


                                this._strokes = new Queue ( _result );
                            }
                    }
                }
                else

                    this._strokes = this._strokes;
            }

            /**
             * Get strokes value
             * @readOnly
             * @function
             * @return          {Queue}                                     Queue of strokes
             */
            get strokes ( )
            {
                return this._strokes;
            }

        ////    [ FILLS ]    /////////////////////

            /**
             * Set fills value
             * @public
             * @function
             * @param           {Array} value                               Array of fills
             */
            set fills ( value )
            {
                if ( value != undefined )
                {
                    switch ( value.constructor.name )
                    {
                        case 'Rgb':     this._fills = new Queue ( new Array ( new Fill ( value ) ) );   break;

                        case 'Fill':    this._fills = new Queue ( new Array ( _array ) );               break;

                        case 'Queue':   this._fills = value;                                            break;

                        default:

                            Array.isArray ( value )
                            {
                                let _result = new Array;


                                for ( let _entry of value )

                                    switch ( _entry.constructor.name )
                                    {
                                        case 'Rgb':     _result.push ( new Fill ( _entry ) );   break;

                                        case 'Fill':    _result.push ( _entry );                break;
                                    }


                                this._fills = new Queue ( _result );
                            }

                            Array.isArray ( value )
                            {
                                let _result = new Array;


                                for ( let _item of value )

                                    _result.push ( new Fill ( _item ) );


                                this._fills = new Queue ( _result );
                            }
                    }
                }
                else

                    this._fills = this._fills;
            }

            /**
             * Get fills value
             * @readOnly
             * @function
             * @return          {Queue}                                     Queue of fills
             */
            get fills ( )
            {
                return this._fills;
            }

        ////    [ TRANSITIONS ]    ///////////////

            /**
             * Set transitions
             * @public
             * @function
             * @param             {Transitions} value                       Transitions object
             * @see               {@link PROPERTY_BLOCKS.individual.transitions}
             */
            set transitions ( value ) { }

            /**
             * Get transitions
             * @public
             * @function
             * @return             {Transitions}                            Transitions object
             * @see               {@link PROPERTY_BLOCKS.individual.transitions}
             */
            get transitions ( ) { }

        ////    [ MASTER ]    ////////////////////

            /**
             * Set master object
             * @public
             * @function
             * @param           {clObject} value                            Canvas Lab object
             * @see             {@link PROPERTY_BLOCKS.individual.master}
             */
            set master ( value ) { }

            /**
             * Get master object
             * @public
             * @function
             * @return          {clObject}                                  Master Canvas Lab object
             * @see             {@link PROPERTY_BLOCKS.individual.master}
             */
            get master ( ) { }

        ////    [ NUMBERS ]    ///////////////////

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

            /**
             * Get numbers value
             * @private
             * @function
             * @param           {Queue}                                     Array of numbers
             */
            get _numbers ( )
            {
                return this.#numbers;
            }

        ////    [ TANGENTS ]    //////////////////

            /**
             * Set tangents value
             * @private
             * @function
             * @param           {number} value                              Number of iterations
             */
            set _tangents ( value )
            {
                this.#tangents = ( Number.isInteger ( value ) ) ? this.#getTangents ( value ) : this.#tangents;
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
        _isPoint ( ) { }

        /**
         * Returns whether the passed value is a Transition
         * @private
         * @function
         * @param           {Transition} value                          Transition object
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isTransition}
         */
        isTransition ( ) { }

    ////    UTILITIES    ///////////////////////////////////

        ////    # PROTECTED    ///////////////////

            /**
             * Insert initial object
             * @protected
             * @function
             * @param           {Point}  point                              X & Y Coordinate(s)
             * @param           {number} degree                             Degree of movement
             * @param           {Stroke} stroke                             Stroke properties
             * @param           {Fill}   fill                               Fill properties
             * @param           {number} iterator                           Current iterator
             */
            #insertInitialObject ( point, iterator, degree, stroke, fill )
            {
                let _object = this._getObjectPerCollectionType ( point, stroke, fill );


                this._moveObject ( _object, degree, this.radius * iterator );


                this._setObjectPerCollectionType ( _object );
            }

            /**
             * Insert Ensuing objects
             * @protected
             * @function
             * @param           {number} degree                             Degree of movement
             * @param           {Stroke} stroke                             Stroke properties
             * @param           {Fill}   fill                               Fill properties
             */
            #insertEnsuingObjects ( degree, stroke, fill )
            {
                let _object = this._getObjectPerCollectionType ( this.master.circles.endPoint, stroke, fill );


                this._moveObject ( _object, degree, this.radius );


                this._setObjectPerCollectionType ( _object );
            }

            /**
             * Returns an array of all tangents for each iteration
             * @protected
             * @function
             * @return          {Array}                                     Tangents for each iteration
             */
            #getTangents ( )
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

        ////    - PRIVATE    /////////////////////

            /**
             * Returns a clObject based on the current collection type
             * @private
             * @function
             * @param           {Point}  point                              X & Y Coordinates
             * @param           {Stroke} stroke                             Stroke properties
             * @param           {Fill}   fill                               Fill properties
             */
            _getObjectPerCollectionType ( point, stroke, fill )
            {
                let _collectionType = this.master.constructor.name;

                let _result         = undefined;

                let _text           = this.#numbers.next;


                switch ( _collectionType )
                {
                    case 'Circles':             _result = canvaslab.get.circle ( point, stroke, fill );                   break;

                    case 'Ellipses':            _result = canvaslab.get.ellipse ( point, stroke, fill );                  break;

                    case 'Rectangles':          _result = canvaslab.get.rectangle ( point, stroke, fill );                break;

                    case 'RoundedRectangles':   _result = canvaslab.get.roundedRectangle ( point, stroke, fill );         break;

                    case 'Texts':               _result = canvaslab.get.text ( point, _text, stroke, fill );  break;

                    case 'Group':

                                            let _objectA = canvaslab.get.circle ( point, stroke, fill );

                                            let _objectB = canvaslab.get.ellipse ( point, stroke, fill );

                                            let _objectC = canvaslab.get.rectangle ( point, stroke, fill );

                                            let _objectD = canvaslab.get.roundedRectangle ( point, stroke, fill );

                                            let _objectE = canvaslab.get.text ( point, _text, stroke, fill );


                                                _result  = new Array ( _objectA, _objectB, _objectC, _objectD, _objectE );
                }


                return _result;
            }

            /**
             * Moves the passed object in a specific degree & distance
             * @private
             * @function
             * @param           {clObject} object                           Canvas Lab object
             * @param           {number}   degree                           Degree to move
             * @param           {number}   distance                         Distance to move
             */
            _moveObject ( object, degree, distance )
            {
                if ( Array.isArray ( object ) )

                    for ( let _entry of object )

                        _entry.move ( degree, distance );

                else

                    object.move ( degree, distance );
            }

            /**
             * Pushes the passed clObject into the current collection type
             * @private
             * @function
             * @param           {clObject} object                           Canvas Lab object
             */
            _setObjectPerCollectionType ( object )
            {
                let _collectionType = this.master.constructor.name;


                switch ( _collectionType )
                {
                    case 'Group':

                        for ( let _entry of object )
                        {
                            let _type = `${_entry.constructor.name.toLowerCase ( )}s`;

                                _type = ( _type === 'roundedrectangles' ) ? 'roundedRectangles' : _type;


                            this.master [ _type ].push ( _entry );
                        }

                    default:

                        this.master.push ( object );

                        break;
                }
            }

        ////    + PUBLIC    //////////////////////

            /**
             * Get number of total objects
             * @public
             * @function
             * @return          {number}                                    Number of total objects
             */
            get totalObjects ( )
            {
                if ( this.#tangents === undefined )

                    this.#tangents = this.#getTangents ( );


                return this.#tangents [ this.#tangents.length - 1 ];
            }

    ////    INITIALIZER    /////////////////////////////////

        /**
         * Sets this template
         * @public
         * @function
         */
        init ( )
        {
            this._numbers = Array.from ( { length: this.totalObjects }, ( element, index ) => index.toString ( ) );


            for ( let _i = 0; _i < this.iterations; _i++ )
            {
                this.degrees.reset;

                ////    FOUNDATION STONE    ////////////////////////////////////

                let [ _degree, _stroke, _fill ] = [ this.degrees.next, this.strokes.next, this.fills.next ];


                for ( let _stone = 0; _stone < 1; _stone++ )

                     this.#insertInitialObject ( this.point, _i, _degree, _stroke, _fill );

                ////    FILLER STONE(S)    /////////////////////////////////////

                    [ _degree, _stroke, _fill ] = [ this.degrees.next, this.strokes.next, this.fills.next ];        // Number: 01, Degree: 150


                for ( let _stone = 0; _stone <= ( _i - 1 ); _stone++ )

                     this.#insertEnsuingObjects ( _degree, _stroke, _fill );


                    [ _degree, _stroke, _fill ] = [ this.degrees.next, this.strokes.next, this.fills.next ];        // Number: 02,  Degree: 90


                for ( let _stone = 0; _stone <= ( _i - 1 ); _stone++ )

                    this.#insertEnsuingObjects ( _degree, _stroke, _fill );


                    [ _degree, _stroke, _fill ] = [ this.degrees.next, this.strokes.next, this.fills.next ];        // Number: 03,  Degree: 30


                for ( let _stone = 0; _stone <= ( _i - 1 ); _stone++ )

                  this.#insertEnsuingObjects ( _degree, _stroke, _fill );


                    [ _degree, _stroke, _fill ] = [ this.degrees.next, this.strokes.next, this.fills.next ];        // Number: 04, Degree: 330


                for ( let _stone = 0; _stone <= ( _i - 1 ); _stone++ )

                  this.#insertEnsuingObjects ( _degree, _stroke, _fill );


                    [ _degree, _stroke, _fill ] = [ this.degrees.next, this.strokes.next, this.fills.next ];        // Number: 05, Degree: 270


                for ( let _stone = 0; _stone <= ( _i - 1 ); _stone++ )

                  this.#insertEnsuingObjects ( _degree, _stroke, _fill );

                ////    KEYSTONE    ////////////////////////////////////////////

                    [ _degree, _stroke, _fill ] = [ this.degrees.next, this.strokes.next, this.fills.next ];        // Number: 06, Degree: 210


                for ( let _stone = 0; _stone <= ( _i - 2 ); _stone++ )

                  this.#insertEnsuingObjects ( _degree, _stroke, _fill );
            }


            if ( this.#config.reverse )
            {
                this.master.circles.reverse ( );

                this.master.ellipses.reverse ( );

                this.master.rectangles.reverse ( );

                this.master.roundedRectangles.reverse ( );
            }
        }
}
