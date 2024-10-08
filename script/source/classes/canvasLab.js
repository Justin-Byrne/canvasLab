/**
 * @class           {Object} canvasLab                          CanvasLab core application
 * @property        {Object} canvas                             Main canvas context
 * @property        {Array}  canvases                           Array of all canvas contexts
 * @property        {string} font                               Main font type
 */
class canvasLab
{
    _canvas   = undefined;
    _canvases = undefined;
    _font     = undefined;

    _rotation = 0;

    #application = new Application;

    /**
     * Create a canvasLab object
     * @property        {string} canvasId                           Canvas identifier
     */
    constructor ( canvas )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isInDom = VALIDATION.isInDom;

        this._init ( );

        this.canvas = canvas;
    }

    ////    [ CANVAS ]  ////////////////////////////////////

        /**
         * Set canvas value
         * @public
         * @function
         * @param           {string} value                              Canvas identifier
         */
        set canvas ( value )
        {
            this._canvas = ( this._isInDom ( value ) ) ? document.getElementById ( value ).getContext ( '2d' )

                                                       : this._canvas;
        }

        /**
         * Get canvas value
         * @readOnly
         * @function
         * @return          {string}                                    Canvas identifier
         * @see             {@link discrete.canvas}
         */
        get canvas ( )
        {
            return this._canvas.canvas.id;
        }

    ////    [ CANVASES ]    ////////////////////////////////

        /**
         * Set canvas value
         * @public
         * @function
         * @param           {string} canvasId                           Canvas identifier
         */
        set canvases ( canvasId )
        {
            let _canvas = ( this._isInDom ( canvasId ) ) ? document.getElementById ( canvasId ).getContext ( '2d' )

                                                         : undefined;


            if ( this._canvases == undefined )

                this._canvases = new Array;


            if ( _canvas != undefined )

                this._canvases.push ( _canvas );
        }

        /**
         * Set canvas value
         * @readOnly
         * @function
         * @return          {Array}                                     Array of canvas contexts
         */
        get canvases ( )
        {
            return this._canvases;
        }

    ////    [ FONT ]    ////////////////////////////////////

        /**
         * Set main font type
         * @public
         * @function
         * @param           {string} font                               Main font type
         */
        set font ( value )
        {
            this._font = ( typeof value === 'string' ) ? value : this._font;
        }

        /**
         * Get main font type
         * @readOnly
         * @function
         * @return          {string} font                               Main font type
         */
        get font ( )
        {
            return this._canvas.font;
        }

    ////    [ ROTATION ]    ////////////////////////////////

        set rotation ( value )
        {
            this._rotation = value;
        }

        get rotation ( )
        {
            return this._rotation;
        }

    ////    [ APPLICATION ]    /////////////////////////////

        /**
         * Returns this application
         * @readOnly
         * @function
         * @return          {Application}                               Canvas Lab application
         */
        get application ( )
        {
            return this.#application;
        }

    ////    DOM    /////////////////////////////////////////

        /**
         * Get dom details
         * @readOnly
         * @function
         * @return          {Object}                                    DOM details
         */
        get dom ( )
        {
            return this.#application.dom;
        }

    ////    VALIDATION  ////////////////////////////////////

        /**
         * Returns whether the passed value is an element id within the DOM
         * @private
         * @function
         * @param           {string} value                              Element id
         * @return          {boolean}                                   True || False
         * @see             {@link VALIDATION.isInDom}
         */
        _isInDom  ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        /**
         * Returns the center X & Y coordinates of the present canvas
         * @public
         * @function
         * @return          {Point}                                     Center X & Y coordinates
         */
        get center ( )
        {
            return new Point (

                           this._canvas.canvas.clientWidth  / 2,                // X coordinate

                           this._canvas.canvas.clientHeight / 2                 // Y coordinate
                       );
        }

        /**
         * Clears canvas
         * @private
         * @function
         */
        clearCanvas ( )
        {
            let _canvas = document.getElementById ( this.canvas );


            if ( _canvas )  // @TODO: identify why this check has to take place periodically !

                this._canvas.clearRect ( 0, 0, _canvas.width, _canvas.height );
        }

        /**
         * Animate the transition passed
         * @property        {Transition} transition                     Transition animation
         */
        animate ( transition = { object, timing, period, change } )
        {
            if ( transition )

                this.#application.animation = transition;
        }

    ////    INITIALIZE  ////////////////////////////////////

        /**
         * CanvasLab initializer
         * @private
         * @function
         */
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
