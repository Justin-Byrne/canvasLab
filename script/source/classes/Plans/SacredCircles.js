/**
 * @class           {Object} SacredCircles                      SacredCircles plan
 * @property        {Point}  point                              X & Y axis coordinates
 * @property        {number} [radius=25]                        Radius of circle
 * @property        {number} iterations                         Amount of iterations
 * @property        {Queue}  degrees                            Degrees for generation
 * @property        {Queue}  colors                             Colors for generation
 * @property        {Object} master                             Master collection
 */
class SacredCircles
{
    _point      = new Point;
    _radius     = 25;
    _iterations = undefined;
    _degrees    = undefined;
    _colors     = new Queue ( [ new Rgb ( 255, 255, 255, 0 ) ] );

    _master     = undefined;

    #numbers    = undefined;
    #tangents   = undefined;
    #counter    = -1;                                       /* Counter to define the gaps between each circle: @see this.create ( ) */

    /**
     * Create a SacredCircles plan
     * @property        {Point}  point                              X & Y axis coordinates
     * @property        {number} [radius=25]                        Radius of circle
     * @property        {number} iterations                         Amount of iterations
     * @property        {Queue}  degrees                            Degrees for generation
     * @property        {Queue}  colors                             Colors for generation
     */
    constructor ( point = { x: undefined, y: undefined }, radius, iterations, degrees, colors )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isNumber = VALIDATION.isNumber;
            this._isPoint  = VALIDATION.isPoint;

            Object.defineProperty ( this, 'point',  PROPERTY_BLOCKS.discrete.point  );
            Object.defineProperty ( this, 'radius', PROPERTY_BLOCKS.discrete.radius );

        this.point      = point;
        this.radius     = radius;
        this.iterations = iterations;
        this.degrees    = degrees;
        this.colors     = colors;

        this._tangents  = iterations;
    }

    ////    [ POINT ]    ///////////////////////////////////

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

    ////    [ RADIUS ]  ////////////////////////////////////

        /**
         * Set radius value
         * @public
         * @function
         * @param           {number} value                              Radius of circle
         */
        set radius ( value ) { }

        /**
         * Get radius value
         * @readOnly
         * @function
         * @return          {number}                                    Radius of circle
         */
        get radius ( ) { }

    ////    [ ITERATIONS ]    //////////////////////////////

        /**
         * Set iterations value
         * @public
         * @function
         * @param           {number} value                              Number of iterations
         */
        set iterations ( value )
        {
            this._iterations = ( this._isNumber ( value ) ) ? value : this._iterations;
        }

        /**
         * Get iterations value
         * @readOnly
         * @function
         * @return          {number}                                    Number of iterations
         */
        get iterations ( )
        {
            return this._iterations;
        }

    ////    [ DEGREES ]    /////////////////////////////////

        /**
         * Set degrees value
         * @public
         * @function
         * @param           {Array} value                               Array of degrees
         */
        set degrees ( value )
        {
            this._degrees = ( Array.isArray ( value ) ) ? new Queue ( value ) : this._degrees;
        }

        /**
         * Get degrees value
         * @readOnly
         * @function
         * @return          {Queue}                                     Queue of degrees
         */
        get degrees ( )
        {
            return this._degrees;
        }

    ////    [ COLORS ]    //////////////////////////////////

        /**
         * Set colors value
         * @public
         * @function
         * @param           {Array} value                               Array of colors
         */
        set colors ( value )
        {
            this._colors = ( Array.isArray ( value ) ) ? new Queue ( value ) : this._colors;
        }

        /**
         * Get colors value
         * @readOnly
         * @function
         * @return          {Queue}                                     Queue of colors
         */
        get colors ( )
        {
            return this._colors;
        }

    ////    [ MASTER ]    //////////////////////////////////

        /**
         * Get master collection
         * @public
         * @function
         * @return          {Object}                                    Master collection
         */
        get master ( )
        {
            return this._master;
        }

    ////    [ NUMBERS ]    /////////////////////////////////

        /**
         * Set numbers value
         * @private
         * @function
         * @param           {Array} value                               Array of numbers
         */
        set _numbers ( value )
        {
            this.#numbers = ( Array.isArray ( value ) ) ? new Queue ( value ) : this.#numbers;
        }

    ////    [ TANGENTS ]    ////////////////////////////////

        /**
         * Set tangents value
         * @private
         * @function
         * @param           {number} value                              Number of tangents
         */
        set _tangents ( value )
        {
            this.#tangents = ( Number.isInteger ( value ) ) ? this._getTangents ( value ) : this.#tangents;
        }

    ////    VALIDATION  ////////////////////////////////////

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

    ////    UTILITIES    ///////////////////////////////////

        /**
         * Returns an array of all tangents for each iteration
         * @private
         * @function
         * @return          {Array}                                     Tangents for each iteration
         */
        _getTangents ( )
        {
            let _results = new Array;

            let _count   = 0;


            for ( let _i = 1; _i <= this.iterations; _i++ )
            {
                _results.push ( _count * 6 );

                _count = _i + _count;
            }


            if ( this.iterations > 1 )

                _results.shift ( );


            return _results;
        }

        /**
         * Get total objects
         * @public
         * @function
         * @return          {number}                                    Total objects
         */
        get totalObjects ( )
        {
            if ( this.#tangents === undefined )

                this.#tangents = this._getTangents ( );


            return this.#tangents [ this.#tangents.length - 1 ];
        }

        _insertShapeA ( point, degree, color, iterator )
        {
            let _distance  = this.radius * iterator;

            let _circle    = new Circle (
                                 point,                     /* Point  */
                                 this.radius,               /* Radius */
                                 undefined,                 /* Angle  */
                                 undefined,                 /* Stroke */
                                 new Fill ( color ),        /* Fill   */
                                 undefined,                 /* Shadow */
                                 undefined                  /* Canvas */
                             );


                _circle.move ( degree, _distance );

            let _ellipse   = new Ellipse (
                                 point,                     /* Point  */
                                 new Point ( this.radius, this.radius * 0.5 ),  /* Radius */
                                 undefined,                 /* Angle  */
                                 undefined,                 /* Stroke */
                                 new Fill ( color ),        /* Fill   */
                                 undefined,                 /* Shadow */
                                 undefined                  /* Canvas */
                             );


                _ellipse.move ( degree, _distance );


            let _rectangle = new Rectangle (
                                 point,                     /* Point  */
                                 undefined,                 /* Aspect */
                                 undefined,                 /* Round  */
                                 undefined,                 /* Stroke */
                                 new Fill ( color ),        /* Fill   */
                                 undefined,                 /* Shadow */
                                 undefined                  /* Canvas */
                             );


                _rectangle.move ( degree, _distance );


            let _roundedRectangle = new RoundedRectangle (
                                 point,                     /* Point  */
                                 undefined,                 /* Aspect */
                                 undefined,                 /* Round  */
                                 undefined,                 /* Stroke */
                                 new Fill ( color ),        /* Fill   */
                                 undefined,                 /* Shadow */
                                 undefined                  /* Canvas */
                             );

                _roundedRectangle.move ( degree, _distance );


            let _text      = new Text (
                                 _circle.point,
                                 this.#numbers.next,
                                 undefined,                 /* Type     */
                                 undefined,                 /* Size     */
                                 undefined,                 /* Weight   */
                                 undefined,                 /* maxWidth */
                                 undefined,                 /* Stroke   */
                                 undefined,                 /* Fill     */
                                 undefined,                 /* Shadow   */
                                 undefined                  /* Canvas   */
                             );


            this.master.circles.push           ( _circle    );

            this.master.ellipses.push          ( _ellipse   );

            this.master.rectangles.push        ( _rectangle );

            this.master.roundedRectangles.push ( _roundedRectangle );

            this.master.texts.push             ( _text      );
        }

        _insertShapeB ( degree, color )
        {
            let _point     = this.master.circles.endPoint;

            let _distance  = this.radius;

            let _circle    = new Circle (
                                 _point,                    /* Point  */
                                 this.radius,               /* Radius */
                                 undefined,                 /* Angle  */
                                 undefined,                 /* Stroke */
                                 new Fill ( color ),        /* Fill   */
                                 undefined,                 /* Shadow */
                                 undefined                  /* Canvas */
                             );


                _circle.move ( degree, _distance );


            let _ellipse   = new Ellipse (
                                 _point,                    /* Point  */
                                 new Point ( this.radius, this.radius * 0.5 ),  /* Radius */
                                 undefined,                 /* Angle  */
                                 undefined,                 /* Stroke */
                                 new Fill ( color ),        /* Fill   */
                                 undefined,                 /* Shadow */
                                 undefined                  /* Canvas */
                             );


                _ellipse.move ( degree, _distance );


            let _rectangle = new Rectangle (
                                 _point,                    /* Point  */
                                 undefined,                 /* Aspect */
                                 undefined,                 /* Round  */
                                 undefined,                 /* Stroke */
                                 new Fill ( color ),        /* Fill   */
                                 undefined,                 /* Shadow */
                                 undefined                  /* Canvas */
                             );

                _rectangle.move ( degree, _distance );


            let _roundedRectangle = new RoundedRectangle (
                                 _point,                    /* Point  */
                                 undefined,                 /* Aspect */
                                 undefined,                 /* Round  */
                                 undefined,                 /* Stroke */
                                 new Fill ( color ),        /* Fill   */
                                 undefined,                 /* Shadow */
                                 undefined                  /* Canvas */
                             );

                _roundedRectangle.move ( degree, _distance );


            let _line      = new Line (
                                 _point,                    /* Start   */
                                 _circle.point,             /* End     */
                                 undefined,                 /* Stroke  */
                                 undefined,                 /* Shadow  */
                                 undefined,                 /* lineCap */
                                 undefined                  /* Canvas  */
                             );

            let _text      = new Text (
                                 _circle.point,
                                 this.#numbers.next,
                                 undefined,                 /* Type     */
                                 undefined,                 /* Size     */
                                 undefined,                 /* Weight   */
                                 undefined,                 /* maxWidth */
                                 undefined,                 /* Stroke   */
                                 undefined,                 /* Fill     */
                                 undefined,                 /* Shadow   */
                                 undefined                  /* Canvas   */
                             );


            this.master.circles.push           ( _circle    );

            this.master.ellipses.push          ( _ellipse   );

            this.master.rectangles.push        ( _rectangle );

            this.master.roundedRectangles.push ( _roundedRectangle );

            this.master.lines.push             ( _line      );

            this.master.texts.push             ( _text      );
        }

        _insertCouplingLines ( )
        {
            let _lastIndex  = this.master.circles.length - 1;


            if ( this.#tangents.includes ( _lastIndex ) )
            {
                this.#counter += 6;


                let _firstIndex = _lastIndex - this.#counter;

                let _firstPoint = this.master.circles [ _firstIndex ].point;

                let _lastPoint  = this.master.circles [ _lastIndex  ].point;


                this.master.lines.push ( new Line ( _lastPoint, _firstPoint ) );
            }
        }

    ////    INITIALIZER    /////////////////////////////////

        /**
         * Sets this plan
         * @public
         * @function
         */
        init ( )
        {
            this._numbers = Array.from ( { length: this.totalObjects }, ( element, index ) => index.toString ( ) );


            let _alpha = 0.1;


            for ( let _i = 0; _i < this.iterations; _i++ )
            {
                this.degrees.reset;

                ////    FOUNDATION STONE    ////////////////////////////////////

                let [ _degree, _color ] = [ this.degrees.next, this.colors.next ];                  // Number: 00, Degree: 270


                for ( let _stone = 0; _stone < 1; _stone++ )

                     this._insertShapeA ( this.point, _degree, _color, _i );

                ////    FILLER STONE(S)    /////////////////////////////////////

                    [ _degree, _color ] = [ this.degrees.next, this.colors.next ];                  // Number: 01, Degree: 150


                for ( let _stone = 0; _stone <= ( _i - 1 ); _stone++ )

                     this._insertShapeB ( _degree, _color );

                    [ _degree, _color ] = [ this.degrees.next, this.colors.next ];                  // Number: 02,  Degree: 90


                for ( let _stone = 0; _stone <= ( _i - 1 ); _stone++ )

                    this._insertShapeB ( _degree, _color );

                    [ _degree, _color ] = [ this.degrees.next, this.colors.next ];                  // Number: 03,  Degree: 30


                for ( let _stone = 0; _stone <= ( _i - 1 ); _stone++ )

                  this._insertShapeB ( _degree, _color );

                    [ _degree, _color ] = [ this.degrees.next, this.colors.next ];                  // Number: 04, Degree: 330


                for ( let _stone = 0; _stone <= ( _i - 1 ); _stone++ )

                  this._insertShapeB ( _degree, _color );

                    [ _degree, _color ] = [ this.degrees.next, this.colors.next ];                  // Number: 05, Degree: 270


                for ( let _stone = 0; _stone <= ( _i - 1 ); _stone++ )

                  this._insertShapeB ( _degree, _color );

                ////    KEYSTONE    ////////////////////////////////////////////

                    [ _degree, _color ] = [ this.degrees.next, this.colors.next ];                  // Number: 06, Degree: 210


                for ( let _stone = 0; _stone <= ( _i - 2 ); _stone++ )

                  this._insertShapeB ( _degree, _color );


                this._insertCouplingLines ( );
            }


            this.master.circles.reverse ( );

            this.master.rectangles.reverse ( );
        }
}
