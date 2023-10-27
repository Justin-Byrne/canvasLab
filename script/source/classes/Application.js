class Application
{
    /**
     * _app                                                     Base application configurations
     * @type                        {Object}
     */
    #_app =
    {
        debug: false,
        windows:
        {
            about: false
        },
        about:
        {
            Author:    'Justin Don Byrne',
            Created:   'October, 2 2023',
            Library:   'Canvas Lab',
            Updated:   'Oct, 27 2023',
            Version:   '0.1.2',
            Copyright: 'Copyright (c) 2023 Justin Don Byrne'
        }
    }

    /**
     * _dom                                                         DOM Elements
     * @type                        {Object}
     */
    #_dom =
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
        main:
        {
            canvas:  undefined,
            context: undefined
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
     * _post()                                                      Post processing data
     * @type                        {Object}
     */
    #_post =
    {
        canvas:
        {
            state: undefined
        },
        line:
        {
            prior: { },
            cache: { }
        },
        redraw: { }
    }

    ////    [ CANVAS ]  ////////////////////////////////////

        set canvas ( value )
        {
            let _canvases = document.getElementsByTagName ( 'canvas' );

            if ( this.#_dom.canvases === undefined )
            {
                this.#_dom.canvases = new Object ( );

                for ( let _canvas of _canvases )
                {
                    this.#_dom.canvases [ _canvas.id ] = document.getElementById ( _canvas.id );

                    this.#_dom.contexts [ _canvas.id ] = document.getElementById ( _canvas.id ).getContext ( "2d" );
                }
            }

            if ( this._isInDom ( value ) )
            {
                this.#_dom.main.canvas  = this.#_dom.canvases [ value ];

                this.#_dom.main.context = this.#_dom.contexts [ value ];
            }
            else

                console.warn ( `"${value}" does not exist !` );
        }

        get canvas ( )
        {
            return this.#_dom.main.context;
        }

    ////    [ ABOUT ]   ////////////////////////////////////

        get about ( )
        {
            return this.#_app.about;
        }

    ////    VALIDATION  ////////////////////////////////////

        _isInDom ( elementId )
        {
            return ( document.getElementById ( elementId ) != null );
        }

    ////    UTILITIES   ////////////////////////////////////

        setState ( canvasId )
        {
            this.#_post.canvas.state = this._dom.canvases [ canvasId ].toDataURL ( );

            this.clear ( canvasId );


            if ( ! this._isInDom ( 'saved-state' ) )
            {
                let _element = document.createElement ( 'img' );

                    _element.src   = this.#_post.canvas.state;

                    _element.id    = 'saved-state';

                    _element.style = 'position: absolute';


                    document.getElementById ( canvasId ).parentNode.insertBefore ( _element, document.getElementById ( canvasId ).nextElementSibling );
            }
            else

                console.warn ( `"saved-state" does not exist !` );
        }

        clear ( canvasId )
        {
            this._dom.contexts [ canvasId ].clearRect (
                0,                                          // X Coordinate
                0,                                          // Y Coordinate
                this._dom.canvases [ canvasId ].width,      // Rectangle's Width
                this._dom.canvases [ canvasId ].height      // Rectangle's Height
            );
        }
}

////    INITIALIZATION  ////////////////////////////////////////////////////////

let initCanvasLab = ( canvas ) =>
{
    if ( typeof canvasLab === 'function' && typeof window.canvaslab  === 'undefined' )

        window.canvaslab = new canvasLab ( canvas );
}
