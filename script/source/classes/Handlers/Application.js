class Application
{
    #animations =
    {
        id: 0,
        cache: { }
    };

    constructor ( )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isInDom = VALIDATION.isInDom;
    }

    /**
     * _app                                                     Base application configurations
     * @type                        {Object}
     */
    #app =
    {
        debug: false,
        about:
        {
            Author:    'Justin Don Byrne',
            Created:   'October, 2 2023',
            Library:   'Canvas Lab',
            Updated:   'May, 10 2024',
            Version:   '0.3.48',
            Copyright: 'Copyright (c) 2023 Justin Don Byrne'
        }
    }

    /**
     * _dom                                                         DOM Elements
     * @type                        {Object}
     */
    #dom =
    {
        canvases:  undefined,
        contexts:  { },
        window:
        {
            width:     window.innerWidth  - 18,
            height:    window.innerHeight -  4,
            xCenter: ( window.innerWidth  /  2 ),
            yCenter: ( window.innerHeight /  2 )
        },
        mouse:
        {
            start:  undefined,
            end:    undefined,
            down:   false,
            extant: -1,
            offset: { x: 0, y: 0 }
        }
    }

    ////    [ CANVAS ]  ////////////////////////////////////

        set canvas ( value )
        {
            let _canvases = document.getElementsByTagName ( 'canvas' );


            if ( this.#dom.canvases === undefined )
            {
                this.#dom.canvases = new Object ( );

                for ( let _canvas of _canvases )
                {
                    this.#dom.canvases [ _canvas.id ] = document.getElementById ( _canvas.id );

                    this.#dom.contexts [ _canvas.id ] = document.getElementById ( _canvas.id ).getContext ( "2d" );
                }
            }

            if ( this._isInDom ( value ) )
            {
                this.#dom.main.canvas  = this.#dom.canvases [ value ];

                this.#dom.main.context = this.#dom.contexts [ value ];
            }
            else

                console.warn ( `"${value}" does not exist !` );
        }

        get canvas ( )
        {
            return this.#dom.main.context;
        }

    ////    [ ABOUT ]   ////////////////////////////////////

        get about ( )
        {
            return this.#app.about;
        }

    ////    VALIDATION  ////////////////////////////////////

        _isInDom ( elementId ) { }

    ////    UTILITIES   ////////////////////////////////////

        clear ( canvasId )
        {
            this._dom.contexts [ canvasId ].clearRect (
                0,                                          // X Coordinate
                0,                                          // Y Coordinate
                this._dom.canvases [ canvasId ].width,      // Rectangle's Width
                this._dom.canvases [ canvasId ].height      // Rectangle's Height
            );
        }

    ////    MEDIATOR    ////////////////////////////////////

        /**
         * Creates a new animation instance
         * @param           {Object}   flow                     Contains timing, draw, & duration values & functions
         * @param           {number}   flow.duration            Duration of animation
         * @param           {Function} flow.timing              Timing function
         * @param           {Function} flow.draw                Draw function
         */
        set animation ( flow = { duration, timing, draw } )
        {
            let _animation = new Animation ( flow.duration, flow.timing, flow.draw );

                _animation.animate ( );


            this.#animations.cache [ this.#animations.id++ ] = _animation;
        }
}

////    INITIALIZATION  ////////////////////////////////////////////////////////

/**
 * Initiates canvasLab
 * @param           {string} [canvas]                   Canvas identifier
 */
let initCanvasLab = ( canvas ) =>
{
    if ( typeof canvasLab === 'function' && typeof window.canvaslab  === 'undefined' )

        window.canvaslab = new canvasLab ( canvas );
}
