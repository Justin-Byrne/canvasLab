/**
 * @class           {Object} Text                               Text element to render within a canvas element
 * @property        {Point}  point                              X & Y axis coordinates
 * @property        {string} text                               Text to display
 * @property        {Stroke} stroke                             Stroke properties
 * @property        {Fill}   fill                               Fill properties
 * @property        {Shadow} shadow                             Shadow properties
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 */
class Text extends Font
{
    _point  = new Point;
    _text   = undefined;
    _stroke = new Stroke;
    _fill   = new Fill;
    _shadow = new Shadow;

    _canvas = undefined;

    #_options = new Options;

    /**
     * Create a text object
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
                    offset = { x:     undefined, y:        undefined },
                    stroke = { type:  undefined, segments: undefined, color: undefined, alpha: undefined, width: undefined },
                    fill   = { color: undefined, alpha:    undefined },
                    shadow = { color: undefined, alpha:    undefined, blur:  undefined, offset: { x: undefined, y: undefined } },
                    canvas
                )
    {
        super ( );

        ////    COMPOSITION     ////////////////////////////

            this._isDegree = VALIDATION.isDegree;
            this._isInDom  = VALIDATION.isInDom;
            this._isPoint  = VALIDATION.isPoint;

            this._rotatePoint = UTILITIES.rotatePoint;
            this._clearCanvas = UTILITIES.clearCanvas;
            this._setShadow   = UTILITIES.set.shadow;

            Object.defineProperty ( this, 'point',  PROPERTY_BLOCKS.discrete.point  );
            Object.defineProperty ( this, 'x',      PROPERTY_BLOCKS.discrete.pointX );
            Object.defineProperty ( this, 'y',      PROPERTY_BLOCKS.discrete.pointY );
            Object.defineProperty ( this, 'offset', PROPERTY_BLOCKS.discrete.offset );
            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.discrete.canvas );

            stroke.width = ( stroke.width != undefined ) ? stroke.width : 0;                        // Set: default stroke property as 0
            fill.color   = ( fill.color   != undefined ) ? fill.color   : '0, 0, 0';                // Set: default fill property as 'Black' || '0, 0, 0'

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

    ////    [ TEXT ]    ////////////////////////////////////

        /**
         * Set text
         * @param           {string} value                              Text of object
         */
        set text ( value )
        {
            this._text = ( typeof value === 'string' ) ? value : undefined;
        }

        /**
         * Get text
         * @return          {string}                                    Text of object
         */
        get text ( )
        {
            return this._text;
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

    ////    [ OPTIONS ] ////////////////////////////////////

        /**
         * Get options properties
         * @return          {Options}                                   Options properties
         */
        get options ( )
        {
            return this.#_options;
        }

    ////    * SUPER *   ////////////////////////////////////

        ////    [ type ]    ////////

            /**
             * Set font's type
             * @param           {string} value                              Font's type
             */
            set type ( value ) { super.type = value; }

            /**
             * Get font's type
             * @return          {string}                                    Font's type
             */
            get type ( )       { return super.type;  }

        ////    [ size ]    ////////

            /**
             * Set font's size
             * @param           {number} value                              Font's size
             */
            set size ( value ) { super.size = value; }

            /**
             * Get font's size
             * @return          {number}                                    Font's size
             */
            get size ( )       { return super.size;  }

        ////    [ weight ]  ////////

            /**
             * Set font's weight
             * @param           {string} value                              Font's weight
             */
            set weight ( value ) { super.weight = value; }

            /**
             * Get font's weight
             * @return          {string}                                    Font's weight
             */
            get weight ( )       { return super.weight;  }

        ////    [ maxWidth ]    ////

            /**
             * Set font's max width
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
             * @return          {number}                                    Font's max width
             */
            get maxWidth ( ) { return super.maxWidth; }

        ////    [ offset ]  ////////

            /**
             * Set offset
             * @param           {Point} value                               Shadow offset
             * @see             {@link discrete.offset}
             */
            set offset ( value ) { }

            /**
             * Get offset
             * @return          {Point}                                     Shadow offset
             * @see             {@link discrete.offset}
             */
            get offset ( ) { }

        ////    [ font ]    ////////

            /**
             * Get font
             * @return          {string}                                    CSS style font property syntax
             */
            get font ( )
            {
                return super.font;
            }

    ////    VALIDATION  ////////////////////////////////////

        _isDegree ( ) { }

        _isInDom  ( ) { }

        _isPoint  ( ) { }

    ////    ( PRIVATE ) ////////////////////////////////////

        /**
         * Draws associated options
         */
        #_drawOptions ( )
        {
            if ( this.#_options.border ) this.drawBorder ( );

            if ( this.#_options.axis   ) this.drawAxis   ( );
        }

    ////    UTILITIES   ////////////////////////////////////

        _rotatePoint ( ) { }

        _clearCanvas ( ) { }

        _setShadow   ( ) { }

        /**
         * Draws border around this object
         * @param           {number} [offset=10]                        Offset of border's perimeter
         */
        drawBorder ( offset = 10 )
        {
            let _aspect = new Aspect ( this._canvas.measureText ( this.text ).width, super.size );

            let _point  = new Point  ( this.x - ( aspect.width / 2 ) - offset, this.y - ( aspect.height / 2 ) - ( offset * 2 ) );


            let _border = new Rectangle ( _point, aspect.width + ( offset * 2 ), aspect.height + ( offset * 2 ),    /* Point, Aspect */
                /* Stroke */            { type: 0, segments: undefined, color: '235, 81, 73', alpha: 1, width: 1 },
                /* Fill   */            { color: undefined, alpha: 0 },
                /* Shadow */              undefined,
                /* Canvas */              this.canvas );

                _border.draw ( );
        }

        /**
         * Draws axis through center of this object
         * @param           {number} [offset=10]                        Offset of axis's edges
         */
        drawAxis ( offset = 10 )
        {
            let _aspect     = new Aspect ( this._canvas.measureText ( this.text ).width, super.size );

            let _xAxisStart = new Point  ( this.x - ( aspect.width / 2 ) - ( offset * 2 ), this.y - ( aspect.height / 4 ) );
            let _xAxisEnd   = new Point  ( this.x + ( aspect.width / 2 ) + ( offset * 2 ), this.y - ( aspect.height / 4 ) );

            let _yAxisStart = new Point  ( aspect.width, this.y - ( aspect.height     ) - offset );
            let _yAxisEnd   = new Point  ( aspect.width, this.y + ( aspect.height / 2 ) + offset );


            let _xAxis = new Line ( _xAxisStart, _xAxisEnd,     /* Point */
                /* Stroke     */    { type: 0, segments: undefined, color: '235, 81, 73', alpha: 1, width: 1 },
                /* Shadow     */      undefined,
                /* LineCap    */      undefined,
                /* Canvas     */      this.canvas );

            let _yAxis = new Line ( _yAxisStart, _yAxisEnd,     /* Point */
                /* Stroke     */    { type: 0, segments: undefined, color: '235, 81, 73', alpha: 1, width: 1 },
                /* Shadow     */      undefined,
                /* LineCap    */      undefined,
                /* Canvas     */      this.canvas );


                _xAxis.draw ( );

                _yAxis.draw ( );
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

            this.draw    ( );
        }

        /**
         * Rotate this object
         * @param           {number} degree                             Distance to rotate; in degrees
         * @param           {string} [anchor='center']                  Anchoring point during rotation
         * @param           {number} [clear=true]                       Clear canvas during each rotation
         */
        rotate ( degree, anchor = 'center', clear = true )
        {
            if ( this._isDegree ( degree ) )
            {
                let _point = new Point;


                let _width  = this._canvas.measureText ( this.text ).width / 2;

                let _height = this.size / 2;


                switch ( anchor )
                {
                    case 'topLeft':      [ _point.x, _point.y ] = [ _point.x - _width, _point.y - _height ];  break;

                    case 'topRight':     [ _point.x, _point.y ] = [ _point.x + _width, _point.y - _height ];  break;

                    case 'bottomRight':  [ _point.x, _point.y ] = [ _point.x + _width, _point.y + _height ];  break;

                    case 'bottomLeft':   [ _point.x, _point.y ] = [ _point.x - _width, _point.y + _height ];  break;

                    case 'center':       [ _point.x, _point.y ] = [ _point.x,          _point.y - _height ];  break;

                    default:

                        console.warn ( `"${anchor}" is not a valid 'anchor' variable !` );
                }


                this._canvas.save      ( );

                this._canvas.translate (   _point.x,   _point.y );

                this._canvas.rotate    ( ( degree % 360 ) * Math.PI / 180 );

                this._canvas.translate ( - _point.x, - _point.y );


                this._clearCanvas ( clear );

                this.draw    ( );


                this._canvas.restore ( );
            }
        }

    ////    DRAW    ////////////////////////////////////////

        /**
         * Draw this object
         * @param           {string} canvas                             Canvas Id
         */
        draw ( canvas, shadow = false )
        {
            if ( canvas != undefined ) this.canvas = canvas;


            if ( this._canvas instanceof CanvasRenderingContext2D )
            {
                if ( this.#_options.shadow ) this._setShadow ( );                                   // Set: shadow


                [ this.x, this.y ] = [  ( this.x + this.offset.x ), ( this.y + this.offset.y )  ];  // Incorporate offset from super class


                this._canvas.font      = this.font;

                this._canvas.textAlign = 'center';


                this._canvas.fillStyle = `rgba(${this.fill.color}, ${this.fill.alpha})`;

                this._canvas.fillText ( this.text, this.x, this.y, this.maxWidth );                 // TODO: maxWidth is showing NaN !


                if ( this.stroke.width > 0 )
                {
                    this._canvas.strokeStyle = `rgba(${this.stroke.color}, ${this.stroke.alpha})`;

                    this._canvas.strokeText ( this.text, this.x, this.y, this.maxWidth );
                }


                if ( this.#_options.shadow ) this._canvas.shadowColor = `rgba(0, 0, 0, 0)`;         // Reset: shadow


                this.#_drawOptions ( );
            }
            else

                console.warn ( `'canvas' property is not set for ${this.constructor.name} !` );
        }
}
