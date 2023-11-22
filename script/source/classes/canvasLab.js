class canvasLab
{
    _application = new Application;
    _animations  = [ ];

    _canvas   = undefined;
    _canvases = undefined;
    _font     = undefined;
    _state    = undefined;

    #config =
    {
        animation:
        {
            duration: 1500,         // Default: 1500
            timing:   undefined,    // Note: defined at creation
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
            },
        },
        processing:
        {
            pre: undefined,
            post:
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
        }
    }

    constructor ( canvas )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isInDom = VALIDATION.isInDom;

        this._init ( );

        this.canvas = canvas;
    }

    ////    [ CANVAS ]  ////////////////////////////////////

        set canvas ( value )
        {
            this._canvas = ( this._isInDom ( value ) )

                                ? document.getElementById ( value ).getContext ( '2d' )

                                : this._canvas;
        }

        get canvas ( )
        {
            return this._canvas.canvas.id;
        }

    ////    [ CANVASES ]    ////////////////////////////////

        set canvases ( value )
        {
            let _canvas = ( this._isInDom ( value ) )

                              ? document.getElementById ( value ).getContext ( '2d' )

                              : undefined;


            if ( this._canvases == undefined )

                this._canvases = new Array;


            if ( _canvas != undefined )

                this._canvases.push ( _canvas );
        }

        get canvases ( )
        {
            return this._canvases;
        }

    ////    [ FONT ]    ////////////////////////////////////

        set font ( value )
        {
            this._font = ( typeof value === 'string' ) ? value : this._font;
        }

        get font ( )
        {
            return this._canvas.font;
        }

    ////    [ STATE ]   ////////////////////////////////////

        set state ( canvas )
        {
            let _canvas = (  ( canvas == undefined )  &&  ( this._canvas instanceof CanvasRenderingContext2D )  )

                              ? this.canvas

                              : canvas;


            window.app.setState ( _canvas );
        }

        get state ( )
        {
            window.app.getState ( _canvas );
        }

    ////    VALIDATION  ////////////////////////////////////

        _isInDom ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        clear ( canvas )
        {
            console.log ( 'clear' );
        }

        /**
         * Animates onscreen objects in accordance with passed param values
         * @param           {Object}   flow                     Contains timing, draw, & duration values & functions
         * @param           {Function} flow.timing              Timing function
         * @param           {Function} flow.draw                Draw function
         * @param           {number}   flow.duration            Duration of animation
         */
        animate ( flow = { timing, draw, duration } )
        {
            let _start = performance.now ( );


            requestAnimationFrame (
                function animate ( time )
                {
                    let _timeFraction =  ( time - _start ) / flow.duration;     // timeFraction goes from 0 to 1


                    if  ( _timeFraction > 1 )

                        _timeFraction = 1;


                    let _progress = flow.timing ( _timeFraction );              // calculate the current animation state


                    flow.draw ( _progress );                                    // draw it


                    if  ( _timeFraction < 1 )

                        requestAnimationFrame ( animate );
                }
            );
        }

    ////    INITIALIZE  ////////////////////////////////////

        _init ( )
        {
            let _canvases = document.getElementsByTagName ( 'canvas' );


            if ( typeof _canvases === 'object' && this._canvases === undefined )

                for ( let _id in _canvases )

                    if ( _id == 0 )

                        this.canvas   = _canvases [ _id ].id;

                    else

                        this.canvases = _canvases [ _id ].id;
        }
}
