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
     * Create a circle
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

            this._isDegree = VALIDATION.isDegree;
            this._isInDom  = VALIDATION.isInDom;
            this._isPoint  = VALIDATION.isPoint;
            this._isBase   = VALIDATION.isBase;
            this._isAspect = VALIDATION.isAspect;
            this._isAnchor = VALIDATION.isAnchor;

            this._rotatePoint = UTILITIES.rotatePoint;
            this._clearCanvas = UTILITIES.clearCanvas;
            this._setShadow   = UTILITIES.set.shadow;
            this._drawBorder  = UTILITIES.draw.border;
            this._drawAxis    = UTILITIES.draw.axis;
            this._setFillType = UTILITIES.set.fillType;

            this.strokeColorCycle   = UTILITIES.strokeColorCycle;
            this.fillColorCycle     = UTILITIES.fillColorCycle;
            this.gradientColorCycle = UTILITIES.gradientColorCycle;

            Object.defineProperty ( this, 'point',  PROPERTY_BLOCKS.discrete.point  );
            Object.defineProperty ( this, 'x',      PROPERTY_BLOCKS.discrete.pointX );
            Object.defineProperty ( this, 'y',      PROPERTY_BLOCKS.discrete.pointY );
            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.discrete.canvas );

            delete this.#_options._points;
            delete this.#_options._controlPoints;
            delete this.#_options._master;

        this.point  = point;
        this.radius = radius

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

    ////    [ RADIUS ]  ////////////////////////////////////

        /**
         * Set radius value
         * @param           {number} value                              Radius of circle
         */
        set radius ( value )
        {
            this._radius = ( typeof value === 'number' && value > 0 ) ? value : this._radius;
        }

        /**
         * Get radius value
         * @return          {number}                                    Radius of circle
         */
        get radius ( )
        {
            return this._radius;
        }

    ////    [ ANGLE ]   ////////////////////////////////////

        /**
         * Get angle properties
         * @return          {Angle}                                     Angle properties
         */
        get angle ( )
        {
            return this._angle;
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

    ////    & EXTEND &  ////////////////////////////////////

        /**
         * Get area of this object
         * @return          {number}                                    Area of circle
         */
        get area ( )
        {
            return (  Math.PI * Math.pow ( this.radius, 2 )  );
        }

        /**
         * Get diameter of circle
         * @return          {number}                                    Diameter of circle
         */
        get diameter ( )
        {
            return (  this.radius * 2  );
        }

        /**
         * Get circumference of circle
         * @return          {number}                                    Circumference of circle
         */
        get circumference ( )
        {
            return (  Math.PI * this.diameter ( )  );
        }

        /**
         * Get center of this object
         * @return          {Point}                                     Center point coordinates
         */
        get center ( )
        {
            this._setAnchorPoint ( );


            let _x = this.x - ( this.x - this.anchor.x );

            let _y = this.y - ( this.y - this.anchor.y );


            return new Point ( _x, _y );
        }

    ////    VALIDATION  ////////////////////////////////////

        _isDegree ( ) { }

        _isInDom  ( ) { }

        _isPoint  ( ) { }

        _isAspect ( ) { }

        _isAnchor ( ) { }

        /**
         * Check whether the passed object is already present
         * @param           {Circle} circle                             Object to validate
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

        _rotatePoint ( ) { }

        _clearCanvas ( ) { }

        _setShadow   ( ) { }

        _drawBorder  ( ) { }

        _drawAxis    ( ) { }

        _setFillType ( ) { }

        /**
         * Draws associated options
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
         * Draws anchor point
         */
        _drawAnchor ( )
        {
            let _anchor = new Rectangle ( new Point ( this.x, this.y ), new Aspect ( 5, 5 ) );

                _anchor.fill.color = new Rgb ( 255, 0, 0 );

                _anchor.canvas     = this.canvas;


                _anchor.draw ( );
        }

        /**
         * Sets anchor's point against this object's point location
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

        strokeColorCycle   ( ) { }

        fillColorCycle     ( ) { }

        gradientColorCycle ( ) { }

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

            this.draw    ( );
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

                this.draw    ( );


                this._canvas.restore ( );
            }
        }

        /**
         * Shows coordinates of this object
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
