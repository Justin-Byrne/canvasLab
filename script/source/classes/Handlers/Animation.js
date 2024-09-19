/**
 * @class           {Object}          Animation                 Animation handler; for drawing a single object in one instance
 * @property        {clObject}        object                    CanvasLab object
 * @property        {string|Function} timing                    Timing function
 * @property        {number}          period                    Period of time
 * @property        {Object}          change                    Change to object
 * @property        {Object}          options                   Options for this object
 */
class Animation
{
    _object = undefined;
    _timing = undefined;
    _period = undefined;
    _change = undefined;

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
     * @param           {clObject}        object                    Canvas Lab object
     * @param           {string|Function} timing                    Timing function
     * @param           {number}          period                    Period of time
     * @param           {Object}          change                    Change to object
     */
    constructor ( object, timing, period, change )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isNumber = VALIDATION.isNumber;

            this._end              = UTILITIES.animation.end;
            this._getInvertedAngle = UTILITIES.animation.getInvertedAngle;

            Object.defineProperty ( this, 'cache',  PROPERTY_BLOCKS.animation.cache  );
            Object.defineProperty ( this, 'cancel', PROPERTY_BLOCKS.animation.cancel );
            Object.defineProperty ( this, 'period', PROPERTY_BLOCKS.animation.period );
            Object.defineProperty ( this, 'queue',  PROPERTY_BLOCKS.animation.queue  );

        this.object = object;
        this.timing = timing;
        this.period = period;
        this.change = change;

        this._options.active = true;
    }

    ////    [ OBJECT ]    //////////////////////////////////

        /**
         * Set object to animate
         * @public
         * @function
         * @param           {clObject} value                            Canvas Lab object
         */
        set object ( value )
        {
            this._object = value;
        }

        /**
         * Get object
         * @readOnly
         * @function
         * @return          {clObject}                                  Canvas Lab object
         */
        get object ( )
        {
            return this._object;
        }

    ////    [ TIMING ]    //////////////////////////////////

        /**
         * Set timing
         * @public
         * @function
         * @param           {string|Function} value                     Timing function
         */
        set timing ( value )
        {
            if ( value != undefined )

                switch ( typeof value )
                {
                    case 'string':

                        this._timing = this.#timings [ value ];

                        break;

                    case 'function':

                        this._timing = value;

                        break;

                    default:

                        console.warn ( `"${value}" is not a valid timing type !` );
                }
        }

        /**
         * Get timing
         * @readOnly
         * @function
         * @return          {Function}                                  Timing function
         */
        get timing ( )
        {
            return this._timing;
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
         * Set change
         * @public
         * @function
         * @param           {clChange} value                            Canvas Lab change object
         */
        set change ( value )
        {
            this._change = value;
        }

        /**
         * Get change
         * @readOnly
         * @function
         * @return          {clChange}                                  Canvas Lab change object
         */
        get change ( )
        {
            return this._change;
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
        _cacheObject ( )
        {
            let _object = undefined;


            switch ( this.object.constructor.name )
            {
                case 'Circle':

                    _object = new Circle ( this.object.point );

                    // _object = new Circle (
                    //               this.object.point,
                    //               this.object.radius,
                    //               this.object.angle,
                    //               this.object.stroke,
                    //               this.object.fill,
                    //               this.object.shadow,
                    //               this.object.canvas
                    //           );

                    break;

                case 'Ellipse':

                    _object = new Ellipse (
                                  this.object.point,
                                  this.object.radius,
                                  this.object.angle,
                                  this.object.stroke,
                                  this.object.fill,
                                  this.object.shadow,
                                  this.object.canvas
                              );

                    break;

                case 'Rectangle':

                    _object = new Rectangle (
                                  this.object.point,
                                  this.object.aspect,
                                  this.object.round,
                                  this.object.stroke,
                                  this.object.fill,
                                  this.object.shadow,
                                  this.object.canvas
                              );

                    break;

                case 'RoundedRectangle':

                    _object = new RoundedRectangle (
                                  this.object.point,
                                  this.object.aspect,
                                  this.object.round,
                                  this.object.stroke,
                                  this.object.fill,
                                  this.object.shadow,
                                  this.object.canvas
                              );

                    break;

                case 'Text':

                    _object = new Text (
                                  this.object.point,
                                  this.object.text,
                                  this.object.type,
                                  this.object.size,
                                  this.object.weight,
                                  this.object.maxWidth,
                                  this.object.offset,
                                  this.object.stroke,
                                  this.object.fill,
                                  this.object.shadow,
                                  this.object.canvas
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
                let _animate = this.queue.next;             // Get initial ( and subsequent ) queue entries


                this.object = _animate.object;

                this.timing = _animate.timing;

                this.period = _animate.period;

                this.change = _animate.change;
            }
        }

        /**
         * Clears canvas
         * @private
         * @function
         * @param           {clObject} object                           Canvas Lab object
         */
        _clearCanvas ( object )
        {
            let _canvas = document.getElementById ( object.canvas );


            if ( _canvas )  // @TODO: identify why this check has to take place periodically !

                object._canvas.clearRect ( 0, 0, _canvas.width, _canvas.height );
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

                    _entry.draw ( );
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
         * Returns a point based off of the direction & distance passed
         * @private
         * @function
         * @param           {number} direction                          Direction to point; in degrees
         * @param           {number} distance                           Distance to point
         * @return          {Point}                                     X & Y coordinates
         */
        _getPointByDegreeNDistance ( direction, distance )
        {
            let _point = new Point;

            let _angle = ( direction % 360 );


                _point.x = this.object.position.origin.x - Math.cos ( _angle * Math.PI / 180 ) * distance;

                _point.y = this.object.position.origin.y - Math.sin ( _angle * Math.PI / 180 ) * distance;


            return _point;
        }

        /**
         * Caches current object
         * @private
         * @function
         */
        _setCache ( )
        {
            if ( this.queue.isSet  &&  ! this.queue.isEnd )
            {
                if ( this.change.cache )

                    this._cacheObject ( );


                this.animate ( );
            }
            else

                console.info ( 'animation complete !' );
        }

        /**
         * Set Position data
         * @private
         * @function
         */
        _setPositionData ( )
        {
            for ( let _type in this.change )
            {
                let _difference = this.change [ _type ];


                switch ( _type )
                {
                    case 'point':

                        this.object.position.origin    = this.object.point;

                        this.object.position.distance  = _difference;

                        this.object.position.direction = _difference;

                        break;

                    case 'startPoint':

                        this.object.position.origin    = this.object.start;

                        this.object.position.distance  = _difference;

                        this.object.position.direction = _difference;

                        // code . . .

                        break;

                    case 'endPoint':

                        this.object.position.origin    = this.object.end;

                        this.object.position.distance  = _difference;

                        this.object.position.direction = _difference;

                        // code . . .

                        break;

                    case 'move':

                        this.object.position.origin = this.object.point;


                        _difference.degree = ( this.change.rotatePoint ) ? _difference.degree + this.change.rotatePoint

                                                                         : _difference.degree;


                        let _point = this._getPointByDegreeNDistance ( _difference.degree, _difference.distance );


                        this.object.position.distance  = _point;

                        this.object.position.direction = _point;

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

        /**
         * Calculates an animation transition
         * @private
         * @async
         * @function
         * @param           {clObject} object                           Canvas Lab object
         * @param           {number}   progress                         Progress of transition; 0 - 1
         */
        async _transition ( object, progress )
        {
            for ( let _type in this.change )
            {
                let _amount = this.change [ _type ];


                switch ( _type )
                {
                    case 'point':
                    case 'move':

                        object.point =
                        {
                            x: object.position.origin.x + ( object.position.distance * progress ) * Math.cos ( object.position.direction ),

                            y: object.position.origin.y + ( object.position.distance * progress ) * Math.sin ( object.position.direction )
                        }

                        break;

                    case 'startPoint':

                        object.start =
                        {
                            x: ( object.position.origin.x ) + ( object.position.distance * progress ) * Math.cos ( object.position.direction ),

                            y: ( object.position.origin.y ) + ( object.position.distance * progress ) * Math.sin ( object.position.direction )
                        }

                        break;

                    case 'endPoint':

                        object.end =
                        {
                            x: object.position.origin.x + ( object.position.distance * progress ) * Math.cos ( object.position.direction ),

                            y: object.position.origin.y + ( object.position.distance * progress ) * Math.sin ( object.position.direction )
                        }

                        break;

                    case 'radius':

                        object.radius = _amount * progress;

                        break;

                    case 'rotate':

                        object.rotate ( _amount );

                        break;

                    case 'strokeColor':

                        object.stroke.color.cycle ( object.stroke.color, _amount, progress, 1 );

                        break;

                    case 'strokeAlpha':

                        object.stroke.color.alpha = _amount * progress;

                        break;

                    case 'fillColor':

                        object.fill.color.cycle ( object.fill.color, _amount, progress, 1 );

                        break;

                    case 'fillAlpha':

                        object.fill.color.alpha = _amount * progress;

                        break;

                    case 'fillLinear':
                    case 'fillRadial':
                    case 'fillConic':

                        for ( let _entry in _amount )
                        {
                            let _start = object.fill.gradient.stops [ _entry ];

                            let _end   = _amount [ _entry ];


                            object.fill.gradient.stops [ _entry ].color.cycle ( _start.color, _end.color, progress, 1 );
                        }

                        break;

                    case 'rotate':

                        console.log ( '_amount:', _amount );

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

                let _object = this._object;

                let _timing = this._timing;

                let _period = this._period;

                let _active = this._options.active;

            ////    FUNCTIONS    ///////////////////////////

                let _transition   = ( object, progress ) => this._transition ( object, progress );

                let _clearCanvas  = ( object )           => this._clearCanvas ( object );

                let _drawCache    = ( )                  => this._drawCache ( );

                let _setCache     = ( )                  => this._setCache ( );

                let _end          = ( )                  => this._end ( );

            ////////////////////////////////////////////////
            ////    ANIMATE    /////////////////////////////

                function _animate ( )
                {
                    let _start = performance.now ( );


                    requestAnimationFrame (

                        function animate ( time )
                        {
                            _clearCanvas ( _object );


                            let _timeFraction =  ( time - _start ) / _period;   // timeFraction goes from 0 to 1

                            let _progress     = _timing ( _timeFraction );      // calculate the current animation state

                /* normalize */ _progress     = ( true && _progress < 0 ) ? 0 : _progress;


                            _transition ( _object, _progress );

                            _object.draw ( );

                            _drawCache ( );


                            ( _active ) ? ( _timeFraction < 1 )                 // Resolve

                                              ? requestAnimationFrame ( animate )

                                              : _setCache ( )

                                        : _end ( );
                        }
                    );
                }

            ////////////////////////////////////////////////
            ////    INITIALIZE    //////////////////////////

                if ( this._object  &&  this._period )

                    _animate ( );

                else

                    console.warn ( '[ Animation ] :: The "object" and/or "period" properties are invalid !' );
        }
}
