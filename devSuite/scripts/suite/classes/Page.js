/**
 * @class           {Object} Page                       Page for parsing page types
 * @property        {string} type                       Page's type
 * @property        {string} group                      Page's group
 * @property        {string} handler                    Page's handler
 */
class Page
{
    _type     = undefined;
    _group    = undefined;
    _handler  = undefined;

    /**
     * Creates a page
     * @property        {HTMLElement} button                HTML DOM Element
     */
    constructor ( button )
    {
        if ( button ) this._setPropertiesBy ( button )
    }

    ////    [ PAGE ]    ////////////////////////////////////////////////////////

        /**
         * Sets type
         * @public
         * @name type
         * @function
         * @param           {string} value                      Page's type
         */
        set type ( value )
        {
            this._type = ( typeof value === 'string' ) ? value : this._type;
        }

        /**
         * Gets type
         * @readOnly
         * @name type
         * @function
         * @return          {string}                            Page's type
         */
        get type ( )
        {
            return this._type;
        }

    ////    [ GROUP ]    ///////////////////////////////////////////////////////

        /**
         * Sets group
         * @public
         * @name group
         * @function
         * @param           {string} value                      Page's group
         */
        set group ( value )
        {
            this._group = ( typeof value === 'string' ) ? value : this._group;
        }

        /**
         * Gets group
         * @readOnly
         * @name group
         * @function
         * @return          {string}                            Page's group
         */
        get group ( )
        {
            return this._group;
        }

    ////    [ HANDLER ]    /////////////////////////////////////////////////////

        /**
         * Sets handler
         * @public
         * @name handler
         * @function
         * @param           {string} value                      Page's handler
         */
        set handler ( value )
        {
            this._handler = ( typeof value === 'string' ) ? value : this._handler;
        }

        /**
         * Gets handler
         * @readOnly
         * @name handler
         * @function
         * @return          {string}                            Page's handler
         */
        get handler ( )
        {
            return this._handler;
        }

    ////    UTILITIES    ///////////////////////////////////////////////////////

        /**
         * Sets all properties by the passed 'button' param
         * @private
         * @name _setPropertiesBy
         * @function
         * @param           {HTMLElement} button                HTML DOM Element
         */
        _setPropertiesBy ( button )
        {
            let _match = button.href.match ( /#(\w+)/g ) [ 0 ];

            let _regex =
            {
                group:   new RegExp ( /(Object|Subject)/ ),

                handler: new RegExp ( /(Processing|Animation)/ )
            }


            if ( _match || typeof button === 'object' )
            {
                let _button   = _match.replace ( '#', '' );


                this.handler  = ( _regex.handler.test ( _button ) ) ? _button.match ( _regex.handler ) [ 0 ].toLowerCase ( ) : this.handler;

                this.group    = _button.match ( _regex.group ) [ 0 ].toLowerCase ( );

                this.type     = ( this.handler ) ? _button.replace ( this.group.toTitleCase ( ), '' ).replace ( this.handler.toTitleCase ( ), '' ).toLowerCase ( ) : _button.replace ( this.group.toTitleCase ( ), '' ).toLowerCase ( );
            }
        }
}
