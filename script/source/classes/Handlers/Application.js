/**
 * @class           {Object}   Application                      Application handler
 */
class Application
{
    /**
     * Application configurations & details
     * @type            {Object}
     * @property        {boolean} debug                             Whether to debug application
     * @property        {Object}  about                             About properties
     * @property        {Object}  about.Author                      Author of application
     * @property        {Object}  about.Created                     Date originally created
     * @property        {Object}  about.Library                     Library name
     * @property        {Object}  about.Updated                     Date last updated
     * @property        {Object}  about.Version                     Current versions
     * @property        {Object}  about.Copyright                   Copyright
     */
    #config =
    {
        debug: false,
        about:
        {
            Author:    'Justin Don Byrne',
            Created:   'October, 2 2023',
            Library:   'Canvas Lab',
            Updated:   'Jul, 01 2024',
            Version:   '0.3.78',
            Copyright: 'Copyright (c) 2023 Justin Don Byrne'
        }
    }

    /**
     * Document object model data
     * @type            {Object}
     * @property        {Object} canvases                           List of canvases
     * @property        {Object} contexts                           List of canvas contexts
     * @property        {Object} window                             Window properties
     * @property        {number} window.width                       Window's width
     * @property        {number} window.height                      Window's height
     * @property        {Object} window.center                      Window's center X & Y coordinates
     * @property        {number} window.center.x                    X-axis coordinate
     * @property        {number} window.center.y                    Y-axis coordinate
     * @property        {Object} mouse                              Mouse properties
     */
    #dom =
    {
        canvases:  undefined,
        contexts:  { },
        window:
        {
            width:     window.innerWidth  - 18,
            height:    window.innerHeight -  4,
            center:
            {
                x: ( ( window.innerWidth  - 18 ) /  4 ),
                y: ( ( window.innerHeight - 4  ) /  2 )
            }
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

    /**
     * Creates an application handler
     */
    constructor ( )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isInDom = VALIDATION.isInDom;
    }

    ////    [ CANVAS ]  ////////////////////////////////////

        /**
         * Set canvas element
         * @public
         * @function
         * @param           {string} value                              Element Id
         */
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

        /**
         * Get canvas element
         * @public
         * @function
         * @return          {HTMLCanvasElement}                         Canvas context
         */
        get canvas ( )
        {
            return this.#dom.main.context;
        }

    ////    [ ABOUT ]   ////////////////////////////////////

        /**
         * Get application details
         * @readOnly
         * @function
         * @return          {Object}                                    Application details
         */
        get about ( )
        {
            return this.#config.about;
        }

    ////    DOM    /////////////////////////////////////////

        get dom ( )
        {
            return this.#dom;
        }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link Validation.isInDom}
         */
        _isInDom ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Returns center ( x & y coordinates ) for the present window
         * @private
         * @function
         * @return          {Object}                                    X & Y Coordinates
         */
        get _center ( )
        {
            let _center =
            {
                x: ( ( window.innerWidth  - 18 ) /  4 ),

                y: ( ( window.innerHeight - 4  ) /  2 )
            }


            return _center;
        }

        /**
         * Creates a new animation instance
         * @param           {Object}   flow                             Contains timing, draw, & duration values & functions
         * @param           {number}   flow.duration                    Duration of animation
         * @param           {Function} flow.timing                      Timing function
         * @param           {Function} flow.draw                        Draw function
         */
        set animation ( flow = { duration, timing, draw } )
        {
            let _animation = new Animation ( flow.duration, flow.timing, flow.draw );

                _animation.animate ( );
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
