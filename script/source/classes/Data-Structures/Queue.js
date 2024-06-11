/**
 * @class           {Object} Queue                              Queue object
 * @property        {Array}  entries                            Array of entries
 * @property        {number} [index=0]                          Current index
 * @property        {Object} entry                              Current entry
 */
class Queue
{
    _entries = undefined;
    _index   = 0;
    _entry   = undefined;
    
    /**
     * Create a Queue object
     * @property        {Array}  entries                            Array of entries
     */
    constructor ( entries )
    {
        this.entries = entries;
    }

    ////    [ ENTRIES ]    /////////////////////////////////

        /**
         * Set entries
         * @public
         * @function
         * @param           {Array} value                               Array of entries
         */
        set entries ( value )
        {
            this._entries = Array.isArray ( value ) ? value : this._entries;
        }

        /**
         * Get entries
         * @public
         * @function
         * @return          {Array}                                     Array of entries
         */
        get entries ( )
        {
            this._entries;
        }
    
    ////    [ ENTRY ]    ///////////////////////////////////

        /**
         * Get current entry
         * @public
         * @function
         * @return          {Object}                                    Current entry
         */
        get entry ( )
        {
            this._entry;
        }

    ////    UTILITIES    ///////////////////////////////////

        /**
         * Returns next entry; begins with [ 0 ], or first entry
         * @public
         * @function
         * @return          {Object}                                    Next entry
         */
        get next ( )
        {
            let _entry = this._entries [ this._index ];


            if ( this._index === this._entries.length - 1 )

                this._index = 0;

            else

                this._index = this._index + 1;


            return _entry;
        }

        /**
         * Resets index to 0
         * @public
         * @function
         */
        get reset ( )
        {
            this._index = 0;
        }
}
