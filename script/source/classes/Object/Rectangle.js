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
     * Create a rectangle
     * @property        {Point}  point                              X & Y axis coordinates
     * @property        {Aspect} aspect                             Aspect properties
     * @property        {Stroke} stroke                             Stroke properties
     * @property        {Fill}   fill                               Fill properties
     * @property        {Shadow} shadow                             Shadow properties
     * @property        {string} canvas                             Canvas Id
     */
    constructor (
                    point  = { x:     undefined, y:        undefined },
                    aspect = { width: undefined, height:   undefined },
                    stroke = { type:  undefined, segments: undefined, color: undefined, alpha: undefined, width: undefined },
                    fill   = { color: undefined, alpha:    undefined },
                    shadow = { color: undefined, alpha:    undefined, blur:  undefined, offset: { x: undefined, y: undefined } },
                    canvas
                )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isDegree = VALIDATION.isDegree;
            this._isInDom  = VALIDATION.isInDom;
            this._isPoint  = VALIDATION.isPoint;
            this._isAspect = VALIDATION.isAspect;

            this._rotatePoint = UTILITIES.rotatePoint;
            this._clearCanvas = UTILITIES.clearCanvas;
            this._setShadow   = UTILITIES.set.shadow;
            this._drawBorder  = UTILITIES.draw.border;
            this._drawAxis    = UTILITIES.draw.axis;

            Object.defineProperty ( this, 'point',  PROPERTY_BLOCKS.discrete.point  );
            Object.defineProperty ( this, 'x',      PROPERTY_BLOCKS.discrete.pointX );
            Object.defineProperty ( this, 'y',      PROPERTY_BLOCKS.discrete.pointY );
            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.discrete.canvas );

            delete this.#_options._points;
            delete this.#_options._controlPoints;
            delete this.#_options._master;

        this.point  = point;

        this.width  = ( aspect.width  != undefined ) ? aspect.width  : 50;
        this.height = ( aspect.height != undefined ) ? aspect.height : 50;

        ////    OBJECT INITIALIZER(S)   ////////////////////

            this._stroke = new Stroke ( stroke.type,  stroke.segments, stroke.color, stroke.alpha, stroke.width );

            this._fill   = new Fill   ( fill.color,   fill.alpha );

            this._shadow = new Shadow ( shadow.color, shadow.alpha,    shadow.blur, { x: shadow.offset.x, y: shadow.offset.y } );

        this.canvas = canvas;

        ////    ANCILLARY   ////////////////////////////////

            this.#_options.shadow = ( shadow.offset.x != undefined && shadow.offset.y != undefined );
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

    ////    [ ASPECT ]  ////////////////////////////////////

        /**
         * Set aspect properties
         * @param           {Aspect} value                              Aspect properties
         */
        set aspect ( value )
        {
            this._aspect = ( this._isAspect ( value ) ) ? value : this._aspect;
        }

        /**
         * Get aspect properties
         * @return          {Aspect}                                    Aspect properties
         */
        get aspect ( )
        {
            return this._aspect;
        }


        /**
         * Set aspect width
         * @param           {number} value                              Width value
         */
        set width  ( value )
        {
            this._aspect.width = ( typeof value === 'number' && value > 0 ) ? value : this._aspect._width;
        }

        /**
         * Get aspect with
         * @return          {number}                                    Width value
         */
        get width  ( )
        {
            return this._aspect.width;
        }


        /**
         * Set aspect height
         * @param           {number} value                              Height value
         */
        set height ( value )
        {
            this._aspect.height = ( typeof value === 'number' && value > 0 ) ? value : this._aspect._height;
        }

        /**
         * Get aspect height
         * @return          {number}                                    Height value
         */
        get height ( )
        {
            return this._aspect.height;
        }

    ////    [ STROKE ]  ////////////////////////////////////

        /**
         * Get stroke properties
         * @return          {Stroke}                                    Stroke properties
         */
        get stroke ( )
        {
            return this._stroke;
        }

    ////    [ FILL ]    ////////////////////////////////////

        /**
         * Get fill properties
         * @return          {Fill}                                      Fill properties
         */
        get fill ( )
        {
            return this._fill;
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

    ////    [ CANVAS ]  ////////////////////////////////////

        /**
         * Set canvas value
         * @param           {string} value                              Canvas id
         * @see             {@link discrete.canvas}
         */
        set canvas ( value ) { }

        /**
         * Get canvas value
         * @return          {string}                                    Canvas id
         * @see             {@link discrete.canvas}
         */
        get canvas ( ) { }

    ////    [ ANCHOR ]  ////////////////////////////////////

        /**
         * Get anchor
         * @return          {Anchor}                                    Anchor properties
         */
        get anchor ( )
        {
            return this.#_anchor;
        }

    ////    [ OPTIONS ] ////////////////////////////////////

        /**
         * Get options properties
         * @return          {Options}                                   Options properties
         */
        get options ( )
        {
            return this.#_options;
        }

    ////    VALIDATION  ////////////////////////////////////

        _isDegree ( ) { }

        _isInDom  ( ) { }

        _isPoint  ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        _rotatePoint ( ) { }

        _clearCanvas ( ) { }

        _setShadow   ( ) { }

        _drawBorder  ( ) { }

        _drawAxis    ( ) { }

        /**
         * Draws associated options
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
         * Move this object
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
         * Check whether the passed object is already present
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
            let _x = this.x - ( this.x - this.anchor.x ) + ( this.width  / 2 );

            let _y = this.y - ( this.y - this.anchor.y ) + ( this.height / 2 );


            return new Point ( _x, _y );
        }

    ////    DRAW    ////////////////////////////////////////

        /**
         * Draw this object
         * @param           {string} canvas                             Canvas Id
         */
        draw ( canvas )
        {
            if ( canvas != undefined ) this.canvas = canvas;


            if ( this._canvas instanceof CanvasRenderingContext2D )
            {
                this._setAnchorPoint ( );


                if ( this.#_options.shadow ) this._setShadow ( );                                   // Set: shadow


                this._canvas.strokeStyle = `rgba(${this.stroke.color}, ${this.stroke.alpha})`;

                this._canvas.fillStyle   = `rgba(${this.fill.color}, ${this.fill.alpha})`;

                this._canvas.lineWidth   = this.stroke.width;

                ////////////////////////////////////////////////////////////////

                this._canvas.setLineDash ( ( this.stroke.type ) ? this.stroke.segments : [ ] );

                this._canvas.beginPath   ( );

                this._canvas.rect        ( this.anchor.x, this.anchor.y, this.width, this.height );

                this._canvas.stroke      ( );

                this._canvas.fill        ( );


                if ( this.#_options.shadow ) this._canvas.shadowColor = `rgba(0, 0, 0, 0)`;         // Reset: shadow


                this._drawOptions ( );
            }
            else

                console.warn ( `'canvas' property is not set for ${this.constructor.name} !` );
        }
}
