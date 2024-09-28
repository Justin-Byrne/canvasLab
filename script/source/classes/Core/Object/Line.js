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

            this._drawAxis    = UTILITIES.individual.draw.axis;
            this._drawBorder  = UTILITIES.individual.draw.border;
            this._rotatePoint = UTILITIES.individual.misc.rotatePoint;
            this._setShadow   = UTILITIES.individual.set.shadow;

            this.rotate       = UTILITIES.individual.misc.rotate;

            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.individual.canvas );

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

            this.#position.master = this;
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

    ////    [ POSITION ]    ////////////////////////////////

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

    ////    [ POINT ]   ////////////////////////////////////            [ VIRTUAL ]

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


                if ( this.#options.shadow ) this._setShadow ( );                                   // Set: shadow


                this._canvas.strokeStyle = this.stroke.color.toCss ( );

                this._canvas.lineCap     = this.lineCap;

                this._canvas.lineWidth   = this.stroke.width;

                ////////////////////////////////////////////////////////////////

                this._canvas.setLineDash ( ( this.stroke.type === 'solid' ) ? new Array : this.stroke.segments );

                this._canvas.beginPath   ( );

                this._canvas.moveTo      ( this.start.x + _straddle, this.start.y + _straddle );


                this._setPath ( );


                this._canvas.stroke ( );


                if ( this.#options.shadow ) this._canvas.shadowColor = new Rgb ( 0, 0, 0, 0 ).toCss ( );   // Reset: shadow


                this._drawOptions ( );
            }
            else

                console.warn ( `'canvas' property is not set for ${this.constructor.name} !` );
        }
}
