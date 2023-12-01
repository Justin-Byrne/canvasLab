class Processing
{
    #config =
    {
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

    ////    UTILITIES   ////////////////////////////////////

        // setState ( canvasId )
        // {
        //     this.#post.canvas.state = this._dom.canvases [ canvasId ].toDataURL ( );

        //     this.clear ( canvasId );


        //     if ( ! this._isInDom ( 'saved-state' ) )
        //     {
        //         let _element = document.createElement ( 'img' );

        //             _element.src   = this.#post.canvas.state;

        //             _element.id    = 'saved-state';

        //             _element.style = 'position: absolute';


        //             document.getElementById ( canvasId ).parentNode.insertBefore ( _element, document.getElementById ( canvasId ).nextElementSibling );
        //     }
        //     else

        //         console.warn ( `"saved-state" does not exist !` );
        // }
}
