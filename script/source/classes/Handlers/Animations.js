/**
 * @class           {Object}                  Animations        Animations handler; for drawing multiple objects in one instance
 * @property        {Array.<clObject>}        objects           CanvasLab objects
 * @property        {Array.<string|Function>} timings           Timing functions
 * @property        {number}                  periods           Period of time
 * @property        {Array.<Object>}          changes           Changes an object
 * @property        {Object}                  options           Options for this object
 */
class Animations
{
    _objects = undefined;
    _timings = undefined;
    _periods = undefined;
    _changes = undefined;

    #timings =
    {
        ////    EASE-IN    /////////////////////////////////////

            'easeInSine':       ( timeFraction ) => 1 - Math.cos ( ( timeFraction * Math.PI ) / 2 ),
            'easeInCubic':      ( timeFraction ) => timeFraction * timeFraction * timeFraction,
            'easeInQuint':      ( timeFraction ) => timeFraction * timeFraction * timeFraction * timeFraction * timeFraction,
            'easeInCirc':       ( timeFraction ) => 1 - Math.sqrt ( 1 - Math.pow ( timeFraction, 2 ) ),
            'easeInElastic':    ( timeFraction ) => ( timeFraction === 0 ) ? 0 : ( timeFraction === 1 ) ? 1 : - Math.pow ( 2, 10 * timeFraction - 10 ) * Math.sin ( ( timeFraction * 10 - 10.75 ) * ( ( 2 * Math.PI ) / 3 ) ),
            'easeInQuad':       ( timeFraction ) => timeFraction * timeFraction,
            'easeInQuart':      ( timeFraction ) => timeFraction * timeFraction * timeFraction * timeFraction,
            'easeInExpo':       ( timeFraction ) => ( timeFraction === 0 ) ? 0 : Math.pow ( 2, 10 * timeFraction - 10 ),
            'easeInBack':       ( timeFraction ) => ( 1.70158 + 1 ) * timeFraction * timeFraction * timeFraction - 1.70158 * timeFraction * timeFraction,

        ////    EASE-OUT    ////////////////////////////////////

            'easeOutSine':      ( timeFraction ) => Math.sin ( ( timeFraction * Math.PI ) / 2 ),
            'easeOutCubic':     ( timeFraction ) => 1 - Math.pow ( 1 - timeFraction, 3 ),
            'easeOutQuint':     ( timeFraction ) => 1 - Math.pow ( 1 - timeFraction, 5 ),
            'easeOutCirc':      ( timeFraction ) => Math.sqrt ( 1 - Math.pow ( timeFraction - 1, 2 ) ),
            'easeOutElastic':   ( timeFraction ) => ( timeFraction === 0 ) ? 0 : ( timeFraction === 1 ) ? 1 : Math.pow ( 2, -10 * timeFraction ) * Math.sin ( ( timeFraction * 10 - 0.75 ) * ( ( 2 * Math.PI ) / 3 ) ) + 1,
            'easeOutQuad':      ( timeFraction ) => 1 - ( 1 - timeFraction ) * ( 1 - timeFraction ),
            'easeOutQuart':     ( timeFraction ) => 1 - Math.pow ( 1 - timeFraction, 4 ),
            'easeOutExpo':      ( timeFraction ) => ( timeFraction === 1 ) ? 1 : 1 - Math.pow ( 2, -10 * timeFraction ),
            'easeOutBack':      ( timeFraction ) => 1 + ( 1.70158 + 1 ) * Math.pow ( timeFraction - 1, 3 ) + 1.70158 * Math.pow ( timeFraction - 1, 2 ),

        ////    EASE-IN-OUT    /////////////////////////////////

            'easeInOutSine':    ( timeFraction ) => - ( Math.cos ( Math.PI * timeFraction ) - 1 ) / 2,
            'easeInOutCubic':   ( timeFraction ) => ( timeFraction < 0.5 ) ? 4 * timeFraction * timeFraction * timeFraction : 1 - Math.pow ( -2 * timeFraction + 2, 3 ) / 2,
            'easeInOutQuint':   ( timeFraction ) => ( timeFraction < 0.5 ) ? 16 * timeFraction * timeFraction * timeFraction * timeFraction * timeFraction : 1 - Math.pow ( -2 * timeFraction + 2, 5 ) / 2,
            'easeInOutCirc':    ( timeFraction ) => ( timeFraction < 0.5 ) ? ( 1 - Math.sqrt ( 1 - Math.pow ( 2 * timeFraction, 2 ) ) ) / 2 : ( Math.sqrt ( 1 - Math.pow ( -2 * timeFraction + 2, 2 ) ) + 1 ) / 2,
            'easeInOutElastic': ( timeFraction ) => ( timeFraction === 0 ) ? 0 : ( timeFraction === 1 ) ? 1 : ( timeFraction < 0.5 ) ? - ( Math.pow ( 2, 20 * timeFraction - 10 ) * Math.sin ( ( 20 * timeFraction - 11.125 ) * ( ( 2 * Math.PI ) / 4.5 ) ) ) / 2 : ( Math.pow ( 2, -20 * timeFraction + 10 ) * Math.sin ( ( 20 * timeFraction - 11.125 ) * ( 2 * Math.PI ) / 4.5 ) ) / 2 + 1,
            'easeInOutQuad':    ( timeFraction ) => ( timeFraction < 0.5 ) ? 2 * timeFraction * timeFraction : 1 - Math.pow ( -2 * timeFraction + 2, 2 ) / 2,
            'easeInOutQuart':   ( timeFraction ) => ( timeFraction < 0.5 ) ? 8 * timeFraction * timeFraction * timeFraction * timeFraction : 1 - Math.pow ( -2 * timeFraction + 2, 4 ) / 2,
            'easeInOutExpo':    ( timeFraction ) => ( timeFraction === 0 ) ? 0 : ( timeFraction === 1 ) ? 1 : ( timeFraction < 0.5 ) ? Math.pow ( 2, 20 * timeFraction - 10 ) / 2 : ( 2 - Math.pow ( 2, -20 * timeFraction + 10 ) ) / 2,
            'easeInOutBack':    ( timeFraction ) => ( timeFraction < 0.5 ) ? ( Math.pow ( 2 * timeFraction, 2 ) * ( ( ( 1.70158 * 1.525 ) + 1 ) * 2 * timeFraction - ( 1.70158 * 1.525 ) ) ) / 2 : ( Math.pow ( 2 * timeFraction - 2, 2 ) * ( ( ( 1.70158 * 1.525 ) + 1 ) * ( timeFraction * 2 - 2 ) + ( 1.70158 * 1.525 ) ) + 2 ) / 2
    }

    _options =
    {
        cache:  false,
        active: false
    }

    _queue = new Queue;
    #cache = new Array;

    /**
     * Creates an animation instance
     * @property        {Array.<clObject>}        objects           CanvasLab objects
     * @property        {Array.<string|Function>} timings           Timing functions
     * @property        {number}                  period            Period of time
     * @property        {Array.<Object>}          changes           Changes an objects
     */
    constructor ( objects, timings, period, changes )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isNumber = VALIDATION.isNumber;

            this._end              = UTILITIES.animation.end;
            this._getInvertedAngle = UTILITIES.animation.getInvertedAngle;

            Object.defineProperty ( this, 'cache',  PROPERTY_BLOCKS.animation.cache  );
            Object.defineProperty ( this, 'cancel', PROPERTY_BLOCKS.animation.cancel );
            Object.defineProperty ( this, 'period', PROPERTY_BLOCKS.animation.period );
            Object.defineProperty ( this, 'queue',  PROPERTY_BLOCKS.animation.queue  );

        this.objects = objects;
        this.timings = timings;
        this.period  = period;
        this.changes = changes;

        this._options.active = true;
    }

    ////    [ OBJECT ]    //////////////////////////////////

        /**
         * Set objects to animate
         * @public
         * @function
         * @param           {clObject} value                            Canvas Lab objects
         */
        set objects ( value )
        {
            this._objects = value;
        }

        /**
         * Get objects
         * @readOnly
         * @function
         * @return          {clObject}                                  Canvas Lab objects
         */
        get objects ( )
        {
            return this._objects;
        }

    ////    [ TIMING ]    //////////////////////////////////

        /**
         * Set timings
         * @public
         * @function
         * @param           {string|Function} value                     Timing function
         */
        set timings ( value )
        {
            if ( Array.isArray ( value ) )
            {
                let _results = new Array;


                for ( let _entry of value )

                    ( typeof _entry === 'string' )

                        ? _results.push ( this.#timings [ _entry ] )

                        : _results.push ( _entry );


                this._timings = _results;
            }
            else

                this._timings = ( value != undefined )

                                    ? ( typeof value === 'string' )

                                          ? this.#timings [ value ]

                                          : value

                                    : this._timings;
        }

        /**
         * Get timing
         * @readOnly
         * @function
         * @return          {Function}                                  Timing function
         */
        get timings ( )
        {
            return this._timings;
        }

    ////    [ PERIOD ]    //////////////////////////////////

        /**
         * Set period of animation
         * @public
         * @function
         * @param           {number} value                              Period of animation-time
         * @see             {@link PROPERTY_BLOCKS.animation.period}
         */
        set period ( value ) { }

        /**
         * Get period of animation
         * @readOnly
         * @function
         * @return          {number}                                    Period of animation-time
         * @see             {@link PROPERTY_BLOCKS.animation.period}
         */
        get period ( ) { }

    ////    [ CHANGE ]    //////////////////////////////////

        /**
         * Set changes
         * @public
         * @function
         * @param           {clChange} value                            Canvas Lab changes object
         */
        set changes ( value )
        {
            this._changes = value;
        }

        /**
         * Get changes
         * @readOnly
         * @function
         * @return          {clChange}                                  Canvas Lab changes object
         */
        get changes ( )
        {
            return this._changes;
        }

    ////    [ CACHE ]    ///////////////////////////////////

        /**
         * Set cache
         * @public
         * @function
         * @param           {boolean} value                             True || False
         * @see             {@link PROPERTY_BLOCKS.animation.cache}
         */
        set cache ( value ) { }

        /**
         * Get cache
         * @readOnly
         * @function
         * @return          {boolean}                                   True || False
         * @see             {@link PROPERTY_BLOCKS.animation.cache}
         */
        get cache ( ) { }

    ////    [ QUEUE ]    ///////////////////////////////////

        /**
         * Set queue
         * @public
         * @function
         * @param           {Queue} value                               Queue object
         * @see             {@link PROPERTY_BLOCKS.animation.queue}
         */
        set queue ( value ) { }

        /**
         * Get queue
         * @readOnly
         * @function
         * @return          {Queue}                                     Queue object
         * @see             {@link PROPERTY_BLOCKS.animation.queue}
         */
        get queue ( ) { }

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

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Cache object
         * @private
         * @function
         * @param           {clObject} object                           Canvas Lab object
         */
        _cacheObjects ( id )
        {
            let _object = this.objects [ id ];


            switch ( _object.constructor.name )
            {
                case 'Circle':

                    _object = new Circle ( _object.point, _object.radius, undefined, _object.stroke );

                    break;

                case 'Ellipse':

                    _object = new Ellipse ( _object.point, undefined, undefined, _object.stroke );

                    break;

                case 'Rectangle':

                    _object = new Rectangle ( _object.point, undefined, undefined, _object.stroke );

                    break;

                case 'RoundedRectangle':

                    _object = new RoundedRectangle ( _object.point, undefined, undefined, _object.stroke );

                    break;

                case 'Text':

                    _object = new Text (
                                  _object.point,
                                  _object.text,
                                  _object.type,
                                  _object.size,
                                  _object.weight,
                                  _object.maxWidth,
                                  _object.offset,
                                  _object.stroke,
                                  _object.fill,
                                  _object.shadow,
                                  _object.canvas
                              );

                    break;
            }


            this.#cache.push ( _object );
        }

        /**
         * Checks whether queue is set
         * @private
         * @function
         */
        _checkQueue ( )
        {
            if ( this.queue.isSet )
            {
                let _transition = this.queue.next;          // Get initial ( and subsequent ) queue entries


                this.objects = this._getObjects ( _transition );

                this.timings = this._getTimings ( _transition );

                this.period  = _transition.period;

                this.changes = _transition.change;
            }
        }

        /**
         * Clears canvas
         * @private
         * @function
         * @param           {clObject} object                           Canvas Lab object
         */
        _clearCanvas ( )
        {
            let _object = this.objects [ 0 ];

            let _canvas = document.getElementById ( _object.canvas );


            if ( _canvas )  // @TODO: identify why this check has to take place periodically !

                _object._canvas.clearRect ( 0, 0, _canvas.width, _canvas.height );
        }

        /**
         * Draw cached object(s)
         * @private
         * @function
         */
        _drawCache ( )
        {
            if ( this.#cache.length > 0 )

                for ( let _entry of this.#cache )
                {
                    _entry.stroke.color.alpha = 0.35;

                    _entry.draw ( );

                    _entry.stroke.color.alpha = 1;
                }
        }

        /**
         * End animation
         * @private
         * @function
         * @see             {@link UTILITIES.animation.end}
         */
        _end ( ) { }

        /**
         * Returns an inverted angle; of 360 degrees
         * @private
         * @function
         * @param           {number} angle                              Angle to convert
         * @return          {number}                                    Inverted angle
         * @see             {@link UTILITIES.animation.getInvertedAngle}
         */
        _getInvertedAngle ( angle ) { }

        /**
         * Returns an array of objects based on the transitions object type
         * @private
         * @function
         * @param           {Transition} transition                     Animation transition instance
         * @return          {Array}                                     Array of objects
         */
        _getObjects ( transition )
        {
            let _collections = [ 'Circles', 'Ellipses', 'Rectangles', 'RoundedRectangles', 'Texts' ]

            let _array       = new Array;

            let _type        = transition.object.constructor.name;


            return ( _collections.includes ( _type ) ) ? _array.concat ( transition.object )

                                                       : transition.object;
        }

        /**
         * Returns an array of timings based on the transition timing type
         * @private
         * @function
         * @param           {Transition} transition                     Animation transition instance
         * @return          {Array}                                     Array of timings
         */
        _getTimings ( transition )
        {
            let _results = undefined;


            if ( Array.isArray ( transition.timing ) )

                _results = transition.timing;

            else
            {
                let _length  = this.objects.length;

                    _results = new Array;


                for ( let _i = 0; _i < _length; _i++ )

                    _results.push ( transition.timing );
            }


            return _results;
        }

        /**
         * Returns a point based off of the direction & distance passed
         * @private
         * @function
         * @param           {number} direction                          Direction to point; in degrees
         * @param           {number} distance                           Distance to point
         * @return          {Point}                                     X & Y coordinates
         */
        _getPointByDegreeNDistance ( id, direction, distance )
        {
            let _point = new Point;

            let _angle = ( direction % 360 );


                _point.x = this.objects [ id ].position.origin.x - Math.cos ( _angle * Math.PI / 180 ) * distance;

                _point.y = this.objects [ id ].position.origin.y - Math.sin ( _angle * Math.PI / 180 ) * distance;


            return _point;
        }

        /**
         * Caches current objects
         * @private
         * @function
         */
        _setCache ( )
        {
            if ( this.queue.isSet  &&  ! this.queue.isEnd )
            {
                for ( let _id in this.changes )

                    if ( this.changes [ _id ].cache )

                        this._cacheObjects ( _id );


                this.animate ( );
            }
            else

                console.info ( 'animations complete !' );
        }

        /**
         * Set Position data
         * @private
         * @function
         */
        _setPositionData ( )
        {
            for ( let _id in this.objects )
            {
                let _object = this.objects [ _id ];

                let _change = this.changes [ _id ];


                for ( let _type in _change )
                {
                    let _difference = _change [ _type ];


                    switch ( _type )
                    {
                        case 'point':

                            _object.position.origin    = _object.point;

                            _object.position.distance  = _difference;

                            _object.position.direction = _difference;

                            break;

                        case 'move':

                            _object.position.origin = _object.point;


                            // Whether to invert degree
                            let _point = ( _difference.invert ) ? this._getPointByDegreeNDistance ( _id, this._getInvertedAngle ( _difference.degree ), _difference.distance )

                                                                : this._getPointByDegreeNDistance ( _id, _difference.degree, _difference.distance );


                            _object.position.distance  = _point;

                            _object.position.direction = _point;

                            break;

                        case 'radius':

                            // code . . .

                            break;

                        case 'rotate':

                            // code . . .

                            break;

                        case 'strokeColor':

                            // code . . .

                            break;

                        case 'strokeAlpha':

                            // code . . .

                            break;

                        case 'fillColor':

                            // code . . .

                            break;

                        case 'fillAlpha':

                            // code . . .

                            break;

                        case 'fillLinear':
                        case 'fillRadial':
                        case 'fillConic':

                            // code . . .

                            break;

                        case 'cache':

                            this.cache = _difference;

                            break;
                    }
                }
            }
        }

        /**
         * Calculates an animation transition
         * @private
         * @async
         * @function
         * @param           {clObject} object                           Canvas Lab object
         * @param           {number}   progress                         Progress of transition; 0 - 1
         */
        async _transition ( id, progress )
        {
            let _object = this._objects [ id ];

            let _change = this._changes [ id ];


            for ( let _type in _change )
            {
                let _amount = _change [ _type ];


                switch ( _type )
                {
                    case 'point':
                    case 'move':

                        _object.point =
                        {
                            x: _object.position.origin.x + ( _object.position.distance * progress ) * Math.cos ( _object.position.direction ),

                            y: _object.position.origin.y + ( _object.position.distance * progress ) * Math.sin ( _object.position.direction )
                        }

                        break;

                    case 'radius':

                        _object.radius = _amount * progress;

                        break;

                    case 'rotate':

                        _object.rotate ( _amount );

                        break;

                    case 'strokeColor':

                        _object.stroke.color.cycle ( _object.stroke.color, _amount, progress, 1 );

                        break;

                    case 'strokeAlpha':

                        _object.stroke.color.alpha = _amount * progress;

                        break;

                    case 'fillColor':

                        _object.fill.color.cycle ( _object.fill.color, _amount, progress, 1 );

                        break;

                    case 'fillAlpha':

                        _object.fill.color.alpha = _amount * progress;

                        break;

                    case 'fillLinear':
                    case 'fillRadial':
                    case 'fillConic':

                        for ( let _entry in _amount )
                        {
                            let _start = _object.fill.gradient.stops [ _entry ];

                            let _end   = _amount [ _entry ];


                            _object.fill.gradient.stops [ _entry ].color.cycle ( _start.color, _end.color, progress, 1 );
                        }

                        break;

                    case 'rotate':

                        // code . . .

                        break;

                    case 'lineTo':

                        if ( Array.isArray ( _amount ) )
                        {
                            for ( let _entry of _amount )
                            {
                                let _line = new Line ( _object.point, _entry.point );

                                    _line.draw ( );
                            }
                        }
                        else
                        {
                            let _line = new Line ( _object.point, _amount.point );

                                _line.draw ( );
                        }


                        break;
                }
            }
        }

        /**
         * Cancels animation
         * @readOnly
         * @function
         * @see             {@link PROPERTY_BLOCKS.animation.cancel}
         */
        get cancel ( ) { }

    ////    ANIMATE    /////////////////////////////////////

        /**
         * Initiates animation
         * @public
         * @function
         */
        animate ( )
        {
            ////    PREPARATORY    /////////////////////////

                this._checkQueue ( );

                this._setPositionData ( );

            ////    PROPERTIES    //////////////////////////

                let _objects = this._objects;

                let _timings = this._timings;

                let _period  = this._period;

                let _changes = this._changes;

                let _active  = this._options.active;

            ////    FUNCTIONS    ///////////////////////////

                let _transition   = ( id, progress ) => this._transition ( id, progress );

                let _clearCanvas  = ( )              => this._clearCanvas ( );

                let _drawCache    = ( )              => this._drawCache ( );

                let _setCache     = ( )              => this._setCache ( );

                let _end          = ( )              => this._end ( );

            ////////////////////////////////////////////////
            ////    ANIMATE    /////////////////////////////

                let _timeFraction = undefined;

                let _progress     = undefined;


                function _animate ( )
                {
                    let _start = performance.now ( );


                    requestAnimationFrame (

                        function animate ( time )
                        {
                            _clearCanvas ( );


                            for ( let _id in _objects )
                            {
                                let _object = _objects [ _id ];

                                let _timing = _timings [ _id ];

                                let _change = _changes [ _id ];


                                _timeFraction =  ( time - _start ) / _period;   // timeFraction goes from 0 to 1

                                _progress     = _timing ( _timeFraction );      // calculate the current animation state

                /* normalize */ _progress     = ( true && _progress < 0 ) ? 0 : _progress;


                                _transition ( _id, _progress );

                                _object.draw ( );

                                _drawCache ( );
                            }


                            ( _active ) ? ( _timeFraction < 1 )                 // Resolve

                                              ? requestAnimationFrame ( animate )

                                              : _setCache ( )

                                        : _end ( );
                        }
                    );
                }

            ////////////////////////////////////////////////
            ////    INITIALIZE    //////////////////////////

                if ( this._objects  &&  this._period )

                    _animate ( );

                else

                    console.warn ( '[ Animations ] :: The "objects" and/or "period" properties are invalid !' );
        }
}
