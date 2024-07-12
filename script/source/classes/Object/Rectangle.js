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

    #anchor  = new Anchor;
    #options = new Options;

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

        this.width  = ( aspect.width  != undefined ) ? aspect.width  : 50;
        this.height = ( aspect.height != undefined ) ? aspect.height : 50;

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
            return this.#anchor;
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
         * @see             {@link Utilities.draw.anchor}
         */
        _drawAnchor ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {number} offset                             Offset of axis
         * @param           {Object} color                              Color model
         * @param           {number} stop                               Gradient color stop
         * @see             {@link Utilities.draw.axis}
         */
        _drawAxis ( ) { }

        /**
         * Draws an axis for the associated object
         * @private
         * @function
         * @param           {Aspect} aspect                             Aspect properties
         * @param           {Object} color                              Color model
         * @see             {@link Utilities.draw.border}
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
            [ this.#anchor.x, this.#anchor.y ] = [ this.x, this.y ];


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
        _setShadow ( ) { }

        /**
         * Get area of this object
         * @readOnly
         * @function
         * @return          {number}                                    Area of this object
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
         * @param           {boolean} [draw=false]                      Draw post movement
         * @param           {boolean} [clear=false]                     Clear canvas during each movement
         * @see             {@link Utilities.transition.move}
         */
        move ( ) { }

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
         * Rotate this object
         * @public
         * @function
         * @param           {number} degree                             Distance to rotate; in degrees
         * @param           {string} [anchor='center']                  Anchoring point during rotation
         * @param           {number} [clear=true]                       Clear canvas during each rotation
         * @see             {@link Utilities.transition.rotate}
         */
        rotate ( ) { }

        /**
         * Shows coordinates of this object
         * @public
         * @function
         * @param           {number} [offset=10]                        Offset of coordinates y origin
         * @param           {number} [fontSize=16]                      Coordinates font size
         * @see             {@link Utilities.misc.showCoordinates}
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
         * @see             {@link Utilities.color.cycle.stroke}
         */
        strokeColorCycle   ( ) { }

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

                this._canvas.rect        ( this.anchor.x, this.anchor.y, this.width, this.height );

                this._canvas.stroke      ( );

                this._canvas.fill        ( );


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
         * @see             {@link Utilities.draw.redraw}
         */
        redraw ( ) { }
}
