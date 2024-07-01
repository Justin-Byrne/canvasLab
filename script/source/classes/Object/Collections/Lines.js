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

    _storage  = { type: Line }

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

            this._clearCanvas = UTILITIES.misc.clearCanvas;
            this._drawAxis    = UTILITIES.draw.axis;
            this._drawBorder  = UTILITIES.draw.border;
            this.draw         = UTILITIES.draw.collection.oneDimensional;

            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.combined.canvas );
            Object.defineProperty ( this, 'point',  PROPERTY_BLOCKS.discrete.point  );
            Object.defineProperty ( this, 'x',      PROPERTY_BLOCKS.discrete.pointX );
            Object.defineProperty ( this, 'y',      PROPERTY_BLOCKS.discrete.pointY );

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
         * Returns whether the passed value is a CanvasLab object; Line, Circle, Rectangle, Text
         * @public
         * @memberof VALIDATION
         * @function
         * @param           {Object} value                              CanvasLab object; Line, Circle, Rectangle, Text
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isCanvasLabObject}
         */
        isCanvasLabObject ( value ) { }

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isInDom}
         */
        _isInDom ( ) { }

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
         * Returns the last Point within this Array
         * @public
         * @function
         * @return          {Point}                                     Last Array element's X & Y Coordinates
         */
        get endPoint ( )
        {
            return this [ this.length - 1 ].point;
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
