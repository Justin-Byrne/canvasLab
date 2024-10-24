/**
 * @class           {Object}           SacredCircles            SacredCircles template
 * @property        {Point}            point                    X & Y axis coordinates
 * @property        {number}           [radius=25]              Radius of circle
 * @property        {number}           iterations               Amount of iterations
 * @property        {Rgb|Stroke|Queue} strokes                  Stroke colors
 * @property        {Rgb|Fill|Queue}   fills                    Fill colors
 * @property        {Queue}            degrees                  Degrees for generation
 * @property        {Object}           master                   Master object
 */
class SacredCircles
{
    _point       = new Point;
    _radius      = 25;
    _iterations  = undefined;
    _degrees     = new Queue ( [ 90, 330, 270, 210, 150, 90, 30 ] );

    _strokes     = new Rgb (   0,   0,   0, 1 );
    _fills       = new Rgb ( 255, 255, 255, 0 );

    _transitions = undefined;

    _master      = undefined;

    #numbers     = undefined;
    #tangents    = undefined;
    #counter     = -1;              /* Counter to define the gaps between each circle: @see this.create ( ) */

    /**
     * Create a SacredCircles template
     * @property        {Point}            point                    X & Y axis coordinates
     * @property        {number}           [radius=25]              Radius of circle
     * @property        {number}           iterations               Amount of iterations
     * @property        {Rgb|Stroke|Queue} strokes                  Stroke colors
     * @property        {Rgb|Fill|Queue}   fills                    Fill colors
     * @property        {Queue}            degrees                  Degrees for generation
     */
    constructor ( point = { x: undefined, y: undefined }, radius, iterations, strokes, fills, degrees, transitions )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isCanvasLabObject = VALIDATION.isCanvasLabObject;
            this._isNumber          = VALIDATION.isNumber;
            this._isPoint           = VALIDATION.isPoint;
            this._isTransition      = VALIDATION.isTransition;

            Object.defineProperty ( this, 'master',      PROPERTY_BLOCKS.individual.master      );
            Object.defineProperty ( this, 'point',       PROPERTY_BLOCKS.individual.point       );
            Object.defineProperty ( this, 'radius',      PROPERTY_BLOCKS.individual.radius      );
            Object.defineProperty ( this, 'transitions', PROPERTY_BLOCKS.individual.transitions );

        this.point       = point;
        this.radius      = radius;
        this.iterations  = iterations;
        this.strokes     = strokes;
        this.fills       = fills;
        this.degrees     = degrees;
        this.transitions = transitions;

        this._tangents   = iterations;
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ POINT ]    /////////////////////

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

        ////    [ RADIUS ]    ////////////////////

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

        ////    [ ITERATIONS ]    ////////////////

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

        ////    [ DEGREES ]    ///////////////////

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

        ////    [ STROKES ]    ///////////////////

            /**
             * Set strokes value
             * @public
             * @function
             * @param           {Array} value                               Array of strokes
             */
            set strokes ( value )
            {
                if ( value != undefined )
                {
                    switch ( value.constructor.name )
                    {
                        case 'Rgb':

                            this._strokes = new Queue ( new Array ( new Stroke ( value ) ) );

                            break;

                        case 'Stroke':

                            this._strokes = new Queue ( new Array ( value ) );

                        case 'Queue':

                            this._strokes = value;

                        default:

                            Array.isArray ( value )
                            {
                                let _result = new Array;


                                for ( let _item of value )

                                    _result.push ( new Stroke ( _item ) );


                                this._strokes = new Queue ( _result );
                            }
                    }
                }
                else

                    this._strokes = this._strokes;
            }

            /**
             * Get strokes value
             * @readOnly
             * @function
             * @return          {Queue}                                     Queue of strokes
             */
            get strokes ( )
            {
                return this._strokes;
            }

        ////    [ FILLS ]    /////////////////////

            /**
             * Set fills value
             * @public
             * @function
             * @param           {Array} value                               Array of fills
             */
            set fills ( value )
            {
                if ( value != undefined )
                {
                    switch ( value.constructor.name )
                    {
                        case 'Rgb':

                            this._fills = new Queue ( new Array ( new Fill ( value ) ) );

                            break;

                        case 'Fill':

                            this._fills = new Queue ( new Array ( _array ) );

                        case 'Queue':

                            this._fills = value;

                        default:

                            Array.isArray ( value )
                            {
                                let _result = new Array;


                                for ( let _item of value )

                                    _result.push ( new Fill ( _item ) );


                                this._fills = new Queue ( _result );
                            }
                    }
                }
                else

                    this._fills = this._fills;
            }

            /**
             * Get fills value
             * @readOnly
             * @function
             * @return          {Queue}                                     Queue of fills
             */
            get fills ( )
            {
                return this._fills;
            }

        ////    [ TRANSITIONS ]    ///////////////

            /**
             * Set transitions
             * @public
             * @function
             * @param             {Transitions} value                       Transitions object
             * @see               {@link PROPERTY_BLOCKS.individual.transitions}
             */
            set transitions ( value ) { }

            /**
             * Get transitions
             * @public
             * @function
             * @return             {Transitions}                            Transitions object
             * @see               {@link PROPERTY_BLOCKS.individual.transitions}
             */
            get transitions ( ) { }

        ////    [ MASTER ]    ////////////////////

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

        ////    [ NUMBERS ]    ///////////////////

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

        ////    [ TANGENTS ]    //////////////////

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
        _isPoint ( ) { }

        /**
         * Returns whether the passed value is a Transition
         * @private
         * @function
         * @param           {Transition} value                          Transition object
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isTransition}
         */
        isTransition ( ) { }

    ////    UTILITIES    ///////////////////////////////////

        ////    # PROTECTED    ///////////////////

            /**
             * Returns a Circle object
             * @protected
             * @function
             * @param           {Point}  point                              X & Y Coordinates
             * @param           {Stroke} stroke                             Stroke properties
             * @param           {Fill}   fill                               Fill properties
             * @return          {Circle}                                    Circle object
             */
            #getCircle           = ( point, stroke, fill )  => new Circle ( point, this.radius, undefined, new Stroke ( stroke.color, stroke.type, stroke.segments, stroke.width ), new Fill ( fill.color, fill.type ), undefined, undefined );

            /**
             * Returns a Ellipse object
             * @protected
             * @function
             * @param           {Point}  point                              X & Y Coordinates
             * @param           {Stroke} stroke                             Stroke properties
             * @param           {Fill}   fill                               Fill properties
             * @return          {Ellipse}                                   Ellipse object
             */
            #getEllipse          = ( point, stroke, fill )  => new Ellipse ( point, new Point ( this.radius, this.radius * 0.5 ), undefined, new Stroke ( stroke.color, stroke.type, stroke.segments, stroke.width ), new Fill ( fill.color, fill.type ), undefined, undefined );

            /**
             * Returns a Rectangle object
             * @protected
             * @function
             * @param           {Point}  point                              X & Y Coordinates
             * @param           {Stroke} stroke                             Stroke properties
             * @param           {Fill}   fill                               Fill properties
             * @return          {Rectangle}                                 Rectangle object
             */
            #getRectangle        = ( point, stroke, fill )  => new Rectangle ( point, undefined, undefined, new Stroke ( stroke.color, stroke.type, stroke.segments, stroke.width ), new Fill ( fill.color, fill.type ), undefined, undefined );

            /**
             * Returns a RoundedRectangle object
             * @protected
             * @function
             * @param           {Point}  point                              X & Y Coordinates
             * @param           {Stroke} stroke                             Stroke properties
             * @param           {Fill}   fill                               Fill properties
             * @return          {RoundedRectangle}                          Rounded rectangle object
             */
            #getRoundedRectangle = ( point, stroke, fill )  => new RoundedRectangle ( point, undefined, undefined, new Stroke ( stroke.color, stroke.type, stroke.segments, stroke.width ), new Fill ( fill.color, fill.type ), undefined, undefined );

            /**
             * Returns a Text object
             * @protected
             * @function
             * @param           {Point}  point                              X & Y Coordinates
             * @param           {Stroke} stroke                             Stroke properties
             * @param           {Fill}   fill                               Fill properties
             * @return          {Text}                                      Text object
             */
            #getText             = ( point, stroke, fill )  => new Text ( point, this.#numbers.next, undefined, undefined, undefined, undefined, undefined, new Stroke ( stroke.color, stroke.type, stroke.segments, stroke.width ), new Fill ( fill.color, fill.type ), undefined );

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
             * @param           {Stroke} stroke                             Stroke properties
             * @param           {Fill}   fill                               Fill properties
             * @param           {number} iterator                           Current iterator
             */
            #insertInitialObject ( point, iterator, degree, stroke, fill )
            {
                let _object = this._getObjectPerCollectionType ( point, stroke, fill );


                this._moveObject ( _object, degree, this.radius * iterator );


                this._setObjectPerCollectionType ( _object );
            }

            /**
             * Insert Ensuing objects
             * @protected
             * @function
             * @param           {number} degree                             Degree of movement
             * @param           {Stroke} stroke                             Stroke properties
             * @param           {Fill}   fill                               Fill properties
             */
            #insertEnsuingObjects ( degree, stroke, fill )
            {
                let _object = this._getObjectPerCollectionType ( this.master.circles.endPoint, stroke, fill );


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

        ////    - PRIVATE    /////////////////////

            /**
             * Returns a clObject based on the current collection type
             * @private
             * @function
             * @param           {Point}  point                              X & Y Coordinates
             * @param           {Stroke} stroke                             Stroke properties
             * @param           {Fill}   fill                               Fill properties
             */
            _getObjectPerCollectionType ( point, stroke, fill )
            {
                let _collectionType = this.master.constructor.name;

                let _result         = undefined;


                switch ( _collectionType )
                {
                    case 'Circles':             _result = this.#getCircle ( point, stroke, fill );                 break;

                    case 'Ellipses':            _result = this.#getEllipse ( point, stroke, fill );                break;

                    case 'Rectangles':          _result = this.#getRectangle ( point, stroke, fill );              break;

                    case 'RoundedRectangles':   _result = this.#getRoundedRectangle ( point, stroke, fill );       break;

                    case 'Texts':               _result = this.#getText ( point, stroke, fill );                   break;

                    case 'Group':

                                            let _objectA = this.#getCircle ( point, stroke, fill );

                                            let _objectB = this.#getEllipse ( point, stroke, fill );

                                            let _objectC = this.#getRectangle ( point, stroke, fill );

                                            let _objectD = this.#getRoundedRectangle ( point, stroke, fill );

                                            let _objectE = this.#getText ( point, stroke, fill );


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

        ////    + PUBLIC    //////////////////////

            // /**
            //  * Returns transitions for hop animation
            //  * @public
            //  * @function
            //  * @param           {clObject}        object                    Canvas Lab object
            //  * @param           {ClCollection}    collection                Canvas Lab collection
            //  * @param           {string|Function} timing                    Timing function
            //  * @param           {number}          period                    Period of timer
            //  */
            // getHopTransitions ( object, collection, timing, period )
            // {
            //     let _transitions = new Array;


            //     for ( let _i = 0; _i < collection.length; _i++ )
            //     {
            //         let _result =
            //         {
            //             object: object,
            //             timing: timing,
            //             period: period,
            //             change:
            //             {
            //                 point: new Point ( collection [ _i ].point.x, collection [ _i ].point.y ),
            //                 cache: true,
            //                 fillColor: collection [ _i ].fill.color
            //             }
            //         }


            //         _transitions.push ( _result );
            //     }


            //     return _transitions;
            // }

            // /**
            //  * Creates shape from array of numbers
            //  * @public
            //  * @function
            //  * @param           {Array}           shape                     Array of collection indexes
            //  * @param           {ClCollection}    collection                Canvas Lab collection
            //  * @param           {string|Function} timing                    Timing function
            //  * @param           {number}          period                    Period of timer
            //  */
            // getSkipTransition ( shape, collection, timing, period )
            // {
            //     let _transitions = new Array;


            //     for ( let _i = 0; _i < collection.length; _i++ )
            //     {
            //         let _object = new Circle ( canvaslab.center );

            //         let _result =
            //         {
            //             object: _object,
            //             timing: timing,
            //             period: period,
            //             change:
            //             {
            //                 point: new Point ( collection [ _i ].point.x, collection [ _i ].point.y ),
            //                 cache: true
            //             }
            //         }


            //         _transitions.push ( _result );
            //     }


            //     return _transitions;
            // }

            // /**
            //  * Creates shape from array of numbers
            //  * @public
            //  * @function
            //  * @param           {Array}           shape                     Array of collection indexes
            //  * @param           {ClCollection}    collection                Canvas Lab collection
            //  * @param           {string|Function} timing                    Timing function
            //  * @param           {number}          period                    Period of timer
            //  */
            // getShapeTransition ( shape, collection, timing, period )
            // {
            //     // @TODO: Pass in Array index of collection

            //     let _transitions = new Array;


            //     for ( let _i = 0; _i < collection.length; _i++ )
            //     {
            //         let _object = new Circle ( canvaslab.center );

            //         let _result =
            //         {
            //             object: _object,
            //             timing: timing,
            //             period: period,
            //             change:
            //             {
            //                 point: new Point ( collection [ _i ].point.x, collection [ _i ].point.y ),
            //                 cache: true
            //             }
            //         }


            //         _transitions.push ( _result );
            //     }


            //     return _transitions;
            // }

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

                let [ _degree, _stroke, _fill ] = [ this.degrees.next, this.strokes.next, this.fills.next ];


                for ( let _stone = 0; _stone < 1; _stone++ )

                     this.#insertInitialObject ( this.point, _i, _degree, _stroke, _fill );

                ////    FILLER STONE(S)    /////////////////////////////////////

                    [ _degree, _stroke, _fill ] = [ this.degrees.next, this.strokes.next, this.fills.next ];        // Number: 01, Degree: 150


                for ( let _stone = 0; _stone <= ( _i - 1 ); _stone++ )

                     this.#insertEnsuingObjects ( _degree, _stroke, _fill );


                    [ _degree, _stroke, _fill ] = [ this.degrees.next, this.strokes.next, this.fills.next ];        // Number: 02,  Degree: 90


                for ( let _stone = 0; _stone <= ( _i - 1 ); _stone++ )

                    this.#insertEnsuingObjects ( _degree, _stroke, _fill );


                    [ _degree, _stroke, _fill ] = [ this.degrees.next, this.strokes.next, this.fills.next ];        // Number: 03,  Degree: 30


                for ( let _stone = 0; _stone <= ( _i - 1 ); _stone++ )

                  this.#insertEnsuingObjects ( _degree, _stroke, _fill );


                    [ _degree, _stroke, _fill ] = [ this.degrees.next, this.strokes.next, this.fills.next ];        // Number: 04, Degree: 330


                for ( let _stone = 0; _stone <= ( _i - 1 ); _stone++ )

                  this.#insertEnsuingObjects ( _degree, _stroke, _fill );


                    [ _degree, _stroke, _fill ] = [ this.degrees.next, this.strokes.next, this.fills.next ];        // Number: 05, Degree: 270


                for ( let _stone = 0; _stone <= ( _i - 1 ); _stone++ )

                  this.#insertEnsuingObjects ( _degree, _stroke, _fill );

                ////    KEYSTONE    ////////////////////////////////////////////

                    [ _degree, _stroke, _fill ] = [ this.degrees.next, this.strokes.next, this.fills.next ];        // Number: 06, Degree: 210


                for ( let _stone = 0; _stone <= ( _i - 2 ); _stone++ )

                  this.#insertEnsuingObjects ( _degree, _stroke, _fill );
            }


            ////    REVERSE COLLECTIONS    /////////////////

            // this.master.circles.reverse ( );

            // this.master.ellipses.reverse ( );

            // this.master.rectangles.reverse ( );

            // this.master.roundedRectangles.reverse ( );
        }
}
