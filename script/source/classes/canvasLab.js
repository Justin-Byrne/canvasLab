class canvasLab
{
    _canvas   = undefined;
    _canvases = undefined;
    _font     = undefined;
    _state    = undefined;

    #application = new Application;

    #processing  = new Processing;


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
         * @param           {number}   flow.duration            Duration of animation
         * @param           {Function} flow.timing              Timing function
         * @param           {Function} flow.draw                Draw function
         */
        animate ( flow = { duration, timing, draw } )
        {
            this.#application.animation = flow;
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
