/**
 * @class           {Object} Queue                              Queue object
 * @property        {Array}  entries                            Array of entries
 * @property        {number} [index=0]                          Current index
 * @property        {Object} entry                              Current entry
 */
class Queue
{
    _entries = new Array;
    _index   = 0;
    _entry   = undefined;
    
    #touched = false;

    /**
     * Create a Queue object
     * @property        {Array} entries                             Array of entries
     */
    constructor ( entries )
    {
        if ( Array.isArray ( entries ) )

            this.entries = entries;

        else

            for ( let _value of arguments )

                this.entry = _value;
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
            return this._entries;
        }
    
    ////    [ INDEX ]    ///////////////////////////////////

        /**
         * Get index
         * @readOnly
         * @function
         * @return          {number}                                    Current index value
         */
        get index ( )
        {
            return this._index;
        }

    ////    [ ENTRY ]    ///////////////////////////////////

        /**
         * Pushes in an entry
         * @public
         * @function
         */
        set entry ( value )
        {
            if ( typeof value === 'object' || typeof value === 'function' )

                this._entries.push ( value );
        }

        /**
         * Get current entry
         * @public
         * @function
         * @return          {Object}                                    Current entry
         */
        get entry ( )
        {
            return this._entry;
        }

    ////    VALIDATION    //////////////////////////////////

        /**
         * Returns whether this queue is at its end
         * @public
         * @function
         * @return          {boolean}                                   True || False
         */
        get isEnd ( )
        {
            return ( this.#touched  &&  this._index === 0 );
        }

        /**
         * Returns whether this queue is on its last element
         * @public
         * @function
         * @return          {boolean}                                   True || False
         */
        get isLast ( )
        {
            return ( ( this._entries.length - 1 ) === this._index );
        }

        /**
         * Returns whether this queue is set, or populated
         * @public
         * @function
         * @return          {boolean}                                   True || False
         */
        get isSet ( )
        {
            return ( this._entries.length > 0 );
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
            this.#touched = true;


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
            [ this._index, this.#touched ] = [ 0, false ];
        }
}
