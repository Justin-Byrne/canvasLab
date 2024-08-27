/**
 * Shared utility functions
 * @namespace       UTILITIES
 */
const UTILITIES =
{
    /**
     * Utility collection functions
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
     * Utility individual functions
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

                    this._canvas.rotate    ( ( value * Math.PI / 180 ) / 45 );

                    // this._canvas.rotate    ( ( ( value % 360 ) * Math.PI / 180 ) / 22.5 );

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

    },
}
