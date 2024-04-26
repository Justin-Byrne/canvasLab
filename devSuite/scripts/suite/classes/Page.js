/**
 * @class           {Object} Page                       Page for parsing page types
 * @property        {string} type                       Page's type
 * @property        {string} group                      Page's group
 * @property        {string} subgroup                   Page's subgroup
 */
class Page
{
    _type     = undefined;
    _group    = undefined;
    _subgroup = undefined;

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
         * @public
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
         * @public
         * @name group
         * @function
         * @return          {string}                            Page's group
         */
        get group ( )
        {
            return this._group;
        }

    ////    [ SUBGROUP ]    ////////////////////////////////////////////////////

        /**
         * Sets subgroup
         * @public
         * @name subgroup
         * @function
         * @param           {string} value                      Page's subgroup
         */
        set subgroup ( value )
        {
            this._subgroup = ( typeof value === 'string' ) ? value : this._subgroup;
        }

        /**
         * Gets subgroup
         * @public
         * @name subgroup
         * @function
         * @return          {string}                            Page's subgroup
         */
        get subgroup ( )
        {
            return this._subgroup;
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


            if ( _match || typeof button === 'object' )
            {
                let _button   = _match.replace ( '#', '' );

                this.group    = _button.match ( new RegExp ( /(Object|Subject|Animation)/ ) ) [ 0 ].toLowerCase ( );

                this.type     = _button.replace ( this.group.toTitleCase ( ), '' ).toLowerCase ( );

                this.subgroup = ( this.group === 'animation' ) ? 'easing' : undefined;
            }
        }
}
