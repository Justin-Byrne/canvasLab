"use strict";

class Master
{
    _page  = undefined;
    _group = undefined;

    constructor ( ) { }

    ////    [ PAGE ]    ////////////////////////////////////

        set page ( value )
        {
            this._page = ( typeof value === 'string' ) ? value : this._page;
        }

        get page ( )
        {
            return this._page;
        }

    ////    [ GROUP ]    ///////////////////////////////////

        set group ( value )
        {
            this._group = ( typeof value === 'string' || value === undefined ) ? value : this._group;
        }

        get group ( )
        {
            return this._group;
        }
}

if ( typeof Master === 'function' && typeof window.master  === 'undefined' )

    window.master = new Master;
