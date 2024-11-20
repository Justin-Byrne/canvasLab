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
 * @property        {number}            mass                    Mass of object
 * @property        {Point}             velocity                X & Y velocity coordinates
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
    #mass     = 0;
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

        ////    [ MASS ]    //////////////////////

            /**
             * Set mass
             * @public
             * @function
             * @param             {number} value                                Mass of object
             */
            set mass ( value )
            {
                this.#mass = ( this._isNumber ( value ) ) ? value : this.#mass;
            }

            /**
             * Get mass
             * @public
             * @function
             * @return             {number}                                     Mass of object
             */
            get mass ( )
            {
                return this.#mass;
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
