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

            this._isInDom  = VALIDATION.isInDom;
            this._isPoint  = VALIDATION.isPoint;
            this._isAspect = VALIDATION.isAspect;

            this._drawBorder = UTILITIES.draw.border;
            this._drawAxis   = UTILITIES.draw.axis;
            this.draw        = UTILITIES.draw.collection.aTypical;

            Object.defineProperty ( this, 'point',  PROPERTY_BLOCKS.discrete.point  );
            Object.defineProperty ( this, 'x',      PROPERTY_BLOCKS.discrete.pointX );
            Object.defineProperty ( this, 'y',      PROPERTY_BLOCKS.discrete.pointY );
            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.combined.canvas );

        this.stroke.master = this;

        ////    POPULATE COLLECTION     ////////////////////

            if ( arguments.length > 0 ) this.push.apply ( this, arguments );
    }

    ////    [ POINT ]   ////////////////////////////////////

        /**
         * Set point
         * @param           {Point} value                               X & Y coordinates
         * @see             {@link discrete.point}
         */
        set point ( value ) { }

        /**
         * Get point
         * @return          {Point}                                     X & Y coordinates
         * @see             {@link discrete.point}
         */
        get point ( ) { }


        /**
         * Set x-axis value
         * @param           {number} value                              X coordinate value
         * @see             {@link discrete.pointX}
         */
        set x ( value ) { }

        /**
         * Get x-axis value
         * @return          {number}                                    X coordinate value
         * @see             {@link discrete.pointX}
         */
        get x ( ) { }

        /**
         * Set the y-axis value
         * @param           {number} value                              Y coordinate value
         * @see             {@link discrete.pointY}
         */
        set y ( value ) { }

        /**
         * Get y-axis value
         * @return          {number}                                    Y coordinate value
         * @see             {@link discrete.pointY}
         */
        get y ( ) { }

    ////    [ STROKE ]  ////////////////////////////////////

        /**
         * Get stroke properties
         * @return          {Stroke}                                    Stroke properties
         */
        get stroke ( )
        {
            return this._stroke;
        }

    ////    [ SHADOW ]  ////////////////////////////////////

        /**
         * Get shadow properties
         * @return          {Shadow}                                    Shadow properties
         */
        get shadow ( )
        {
            return this._shadow;
        }

    ////    [ OPTIONS ] ////////////////////////////////////

        get options ( )
        {
            return this.#_options;
        }

    ////    [ LINECAP ]  ///////////////////////////////////

        /**
         * Set line cap
         * @param           {string} value                              Line cap
         */
        set lineCap ( value )
        {
            this._lineCap = ( value === 'butt' || value === 'round' || value === 'square' ) ? value : this._lineCap;
        }

        /**
         * Get line cap
         * @return          {string}                                    Line cap
         */
        get lineCap ( )
        {
            return this._lineCap;
        }

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

    ////    [ ASPECT ]  ////////////////////////////////////

        /**
         * Get aspect properties
         * @return          {Aspect}                                    Aspect properties
         */
        get aspect ( )
        {
            this._setAspect ( );


            return this.#_aspect;
        }

        /**
         * Get aspect with
         * @return          {number}                                    Width value
         */
        get width  ( )
        {
            return this.#_aspect.width;
        }

        /**
         * Get aspect height
         * @return          {number}                                    Height value
         */
        get height ( )
        {
            return this.#_aspect.height;
        }

    ////    [ ANCHOR ]  ////////////////////////////////////

        /**
         * Set anchor type
         * @param           {string} value                              Anchor type
         */
        set anchor ( value )
        {
            this.#_anchor.type = ( this._isAnchor ( value ) ) ? value : this.#_anchor.type;


            this._setAnchorPoint ( );
        }

        /**
         * Get anchor
         * @return          {Anchor}                                    Anchor properties
         */
        get anchor ( )
        {
            return this.#_anchor;
        }

    ////    & EXTEND &  ////////////////////////////////////

        /**
         * Get area of this object
         * @return          {number}                                    Area of rectangle
         */
        get area ( )
        {
            return ( this.width * this.height );
        }

        /**
         * Get perimeter of this object
         * @return          {number}                                    Perimeter of rectangle
         */
        get perimeter ( )
        {
            return ( this.area * 2 );
        }

        /**
         * Get center of this object
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

                // console.log ( this.#_origin );
            }


            [ _x, _y ] = [ _x + ( this.width  / 2 ), _y + ( this.height / 2 ) ];


            return new Point ( _x, _y );
        }

    ////    ( PRIVATE ) ////////////////////////////////////

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

        _isInDom  ( ) { }

        _isPoint  ( ) { }

        _isAspect ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        _drawAxis   ( ) { }

        _drawBorder ( ) { }

        /**
         * Draws associated options
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
         */
        _setAnchorPoint ( )
        {
            this._setAspect ( );


            this.#_anchor = this.center;

            // console.log ( this.#_anchor );

            // [ this.#_anchor.x, this.#_anchor.y ] = [ this.x, this.y ];


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

        push ( )
        {
            for ( let _i = 0; _i < arguments.length; _i++ )

                ( arguments [ _i ] instanceof Line )

                    ? this.#_appendProperties ( arguments [ _i ] )

                    : console.error ( `[ERROR] Argument ${ ( _i + 1 ) }, of type "${ arguments [ _i ].constructor.name }", is not a valid type !` );


            return Array.prototype.push.apply ( this, arguments );
        }

    ////    DRAW    ////////////////////////////////////////

        draw ( ) { }
}
