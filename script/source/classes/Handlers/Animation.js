class Animation
{
    _timing = undefined;

    _position =
    {
        start: undefined
    }

    static #timings =
    {
        // linear:       undefined,
        // steps:        undefined,
        // cubic-bezier: undefined,
        ease:
        {
            in:
            {
                sine:    ( timeFraction ) => 1 - Math.cos ( ( timeFraction * Math.PI ) / 2),

                cubic:   ( timeFraction ) => timeFraction * timeFraction * timeFraction,

                quint:   ( timeFraction ) => timeFraction * timeFraction * timeFraction * timeFraction * timeFraction,

                circ:    ( timeFraction ) => 1 - Math.sqrt ( 1 - Math.pow ( timeFraction, 2 ) ),

                elastic: ( timeFraction ) => ( timeFraction === 0 ) ? 0 : ( timeFraction === 1 ) ? 1 : - Math.pow ( 2, 10 * timeFraction - 10 ) * Math.sin ( ( timeFraction * 10 - 10.75 ) * ( ( 2 * Math.PI ) / 3 ) ),

                quad:    ( timeFraction ) => timeFraction * timeFraction,

                quart:   ( timeFraction ) => timeFraction * timeFraction * timeFraction * timeFraction,

                expo:    ( timeFraction ) => ( timeFraction === 0 ) ? 0 : Math.pow ( 2, 10 * timeFraction - 10 ),

                back:    ( timeFraction ) => ( 1.70158 + 1 ) * timeFraction * timeFraction * timeFraction - 1.70158 * timeFraction * timeFraction
            },
            out:
            {
                sine:    ( timeFraction ) => Math.sin ( ( timeFraction * Math.PI ) / 2 ),

                cubic:   ( timeFraction ) => 1 - Math.pow ( 1 - timeFraction, 3 ),

                quint:   ( timeFraction ) => 1 - Math.pow ( 1 - timeFraction, 5 ),

                circ:    ( timeFraction ) => Math.sqrt ( 1 - Math.pow ( timeFraction - 1, 2 ) ),

                elastic: ( timeFraction ) => ( timeFraction === 0 ) ? 0 : ( timeFraction === 1 ) ? 1 : Math.pow ( 2, -10 * timeFraction ) * Math.sin ( ( timeFraction * 10 - 0.75 ) * ( ( 2 * Math.PI ) / 3 ) ) + 1,

                quad:    ( timeFraction ) => 1 - ( 1 - timeFraction ) * ( 1 - timeFraction ),

                quart:   ( timeFraction ) => 1 - Math.pow ( 1 - timeFraction, 4 ),

                expo:    ( timeFraction ) => ( timeFraction === 1 ) ? 1 : 1 - Math.pow ( 2, -10 * timeFraction ),

                back:    ( timeFraction ) => 1 + ( 1.70158 + 1 ) * Math.pow ( timeFraction - 1, 3 ) + 1.70158 * Math.pow ( timeFraction - 1, 2 )
            },
            inout:
            {
                sine:    ( timeFraction ) => - ( Math.cos ( Math.PI * timeFraction ) - 1 ) / 2,

                cubic:   ( timeFraction ) => ( timeFraction < 0.5 ) ? 4 * timeFraction * timeFraction * timeFraction : 1 - Math.pow ( -2 * timeFraction + 2, 3 ) / 2,

                quint:   ( timeFraction ) => ( timeFraction < 0.5 ) ? 16 * timeFraction * timeFraction * timeFraction * timeFraction * timeFraction : 1 - Math.pow ( -2 * timeFraction + 2, 5 ) / 2,

                circ:    ( timeFraction ) => ( timeFraction < 0.5 ) ? ( 1 - Math.sqrt ( 1 - Math.pow ( 2 * timeFraction, 2 ) ) ) / 2 : ( Math.sqrt ( 1 - Math.pow ( -2 * timeFraction + 2, 2 ) ) + 1 ) / 2,

                elastic: ( timeFraction ) => ( timeFraction === 0 ) ? 0 : ( timeFraction === 1 ) ? 1 : ( timeFraction < 0.5 ) ? - ( Math.pow ( 2, 20 * timeFraction - 10 ) * Math.sin ( ( 20 * timeFraction - 11.125 ) * ( ( 2 * Math.PI ) / 4.5 ) ) ) / 2 : ( Math.pow ( 2, -20 * timeFraction + 10 ) * Math.sin ( ( 20 * timeFraction - 11.125 ) * ( 2 * Math.PI ) / 4.5 ) ) / 2 + 1,

                quad:    ( timeFraction ) => ( timeFraction < 0.5 ) ? 2 * timeFraction * timeFraction : 1 - Math.pow ( -2 * timeFraction + 2, 2 ) / 2,

                quart:   ( timeFraction ) => ( timeFraction < 0.5 ) ? 8 * timeFraction * timeFraction * timeFraction * timeFraction : 1 - Math.pow ( -2 * timeFraction + 2, 4 ) / 2,

                expo:    ( timeFraction ) => ( timeFraction === 0 ) ? 0 : ( timeFraction === 1 ) ? 1 : ( timeFraction < 0.5 ) ? Math.pow ( 2, 20 * timeFraction - 10 ) / 2 : ( 2 - Math.pow ( 2, -20 * timeFraction + 10 ) ) / 2,

                back:    ( timeFraction ) => ( timeFraction < 0.5 ) ? ( Math.pow ( 2 * timeFraction, 2 ) * ( ( ( 1.70158 * 1.525 ) + 1 ) * 2 * timeFraction - ( 1.70158 * 1.525 ) ) ) / 2 : ( Math.pow ( 2 * timeFraction - 2, 2 ) * ( ( ( 1.70158 * 1.525 ) + 1 ) * ( timeFraction * 2 - 2 ) + ( 1.70158 * 1.525 ) ) + 2 ) / 2
            }
        }
    }

    static #tools =
    {
        /**
         * Gets property accessors from camel case string  for bracket notation
         * @param       {string} string                         Camel case string to split
         * @return      {Array.<String>}                        Array of strings
         */
        getPropertyAccessors: ( string ) =>
        {
            let _accessors = string.split ( /(?=[A-Z])/ );

                _accessors.shift ( );


            for ( let _i = 0; _i < _accessors.length; _i++ )

                _accessors [ _i ] = _accessors [ _i ].toLowerCase ( );


            return _accessors;
        }
    }

    constructor ( timing )
    {
        this._timing = timing;
    }

    /**
     * Returns an easing function based on the input type
     * @param           {string} type                               Type of easing animation, in camel case: i.e.: 'easeInSine'
     * @return          {function}                                  Easing function from #timing.ease
     */
    set timing ( type )
    {
        let _accessors = ( type != undefined ) ? this.#tools.getPropertyAccessors ( type ) : this.#tools.getPropertyAccessors ( this.animation );


        this._timing = this.#timings.ease [ _accessors [ 0 ] ] [ _accessors [ 1 ] ];
    }

    get timing ( )
    {
        return this._timing;
    }

    animate ( object, action )
    {
        // console.log ( 'object:', object );
        // console.log ( 'action:', action );

        // console.log ( 'object:', object.canvas );

        function _draw ( _timePassed )                  // as _timePassed goes from 0 to 2000, left gets values from 0px to 400px
        {
            switch ( action )
            {
                case 'rotate':

                    let _rotate = _timePassed / 10;

                    // console.log ( 'rotate:', _rotate );s

                    object.rotate ( _rotate );

                    break;
            }
        }


        let _start = Date.now ( );                      // remember start time

        let _timer = setInterval ( ( ) =>
        {

            let _timePassed = Date.now ( ) - _start;    // how much time passed from the start?


            console.log ( 'timePassed:', _timePassed );


            if ( _timePassed >= 2000 )
            {
                clearInterval ( _timer );               // finish the animation after 2 seconds

                return;
            }


            _draw ( _timePassed );                      // draw the animation at the moment _timePassed

        }, 20 );
    }
}
