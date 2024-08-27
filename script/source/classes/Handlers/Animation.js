/**
 * @class           {Object}   Animation                        Animation handler
 * @property        {clObject} object                           CanvasLab object
 * @property        {Function} timing                           Timing function
 * @property        {number}   period                           Period of time
 * @property        {Object}   change                           Change to object
 * @property        {Object}   options                          Options for this object
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

    #options =
    {
        cache: false
    }

    #queue = new Queue;
    #cache = new Array;

    /**
     * Creates an animation instance
     * @param           {clObject} object                           Canvas Lab object
     * @param           {Function} timing                           Timing function
     * @param           {number}   period                           Period of time
     * @param           {Object}   change                           Change to object
     */
    constructor ( object, timing, period, change )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isNumber  = VALIDATION.isNumber;

        this.object = object;
        this.timing = timing;
        this.period = period;
        this.change = change;
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
         */
        set period ( value )
        {
            this._period = ( typeof value === 'number' && value > 0 ) ? value : this._period;
        }

        /**
         * Get period of animation
         * @readOnly
         * @function
         * @return          {number}                                    Period of animation-time
         */
        get period ( )
        {
            return this._period;
        }

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

    ////    [ CHANGE ]    //////////////////////////////////

        /**
         * Set cache
         * @public
         * @function
         * @param           {boolean} value                             True || False
         */
        set cache ( value )
        {
            this.#options.cache = ( typeof value == 'boolean' ) ? value : this.#options.cache;
        }

        /**
         * Get cache
         * @readOnly
         * @function
         * @return          {boolean}                                   True || False
         */
        get cache ( )
        {
            return this.#options.cache;
        }

    ////    [ QUEUE ]    ///////////////////////////////////

        /**
         * Set queue
         * @public
         * @function
         * @param           {Queue} value                               Queue object
         */
        set queue ( value )
        {
            this.#queue = ( value instanceof Queue ) ? value : this.#queue;
        }

        /**
         * Get queue
         * @readOnly
         * @function
         * @return          {Queue}                                     Queue object
         */
        get queue ( )
        {
            return this.#queue;
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

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Cache object
         * @private
         * @function
         * @param           {clObject} object                           Canvas Lab object
         */
        _cacheObject ( object )
        {
            let _object = undefined;


            switch ( object.constructor.name )
            {
                case 'Circle':

                    _object = new Circle ( object.point );

                    // _object = new Circle (
                    //               object.point,
                    //               object.radius,
                    //               object.angle,
                    //               object.stroke,
                    //               object.fill,
                    //               object.shadow,
                    //               object.canvas
                    //           );

                    break;

                case 'Ellipse':

                    _object = new Ellipse (
                                  object.point,
                                  object.radius,
                                  object.angle,
                                  object.stroke,
                                  object.fill,
                                  object.shadow,
                                  object.canvas
                              );

                    break;

                case 'Rectangle':

                    _object = new Rectangle (
                                  object.point,
                                  object.aspect,
                                  object.round,
                                  object.stroke,
                                  object.fill,
                                  object.shadow,
                                  object.canvas
                              );

                    break;

                case 'RoundedRectangle':

                    _object = new RoundedRectangle (
                                  object.point,
                                  object.aspect,
                                  object.round,
                                  object.stroke,
                                  object.fill,
                                  object.shadow,
                                  object.canvas
                              );

                    break;

                case 'Text':

                    _object = new Text (
                                  object.point,
                                  object.text,
                                  object.type,
                                  object.size,
                                  object.weight,
                                  object.maxWidth,
                                  object.offset,
                                  object.stroke,
                                  object.fill,
                                  object.shadow,
                                  object.canvas
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
                let _animate = this.queue.next;             // @TODO: Figure out whey this is here and document it better.


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
         * Returns properties animation properties for execution
         * @private
         * @function
         * @return          {Object}                                    Animation properties
         */
        _getAnimationProperties ( )
        {
            this._checkQueue ( );


            let _results =
            {
                object: this._object,                       // {clObject}
                timing: this._timing,                       // {Function}
                period: this._period,                       // {number}
                change: this._change,                       // {clChange}
                queue:  this.queue,                         // {Queue}
                callback: ( ) => this.animate ( )           // {Function}
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
        _getPointByDegreeNDistance ( direction, distance )
        {
            let _point = new Point;

            let _angle = ( direction % 360 );


                _point.x = this.object.location.origin.x + Math.cos ( _angle * Math.PI / 180 ) * distance;

                _point.y = this.object.location.origin.y + Math.sin ( _angle * Math.PI / 180 ) * distance;


            return _point;
        }

        /**
         * Set Location data
         * @private
         * @function
         */
        _setLocationData ( )
        {
            for ( let _type in this.change )
            {
                let _difference = this.change [ _type ];


                switch ( _type )
                {
                    case 'point':

                        this.object.location.origin    = this.object.point;

                        this.object.location.distance  = _difference;

                        this.object.location.direction = _difference;

                        break;

                    case 'move':

                        this.object.location.origin = this.object.point;


                        _difference.degree          = ( this.change.rotatePoint )

                                                          ? _difference.degree + this.change.rotatePoint

                                                          : _difference.degree;


                        let _point = this._getPointByDegreeNDistance ( _difference.degree, _difference.distance );


                        this.object.location.distance  = _point;

                        this.object.location.direction = _point;

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
                let _difference = this.change [ _type ];


                switch ( _type )
                {
                    case 'point':
                    case 'move':

                        object.point =
                        {
                            x: object.location.origin.x + ( object.location.distance * progress ) * Math.cos ( object.location.direction ),

                            y: object.location.origin.y + ( object.location.distance * progress ) * Math.sin ( object.location.direction )
                        }

                        break;

                    case 'radius':

                        object.radius = _difference * progress;

                        break;

                    case 'rotate':

                        object.rotate ( _difference );

                        break;

                    case 'strokeColor':

                        object.stroke.color.cycle ( object.stroke.color, _difference, progress, 1 );

                        break;

                    case 'strokeAlpha':

                        object.stroke.color.alpha = _difference * progress;

                        break;

                    case 'fillColor':

                        object.fill.color.cycle ( object.fill.color, _difference, progress, 1 );

                        break;

                    case 'fillAlpha':

                        object.fill.color.alpha = _difference * progress;

                        break;

                    case 'fillLinear':
                    case 'fillRadial':
                    case 'fillConic':

                        for ( let _entry in _difference )
                        {
                            let _start = object.fill.gradient.stops [ _entry ];

                            let _end   = _difference [ _entry ];


                            object.fill.gradient.stops [ _entry ].color.cycle ( _start.color, _end.color, progress, 1 );
                        }

                        break;

                    case 'rotate':

                        console.log ( 'fuck you !' );

                        console.log ( '_difference:', _difference );

                        break;
                }
            }
        }

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

                this._setLocationData ( );

            ////    PROPERTIES    //////////////////////////

                let _object = this._object;

                let _timing = this._timing;

                let _period = this._period;

                let _change = this._change;

                let _queue  = this.queue;

                let _cache  = this.#cache;

            ////    FUNCTIONS    ///////////////////////////

                let _callback    = ( )                  => this.animate ( );

                let _transition  = ( object, progress ) => this._transition ( object, progress );

                let _clearCanvas = ( object )           => this._clearCanvas ( object );

                let _drawCache   = ( )                  => this._drawCache ( );

                let _cacheObject = ( object )           => this._cacheObject ( object );

            ////////////////////////////////////////////////
            ////    ANIMATE    /////////////////////////////

                function _animate ( )
                {
                    let _start = performance.now ( );


                    requestAnimationFrame (

                        function animate ( time )
                        {
                            let _timeFraction =  ( time - _start ) / _period;   // timeFraction goes from 0 to 1

                            let _progress     = _timing ( _timeFraction );      // calculate the current animation state

                /* normalize */ _progress     = ( true && _progress < 0 ) ? 0 : _progress;


                            _transition ( _object, _progress );


                            _clearCanvas ( _object );


                            _drawCache ( );

                            _object.draw ( );


                            if ( _timeFraction < 1 )

                                requestAnimationFrame ( animate );

                            else

                                if ( _queue.isSet  &&  ! _queue.isEnd )
                                {
                                    if ( _change.cache )

                                        _cacheObject ( _object );


                                    _callback ( );
                                }
                                else

                                    console.info ( 'animation complete !' );
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
