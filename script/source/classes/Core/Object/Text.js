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

            this._isDegree   = VALIDATION.isDegree;
            this._isInDom    = VALIDATION.isInDom;
            this._isPoint    = VALIDATION.isPoint;

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
            _setShadow   ( ) { }

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


                this._canvas.font      = this.font;

                this._canvas.textAlign = 'center';

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
