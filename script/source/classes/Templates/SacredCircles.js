/**
 * @class           {Object} SacredCircles                      SacredCircles template
 * @property        {Point}  point                              X & Y axis coordinates
 * @property        {number} [radius=25]                        Radius of circle
 * @property        {number} iterations                         Amount of iterations
 * @property        {Queue}  degrees                            Degrees for generation
 * @property        {Queue}  colors                             Colors for generation
 * @property        {Object} master                             Master object
 */
class SacredCircles
{
    _point      = new Point;
    _radius     = 25;
    _iterations = undefined;
    _degrees    = [ 90, 330, 270, 210, 150, 90, 30 ];
    _colors     = new Queue ( [ new Rgb ( 255, 255, 255, 0 ) ] );

    _master     = undefined;

    #numbers     = undefined;
    #tangents    = undefined;
    #counter     = -1;              /* Counter to define the gaps between each circle: @see this.create ( ) */
    #transitions = new Array;

    /**
     * Create a SacredCircles template
     * @property        {Point}  point                              X & Y axis coordinates
     * @property        {number} [radius=25]                        Radius of circle
     * @property        {number} iterations                         Amount of iterations
     * @property        {Queue}  degrees                            Degrees for generation
     * @property        {Queue}  colors                             Colors for generation
     */
    constructor ( point = { x: undefined, y: undefined }, radius, iterations, degrees, colors )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isCanvasLabObject = VALIDATION._isCanvasLabObject;
            this._isNumber          = VALIDATION.isNumber;
            this._isPoint           = VALIDATION.isPoint;

            Object.defineProperty ( this, 'master', PROPERTY_BLOCKS.individual.master );
            Object.defineProperty ( this, 'point',  PROPERTY_BLOCKS.individual.point  );
            Object.defineProperty ( this, 'radius', PROPERTY_BLOCKS.individual.radius );

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

    ////    [ RADIUS ]  ////////////////////////////////////

        /**
         * Set radius
         * @public
         * @function
         * @param           {number} value                              Radius of circle
         * @see             {@link PROPERTY_BLOCKS.individual.radius}
         */
        set radius ( value ) { }

        /**
         * Get radius
         * @readOnly
         * @function
         * @return          {number}                                    Radius of circle
         * @see             {@link PROPERTY_BLOCKS.individual.radius}
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

    ////    [ MASTER ]  ////////////////////////////////////

        /**
         * Set master object
         * @public
         * @function
         * @param           {clObject} value                            Canvas Lab object
         * @see             {@link PROPERTY_BLOCKS.individual.master}
         */
        set master ( value ) { }

        /**
         * Get master object
         * @public
         * @function
         * @return          {clObject}                                  Master Canvas Lab object
         * @see             {@link PROPERTY_BLOCKS.individual.master}
         */
        get master ( ) { }

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
         * @param           {number} value                              Number of iterations
         */
        set _tangents ( value )
        {
            this.#tangents = ( Number.isInteger ( value ) ) ? this.#getTangents ( value ) : this.#tangents;
        }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is a CanvasLab object; Line, Circle, Rectangle, Text
         * @private
         * @function
         * @param           {Object} value                              CanvasLab object; Line, Circle, Rectangle, Text
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isCanvasLabObject}
         */
        _isCanvasLabObject ( ) { }

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
         * Returns a Circle object
         * @protected
         * @function
         * @param           {Point} point                               X & Y Coordinates
         * @param           {Rgb}   color                               Color model & value
         * @return          {Circle}                                    Circle object
         */
        #getCircle           = ( point, color )         => new Circle ( point, this.radius, undefined, undefined, new Fill ( color ), undefined, undefined );

        /**
         * Returns a Ellipse object
         * @protected
         * @function
         * @param           {Point} point                               X & Y Coordinates
         * @param           {Rgb}   color                               Color model & value
         * @return          {Ellipse}                                   Ellipse object
         */
        #getEllipse          = ( point, color )         => new Ellipse ( point, new Point ( this.radius, this.radius * 0.5 ), undefined, undefined, new Fill ( color ), undefined, undefined );

        /**
         * Returns a Rectangle object
         * @protected
         * @function
         * @param           {Point} point                               X & Y Coordinates
         * @param           {Rgb}   color                               Color model & value
         * @return          {Rectangle}                                 Rectangle object
         */
        #getRectangle        = ( point, color )         => new Rectangle ( point, undefined, undefined, undefined, new Fill ( color ), undefined, undefined );

        /**
         * Returns a RoundedRectangle object
         * @protected
         * @function
         * @param           {Point} point                               X & Y Coordinates
         * @param           {Rgb}   color                               Color model & value
         * @return          {RoundedRectangle}                          Rounded rectangle object
         */
        #getRoundedRectangle = ( point, color )         => new RoundedRectangle ( point, undefined, undefined, undefined, new Fill ( color ), undefined, undefined );

        /**
         * Returns a Text object
         * @protected
         * @function
         * @param           {Point} point                               X & Y Coordinates
         * @param           {Rgb}   color                               Color model & value
         * @return          {Text}                                      Text object
         */
        #getText             = ( point, color )         => new Text ( point, this.#numbers.next, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined );

        /**
         * Returns a Line object
         * @protected
         * @function
         * @param           {Point} startPoint                          Starting point of line
         * @param           {Point} endPoint                            Ending point of line
         * @return          {Line}                                      Line object
         */
        #getLine             = ( startPoint, endPoint ) => new Line ( startPoint, endPoint, undefined, undefined, undefined, undefined );

        /**
         * Insert initial object
         * @protected
         * @function
         * @param           {Point}  point                              X & Y Coordinate(s)
         * @param           {number} degree                             Degree of movement
         * @param           {Rgb}    color                              Color model & value
         * @param           {number} iterator                           Current iterator
         */
        #insertInitialObject ( point, iterator, degree, color )
        {
            let _object = this._getObjectPerCollectionType ( point, color );


            this._moveObject ( _object, degree, this.radius * iterator );


            this._setObjectPerCollectionType ( _object );
        }

        /**
         * Insert Ensuing objects
         * @protected
         * @function
         * @param           {number} degree                             Degree of movement
         * @param           {Rgb}    color                              Color of object
         */
        #insertEnsuingObjects ( degree, color )
        {
            let _object = this._getObjectPerCollectionType ( this.master.circles.endPoint, color );


            this._moveObject ( _object, degree, this.radius );


            this._setObjectPerCollectionType ( _object );
        }

        /**
         * Returns an array of all tangents for each iteration
         * @protected
         * @function
         * @return          {Array}                                     Tangents for each iteration
         */
        #getTangents ( )
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
         * Returns a clObject based on the current collection type
         * @private
         * @function
         * @param           {Point} point                               X & Y Coordinates
         * @param           {Rgb}   color                               Color model & value
         */
        _getObjectPerCollectionType ( point, color )
        {
            let _collectionType = this.master.constructor.name;

            let _result         = undefined;


            switch ( _collectionType )
            {
                case 'Circles':             _result = this.#getCircle ( point, color );                 break;

                case 'Ellipses':            _result = this.#getEllipse ( point, color );                break;

                case 'Rectangles':          _result = this.#getRectangle ( point, color );              break;

                case 'RoundedRectangles':   _result = this.#getRoundedRectangle ( point, color );       break;

                case 'Texts':               _result = this.#getText ( point, color );                   break;

                case 'Group':

                                        let _objectA = this.#getCircle ( point, color );

                                        let _objectB = this.#getEllipse ( point, color );

                                        let _objectC = this.#getRectangle ( point, color );

                                        let _objectD = this.#getRoundedRectangle ( point, color );

                                        let _objectE = this.#getText ( point, color );


                                            _result  = new Array ( _objectA, _objectB, _objectC, _objectD, _objectE );
            }


            return _result;
        }

        /**
         * Moves the passed object in a specific degree & distance
         * @private
         * @function
         * @param           {clObject} object                           Canvas Lab object
         * @param           {number}   degree                           Degree to move
         * @param           {number}   distance                         Distance to move
         */
        _moveObject ( object, degree, distance )
        {
            if ( Array.isArray ( object ) )

                for ( let _entry of object )

                    _entry.move ( degree, distance );

            else

                object.move ( degree, distance );
        }

        /**
         * Pushes the passed clObject into the current collection type
         * @private
         * @function
         * @param           {clObject} object                           Canvas Lab object
         */
        _setObjectPerCollectionType ( object )
        {
            let _collectionType = this.master.constructor.name;


            switch ( _collectionType )
            {
                case 'Group':

                    for ( let _entry of object )
                    {
                        let _type = `${_entry.constructor.name.toLowerCase ( )}s`;

                            _type = ( _type === 'roundedrectangles' ) ? 'roundedRectangles' : _type;


                        this.master [ _type ].push ( _entry );
                    }

                default:

                    this.master.push ( object );

                    break;
            }
        }

        /**
         * Set a single transition
         * @private
         * @function
         * @param           {clObject}        object                    Canvas Lab object
         * @param           {string|Function} timing                    Timing function
         * @param           {number}          period                    Period of animation-time
         * @param           {object}          change                    Properties to change
         */
        _setTransition ( object, timing, period, change )
        {
            let _result =
            {
                object: object,
                timing: timing,
                period: period,
                change: change
            }


            this.#transitions.push ( _result );
        }

        /**
         * Returns an array of transitions based on the passed params
         * @public
         * @function
         * @param           {clObject}        object                    Canvas Lab object
         * @param           {string|Function} timing                    Timing function
         * @param           {number}          period                    Period of animation-time
         * @param           {number}          radius                    Radius of circle
         * @param           {number}          iterations                Amount of iterations
         */
        getTransitions ( object, timing, period, radius, iterations )
        {
            this.iterations = iterations;

            this.radius     = radius;


            this._setTransition ( object, timing, 1, { cache: true } );


            for ( let _i = 0; _i < this.iterations; _i++ )
            {
                ////    FOUNDATION STONE    ////////////////

                for ( let _stone = 0; _stone < 1; _stone++ )

                    this._setTransition ( object, timing, period, { move: { degree: this.degrees [ 0 ], distance: this.radius }, cache: true } );

                ////    FILLER STONE(S)    /////////////////

                for ( let _stone = 0; _stone <= _i; _stone++ )

                    this._setTransition ( object, timing, period, { move: { degree: this.degrees [ 1 ], distance: this.radius }, cache: true } );


                for ( let _stone = 0; _stone <= _i; _stone++ )

                    this._setTransition ( object, timing, period, { move: { degree: this.degrees [ 2 ], distance: this.radius }, cache: true } );


                for ( let _stone = 0; _stone <= _i; _stone++ )

                    this._setTransition ( object, timing, period, { move: { degree: this.degrees [ 3 ], distance: this.radius }, cache: true } );


                for ( let _stone = 0; _stone <= _i; _stone++ )

                    this._setTransition ( object, timing, period, { move: { degree: this.degrees [ 4 ], distance: this.radius }, cache: true } );


                for ( let _stone = 0; _stone <= _i; _stone++ )

                    this._setTransition ( object, timing, period, { move: { degree: this.degrees [ 5 ], distance: this.radius }, cache: true } );

                ////    KEYSTONE    ////////////////////////

                for ( let _stone = 0; _stone <= _i; _stone++ )

                    if ( _stone == _i )

                        this._setTransition ( object, timing, period, { move: { degree: this.degrees [ 6 ], distance: this.radius }, cache: false } );

                    else

                        this._setTransition ( object, timing, period, { move: { degree: this.degrees [ 6 ], distance: this.radius }, cache: true } );
            }

            return this.#transitions;
        }

        /**
         * Get number of total objects
         * @public
         * @function
         * @return          {number}                                    Number of total objects
         */
        get totalObjects ( )
        {
            if ( this.#tangents === undefined )

                this.#tangents = this.#getTangents ( );


            return this.#tangents [ this.#tangents.length - 1 ];
        }

    ////    INITIALIZER    /////////////////////////////////

        /**
         * Sets this template
         * @public
         * @function
         */
        init ( )
        {
            this._numbers = Array.from ( { length: this.totalObjects }, ( element, index ) => index.toString ( ) );


            for ( let _i = 0; _i < this.iterations; _i++ )
            {
                this.degrees.reset;

                ////    FOUNDATION STONE    ////////////////////////////////////

                let [ _degree, _color ] = [ this.degrees.next, this.colors.next ];


                for ( let _stone = 0; _stone < 1; _stone++ )

                     this.#insertInitialObject ( this.point, _i, _degree, _color );

                ////    FILLER STONE(S)    /////////////////////////////////////

                    [ _degree, _color ] = [ this.degrees.next, this.colors.next ];                  // Number: 01, Degree: 150


                for ( let _stone = 0; _stone <= ( _i - 1 ); _stone++ )

                     this.#insertEnsuingObjects ( _degree, _color );


                    [ _degree, _color ] = [ this.degrees.next, this.colors.next ];                  // Number: 02,  Degree: 90


                for ( let _stone = 0; _stone <= ( _i - 1 ); _stone++ )

                    this.#insertEnsuingObjects ( _degree, _color );


                    [ _degree, _color ] = [ this.degrees.next, this.colors.next ];                  // Number: 03,  Degree: 30


                for ( let _stone = 0; _stone <= ( _i - 1 ); _stone++ )

                  this.#insertEnsuingObjects ( _degree, _color );


                    [ _degree, _color ] = [ this.degrees.next, this.colors.next ];                  // Number: 04, Degree: 330


                for ( let _stone = 0; _stone <= ( _i - 1 ); _stone++ )

                  this.#insertEnsuingObjects ( _degree, _color );


                    [ _degree, _color ] = [ this.degrees.next, this.colors.next ];                  // Number: 05, Degree: 270


                for ( let _stone = 0; _stone <= ( _i - 1 ); _stone++ )

                  this.#insertEnsuingObjects ( _degree, _color );

                ////    KEYSTONE    ////////////////////////////////////////////

                    [ _degree, _color ] = [ this.degrees.next, this.colors.next ];                  // Number: 06, Degree: 210


                for ( let _stone = 0; _stone <= ( _i - 2 ); _stone++ )

                  this.#insertEnsuingObjects ( _degree, _color );
            }


            ////    REVERSE COLLECTIONS    /////////////////

            // this.master.circles.reverse ( );

            this.master.ellipses.reverse ( );

            this.master.rectangles.reverse ( );

            this.master.roundedRectangles.reverse ( );
        }
}
