/**
 * @class           {Object}   Animation                        Animation handler
 * @property        {function} timing                           Timing function
 * @property        {function} draw                             Draw function
 * @property        {number}   duration                         Duration of animation
 */
class Animation
{
    _timing   = undefined;
    _draw     = undefined;
    _duration = 2000;

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

    #queue = new Queue;

    /**
     * Creates an animation instance
     * @param           {number}   duration                         Duration of animation
     * @param           {Function} timing                           Timing function
     * @param           {Function} draw                             Draw function
     */
    constructor ( duration, timing, draw )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isNumber = VALIDATION.isNumber;

        this.duration = duration;
        this.timing   = timing;
        this.draw     = draw;
    }

    ////    [ TIMING ]    //////////////////////////////////

        /**
         * Set timing
         * @public
         * @function
         * @param           {function} value                            Timing function
         */
        set timing ( value )
        {
            switch ( typeof value )
            {
                case 'string':

                    this._timing = ( this.#timings [ value ] != undefined ) ? this.#timings [ value ] : this._timing;

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
         * @return          {function}                                  Timing function
         */
        get timing ( )
        {
            return this._timing;
        }

    ////    [ DRAW ]    ////////////////////////////////////

        /**
         * Set draw function
         * @public
         * @function
         * @param           {function}                                  Draw function
         */
        set draw ( value )
        {
            this._draw = ( typeof value === 'function' ) ? value : this._draw;
        }

        /**
         * Get draw function
         * @readOnly
         * @function
         * @return          {function}                                  Draw function
         */
        get draw ( )
        {
            return this._draw;
        }

    ////    [ DURATION ]    ////////////////////////////////

        /**
         * Set duration
         * @public
         * @function
         * @param           {number} value                              Duration
         */
        set duration ( value )
        {
            this._duration = ( this._isNumber ( value ) ) ? value : this._duration;
        }

        /**
         * Get duration
         * @readOnly
         * @function
         * @return          {number}                                    Duration
         */
        get duration ( )
        {
            return this._duration;
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
         * @see             {Validation.isNumber}
         */
        _isNumber ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Checks whether queue property is set, and sets duration, timing, and draw properties respectively
         * @private
         * @function
         */
        _checkQueue ( )
        {
            if ( this.queue.isSet )
            {
                let _animate  = this.queue.next;


                this.duration = _animate.duration;

                this.timing   = _animate.timing;

                this.draw     = _animate.draw;
            }
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
                duration:   this._duration,                 // {number}
                timing:     this._timing,                   // {function}
                draw:       this._draw,                     // {function}
                queue:      this.queue,                     // {Queue}
                callback:   ( ) => this.animate ( )         // {function}
            }


            return _results;
        }

        /**
         * Initiates animation
         * @public
         * @function
         */
        animate ( )
        {
            let _props = this._getAnimationProperties ( );


            if ( this._timing  &&  this._draw )
            {
                let _start = performance.now ( );


                requestAnimationFrame (

                    function animate ( time )
                    {
                        let _timeFraction =  ( time - _start ) / _props.duration;                   // timeFraction goes from 0 to 1

                        let _progress     = _props.timing ( _timeFraction );                        // calculate the current animation state


                        _props.draw ( _progress );                                                  // draw it


                        if ( _timeFraction < 1 )

                            requestAnimationFrame ( animate );

                        else

                            if ( _props.queue.isSet  &&  ! _props.queue.isEnd )

                                _props.callback ( );

                            else

                                console.log ( 'animation complete !' );
                    }
                );
            }
            else

                console.warn ( '[ Animation ] :: The "timing" and/or "draw" function(s) are presently invalid !' );
        }
}
