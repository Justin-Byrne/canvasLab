"use strict";

class Master
{
    _page = undefined;


    constructor ( ) { }

    ////    [ PAGE ]    ////////////////////////////////////

        set page ( value )
        {
            this._page = ( typeof _value === 'string' ) ? value : this._page;
        }

        get page ( )
        {
            return this._page;
        }
}

if ( typeof Master === 'function' && typeof window.master  === 'undefined' )

    window.master = new Master ( );
