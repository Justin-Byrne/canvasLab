/**
 * Shared utility functions
 * @namespace       DEBUG
 *
 */
const DEBUG =
{
    /**
     * Sets canvas's aspect ratio
     * @public
     * @memberof DEBUG
     * @function
     * @param           {string} canvasId                           Canvas identifier
     */
    setCanvasStyleToHTML ( canvasId )
    {
        let _canvas = document.getElementById ( canvasId );

            [ _canvas.style.width, _canvas.style.height ]  = [ `${_canvas.width}px`, `${_canvas.height}px` ];
    },

    /**
     * Sets canvas's max aspect ratio
     * @public
     * @memberof DEBUG
     * @function
     * @param           {string} canvasId                           Canvas identifier
     */
    setCanvasStyleToHTMLMAX ( canvasId )
    {
        let _canvas = document.getElementById ( canvasId );

            _canvas.style.width = _canvas.style.height = '100%';
    },

    /**
     * Fixes pixel blur
     * @public
     * @memberof DEBUG
     * @function
     * @param           {string} canvasId                           Canvas identifier
     */
    fixBlur ( canvasId )
    {
        let _dpi    = window.devicePixelRatio;

        let _canvas = document.getElementById ( canvasId );


        let style_height = +getComputedStyle ( _canvas ).getPropertyValue ( "height" ).slice ( 0, -2 );      //get CSS height, the + prefix casts it to an integer, the slice method gets rid of "px"

        let style_width  = +getComputedStyle ( _canvas ).getPropertyValue ( "width"  ).slice ( 0, -2 );


        _canvas.setAttribute ( 'height', style_height * _dpi );    //scale the canvas

        _canvas.setAttribute ( 'width',  style_width  * _dpi );
    }
}
