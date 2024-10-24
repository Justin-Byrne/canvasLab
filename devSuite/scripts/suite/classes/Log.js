/**
 * @class           {Object} Log                        Log class
 * @property        {string} entries                    Log entries
 */
class Log
{
    _entries = new Array;

    constructor ( )
    {
        this.entry ( 'CREATION' );
    }

    ////    PROPERTIES    //////////////////////////////////////////////////////

        ////    [ ENTRIES ]    /////////////////////////////

            /**
             * Gets entries
             * @public
             * @function
             * @return          {string}                            Page's entries
             */
            get entries ( )
            {
                return this._entries;
            }

    ////    [ UTILITIES ]    ///////////////////////////////////////////////////

        ////    PRIVATE    /////////////////////////////////

            /**
             * Returns a current timestamp
             * @private
             * @function
             * @return          {string}                            Timestamp
             */
            _timestamp ( )
            {
                let _date = new Date ( );

                let _time = ( _date.getMonth        ( ) + 1 ) + "/"
                            + _date.getDate         ( ) + "/"
                            + _date.getFullYear     ( ) + " @ "
                            + _date.getHours        ( ) + ":"
                            + _date.getMinutes      ( ) + ":"
                            + _date.getSeconds      ( ) + ":"
                            + _date.getMilliseconds ( );


                return _time;
            }

        ////    PUBLIC    //////////////////////////////////

            /**
             * Sets a single entry with the passed message param
             * @public
             * @function
             * @param           {string} message                    Message for log entry
             */
            entry ( message )
            {
                let _timestamp = `[ ${this._timestamp ( )} ]`;

                let _entry     = ( typeof message === 'string' ) ? `${_timestamp} => ${message}`

                                                                 : _timestamp;


                this._entries.push ( _entry );
            }

            /**
             * View all entries
             * @public
             * @function
             */
            view ( )
            {
                for ( let _entry of this.entries )

                    console.log ( _entry );
            }
}
